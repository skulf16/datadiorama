import type { TeamMember } from "@/lib/types";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const m = (name: string, role: string, image?: string): TeamMember => ({
  name,
  role,
  image,
  initials: initials(name),
});

// Verifiziert aus der bestehenden Team-Seite.
export const TEAM: TeamMember[] = [
  m("Christian Anger", "Geschäftsführung"),
  m("Tino Schmidt", "Geschäftsführung"),
  m("Stefan Pokorny", "Vertrieb"),
  m("Stacey Kenny", "IT-Projektleitung"),
  m("Maximilian Dalichow", "IT-Projektleitung"),
  m("Nadine Gonschior", "IT-Projektmanagement"),
  m("Ole Graf", "Ausbilder & IT-Administrator"),
  m("Attila Kövary", "IT-Administrator"),
  m("William Kiesel", "IT-Administrator"),
  m("Justin Bongards", "IT-Administrator"),
  m("Robert Schwerin", "IT-Administrator"),
  m("Leon Cierzynski", "1st Level Support"),
  m("Corvin Fleischer", "1st Level Support"),
  m("Max Buchwald", "Auszubildender Fachinformatiker"),
];

export interface CompanyValue {
  title: string;
  description: string;
}

// Verifiziert aus der bestehenden Website.
export const VALUES: CompanyValue[] = [
  {
    title: "Familie",
    description:
      "Wir nehmen Rücksicht auf die Lebensumstände unserer Mitarbeitenden und ihre Familien – beruflicher Erfolg und Privatleben gehören für uns zusammen.",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Wir setzen auf langfristige, hochwertige Lösungen und verfolgen das Ziel, klimaneutral zu arbeiten.",
  },
  {
    title: "Kooperation",
    description:
      "Wir geben unserem Team Freiheit und unterstützen uns bei komplexen Herausforderungen gegenseitig.",
  },
  {
    title: "Zuverlässigkeit",
    description:
      "Saubere Dokumentation, Vier-Augen-Prinzip und klare Kommunikation sorgen für verlässliche Ergebnisse.",
  },
];

// Öffentlich zugängliche Team-/Eventfotos (WordPress-Medien).
export const TEAM_GALLERY: string[] = [
  "https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-8220.jpg",
  "https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-8009.jpg",
  "https://datadiorama.com/wp-content/uploads/2025/04/datadiorama-8233.jpg",
  "https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-7864.jpg",
  "https://datadiorama.com/wp-content/uploads/2025/04/datadiorama-8181.jpg",
  "https://datadiorama.com/wp-content/uploads/2025/03/datadiorama-8127.jpg",
];
