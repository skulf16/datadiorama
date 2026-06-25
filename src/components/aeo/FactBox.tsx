import type { Fact } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Faktenbox „Auf einen Blick" – kompakte, maschinenlesbare Schlüsselfakten.
 * Optimiert für Featured Snippets und KI-Antwortsysteme (klare dt/dd-Paare).
 */
export function FactBox({
  facts,
  title = "Auf einen Blick",
  className,
}: {
  facts: Fact[];
  title?: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]",
        className,
      )}
      aria-label={title}
    >
      <div className="flex items-center gap-2.5 border-b border-line bg-brand-50/60 px-6 py-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
            <path
              d="M10 2.5 3 6v4c0 3.3 2.8 5.7 7 7 4.2-1.3 7-3.7 7-7V6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="m7.5 10 1.7 1.7L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="font-sans text-base font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <dl className="divide-y divide-line">
        {facts.map((fact, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-4 px-6 py-3.5 sm:grid-cols-[40%_1fr]">
            <dt className="text-sm font-medium text-muted">{fact.label}</dt>
            <dd className="text-sm font-semibold text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
