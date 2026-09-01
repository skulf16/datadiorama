"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { normalizePhone, PHONE_ERROR } from "@/lib/phone";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted-light transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const phone = normalizePhone(String(data.phone ?? ""));
    if (!phone.ok) {
      setStatus("error");
      setError(PHONE_ERROR);
      return;
    }
    data.phone = phone.value;

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Senden fehlgeschlagen.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">Vielen Dank!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Ihre Nachricht ist bei uns eingegangen. Wir melden uns zeitnah und persönlich bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {/* Honeypot gegen Spam */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-brand">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputBase} placeholder="Ihr Name" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Unternehmen
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputBase} placeholder="Firmenname" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-Mail <span className="text-brand">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="name@firma.de" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} placeholder="+49 …" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Ihre Nachricht <span className="text-brand">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} className={cn(inputBase, "resize-y")} placeholder="Wie können wir Ihnen helfen?" />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 rounded border-line text-brand focus:ring-brand/30" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-brand hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung der Anfrage einverstanden.
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error ?? "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}
        </p>
      )}

      <div className="mt-2">
        <Button type="submit" size="lg" withArrow disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
        </Button>
      </div>
    </form>
  );
}
