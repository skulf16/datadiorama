"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; c: string };

const COLORS = ["#5BB8FF", "#2EA3F2", "#9DC4FF", "#ffffff"];
const LINK_DIST = 155;
const MOUSE_DIST = 210;

/**
 * Animierte Netzwerk-Visualisierung als Hero-Hintergrund (Canvas).
 * Greift das Punkt-Cluster-Logo auf und gibt dem Header einen lebendigen,
 * "UniFi-haften" Charakter. Performant (rAF, DPR-Cap), pausiert im Hintergrund
 * und respektiert prefers-reduced-motion.
 */
export function HeroNetwork({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    function build() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.max(1, Math.floor(w * dpr));
      canvas!.height = Math.max(1, Math.floor(h * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(40, Math.min(130, Math.round((w * h) / 11000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 2 + 1.4,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx!.strokeStyle = `rgba(125,185,255,${(1 - d / LINK_DIST) * 0.72})`;
            ctx!.lineWidth = 1.1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_DIST) {
            ctx!.strokeStyle = `rgba(91,184,255,${(1 - d / MOUSE_DIST) * 0.85})`;
            ctx!.lineWidth = 1.2;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }
      // Knoten mit Glow zeichnen
      ctx!.shadowBlur = 9;
      ctx!.shadowColor = "rgba(46,163,242,0.9)";
      for (const a of nodes) {
        ctx!.beginPath();
        ctx!.fillStyle = a.c;
        ctx!.globalAlpha = a.c === "#ffffff" ? 1 : 0.95;
        ctx!.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;
      ctx!.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function onResize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
      if (reduce) frame();
    }
    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = e.clientY - rect.top >= 0 && e.clientY - rect.top <= h;
    }
    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(frame);
    }

    build();
    frame();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
