import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { KeyTakeaways } from "@/components/aeo/KeyTakeaways";
import { Faq } from "@/components/aeo/Faq";
import { CtaSection } from "@/components/sections/CtaSection";
import { Icon } from "@/components/icons/Icon";
import { AuthorByline } from "@/components/team/AuthorByline";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { formatDateDE } from "@/lib/utils";
import { POSTS, getPost, getPostsSorted } from "@/data/posts";
import { getService } from "@/data/services";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/beitraege/${post.slug}`,
    type: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.relatedServiceSlugs ?? [])
    .map((s) => getService(s))
    .filter(Boolean);
  const more = getPostsSorted().filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "de-DE",
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          ...(post.author.image ? { image: `${SITE.url}${post.author.image}` } : {}),
          worksFor: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
        }
      : { "@type": "Organization", name: SITE.fullName, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.fullName,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    mainEntityOfPage: `${SITE.url}/beitraege/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { name: "Beiträge", url: "/beitraege" },
          { name: post.title, url: `/beitraege/${post.slug}` },
        ]}
      >
        {post.author && (
          <AuthorByline author={post.author} tone="dark" label="Von" className="mt-4" />
        )}
        <div className="mt-3 flex items-center gap-3 text-sm text-white/60">
          <time dateTime={post.date}>{formatDateDE(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} Min. Lesezeit</span>
        </div>
      </PageHero>

      <article className="py-16 sm:py-20">
        <Container size="narrow">
          <p className="text-xl leading-relaxed text-ink/90">{post.intro ?? post.excerpt}</p>

          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <KeyTakeaways items={post.keyTakeaways} className="mt-10" />
          )}

          {post.sections && post.sections.length > 0 ? (
            <div className="prose-dd mt-10">
              {post.sections.map((sec, i) => (
                <div key={i}>
                  <h2>{sec.heading}</h2>
                  {sec.body.split("\n\n").map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {sec.table && (
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            {sec.table.headers.map((h) => (
                              <th key={h}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.table.rows.map((row, r) => (
                            <tr key={r}>
                              {row.map((cell, c) => (
                                <td key={c}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          {post.faq && post.faq.length > 0 && (
            <div className="mt-14">
              <Faq items={post.faq} title="Häufige Fragen" />
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-14 rounded-2xl border border-line bg-surface p-6">
              <h2 className="font-sans text-lg font-semibold text-ink">Passende Leistungen</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {related.map(
                  (s) =>
                    s && (
                      <Link
                        key={s.slug}
                        href={`/leistungen/${s.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                      >
                        <Icon name={s.icon} className="h-4 w-4 text-brand" />
                        {s.navLabel}
                      </Link>
                    ),
                )}
              </div>
            </div>
          )}

          {post.author && (
            <div className="mt-14 rounded-2xl border border-line bg-surface p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-light">
                Verfasst von
              </p>
              <div className="mt-3">
                <AuthorByline author={post.author} size="md" />
              </div>
            </div>
          )}
        </Container>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line py-16">
          <Container>
            <h2 className="font-display text-2xl text-ink">Weitere Beiträge</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/beitraege/${p.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand/40 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="text-xs font-medium text-brand">{p.category}</span>
                  <h3 className="mt-2 font-sans text-lg font-semibold text-ink group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
