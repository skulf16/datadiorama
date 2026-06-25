import type { Partner } from "@/lib/types";

/** Verifizierte Technologie- & Zertifizierungspartner (aus der bestehenden Website). */
export const PARTNERS: Record<string, Partner> = {
  synology: {
    key: "synology",
    name: "Synology Consulting Expert",
    description: "Synology Consulting Expert 2026 – private Cloud- und NAS-Lösungen mit Synology.",
    logo: "/partners/synology-consulting-expert.png",
    logoWidth: 289,
    logoHeight: 326,
  },
  easybell: {
    key: "easybell",
    name: "easybell",
    description: "Cloud-Telefonie, Business-Internet und SIP-Trunks für jedes Unternehmen.",
    logo: "/partners/easybell.svg",
    logoWidth: 151,
    logoHeight: 38,
  },
  unifi: {
    key: "unifi",
    name: "Ubiquiti UniFi",
    description: "Zertifizierter UniFi-Partner (UEWA) für professionelle Netzwerk- und WLAN-Lösungen.",
    logo: "/partners/unifi.png",
    logoWidth: 198,
    logoHeight: 237,
  },
  securepoint: {
    key: "securepoint",
    name: "Securepoint",
    description: "Securepoint-Sicherheitslösungen für Firewall, VPN und Endpoint-Schutz – Made in Germany.",
    logo: "/partners/securepoint.png",
    logoWidth: 1600,
    logoHeight: 649,
  },
  sipgate: {
    key: "sipgate",
    name: "sipgate",
    description: "Geprüfter sipgate-Partner für cloudbasierte Business-Telefonie.",
    logo: "/partners/sipgate.png",
    logoWidth: 300,
    logoHeight: 300,
  },
  cisco: {
    key: "cisco",
    name: "Cisco",
    description: "Von Cisco geschulte Mitarbeiter für Netzwerktechnik auf Enterprise-Niveau.",
  },
  microsoft: {
    key: "microsoft",
    name: "Microsoft 365",
    description: "Microsoft-365-Migration und -Betreuung: Teams, Exchange, SharePoint & OneDrive.",
  },
  google: {
    key: "google",
    name: "Google Workspace",
    description: "Google-Workspace-Einrichtung und -Verwaltung für produktive Zusammenarbeit.",
  },
};

/** Reihenfolge der Logos im Partner-Band (nur Partner mit Logo). */
export const PARTNER_ORDER = [
  "synology",
  "easybell",
  "unifi",
  "securepoint",
  "sipgate",
];
