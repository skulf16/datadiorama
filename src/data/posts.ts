import type { Post } from "@/lib/types";
import { POST_CONTENT } from "@/data/posts-content";

function withContent(post: Post): Post {
  const content = POST_CONTENT[post.slug];
  return content ? { ...post, ...content } : post;
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
    relatedServiceSlugs: ["private-cloud", "it-support"],
  },
  {
    slug: "proxmox",
    title: "Proxmox: Virtualisierung aus Europa",
    excerpt:
      "Open-Source-Virtualisierung aus Österreich: Was Proxmox VE kann, für wen es sich eignet und warum es als europäische VMware-Alternative an Bedeutung gewinnt.",
    category: "IT-Infrastruktur",
    date: "2026-06-25",
    readingMinutes: 4,
    metaDescription:
      "Proxmox VE im Überblick: Open-Source-Virtualisierung aus Österreich mit VMs, Containern, Backup und Hochverfügbarkeit – eine europäische Alternative zu VMware.",
    relatedServiceSlugs: ["private-cloud", "it-support"],
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
    relatedServiceSlugs: ["it-support", "netzwerkservice"],
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
