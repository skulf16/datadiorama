import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Icon } from "@/components/icons/Icon";
import { SITE, LOCATIONS } from "@/data/site";
import { getServicesSorted } from "@/data/services";

const services = getServicesSorted();

const company = [
  { label: "Team", href: "/team" },
  { label: "Jobs", href: "/jobs" },
  { label: "Beiträge", href: "/beitraege" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Fernzugriff", href: "/fernzugriff" },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-white/70">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marke */}
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 text-[0.95rem] leading-relaxed">
              Ihr IT-Systemhaus und Softwareentwickler aus Potsdam – seit {SITE.foundedYear}. Von der
              Telefonanlage über die Netzwerkbetreuung bis zur Cloud-Lösung.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
              <a href={`tel:${SITE.primaryPhoneHref}`} className="inline-flex items-center gap-2 text-white transition-colors hover:text-sky-400">
                <Icon name="phone" className="h-4 w-4" /> {SITE.primaryPhone}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-white transition-colors hover:text-sky-400">
                <Icon name="mail" className="h-4 w-4" /> {SITE.email}
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Leistungen</h3>
            <ul className="mt-5 grid gap-2.5 text-[0.92rem]">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`} className="transition-colors hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Unternehmen</h3>
            <ul className="mt-5 grid gap-2.5 text-[0.92rem]">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Standorte</h3>
            <ul className="mt-5 grid gap-4 text-[0.9rem]">
              {LOCATIONS.map((l) => (
                <li key={l.id}>
                  <p className="font-semibold text-white">{l.label}</p>
                  <p className="leading-snug">
                    {l.street}, {l.postalCode} {l.city}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-[0.85rem] sm:flex-row">
          <p>© {year} {SITE.fullName}. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
            <a href={SITE.url + "/sitemap.xml"} className="transition-colors hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
