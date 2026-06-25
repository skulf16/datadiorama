import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website der Datadiorama GmbH gemäß DSGVO.",
  path: "/datenschutz",
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" breadcrumbs={[{ name: "Datenschutz", url: "/datenschutz" }]} />
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="mb-10 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-sm text-ink/80">
            <strong className="text-ink">Hinweis:</strong> Diese Datenschutzerklärung beschreibt die
            Datenverarbeitung der neu aufgesetzten Website. Bitte vor Veröffentlichung durch die
            Datenschutzbeauftragten bzw. rechtlich prüfen und an das finale Hosting sowie ggf.
            ergänzte Dienste anpassen.
          </div>

          <div className="prose-dd">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <strong>Datadiorama GmbH</strong>
              <br />
              Flottsteller Straße 2, 14552 Michendorf
              <br />
              Telefon: <a href={`tel:${SITE.primaryPhoneHref}`}>{SITE.primaryPhone}</a>
              <br />
              E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>

            <h2>2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
              Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a (Einwilligung), lit. b
              (Vertrag/vorvertragliche Maßnahmen) und lit. f (berechtigtes Interesse) DSGVO.
            </p>

            <h2>3. Hosting & Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
              in Server-Logfiles erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit
              des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystem-Angaben.
              Diese Daten dienen dem sicheren und stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f
              DSGVO) und werden nach kurzer Zeit gelöscht.
            </p>

            <h2>4. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die
              von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail-Adresse, Telefonnummer und
              Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw.
              lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
              erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Diese Website setzt keine Tracking- oder Marketing-Cookies ein. Technisch notwendige
              Cookies werden nur verwendet, soweit sie für den Betrieb erforderlich sind. Eine
              Einwilligung ist hierfür nicht erforderlich.
            </p>

            <h2>6. Schriftarten</h2>
            <p>
              Die verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Es findet
              dabei <strong>kein</strong> Verbindungsaufbau zu Servern Dritter (z. B. Google Fonts) statt.
            </p>

            <h2>7. Eingebundene Bilder und Videos</h2>
            <p>
              Auf dieser Website werden Bilder und Videos eingebunden, die von unserer
              Medienbibliothek geladen werden. Beim Laden dieser Inhalte wird Ihre IP-Adresse an den
              jeweiligen Server übermittelt, da dies technisch erforderlich ist, um die Inhalte
              anzuzeigen.
            </p>

            <h2>8. Externe Links (z. B. Karten)</h2>
            <p>
              Wir binden Karten nicht direkt ein, sondern verlinken auf externe Kartendienste. Erst
              wenn Sie einen solchen Link aktiv anklicken, werden Daten an den jeweiligen Anbieter
              übertragen. Für die Verarbeitung gelten dann die Datenschutzbestimmungen des Anbieters.
            </p>

            <h2>9. Ihre Rechte</h2>
            <p>Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>

            <h2>10. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten zu beschweren (Art. 77 DSGVO).
            </p>

            <h2>11. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, sobald Änderungen der Website oder der
              rechtlichen Rahmenbedingungen dies erforderlich machen. Es gilt die jeweils aktuelle,
              auf dieser Seite veröffentlichte Fassung.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
