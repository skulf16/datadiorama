import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Funnel } from "@/components/funnel/Funnel";

const points = [
  "Kostenlos & unverbindlich",
  "Antwort in der Regel innerhalb eines Werktags",
  "Persönlicher Ansprechpartner statt Hotline",
];

export function FunnelSection() {
  return (
    <section id="angebot" className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand/25 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 clip-hex bg-gradient-to-br from-brand/15 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow tone="light">Angebot anfordern</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] text-white">
              In wenigen Klicks zu Ihrem <span className="text-gradient">persönlichen IT-Angebot</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Beantworten Sie zwei kurze Fragen – wir melden uns mit einer passenden, unverbindlichen
              Einschätzung für Ihr Unternehmen.
            </p>
            <ul className="mt-8 grid gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Funnel />
        </div>
      </Container>
    </section>
  );
}
