import nodemailer, { type Transporter } from "nodemailer";
import { SITE } from "@/data/site";

/**
 * Zentraler Mail-Versand für die Formular-Routen.
 *
 * Versandwege in dieser Reihenfolge:
 * 1. SMTP (z. B. Google-Relay), sobald SMTP_HOST gesetzt ist.
 *    - Mit SMTP_USER/SMTP_PASS für die SMTP-Auth-Variante (App-Passwort),
 *      ohne beides für IP-basierte Relay-Freigabe.
 *    - Port 465 = implizites TLS, sonst STARTTLS (587).
 * 2. Resend (HTTP-API), sobald RESEND_API_KEY gesetzt ist.
 * 3. Kein Provider konfiguriert: Anfrage wird akzeptiert und nur geloggt,
 *    damit die Formulare im Setup-/Demo-Betrieb funktionieren.
 */

export interface ContactMail {
  /** Anzeigename vor der Absenderadresse, z. B. „datadiorama Website“ */
  fromLabel: string;
  subject: string;
  text: string;
  /** E-Mail-Adresse der anfragenden Person (Reply-To) */
  replyTo?: string;
  /** Empfängeradresse; ohne Angabe gilt CONTACT_TO bzw. SITE.email */
  to?: string;
}

export type MailOutcome =
  | { ok: true; via: "smtp" | "resend" | "log" }
  | { ok: false };

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
  }
  return transporter;
}

export async function sendContactMail(mail: ContactMail): Promise<MailOutcome> {
  const to = mail.to || process.env.CONTACT_TO || SITE.email;
  const from = process.env.CONTACT_FROM || "kontakt@datadiorama.com";

  if (process.env.SMTP_HOST) {
    try {
      await getTransporter().sendMail({
        from: `${mail.fromLabel} <${from}>`,
        to,
        replyTo: mail.replyTo,
        subject: mail.subject,
        text: mail.text,
      });
      return { ok: true, via: "smtp" };
    } catch (err) {
      console.error("SMTP-Fehler:", err);
      return { ok: false };
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${mail.fromLabel} <${from}>`,
          to: [to],
          reply_to: mail.replyTo,
          subject: mail.subject,
          text: mail.text,
        }),
      });
      if (!res.ok) {
        console.error("Resend-Fehler:", await res.text());
        return { ok: false };
      }
      return { ok: true, via: "resend" };
    } catch (err) {
      console.error("Mailversand-Ausnahme:", err);
      return { ok: false };
    }
  }

  console.info(`[Mail] ${mail.subject} (kein SMTP/Resend konfiguriert):\n`, mail.text);
  return { ok: true, via: "log" };
}
