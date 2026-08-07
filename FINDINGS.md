# FINDINGS.md — datadiorama.com Relaunch-Reparatur

Protokoll zum `RUNBOOK.md`. Ein Abschnitt pro Phase.

---

## Phase 0 — Inventur

**Datum:** 07.08.2026
**Branch:** `claude/phase-0-findings-4j434r`
**Änderungen am Code:** keine. Einziger Commit dieser Phase ist diese Datei.
**HEAD zum Zeitpunkt der Inventur:** `dc98985` — „Cookiebot: Banner-Flackern
behoben“ (04.08.2026)

### 0.6 Gate

| # | Punkt | Befund | Status |
|---|---|---|---|
| 1 | Router | **App Router** (`src/app/`, kein `pages/`) | ✅ |
| 2 | `output` | **nicht gesetzt** → Standard, SSR/SSG-Hybrid. Kein `output: 'export'` | ✅ |
| 3 | `trailingSlash` | **nicht gesetzt** → Standard `false`, Next normalisiert per 308 (verifiziert) | ✅ |
| 4 | Hoster | **Coolify auf Hetzner-Server** (selbst gehostet, **nicht** Vercel) | ✅ |
| 5 | `noindex` / `X-Robots-Tag` | 4 Fundstellen, alle absichtlich (Tabelle 0.2) | ✅ |
| 6 | Bestehende `redirects()` | 10 Regeln in `next.config.ts` (Tabelle 0.4) | ✅ |
| 7 | Statuscode-Verteilung | **Live-Prüfung nicht möglich** — Egress-Sperre. Ersatzmessung gegen den Production-Build durchgeführt (Abschnitt 0.5) | ⚠️ Ersatz |
| 8 | Verdächtige Commits 28.06.–13.07. | 8 Commits, davon 3 relevant (Abschnitt 0.6) | ✅ |

**Gate-Bewertung: bestanden mit einer Einschränkung.** Sieben von acht Punkten
sind belegt. Punkt 7 konnte nicht gegen `https://datadiorama.com` gemessen
werden (siehe 0.5), sondern nur gegen den lokalen Production-Build desselben
Commits. Da unter Coolify eine Reverse-Proxy-Ebene (Traefik) vor der Anwendung
liegt, deren Konfiguration nicht im Repository liegt, ist die Ersatzmessung für
Next.js-Ebene beweiskräftig, für die Hoster-Ebene nicht.

**Empfehlung zur Freigabe von Phase 1:** freigeben. Phase 1 hängt nicht an
Punkt 7 — die `noindex`-Frage ist unabhängig davon vollständig geklärt (0.2),
und zwar mit einem anderen Ergebnis als vermutet.

---

### 0.1 Stack und Konfiguration

| Datei | Befund |
|---|---|
| `package.json` | `next@16.2.9`, `react@19.2.4`, `nodemailer@^9.0.3`. Scripts: `dev`, `build`, `start`, `lint`. Keine Hoster-Abhängigkeit, kein `vercel`-Paket. |
| `next.config.ts` | Enthält **ausschließlich** `async redirects()` mit 10 Regeln. **Kein** `trailingSlash`, **kein** `output`, **kein** `basePath`, **kein** `headers()`, keine `images.remotePatterns` (in `5388a6f` entfernt). |
| `middleware.ts` | **existiert nicht.** Keine Middleware im Projekt. |
| `app/` vs. `pages/` | App Router. 14 `page.tsx`, davon 3 dynamisch (`beitraege/[slug]`, `jobs/[slug]`, `leistungen/[slug]`). |
| `src/app/layout.tsx` | Globale `metadata`: `metadataBase`, `title.template`, `alternates.canonical: "/"`. **Kein globales `robots`-Feld** → Next setzt dort keinen `noindex`. |
| `src/app/robots.ts` | Dynamische Route. `allow: "/"`, `disallow: ["/api/", "/impressum", "/datenschutz", "/fernzugriff", "/rmm"]`. |
| `src/app/sitemap.ts` | Dynamische Route, **56 URLs**: 7 statische + 11 Leistungen + 5 Jobs + 33 Beiträge. Alle **ohne** Trailing Slash, alle absolut über `SITE.url`. |
| `vercel.json` / `netlify.toml` | **existieren nicht.** |
| `.env*` | **keine `.env`-Datei im Repository** (`.env*` ist per `.gitignore` ausgeschlossen). Keine Variablennamen einsehbar außer `NEXT_PUBLIC_DOWNLOADS_BASE_URL` (README, Standard: relativer Pfad `/downloads`) und den SMTP-Variablen aus `src/lib/mail.ts`. |

**Hoster — Belege:** `README.md` nennt an drei Stellen **Coolify** als
Deployment-Oberfläche („Werte in Coolify als …“, „SMTP-Zugangsdaten in Coolify
setzen“) und **Hetzner** als Server („Hetzner-Server-IP in der Admin Console
eintragen“, „Hetzner blockt …“). `.gitignore` enthält zwar einen `.vercel`-Block,
das ist aber der Standardblock aus `create-next-app` und kein Hinweis auf
Vercel-Betrieb.

**Konsequenz für Weiterleitungen:** Sie gehören in `next.config.ts`
`redirects()`. Dort liegen sie bereits, dort funktionieren sie (verifiziert in
0.5). `vercel.json` ist kein gültiger Ort für dieses Projekt.

---

### 0.2 `noindex` — die Vermutung aus `CLAUDE.md` trifft nicht zu

`CLAUDE.md` benennt als „wahrscheinlichsten Fall“ eine umgebungsabhängige
Bedingung im Layout oder in der Middleware, die auf Produktion falsch
auswertet, und sieht darin „den größten und schnellsten Hebel überhaupt“.

**Das ist nach Aktenlage widerlegt.** Vollständige Fundstellen:

| Datei:Zeile | Inhalt | Bewertung |
|---|---|---|
| `src/lib/seo.ts:10` | `noIndex?: boolean` — Typdeklaration | neutral |
| `src/lib/seo.ts:20` | `noIndex = false` — **Standardwert** | neutral, korrekt |
| `src/lib/seo.ts:39` | `robots: noIndex ? { index: false, follow: false } : { index: true, follow: true, … }` | neutral, korrekt |
| `src/app/impressum/page.tsx:11` | `noIndex: true` | **Absicht** — belassen |
| `src/app/datenschutz/page.tsx:11` | `noIndex: true` | **Absicht** — belassen |
| `src/app/fernzugriff/page.tsx:13` | `noIndex: true` | **Absicht** — belassen |
| `src/app/rmm/page.tsx:13` | `noIndex: true` | **Absicht** — belassen |

Das sind **vier** Seiten, nicht zwölf. Und:

- **Kein `X-Robots-Tag`** irgendwo im Repository — weder in `next.config.ts`
  `headers()` (existiert nicht), noch in einer Middleware (existiert nicht).
- **Keine einzige umgebungsabhängige Robots-Bedingung.** Die Suche nach
  `VERCEL_ENV|NODE_ENV|NEXT_PUBLIC_.*ENV|process\.env\.[A-Z_]*ENV` über das
  ganze Repository (ohne `node_modules`) liefert **genau einen** Treffer, und
  der steht in `README.md:105` in einem Prosasatz über
  `NEXT_PUBLIC_DOWNLOADS_BASE_URL`. Im Anwendungscode: null Treffer.
- `next-seo` ist nicht installiert, `dangerouslySetAllPagesToNoIndex` kommt
  nicht vor.

**Verifiziert gegen den Production-Build** (`npm run build && npm start`,
Commit `dc98985`):

| Pfad | `X-Robots-Tag` | `<meta name="robots">` |
|---|---|---|
| `/` | keiner | `index, follow, max-image-preview:large, max-snippet:-1` |
| `/team` | keiner | `index, follow, max-image-preview:large, max-snippet:-1` |
| `/leistungen/microsoft-teams` | keiner | `index, follow, max-image-preview:large, max-snippet:-1` |
| `/beitraege/word-online-nutzen` | keiner | `index, follow, max-image-preview:large, max-snippet:-1` |
| `/impressum` | keiner | `noindex, nofollow` |
| `/datenschutz` | keiner | `noindex, nofollow` |
| `/fernzugriff` | keiner | `noindex, nofollow` |
| `/rmm` | keiner | `noindex, nofollow` |

**Folgerung:** Der Code erzeugt auf allen indexierbaren Seiten korrekt
`index, follow`. Für die 12 `noindex`-Meldungen der Search Console gibt es im
Repository **keine Ursache**. Vier davon sind erklärt und gewollt. Die
verbleibenden **acht sind unerklärt** und stammen nicht aus dieser Codebasis.

**Offen für Phase 1 — drei mögliche Erklärungen, in dieser Reihenfolge zu
prüfen:**

1. **Altbestand.** Die Meldung stammt aus der Zeit vor dem Relaunch, als die
   Website noch WordPress war, und die betroffenen URLs sind heute 404 (siehe
   0.5). Eine URL, die zuletzt mit `noindex` gesehen wurde und seither
   verschwunden ist, bleibt in der Search Console eine Weile in dieser Zeile
   stehen. **Das ist die wahrscheinlichste Erklärung** und würde bedeuten:
   Phase 1 ist gegenstandslos, die Arbeit liegt in Phase 2.
2. **Hoster-Ebene.** Traefik oder ein Coolify-Proxy-Label setzt einen
   `X-Robots-Tag`. Im Repository nicht sichtbar, weil die Proxy-Konfiguration
   nicht hier liegt.
3. **Vorschau-Deployment.** Eine Coolify-Preview-Umgebung ist öffentlich
   erreichbar und wurde indexiert. Dann sind es fremde Hostnamen, nicht
   datadiorama.com.

**Erforderlich, um zu entscheiden:** die 12 URLs aus der Search Console
(`exports-needed.md`, dort Punkt zu Punkt 1) und ein `curl -sI` gegen die
Produktion. Beides liegt außerhalb dieses Repositories — die Egress-Sperre
verhindert die Live-Prüfung hier (0.5). **Nicht raten, nicht vorsorglich
ändern.**

### `robots.txt` — ein echter Widerspruch, drei Fragezeichen

Der Build liefert:

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /impressum
Disallow: /datenschutz
Disallow: /fernzugriff
Disallow: /rmm

Host: https://datadiorama.com
Sitemap: https://datadiorama.com/sitemap.xml
```

Zwei Feststellungen:

1. **`/fernzugriff` steht gleichzeitig in der Sitemap und in `Disallow`.**
   `src/app/sitemap.ts` führt `/fernzugriff` mit `priority: 0.3` — und
   `robots.ts` sperrt genau diesen Pfad, und die Seite trägt zusätzlich
   `noIndex: true`. Google wird explizit auf eine URL hingewiesen, die es nicht
   crawlen darf. Das ist mit hoher Wahrscheinlichkeit **die eine Seite in der
   Zeile „Durch robots.txt blockiert“**. Kein Datenverlust, aber eine
   widersprüchliche Angabe. `/impressum`, `/datenschutz` und `/rmm` sind
   dagegen konsistent: gesperrt, `noindex`, **nicht** in der Sitemap.
2. **`Disallow` schlägt `noindex`.** Bei den vier gesperrten Seiten kann Google
   das `noindex`-Tag gar nicht lesen, weil es die Seite nicht abrufen darf.
   Das ist kein Fehler und kostet nichts, weil hier tatsächlich beides gewollt
   ist. Es heißt aber, dass diese vier Seiten in der Search Console eher unter
   „robots.txt“ als unter „noindex“ erscheinen — was die Lücke von acht
   unerklärten `noindex`-Seiten in 0.2 noch vergrößert.

**Nicht geändert.** Punkt 1 ist ein Kandidat für Phase 1 oder 5, gehört aber
laut Runbook-Grundregel 4 hier nur dokumentiert.

---

### 0.3 Canonicals

`buildMetadata()` in `src/lib/seo.ts:38` setzt `alternates.canonical` auf
`${SITE.url}${path}` — jede Seite kanonisiert also **auf sich selbst**, in der
Form **ohne** Trailing Slash. Verifiziert im Build:

| Pfad | Canonical |
|---|---|
| `/` | `https://datadiorama.com` |
| `/team` | `https://datadiorama.com/team` |
| `/leistungen/microsoft-teams` | `https://datadiorama.com/leistungen/microsoft-teams` |
| `/beitraege/word-online-nutzen` | `https://datadiorama.com/beitraege/word-online-nutzen` |

**Die Sorge aus `CLAUDE.md` („solange die alten Seiten auf sich selbst
kanonisieren, bleibt der Dublettenkonflikt bestehen“) ist gegenstandslos.**
Die alten flachen URLs existieren in dieser Codebasis nicht mehr und können
daher nichts kanonisieren — sie liefern 404 (0.5). Es gibt keine Seite, die auf
eine Quell-URL der Redirect-Map kanonisiert. Der Punkt „Canonicals nachziehen“
aus Runbook 4.2 ist für die Ziel-URLs bereits erfüllt.

Ein Detail am Rand: `src/app/layout.tsx:44` setzt `alternates.canonical: "/"`
global. Jede Seite überschreibt das über `buildMetadata()`, wie die Messung
zeigt. Eine Seite ohne `buildMetadata()`-Aufruf würde jedoch auf die Startseite
kanonisieren. Betroffen davon ist derzeit keine indexierbare Route.

---

### 0.4 Bestehende `redirects()` — 10 Regeln

Alle in `next.config.ts`, alle `permanent: true` (→ 308 unter Next.js):

| # | source | destination | Deckung mit `redirect-map.csv` |
|---|---|---|---|
| 1 | `/leistungen/telefonanlage-fuer-unternehmen` | `/leistungen/telefonanlagen` | — |
| 2 | `/leistungen/home-office-einrichten` | `/leistungen/home-office` | — |
| 3 | `/leistungen/emails-sicher-zustellen` | `/leistungen/mailserver` | — |
| 4 | `/leistungen/netzwerkbetreuung` | `/leistungen/netzwerkservice` | — |
| 5 | `/netzwerkservice` | `/leistungen/netzwerkservice` | **Kollision — Gruppe B** |
| 6 | `/workspaces` | `/leistungen/workspaces` | **Kollision — Gruppe B** |
| 7 | `/microsoft-365` | `/leistungen/microsoft-365` | **Kollision — Gruppe B** |
| 8 | `/microsoft-teams-beratung` | `/leistungen/microsoft-teams` | — |
| 9 | `/private-cloud-synology-nas` | `/leistungen/private-cloud` | — |
| 10 | `/private-cloud-mit-nas` | `/beitraege/private-cloud-mit-nas` | — |

**Drei Kollisionen.** Die Regeln 5–7 sind in `seo-redirects.js` erneut
enthalten (dort Gruppe B, Zeilen 38–40) mit identischer `source` **und**
identischem `destination`. Würde `seo-redirects.js` unverändert in
`next.config.ts` eingebunden, stünde dieselbe `source` zweimal in der Liste —
laut Runbook 2.3 ausdrücklich „ein Fehler“. Praktisch gewinnt die erste
Übereinstimmung und die zweite ist toter Ballast; eine Kette entsteht dadurch
nicht, weil die Ziele übereinstimmen. Zu bereinigen ist es trotzdem.

**Nebenbefund zu Regel 8 und Aufgabe 6 aus `CLAUDE.md`:**
`/microsoft-teams-beratung/` ist dort als einer der beiden Gewinner geführt
(Position 24,1 → 19,6). Diese URL leitet bereits seit dem Relaunch auf
`/leistungen/microsoft-teams` weiter. Der gemessene Positionsgewinn gehört
also der **Ziel**-Seite, nicht der alten Adresse — das ist ein Belegstück für
die Richtungsentscheidung in `CLAUDE.md`: die 301 hat funktioniert, die neue
URL hat die Signale geerbt und ist gestiegen. Für Aufgabe 6 heißt es: Arbeit an
`/leistungen/microsoft-teams` ausrichten, nicht an der flachen URL.
`/unifi-ubiquiti/` — der zweite Gewinner — hat dagegen **keine** Regel und ist
heute 404 (0.5). Das ist der teuerste Einzelposten der Phase 2.

---

### 0.5 Statuscodes — Ersatzmessung statt `verify-urls.sh`

#### Warum keine Live-Prüfung

`bash verify-urls.sh` war **nicht ausführbar**. Zwei Gründe:

1. **Egress-Sperre.** `https://datadiorama.com` ist in dieser Umgebung nicht
   erreichbar. Der Agent-Proxy antwortet auf CONNECT mit 403
   (`curl: (56) CONNECT tunnel failed`), die Proxy-Statusabfrage bestätigt
   `connect_rejected — gateway answered 403 to CONNECT (policy denial)` für
   `datadiorama.com:443`. Auch `WebFetch` schlägt fehl
   (`EGRESS_BLOCKED`). Das ist eine Richtlinie der
   Ausführungsumgebung, kein Fehler der Website.
2. **`urls-to-verify.txt` liegt nicht im Repository.** Ebenso fehlen
   `verify-urls.sh`, `redirect-map.csv`, `seo-redirects.js`,
   `vercel.redirects.json`, `trailing-slash.md`, `noindex-audit.md`,
   `exports-needed.md` und das ganze Verzeichnis `data/` (`idx.json`,
   `reasons.json`, `pairs.json`, `gsc.json`, `gsc_detail.json`,
   `compare.json`, `dupes_all.json`). `CLAUDE.md` listet sie unter „Dateien“,
   im Repository sind sie nicht vorhanden. Sie lagen dieser Sitzung nur als
   Anhang bei. **Konsequenz:** Runbook 2.1 Schritt (c) und Runbook 4.1 sind in
   ihrer notierten Form nicht ausführbar, solange `data/compare.json` und die
   Skripte nicht im Repository liegen.

#### Was stattdessen gemessen wurde

Production-Build des Commits `dc98985` (`npm run build`, `npm start`,
`localhost:3000`), 67 Pfade geprüft, je Statuscode, Weiterleitungsziel und
Sprungzahl. Grundlage: alle Quellen und Ziele aus `redirect-map.csv` plus die
Pfade der bestehenden 10 Regeln plus die vier `noindex`-Seiten.

Das misst die **Next.js-Ebene vollständig und beweiskräftig** — `redirects()`,
Trailing-Slash-Normalisierung, Routen-Existenz. Es misst **nicht** die
Traefik-/Coolify-Ebene davor. Die Live-Prüfung bleibt für Phase 2 nachzuholen,
bevor deployt wird.

#### Verteilung, Quell-URLs der Redirect-Map in ihrer echten Form

Entscheidend ist, dass `redirect-map.csv` alle Quellen **mit** Trailing Slash
notiert, Next.js aber bei `trailingSlash: false` die Slash-Form zuerst
normalisiert. Deshalb beide Formen gemessen:

| Quelle laut CSV (mit Slash) | Status | Gleiche URL ohne Slash | Endergebnis mit `-L` |
|---|---|---|---|
| 24 × Gruppe A und die Beitrags-Slugs | 308 → ohne Slash | **404** | 404 |
| `/netzwerkservice/` | 308 | **308** → `/leistungen/netzwerkservice` | 200, **2 Sprünge** |
| `/workspaces/` | 308 | **308** → `/leistungen/workspaces` | 200, **2 Sprünge** |
| `/microsoft-365/` | 308 | **308** → `/leistungen/microsoft-365` | 200, **2 Sprünge** |
| `/leistungen/microsoft-365/` | 308 | **200** | 200, 1 Sprung |
| `/team/` | 308 | **200** | 200, 1 Sprung |
| `/leistungen/hotel-wlan/` | 308 | **200** | 200, 1 Sprung |

Verteilung über die 27 Quellen der Redirect-Map, jeweils in der Form ohne
Trailing Slash (das ist die Form, in der eine `redirects()`-Regel greifen
würde):

| Status | Anzahl | betroffen |
|---|---|---|
| **404** | **21** | alle 21 Quellen der **Gruppe A** |
| **308** | **3** | `/netzwerkservice`, `/workspaces`, `/microsoft-365` — Gruppe B |
| **200** | **3** | `/leistungen/microsoft-365`, `/team`, `/leistungen/hotel-wlan` |

Alle 21 **Ziele** der Gruppe A (`/beitraege/<slug>`) antworten mit **200**.

#### Die Folgerung, und sie ist groß

Runbook 4.1 schreibt vor: **nur Quellen mit Status 200 übernehmen**, 301/308
weglassen (Kettengefahr), 404 gehören in Phase 2.

Wendet man diese Regel auf `redirect-map.csv` an, bleibt von 27 Regeln
**keine einzige** für Phase 4 übrig:

- **21 Regeln (Gruppe A, 38.503 Impressionen) → Phase 2.** Die Quellen sind
  404, nicht 200. Es sind keine Dubletten. Sie sind tote URLs, und ihre Ziele
  existieren bereits mit 200. Der Fall aus Runbook 2.2 lautet „Inhalt existiert
  unter neuer URL → die neue URL“ — die Zielzuordnung ist damit **nicht
  geraten, sondern belegt**.
- **3 Regeln (Gruppe B) → weglassen.** `/netzwerkservice`, `/workspaces`,
  `/microsoft-365` leiten bereits weiter, mit demselben Ziel. Eine zweite Regel
  wäre der in `CLAUDE.md` als „der gefährliche Fall“ bezeichnete Kettenbau.
- **3 Regeln (die 200er) → weglassen, weil sinnlos.** Alle drei sind
  Selbstverweise, dazu 0.7.

**`redirect-map.csv` beschreibt damit nicht den heutigen Zustand der Website.**
Die Datei unterstellt zwei parallel live erreichbare Fassungen. Für Gruppe A
trifft das nicht zu: die flache Fassung ist weg. Die Vermutung aus `CLAUDE.md`
Abschnitt „Warum zuerst geprüft werden muss“ — dass eine alte URL ihre
Impressionen vollständig aus der Zeit vor dem Relaunch haben kann — ist für
Gruppe A **eingetreten**. Der Vergleichszeitraum ab 9. Mai umfasst sieben
Wochen WordPress; daher die Impressionen, daher die besseren Positionen, daher
der Eindruck einer Dublette.

Damit ist auch die Argumentation in `CLAUDE.md` unter „Warum, obwohl die alten
URLs besser ranken“ zwar in ihrer Schlussfolgerung richtig (auf
`/beitraege/` konsolidieren), in ihrer Begründung aber überholt: es gibt keinen
Dublettenkonflikt mehr, den man auflösen müsste. Es gibt 21 tote URLs mit
zusammen 38.503 Impressionen Historie, die ins Leere zeigen. Das ist kein
Aufräumen, das ist ein Datenverlust, der noch läuft.

#### Die 24 404-URLs — 21 sind identifiziert

`reasons.json` meldet 24 „Nicht gefunden (404)“. Gefunden wurden 21 exakte
Treffer aus Gruppe A. Die Zahlen passen so gut zusammen, dass die Herkunft
klar ist: Commit `3ed91b5` vom 10.07. hat **24 Alt-Beiträge** migriert (0.6),
und für keinen davon wurde eine Weiterleitung angelegt.

Zusätzlich wurden weitere flache Pfade geprüft, die nach dem Datenmodell
früher existiert haben dürften. Alle antworten mit **404** und sind
**Kandidaten** für die restlichen drei Meldungen — belegt ist das nicht,
solange der Search-Console-Export fehlt:

`/blockchain-technologie`, `/cloud-loesungen-fuer-unternehmen`,
`/cyber-angriff`, `/google-workspace-vs-microsoft-365`,
`/it-nach-europa-holen`, `/it-sicherheit-schulung`,
`/kuenstliche-intelligenz-und-maschinelles-lernen`, `/microsoft-365-migration`,
`/professionelle-wlan-planung`, `/proxmox`, `/starlink-internet`

Das sind die 11 Beitrags-Slugs aus `src/data/posts.ts`, die **nicht** in Gruppe A
stehen (33 Slugs insgesamt, 21 in Gruppe A, `private-cloud-mit-nas` hat bereits
eine Regel). Ebenfalls 404, aber weniger wahrscheinlich, weil unklar ist, ob es
sie unter WordPress flach gab: `/it-support`, `/software-engineering`,
`/telefonanlagen`, `/home-office`, `/mailserver`, `/private-cloud`,
`/hotel-wlan`. Gegengeprüft und **nicht** betroffen: `/kontakt`, `/jobs`,
`/leistungen` liefern 200.

**Für Phase 2 gilt Runbook 2.2 unverändert:** die 21 belegten Fälle sind
entscheidbar, die 14 Kandidaten sind es **nicht**. Ohne den
Search-Console-Export ist bei ihnen nicht unterscheidbar, ob eine URL je
existiert hat, ob Inhalt zusammengelegt wurde oder ob 410 Gone das richtige
Mittel ist. **Nicht raten.**

---

### 0.6 Das Zeitfenster des Indexbruchs

`git log --since=2026-06-28 --until=2026-07-13` — acht Commits, alle von
Dominik Theis:

| Commit | Datum | Betreff | Verdacht |
|---|---|---|---|
| `1f6e589` | 30.06. | Hero: Netzwerk-Animation kontrastreicher | nein |
| `0fa042a` | 30.06. | Hero dynamisch + Repo-Slimming | nein |
| `a3d8877` | 30.06. | Angebots-Funnel ergänzen | nein |
| `c642d74` | 06.07. | Cisco-Schulungs-Aussage entfernen | nein |
| `6a5863b` | 06.07. | Kundenfeedback: Standorte, TK, Team-Fotos, Funnel | nein |
| `67b8165` | 08.07. | Hero-Stat, Menü-Label + drei neue Beiträge | gering |
| `48312a6` | 08.07. | Proxmox-Beitrag: Entwurf durch Originaltext | nein |
| `173da30` | **10.07.** | Fernzugriff: Support-Installer ins Repo | nein |
| `f5910eb` | 09.07. | Mail-Versand: SMTP via nodemailer | nein |
| `5388a6f` | **10.07.** | Bilder lokalisieren: WP-Medien nach `public/media/` | **ja — `next.config.ts`** |
| `5550db2` | **10.07.** | RMM-Seite mit Agent-Download | **ja — `src/app/robots.ts`** |
| `a741085` | 10.07. | rmm: Wording | nein |
| `de065a0` | 10.07. | Beiträge: Autor Maximilian Dalichow | nein |
| `15333b7` | 10.07. | Team: Ole Graf entfernt | nein |
| `3ed91b5` | **10.07.** | **24 Alt-Beiträge migriert** | **ja — die Ursache** |
| `1a32242` | 10.07. | Fotos: 7864 → 7783 | nein |

**Am 10. Juli wurden sieben Commits abgesetzt. Der Indexeinbruch datiert auf
den 11. Juli. Das ist ein Deployment, und es ist zu finden.** Die drei
relevanten Commits, geprüft:

**`3ed91b5` — 24 Alt-Beiträge migriert.** `src/data/posts.ts` +288 Zeilen,
`src/data/posts-content.ts` +1559 Zeilen. Damit entstanden 24 neue Routen unter
`/beitraege/<slug>`, die alle sofort in `src/app/sitemap.ts` landen (die Sitemap
wird aus `POSTS` generiert). **Für keinen dieser 24 Beiträge wurde eine
Weiterleitung von der alten flachen URL angelegt** — `next.config.ts` wurde in
diesem Commit nicht angefasst. Genau das erklärt die 24 404-Meldungen (0.5) und
über die Weiterleitungslücke auch den Impressionsverlust: Google verlor 24
etablierte Adressen und bekam 24 unbekannte neue ohne Signalübertragung.

**Das ist die Erklärung für den 11. Juli.** Nicht `noindex`, nicht robots.txt.
Eine Migration ohne Redirects.

**`5388a6f` — Bilder lokalisieren.** Ändert `next.config.ts`: entfernt
`images.remotePatterns` für `datadiorama.com/wp-content/**`. Die
`redirects()`-Liste blieb dabei unverändert — nachgeprüft, der Diff berührt nur
den `images`-Block. Die Commit-Nachricht enthält eine wichtige Feststellung:
„Die absoluten wp-content-URLs lieferten nach dem Relaunch 404, weil die alte
WordPress-Installation unter derselben Domain nicht mehr existiert." Das
**bestätigt unabhängig**, dass die alte WordPress-Instanz zum 10.07. nicht mehr
erreichbar war — und damit, dass die flachen URLs 404 liefern (0.5). Ein
Nebeneffekt hiervon: alle Bild-URLs unter `/wp-content/` sind ebenfalls tot.
Bilder tauchen in der Search Console nicht in der Seitenindexierung auf, können
aber Impressionen in der Bildsuche gekostet haben. Nicht Teil dieses Runbooks,
hier nur vermerkt.

**`5550db2` — RMM-Seite.** Ändert `src/app/robots.ts`: `disallow` wird um
`/rmm` erweitert. Eine Zeile, ein neuer Pfad, sauber gemacht (Seite ist auch
`noIndex`, nicht in der Sitemap). **Kein Verdacht** — die Sperre betrifft
ausschließlich die neue Route und kann keine 20 bestehenden Seiten aus dem
Index werfen.

**Was ausdrücklich nicht gefunden wurde:** keine Änderung an
`src/lib/seo.ts`, `src/app/layout.tsx` oder `src/app/sitemap.ts` im gesamten
Fenster. `git log` über diese Dateien zeigt für `sitemap.ts` und `seo.ts`
überhaupt nur den Relaunch-Commit `6c09698`. Die Robots- und Canonical-Logik
war am 11. Juli identisch mit der am 1. Juli — und identisch mit heute.

**Der Klickrückgang seit April** (683 → 143, laut `CLAUDE.md` die zweite,
frühere Ursache) liegt vollständig vor dem ersten Commit dieses Repositories
und ist hier grundsätzlich nicht auffindbar. Er betrifft die WordPress-Zeit.

---

### 0.7 Drei Selbstverweise in `seo-redirects.js` — verifizierter Site-Breaker

`seo-redirects.js` enthält drei Regeln, bei denen `source` und `destination`
identisch sind:

```js
{ source: "/leistungen/microsoft-365",  destination: "/leistungen/microsoft-365",  permanent: true },
{ source: "/team",                      destination: "/team",                      permanent: true },
{ source: "/leistungen/hotel-wlan",     destination: "/leistungen/hotel-wlan",     permanent: true },
```

Die Ursache ist erkennbar: `redirect-map.csv` notiert für diese drei Zeilen die
Quelle **mit** und das Ziel **ohne** Trailing Slash (`/team/` → `/team`). Beim
Erzeugen der JS-Datei wurde der Slash aus der Quelle entfernt — und aus einer
sinnvollen Slash-Normalisierung wurde ein Selbstverweis.

**Empirisch geprüft**, in einer Wegwerf-Kopie des Repositories außerhalb des
Arbeitsbaums, mit `seo-redirects.js` als einziger `redirects()`-Quelle:

```
GET /team                → HTTP/1.1 308 Permanent Redirect
                           location: /team
curl -L --max-redirs 5   → 308, hops=5, Endpunkt immer noch /team
curl -L /leistungen/hotel-wlan → 308, hops=5
```

Das ist eine **Endlosschleife**. Ein Browser bricht mit
`ERR_TOO_MANY_REDIRECTS` ab, Google mit einem Weiterleitungsfehler. `/team`
hält laut `redirect-map.csv` 751 Impressionen und **41 Klicks** — der stärkste
Einzelposten der Gruppe C und laut `CLAUDE.md` eine der zwei Seiten, die
zusammen 76,5 % aller Klicks tragen. Diese drei Regeln würden die
klickstärkste Unterseite der Website unerreichbar machen.

Zur Gegenkontrolle im gleichen Lauf: die Gruppe-A-Regeln arbeiten korrekt.
`/word-online-nutzen` → 200 in **einem** Sprung auf
`/beitraege/word-online-nutzen`.

**`seo-redirects.js` darf in dieser Form nicht deployt werden.** Nach der
200-Filterung aus Runbook 4.1 entfallen alle drei Selbstverweise ohnehin — die
Filterung ist also nicht nur Formsache, sie fängt diesen Fehler ab. Da die
Datei nicht im Repository liegt, wurde sie nicht korrigiert (Runbook-Grundregel
4). Sie ist vor jeder Verwendung zu bereinigen.

---

### 0.8 Trailing Slash — Vorentscheidung für Phase 3

`trailingSlash` ist in `next.config.ts` **nicht gesetzt**. Damit gilt der
Standard `false`. Verifiziert am Build:

```
/team/                      → 308 → /team          (1 Sprung, dann 200)
/leistungen/hotel-wlan/     → 308 → /leistungen/hotel-wlan
/leistungen/microsoft-365/  → 308 → /leistungen/microsoft-365
/beitraege/                 → 308 → /beitraege
/leistungen/                → 308 → /leistungen
```

Das ist **Zeile 1 der Entscheidungstabelle in Runbook 3.1**: „`trailingSlash`
nicht gesetzt oder `false`, und `/team/` liefert 308 auf `/team`“ → **Nichts
tun.** Gruppe C ist auf Next.js-Ebene gelöst. Die Zielform aller
Weiterleitungsregeln ist **ohne** Trailing Slash. Sitemap und Canonicals sind
schon in dieser Form (0.1, 0.3) — die Konvention ist also über alle drei Ebenen
konsistent.

**Ein Vorbehalt, und er ist nicht kosmetisch.** Gemessen wurde die
Next.js-Ebene. Unter Coolify steht ein Reverse Proxy davor. Zeile 2 derselben
Tabelle beschreibt genau den Fall, dass `/team/` von außen mit 200 antwortet,
weil die Proxy-Ebene den Slash selbst bedient. Ob das hier zutrifft, ist ohne
Live-Zugriff nicht feststellbar. **Vor Phase 3 ist ein einzelnes
`curl -sI https://datadiorama.com/team/` nachzuholen.** Erwartung: 308 auf
`/team`. Kommt 200, gilt Zeile 2 statt Zeile 1.

**Der bereits heute bestehende Kettenfall.** Vier Pfade brauchen schon jetzt
zwei Sprünge, weil die Slash-Normalisierung und eine `redirects()`-Regel
hintereinander greifen:

| Pfad | Sprung 1 | Sprung 2 | Ziel |
|---|---|---|---|
| `/microsoft-365/` | 308 → `/microsoft-365` | 308 → `/leistungen/microsoft-365` | 200 |
| `/netzwerkservice/` | 308 → `/netzwerkservice` | 308 → `/leistungen/netzwerkservice` | 200 |
| `/workspaces/` | 308 → `/workspaces` | 308 → `/leistungen/workspaces` | 200 |
| `/microsoft-teams-beratung/` | 308 → `/microsoft-teams-beratung` | 308 → `/leistungen/microsoft-teams` | 200 |

Das verstößt gegen die Vorgabe aus `CLAUDE.md` „Vor dem Deployment“
(„jede Regel muss in einem Schritt zum Ziel führen“) und gegen Runbook 2.4
(„mehr als 1 Sprung ist ein Fehler“) — allerdings **im Bestand**, nicht durch
eine neue Regel. Google folgt zwei Sprüngen ohne Signalverlust, der Schaden ist
gering. Behebbar wäre es durch eine zusätzliche Regel je Slash-Variante. Das
ist eine Auffälligkeit im Sinne der Grundregel 4: **dokumentiert, nicht
behoben.** Entscheidung dazu gehört in Phase 3.

---

### 0.9 Routen-Inventar (Runbook 0.5) — mit einer Einschränkung

**Heutige Routen** (14 `page.tsx`, davon 3 dynamisch):

```
src/app/page.tsx                    src/app/kontakt/page.tsx
src/app/angebot/page.tsx            src/app/leistungen/page.tsx
src/app/beitraege/page.tsx          src/app/leistungen/[slug]/page.tsx
src/app/beitraege/[slug]/page.tsx   src/app/rmm/page.tsx
src/app/datenschutz/page.tsx        src/app/team/page.tsx
src/app/fernzugriff/page.tsx        src/app/impressum/page.tsx
src/app/jobs/page.tsx               src/app/jobs/[slug]/page.tsx
```

Daraus **56 konkrete URLs** (Build-Ausgabe, deckungsgleich mit der Sitemap):
7 statische Seiten, 11 Leistungen, 5 Jobs, 33 Beiträge.

**„Routen vor dem Relaunch“ ist über `git` nicht ermittelbar.** Der Befehl aus
Runbook 0.5 wurde ausgeführt, `git rev-list -1 --before=2026-07-01 HEAD` löst
auf `1f6e589` vom 30.06. auf — und liefert praktisch dieselbe Routenliste wie
heute (es fehlen nur `/rmm`, das erst am 10.07. entstand). **Grund:** die
Historie dieses Repositories beginnt am **24.06.2026** mit
`38272f5 Initial commit from Create Next App`, gefolgt von
`6c09698 Relaunch datadiorama-Website als Next.js-App` am 25.06. Es ist ein
Neubau. Die WordPress-Historie liegt nicht hier, in keinem Commit.

**Konsequenz für Phase 2:** Der Ableitungsweg (b) aus Runbook 2.1
(`diff routes-before routes-now`) trägt nicht. Weg (a) — die Statusprüfung —
hat 21 der 24 URLs geliefert (0.5). Weg (c) braucht `data/compare.json`, das
nicht vorliegt. **Für die restlichen drei URLs ist der Search-Console-Export
der einzige verbleibende Weg.** Dieselben 33 Beitrags-Slugs aus
`src/data/posts.ts` sind die beste Kandidatenliste, die dieses Repository
hergibt — und die letzten drei sind daraus nicht mit Sicherheit zu bestimmen.

---

### 0.10 Ein Widerspruch im Zielwert, der vor Phase 1 geklärt werden sollte

`CLAUDE.md` und Runbook 1.5 nennen als Erfolgskontrolle: **indexierte Seiten
zurück über 83** (Stand 10. Juli).

Die Website kann aus eigener Kraft derzeit maximal **55** indexierbare URLs
anbieten: 56 Sitemap-Einträge minus `/fernzugriff` (`noindex` und per
robots.txt gesperrt). `/impressum`, `/datenschutz` und `/rmm` stehen gar nicht
in der Sitemap. Selbst bei vollständiger Indexierung jeder einzelnen Seite ist
83 **arithmetisch nicht erreichbar**.

Die Erklärung liegt nahe: die 83 vom 10. Juli enthielten die alten flachen
URLs, die zu diesem Zeitpunkt noch im Index standen, obwohl sie schon 404
lieferten. Nach Phase 2 werden sie zu 301-Weiterleitungen — und eine
weitergeleitete URL zählt in der Search Console **nicht** als „indexiert“,
sondern als „Seite mit Weiterleitung“. **Ein erfolgreiches Phase 2 senkt die
Zahl der indexierten Seiten also, statt sie zu heben.**

Das ist keine Empfehlung, das Ziel zu ändern — das ist eine Entscheidung des
Auftraggebers. Aber die Kennzahl „über 83“ wird mit dem hier beschriebenen
Vorgehen nicht erreichbar sein, und darauf sollte man sich nicht erst im
September berufen. **Belastbarere Leitkennzahl wären die Impressionen pro Tag
(Ziel > 1.000) und die Zahl der 404-Meldungen (Ziel 0).** Beide sind vom
Umzugseffekt nicht verzerrt.

---

### Offene Punkte am Ende von Phase 0

| # | Punkt | Blockiert | Nötig |
|---|---|---|---|
| 1 | Live-Statuscodes | Phase 2 Deployment, Phase 3 Zeile 1 vs. 2 | `bash verify-urls.sh` aus einer Umgebung ohne Egress-Sperre |
| 2 | Die 12 `noindex`-URLs | Phase 1 Entscheidung | Search-Console-Export |
| 3 | Die restlichen 3 der 24 404-URLs | Phase 2 Vollständigkeit | Search-Console-Export |
| 4 | Fehlende Repo-Dateien | Runbook 2.1(c), 4.1, 4.2 | `verify-urls.sh`, `urls-to-verify.txt`, `redirect-map.csv`, `seo-redirects.js`, `data/*.json` ins Repository |
| 5 | `seo-redirects.js` bereinigen | Phase 4 | 3 Selbstverweise entfernen, 3 Gruppe-B-Dubletten entfernen (0.4, 0.7) |
| 6 | Zielwert „über 83“ | Erfolgskontrolle | Entscheidung des Auftraggebers (0.10) |

### Was Phase 0 an der Planung verschiebt

1. **Phase 1 ist nach Aktenlage gegenstandslos.** Der Code erzeugt kein
   fehlerhaftes `noindex`. Kein Eingriff, bis Punkt 2 geklärt ist.
2. **Phase 2 ist die eigentliche Arbeit und ist dringend.** 21 der 24 URLs
   sind belegt, ihre Ziele sind belegt, zusammen 38.503 Impressionen Historie.
   Darunter `/unifi-ubiquiti` (5.049 Impressionen, 23 Klicks) und
   `/rechnungsprogramm-fuer-kleinunternehmer` (21.089 Impressionen).
3. **Phase 3 ist Zeile 1: nichts tun** — vorbehaltlich Punkt 1.
4. **Phase 4 ist leer.** Nach der 200-Filterung bleibt von 27 Regeln keine
   übrig. Es gibt keine echten Dubletten mehr zu konsolidieren. Die
   Erholungsphase von Wochen, die `CLAUDE.md` als Preis der Konsolidierung
   nennt, fällt damit weg.
5. **Die Reihenfolge ändert sich damit von „1 → 2 → 3 → 4“ auf
   „2 → Kontrolle“.** Das ist eine Verkürzung des Plans, keine Erweiterung,
   und sie sollte vor Beginn von Phase 2 bestätigt werden.

**Verifiziert:** `npm run build` läuft ohne Fehler durch, TypeScript ohne
Beanstandung, 68 Seiten prerendered. Der Arbeitsbaum ist unverändert; die für
die Messungen installierten `node_modules` und `.next/` sind per `.gitignore`
ausgeschlossen, `package-lock.json` wurde auf den Stand von `dc98985`
zurückgesetzt.
