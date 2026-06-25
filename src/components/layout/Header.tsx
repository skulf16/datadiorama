"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons/Logo";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { MAIN_NAV, SITE } from "@/data/site";
import { getServicesSorted } from "@/data/services";
import { cn } from "@/lib/utils";

const services = getServicesSorted();

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top-Bar */}
      <div className="hidden bg-brand text-white md:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-1.5 text-[0.8rem]">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.primaryPhoneHref}`} className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {SITE.primaryPhone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/70">24/7 telefonischer Support</span>
            <a href="/fernzugriff" className="font-medium transition-opacity hover:opacity-80">
              Fernzugriff anfordern →
            </a>
          </div>
        </div>
      </div>

      {/* Hauptleiste */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/90 shadow-[0_6px_30px_-12px_rgba(5,9,43,0.18)] backdrop-blur-md"
            : "border-transparent bg-white",
        )}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            aria-label="datadiorama Startseite"
            className={cn("flex items-center transition-all", scrolled ? "py-3" : "py-4")}
          >
            <Logo />
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {/* Leistungen mit Mega-Menü */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                href="/leistungen"
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                  isActive("/leistungen") ? "text-brand" : "text-ink hover:text-brand",
                )}
                aria-expanded={megaOpen}
              >
                Leistungen
                <svg viewBox="0 0 16 16" className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} fill="none" aria-hidden="true">
                  <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div
                className={cn(
                  "absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3 transition-all duration-200",
                  megaOpen ? "visible opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-[0_30px_70px_-30px_rgba(5,9,43,0.35)]">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/leistungen/${s.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[0.92rem] font-semibold text-ink">{s.navLabel}</span>
                          <span className="line-clamp-1 text-[0.8rem] text-muted">{s.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/leistungen"
                    className="mt-1 flex items-center justify-between rounded-xl bg-navy px-5 py-3.5 text-white transition-colors hover:bg-navy-800"
                  >
                    <span className="text-sm font-medium">Alle Leistungen im Überblick</span>
                    <span className="text-sky-400">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {MAIN_NAV.filter((n) => n.href !== "/leistungen" && n.href !== "/kontakt").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                  isActive(item.href) ? "text-brand" : "text-ink hover:text-brand",
                )}
              >
                {item.label}
              </Link>
            ))}

            <Button href="/kontakt" size="sm" className="ml-2" withArrow>
              Kontakt
            </Button>
          </nav>

          {/* Mobile-Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-4 w-5">
              <span className={cn("absolute left-0 block h-0.5 w-5 bg-current transition-all", mobileOpen ? "top-1.5 rotate-45" : "top-0")} />
              <span className={cn("absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all", mobileOpen && "opacity-0")} />
              <span className={cn("absolute left-0 block h-0.5 w-5 bg-current transition-all", mobileOpen ? "top-1.5 -rotate-45" : "top-3")} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-0 z-40 overflow-y-auto bg-white px-5 pb-10 pt-24 transition-all duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav className="mt-2 flex flex-col gap-1" aria-label="Mobile Navigation">
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-lg font-semibold text-ink"
          >
            Leistungen
            <svg viewBox="0 0 16 16" className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")} fill="none" aria-hidden="true">
              <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="mb-2 grid gap-0.5 border-l-2 border-brand-100 pl-3">
              <Link href="/leistungen" className="rounded-lg px-4 py-2.5 text-[0.95rem] font-medium text-brand">
                Alle Leistungen
              </Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/leistungen/${s.slug}`} className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[0.95rem] text-muted">
                  <Icon name={s.icon} className="h-4 w-4 text-brand" />
                  {s.navLabel}
                </Link>
              ))}
            </div>
          )}
          {MAIN_NAV.filter((n) => n.href !== "/leistungen").map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3.5 text-lg font-semibold text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          <Button href="/kontakt" withArrow className="w-full">
            Erstgespräch vereinbaren
          </Button>
          <a href={`tel:${SITE.primaryPhoneHref}`} className="flex items-center justify-center gap-2 text-brand">
            <Icon name="phone" className="h-4 w-4" /> {SITE.primaryPhone}
          </a>
        </div>
      </div>
    </header>
  );
}
