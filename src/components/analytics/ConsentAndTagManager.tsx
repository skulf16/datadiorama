/**
 * Google Consent Mode v2 und Google Tag Manager.
 *
 * Reihenfolge im <head> – zwingend, darf nicht getauscht werden:
 *   1. Consent Mode Default – setzt alle Kategorien auf "denied", bevor
 *      irgendein Tag laufen kann.
 *   2. Google Tag Manager – lädt und steuert seine Tags über die Consent-Signale.
 *
 * Beide Skripte tragen data-cookieconsent="ignore", damit das Auto-Blocking von
 * Cookiebot sie nicht blockiert: Consent Mode wirkt nur, wenn Default-Zustand und
 * gtm.js bereits *vor* der Einwilligung ausgeführt werden. Das Gating der
 * einzelnen Tags übernimmt dann Consent Mode selbst.
 *
 * Cookiebot selbst wird bewusst nicht hier eingebunden, sondern erst nach der
 * Hydration – Begründung in [CookiebotLoader].
 */

import { CookiebotLoader } from "./CookiebotLoader";

const GTM_ID = "GTM-PC8N6C8";

// Consent Mode: Default-Zustand vor dem CMP. security_storage bleibt "granted".
// wait_for_update ist bewusst großzügig (2000 ms statt der üblichen 500 ms):
// uc.js startet erst nach der Hydration, und wiederkehrende Besucher mit
// gespeicherter Einwilligung sollen ihren "granted"-Zustand noch innerhalb des
// Wartefensters melden können – sonst gingen die ersten Hits als "denied" raus.
const consentDefault = `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("consent", "default", {
  ad_personalization: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
  wait_for_update: 2000,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", false);
`;

// Standard-GTM-Loader. Zusätzlich zum Attribut am umgebenden <script> wird
// data-cookieconsent="ignore" auch am dynamisch erzeugten Tag gesetzt, da
// Cookiebot nachträglich eingefügte Skripte ebenfalls prüft.
const gtmLoader = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;
j.setAttribute('data-cookieconsent','ignore');
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

/** Gehört so weit oben wie möglich in den <head>. */
export function ConsentAndTagManager() {
  return (
    <>
      <script
        data-cookieconsent="ignore"
        dangerouslySetInnerHTML={{ __html: consentDefault }}
      />
      <script
        data-cookieconsent="ignore"
        dangerouslySetInnerHTML={{ __html: gtmLoader }}
      />
      <CookiebotLoader />
    </>
  );
}

/** Fallback für Besucher ohne JavaScript – direkt nach dem <body>-Tag. */
export function TagManagerNoScript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
