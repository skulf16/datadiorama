// Zentrale Typdefinitionen für die Datadiorama-Website.

export type IconKey =
  | "support"
  | "phone"
  | "network"
  | "code"
  | "workspace"
  | "mail"
  | "microsoft"
  | "teams"
  | "wifi"
  | "home"
  | "server"
  | "shield"
  | "cloud"
  | "rocket"
  | "dots";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ContentSection {
  heading: string;
  body: string; // ein oder mehrere Absätze, getrennt durch \n\n
  bullets?: string[];
  /** Optionale Vergleichstabelle (GEO: zitierfähige Alternativen-Übersicht) */
  table?: { headers: string[]; rows: string[][] };
}

export interface Benefit {
  title: string;
  description: string;
  icon?: IconKey;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  /** Reihenfolge im Leistungs-Grid / Menü */
  order: number;
  /** Kurzlabel für Navigation & Cards */
  navLabel: string;
  /** Icon-Schlüssel für die SVG-Icon-Komponente */
  icon: IconKey;
  /** H1 der Detailseite */
  title: string;
  /** Kurzbeschreibung (Card im Grid) */
  cardDescription: string;
  /** Lead/Subtitle unter dem H1 */
  tagline: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  /** Antwort-zuerst-Einleitung (AEO): beantwortet die Kernfrage in 2–4 Sätzen */
  intro: string;
  /** TL;DR-Stichpunkte für KI/Leser */
  keyTakeaways: string[];
  /** Faktenbox „Auf einen Blick" */
  facts: Fact[];
  /** Inhaltliche Abschnitte */
  sections: ContentSection[];
  /** Nutzen/Vorteile als Karten */
  benefits: Benefit[];
  /** Optionaler Ablauf/Prozess */
  process?: ProcessStep[];
  /** FAQ mit FAQPage-Schema */
  faq: FaqItem[];
  /** Relevante Partner-Schlüssel */
  partnerKeys?: string[];
  /** Verwandte Leistungen (Slugs) */
  relatedSlugs?: string[];
  /** Optionales Headerbild (WordPress-URL) */
  image?: string;
  /** Zweites Bild für einen Bild-Text-Block im Seiteninhalt */
  image2?: string;
}

/** Parameter für die gezeichneten Comic-Avatare der Teammitglieder. */
export interface AvatarSpec {
  /** Hautton (Hex) */
  skin: string;
  hair: "short" | "buzz" | "curly" | "side" | "bald" | "long" | "bob" | "bun" | "fringe";
  hairColor: string;
  /** Shirt-Farbe (Hex) */
  shirt: string;
  glasses?: boolean;
  beard?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  initials: string;
  /** Comic-Avatar, solange keine echten Fotos vorliegen */
  avatar?: AvatarSpec;
}

export interface Job {
  slug: string;
  title: string;
  shortTitle: string;
  employmentType: string; // z.B. "Vollzeit"
  location: string;
  teaser: string;
  intro: string;
  tasks: string[];
  profile: string[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Partner {
  key: string;
  name: string;
  description: string;
  /** Lokaler Pfad zum Logo (public/partners/...) */
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
}

export interface Review {
  author: string;
  role?: string;
  rating: number;
  text: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingMinutes: number;
  metaDescription?: string;
  /** Antwort-zuerst-Einleitung (AEO) */
  intro?: string;
  keyTakeaways?: string[];
  sections?: ContentSection[];
  faq?: FaqItem[];
  relatedServiceSlugs?: string[];
  /** Verfasser des Beitrags (aus dem Team) */
  author?: TeamMember;
}

export interface Location {
  id: string;
  label: string;
  isHeadquarters?: boolean;
  street: string;
  postalCode: string;
  city: string;
  region?: string;
  country: string;
  countryCode: string;
  phone?: string;
  phoneHref?: string;
  note?: string;
  mapsQuery: string;
}
