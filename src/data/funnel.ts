import type { IconKey } from "@/lib/types";

export interface FunnelOption {
  label: string;
  value: string;
  icon: IconKey;
}

export interface FunnelStep {
  id: string;
  question: string;
  options: FunnelOption[];
}

/**
 * Mehrstufiger Angebots-Funnel – nachgebaut aus dem bestehenden Heyflow-Flow
 * ("dd-transparent"): zwei Qualifizierungsfragen + Kontaktformular.
 */
export const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: "help",
    question: "Wie können wir Ihnen helfen?",
    options: [
      { label: "MS 365", value: "MS 365", icon: "microsoft" },
      { label: "IT-Betreuung", value: "IT-Betreuung", icon: "support" },
      { label: "Netzwerke / WLAN / Cloud", value: "Netzwerke / WLAN / Cloud", icon: "network" },
      { label: "Telefonanlagen", value: "Telefonanlagen", icon: "phone" },
    ],
  },
  {
    id: "profile",
    question: "Was beschreibt Sie am besten?",
    options: [
      { label: "Privatperson", value: "Privatperson", icon: "home" },
      { label: "Selbstständige:r", value: "Selbstständige:r", icon: "rocket" },
      { label: "Mittelständisches Unternehmen", value: "Mittelständisches Unternehmen", icon: "workspace" },
      { label: "Großes Unternehmen", value: "Großes Unternehmen", icon: "server" },
    ],
  },
];

export const FUNNEL_CONTACT = {
  headline: "Vielen Dank, wir freuen uns, Ihnen ein Angebot unterbreiten zu dürfen.",
  subline: "Bitte geben Sie uns noch folgende Informationen, damit wir Sie erreichen können.",
  consent: "Ich habe die Datenschutzbestimmungen gelesen und akzeptiert.",
  submitLabel: "Absenden",
};
