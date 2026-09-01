import { parsePhoneNumberFromString } from "libphonenumber-js";

// Ohne Ländervorwahl eingegebene Nummern werden als deutsche Nummern interpretiert.
const DEFAULT_COUNTRY = "DE";

/**
 * Prüft und normalisiert eine Telefonnummer.
 * - "" (leer) → { ok: true, value: "" } – Feld ist optional
 * - gültig → { ok: true, value: "+49301234567" } (E.164)
 * - ungültig → { ok: false }
 */
export function normalizePhone(input: string): { ok: boolean; value: string } {
  const trimmed = input.trim();
  if (!trimmed) return { ok: true, value: "" };
  const parsed = parsePhoneNumberFromString(trimmed, DEFAULT_COUNTRY);
  if (!parsed?.isValid()) return { ok: false, value: "" };
  return { ok: true, value: parsed.number };
}

export const PHONE_ERROR = "Bitte geben Sie eine richtige Telefonnummer an.";
