import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";

const points = [
  { icon: "shield", title: "Zertifizierte Mitarbeiter", text: "Kontinuierlich weitergebildet – zertifizierter UniFi-Partner (UEWA)." },
  { icon: "network", title: "Sichere Netzwerke", text: "Durchdachte Planung, optimale WLAN-Ausleuchtung, klare Strukturen." },
  { icon: "rocket", title: "Effizienteres Arbeiten", text: "Cloud, Automatisierung und Support, der den Betrieb beschleunigt." },
] as const;

export function AboutSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bild */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 clip-hex bg-brand/10" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card-hover)]">
              <Image
                src="/media/2025/03/datadiorama-8127.jpg"
                alt="datadiorama Techniker bei der Arbeit an zwei Bildschirmen"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 pr-5 shadow-[var(--shadow-card-hover)] sm:-right-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                <Icon name="support" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg leading-none text-ink">Seit 2013</p>
                <p className="mt-1 text-sm text-muted">Ihr IT-Partner</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Das sind wir"
              title={<>Zertifizierte Profis &amp; <span className="text-gradient">Löser von IT-Problemen</span></>}
              description="Als zertifizierter IT-Partner haben wir die optimale Lösung für Sie parat, um Ihre IT sicherer, schneller und effizienter zu gestalten. So können Sie sich ganz auf Ihr Geschäft konzentrieren."
            />

            <ul className="mt-10 grid gap-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/team" variant="outline" withArrow>
                Lernen Sie unser Team kennen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
