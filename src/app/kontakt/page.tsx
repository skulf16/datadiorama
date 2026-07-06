import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/icons/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { SITE, LOCATIONS } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – Erstgespräch vereinbaren",
  description:
    "Kontaktieren Sie datadiorama – Ihr IT-Systemhaus in Potsdam, Berlin & St. Gallen. Telefon, E-Mail, Standorte und Kontaktformular für ein kostenloses Erstgespräch.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        eyebrow="Kontakt"
        title="Lassen Sie uns sprechen"
        description="Ob konkretes Projekt oder erste Frage – wir beraten Sie ehrlich und unverbindlich. Rufen Sie an, schreiben Sie uns oder nutzen Sie das Formular."
        breadcrumbs={[{ name: "Kontakt", url: "/kontakt" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Formular */}
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-9">
              <h2 className="font-display text-2xl text-ink">Schreiben Sie uns</h2>
              <p className="mt-2 text-muted">Wir antworten in der Regel innerhalb eines Werktags.</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            {/* Kontaktinfos */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`tel:${SITE.primaryPhoneHref}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name="phone" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">Telefon (24/7 Support)</span>
                    <span className="block font-semibold text-ink">{SITE.primaryPhone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name="mail" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">E-Mail</span>
                    <span className="block font-semibold text-ink">{SITE.email}</span>
                  </span>
                </a>
              </div>

              {/* Standorte */}
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-xl text-ink">Unsere Standorte</h3>
                <ul className="mt-5 grid gap-5">
                  {LOCATIONS.map((l) => (
                    <li key={l.id} className="border-l-2 border-brand-100 pl-4">
                      <p className="flex items-center gap-2 font-semibold text-ink">
                        {l.label}
                        {l.isHeadquarters && (
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[0.7rem] font-medium text-brand">Hauptsitz</span>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {l.street}, {l.postalCode} {l.city}
                        {l.country !== "Deutschland" ? `, ${l.country}` : ""}
                      </p>
                      {l.note && <p className="text-sm text-muted-light">{l.note}</p>}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                      >
                        Auf Karte ansehen →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
