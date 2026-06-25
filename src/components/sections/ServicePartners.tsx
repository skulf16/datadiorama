import Image from "next/image";
import { PARTNERS } from "@/data/partners";

// Logo wird in eine Box (max. Breite/Höhe) eingepasst, Maße bleiben proportional
// (verhindert next/image-Verzerrungswarnungen).
const BOX = { w: 108, h: 34 };

function fit(w?: number, h?: number) {
  const ratio = (w ?? 1) / (h ?? 1);
  let dw = BOX.h * ratio;
  let dh = BOX.h;
  if (dw > BOX.w) {
    dw = BOX.w;
    dh = BOX.w / ratio;
  }
  return { dw: Math.round(dw), dh: Math.round(dh) };
}

export function ServicePartners({ partnerKeys }: { partnerKeys?: string[] }) {
  const partners = (partnerKeys ?? [])
    .map((k) => PARTNERS[k])
    .filter((p) => p?.logo);

  if (!partners.length) return null;

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="flex items-center gap-2 font-sans text-base font-semibold tracking-tight text-ink">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M10 2.5 3 6v4c0 3.3 2.8 5.7 7 7 4.2-1.3 7-3.7 7-7V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m7.5 10 1.7 1.7L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Partner &amp; Zertifizierungen
      </h2>
      <ul className="mt-5 grid gap-5">
        {partners.map((p) => {
          const { dw, dh } = fit(p.logoWidth, p.logoHeight);
          return (
            <li key={p.key} className="flex items-center gap-4">
              <span className="flex h-12 w-[120px] shrink-0 items-center justify-center rounded-lg border border-line bg-white px-2">
                <Image
                  src={p.logo as string}
                  alt={`${p.name} – Partner von datadiorama`}
                  width={dw}
                  height={dh}
                  unoptimized={p.logo?.endsWith(".svg")}
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{p.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted">{p.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
