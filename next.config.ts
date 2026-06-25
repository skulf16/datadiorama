import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Während des Relaunchs werden die öffentlich zugänglichen Medien aus der
    // bestehenden WordPress-Installation verwendet. Können später lokalisiert werden.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datadiorama.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.datadiorama.com",
        pathname: "/wp-content/**",
      },
    ],
  },
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
    ];
  },
};

export default nextConfig;
