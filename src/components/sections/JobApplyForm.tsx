"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { normalizePhone, PHONE_ERROR } from "@/lib/phone";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted-light transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

export function JobApplyForm({ jobTitle }: { jobTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const phone = normalizePhone(String(data.phone ?? ""));
    if (!phone.ok || !phone.value) {
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
      <div className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl text-ink">Vielen Dank!</h3>
        <p className="mt-2 text-sm text-muted">
          Deine Bewerbung ist bei uns eingegangen. Wir melden uns zeitnah und persönlich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {/* Honeypot gegen Spam */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="job" value={jobTitle} />

      <div>
        <label htmlFor="apply-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name <span className="text-brand">*</span>
        </label>
        <input id="apply-name" name="name" required autoComplete="name" className={inputBase} placeholder="Dein Name" />
      </div>

      <div>
        <label htmlFor="apply-email" className="mb-1.5 block text-sm font-medium text-ink">
          E-Mail <span className="text-brand">*</span>
        </label>
        <input id="apply-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="name@mail.de" />
      </div>

      <div>
        <label htmlFor="apply-phone" className="mb-1.5 block text-sm font-medium text-ink">
          Telefon <span className="text-brand">*</span>
        </label>
        <input id="apply-phone" name="phone" type="tel" required autoComplete="tel" className={inputBase} placeholder="+49 …" />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 rounded border-line text-brand focus:ring-brand/30" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-brand hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung der Bewerbung einverstanden.
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error ?? "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut."}
        </p>
      )}

      <Button type="submit" withArrow disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? "Wird gesendet …" : "Jetzt bewerben"}
      </Button>
    </form>
  );
}
