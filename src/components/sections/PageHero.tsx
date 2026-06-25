import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/aeo/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import type { IconKey } from "@/lib/types";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { name: string; url: string }[];
  icon?: IconKey;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  icon,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-16 pt-12 text-white sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-[120px]" />
      {!image && (
        <div className="pointer-events-none absolute right-10 top-1/2 -z-10 h-56 w-56 clip-hex bg-gradient-to-br from-brand/20 to-transparent" />
      )}

      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="light" className="mb-10" />}
        <div
          className={cn(
            image && "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14",
          )}
        >
          <div className={cn("flex flex-col gap-5", !image && "max-w-3xl")}>
            {icon && (
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-400 ring-1 ring-white/15">
                <Icon name={icon} className="h-7 w-7" />
              </span>
            )}
            {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
            <h1 className="text-[clamp(2.1rem,5vw,3.6rem)] text-white">{title}</h1>
            {description && (
              <p className="max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
            )}
            {children}
          </div>

          {image && (
            <div className="relative">
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 clip-hex bg-brand/30" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
