import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { AuthorByline } from "@/components/team/AuthorByline";
import { getPostsSorted } from "@/data/posts";
import { formatDateDE } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Beiträge – IT-Wissen & Ratgeber",
  description:
    "Fachbeiträge rund um IT, Netzwerke, Cloud, Telefonie und IT-Sicherheit. Praxiswissen und Ratgeber vom IT-Systemhaus datadiorama.",
  path: "/beitraege",
});

export default function BeitraegePage() {
  const posts = getPostsSorted();

  return (
    <>
      <PageHero
        eyebrow="Beiträge"
        title="IT-Wissen, klar erklärt"
        description="Ratgeber und Praxiswissen rund um IT-Betreuung, Netzwerke, Cloud, Telefonie und Sicherheit – verständlich aufbereitet von unserem Team."
        breadcrumbs={[{ name: "Beiträge", url: "/beitraege" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/beitraege/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand">{post.category}</span>
                  <span className="text-muted-light">{post.readingMinutes} Min. Lesezeit</span>
                </div>
                <h2 className="mt-4 font-sans text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
                {post.author && (
                  <AuthorByline author={post.author} compact label="Von" className="mt-5 text-sm" />
                )}
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <time className="text-muted-light" dateTime={post.date}>
                    {formatDateDE(post.date)}
                  </time>
                  <span className="inline-flex items-center gap-1.5 font-medium text-brand">
                    Lesen
                    <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
