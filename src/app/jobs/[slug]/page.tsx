import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/icons/Icon";
import { JobApplyForm } from "@/components/sections/JobApplyForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { jobPostingSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { JOBS, getJob } from "@/data/jobs";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return buildMetadata({
    title: job.metaTitle,
    description: job.metaDescription,
    path: `/jobs/${job.slug}`,
  });
}

function List({ title, items, icon }: { title: string; items: string[]; icon: "support" | "shield" | "rocket" }) {
  return (
    <div>
      <h2 className="flex items-center gap-2.5 font-display text-2xl text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[1rem] leading-relaxed text-ink/85">
            <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" aria-hidden="true">
              <path d="m4 10.5 3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const description = `${job.intro} Aufgaben: ${job.tasks.join("; ")}. Profil: ${job.profile.join("; ")}.`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Bewerbung: " + job.title)}`;

  return (
    <>
      <JsonLd
        data={jobPostingSchema({
          title: job.title,
          description,
          employmentType: "FULL_TIME",
          slug: job.slug,
          datePosted: "2026-06-19",
        })}
      />

      <PageHero
        eyebrow="Stellenangebot"
        title={job.title}
        description={job.intro}
        icon="rocket"
        breadcrumbs={[
          { name: "Jobs", url: "/jobs" },
          { name: job.shortTitle, url: `/jobs/${job.slug}` },
        ]}
      >
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/10 px-4 py-1.5 font-medium text-white">{job.employmentType}</span>
          <span className="rounded-full bg-white/10 px-4 py-1.5 font-medium text-white">{job.location}</span>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-12">
              <List title="Deine Aufgaben" items={job.tasks} icon="rocket" />
              <List title="Dein Profil" items={job.profile} icon="shield" />
              <List title="Unsere Benefits" items={job.benefits} icon="support" />
            </div>

            <aside>
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <h2 className="font-display text-xl text-ink">Jetzt bewerben</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Hinterlasse uns deine Kontaktdaten – wir melden uns zeitnah und persönlich.
                  </p>
                  <div className="mt-6">
                    <JobApplyForm jobTitle={job.title} />
                  </div>
                  <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4 text-sm">
                    <a href={mailto} className="flex items-center justify-center gap-2 font-medium text-brand hover:underline">
                      <Icon name="mail" className="h-4 w-4" /> Oder per E-Mail bewerben
                    </a>
                    <a href={`tel:${SITE.primaryPhoneHref}`} className="flex items-center justify-center gap-2 font-medium text-ink transition-colors hover:text-brand">
                      <Icon name="phone" className="h-4 w-4" /> {SITE.primaryPhone}
                    </a>
                  </div>
                </div>
                <Link href="/jobs" className="mt-4 inline-flex items-center gap-2 px-1 text-sm font-medium text-brand hover:underline">
                  ← Alle Stellen
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
