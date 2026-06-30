import { NextResponse } from "next/server";
import { SITE } from "@/data/site";

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
    `Telefon: ${data.phone || "-"}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || SITE.email;
  const from = process.env.CONTACT_FROM || "kontakt@datadiorama.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `datadiorama Funnel <${from}>`,
          to: [to],
          reply_to: email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        console.error("Resend-Fehler:", await res.text());
        return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
      }
    } catch (err) {
      console.error("Mailversand-Ausnahme:", err);
      return NextResponse.json({ error: "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an." }, { status: 502 });
    }
  } else {
    console.info("[Angebots-Funnel] Eingang (kein RESEND_API_KEY gesetzt):\n", text);
  }

  return NextResponse.json({ ok: true });
}
