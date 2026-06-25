import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { TEAM, TEAM_GALLERY } from "@/data/team";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Team – die Menschen hinter datadiorama",
  description:
    "Lernen Sie das Team von datadiorama kennen: Geschäftsführung, IT-Projektleitung, Administration und Support – Ihre zertifizierten Ansprechpartner für IT in Potsdam, Berlin & der Schweiz.",
  path: "/team",
});

const gradients = [
  "from-brand to-sky",
  "from-brand-700 to-brand",
  "from-sky to-brand",
  "from-brand-600 to-navy-700",
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Das sind wir"
        title="Ein leistungsstarkes Team für Ihre IT"
        description="Zertifizierte Profis und Löser von IT-Problemen: Bei datadiorama arbeiten Geschäftsführung, Projektleitung, Administration und Support Hand in Hand – damit Ihre IT läuft."
        breadcrumbs={[{ name: "Team", url: "/team" }]}
      />

      {/* Galerie */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TEAM_GALLERY.map((src, i) => (
              <div
                key={src}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-2xl border border-line",
                  i === 0 && "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2",
                )}
              >
                <Image
                  src={src}
                  alt="Einblick in den Arbeitsalltag bei datadiorama"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 200px, 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team-Mitglieder */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Unser Team"
            title="Ihre Ansprechpartner"
            description="14 Köpfe, ein Ziel: schnelles und störungsfreies Arbeiten für Sie und Ihre Kolleginnen und Kollegen."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="group flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div
                  className={cn(
                    "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br font-display text-2xl text-white shadow-[var(--shadow-brand)]",
                    gradients[i % gradients.length],
                  )}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 font-sans text-base font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-100 bg-white p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl text-ink">Werde Teil des Teams</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Wir wachsen – und suchen Menschen, die mit uns IT besser machen wollen. Schau dir unsere
              offenen Stellen an.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/jobs" withArrow>
                Offene Stellen ansehen
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ValuesSection />
      <CtaSection />
    </>
  );
}
