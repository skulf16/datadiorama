import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Funnel } from "@/components/funnel/Funnel";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Angebot anfordern – in 3 Schritten",
  description:
    "Fordern Sie in wenigen Klicks ein unverbindliches IT-Angebot an: Beantworten Sie zwei kurze Fragen zu Ihrem Bedarf – datadiorama meldet sich mit einer passenden Einschätzung.",
  path: "/angebot",
});

export default function AngebotPage() {
  return (
    <>
      <PageHero
        eyebrow="Angebot anfordern"
        title="In 3 Schritten zu Ihrem IT-Angebot"
        description="Sagen Sie uns kurz, worum es geht und was Sie beschreibt – den Rest übernehmen wir. Kostenlos und unverbindlich."
        breadcrumbs={[{ name: "Angebot", url: "/angebot" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Funnel />
        </Container>
      </section>

      <PartnerLogos tone="light" />
    </>
  );
}
