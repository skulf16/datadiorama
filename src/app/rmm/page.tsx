import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "rmm installieren",
  description:
    "Installieren Sie den datadiorama rmm für Windows – für proaktives Monitoring, automatische Updates und schnellen Managed-Services-Support.",
  path: "/rmm",
  noIndex: true,
});

// Der rmm liegt unter public/downloads/ und wird von Next.js direkt unter
// /downloads/… ausgeliefert. Basis-URL per ENV überschreibbar (CDN/Objektspeicher);
// Standard: der relative Pfad, der lokal wie in Produktion funktioniert.
const DL_BASE =
  process.env.NEXT_PUBLIC_DOWNLOADS_BASE_URL || "/downloads";

const DOWNLOADS = [
  { os: "Windows", note: "Windows 10 / 11 · 64-bit", icon: "workspace" as const, href: `${DL_BASE}/tacticalagent-v2.11.0-windows-amd64.exe`, size: "5 MB" },
];

const steps = [
  "Laden Sie unten den rmm für Windows herunter.",
  "Starten Sie die Datei mit Administratorrechten – die Installation läuft unbeaufsichtigt im Hintergrund.",
  "Fertig: Der Agent meldet sich in unserem System. Wir überwachen Zustand, Updates und Sicherheit Ihrer Geräte proaktiv.",
];

export default function RmmPage() {
  return (
    <>
      <PageHero
        eyebrow="Managed Services"
        title="rmm installieren"
        description="Mit unserem rmm behalten wir Ihre Systeme im Blick – Updates, Sicherheit und Störungen erkennen und beheben wir proaktiv, oft bevor Sie etwas bemerken."
        icon="shield"
        breadcrumbs={[{ name: "rmm", url: "/rmm" }]}
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
          <h2 className="mt-14 font-display text-2xl text-ink">rmm herunterladen</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {DOWNLOADS.map((d) => (
              <a
                key={d.os}
                href={d.href}
                download
                className="group flex w-full max-w-sm flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
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
            <p className="text-muted">Fragen zur Installation? Sie erreichen unseren Support telefonisch unter:</p>
            <a href={`tel:${SITE.primaryPhoneHref}`} className="inline-flex items-center gap-2 font-display text-2xl text-brand">
              <Icon name="phone" className="h-6 w-6" /> {SITE.primaryPhone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
