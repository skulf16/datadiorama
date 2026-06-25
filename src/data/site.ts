import type { Location } from "@/lib/types";

export const SITE = {
  name: "datadiorama",
  fullName: "datadiorama Systemhaus & Softwareentwicklung",
  tagline: "Ihr verlässlicher IT-Partner",
  // Verifiziert aus der bestehenden Website
  foundedYear: 2013,
  email: "info@datadiorama.com",
  primaryPhone: "+49 331 76 991 680",
  primaryPhoneHref: "+4933176991680",
  url: "https://datadiorama.com",
  description:
    "datadiorama ist Ihr IT-Systemhaus und Softwareentwickler aus Potsdam – seit 2013. Von der Telefonanlage über die Netzwerkbetreuung bis zur Cloud-Lösung: Ihr Full-Service-IT-Partner für Berlin, Brandenburg und die Schweiz.",
  logo: "https://datadiorama.com/wp-content/uploads/2021/10/logo-rgb-head.svg",
  ogImage: "/og-default.png",
  locale: "de_DE",
  serviceArea: ["Potsdam", "Berlin", "Brandenburg", "Schweiz"],
} as const;

export const LOCATIONS: Location[] = [
  {
    id: "potsdam",
    label: "Potsdam",
    isHeadquarters: true,
    street: "Hebbelstraße 8",
    postalCode: "14469",
    city: "Potsdam",
    region: "Brandenburg",
    country: "Deutschland",
    countryCode: "DE",
    phone: "+49 331 76 991 680",
    phoneHref: "+4933176991680",
    note: "Hauptsitz",
    mapsQuery: "Hebbelstraße 8, 14469 Potsdam",
  },
  {
    id: "berlin",
    label: "Berlin",
    street: "Gormannstraße 14",
    postalCode: "10119",
    city: "Berlin",
    region: "Berlin",
    country: "Deutschland",
    countryCode: "DE",
    phone: "+49 331 76 991 680",
    phoneHref: "+4933176991680",
    note: "1. OG rechts, Büroraum 106",
    mapsQuery: "Gormannstraße 14, 10119 Berlin",
  },
  {
    id: "moerschwil",
    label: "Mörschwil (CH)",
    street: "Gallusäckerstrasse 28",
    postalCode: "9402",
    city: "Mörschwil",
    region: "St. Gallen",
    country: "Schweiz",
    countryCode: "CH",
    phone: "+41 71 510 94 40",
    phoneHref: "+41715109440",
    note: "datadiorama.ch",
    mapsQuery: "Gallusäckerstrasse 28, 9402 Mörschwil, Schweiz",
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Team", href: "/team" },
  { label: "Jobs", href: "/jobs" },
  { label: "Beiträge", href: "/beitraege" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/datadiorama",
  swiss: "https://www.datadiorama.ch/",
};
