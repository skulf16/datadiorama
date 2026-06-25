import type { Job } from "@/lib/types";

// Gemeinsame Benefits (verifiziert aus der bestehenden Stellenanzeige).
const COMMON_BENEFITS = [
  "30 Tage Urlaub",
  "Flexibles Arbeiten & anteiliges Home-Office",
  "Faire, leistungsgerechte Bezahlung",
  "Regelmäßige Team-Events",
  "Kontinuierliche Weiterbildung & Zertifizierungen",
  "Familiäres Team mit flachen Hierarchien",
];

export const JOBS: Job[] = [
  {
    slug: "netzwerk-systemadministration",
    title: "Netzwerk- und Systemadministrator*in (m/w/d)",
    shortTitle: "Netzwerk- & Systemadministration",
    employmentType: "Vollzeit",
    location: "Potsdam",
    teaser:
      "Du betreust Netzwerke und Systeme unserer Kunden – von der Planung bis zum Betrieb.",
    intro:
      "Als Netzwerk- und Systemadministrator*in bei datadiorama sorgst du dafür, dass die IT unserer Kundinnen und Kunden zuverlässig läuft. Du planst, richtest ein und betreust Netzwerke, Server und Systeme – mit Fernwartung und beim Kunden vor Ort.",
    tasks: [
      "Planung, Einrichtung und Betreuung von Netzwerken (u. a. UniFi)",
      "Administration von Servern, Clients und Cloud-Diensten",
      "Fehleranalyse und Störungsbehebung per Fernwartung und vor Ort",
      "Umsetzung von IT-Sicherheits- und Backup-Konzepten",
      "Saubere Dokumentation nach dem Vier-Augen-Prinzip",
    ],
    profile: [
      "Abgeschlossene IT-Ausbildung oder vergleichbare Erfahrung",
      "Kenntnisse in Netzwerk- und Servertechnik",
      "Strukturierte, zuverlässige Arbeitsweise",
      "Freude an Kundenkontakt und Teamarbeit",
      "Sehr gute Deutschkenntnisse",
    ],
    benefits: COMMON_BENEFITS,
    metaTitle: "Netzwerk- und Systemadministrator*in (m/w/d) in Potsdam",
    metaDescription:
      "Stellenangebot: Netzwerk- und Systemadministrator*in (m/w/d) bei datadiorama in Potsdam. 30 Tage Urlaub, Home-Office, Weiterbildung. Jetzt bewerben!",
  },
  {
    slug: "first-level-support",
    title: "1st Level Support (m/w/d)",
    shortTitle: "1st Level Support",
    employmentType: "Vollzeit",
    location: "Potsdam",
    teaser:
      "Du bist die erste Anlaufstelle für unsere Kunden und löst IT-Anfragen schnell und freundlich.",
    intro:
      "Im 1st Level Support bist du die Stimme von datadiorama: Du nimmst Anfragen entgegen, löst die meisten direkt per Fernwartung und sorgst dafür, dass sich unsere Kundinnen und Kunden gut aufgehoben fühlen.",
    tasks: [
      "Annahme und Bearbeitung von Support-Anfragen",
      "Fehleranalyse und Lösung per Fernwartung",
      "Dokumentation und Weitergabe komplexer Fälle",
      "Einrichtung von Arbeitsplätzen und Benutzerkonten",
    ],
    profile: [
      "IT-Affinität, idealerweise erste Support-Erfahrung",
      "Freundliches, serviceorientiertes Auftreten",
      "Strukturierte Arbeitsweise und Lernbereitschaft",
      "Sehr gute Deutschkenntnisse",
    ],
    benefits: COMMON_BENEFITS,
    metaTitle: "1st Level Support (m/w/d) in Potsdam",
    metaDescription:
      "Stellenangebot: 1st Level Support (m/w/d) bei datadiorama in Potsdam. Werde erste Anlaufstelle für unsere Kunden. 30 Tage Urlaub & Weiterbildung. Jetzt bewerben!",
  },
  {
    slug: "vertrieb",
    title: "Vertrieb IT-Systemhaus (m/w/d)",
    shortTitle: "Vertrieb",
    employmentType: "Vollzeit",
    location: "Potsdam / Berlin",
    teaser:
      "Du gewinnst neue Kunden und begleitest sie auf dem Weg zu passenden IT-Lösungen.",
    intro:
      "Als Vertriebsmitarbeiter*in bei datadiorama baust du Kundenbeziehungen auf, verstehst die Anforderungen von Unternehmen und bringst sie mit den passenden IT-Lösungen zusammen – von der Telefonanlage bis zur Cloud.",
    tasks: [
      "Gewinnung und Betreuung von Geschäftskunden",
      "Bedarfsanalyse und Lösungsberatung gemeinsam mit der Technik",
      "Erstellung von Angeboten und Begleitung bis zum Abschluss",
      "Pflege langfristiger Kundenbeziehungen",
    ],
    profile: [
      "Erfahrung im B2B-Vertrieb, idealerweise im IT-Umfeld",
      "Technisches Grundverständnis und Lernbereitschaft",
      "Kommunikationsstärke und Abschlusssicherheit",
      "Sehr gute Deutschkenntnisse",
    ],
    benefits: COMMON_BENEFITS,
    metaTitle: "Vertrieb IT-Systemhaus (m/w/d) in Potsdam & Berlin",
    metaDescription:
      "Stellenangebot: Vertrieb (m/w/d) im IT-Systemhaus datadiorama. Gewinne Geschäftskunden für moderne IT-Lösungen. 30 Tage Urlaub & faire Bezahlung. Jetzt bewerben!",
  },
  {
    slug: "projektmanagement",
    title: "IT-Projektmanagement (m/w/d)",
    shortTitle: "Projektmanagement",
    employmentType: "Vollzeit",
    location: "Potsdam",
    teaser:
      "Du steuerst IT-Projekte von der Planung bis zur erfolgreichen Übergabe.",
    intro:
      "Im IT-Projektmanagement koordinierst du Projekte wie Cloud-Migrationen, Netzwerkaufbauten und Software-Einführungen – du behältst Termine, Budget und Qualität im Blick und bist Schnittstelle zwischen Kunde und Technik.",
    tasks: [
      "Planung, Steuerung und Dokumentation von IT-Projekten",
      "Koordination von Technik-Team und Kunden",
      "Überwachung von Zeitplänen, Ressourcen und Qualität",
      "Sicherstellung einer sauberen Übergabe in den Betrieb",
    ],
    profile: [
      "Erfahrung im Projektmanagement, idealerweise im IT-Umfeld",
      "Organisationstalent und strukturierte Arbeitsweise",
      "Kommunikationsstärke und Durchsetzungsvermögen",
      "Sehr gute Deutschkenntnisse",
    ],
    benefits: COMMON_BENEFITS,
    metaTitle: "IT-Projektmanagement (m/w/d) in Potsdam",
    metaDescription:
      "Stellenangebot: IT-Projektmanagement (m/w/d) bei datadiorama in Potsdam. Steuere spannende IT-Projekte. 30 Tage Urlaub, Home-Office & Weiterbildung. Jetzt bewerben!",
  },
  {
    slug: "marketing",
    title: "Marketing (m/w/d)",
    shortTitle: "Marketing",
    employmentType: "Voll- oder Teilzeit",
    location: "Potsdam",
    teaser:
      "Du machst datadiorama sichtbar – online, auf Events und in unseren Inhalten.",
    intro:
      "Im Marketing gestaltest du, wie datadiorama nach außen auftritt: Du entwickelst Inhalte, betreust unsere Online-Kanäle und unterstützt bei Kampagnen, die unsere IT-Lösungen verständlich machen.",
    tasks: [
      "Erstellung von Inhalten für Website, Blog und Social Media",
      "Betreuung und Weiterentwicklung der Online-Präsenz",
      "Unterstützung bei Kampagnen und Events",
      "Zusammenarbeit mit Vertrieb und Geschäftsführung",
    ],
    profile: [
      "Erfahrung oder fundiertes Interesse im (Online-)Marketing",
      "Gespür für Sprache, Gestaltung und Zielgruppen",
      "Eigeninitiative und kreative Ideen",
      "Sehr gute Deutschkenntnisse",
    ],
    benefits: COMMON_BENEFITS,
    metaTitle: "Marketing (m/w/d) in Potsdam",
    metaDescription:
      "Stellenangebot: Marketing (m/w/d) bei datadiorama in Potsdam. Gestalte unseren Auftritt online und auf Events. 30 Tage Urlaub & flexible Arbeit. Jetzt bewerben!",
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
