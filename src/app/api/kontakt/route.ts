import { NextResponse } from "next/server";
import { SITE } from "@/data/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string | boolean;
  website?: string; // Honeypot
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Spam-Schutz: gefülltes Honeypot-Feld => stillschweigend „erfolgreich".
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 422 });
  }
  if (!data.consent) {
    return NextResponse.json({ error: "Bitte stimmen Sie der Datenschutzerklärung zu." }, { status: 422 });
  }

  const subject = `Neue Kontaktanfrage von ${name}`;
  const text = [
    `Name: ${name}`,
    `Unternehmen: ${data.company ?? "-"}`,
    `E-Mail: ${email}`,
    `Telefon: ${data.phone ?? "-"}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  // E-Mail-Versand über Resend, sofern konfiguriert (RESEND_API_KEY).
  // Andernfalls wird die Anfrage angenommen und protokolliert – so funktioniert
  // das Formular sofort, der produktive Versand wird per ENV aktiviert.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || SITE.email;
  const from = process.env.CONTACT_FROM || "kontakt@datadiorama.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `datadiorama Website <${from}>`,
          to: [to],
          reply_to: email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend-Fehler:", detail);
        return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
      }
    } catch (err) {
      console.error("Mailversand-Ausnahme:", err);
      return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
    }
  } else {
    // Kein Provider konfiguriert: Anfrage protokollieren (Demo-/Setup-Modus).
    console.info("[Kontaktformular] Eingang (kein RESEND_API_KEY gesetzt):\n", text);
  }

  return NextResponse.json({ ok: true });
}
