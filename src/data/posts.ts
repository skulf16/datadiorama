import type { Post } from "@/lib/types";
import { POST_CONTENT } from "@/data/posts-content";
import { getTeamMember } from "@/data/team";

// Autor-Zuordnung nach Themenschwerpunkt; ohne Eintrag gilt der Standard-Autor.
const DEFAULT_AUTHOR = "Maximilian Dalichow";

const POST_AUTHORS: Record<string, string> = {
  // Christian Anger: Strategie, Souveränität & Datenschutz
  "it-nach-europa-holen": "Christian Anger",
  "it-outsourcing-vorteile": "Christian Anger",
  "blockchain-technologie": "Christian Anger",
  "was-ist-der-us-cloud-act": "Christian Anger",
  "was-ist-informationssicherheit": "Christian Anger",
  "it-sicherheit-schulung": "Christian Anger",
  "edge-computing": "Christian Anger",
  "starlink-internet": "Christian Anger",
  // Tino Schmidt: Business-, Cloud- & Workspace-Themen
  "kuenstliche-intelligenz-und-maschinelles-lernen": "Tino Schmidt",
  "automatisierung-von-geschaeftsprozessen": "Tino Schmidt",
  "cloud-loesungen-fuer-unternehmen": "Tino Schmidt",
  "rechnungsprogramm-fuer-kleinunternehmer": "Tino Schmidt",
  "google-workspace-vs-microsoft-365": "Tino Schmidt",
  "dokumentenmanagement": "Tino Schmidt",
  "microsoft-365-migration-fallbeispiel": "Tino Schmidt",
  "web-app-vs-desktop-app": "Tino Schmidt",
  "word-online-nutzen": "Tino Schmidt",
  // Alle übrigen Beiträge: Maximilian Dalichow (Standard-Autor)
};

function withContent(post: Post): Post {
  const content = POST_CONTENT[post.slug];
  const merged = content ? { ...post, ...content } : { ...post };
  const author = getTeamMember(POST_AUTHORS[post.slug] ?? DEFAULT_AUTHOR);
  return author ? { ...merged, author } : merged;
}

/**
 * Kuratierte, evergreene Fachbeiträge. Metadaten sind gesetzt; die ausführlichen
 * Inhalte (intro, sections, faq) werden befüllt und können fortlaufend erweitert werden.
 */
export const POSTS: Post[] = [
  {
    slug: "die-3-stufen-des-backup-zen",
    title: "Die 3 Stufen des Backup-Zen",
    excerpt:
      "Vom USB-Stick am Schlüsselbund zum unveränderlichen Duplikat im EU-Rechenzentrum: Warum jedes Unternehmen ein Backup-Konzept braucht – und wie drei Ausbaustufen zu tiefer Gelassenheit führen.",
    category: "Datensicherheit",
    date: "2026-06-29",
    readingMinutes: 4,
    metaDescription:
      "Backup-Konzept für Unternehmen: die 3 Stufen des Backup-Zen – automatische lokale Sicherung, unveränderliches Duplikat und verschlüsselte Kopie im EU-Rechenzentrum.",
    relatedServiceSlugs: ["private-cloud", "it-beratung"],
  },
  {
    slug: "proxmox",
    title: "Windows Server auf Proxmox übertragen – Warum der Abschied von Microsoft für viele Unternehmen sinnvoll ist",
    excerpt:
      "Steigende Lizenzkosten, Vendor Lock-in, komplexe Lizenzmodelle: Warum die Migration von Windows Servern auf Proxmox VE sinnvoll ist – und wie der sanfte Umstieg gelingt.",
    category: "IT-Infrastruktur",
    date: "2026-06-25",
    readingMinutes: 6,
    metaDescription:
      "Windows Server auf Proxmox migrieren: weniger Lizenzkosten, mehr Unabhängigkeit und Datensouveränität. So gelingt der schrittweise Umstieg auf Open Source.",
    relatedServiceSlugs: ["private-cloud", "it-beratung"],
  },
  {
    slug: "it-nach-europa-holen",
    title: "IT nach Europa holen",
    excerpt:
      "Datenspeicherung, Kommunikation, Software: Auf welchen Ebenen Unternehmen ihre IT stärker unter eigene Kontrolle bringen können – ein Überblick für KMU und Institutionen.",
    category: "Digitale Souveränität",
    date: "2026-05-28",
    readingMinutes: 9,
    metaDescription:
      "IT-Souveränität für KMU: Wie Unternehmen Datenspeicherung, E-Mail, Chat und Software stärker unter eigene Kontrolle bringen – mit europäischen Alternativen.",
    relatedServiceSlugs: ["private-cloud", "workspaces", "mailserver"],
  },
  {
    slug: "it-outsourcing-vorteile",
    title: "IT-Outsourcing: Vorteile für kleine und mittlere Unternehmen",
    excerpt:
      "Warum sich das Auslagern der IT-Betreuung an ein Systemhaus lohnt – und worauf Sie bei der Wahl eines IT-Partners achten sollten.",
    category: "IT-Strategie",
    date: "2026-05-12",
    readingMinutes: 6,
    metaDescription:
      "IT-Outsourcing für KMU: Vorteile, Kosten und Auswahlkriterien. Wann sich ein externes IT-Systemhaus lohnt und worauf Sie achten sollten.",
    relatedServiceSlugs: ["it-beratung", "netzwerkservice"],
  },
  {
    slug: "google-workspace-vs-microsoft-365",
    title: "Google Workspace vs. Microsoft 365: Welche Plattform passt zu Ihnen?",
    excerpt:
      "Beide Plattformen bieten E-Mail, Dateien und Zusammenarbeit – setzen aber unterschiedliche Schwerpunkte. Ein Vergleich für Entscheider.",
    category: "Cloud & Workspace",
    date: "2026-04-28",
    readingMinutes: 7,
    metaDescription:
      "Google Workspace vs. Microsoft 365 im Vergleich: Funktionen, Zusammenarbeit, Sicherheit und Kosten. So finden Unternehmen die passende Plattform.",
    relatedServiceSlugs: ["workspaces", "microsoft-365"],
  },
  {
    slug: "professionelle-wlan-planung",
    title: "Professionelle WLAN-Planung: So gelingt lückenloses WLAN im Unternehmen",
    excerpt:
      "Funklöcher, Abbrüche, langsame Verbindungen? Wie eine professionelle WLAN-Planung stabile Abdeckung für Büro, Hotel und Lager schafft.",
    category: "Netzwerk",
    date: "2026-04-10",
    readingMinutes: 6,
    metaDescription:
      "Professionelle WLAN-Planung für Unternehmen: Ausleuchtung, Access-Point-Platzierung und sichere Netze. So gelingt lückenloses, stabiles WLAN.",
    relatedServiceSlugs: ["netzwerkservice", "hotel-wlan"],
  },
  {
    slug: "zwei-faktor-authentifizierung-im-homeoffice",
    title: "2-Faktor-Authentifizierung im Home-Office: Schutz, der sich lohnt",
    excerpt:
      "Passwörter allein reichen nicht. Wie 2-Faktor-Authentifizierung Home-Office-Zugänge absichert – einfach erklärt.",
    category: "IT-Sicherheit",
    date: "2026-03-22",
    readingMinutes: 5,
    metaDescription:
      "2-Faktor-Authentifizierung (2FA) im Home-Office: Wie sie funktioniert, warum sie wichtig ist und wie Unternehmen sie sicher einführen.",
    relatedServiceSlugs: ["home-office", "netzwerkservice"],
  },
  {
    slug: "private-cloud-mit-nas",
    title: "Private Cloud mit NAS: Datenhoheit zurückgewinnen",
    excerpt:
      "Cloud-Komfort ohne Kontrollverlust: Wie eine private Cloud auf NAS-Basis Daten DSGVO-konform in Europa hält.",
    category: "Cloud & Datenschutz",
    date: "2026-03-03",
    readingMinutes: 6,
    metaDescription:
      "Private Cloud mit NAS: Datenhoheit, DSGVO-Konformität und Backups. Wie Unternehmen Cloud-Komfort mit voller Kontrolle über ihre Daten verbinden.",
    relatedServiceSlugs: ["private-cloud", "workspaces"],
  },
  {
    slug: "was-ist-der-us-cloud-act",
    title: "Was ist der US CLOUD Act – und warum betrifft er deutsche Unternehmen?",
    excerpt:
      "Der CLOUD Act ermöglicht US-Behörden den Zugriff auf Daten US-amerikanischer Anbieter – selbst wenn diese in Europa liegen. Was das bedeutet.",
    category: "Datenschutz",
    date: "2026-02-14",
    readingMinutes: 6,
    metaDescription:
      "US CLOUD Act einfach erklärt: Warum US-Cloud-Anbieter ein DSGVO-Risiko sein können und welche Alternativen deutsche Unternehmen haben.",
    relatedServiceSlugs: ["private-cloud", "mailserver"],
  },
  {
    slug: "was-ist-informationssicherheit",
    title: "Was ist Informationssicherheit? So schützen Sie Ihr Unternehmen effektiv",
    excerpt:
      "Vertraulichkeit, Integrität, Verfügbarkeit: Was Informationssicherheit umfasst, welche Folgen Versäumnisse haben und wie Unternehmen sich schützen.",
    category: "IT-Sicherheit",
    date: "2024-11-12",
    readingMinutes: 5,
    metaDescription:
      "Was ist Informationssicherheit? Schutzziele, rechtliche Pflichten und die Folgen unzureichender Sicherheit – so schützen Sie Ihr Unternehmen effektiv.",
    relatedServiceSlugs: ["it-beratung", "mailserver", "netzwerkservice"],
  },
  {
    slug: "dokumentenmanagement",
    title: "Dokumentenmanagement: Effizienz und Sicherheit durch digitale Organisation",
    excerpt:
      "Verträge, Rechnungen, Kundenakten – die Dokumentenflut wächst. Wie ein Dokumentenmanagement-System (DMS) Ordnung schafft und welche Lösungen sich bewährt haben.",
    category: "Cloud & Workspace",
    date: "2024-05-30",
    readingMinutes: 4,
    metaDescription:
      "So gelingt Dokumentenmanagement: effiziente Organisation und Archivierung Ihrer Dokumente mit den passenden DMS-Lösungen.",
    relatedServiceSlugs: ["microsoft-365", "workspaces"],
  },
  {
    slug: "e-mail-archivierung",
    title: "E-Mail-Archivierung: Pflicht für Unternehmen und unverzichtbar für Sicherheit und Effizienz",
    excerpt:
      "Unternehmen müssen geschäftsrelevante E-Mails revisionssicher archivieren. Was hinter der Archivierungspflicht steckt und welche Lösungen sich anbieten.",
    category: "Cloud & Workspace",
    date: "2024-05-30",
    readingMinutes: 5,
    metaDescription:
      "Nie wieder wichtige E-Mails verlieren: So gelingt rechtssichere und effiziente E-Mail-Archivierung im Unternehmen.",
    relatedServiceSlugs: ["mailserver", "microsoft-365"],
  },
  {
    slug: "unifi-ubiquiti",
    title: "UniFi Ubiquiti: Leistungsstarkes Netzwerk für Ihr Unternehmen",
    excerpt:
      "Skalierbares WLAN für Unternehmen: Was hinter dem UniFi-System von Ubiquiti steckt – von Access Points über Switches bis zur zentralen Verwaltungssoftware.",
    category: "Netzwerk",
    date: "2024-05-03",
    readingMinutes: 4,
    metaDescription:
      "UniFi Ubiquiti im Überblick: Hardware, Software und Vorteile des skalierbaren WLAN-Systems für Unternehmen – eingerichtet vom zertifizierten UniFi-Partner.",
    relatedServiceSlugs: ["netzwerkservice", "hotel-wlan", "it-beratung"],
  },
  {
    slug: "edge-computing",
    title: "Edge Computing: Schneller, intelligenter und vernetzter in die Zukunft",
    excerpt:
      "Edge Computing verarbeitet Daten direkt dort, wo sie entstehen. Welche Vorteile das bringt, welche Herausforderungen es gibt und wo die Technologie heute schon eingesetzt wird.",
    category: "IT-Infrastruktur",
    date: "2023-11-13",
    readingMinutes: 5,
    metaDescription:
      "Edge Computing transportiert Unternehmen schneller, intelligenter und vernetzter in die Zukunft. Vorteile, Herausforderungen und Anwendungsbereiche im Überblick.",
    relatedServiceSlugs: ["netzwerkservice", "private-cloud", "it-beratung"],
  },
  {
    slug: "blockchain-technologie",
    title: "Blockchain-Technologie: Die Revolution der digitalen Transaktionen",
    excerpt:
      "Dezentral, transparent, manipulationssicher: Was hinter der Blockchain-Technologie steckt, wo sie eingesetzt wird und was Unternehmen rechtlich beachten sollten.",
    category: "IT-Strategie",
    date: "2023-08-30",
    readingMinutes: 4,
    metaDescription:
      "Blockchain-Technologie verständlich erklärt: Aufbau, Besonderheiten, Einsatzbranchen sowie Vor- und Nachteile und rechtliche Aspekte für Unternehmen.",
    relatedServiceSlugs: ["software-engineering", "it-beratung"],
  },
  {
    slug: "kuenstliche-intelligenz-und-maschinelles-lernen",
    title: "Künstliche Intelligenz und Maschinelles Lernen: 4 Anwendungsbereiche für KMU",
    excerpt:
      "KI und Machine Learning sind längst nicht nur etwas für Großkonzerne. Vier konkrete Anwendungsbereiche, in denen kleine und mittelständische Unternehmen profitieren können.",
    category: "IT-Strategie",
    date: "2023-06-28",
    readingMinutes: 5,
    metaDescription:
      "Künstliche Intelligenz und Maschinelles Lernen: 4 Anwendungsbereiche, in denen kleine und mittelständische Unternehmen von KI und ML profitieren können.",
    relatedServiceSlugs: ["software-engineering", "it-beratung"],
  },
  {
    slug: "cyber-angriff",
    title: "Cyber-Angriff – für viele Unternehmen inzwischen eine ernste Bedrohung",
    excerpt:
      "Phishing, Ransomware, DDoS: Welche Arten von Cyber-Angriffen es gibt, warum auch kleine Unternehmen betroffen sind und welche Schutzmaßnahmen wirklich helfen.",
    category: "IT-Sicherheit",
    date: "2023-05-26",
    readingMinutes: 5,
    metaDescription:
      "Cyber-Angriffe gelten nicht nur in Regierungskreisen als Bedrohung. Wir erläutern gängige Maschen und helfen, die Backdoor zu schließen.",
    relatedServiceSlugs: ["it-beratung", "netzwerkservice", "home-office"],
  },
  {
    slug: "microsoft-exchange-server",
    title: "Microsoft Exchange Server: 5 gute Gründe für die Serveranwendung in Ihrem Unternehmen",
    excerpt:
      "Microsoft Exchange verwaltet E-Mails, Termine, Kontakte und Aufgaben zentral. Welche Vorteile die Server-Software Unternehmen konkret bietet – von Teamarbeit bis Sicherheit.",
    category: "IT-Infrastruktur",
    date: "2023-05-05",
    readingMinutes: 5,
    metaDescription:
      "Microsoft Exchange Server: Wie die Server-Software funktioniert und welche 5 Vorteile sie Unternehmen bietet – von E-Mail-Verwaltung bis Skalierbarkeit.",
    relatedServiceSlugs: ["mailserver", "microsoft-365", "it-beratung"],
  },
  {
    slug: "passwort-manager-fuer-unternehmen",
    title: "Passwort-Manager für Unternehmen: Der beste Schutz für Ihre Konten",
    excerpt:
      "Ein Passwort-Manager erhöht die IT-Sicherheit und erleichtert die Zusammenarbeit im Team. Welche Vorteile er bietet, worauf Sie achten sollten und welche Lösungen sich für Unternehmen eignen.",
    category: "IT-Sicherheit",
    date: "2023-03-29",
    readingMinutes: 6,
    metaDescription:
      "Schützen Sie mit einem Passwort-Manager für Unternehmen Ihre Konten. Wir haben hier die besten miteinander verglichen.",
    relatedServiceSlugs: ["it-beratung", "workspaces"],
  },
  {
    slug: "starlink-internet",
    title: "Starlink – eine gute Wahl für die Internetanbindung?",
    excerpt:
      "Schnelles Internet per Satellit, auch dort, wo DSL und Glasfaser fehlen: Wie Starlink funktioniert, was es kostet und für wen es sich lohnt.",
    category: "Netzwerk",
    date: "2022-12-12",
    readingMinutes: 5,
    metaDescription:
      "Ist Starlink eine gute Wahl für Ihre Internetanbindung? Finden Sie es heraus. Alle Infos zu den Kosten und der Abdeckung gibt es hier.",
    relatedServiceSlugs: ["netzwerkservice", "it-beratung", "home-office"],
  },
  {
    slug: "netzwerksicherheit-unternehmen",
    title: "Netzwerksicherheit im Unternehmen: Das sind die 6 häufigsten Probleme",
    excerpt:
      "Von fehlenden Firewalls über Phishing bis BYOD: Diese sechs Schwachstellen gefährden die Sicherheit von Unternehmensnetzwerken am häufigsten – und so beugen Sie vor.",
    category: "IT-Sicherheit",
    date: "2022-10-27",
    readingMinutes: 6,
    metaDescription:
      "Netzwerksicherheit im Unternehmen: Die 6 häufigsten Probleme – von schwachen Firewalls über Phishing-Mails bis BYOD – und wie Sie ihnen begegnen.",
    relatedServiceSlugs: ["netzwerkservice", "it-beratung", "home-office"],
  },
  {
    slug: "automatisierung-von-geschaeftsprozessen",
    title: "Automatisierung von Geschäftsprozessen: Wie Sie Ihr Team aus der Copy-&-Paste-Hölle holen",
    excerpt:
      "Dokumente manuell übertragen kostet Zeit und produziert Fehler. Warum sich die Automatisierung wiederkehrender Aufgaben lohnt – und wo sie besonders viel bringt.",
    category: "IT-Strategie",
    date: "2022-08-24",
    readingMinutes: 3,
    metaDescription:
      "Nie wieder Copy & Paste: Wie die Automatisierung von Geschäftsprozessen Zeit und Kosten spart, Fehler verhindert und Mitarbeitende entlastet.",
    relatedServiceSlugs: ["software-engineering", "it-beratung"],
  },
  {
    slug: "it-sicherheit-schulung",
    title: "IT-Sicherheit-Schulung: Wie ungeschulte Angestellte ihre Arbeitgeber in Gefahr bringen",
    excerpt:
      "Die meisten Cyberangriffe brauchen Mitwirkung von innen – oft unwissentlich. Warum Security-Awareness-Schulungen der größte Hebel für mehr Unternehmenssicherheit sind.",
    category: "IT-Sicherheit",
    date: "2022-06-20",
    readingMinutes: 4,
    metaDescription:
      "IT-Sicherheit-Schulung: Warum Security-Awareness-Trainings für Mitarbeitende der größte Hebel gegen Cyberangriffe sind – und welche Schulungen sinnvoll sind.",
    relatedServiceSlugs: ["it-beratung", "home-office"],
  },
  {
    slug: "microsoft-365-migration-fallbeispiel",
    title: "Microsoft 365 Migration – ein Fallbeispiel",
    excerpt:
      "Wie eine Kinder- und Jugendhilfe-Einrichtung mit 40 Mitarbeitern an verteilten Standorten erfolgreich auf Microsoft 365 umgestellt hat – von der Ausgangslage bis zum Ergebnis.",
    category: "Cloud & Workspace",
    date: "2022-05-10",
    readingMinutes: 3,
    metaDescription:
      "In diesem Artikel beleuchten wir ein Fallbeispiel, in dem wir eine Microsoft 365 Migration erfolgreich für einen Kunden durchgeführt haben.",
    relatedServiceSlugs: ["microsoft-365", "microsoft-teams", "workspaces"],
  },
  {
    slug: "web-app-vs-desktop-app",
    title: "Web App vs. Desktop App: Haben lokale Anwendungen noch eine Zukunft?",
    excerpt:
      "Lokal installieren oder im Browser arbeiten? Die Vor- und Nachteile von Desktop- und Web-Anwendungen im Vergleich – und wann welcher Ansatz sinnvoll ist.",
    category: "Cloud & Workspace",
    date: "2022-05-10",
    readingMinutes: 5,
    metaDescription:
      "Haben lokale Anwendungen noch eine Zukunft? Dieser Frage gehen wir in unserem Artikel nach und klären über die passenden Lösungen auf.",
    relatedServiceSlugs: ["workspaces", "microsoft-365", "software-engineering"],
  },
  {
    slug: "penetrationstest",
    title: "Penetrationstest: Vorbeugen ist besser als Heilen",
    excerpt:
      "Wie gut ist Ihr Unternehmen gegen einen professionellen Hackerangriff geschützt? Ein Penetrationstest deckt Sicherheitslücken auf, bevor Angreifer sie finden.",
    category: "IT-Sicherheit",
    date: "2022-05-03",
    readingMinutes: 4,
    metaDescription:
      "Der Penetrationstest zeigt IT-Sicherheitslücken in Unternehmen auf und schließt dadurch Datenlücken. Wie er abläuft, erfahren Sie hier.",
    relatedServiceSlugs: ["netzwerkservice", "it-beratung"],
  },
  {
    slug: "ipv4-auf-ipv6-umstellung",
    title: "IPv4 auf IPv6 umstellen im Unternehmen – Warum ist jetzt der richtige Zeitpunkt dafür?",
    excerpt:
      "Die IPv4-Adressen gehen zur Neige, immer mehr Provider stellen auf IPv6 um. Warum Unternehmen ihre Netzinfrastruktur jetzt sukzessive aktualisieren sollten.",
    category: "Netzwerk",
    date: "2022-03-10",
    readingMinutes: 4,
    metaDescription:
      "Die IPv4-Adressen sind bald aufgebraucht – neue Geräte können dann keine Verbindung mehr mit dem Web herstellen. Wie Sie auf IPv6 umstellen, klären wir hier.",
    relatedServiceSlugs: ["netzwerkservice", "it-beratung"],
  },
  {
    slug: "word-online-nutzen",
    title: "Word online nutzen – lohnt sich das?",
    excerpt:
      "Word gibt es kostenlos im Browser. Was die Online-Version kann, wo ihre Grenzen liegen und wann sich Microsoft 365 oder Google Workspace lohnen.",
    category: "Cloud & Workspace",
    date: "2022-03-08",
    readingMinutes: 4,
    metaDescription:
      "Word lieber online als Browser-Anwendung nutzen oder lokal auf dem Rechner installieren? Diese Frage klären wir in diesem Artikel.",
    relatedServiceSlugs: ["microsoft-365", "workspaces"],
  },
  {
    slug: "microsoft-365-migration",
    title: "Microsoft 365: 6 Vorteile für eine Migration",
    excerpt:
      "Von planbaren Kosten über automatische Updates bis zur besseren Teamarbeit: Sechs Gründe, warum sich die Migration zu Microsoft 365 für Unternehmen lohnt.",
    category: "Cloud & Workspace",
    date: "2021-11-10",
    readingMinutes: 3,
    metaDescription:
      "Microsoft 365 Migration: 6 Vorteile einer Migration zu Microsoft 365 und wie Sie diese am besten umsetzen – jetzt mehr erfahren.",
    relatedServiceSlugs: ["microsoft-365", "microsoft-teams", "workspaces"],
  },
  {
    slug: "outlook-e-mails-archivieren",
    title: "Outlook: E-Mails archivieren – so sichern Sie Ihre Daten und schaffen Speicherplatz",
    excerpt:
      "Automatisch oder manuell: Wie Sie in Outlook E-Mails sinnvoll archivieren, Ihr Postfach aufräumen und wichtige Nachrichten schnell wiederfinden.",
    category: "Cloud & Workspace",
    date: "2021-11-10",
    readingMinutes: 5,
    metaDescription:
      "E-Mails archivieren mit Outlook? Geht – manuell oder automatisch. Alle Infos und den genauen Pfad, um mit Outlook E-Mails zu archivieren, finden Sie hier.",
    relatedServiceSlugs: ["mailserver", "workspaces", "it-beratung"],
  },
  {
    slug: "virtuelle-server-vorteile",
    title: "Virtuelle Server und ihre Vorteile: 8 Argumente für die Virtualisierung",
    excerpt:
      "Weniger Hardware, mehr Flexibilität: Acht Gründe, warum sich virtuelle Server auch für kleine und mittelständische Unternehmen lohnen.",
    category: "IT-Infrastruktur",
    date: "2021-07-22",
    readingMinutes: 5,
    metaDescription:
      "Virtuelle Server haben viele Vorteile. Wir arbeiten in diesem Artikel die 8 wichtigsten heraus und erklären, warum sich die Umstellung lohnt.",
    relatedServiceSlugs: ["private-cloud", "it-beratung", "home-office"],
  },
  {
    slug: "cloud-loesungen-fuer-unternehmen",
    title: "Cloud-Lösungen für Unternehmen – die 4 besten Anbieter im Vergleich",
    excerpt:
      "Google Drive, OneDrive, Dropbox oder Box? Vier Cloud-Speicher für Unternehmen im Vergleich – mit Funktionen, Preisen und Hinweisen zum Datenschutz.",
    category: "Cloud & Datenschutz",
    date: "2020-07-27",
    readingMinutes: 7,
    metaDescription:
      "Wir vergleichen die 4 besten Cloud-Lösungen für Unternehmen miteinander – inklusive Preisen, Sicherheitsaspekten und wertvollen Empfehlungen.",
    relatedServiceSlugs: ["workspaces", "microsoft-365", "private-cloud"],
  },
  {
    slug: "rechnungsprogramm-fuer-kleinunternehmer",
    title: "Rechnungsprogramm für Kleinunternehmer: Die 4 besten im Vergleich",
    excerpt:
      "Rechnungen mit Word oder Excel sind seit den GoBD nicht mehr zulässig. Welche Rechnungsprogramme sich für Kleinunternehmer eignen – Fastbill, easybill, Smoice und Lexoffice im Vergleich.",
    category: "Software & Tools",
    date: "2020-07-27",
    readingMinutes: 5,
    metaDescription:
      "Auf der Suche nach einem Rechnungsprogramm für Kleinunternehmer? Wir vergleichen hier die 4 besten Anbieter – und geben Entscheidungshilfen. Jetzt lesen!",
    relatedServiceSlugs: ["software-engineering", "it-beratung"],
  },
];

export function getPostsSorted(): Post[] {
  return [...POSTS]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(withContent);
}

export function getPost(slug: string): Post | undefined {
  const post = POSTS.find((p) => p.slug === slug);
  return post ? withContent(post) : undefined;
}
