/**
 * Cookiebot (Consent-Banner) und Google Tag Manager mit Google Consent Mode v2.
 *
 * Die Reihenfolge im <head> ist zwingend und darf nicht getauscht werden:
 *   1. Consent Mode Default – setzt alle Kategorien auf "denied", bevor
 *      irgendein Tag laufen kann.
 *   2. Cookiebot (uc.js) – zeigt das Banner und aktualisiert den Consent-Zustand
 *      nach der Entscheidung des Nutzers.
 *   3. Google Tag Manager – lädt und steuert seine Tags über die Consent-Signale.
 *
 * Die beiden Google-Skripte tragen data-cookieconsent="ignore", damit das
 * Auto-Blocking von Cookiebot sie nicht blockiert: Consent Mode wirkt nur, wenn
 * Default-Zustand und gtm.js bereits *vor* der Einwilligung ausgeführt werden.
 * Das Blockieren der einzelnen Tags übernimmt dann Consent Mode selbst.
 */

const COOKIEBOT_ID = "b17229b7-3763-4151-91d4-2824e62de0dd";
const GTM_ID = "GTM-PC8N6C8";

// Consent Mode: Default-Zustand vor dem CMP. security_storage bleibt "granted",
// wait_for_update gibt Cookiebot 500 ms Zeit, den gespeicherten Consent zu melden.
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
  wait_for_update: 500,
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
      {/*
       * Bewusst ohne async/defer: uc.js muss blockierend laufen, damit das
       * Auto-Blocking aktiv ist, bevor weitere Skripte geparst werden.
       */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid={COOKIEBOT_ID}
        data-blockingmode="auto"
        type="text/javascript"
      />
      <script
        data-cookieconsent="ignore"
        dangerouslySetInnerHTML={{ __html: gtmLoader }}
      />
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
