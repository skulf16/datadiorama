import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerLogos tone="light" />
      <AboutSection />
      <ServicesSection limit={6} />
      <FeatureSplit
        eyebrow="Service"
        title={<>Computer- und Netzwerk-Service <span className="text-gradient">für Unternehmen</span></>}
        paragraphs={[
          "Als IT-Systemhaus in Potsdam sind wir Ihr kompetenter Ansprechpartner für die gesamte EDV in Ihrem Büro – inklusive aller Hardware- und Softwarekomponenten. Seit 2013 kümmern wir uns nicht nur um Updates und Backups, sondern um die vollständige Administration der IT unserer Kundinnen und Kunden.",
          "Ob Installation und Optimierung von Netzwerken, Updates Ihrer Windows- und Apple-Systeme oder die Verwaltung von E-Mails und Telefonanlagen – wir sorgen dafür, dass Ihre IT schnell, sicher und störungsfrei läuft.",
        ]}
        bullets={[
          "Vollständige IT-Administration",
          "Updates & Backups",
          "Netzwerk- & WLAN-Optimierung",
          "Windows- & Apple-Systeme",
          "E-Mail- & Telefonie-Verwaltung",
          "Fernwartung & Vor-Ort-Service",
        ]}
        image="https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-7572.jpg"
        imageAlt="datadiorama Team im Büro bei der Netzwerk- und Systembetreuung"
        imageSide="right"
        cta={{ label: "Alle Leistungen ansehen", href: "/leistungen" }}
      />
      <ValuesSection />
      <CtaSection />
    </>
  );
}
