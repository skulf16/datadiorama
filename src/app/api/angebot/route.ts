import { NextResponse } from "next/server";
import { sendContactMail } from "@/lib/mail";
import { normalizePhone, PHONE_ERROR } from "@/lib/phone";

export const runtime = "nodejs";

type Payload = {
  help?: string;
  profile?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
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

  if (data.website) return NextResponse.json({ ok: true }); // Spam

  const firstName = (data.firstName ?? "").trim();
  const lastName = (data.lastName ?? "").trim();
  const email = (data.email ?? "").trim();

  const phoneResult = normalizePhone(data.phone ?? "");
  if (!phoneResult.ok) {
    return NextResponse.json({ error: PHONE_ERROR }, { status: 422 });
  }

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Bitte füllen Sie Vorname, Nachname und E-Mail aus." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 422 });
  }
  if (!data.consent) {
    return NextResponse.json({ error: "Bitte stimmen Sie den Datenschutzbestimmungen zu." }, { status: 422 });
  }

  const subject = `Neue Angebotsanfrage (Funnel): ${firstName} ${lastName}`;
  const text = [
    `Anliegen: ${data.help ?? "-"}`,
    `Profil: ${data.profile ?? "-"}`,
    "",
    `Name: ${firstName} ${lastName}`,
    `E-Mail: ${email}`,
    `Firma: ${data.company || "-"}`,
    `Telefon: ${phoneResult.value || "-"}`,
  ].join("\n");

  // Versand über SMTP (z. B. Google-Relay) bzw. Resend – siehe lib/mail.ts.
  const result = await sendContactMail({
    fromLabel: "datadiorama Funnel",
    subject,
    text,
    replyTo: email,
  });
  if (!result.ok) {
    return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
