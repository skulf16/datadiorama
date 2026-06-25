import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { CtaSection } from "@/components/sections/CtaSection";
import { getServicesSorted } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen – IT-Service für Unternehmen",
  description:
    "Alle IT-Leistungen von datadiorama im Überblick: IT-Support, Telefonanlagen, Netzwerkbetreuung, Microsoft 365, Cloud, Software Engineering und mehr – aus einer Hand.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  const services = getServicesSorted();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IT-Leistungen von datadiorama",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE.url}/leistungen/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <PageHero
        eyebrow="Was wir anbieten"
        title="IT-Leistungen für Unternehmen"
        description="Ein Full-Service-IT-Partner für alles, was Ihr Unternehmen am Laufen hält – von der Telefonanlage über sichere Netzwerke bis zur Cloud. Wählen Sie eine Leistung für Details."
        breadcrumbs={[{ name: "Leistungen", url: "/leistungen" }]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} variant="light" />
            ))}
          </div>
        </Container>
      </section>

      <PartnerLogos tone="light" />
      <CtaSection />
    </>
  );
}
