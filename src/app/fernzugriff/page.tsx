import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fernzugriff & Support-Tool",
  description:
    "Schnelle Hilfe per Fernwartung: Laden Sie das datadiorama Support-Tool für Windows oder macOS herunter und starten Sie eine sichere Support-Sitzung.",
  path: "/fernzugriff",
  noIndex: true,
});

// Support-Tool-Installer (aus der bestehenden Seite übernommen, lokal in /public/downloads).
const DOWNLOADS = [
  { os: "Windows", note: "Windows 10 / 11", icon: "workspace" as const, href: "/downloads/datadiorama-support_v1.exe", size: "26 MB" },
  { os: "macOS (Apple Silicon)", note: "M1 / M2 / M3 · ARM64", icon: "workspace" as const, href: "/downloads/datadiorama-support-arm64_v1.dmg", size: "24 MB" },
  { os: "macOS (Intel)", note: "x64", icon: "workspace" as const, href: "/downloads/datadiorama-support-x64_v1.dmg", size: "30 MB" },
];

const steps = [
  "Wählen Sie unten das passende Betriebssystem und laden Sie das Support-Tool herunter.",
  "Öffnen Sie die heruntergeladene Datei und starten Sie das Programm.",
  "Nennen Sie uns am Telefon Ihre angezeigte ID – wir verbinden uns sicher mit Ihrem Gerät.",
];

export default function FernzugriffPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Fernzugriff anfordern"
        description="Mit unserem Support-Tool helfen wir Ihnen schnell und sicher per Fernwartung – ohne Anfahrt. Ein Anruf, ein Klick, und wir sind verbunden."
        icon="support"
        breadcrumbs={[{ name: "Fernzugriff", url: "/fernzugriff" }]}
      />

      <section className="py-16 sm:py-20">
        <Container size="narrow">
          {/* Ablauf */}
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={i} className="rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-3xl text-brand/30">0{i + 1}</span>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>

          {/* Downloads */}
          <h2 className="mt-14 font-display text-2xl text-ink">Support-Tool herunterladen</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {DOWNLOADS.map((d) => (
              <a
                key={d.os}
                href={d.href}
                download
                className="group flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <span className="mt-4 font-sans font-semibold text-ink">{d.os}</span>
                <span className="mt-1 text-sm text-muted">{d.note} · {d.size}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Download
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-surface p-8 text-center">
            <p className="text-muted">Sie erreichen unseren Support telefonisch unter:</p>
            <a href={`tel:${SITE.primaryPhoneHref}`} className="inline-flex items-center gap-2 font-display text-2xl text-brand">
              <Icon name="phone" className="h-6 w-6" /> {SITE.primaryPhone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
