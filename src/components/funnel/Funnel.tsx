"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { FUNNEL_STEPS, FUNNEL_CONTACT } from "@/data/funnel";
import { cn } from "@/lib/utils";
import { normalizePhone, PHONE_ERROR } from "@/lib/phone";

const TOTAL = FUNNEL_STEPS.length + 1; // 2 Fragen + Kontakt
const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted-light transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

export function Funnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const isContact = step === FUNNEL_STEPS.length;
  const progress = Math.round(((step + 1) / TOTAL) * 100);

  function choose(stepId: string, value: string) {
    setAnswers((a) => ({ ...a, [stepId]: value }));
    window.setTimeout(() => setStep((s) => s + 1), 240);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form).entries());

    const phone = normalizePhone(String(fd.phone ?? ""));
    if (!phone.ok) {
      setStatus("error");
      setError(PHONE_ERROR);
      return;
    }
    fd.phone = phone.value;

    try {
      const res = await fetch("/api/angebot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ...fd }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.error || "Senden fehlgeschlagen.");
      }
      setDone(true);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  if (done) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-line bg-white p-10 text-center shadow-[var(--shadow-card-hover)]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-display text-2xl text-ink">Anfrage erhalten – vielen Dank!</h2>
        <p className="mt-3 text-muted">
          Wir haben Ihre Angaben erhalten und melden uns zeitnah mit einem passenden Angebot bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card-hover)] sm:p-9">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
          <span className="font-mono uppercase tracking-[0.18em] text-brand">
            Schritt {step + 1} / {TOTAL}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-sky transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={step} className="animate-[fade-up_0.4s_ease]">
        {!isContact ? (
          <fieldset>
            <legend className="text-[clamp(1.4rem,3vw,2rem)] font-display leading-tight text-ink">
              {FUNNEL_STEPS[step].question}
            </legend>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {FUNNEL_STEPS[step].options.map((opt) => {
                const selected = answers[FUNNEL_STEPS[step].id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => choose(FUNNEL_STEPS[step].id, opt.value)}
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200",
                      selected
                        ? "border-brand bg-brand-50 ring-2 ring-brand/20"
                        : "border-line bg-white hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                        selected ? "bg-brand text-white" : "bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white",
                      )}
                    >
                      <Icon name={opt.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-sans font-semibold text-ink">{opt.label}</span>
                    <span
                      className={cn(
                        "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                        selected ? "border-brand bg-brand text-white" : "border-line text-transparent",
                      )}
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                        <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4" noValidate>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div>
              <h2 className="text-[clamp(1.3rem,2.8vw,1.8rem)] font-display leading-tight text-ink">
                {FUNNEL_CONTACT.headline}
              </h2>
              <p className="mt-2 text-[0.95rem] text-muted">{FUNNEL_CONTACT.subline}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input name="firstName" required placeholder="Vorname" autoComplete="given-name" className={inputBase} />
              <input name="lastName" required placeholder="Nachname" autoComplete="family-name" className={inputBase} />
            </div>
            <input name="email" type="email" required placeholder="E-Mail-Adresse" autoComplete="email" className={inputBase} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="company" placeholder="Firma (optional)" autoComplete="organization" className={inputBase} />
              <input name="phone" type="tel" placeholder="Telefonnummer" autoComplete="tel" className={inputBase} />
            </div>

            <label className="mt-1 flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 rounded border-line text-brand focus:ring-brand/30" />
              <span>
                Ich habe die{" "}
                <a href="/datenschutz" className="font-medium text-brand hover:underline">Datenschutzbestimmungen</a>{" "}
                gelesen und akzeptiert.
              </span>
            </label>

            {status === "error" && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" size="lg" withArrow disabled={status === "submitting"} className="mt-2 w-full sm:w-auto">
              {status === "submitting" ? "Wird gesendet …" : FUNNEL_CONTACT.submitLabel}
            </Button>
          </form>
        )}
      </div>

      {/* Navigation */}
      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-brand"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zurück
        </button>
      )}
    </div>
  );
}
