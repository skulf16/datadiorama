import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HeroNetwork } from "@/components/sections/HeroNetwork";

const stats = [
  { value: "seit 2013", label: "Erfahrenes IT-Systemhaus" },
  { value: "3 Standorte", label: "Potsdam · Berlin · St. Gallen" },
  { value: "24/7", label: "Telefonischer Support" },
  { value: "UniFi-Partner", label: "Zertifiziert (UEWA)" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy text-white">
      {/* Animierte Netzwerk-Visualisierung */}
      <HeroNetwork className="absolute inset-0 -z-20 h-full w-full" />

      {/* Overlays für Lesbarkeit & Tiefe */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/65 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky/10 blur-[120px]" />

      {/* Signal-Ringe (UniFi-Anmutung) */}
      <div className="pointer-events-none absolute right-[14%] top-[26%] -z-10 hidden h-px w-px lg:block">
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky shadow-[0_0_20px_4px_rgba(46,163,242,0.7)]" />
        {[0, 1.4, 2.8].map((d) => (
          <span
            key={d}
            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky/40"
            style={{ animation: `signal-ring 4.2s ease-out ${d}s infinite` }}
          />
        ))}
      </div>

      <Container className="relative py-28">
        <div className="max-w-3xl">
          <Eyebrow tone="light" className="animate-fade-up">
            IT-Systemhaus &amp; Softwareentwicklung · seit 2013
          </Eyebrow>
          <h1
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.04] text-white animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Ihr Full-Service-IT-Partner für{" "}
            <span className="text-gradient-animated">Netzwerke, Cloud &amp; Telefonie</span>
          </h1>
          <p
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 animate-fade-up sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Von der Netzwerkbetreuung über die Cloud-Lösung bis zur Telefonanlage – wir kümmern uns
            um die komplette IT von Unternehmen in Potsdam, Berlin und St. Gallen. Zertifizierte
            Profis und Löser von IT-Problemen.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/angebot" size="lg" withArrow>
              Kostenloses Angebot anfordern
            </Button>
            <Button href="/leistungen" size="lg" variant="outline-dark">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        {/* Trust-Stats */}
        <dl
          className="mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 animate-fade-up sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Scroll-Indikator */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 -z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em]">Scrollen</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </span>
      </div>
    </section>
  );
}
