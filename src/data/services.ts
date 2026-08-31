import type { Service } from "@/lib/types";

const IMG = "/media";

export const SERVICES: Service[] = [
  // 01 — IT-Support
  {
    slug: "it-support",
    order: 1,
    navLabel: "IT-Support",
    icon: "support",
    title: "IT-Support für Unternehmen",
    tagline: "Schnelle, zuverlässige Hilfe – damit Ihre IT einfach läuft.",
    cardDescription:
      "Wir lösen Ihre IT-Probleme schnell und zuverlässig und sorgen dafür, dass alle Systeme stabil und sicher laufen.",
    metaTitle: "IT-Support für Unternehmen in Potsdam & Berlin",
    metaDescription:
      "Professioneller IT-Support für Unternehmen: schnelle Reaktionszeiten, fester Ansprechpartner, Fernwartung und Vor-Ort-Service in Potsdam, Berlin & St. Gallen.",
    image: `${IMG}/2025/03/datadiorama-7783.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8127.jpg`,
    intro:
      "IT-Support von datadiorama bedeutet, dass sich ein erfahrenes Team um den reibungslosen Betrieb Ihrer gesamten IT kümmert – von der einzelnen Arbeitsstation bis zur kompletten Server- und Netzwerklandschaft. Sie erreichen uns mit einem festen Ansprechpartner, wir lösen die meisten Anfragen per Fernwartung in kürzester Zeit und kommen bei Bedarf vor Ort. So können Sie sich ganz auf Ihr Kerngeschäft konzentrieren.",
    keyTakeaways: [
      "Fester Ansprechpartner statt anonymer Hotline.",
      "Schnelle Hilfe per sicherer Fernwartung – Vor-Ort-Einsatz in Potsdam & Berlin.",
      "Wahlweise als laufende Betreuung (Managed IT) oder bei akutem Bedarf.",
      "Zertifizierte Technikerinnen und Techniker mit kontinuierlicher Weiterbildung.",
    ],
    facts: [
      { label: "Leistung", value: "IT-Support & Managed IT" },
      { label: "Reaktion", value: "Schnelle Hilfe per Fernwartung" },
      { label: "Vor-Ort-Service", value: "Potsdam, Berlin & Umgebung" },
      { label: "Modell", value: "Wartungsvertrag oder auf Abruf" },
      { label: "Erfahrung", value: "Systemhaus seit 2013" },
    ],
    sections: [
      {
        heading: "Ihr IT-Support aus einer Hand",
        body:
          "Als IT-Systemhaus betreuen wir Hardware, Software, Netzwerke und Cloud-Dienste gemeinsam – nicht in Silos. Dadurch finden wir die Ursache eines Problems schneller, statt nur Symptome zu behandeln. Ob Drucker, E-Mail, VPN oder Serverausfall: Sie haben einen Ansprechpartner, der Ihre Umgebung kennt und dokumentiert.",
        bullets: [
          "Anwender-Support für Windows, macOS und Microsoft 365",
          "Server-, Netzwerk- und Firewall-Betreuung",
          "Einrichtung neuer Arbeitsplätze und Onboarding",
          "Regelmäßige Updates, Backups und Monitoring",
        ],
      },
      {
        heading: "Fernwartung & Vor-Ort-Service",
        body:
          "Die meisten Anliegen lassen sich per sicherer Fernwartung lösen – das spart Zeit und Wege. Über unser Tool starten Sie eine geschützte Sitzung mit einem Klick. Wenn Hardware getauscht oder ein Netzwerk geplant werden muss, sind wir in Potsdam, Berlin und Umgebung auch persönlich vor Ort.",
      },
    ],
    benefits: [
      { title: "Weniger Ausfallzeiten", description: "Proaktives Monitoring und schnelle Reaktion halten Ihre Systeme stabil.", icon: "shield" },
      { title: "Fester Ansprechpartner", description: "Ihr Team kennt Ihre IT – keine Warteschleifen, keine ständig neuen Tickets.", icon: "support" },
      { title: "Planbare Kosten", description: "Wartungsverträge machen IT-Kosten kalkulierbar statt unvorhersehbar.", icon: "rocket" },
    ],
    faq: [
      {
        question: "Wie schnell bekomme ich bei einem IT-Problem Hilfe?",
        answer:
          "Die meisten Anfragen lösen wir kurzfristig per Fernwartung. Mit einem Wartungsvertrag sind Reaktionszeiten verbindlich vereinbart. Akute Störungen behandeln wir vorrangig.",
      },
      {
        question: "Bietet ihr IT-Support auch ohne Vertrag an?",
        answer:
          "Ja. Sie können uns als laufende Betreuung beauftragen oder im akuten Bedarfsfall hinzuziehen. Für regelmäßigen Support empfehlen wir einen Wartungsvertrag, weil wir Ihre Umgebung dann bereits kennen.",
      },
      {
        question: "Welche Systeme unterstützt datadiorama?",
        answer:
          "Wir betreuen Windows- und macOS-Arbeitsplätze, Server, Netzwerke, Firewalls sowie Cloud-Dienste wie Microsoft 365 und Google Workspace.",
      },
    ],
    relatedSlugs: ["netzwerkservice", "microsoft-365", "mailserver"],
  },

  // 05 — Telefonanlagen (bewusst weiter hinten: nur eines von mehreren Standbeinen)
  {
    slug: "telefonanlagen",
    order: 5,
    navLabel: "Telefonanlagen",
    icon: "phone",
    title: "Telefonanlagen für Unternehmen",
    tagline: "Cloud-Telefonie, die mit Ihrem Unternehmen mitwächst.",
    cardDescription:
      "Sichere, cloudbasierte Telefonanlagen für Büro, Home-Office und unterwegs – flexibel skalierbar.",
    metaTitle: "Cloud-Telefonanlage für Unternehmen einrichten",
    metaDescription:
      "Moderne Cloud-Telefonanlagen für Unternehmen: erreichbar aus Büro, Home-Office und mobil unter einer Nummer. Einrichtung & Betreuung mit sipgate und easybell.",
    image: `${IMG}/2025/03/datadiorama-7722.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8009.jpg`,
    intro:
      "Eine Cloud-Telefonanlage (auch VoIP-Telefonanlage genannt) verlagert Ihre Telefonie ins Internet: Mitarbeitende sind im Büro, im Home-Office und mobil unter derselben Geschäftsnummer erreichbar – ohne teure Hardware vor Ort. datadiorama plant, richtet ein und betreut cloudbasierte Telefonanlagen und arbeitet dafür mit etablierten Anbietern wie sipgate und easybell zusammen.",
    keyTakeaways: [
      "Eine Geschäftsnummer für Büro, Home-Office und Mobilgeräte.",
      "Skaliert vom Einzelplatz bis zum großen Team – ohne Anlagen-Hardware.",
      "Intelligente Anrufverteilung, Warteschleifen und Ansagen frei konfigurierbar.",
      "Standortübergreifend: neue Filialen und Projekte in Minuten ergänzt.",
    ],
    facts: [
      { label: "Technologie", value: "Cloud-/VoIP-Telefonanlage" },
      { label: "Erreichbarkeit", value: "Büro, Home-Office & mobil" },
      { label: "Partner", value: "sipgate, easybell" },
      { label: "Skalierung", value: "Einzelplatz bis Großbetrieb" },
      { label: "Standorte", value: "Filialübergreifend nutzbar" },
    ],
    sections: [
      {
        heading: "Warum eine Cloud-Telefonanlage?",
        body:
          "Klassische Telefonanlagen sind an einen Standort und an Hardware gebunden. Eine Cloud-Telefonanlage läuft im Rechenzentrum des Anbieters – Sie brauchen nur Internet und ein Endgerät (Tischtelefon, Computer oder Smartphone-App). Das senkt Investitionskosten, macht Wartung überflüssig und sorgt für ein professionelles Auftreten unabhängig vom Arbeitsort.",
        bullets: [
          "Anrufweiterleitung an Home-Office und Mobilgeräte",
          "Sprachmenüs wie „Für Vertragsfragen die 1 wählen“",
          "Pick-up-Gruppen, Klingelreihenfolgen und Wartemusik",
          "Temporäre Projekt- und Hotline-Nummern",
        ],
      },
      {
        heading: "Einrichtung & Betreuung",
        body:
          "Wir analysieren Ihre bestehende Telefonie, planen die Rufnummern- und Routing-Struktur und übernehmen die Einrichtung inklusive Endgeräten. Anschließend verwalten Sie Nebenstellen über eine intuitive Oberfläche selbst – oder überlassen die laufende Betreuung uns. Auf Wunsch portieren wir Ihre vorhandenen Rufnummern.",
      },
    ],
    benefits: [
      { title: "Überall erreichbar", description: "Eine Nummer für alle Standorte und das Home-Office.", icon: "phone" },
      { title: "Flexibel skalierbar", description: "Nebenstellen und Filialen lassen sich jederzeit hinzufügen.", icon: "rocket" },
      { title: "Keine Anlagen-Hardware", description: "Keine teure TK-Anlage, keine Wartung – alles läuft in der Cloud.", icon: "cloud" },
    ],
    faq: [
      {
        question: "Was ist eine Cloud-Telefonanlage?",
        answer:
          "Eine Cloud-Telefonanlage ist eine virtuelle Telefonanlage, die im Internet betrieben wird. Mitarbeitende telefonieren über Tischtelefon, Computer oder App und sind standortunabhängig unter einer Geschäftsnummer erreichbar.",
      },
      {
        question: "Kann ich meine bestehende Rufnummer behalten?",
        answer:
          "Ja. In der Regel lassen sich vorhandene Rufnummern zum neuen Anbieter portieren, sodass Sie unter Ihrer gewohnten Nummer erreichbar bleiben.",
      },
      {
        question: "Eignet sich das auch für kleine Unternehmen?",
        answer:
          "Ja. Cloud-Telefonanlagen skalieren vom Einzelplatz bis zum großen Team. Sie zahlen nur für die tatsächlich benötigten Nebenstellen.",
      },
    ],
    partnerKeys: ["sipgate", "easybell"],
    relatedSlugs: ["netzwerkservice", "home-office", "microsoft-teams"],
  },

  // 02 — Netzwerkservice
  {
    slug: "netzwerkservice",
    order: 2,
    navLabel: "Netzwerkservice",
    icon: "network",
    title: "Netzwerkbetreuung & UniFi-Service",
    tagline: "Optimale WLAN-Ausleuchtung und effizienter Datenaustausch.",
    cardDescription:
      "Planung, Einrichtung und Betreuung sicherer Unternehmensnetzwerke – als zertifizierter UniFi-Partner.",
    metaTitle: "Netzwerkbetreuung & UniFi-Service für Unternehmen",
    metaDescription:
      "Sichere Unternehmensnetzwerke: WLAN-Planung, Netzwerksicherheit, Hardware und Fernwartung – als zertifizierter UniFi-Partner (UEWA).",
    image: `${IMG}/2025/03/datadiorama-7783.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8220.jpg`,
    intro:
      "Ein gut geplantes Netzwerk ist die Grundlage für reibungsloses Arbeiten. datadiorama plant, baut und betreut Unternehmensnetzwerke mit optimaler WLAN-Ausleuchtung und effizientem Datenaustausch. Als zertifizierter UniFi-Partner (UEWA) verwalten wir Ihre Geräte zentral über eine intuitive Weboberfläche.",
    keyTakeaways: [
      "Professionelle WLAN-Planung für lückenlose Abdeckung.",
      "Zentrale Geräteverwaltung über eine UniFi-Weboberfläche.",
      "Netzwerksicherheit für Büro und Home-Office.",
      "Fernwartung mit persönlichem Ansprechpartner und schnellen Reaktionszeiten.",
    ],
    facts: [
      { label: "Schwerpunkt", value: "Netzwerk & WLAN für Unternehmen" },
      { label: "Zertifizierung", value: "UniFi-Partner (UEWA)" },
      { label: "Verwaltung", value: "Zentral, per Weboberfläche" },
      { label: "Region", value: "Potsdam, Berlin & St. Gallen" },
    ],
    sections: [
      {
        heading: "Was unsere Netzwerkbetreuung umfasst",
        body:
          "Wir sind der richtige Ansprechpartner, wenn es um passende Netzwerklösungen im Unternehmen geht – von der Planung über die Installation bis zur laufenden Betreuung. Dabei behalten wir Leistung, Sicherheit und Erweiterbarkeit im Blick.",
        bullets: [
          "Netzwerkplanung & optimale WLAN-Ausleuchtung",
          "Netzwerksicherheit für Büro und Home-Office",
          "Hardware-Beratung, Einrichtung und Wartung",
          "Backups gegen Datenverlust",
          "Updates für Betriebssysteme und Software – over the air",
        ],
      },
      {
        heading: "Zertifizierter UniFi-Partner",
        body:
          "Als zertifizierter UniFi-Partner setzen wir auf Ubiquiti-Technik, die sich zentral über eine intuitive Weboberfläche verwalten lässt. Das ermöglicht schnelle Anpassungen, klare Übersicht und effiziente Fernwartung – mit kurzen Reaktionszeiten und einem festen Ansprechpartner.",
      },
    ],
    benefits: [
      { title: "Lückenloses WLAN", description: "Professionelle Ausleuchtung statt Funklöchern – im ganzen Gebäude.", icon: "wifi" },
      { title: "Sicher abgeschirmt", description: "Segmentierte Netze und Firewall schützen sensible Daten.", icon: "shield" },
      { title: "Zentral verwaltet", description: "Alle Geräte über eine Oberfläche – schnelle Fernwartung inklusive.", icon: "network" },
    ],
    faq: [
      {
        question: "Was ist ein UniFi-Partner?",
        answer:
          "Ein zertifizierter UniFi-Partner ist von Ubiquiti geschult, um UniFi-Netzwerktechnik fachgerecht zu planen, einzurichten und zu betreuen. datadiorama ist über das UEWA-Programm zertifiziert.",
      },
      {
        question: "Plant ihr auch das WLAN für größere Gebäude?",
        answer:
          "Ja. Wir führen eine professionelle WLAN-Planung durch, damit alle Bereiche zuverlässig abgedeckt sind – auch über mehrere Etagen oder Gebäude hinweg.",
      },
      {
        question: "Könnt ihr unser Netzwerk aus der Ferne betreuen?",
        answer:
          "Ja. Über die zentrale Weboberfläche betreuen wir Ihr Netzwerk per Fernwartung und reagieren schnell auf Anfragen – mit einem festen Ansprechpartner.",
      },
    ],
    partnerKeys: ["unifi"],
    relatedSlugs: ["hotel-wlan", "it-support", "home-office"],
  },

  // 03 — Software Engineering
  {
    slug: "software-engineering",
    order: 3,
    navLabel: "Software Engineering",
    icon: "code",
    title: "Software Engineering & Individualentwicklung",
    tagline: "Maßgeschneiderte Software, Schnittstellen und APIs.",
    cardDescription:
      "Wir beraten bei der Zusammenstellung des richtigen Software-Systems und entwickeln Schnittstellen und API-Verbindungen.",
    metaTitle: "Software Engineering: Individualsoftware & APIs",
    metaDescription:
      "Software Engineering von datadiorama: Beratung zum richtigen Software-System, Individualentwicklung sowie Schnittstellen und API-Verbindungen zwischen Ihren Systemen.",
    image: `${IMG}/2025/03/datadiorama-7742.jpg`,
    image2: `${IMG}/2025/04/datadiorama-8233.jpg`,
    intro:
      "Software Engineering bei datadiorama heißt: erst beraten, dann bauen. Wir helfen Ihnen, das richtige Software-System für Ihre Prozesse auszuwählen, und entwickeln dort eigene Lösungen, wo Standardsoftware an ihre Grenzen stößt – insbesondere Schnittstellen und API-Verbindungen, die Ihre Systeme miteinander sprechen lassen.",
    keyTakeaways: [
      "Unabhängige Beratung zur Auswahl des passenden Software-Systems.",
      "Individuelle Schnittstellen und API-Verbindungen zwischen Anwendungen.",
      "Automatisierung wiederkehrender Geschäftsprozesse.",
      "Enge Verzahnung mit Ihrer bestehenden IT-Infrastruktur.",
    ],
    facts: [
      { label: "Leistung", value: "Beratung & Individualentwicklung" },
      { label: "Schwerpunkt", value: "Schnittstellen & APIs" },
      { label: "Ziel", value: "Prozesse digitalisieren & automatisieren" },
      { label: "Vorgehen", value: "Erst Beratung, dann Umsetzung" },
    ],
    sections: [
      {
        heading: "Beratung & Architektur",
        body:
          "Bevor Code entsteht, klären wir den Bedarf: Welche Prozesse sollen abgebildet werden, welche Systeme sind im Einsatz, wo entstehen Medienbrüche? Auf dieser Basis empfehlen wir die wirtschaftlichste Lösung – ob Standardsoftware, Konfiguration oder Eigenentwicklung.",
      },
      {
        heading: "Schnittstellen, APIs & Automatisierung",
        body:
          "Häufig liegt der größte Hebel nicht in neuer Software, sondern darin, vorhandene Systeme zu verbinden. Wir entwickeln Schnittstellen und API-Verbindungen, übertragen Daten automatisiert zwischen Anwendungen und nehmen Ihnen manuelle, fehleranfällige Routinen ab.",
        bullets: [
          "API-Anbindung von ERP, CRM, Shop & Cloud-Diensten",
          "Automatisierte Datenübertragung statt Copy-and-paste",
          "Digitalisierung manueller Abläufe",
        ],
      },
    ],
    benefits: [
      { title: "Weniger Handarbeit", description: "Automatisierte Abläufe sparen Zeit und vermeiden Fehler.", icon: "rocket" },
      { title: "Systeme verbunden", description: "APIs lassen Ihre Anwendungen reibungslos zusammenarbeiten.", icon: "code" },
      { title: "Herstellerunabhängig", description: "Wir empfehlen, was zu Ihnen passt – nicht, was wir verkaufen wollen.", icon: "shield" },
    ],
    faq: [
      {
        question: "Entwickelt ihr komplette Anwendungen oder nur Schnittstellen?",
        answer:
          "Beides ist möglich. Ein Schwerpunkt liegt auf Schnittstellen und API-Verbindungen zwischen bestehenden Systemen; bei Bedarf entwickeln wir auch eigenständige Anwendungen.",
      },
      {
        question: "Bindet ihr auch unsere bestehende Software an?",
        answer:
          "Ja. Wir verbinden vorhandene Systeme wie ERP, CRM oder Online-Shops über APIs, damit Daten automatisiert fließen.",
      },
    ],
    relatedSlugs: ["workspaces", "microsoft-365", "private-cloud"],
  },

  // 04 — Workspaces
  {
    slug: "workspaces",
    order: 4,
    navLabel: "Workspaces",
    icon: "workspace",
    title: "Digitale Workspaces mit Google & Microsoft",
    tagline: "Effizienteres Arbeiten in der Cloud.",
    cardDescription:
      "Wir integrieren Ihre IT-Infrastruktur in die Workspaces von Google oder Microsoft und digitalisieren Ihre Prozesse.",
    metaTitle: "Digitale Workspaces: Google Workspace & Microsoft 365",
    metaDescription:
      "Digitale Arbeitsplätze einrichten: Wir integrieren Ihre IT in Google Workspace oder Microsoft 365 – für ortsunabhängige Zusammenarbeit und digitale Prozesse.",
    image: `${IMG}/2025/03/datadiorama-7716.jpg`,
    image2: `${IMG}/2025/04/datadiorama-8167.jpg`,
    intro:
      "Ein digitaler Workspace bündelt E-Mail, Dateien, Kalender und Zusammenarbeit an einem Ort – erreichbar von überall. datadiorama integriert Ihre IT-Infrastruktur in die Workspaces von Google oder Microsoft, sodass Ihr Team ortsunabhängig, sicher und effizient zusammenarbeitet.",
    keyTakeaways: [
      "Google Workspace oder Microsoft 365 – passend zu Ihrem Bedarf.",
      "Zentrale Verwaltung von Nutzern, Rechten und Daten.",
      "Ortsunabhängige Zusammenarbeit in Echtzeit.",
      "Digitalisierung manueller Prozesse.",
    ],
    facts: [
      { label: "Plattformen", value: "Google Workspace, Microsoft 365" },
      { label: "Leistung", value: "Integration & Verwaltung" },
      { label: "Nutzen", value: "Ortsunabhängiges Arbeiten" },
      { label: "Sicherheit", value: "Zentrale Rechte & Datenschutz" },
    ],
    sections: [
      {
        heading: "Welche Plattform passt zu Ihnen?",
        body:
          "Google Workspace und Microsoft 365 lösen ähnliche Aufgaben, setzen aber unterschiedliche Schwerpunkte. Wir beraten herstellerunabhängig, welche Plattform am besten zu Ihren Arbeitsweisen passt, und übernehmen die Einrichtung – inklusive Migration Ihrer bestehenden Daten.",
      },
      {
        heading: "Integration in Ihre IT",
        body:
          "Ein Workspace entfaltet seinen Nutzen erst, wenn er in Ihre Abläufe eingebettet ist. Wir verbinden Geräte, Rechteverwaltung und Sicherheitsrichtlinien und digitalisieren dabei manuelle Prozesse Schritt für Schritt.",
      },
    ],
    benefits: [
      { title: "Überall arbeiten", description: "Zugriff auf Dateien und Tools von jedem Gerät.", icon: "cloud" },
      { title: "Echte Zusammenarbeit", description: "Gemeinsam an Dokumenten arbeiten – in Echtzeit.", icon: "workspace" },
      { title: "Zentral & sicher", description: "Nutzer, Rechte und Daten an einer Stelle verwaltet.", icon: "shield" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Google Workspace und Microsoft 365?",
        answer:
          "Beide bieten E-Mail, Dateiablage, Kalender und Zusammenarbeit. Microsoft 365 ist stark in der Office-Welt und Teams verankert, Google Workspace punktet mit schlanker, browserbasierter Zusammenarbeit. Wir beraten, was zu Ihnen passt.",
      },
      {
        question: "Migriert ihr unsere bestehenden Daten?",
        answer:
          "Ja. Wir übernehmen die Migration von E-Mails, Dateien und Kontakten – möglichst ohne Datenverlust und mit minimaler Unterbrechung.",
      },
    ],
    partnerKeys: ["microsoft", "google"],
    relatedSlugs: ["microsoft-365", "mailserver", "software-engineering"],
  },

  // 06 — Mailserver
  {
    slug: "mailserver",
    order: 6,
    navLabel: "Mailserver-Betreuung",
    icon: "mail",
    title: "Mailserver-Betreuung & E-Mail-Sicherheit",
    tagline: "Spam-freie Zustellung und DSGVO-konforme Archivierung.",
    cardDescription:
      "Eine spam-freie E-Mail-Zustellung und DSGVO-konforme Archivierung erleichtern die tägliche Arbeit.",
    metaTitle: "Mailserver-Betreuung & E-Mail-Archivierung (DSGVO)",
    metaDescription:
      "E-Mails sicher zustellen: Spam- und Virenschutz, zuverlässige Zustellbarkeit und DSGVO-konforme E-Mail-Archivierung. Mailserver-Betreuung für Unternehmen.",
    image: `${IMG}/2025/03/datadiorama-7572.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8127.jpg`,
    intro:
      "E-Mail ist für die meisten Unternehmen das wichtigste Kommunikationsmittel – und ein häufiges Einfallstor für Angriffe. datadiorama sorgt für eine spam-freie, zuverlässige E-Mail-Zustellung und richtet eine DSGVO-konforme Archivierung ein, damit Sie gesetzliche Aufbewahrungspflichten erfüllen, ohne den Überblick zu verlieren.",
    keyTakeaways: [
      "Wirksamer Spam- und Virenschutz vor der Zustellung.",
      "Zuverlässige Zustellbarkeit Ihrer eigenen E-Mails.",
      "Rechtssichere, DSGVO-konforme E-Mail-Archivierung.",
      "Betreuung bestehender Mailserver und Cloud-Postfächer.",
    ],
    facts: [
      { label: "Leistung", value: "Mailserver-Betreuung & Archivierung" },
      { label: "Schutz", value: "Spam- & Virenfilter" },
      { label: "Compliance", value: "DSGVO-konforme Archivierung" },
      { label: "Umfeld", value: "Eigener Server oder Cloud" },
    ],
    sections: [
      {
        heading: "Spam- und Virenschutz",
        body:
          "Schädliche und unerwünschte Nachrichten werden gefiltert, bevor sie Ihr Postfach erreichen. Das reduziert Risiken durch Phishing und Schadsoftware und hält Ihre Posteingänge übersichtlich.",
      },
      {
        heading: "DSGVO-konforme Archivierung",
        body:
          "Geschäftliche E-Mails unterliegen Aufbewahrungspflichten. Wir richten eine revisionssichere, DSGVO-konforme Archivierung ein, in der Nachrichten unveränderbar gespeichert und schnell wiederauffindbar sind – ohne Ihre Postfächer zu überladen.",
      },
    ],
    benefits: [
      { title: "Weniger Spam", description: "Saubere Posteingänge dank wirksamer Filter.", icon: "shield" },
      { title: "Rechtssicher", description: "Archivierung erfüllt gesetzliche Aufbewahrungspflichten.", icon: "mail" },
      { title: "Zuverlässig zugestellt", description: "Ihre eigenen E-Mails landen dort, wo sie hingehören.", icon: "rocket" },
    ],
    faq: [
      {
        question: "Warum muss ich geschäftliche E-Mails archivieren?",
        answer:
          "Geschäftliche Korrespondenz unterliegt gesetzlichen Aufbewahrungspflichten. Eine revisionssichere, DSGVO-konforme Archivierung stellt sicher, dass relevante E-Mails unveränderbar gespeichert und auffindbar bleiben.",
      },
      {
        question: "Betreut ihr auch Postfächer in Microsoft 365 oder Google Workspace?",
        answer:
          "Ja. Wir betreuen sowohl eigene Mailserver als auch Cloud-Postfächer und ergänzen sie um Spam-Schutz und Archivierung.",
      },
    ],
    relatedSlugs: ["microsoft-365", "workspaces", "it-support"],
  },

  // 07 — Microsoft 365
  {
    slug: "microsoft-365",
    order: 7,
    navLabel: "Microsoft 365",
    icon: "microsoft",
    title: "Microsoft 365 – Migration & Betreuung",
    tagline: "Sicher in die Microsoft-Cloud – ohne Datenverlust.",
    cardDescription:
      "Migration und Betreuung von Microsoft 365: Teams, OneDrive, SharePoint und Exchange Online aus einer Hand.",
    metaTitle: "Microsoft 365 Migration & Betreuung für Unternehmen",
    metaDescription:
      "Microsoft 365 einführen: sichere Migration ohne Datenverlust, Einrichtung von Teams, OneDrive, SharePoint & Exchange Online sowie laufende Betreuung und Support.",
    image: `${IMG}/2025/03/datadiorama-8126.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8220.jpg`,
    intro:
      "Microsoft 365 vereint E-Mail, Office-Programme, Dateiablage und Zusammenarbeit in der Cloud. datadiorama begleitet die Migration nach Microsoft 365 sicher und ohne Datenverlust, richtet Teams, OneDrive, SharePoint und Exchange Online ein und übernimmt auf Wunsch die laufende Betreuung.",
    keyTakeaways: [
      "Sichere Migration nach Microsoft 365 – ohne Datenverlust.",
      "Einrichtung von Teams, OneDrive, SharePoint und Exchange Online.",
      "Strukturierter Umstieg in klar definierten Schritten.",
      "Laufende Betreuung und Anwender-Support nach dem Go-Live.",
    ],
    facts: [
      { label: "Plattform", value: "Microsoft 365" },
      { label: "Module", value: "Teams, OneDrive, SharePoint, Exchange" },
      { label: "Migration", value: "Ohne Datenverlust" },
      { label: "Betreuung", value: "Laufender Support optional" },
    ],
    sections: [
      {
        heading: "Der Umstieg in klaren Schritten",
        body:
          "Wir gehen die Migration strukturiert an: Bestandsaufnahme, Planung, Einrichtung, Datenübernahme und Go-Live. So bleibt der Betrieb stabil und Ihre Mitarbeitenden wissen jederzeit, was als Nächstes passiert.",
        bullets: [
          "Analyse der bestehenden Umgebung",
          "Planung von Lizenzen, Nutzern und Rechten",
          "Migration von E-Mails, Dateien und Kontakten",
          "Einrichtung von Teams, SharePoint & OneDrive",
          "Schulung und Support nach dem Go-Live",
        ],
      },
      {
        heading: "Sicher und ohne Datenverlust",
        body:
          "Datensicherheit hat bei der Migration Priorität. Wir migrieren so, dass keine Daten verloren gehen, richten Sicherheitsrichtlinien ein und sorgen für eine saubere Rechtevergabe.",
      },
    ],
    benefits: [
      { title: "Alles aus einer Hand", description: "Migration, Einrichtung und Support bei einem Partner.", icon: "microsoft" },
      { title: "Ohne Datenverlust", description: "Sorgfältige Migration schützt Ihre Daten beim Umstieg.", icon: "shield" },
      { title: "Sofort produktiv", description: "Teams & Co. einsatzbereit – inklusive Anwender-Schulung.", icon: "rocket" },
    ],
    faq: [
      {
        question: "Geht bei der Migration nach Microsoft 365 etwas verloren?",
        answer:
          "Bei sorgfältiger Planung nicht. Wir migrieren E-Mails, Dateien und Kontakte so, dass keine Daten verloren gehen, und prüfen das Ergebnis vor dem Go-Live.",
      },
      {
        question: "Übernehmt ihr auch die laufende Betreuung?",
        answer:
          "Ja. Nach der Einführung betreuen wir Ihre Microsoft-365-Umgebung auf Wunsch dauerhaft und stehen Ihren Mitarbeitenden als Support zur Seite.",
      },
      {
        question: "Was ist der Unterschied zwischen Microsoft 365 und Office?",
        answer:
          "Office bezeichnet die Programme wie Word und Excel. Microsoft 365 ist das Cloud-Abo, das diese Programme zusammen mit E-Mail (Exchange), Speicher (OneDrive), Zusammenarbeit (Teams, SharePoint) und Sicherheitsfunktionen bündelt.",
      },
    ],
    partnerKeys: ["microsoft"],
    relatedSlugs: ["microsoft-teams", "workspaces", "mailserver"],
  },

  // 08 — Microsoft Teams
  {
    slug: "microsoft-teams",
    order: 8,
    navLabel: "Microsoft Teams",
    icon: "teams",
    title: "Microsoft Teams Beratung & Einführung",
    tagline: "Zusammenarbeit, Chat und Meetings an einem Ort.",
    cardDescription:
      "Wir richten Microsoft Teams ein und beraten zu Kollaboration, Telefonie und sicheren Workflows.",
    metaTitle: "Microsoft Teams Beratung & Einführung",
    metaDescription:
      "Microsoft Teams richtig nutzen: Beratung, Einrichtung und Strukturierung von Teams und Kanälen für Chat, Meetings und Zusammenarbeit – sicher und produktiv.",
    image: `${IMG}/2025/04/datadiorama-8233.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8009.jpg`,
    intro:
      "Microsoft Teams ist die zentrale Plattform für Chat, Meetings, Anrufe und Zusammenarbeit innerhalb von Microsoft 365. datadiorama berät bei der Einführung, strukturiert Teams und Kanäle sinnvoll und sorgt dafür, dass Ihr Unternehmen Teams sicher und produktiv nutzt – statt im Chaos aus Gruppen und Dateien zu versinken.",
    keyTakeaways: [
      "Durchdachte Struktur aus Teams und Kanälen statt Wildwuchs.",
      "Chat, Meetings und Zusammenarbeit an einem Ort.",
      "Sichere Konfiguration und Rechtevergabe.",
      "Schulung, damit Ihr Team Teams wirklich nutzt.",
    ],
    facts: [
      { label: "Plattform", value: "Microsoft Teams (Microsoft 365)" },
      { label: "Leistung", value: "Beratung & Einrichtung" },
      { label: "Funktionen", value: "Chat, Meetings, Dateien" },
      { label: "Fokus", value: "Struktur, Sicherheit, Akzeptanz" },
    ],
    sections: [
      {
        heading: "Teams sinnvoll strukturieren",
        body:
          "Ohne Konzept entstehen schnell unübersichtlich viele Teams und Kanäle. Wir entwickeln mit Ihnen eine klare Struktur, die zu Ihren Abteilungen und Projekten passt, und richten Rechte so ein, dass jede:r findet, was relevant ist.",
      },
      {
        heading: "Sicher zusammenarbeiten",
        body:
          "Wir konfigurieren Teams so, dass Zusammenarbeit einfach bleibt und sensible Daten geschützt sind – etwa durch passende Freigabe- und Gastzugriffs-Einstellungen. Auf Wunsch verbinden wir Teams mit Ihrer Telefonie.",
      },
    ],
    benefits: [
      { title: "Klare Struktur", description: "Teams und Kanäle, die zu Ihrer Organisation passen.", icon: "teams" },
      { title: "Alles an einem Ort", description: "Chat, Meetings und Dateien gebündelt statt verstreut.", icon: "workspace" },
      { title: "Sicher konfiguriert", description: "Passende Rechte und Freigaben schützen Ihre Daten.", icon: "shield" },
    ],
    faq: [
      {
        question: "Brauche ich für Teams ein Microsoft-365-Abo?",
        answer:
          "Microsoft Teams ist Teil von Microsoft 365. Für den vollen Funktionsumfang im Unternehmen ist ein entsprechendes Microsoft-365-Abonnement sinnvoll. Wir beraten zur passenden Lizenz.",
      },
      {
        question: "Helft ihr auch, die Akzeptanz im Team zu erhöhen?",
        answer:
          "Ja. Neben der technischen Einrichtung schulen wir Ihre Mitarbeitenden, damit Teams im Alltag tatsächlich genutzt wird.",
      },
    ],
    partnerKeys: ["microsoft"],
    relatedSlugs: ["microsoft-365", "telefonanlagen", "workspaces"],
  },

  // 09 — Hotel WLAN
  {
    slug: "hotel-wlan",
    order: 9,
    navLabel: "WLAN für Hotels",
    icon: "wifi",
    title: "WLAN für Hotels & Gastgewerbe",
    tagline: "Lückenloses Gäste-WLAN mit professioneller Ausleuchtung.",
    cardDescription:
      "Professionelle WLAN-Planung für Hotels: stabile Abdeckung für Gäste und Betrieb – DSGVO-konform.",
    metaTitle: "WLAN für Hotels: Gäste-WLAN professionell planen",
    metaDescription:
      "Professionelles Hotel-WLAN: lückenlose Abdeckung in Zimmern und öffentlichen Bereichen, getrennte Netze für Gäste und Betrieb, DSGVO-konformer Gastzugang.",
    image: `${IMG}/2025/04/datadiorama-8181.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8220.jpg`,
    intro:
      "Gäste erwarten heute schnelles, stabiles WLAN – im Zimmer wie in der Lobby. datadiorama plant und installiert professionelles Hotel-WLAN mit lückenloser Ausleuchtung und trennt dabei sauber zwischen Gäste- und Betriebsnetz. So bleibt Ihre interne IT geschützt, während Gäste komfortabel und DSGVO-konform online gehen.",
    keyTakeaways: [
      "Lückenlose WLAN-Abdeckung in Zimmern und öffentlichen Bereichen.",
      "Getrennte Netze für Gäste und Hotelbetrieb.",
      "DSGVO-konformer Gästezugang mit Anmeldeseite.",
      "Zentrale Verwaltung und Fernwartung als UniFi-Partner.",
    ],
    facts: [
      { label: "Branche", value: "Hotels & Gastgewerbe" },
      { label: "Leistung", value: "WLAN-Planung & Installation" },
      { label: "Netze", value: "Gäste & Betrieb getrennt" },
      { label: "Datenschutz", value: "DSGVO-konformer Gastzugang" },
    ],
    sections: [
      {
        heading: "Planung für lückenlose Abdeckung",
        body:
          "Dicke Wände, mehrere Etagen und volle Häuser stellen WLAN vor Herausforderungen. Wir führen eine professionelle WLAN-Planung durch und positionieren Access Points so, dass Gäste überall stabil surfen – ohne Funklöcher und Verbindungsabbrüche.",
      },
      {
        heading: "Sicher getrennt: Gäste- und Betriebsnetz",
        body:
          "Gäste-WLAN und interne Systeme gehören strikt getrennt. Wir richten separate Netze ein, sodass Ihr Hotelbetrieb (Kasse, Verwaltung, Buchung) vom öffentlichen Gästezugang abgeschirmt ist – inklusive DSGVO-konformer Anmeldeseite.",
      },
    ],
    benefits: [
      { title: "Zufriedene Gäste", description: "Schnelles WLAN überall im Haus – ein echtes Komfortmerkmal.", icon: "wifi" },
      { title: "Betrieb geschützt", description: "Getrennte Netze schirmen Ihre interne IT ab.", icon: "shield" },
      { title: "Zentral steuerbar", description: "Verwaltung und Fernwartung über eine Oberfläche.", icon: "network" },
    ],
    faq: [
      {
        question: "Wie stellt ihr sicher, dass das WLAM überall funktioniert?",
        answer:
          "Durch eine professionelle WLAN-Planung mit fachgerecht positionierten Access Points sorgen wir für lückenlose Abdeckung in Zimmern und öffentlichen Bereichen.",
      },
      {
        question: "Ist das Gäste-WLAN DSGVO-konform?",
        answer:
          "Ja. Wir richten den Gästezugang datenschutzkonform ein und trennen ihn vom internen Betriebsnetz.",
      },
    ],
    partnerKeys: ["unifi"],
    relatedSlugs: ["netzwerkservice", "it-support", "home-office"],
  },

  // 10 — Home-Office
  {
    slug: "home-office",
    order: 10,
    navLabel: "Home-Office",
    icon: "home",
    title: "Home-Office einrichten",
    tagline: "Sicheres, produktives Arbeiten von überall.",
    cardDescription:
      "Wir richten sichere Home-Office-Arbeitsplätze ein – mit VPN, Cloud-Zugriff und 2-Faktor-Authentifizierung.",
    metaTitle: "Home-Office einrichten: sicher & produktiv arbeiten",
    metaDescription:
      "Home-Office sicher einrichten: VPN, verschlüsselter Zugriff auf Unternehmensdaten, Cloud-Arbeitsplätze und 2-Faktor-Authentifizierung – produktiv von überall arbeiten.",
    image: `${IMG}/2025/04/datadiorama-7740.jpg`,
    image2: `${IMG}/2025/04/datadiorama-8167.jpg`,
    intro:
      "Home-Office funktioniert nur dann gut, wenn der Zugriff auf Unternehmensdaten sicher und komfortabel ist. datadiorama richtet Home-Office-Arbeitsplätze so ein, dass Ihre Mitarbeitenden von überall produktiv arbeiten – über verschlüsselte VPN-Verbindungen, Cloud-Zugriff und 2-Faktor-Authentifizierung zum Schutz vor unbefugtem Zugriff.",
    keyTakeaways: [
      "Verschlüsselter Zugriff auf Unternehmensdaten per VPN.",
      "2-Faktor-Authentifizierung schützt vor unbefugtem Zugriff.",
      "Nahtloser Zugriff auf Cloud-Dienste und Telefonie.",
      "Einheitliche, sichere Konfiguration aller Geräte.",
    ],
    facts: [
      { label: "Leistung", value: "Home-Office-Einrichtung" },
      { label: "Zugriff", value: "VPN & Cloud" },
      { label: "Sicherheit", value: "2-Faktor-Authentifizierung" },
      { label: "Ergänzt", value: "Telefonie fürs Home-Office" },
    ],
    sections: [
      {
        heading: "Sicherer Zugriff von zu Hause",
        body:
          "Wir verbinden Home-Office-Arbeitsplätze über verschlüsselte VPN-Tunnel mit Ihrem Unternehmensnetz oder Ihren Cloud-Diensten. So greifen Mitarbeitende sicher auf Dateien, Anwendungen und Systeme zu – als säßen sie im Büro.",
      },
      {
        heading: "Schutz durch 2-Faktor-Authentifizierung",
        body:
          "Passwörter allein reichen nicht. Mit 2-Faktor-Authentifizierung wird jeder Zugang zusätzlich abgesichert, sodass gestohlene Passwörter allein keinen Zugriff ermöglichen.",
      },
    ],
    benefits: [
      { title: "Produktiv von überall", description: "Voller Zugriff auf Daten und Tools – auch von zu Hause.", icon: "home" },
      { title: "Verschlüsselt", description: "VPN schützt die Verbindung zu Ihren Systemen.", icon: "shield" },
      { title: "Doppelt abgesichert", description: "2-Faktor-Authentifizierung stoppt unbefugte Zugriffe.", icon: "shield" },
    ],
    faq: [
      {
        question: "Wie sicher ist Arbeiten im Home-Office?",
        answer:
          "Mit verschlüsseltem VPN-Zugriff und 2-Faktor-Authentifizierung ist Home-Office sehr sicher. Entscheidend ist eine saubere Einrichtung und einheitliche Konfiguration der Geräte – genau das übernehmen wir.",
      },
      {
        question: "Können Mitarbeitende im Home-Office auch telefonieren?",
        answer:
          "Ja. Mit einer Cloud-Telefonanlage sind Mitarbeitende auch zu Hause unter der Geschäftsnummer erreichbar.",
      },
    ],
    partnerKeys: ["securepoint"],
    relatedSlugs: ["telefonanlagen", "netzwerkservice", "microsoft-365"],
  },

  // 11 — Private Cloud / NAS
  {
    slug: "private-cloud",
    order: 11,
    navLabel: "Datensicherheit / Backup",
    icon: "server",
    title: "Private Cloud mit Synology NAS",
    tagline: "Ihre Daten gesichert im eigenen Haus oder sicherem Storage – DSGVO-konform und unabhängig.",
    cardDescription:
      "Eine private Cloud auf Basis von Synology NAS: volle Datenhoheit, Backups und Zugriff von überall.",
    metaTitle: "Private Cloud mit Synology NAS einrichten",
    metaDescription:
      "Private Cloud mit Synology NAS: volle Datenhoheit in Europa, DSGVO-konform, automatische Backups und sicherer Zugriff von überall – als Synology Consulting Expert.",
    image: `${IMG}/2025/04/datadiorama-8167.jpg`,
    image2: `${IMG}/2024/02/datadiorama-6057-e1708418389361.jpg`,
    intro:
      "Eine private Cloud auf Basis eines Synology NAS gibt Ihnen die Vorteile der Cloud – Zugriff von überall, einfaches Teilen, Backups – ohne Ihre Daten in fremde Hände zu geben. datadiorama ist Synology Consulting Expert 2026 und richtet private Cloud-Lösungen ein, bei denen Ihre Daten DSGVO-konform in Ihrem Haus oder in Europa bleiben.",
    keyTakeaways: [
      "Volle Datenhoheit: Ihre Daten bleiben bei Ihnen bzw. in Europa.",
      "DSGVO-konform und unabhängig von US-Anbietern.",
      "Automatische Backups schützen vor Datenverlust.",
      "Sicherer Zugriff von überall – wie bei der öffentlichen Cloud.",
    ],
    facts: [
      { label: "Technologie", value: "Synology NAS / Private Cloud" },
      { label: "Zertifizierung", value: "Synology Consulting Expert 2026" },
      { label: "Datenstandort", value: "Eigenes Haus oder Europa" },
      { label: "Compliance", value: "DSGVO-konform" },
      { label: "Schutz", value: "Automatische Backups" },
    ],
    sections: [
      {
        heading: "Datenhoheit statt Abhängigkeit",
        body:
          "Bei öffentlichen Cloud-Diensten liegen Daten oft auf Servern außerhalb der EU und unterliegen fremden Rechtsräumen. Eine private Cloud auf Synology-Basis hält Ihre Daten dort, wo Sie sie haben wollen – im eigenen Haus oder in einem europäischen Rechenzentrum.",
      },
      {
        heading: "Backups & Zugriff von überall",
        body:
          "Wir richten automatische Backups ein, damit kein Datenverlust droht, und konfigurieren den sicheren Fernzugriff. So arbeiten Sie komfortabel von überall – mit dem guten Gefühl, die Kontrolle über Ihre Daten zu behalten.",
      },
    ],
    benefits: [
      { title: "Volle Datenhoheit", description: "Ihre Daten bleiben in Ihrer Kontrolle – nicht beim US-Konzern.", icon: "shield" },
      { title: "DSGVO-konform", description: "Datenhaltung in Europa erfüllt europäische Anforderungen.", icon: "server" },
      { title: "Sicher gesichert", description: "Automatische Backups schützen vor Verlust und Ausfall.", icon: "cloud" },
    ],
    faq: [
      {
        question: "Was ist eine private Cloud?",
        answer:
          "Eine private Cloud bietet die Bequemlichkeit der Cloud – Zugriff von überall, Teilen, Backups – auf Infrastruktur, die Sie kontrollieren. Bei Synology-NAS-Lösungen liegen die Daten in Ihrem Haus oder in einem europäischen Rechenzentrum.",
      },
      {
        question: "Ist eine Synology-Cloud DSGVO-konform?",
        answer:
          "Eine private Cloud erleichtert die DSGVO-Konformität, weil Sie den Datenstandort kontrollieren und Daten in Europa halten können. Wir richten sie entsprechend ein.",
      },
      {
        question: "Schützt mich das vor Datenverlust?",
        answer:
          "Ja, in Kombination mit einem durchdachten Backup-Konzept. Wir richten automatische Backups ein, damit Ihre Daten auch bei Hardware-Defekten sicher sind.",
      },
    ],
    partnerKeys: ["synology"],
    relatedSlugs: ["workspaces", "mailserver", "it-support"],
  },

  // 12 — Azure Beratung
  {
    slug: "azure-beratung",
    order: 12,
    navLabel: "Azure Beratung",
    icon: "cloud",
    title: "Azure Beratung für Unternehmen",
    tagline: "Wann sich der Schritt in die Microsoft-Cloud lohnt - und wann nicht.",
    cardDescription:
      "Wir prüfen, welche Ihrer Systeme in die Cloud gehören, planen die Migration und kalkulieren die Betriebskosten vorab.",
    metaTitle: "Azure Beratung in Potsdam & Berlin - Microsoft Azure Consulting",
    metaDescription:
      "Azure Beratung vom IT-Systemhaus aus Potsdam: Cloud-Strategie, Azure Migration, Sicherheit & Kostenoptimierung. Persönliche Betreuung in Potsdam, Berlin & St. Gallen.",
    image: `${IMG}/2025/03/datadiorama-7783.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8127.jpg`,
    intro:
      "Eine Azure Beratung prüft, welche Server, Daten und Anwendungen Ihres Unternehmens sich für Microsoft Azure eignen, plant die Migration und kalkuliert die laufenden Kosten vorab. datadiorama begleitet Sie dabei von der Bestandsaufnahme bis zum Regelbetrieb - als IT-Systemhaus aus Potsdam, das auch Ihre Arbeitsplätze und Netzwerke kennt. Mit einer ehrlichen Antwort: Nicht jedes System gehört in die Cloud.",
    keyTakeaways: [
      "Eine Azure Beratung klärt, welche Systeme in die Cloud gehören, plant die Migration und kalkuliert die Betriebskosten vorab.",
      "Typischer Ablauf: Bestandsaufnahme, Konzept mit Kostenschätzung, Testmigration, Umzug, Übergang in den Regelbetrieb.",
      "Azure lohnt sich am ehesten, wenn eine Server-Erneuerung ansteht, Microsoft 365 bereits läuft oder Standorte und Home-Office angebunden werden sollen.",
      "Es gibt Fälle, in denen die Cloud die teurere Wahl ist - eine seriöse Beratung sagt das offen.",
      "Persönliche Beratung vor Ort in Potsdam und Berlin oder per Fernwartung.",
    ],
    facts: [
      { label: "Leistung", value: "Azure Beratung, Migration & Betrieb" },
      { label: "Region", value: "Potsdam, Berlin & St. Gallen" },
      { label: "Schwerpunkte", value: "Strategie, Migration, Sicherheit, Kosten" },
      { label: "Modell", value: "Projekt oder laufende Betreuung" },
      { label: "Erfahrung", value: "Systemhaus seit 2013" },
    ],
    sections: [
      {
        heading: "Was macht eine Azure Beratung?",
        body:
          "Eine Azure Beratung analysiert Ihre bestehende Infrastruktur und erstellt einen konkreten Plan: welche Systeme in Microsofts Cloud-Plattform verlagert werden, wie die Umgebung dort aufgebaut wird und was der Betrieb kostet. Das Ergebnis ist ein Konzept mit Architektur, Zeitplan und Kostenschätzung - kein Prospekt.\n\nWichtig für die Einordnung: Microsoft Azure ist nicht dasselbe wie Microsoft 365. Microsoft 365 umfasst die Arbeitsanwendungen wie Exchange Online, Teams und SharePoint. Azure ist die darunterliegende Cloud-Plattform, auf der Unternehmen eigene Server, Datenbanken und Anwendungen betreiben - mit mehreren hundert einzelnen Diensten. Diese Menge ist der eigentliche Grund, warum es Beratung braucht. Niemand benötigt hunderte Dienste. Die Kunst liegt darin, die drei bis zehn auszuwählen, die zu Ihrem Unternehmen passen, und den Rest zu ignorieren.",
      },
      {
        heading: "In welchen Situationen liegt Azure auf dem Tisch?",
        body:
          "Selten entsteht ein Cloud-Projekt aus dem Nichts. In den Umgebungen, die wir als Systemhaus betreuen, ist es fast immer eine von vier Ausgangslagen:",
        bullets: [
          "Die Server-Hardware erreicht ihr Lebensende, und die Ersatzinvestition wird mit der Cloud-Miete verglichen.",
          "Das Unternehmen arbeitet bereits mit Microsoft 365, und die Identitäten liegen ohnehin in Entra ID, Microsofts Cloud-Verzeichnisdienst.",
          "Standorte, Außendienst oder Home-Office brauchen Zugriff auf zentrale Systeme, und das bisherige VPN-Konstrukt ächzt.",
          "Eine einzelne Anwendung, etwa die Warenwirtschaft, wird vom Hersteller künftig nur noch in der Cloud betrieben.",
        ],
      },
      {
        heading: "Lohnt sich Azure auch für kleine Unternehmen?",
        body:
          "Ja, aber anders, als die Werbung es zeichnet. Kleine Unternehmen profitieren vor allem davon, dass sie keine Hardware vorfinanzieren und keine Serverpflege organisieren müssen; bezahlt wird nach Verbrauch. Der häufigste sinnvolle Einstieg ist deshalb nicht die große Migration, sondern ein einzelner Baustein: ein Cloud-Backup nach der 3-2-1-Regel, nach der Unternehmen drei Kopien ihrer Daten auf zwei Medientypen vorhalten sollten, davon eine außer Haus (Quelle: BSI). Oder ein einzelner Server, der ohnehin ersetzt werden müsste.\n\nDer Punkt, an dem viele Projekte kippen, ist die Kostenlogik: Ein lokaler Server kostet einmal viel und dann wenig. Azure kostet nichts in der Anschaffung und dann jeden Monat. Wer eine Umgebung eins zu eins in die Cloud hebt, ohne die Maschinen passend zu dimensionieren, zahlt drauf. Deshalb gehört die Verbrauchskalkulation in die Beratung, nicht in die erste Monatsrechnung.",
      },
      {
        heading: "Alternativen im Vergleich: Azure, lokaler Server oder Private Cloud?",
        body:
          "Wer nur eine Option prüft, entscheidet nicht, sondern bestätigt. Azure spielt seine Stärke aus, wo Last schwankt, Teams verteilt arbeiten oder Investitionen vermieden werden sollen: keine Anschaffungskosten, kurzfristige Skalierung, wählbarer Datenstandort wie Deutschland. Ein lokaler Server bleibt die bessere Wahl bei stabilen Altanwendungen mit großen lokalen Datenmengen und geringem Bedarf an Fernzugriff. Eine Private Cloud beim Dienstleister passt, wenn feste Monatskosten gewünscht sind und wenig Eigenbetrieb. Und ein Hybrid-Modell kombiniert beides: Kritisches bleibt lokal verfügbar, der Rest läuft in Azure.\n\nEhrlich eingeordnet: Azure ist nicht automatisch die richtige Antwort. Dauerhaft voll ausgelastete Rechenlast ist in der Miete teurer als im Eigentum, und ein funktionierender, gepflegter lokaler Server ist kein Sanierungsfall. Genau das klären wir in der Bestandsaufnahme.",
      },
      {
        heading: "Was kostet der Betrieb in Azure?",
        body:
          "Die Betriebskosten setzen sich im Kern aus drei Blöcken zusammen: Rechenleistung, Speicher und Datenverkehr aus der Cloud heraus. Dazu kommen Lizenzen und, falls beauftragt, die Betreuung durch einen Dienstleister. Konkrete Euro-Beträge hängen so stark an Größe und Nutzungsprofil der Umgebung, dass jede pauschale Zahl unseriös wäre; belastbar wird die Kalkulation erst nach der Bestandsaufnahme. Nehmen Sie dafür am besten direkt Kontakt mit uns auf.\n\nDrei Stellhebel entscheiden über die Rechnung: Reservierungen (wer Kapazität für ein oder drei Jahre fest bucht, zahlt deutlich weniger als im flexiblen Tarif), richtige Dimensionierung (Cloud-Maschinen lassen sich kleiner anlegen als alte physische Server, die auf Zuwachs gekauft wurden) und Abschalten (Testsysteme, die nachts und am Wochenende durchlaufen, sind reine Geldvernichtung). Klingt banal. Ist aber in der Praxis der häufigste Kostentreiber.",
      },
      {
        heading: "Wie steht es um Datenschutz und DSGVO?",
        body:
          "Azure lässt sich DSGVO-konform betreiben - das passiert aber nicht von selbst, sondern durch Konfiguration. Drei Punkte gehören in jedes Konzept: die Regionswahl (Microsoft betreibt Rechenzentrumsregionen unter anderem in Deutschland und der Schweiz), der Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO und der Zugriffsschutz mit Multi-Faktor-Authentifizierung und abgestuften Berechtigungen. Ein Admin-Konto ohne MFA ist im Jahr 2026 fahrlässig; einen vollständigen Schutz gibt es in der IT-Sicherheit allerdings nicht.\n\nFür die Einordnung der Anbieter-Sicherheit hilft der Kriterienkatalog C5 des BSI, mit dem Cloud-Dienste ihre Sicherheitsmaßnahmen nachweisen. Bei Spezialfällen, etwa besonders sensiblen Datenkategorien, gehört Ihr Datenschutzbeauftragter mit an den Tisch.",
      },
    ],
    benefits: [
      { title: "Alles aus einer Hand", description: "Cloud, Netzwerk und Arbeitsplätze zusammen gedacht - ein Ansprechpartner für Ihre gesamte IT.", icon: "cloud" },
      { title: "Sicher & DSGVO-konform", description: "Europäische Rechenzentren, MFA und saubere Berechtigungen von Anfang an.", icon: "shield" },
      { title: "Kalkulierbare Kosten", description: "Passend dimensionierte Ressourcen und laufende Kostenoptimierung statt Cloud-Kostenfalle.", icon: "rocket" },
    ],
    process: [
      {
        title: "Bestandsaufnahme",
        description: "Wir erfassen Server, Anwendungen, Datenmengen und Abhängigkeiten. Hier entscheidet sich, was migriert wird und was nicht.",
      },
      {
        title: "Konzept & Kostenschätzung",
        description: "Sie erhalten eine Architektur mit den geplanten Azure-Diensten, Sicherheitsrichtlinien und einer Schätzung der monatlichen Betriebskosten.",
      },
      {
        title: "Aufbau der Grundumgebung",
        description: "Netzwerk, Identitäten über Entra ID, Multi-Faktor-Authentifizierung und Zugriffsregeln stehen, bevor die erste Anwendung umzieht.",
      },
      {
        title: "Testmigration",
        description: "Ein unkritisches System oder eine Pilotgruppe zieht zuerst um. Was hier hakt, hakt später nicht im Echtbetrieb.",
      },
      {
        title: "Migration",
        description: "Server, Daten und Anwendungen werden schrittweise verlagert, meist außerhalb der Geschäftszeiten, damit Ihr Betrieb weiterläuft.",
      },
      {
        title: "Regelbetrieb & Optimierung",
        description: "Monitoring, Backup und Kostenkontrolle werden eingerichtet; auf Wunsch übernehmen wir die laufende Betreuung.",
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Microsoft Azure und Microsoft 365?",
        answer:
          "Microsoft 365 sind die fertigen Arbeitsanwendungen wie E-Mail (Exchange Online), Teams und SharePoint. Azure ist die Cloud-Plattform darunter, auf der Unternehmen eigene Server, Datenbanken und Anwendungen betreiben. Viele Firmen nutzen beides: Microsoft 365 für die Büroarbeit, Azure für Serverdienste, die vorher lokal liefen.",
      },
      {
        question: "Brauche ich für Azure ein eigenes IT-Team?",
        answer:
          "Nein, aber jemand muss die Umgebung betreiben. Auch eine Cloud-Umgebung braucht Updates, Überwachung, Backup-Kontrolle und Kostenpflege. Kleine und mittlere Unternehmen lagern das meist an ein Systemhaus aus, das die Umgebung als Managed Service betreut.",
      },
      {
        question: "Was passiert bei einem Internetausfall?",
        answer:
          "Ohne Internetverbindung sind Cloud-Systeme nicht erreichbar, daran führt kein Weg vorbei. Deshalb gehören eine zweite Internetleitung oder ein Mobilfunk-Fallback in jedes Konzept, und wirklich betriebskritische Systeme mit Offline-Anforderung bleiben in einem Hybrid-Modell lokal.",
      },
      {
        question: "Kann ich Azure später wieder verlassen?",
        answer:
          "Ja, ein Rückweg oder Anbieterwechsel ist möglich, aber mit Aufwand verbunden. Virtuelle Maschinen und Daten lassen sich exportieren; je stärker eine Umgebung Azure-eigene Spezialdienste nutzt, desto aufwendiger wird der Umzug. Eine gute Beratung spricht dieses Exit-Szenario von Anfang an mit an.",
      },
      {
        question: "Welche Systeme gehören nicht in die Cloud?",
        answer:
          "Typische Kandidaten für den Verbleib im Haus sind Altanwendungen ohne Cloud-Freigabe des Herstellers, Systeme mit sehr großen lokalen Datenmengen, Maschinensteuerungen in der Produktion und alles, was auch bei einem Internetausfall laufen muss. Genau dafür gibt es Hybrid-Modelle.",
      },
      {
        question: "Wie lange dauert eine Migration zu Azure?",
        answer:
          "Einzelne Workloads wie ein Cloud-Backup sind in wenigen Tagen eingerichtet. Eine vollständige Migration einer kleinen bis mittleren Umgebung dauert von der Bestandsaufnahme bis zum Regelbetrieb in der Regel mehrere Wochen bis wenige Monate, abhängig von Datenmenge, Anwendungen und Testaufwand.",
      },
    ],
    partnerKeys: ["microsoft"],
    relatedSlugs: ["microsoft-365", "private-cloud", "it-support"],
  },
];

export function getServicesSorted(): Service[] {
  return [...SERVICES].sort((a, b) => a.order - b.order);
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  if (!service.relatedSlugs?.length) return [];
  return service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
