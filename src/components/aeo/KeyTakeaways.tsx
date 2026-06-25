import { cn } from "@/lib/utils";

/**
 * „Das Wichtigste in Kürze" – TL;DR-Block.
 * Liefert Suchmaschinen und KI-Systemen die Kernaussagen in extrahierbarer Form.
 */
export function KeyTakeaways({
  items,
  title = "Das Wichtigste in Kürze",
  className,
}: {
  items: string[];
  title?: string;
  className?: string;
}) {
  if (!items?.length) return null;
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/80 to-white p-6 sm:p-7",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M10 1.7v3M10 15.3v3M1.7 10h3M15.3 10h3M4.1 4.1l2.1 2.1M13.8 13.8l2.1 2.1M15.9 4.1l-2.1 2.1M6.2 13.8l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        <h2 className="font-sans text-base font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <ul className="grid gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink/85">
            <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" aria-hidden="true">
              <path d="m4 10.5 3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
