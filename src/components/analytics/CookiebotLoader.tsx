"use client";

/**
 * Lädt Cookiebot (uc.js) erst nach der Hydration nach.
 *
 * Nicht in den <head> verschieben: Cookiebot hängt den Banner in <body>, sobald
 * das DOM bereit ist. Hydratisiert React danach, löscht es den Banner als
 * unerwartetes Kind von <body> wieder weg – der Banner blitzt auf und ist weg.
 * Ob das passiert, ist ein Rennen zwischen cc.js und der Hydration; mit warmem
 * Cache verliert der Banner fast immer. Einmal entfernt ist er endgültig weg,
 * auch Cookiebot.renew() baut ihn nicht neu auf.
 *
 * Effekte laufen garantiert nach der Hydration – damit ist der Banner sicher.
 * Preis: das Auto-Blocking greift entsprechend später. Für diese Seite
 * unkritisch, weil das einzige Drittanbieter-Skript der Tag Manager ist und der
 * ohnehin bewusst über Consent Mode gesteuert wird (data-cookieconsent="ignore").
 */

import { useEffect } from "react";

const COOKIEBOT_ID = "b17229b7-3763-4151-91d4-2824e62de0dd";

export function CookiebotLoader() {
  useEffect(() => {
    if (document.getElementById("Cookiebot")) return;
    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.type = "text/javascript";
    script.setAttribute("data-cbid", COOKIEBOT_ID);
    script.setAttribute("data-blockingmode", "auto");
    document.head.appendChild(script);
  }, []);

  return null;
}
