import type { AvatarSpec, TeamMember } from "@/lib/types";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const m = (
  name: string,
  role: string,
  opts: { image?: string; avatar?: AvatarSpec } = {},
): TeamMember => ({
  name,
  role,
  image: opts.image,
  avatar: opts.avatar,
  initials: initials(name),
});

const IMG = "/media";

// Shirt-Farben aus der Markenpalette (globals.css).
const SHIRT = {
  brand: "#0058e2",
  sky: "#2ea3f2",
  navy600: "#1a2566",
} as const;

// Verifiziert aus der bestehenden Team-Seite (datadiorama.com/team).
// Echte Porträtfotos aus den WordPress-Medien; wo dort nur ein generischer
// Platzhalter liegt, dient ein gezeichneter Comic-Avatar als Fallback.
export const TEAM: TeamMember[] = [
  m("Christian Anger", "Geschäftsführung", { image: `${IMG}/2022/11/datadiorama-3618-christian.jpg` }),
  m("Tino Schmidt", "Geschäftsführung", { image: `${IMG}/2022/11/datadiorama-3631-tino.jpg` }),
  m("Stefan Pokorny", "Vertrieb", { image: `${IMG}/2025/12/HJ7A2833-1x1-web.jpg` }),
  m("Stacey Kenny", "IT-Projektleitung", { avatar: { skin: "#f6d7bb", hair: "long", hairColor: "#7a4a2f", shirt: SHIRT.brand } }),
  m("Maximilian Dalichow", "IT-Projektleitung", { image: `${IMG}/2022/11/datadiorama-3607-max.jpg` }),
  m("Nadine Gonschior", "IT-Projektmanagement", { image: `${IMG}/2025/12/HJ7A2597-1x1-web.jpg` }),
  m("Attila Kövary", "IT-Administrator", { image: `${IMG}/2025/12/HJ7A2664-1x1-web.jpg` }),
  m("William Kiesel", "IT-Administrator", { avatar: { skin: "#b07b4f", hair: "curly", hairColor: "#1f1a17", shirt: SHIRT.sky, glasses: true } }),
  m("Justin Bongards", "IT-Administrator", { image: `${IMG}/2025/12/webpic.png` }),
  m("Robert Schwerin", "IT-Administrator", { avatar: { skin: "#edc39c", hair: "side", hairColor: "#55524e", shirt: SHIRT.navy600, glasses: true } }),
  m("Leon Cierzynski", "1st Level Support", { image: `${IMG}/2025/12/HJ7A2726-1x1-web.jpg` }),
  m("Corvin Fleischer", "1st Level Support", { image: `${IMG}/2025/12/HJ7A2679-1x1-web.jpg` }),
  m("Max Buchwald", "Auszubildender Fachinformatiker", { image: `${IMG}/2025/03/datadiorama-8313-1x1-1.jpg` }),
];

/** Einzelnes Teammitglied per Namen – u. a. für die Autor-Zuordnung der Beiträge. */
export function getTeamMember(name: string): TeamMember | undefined {
  return TEAM.find((member) => member.name === name);
}

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

// Team-/Eventfotos (lokal unter public/media/, aus WordPress übernommen).
export const TEAM_GALLERY: string[] = [
  `${IMG}/2025/03/datadiorama-8220.jpg`,
  `${IMG}/2025/03/datadiorama-8009.jpg`,
  `${IMG}/2025/04/datadiorama-8233.jpg`,
  `${IMG}/2025/03/datadiorama-7864.jpg`,
  `${IMG}/2025/04/datadiorama-8181.jpg`,
  `${IMG}/2025/03/datadiorama-8127.jpg`,
];
