import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PARTNERS, PARTNER_ORDER } from "@/data/partners";
import { cn } from "@/lib/utils";

// Einheitliche Anzeigehöhe der Logos; Breite wird aus dem Seitenverhältnis berechnet,
// damit next/image keine Aspect-Ratio-Warnung auslöst.
const LOGO_H = 56;

export function PartnerLogos({
  tone = "light",
  title = "Zertifizierte Partner & Technologien",
}: {
  tone?: "light" | "dark";
  title?: string;
}) {
  const dark = tone === "dark";
  const partners = PARTNER_ORDER.map((k) => PARTNERS[k]).filter((p) => p?.logo);

  return (
    <section className={cn("border-y py-14", dark ? "border-white/10 bg-navy-900" : "border-line bg-surface")}>
      <Container>
        <p className={cn("text-center font-mono text-xs uppercase tracking-[0.25em]", dark ? "text-white/40" : "text-muted-light")}>
          {title}
        </p>
        <div className="mt-9 flex flex-wrap items-stretch justify-center gap-4">
          {partners.map((p) => {
            const w = Math.round((LOGO_H * (p.logoWidth ?? 1)) / (p.logoHeight ?? 1));
            return (
              <div
                key={p.key}
                title={p.description}
                className={cn(
                  "flex h-24 items-center justify-center rounded-2xl border px-7 transition-all duration-300 hover:-translate-y-1",
                  dark
                    ? "border-white/10 bg-white hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]"
                    : "border-line bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
                )}
              >
                <Image
                  src={p.logo as string}
                  alt={`${p.name} – Partner von datadiorama`}
                  width={w}
                  height={LOGO_H}
                  unoptimized={p.logo?.endsWith(".svg")}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
