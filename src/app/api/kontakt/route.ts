import { NextResponse } from "next/server";
import { sendContactMail } from "@/lib/mail";

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

  // Versand über SMTP (z. B. Google-Relay) bzw. Resend – siehe lib/mail.ts.
  const result = await sendContactMail({
    fromLabel: "datadiorama Website",
    subject,
    text,
    replyTo: email,
  });
  if (!result.ok) {
    return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
