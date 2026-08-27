import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Medien liegen lokal unter public/media/ (aus der früheren WordPress-Installation
  // übernommen). Es werden keine externen Bildquellen mehr geladen.
  async redirects() {
    // Alte WordPress-URLs auf neue, sprechende Pfade umleiten (SEO-Erhalt).
    // Hinweis: /leistungen/hotel-wlan bleibt unverändert und braucht keinen Redirect.
    return [
      // Leistungs-Detailseiten
      { source: "/leistungen/telefonanlage-fuer-unternehmen", destination: "/leistungen/telefonanlagen", permanent: true },
      { source: "/leistungen/home-office-einrichten", destination: "/leistungen/home-office", permanent: true },
      { source: "/leistungen/emails-sicher-zustellen", destination: "/leistungen/mailserver", permanent: true },
      { source: "/leistungen/netzwerkbetreuung", destination: "/leistungen/netzwerkservice", permanent: true },
      // Alte Top-Level-Seiten auf /leistungen/* umziehen
      { source: "/netzwerkservice", destination: "/leistungen/netzwerkservice", permanent: true },
      { source: "/workspaces", destination: "/leistungen/workspaces", permanent: true },
      { source: "/microsoft-365", destination: "/leistungen/microsoft-365", permanent: true },
      { source: "/microsoft-teams-beratung", destination: "/leistungen/microsoft-teams", permanent: true },
      { source: "/private-cloud-synology-nas", destination: "/leistungen/private-cloud", permanent: true },
      // Alter Blog-Artikel
      { source: "/private-cloud-mit-nas", destination: "/beitraege/private-cloud-mit-nas", permanent: true },
      // Alte Top-Level-Blog-URLs auf /beitraege/* umziehen (SEO-Erhalt nach Relaunch)
      ...[
        "automatisierung-von-geschaeftsprozessen",
        "blockchain-technologie",
        "cloud-loesungen-fuer-unternehmen",
        "cyber-angriff",
        "die-3-stufen-des-backup-zen",
        "dokumentenmanagement",
        "e-mail-archivierung",
        "edge-computing",
        "google-workspace-vs-microsoft-365",
        "ipv4-auf-ipv6-umstellung",
        "it-nach-europa-holen",
        "it-outsourcing-vorteile",
        "it-sicherheit-schulung",
        "kuenstliche-intelligenz-und-maschinelles-lernen",
        "microsoft-365-migration",
        "microsoft-365-migration-fallbeispiel",
        "microsoft-exchange-server",
        "netzwerksicherheit-unternehmen",
        "outlook-e-mails-archivieren",
        "passwort-manager-fuer-unternehmen",
        "penetrationstest",
        "professionelle-wlan-planung",
        "proxmox",
        "rechnungsprogramm-fuer-kleinunternehmer",
        "starlink-internet",
        "unifi-ubiquiti",
        "virtuelle-server-vorteile",
        "was-ist-der-us-cloud-act",
        "was-ist-informationssicherheit",
        "web-app-vs-desktop-app",
        "word-online-nutzen",
        "zwei-faktor-authentifizierung-im-homeoffice",
      ].map((slug) => ({ source: `/${slug}`, destination: `/beitraege/${slug}`, permanent: true })),
      // Alte Stellenanzeigen-URLs auf /jobs/* umziehen
      { source: "/vertrieb-it-systemhaus-m-w-d", destination: "/jobs/vertrieb", permanent: true },
      { source: "/netzwerk-und-systemadministratorin-m-w-d", destination: "/jobs/netzwerk-systemadministration", permanent: true },
      { source: "/projektmanagement-it-systemhaus", destination: "/jobs/projektmanagement", permanent: true },
      { source: "/first-level-support", destination: "/jobs/first-level-support", permanent: true },
      { source: "/marketing", destination: "/jobs/marketing", permanent: true },
      { source: "/talents", destination: "/jobs", permanent: true },
    ];
  },
};

export default nextConfig;
