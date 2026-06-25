import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getServicesSorted } from "@/data/services";

export default function NotFound() {
  const services = getServicesSorted().slice(0, 6);
  return (
    <section className="relative isolate overflow-hidden bg-navy py-28 text-white">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-[120px]" />
      <Container className="text-center">
        <p className="font-display text-[6rem] leading-none text-gradient">404</p>
        <h1 className="mt-4 text-3xl text-white sm:text-4xl">Diese Seite gibt es nicht (mehr)</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Vielleicht hilft Ihnen einer dieser Wege weiter – oder kontaktieren Sie uns direkt.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="white" withArrow>
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="outline-dark">
            Kontakt aufnehmen
          </Button>
        </div>
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-sky/40 hover:text-white"
            >
              {s.navLabel}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
