import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Datadiorama GmbH gemäß § 5 TMG.",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" breadcrumbs={[{ name: "Impressum", url: "/impressum" }]} />
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="prose-dd">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Datadiorama GmbH</strong>
              <br />
              Flottsteller Straße 2
              <br />
              14552 Michendorf
            </p>

            <h3>Vertreten durch</h3>
            <p>Geschäftsführer: Christian Anger</p>

            <h3>Kontakt</h3>
            <p>
              Telefon: <a href={`tel:${SITE.primaryPhoneHref}`}>{SITE.primaryPhone}</a>
              <br />
              E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Potsdam
              <br />
              Registernummer: HRB 26520
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE292345799
            </p>

            <h3>Weitere Standorte</h3>
            <p>
              Potsdam: Hebbelstraße 8, 14469 Potsdam
              <br />
              Berlin: Gormannstraße 14, 10119 Berlin
              <br />
              Schweiz: Gallusäckerstrasse 28, 9402 Mörschwil
            </p>

            <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
            <p>
              Maximilian Dalichow
              <br />
              Datadiorama GmbH, Flottsteller Straße 2, 14552 Michendorf
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
