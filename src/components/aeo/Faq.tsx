import type { FaqItem } from "@/lib/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * FAQ-Sektion mit nativen <details>-Elementen (zugänglich, JS-frei, crawlbar)
 * und eingebettetem FAQPage-Schema für Rich Results & KI-Antworten.
 */
export function Faq({
  items,
  title = "Häufige Fragen",
  eyebrow = "FAQ",
  withSchema = true,
  className,
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  withSchema?: boolean;
  className?: string;
}) {
  if (!items?.length) return null;
  return (
    <section className={cn("scroll-mt-28", className)} aria-labelledby="faq-heading">
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <div className="mb-8 flex flex-col gap-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id="faq-heading" className="text-[clamp(1.7rem,3.5vw,2.6rem)]">
          {title}
        </h2>
      </div>
      <div className="grid gap-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-line bg-white px-6 py-1 transition-colors open:border-brand-200 open:bg-brand-50/30 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-sans text-[1.05rem] font-semibold text-ink">
              {item.question}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-transform duration-200 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="pb-5 pr-10 text-[0.98rem] leading-relaxed text-muted">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
