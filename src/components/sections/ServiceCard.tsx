import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  variant = "dark",
}: {
  service: Service;
  index: number;
  variant?: "dark" | "light";
}) {
  const num = String(index + 1).padStart(2, "0");
  const dark = variant === "dark";

  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300",
        dark
          ? "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-brand/60 hover:bg-white/[0.06]"
          : "border-line bg-white shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]",
      )}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/25" />

      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-xl transition-colors",
            dark ? "bg-white/5 text-white group-hover:bg-brand group-hover:text-white" : "bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white",
          )}
        >
          <Icon name={service.icon} className="h-7 w-7" />
        </span>
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border font-display text-sm",
            dark ? "border-white/20 text-white/80" : "border-brand-200 text-brand",
          )}
        >
          {num}
        </span>
      </div>

      <h3 className={cn("mt-6 font-sans text-xl font-semibold", dark ? "text-white" : "text-ink")}>
        {service.navLabel}
      </h3>
      <p className={cn("mt-3 flex-1 text-[0.95rem] leading-relaxed", dark ? "text-white/60" : "text-muted")}>
        {service.cardDescription}
      </p>

      <span className={cn("mt-6 inline-flex items-center gap-2 text-sm font-medium", dark ? "text-sky-400" : "text-brand")}>
        Mehr erfahren
        <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" aria-hidden="true">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
