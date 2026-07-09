# datadiorama – Website-Relaunch (Next.js)

Moderner Relaunch von **datadiorama.com** als Next.js-/React-Anwendung – im
bestehenden Datadiorama-Design, aber technisch neu für maximale SEO- und
AEO-Vorteile (Server-Rendering, strukturierte Daten, Faktenboxen, FAQ).

## Tech-Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (Design-Tokens in `src/app/globals.css`)
- Fonts via `next/font` (Varela Round, Outfit, Share Tech Mono) – lokal ausgeliefert
- Vollständig statisch (SSG); nur die Kontakt-API ist serverseitig

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Build lokal ausliefern
```

## Projektstruktur

```
src/
  app/                 # Seiten (App Router)
    leistungen/[slug]  # 11 Leistungs-Detailseiten (datengetrieben)
    jobs/[slug]        # Stellenangebote
    beitraege/[slug]   # Blog-/Fachartikel
    kontakt/           # Kontaktseite + Formular
    api/kontakt/       # Formular-Endpunkt
    opengraph-image    # dynamisches Social-Sharing-Bild
    sitemap.ts, robots.ts
  components/
    layout/  Header, Footer
    sections/ Hero, ServicesSection, AboutSection, ...
    aeo/     FactBox, KeyTakeaways, Faq, Breadcrumbs  ← KI-/SEO-Optimierung
    seo/     JsonLd
  data/                # Inhalte (Single Source of Truth)
    site.ts services.ts team.ts jobs.ts posts.ts posts-content.ts partners.ts
  lib/                 # seo.ts, structured-data.ts, types.ts
```

## Inhalte pflegen

Alle Texte liegen als typisierte Daten unter `src/data/` – kein CMS nötig:

- **Leistungen:** `src/data/services.ts` (Faktenbox, Key-Takeaways, FAQ je Leistung)
- **Team:** `src/data/team.ts`
- **Stellen:** `src/data/jobs.ts`
- **Beiträge:** Metadaten in `src/data/posts.ts`, Fließtext in `src/data/posts-content.ts`
- **Standorte/Kontakt:** `src/data/site.ts`

## SEO & AEO (KI-Optimierung)

- JSON-LD: Organization, LocalBusiness (pro Standort), Service, FAQPage,
  BreadcrumbList, JobPosting, BlogPosting (`src/lib/structured-data.ts`)
- Faktenboxen „Auf einen Blick", „Das Wichtigste in Kürze" und FAQ-Sektionen
  liefern Such- und KI-Systemen klar extrahierbare Antworten
- Pro Seite: Title/Description/Canonical/OpenGraph (`src/lib/seo.ts`)
- `sitemap.xml`, `robots.txt`, 301-Redirects alter WordPress-URLs (`next.config.ts`)

## Kontaktformular aktivieren

Das Formular funktioniert sofort (Anfragen werden serverseitig protokolliert).
Der Versand läuft über `src/lib/mail.ts` – bevorzugt per SMTP (z. B.
Google-Workspace-Relay), alternativ über [Resend](https://resend.com).

**Variante A: SMTP / Google-Relay** (empfohlen; Werte in Coolify als
Runtime-Umgebungsvariablen eintragen, Kommentare nicht mitkopieren):

```
SMTP_HOST=smtp-relay.gmail.com
SMTP_PORT=587
SMTP_USER=kontakt@datadiorama.com
SMTP_PASS=...
CONTACT_TO=info@datadiorama.com
CONTACT_FROM=kontakt@datadiorama.com
```

- `SMTP_USER` muss ein echtes Workspace-Postfach mit 2FA sein; `SMTP_PASS`
  ist ein App-Passwort (ohne Leerzeichen eintragen).
- In der Google Admin Console den SMTP-Relay-Dienst mit „SMTP-Authentifizierung
  erforderlich" und „TLS erforderlich" anlegen. Alternativ ohne Relay-Setup:
  `SMTP_HOST=smtp.gmail.com` (Limit ~2.000 Mails/Tag).
- Bei IP-basierter Relay-Freigabe können `SMTP_USER`/`SMTP_PASS` entfallen
  (Hetzner-Server-IP in der Admin Console eintragen). Hinweis: Hetzner blockt
  Port 25 – 587/465 verwenden.

**Variante B: Resend** (greift nur, wenn kein `SMTP_HOST` gesetzt ist):

```
RESEND_API_KEY=...           # API-Key von Resend
CONTACT_TO=info@datadiorama.com
CONTACT_FROM=kontakt@datadiorama.com   # verifizierte Absenderdomain
```

Ohne SMTP- und Resend-Konfiguration wird die Anfrage akzeptiert und im
Server-Log ausgegeben.

## Vor dem Go-Live zu prüfen

- [ ] **Datenschutzerklärung** rechtlich prüfen und an finales Hosting/Dienste anpassen (`src/app/datenschutz/page.tsx`)
- [x] **Fernzugriff:** Support-Tool-Installer (Windows/macOS) werden **extern** ausgeliefert (nicht im Repo, um es schlank zu halten). Die Basis-URL ist über `NEXT_PUBLIC_DOWNLOADS_BASE_URL` konfigurierbar (Standard: `https://datadiorama.com/downloads`). Vor der finalen Domain-Migration auf einen dauerhaften Speicher (CDN/Objektspeicher) umstellen und die ENV setzen.
- [ ] **Bilder:** aktuell von der Live-WordPress-Instanz geladen → bei Bedarf lokalisieren (`next.config.ts` → `images.remotePatterns`)
- [ ] **Mail-Versand:** SMTP-/Google-Relay-Zugangsdaten in Coolify setzen (s. o.)
- [ ] Team-Fotos optional je Person ergänzen (derzeit Initialen-Avatare)
```
