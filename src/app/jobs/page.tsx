import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { Icon } from "@/components/icons/Icon";
import { JOBS } from "@/data/jobs";
import { VALUES } from "@/data/team";
import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jobs & Karriere bei datadiorama",
  description:
    "Karriere im IT-Systemhaus: Aktuelle Stellenangebote bei datadiorama in Potsdam & Berlin – Systemadministration, Support, Vertrieb, Projektmanagement und Marketing. Jetzt bewerben!",
  path: "/jobs",
});

const perks = [
  "30 Tage Urlaub",
  "Flexibles Home-Office",
  "Faire Bezahlung",
  "Team-Events",
  "Weiterbildung & Zertifizierungen",
  "Familiäres Team",
];

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Jobs & Karriere"
        title="Mach IT mit uns besser"
        description="Wir sind ein familiäres Systemhaus mit klaren Werten und wachsen stetig. Finde die Stelle, die zu dir passt – und werde Teil eines Teams, das zusammenhält."
        breadcrumbs={[{ name: "Jobs", url: "/jobs" }]}
      />

      {/* Perks */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {perks.map((p) => (
              <span key={p} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-brand" fill="none" aria-hidden="true">
                  <path d="m4 10.5 3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Stellen */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Offene Stellen" title="Aktuelle Stellenangebote" />
          <div className="mt-12 grid gap-4">
            {JOBS.map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand sm:flex">
                    <Icon name="rocket" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink">{job.title}</h3>
                    <p className="mt-1 text-[0.95rem] text-muted">{job.teaser}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand">{job.employmentType}</span>
                      <span className="rounded-full bg-surface-2 px-3 py-1 font-medium text-muted">{job.location}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 font-medium text-brand">
                  Zur Stelle
                  <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-brand-200 bg-white p-8 text-center">
            <h3 className="font-sans text-lg font-semibold text-ink">Keine passende Stelle dabei?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted">
              Wir freuen uns immer über Initiativbewerbungen. Schreib uns, was du kannst und was dich antreibt.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Initiativbewerbung`}
              className="mt-5 inline-flex items-center gap-2 font-medium text-brand hover:underline"
            >
              <Icon name="mail" className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </Container>
      </section>

      {/* Werte (Kurz) */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="Warum datadiorama" title="Werte, die wir leben" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-sans text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Lust, mit uns zu arbeiten?"
        subtitle="Schick uns deine Bewerbung – wir melden uns zeitnah und persönlich."
        primaryLabel="Jetzt bewerben"
        primaryHref="/jobs"
      />
    </>
  );
}
