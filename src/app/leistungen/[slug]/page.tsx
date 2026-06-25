import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { FactBox } from "@/components/aeo/FactBox";
import { ServicePartners } from "@/components/sections/ServicePartners";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { KeyTakeaways } from "@/components/aeo/KeyTakeaways";
import { Faq } from "@/components/aeo/Faq";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Icon } from "@/components/icons/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import {
  SERVICES,
  getService,
  getRelatedServices,
  getServicesSorted,
} from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
    image: service.image,
  });
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const allSorted = getServicesSorted();

  // Erste Sektion als Bild-Text-Block (FeatureSplit), Rest als Fließtext.
  const [firstSection, ...restSections] = service.sections;
  const hasSplit = Boolean(firstSection && service.image2);
  const proseSections = hasSplit ? restSections : service.sections;

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <PageHero
        eyebrow={service.navLabel}
        title={service.title}
        description={service.tagline}
        icon={service.icon}
        image={service.image}
        imageAlt={`${service.navLabel} – ${service.tagline}`}
        breadcrumbs={[
          { name: "Leistungen", url: "/leistungen" },
          { name: service.navLabel, url: `/leistungen/${service.slug}` },
        ]}
      />

      {/* Einleitung + Faktenbox */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <p className="text-xl leading-relaxed text-ink/90">{service.intro}</p>
              <KeyTakeaways items={service.keyTakeaways} className="mt-10" />
            </div>
            <div className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-28">
                <FactBox facts={service.facts} />
                <ServicePartners partnerKeys={service.partnerKeys} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Erste Sektion als Bild-Text-Block */}
      {hasSplit && firstSection && (
        <FeatureSplit
          eyebrow="Im Detail"
          title={firstSection.heading}
          paragraphs={firstSection.body.split("\n\n")}
          bullets={firstSection.bullets}
          image={service.image2 as string}
          imageAlt={`${service.navLabel} bei datadiorama`}
          imageSide="left"
        />
      )}

      {/* Weitere Abschnitte als Fließtext */}
      {proseSections.length > 0 && (
        <section className="bg-surface py-20 sm:py-24">
          <Container size="narrow">
            <div className="prose-dd">
              {proseSections.map((sec, i) => (
                <div key={i}>
                  <h2>{sec.heading}</h2>
                  <Paragraphs text={sec.body} />
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Vorteile */}
      {service.benefits.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <SectionHeading
              align="center"
              eyebrow="Ihre Vorteile"
              title={`Was Ihnen ${service.navLabel} bringt`}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Icon name={b.icon ?? service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{b.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Prozess */}
      {service.process && service.process.length > 0 && (
        <section className="bg-navy py-20 text-white sm:py-24">
          <Container>
            <SectionHeading align="center" tone="light" eyebrow="So gehen wir vor" title="In wenigen Schritten zur Lösung" />
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-3xl text-sky-400">0{i + 1}</span>
                  <h3 className="mt-3 font-sans text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container size="narrow">
            <Faq items={service.faq} title={`Häufige Fragen zu ${service.navLabel}`} />
          </Container>
        </section>
      )}

      {/* Verwandte Leistungen */}
      {related.length > 0 && (
        <section className="bg-surface py-20 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Passt dazu" title="Verwandte Leistungen" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ServiceCard
                  key={r.slug}
                  service={r}
                  index={allSorted.findIndex((s) => s.slug === r.slug)}
                  variant="light"
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection
        title={`Interesse an ${service.navLabel}?`}
        subtitle="Vereinbaren Sie ein kostenloses Erstgespräch – wir beraten Sie ehrlich und unverbindlich."
      />
    </>
  );
}
