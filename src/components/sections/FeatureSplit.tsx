import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FeatureSplitProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  cta?: { label: string; href: string };
  className?: string;
};

export function FeatureSplit({
  eyebrow,
  title,
  description,
  paragraphs,
  bullets,
  image,
  imageAlt,
  imageSide = "right",
  cta,
  className,
}: FeatureSplitProps) {
  return (
    <section className={cn("py-24 sm:py-28", className)}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(imageSide === "left" && "lg:order-2")}>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
            {paragraphs?.map((p, i) => (
              <p key={i} className="mt-5 text-[1.02rem] leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {bullets && bullets.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.97rem] text-ink/85">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-brand" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" className="fill-brand-50" />
                      <path d="m6 10 2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-9">
                <Button href={cta.href} variant="outline" withArrow>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>

          <div className={cn("relative", imageSide === "left" && "lg:order-1")}>
            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 clip-hex bg-brand/10" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card-hover)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
