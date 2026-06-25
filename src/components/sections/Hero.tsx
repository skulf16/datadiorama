import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

const stats = [
  { value: "seit 2013", label: "Erfahrenes IT-Systemhaus" },
  { value: "3 Standorte", label: "Potsdam · Berlin · Schweiz" },
  { value: "24/7", label: "Telefonischer Support" },
  { value: "UniFi-Partner", label: "Zertifiziert (UEWA)" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Video-Hintergrund */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        poster="https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-7783.jpg"
        aria-hidden="true"
      >
        <source src="https://datadiorama.com/wp-content/uploads/2025/09/Header-Datadiorama.mp4" type="video/mp4" />
      </video>
      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/30 blur-[130px]" />

      <Container className="relative flex min-h-[88vh] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <Eyebrow tone="light">IT-Systemhaus &amp; Softwareentwicklung · seit 2013</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-display leading-[1.04] text-white">
            Ihr verlässlicher IT-Partner für{" "}
            <span className="text-gradient">Telefonanlagen, Netzwerke &amp; Cloud</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Von der Telefonanlage über die Netzwerkbetreuung bis zur Cloud-Lösung – wir halten die
            IT von Unternehmen in Potsdam, Berlin und der Schweiz am Laufen. Zertifizierte Profis und
            Löser von IT-Problemen.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt" size="lg" withArrow>
              Jetzt Erstgespräch vereinbaren
            </Button>
            <Button href="/leistungen" size="lg" variant="outline-dark">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        {/* Trust-Stats */}
        <dl className="mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
