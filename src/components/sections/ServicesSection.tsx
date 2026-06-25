import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { getServicesSorted } from "@/data/services";

export function ServicesSection({ limit }: { limit?: number }) {
  const services = getServicesSorted();
  const shown = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rotate-12 bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 clip-hex bg-gradient-to-br from-brand/15 to-transparent" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Was wir anbieten"
            tone="light"
            title="Leistungen"
            description="Ein Full-Service-IT-Partner für alles, was Ihr Unternehmen am Laufen hält – von der Telefonanlage bis zur sicheren Cloud."
          />
          <Button href="/leistungen" variant="outline-dark" withArrow className="shrink-0">
            Alle Leistungen
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} variant="dark" />
          ))}
        </div>
      </Container>
    </section>
  );
}
