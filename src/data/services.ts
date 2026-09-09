import type { Service } from "@/lib/types";

const IMG = "/media";

export const SERVICES: Service[] = [
  // 01 — IT-Beratung
  {
    slug: "it-beratung",
    order: 1,
    navLabel: "IT-Beratung",
    icon: "support",
    title: "IT-Beratung für Unternehmen",
    tagline: "Unabhängige Beratung, die auch die Umsetzung übernimmt.",
    cardDescription:
      "Wir analysieren Ihre IT, empfehlen nur, was zu Ihrem Unternehmen passt – und setzen es anschließend selbst um und betreiben es.",
    metaTitle: "IT-Beratung für Unternehmen in Potsdam & Berlin",
    metaDescription:
      "IT-Beratung vom Systemhaus: Bestandsaufnahme, IT-Strategie, Sicherheit & Kostenplanung für kleine und mittlere Unternehmen. Umsetzung und Betreuung inklusive – Potsdam, Berlin & St. Gallen.",
    image: `${IMG}/2025/03/datadiorama-7783.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8127.jpg`,
    intro:
      "Eine IT-Beratung klärt, wie Ihre IT aufgestellt sein muss, damit sie das Geschäft trägt statt bremst: welche Systeme bleiben, was ersetzt wird, wo Risiken liegen und was der Betrieb kosten darf. datadiorama berät als IT-Systemhaus aus Potsdam – mit dem Unterschied, dass wir nicht nur ein Konzept abgeben, sondern die Umsetzung und den laufenden Betrieb selbst übernehmen. Unsere Empfehlungen müssen deshalb in der Praxis funktionieren, nicht nur auf Folien.",
    keyTakeaways: [
      "IT-Beratung vom Systemhaus: Analyse, Konzept, Umsetzung und Betrieb aus einer Hand.",
      "Herstellerunabhängige Empfehlungen – wir verkaufen keine Lizenzen um ihrer selbst willen.",
      "Typische Themen: IT-Strategie, Serverersatz, Cloud oder lokal, IT-Sicherheit, Kostenplanung.",
      "Für kleine und mittlere Unternehmen, die keine eigene IT-Abteilung haben – oder sie entlasten wollen.",
      "Persönlich vor Ort in Potsdam und Berlin oder per Fernwartung.",
    ],
    facts: [
      { label: "Leistung", value: "IT-Beratung, Umsetzung & Managed IT" },
      { label: "Region", value: "Potsdam, Berlin & St. Gallen" },
      { label: "Schwerpunkte", value: "Strategie, Infrastruktur, Sicherheit, Kosten" },
      { label: "Modell", value: "Projekt oder laufende Betreuung" },
      { label: "Erfahrung", value: "Systemhaus seit 2013" },
    ],
    sections: [
      {
        heading: "Was macht eine IT-Beratung?",
        body:
          "Eine IT-Beratung nimmt Ihre bestehende IT auf – Arbeitsplätze, Server, Netzwerk, Cloud-Dienste, Verträge – und beantwortet daraus die Fragen, die im Alltag liegen bleiben: Wo ist die Umgebung verwundbar? Welche Hardware muss in den nächsten zwei Jahren ersetzt werden? Gehören Systeme in die Cloud oder bleiben sie besser im Haus? Und was kostet das alles im Betrieb?\n\nDas Ergebnis ist kein Foliensatz, sondern ein umsetzbarer Plan mit Prioritäten und Kostenrahmen. Der Unterschied zur klassischen IT-Unternehmensberatung: Wir sind Systemhaus. Was wir empfehlen, bauen wir anschließend selbst auf und betreiben es – und stehen damit für unsere eigenen Empfehlungen gerade.",
        bullets: [
          "Bestandsaufnahme von Infrastruktur, Software und Verträgen",
          "IT-Strategie und Investitionsplanung mit Prioritäten",
          "Sicherheits-Check: Backups, Updates, Zugriffe, Notfallplan",
          "Entscheidungsvorlagen: Cloud vs. lokal, Kauf vs. Miete, Anbieterwahl",
        ],
      },
      {
        heading: "In welchen Situationen lohnt sich IT-Beratung?",
        body:
          "Die wenigsten Unternehmen suchen IT-Beratung aus Langeweile. In der Praxis sind es fast immer konkrete Auslöser:",
        bullets: [
          "Server oder Arbeitsplätze erreichen ihr Lebensende, und vor der Ersatzinvestition soll die Richtung stimmen.",
          "Das Unternehmen wächst, und die IT, die für fünf Leute gereicht hat, trägt keine zwanzig.",
          "Ein Sicherheitsvorfall – im eigenen Haus oder bei einem Wettbewerber – wirft die Frage auf, wie gut man selbst aufgestellt ist.",
          "Der bisherige IT-Dienstleister oder der langjährige Administrator hört auf, und niemand weiß genau, wie die Umgebung aufgebaut ist.",
          "Die IT-Kosten steigen, ohne dass klar ist, wofür eigentlich.",
        ],
      },
      {
        heading: "IT-Beratung für den Mittelstand: unabhängig, aber nicht unverbindlich",
        body:
          "Große Beratungshäuser rechnen in Tagessätzen und verabschieden sich mit dem Konzept. Reine Wiederverkäufer beraten in Richtung der Produkte, an denen sie verdienen. Wir positionieren uns dazwischen: herstellerunabhängig in der Empfehlung, aber mit der Verantwortung für Umsetzung und Betrieb.\n\nDas diszipliniert die Beratung. Eine Lösung, die wir hinterher selbst warten müssen, empfehlen wir nur, wenn sie im Alltag funktioniert. Und wenn die ehrliche Antwort lautet, dass Ihre bestehende Umgebung noch zwei Jahre gut trägt, dann sagen wir das – ein gepflegtes System ist kein Sanierungsfall.",
      },
      {
        heading: "Beratung, die nicht beim Konzept endet",
        body:
          "Nach der Entscheidung übernehmen wir die Umsetzung: Beschaffung, Einrichtung, Migration und Dokumentation. Danach betreiben wir die Umgebung auf Wunsch als Managed IT weiter – mit Monitoring, Updates, Backups und einem festen Ansprechpartner, der Ihre IT kennt. Die meisten Anliegen lösen wir per sicherer Fernwartung; in Potsdam, Berlin und Umgebung sind wir auch persönlich vor Ort.",
      },
      {
        heading: "Was kostet IT-Beratung?",
        body:
          "Das hängt vom Umfang ab: Eine kompakte Bestandsaufnahme mit Empfehlungen ist ein überschaubares Projekt von wenigen Tagen, eine begleitete Neuausrichtung der gesamten Infrastruktur entsprechend mehr. Wir nennen Ihnen nach einem kostenlosen Erstgespräch einen festen Rahmen – keine offenen Tagessatz-Rechnungen. Wenn wir anschließend die Umsetzung übernehmen, fließt die Analyse dort ohnehin ein.",
      },
    ],
    benefits: [
      { title: "Beratung mit Haftung im Alltag", description: "Wir setzen um, was wir empfehlen – und betreiben es danach. Das hält Konzepte ehrlich.", icon: "shield" },
      { title: "Fester Ansprechpartner", description: "Ein Team, das Ihre Umgebung kennt und dokumentiert – keine anonyme Hotline.", icon: "support" },
      { title: "Planbare Kosten", description: "Klare Projektrahmen und kalkulierbare Betreuungspauschalen statt offener Tagessätze.", icon: "rocket" },
    ],
    process: [
      {
        title: "Erstgespräch",
        description: "Kostenlos und unverbindlich: Wir klären Ausgangslage, Ziele und ob wir zueinander passen.",
      },
      {
        title: "Bestandsaufnahme",
        description: "Wir erfassen Arbeitsplätze, Server, Netzwerk, Cloud-Dienste und Verträge – und dokumentieren, was oft nie dokumentiert wurde.",
      },
      {
        title: "Konzept & Empfehlung",
        description: "Sie erhalten einen priorisierten Maßnahmenplan mit Kostenrahmen: was dringend ist, was warten kann, was nichts bringt.",
      },
      {
        title: "Umsetzung",
        description: "Auf Wunsch führen wir die Maßnahmen selbst durch – Beschaffung, Einrichtung, Migration, meist außerhalb der Geschäftszeiten.",
      },
      {
        title: "Betrieb & Weiterentwicklung",
        description: "Als Managed IT betreuen wir die Umgebung laufend und passen die Strategie an, wenn sich Ihr Unternehmen verändert.",
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen IT-Beratung und IT-Support?",
        answer:
          "IT-Support löst akute Probleme im laufenden Betrieb – ein Drucker streikt, E-Mails kommen nicht an. IT-Beratung setzt davor an: Sie sorgt dafür, dass die IT so geplant ist, dass solche Probleme seltener auftreten. Bei datadiorama bekommen Sie beides aus einer Hand – die Beratung legt die Richtung fest, der Support hält den Alltag am Laufen.",
      },
      {
        question: "Lohnt sich IT-Beratung auch für kleine Unternehmen?",
        answer:
          "Gerade dort. Kleine und mittlere Unternehmen haben selten eine eigene IT-Abteilung, treffen aber dieselben Entscheidungen: Serverersatz, Cloud, Sicherheit, Datenschutz. Eine kompakte Bestandsaufnahme mit klaren Empfehlungen kostet wenig im Vergleich zu einer Fehlinvestition oder einem vermeidbaren Ausfall.",
      },
      {
        question: "Seid ihr herstellerunabhängig?",
        answer:
          "Wir empfehlen, was zu Ihrer Situation passt – auch wenn das eine Lösung ist, an der wir nichts verdienen, oder die Empfehlung lautet, Bestehendes weiterzubetreiben. Als Systemhaus arbeiten wir mit etablierten Herstellern wie Microsoft, Synology und UniFi, sind aber an keinen gebunden.",
      },
      {
        question: "Übernehmt ihr nach der Beratung auch Umsetzung und Support?",
        answer:
          "Ja, das ist der Normalfall. Wir setzen die empfohlenen Maßnahmen selbst um und betreuen die Umgebung danach als Managed IT weiter – mit Monitoring, Updates, Backups und schneller Hilfe per Fernwartung oder vor Ort in Potsdam und Berlin.",
      },
      {
        question: "Wie läuft der Einstieg ab?",
        answer:
          "Mit einem kostenlosen Erstgespräch, telefonisch oder vor Ort. Danach entscheiden Sie, ob wir mit einer Bestandsaufnahme starten. Sie gehen kein Abo und keine Verpflichtung ein.",
      },
    ],
    relatedSlugs: ["netzwerkservice", "microsoft-365", "azure-beratung"],
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
    relatedSlugs: ["hotel-wlan", "it-beratung", "home-office"],
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
    relatedSlugs: ["microsoft-365", "workspaces", "it-beratung"],
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
    relatedSlugs: ["netzwerkservice", "it-beratung", "home-office"],
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
    relatedSlugs: ["workspaces", "mailserver", "it-beratung"],
  },

  // 12 - Azure Beratung
  {
    slug: "azure-beratung",
    order: 12,
    navLabel: "Azure Beratung",
    icon: "cloud",
    title: "Azure Beratung für Unternehmen",
    tagline: "Wann sich der Schritt in die Microsoft-Cloud lohnt - und wann nicht.",
    cardDescription:
      "Wir prüfen, welche Ihrer Systeme in die Cloud gehören, planen die Migration und kalkulieren die Betriebskosten vorab.",
    metaTitle: "Azure Beratung Potsdam & Berlin - Migration & Kosten",
    metaDescription:
      "Azure Beratung vom Systemhaus aus Potsdam - Strategie, Migration, DSGVO und ehrliche Kostenkalkulation. Denn nicht jedes System gehört in die Cloud.",
    schemaServiceType: "Cloud-Beratung und Migration (Microsoft Azure)",
    schemaDescription:
      "Azure Beratung für kleine und mittlere Unternehmen: Eignungsprüfung, Migrationsplanung, DSGVO-konforme Konfiguration und Kostenkalkulation - von der Bestandsaufnahme bis zum Regelbetrieb.",
    ctaText:
      "Ob Azure für Ihre Umgebung die richtige Antwort ist, zeigt erst die Bestandsaufnahme. Wenn Sie das klären möchten, vereinbaren Sie ein unverbindliches Erstgespräch - wir beraten Sie ehrlich, auch wenn die Antwort \"lokaler Server\" lautet.",
    image: `${IMG}/2025/03/datadiorama-7783.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8127.jpg`,
    intro:
      "Eine Azure Beratung klärt, welche Server, Daten und Anwendungen Ihres Unternehmens sich für Microsoft Azure eignen, plant die Migration und kalkuliert die laufenden Kosten, bevor die erste Rechnung kommt. datadiorama begleitet Sie dabei als IT-Systemhaus aus Potsdam von der Bestandsaufnahme bis zum Regelbetrieb - mit einer Antwort, die Sie von einem Cloud-Vertrieb selten hören: Nicht jedes System gehört in die Cloud.",
    keyTakeaways: [
      "Eine Azure Beratung prüft Eignung, plant die Migration und kalkuliert die monatlichen Betriebskosten vorab - das Ergebnis ist ein Konzept mit Architektur und Zeitplan, kein Prospekt.",
      "Azure ist die Cloud-Plattform unter Microsoft 365: Dort betreiben Unternehmen eigene Server, Datenbanken und Anwendungen, während Microsoft 365 die fertigen Büroanwendungen liefert.",
      "Der Umzug lohnt sich am ehesten, wenn eine Server-Erneuerung ansteht, Microsoft 365 bereits läuft oder Standorte und Home-Office zentral angebunden werden sollen.",
      "Dauerhaft voll ausgelastete Systeme sind in der Cloud-Miete meist teurer als im Eigentum - eine seriöse Beratung sagt das offen und rechnet es vor.",
      "Datenschutz ist lösbar: deutsche Rechenzentrumsregionen, Auftragsverarbeitung nach Art. 28 DSGVO und Multi-Faktor-Authentifizierung gehören in jedes Konzept.",
      "Beratung persönlich vor Ort in Potsdam und Berlin oder per Fernwartung; Umsetzung und Betrieb auf Wunsch aus einer Hand.",
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
          "Eine Azure Beratung ist die Analyse Ihrer bestehenden IT mit einem konkreten Plan als Ergebnis: welche Systeme in Microsofts Cloud-Plattform verlagert werden, wie die Umgebung dort aufgebaut wird und was der Betrieb pro Monat kostet. Sie endet nicht mit einer Empfehlung, sondern mit einer Entscheidungsgrundlage - Architektur, Zeitplan, Kostenschätzung.\n\nWichtig für die Einordnung: Microsoft Azure ist nicht dasselbe wie Microsoft 365. Microsoft 365 umfasst die Arbeitsanwendungen wie Exchange Online, Teams und SharePoint. Azure ist die Plattform darunter, auf der Unternehmen eigene Server, Datenbanken und Anwendungen betreiben - mit mehreren hundert einzelnen Diensten. Diese Menge ist der eigentliche Grund, warum es Beratung braucht. Niemand benötigt hunderte Dienste. Die Kunst liegt darin, die drei bis zehn auszuwählen, die zu Ihrem Unternehmen passen, und den Rest zu ignorieren.",
      },
      {
        heading: "In welchen Situationen liegt Azure auf dem Tisch?",
        body:
          "Selten entsteht ein Cloud-Projekt aus dem Nichts. In den Umgebungen, die wir als Systemhaus betreuen, ist es fast immer eine von vier Ausgangslagen: Die Server-Hardware erreicht ihr Lebensende, und die Ersatzinvestition wird mit der Cloud-Miete verglichen. Das Unternehmen arbeitet bereits mit Microsoft 365, und die Benutzerkonten liegen ohnehin in Entra ID, Microsofts Cloud-Verzeichnisdienst. Standorte, Außendienst oder Home-Office brauchen Zugriff auf zentrale Systeme, und das gewachsene VPN-Konstrukt ächzt. Oder ein Hersteller stellt eine einzelne Anwendung, etwa die Warenwirtschaft, künftig nur noch als Cloud-Dienst bereit.\n\nErkennen Sie sich in einer dieser Lagen wieder? Dann ist der richtige nächste Schritt keine Buchung, sondern eine Bestandsaufnahme.",
      },
      {
        heading: "Lohnt sich Azure auch für kleine Unternehmen?",
        body:
          "Ja - aber anders, als die Werbung es zeichnet. Kleine Unternehmen profitieren vor allem davon, dass sie keine Hardware vorfinanzieren und keine Serverpflege organisieren müssen; bezahlt wird nach Verbrauch. Der häufigste sinnvolle Einstieg ist deshalb nicht die große Migration, sondern ein einzelner Baustein: ein Cloud-Backup nach der 3-2-1-Regel, nach der Unternehmen drei Kopien ihrer Daten auf zwei Medientypen vorhalten sollten, davon eine außer Haus (Quelle: BSI). Oder ein einzelner Server, der ohnehin ersetzt werden müsste.\n\nDer Punkt, an dem viele Projekte kippen, ist die Kostenlogik: Ein lokaler Server kostet einmal viel und dann wenig. Azure kostet nichts in der Anschaffung und dann jeden Monat. Wer eine Umgebung eins zu eins in die Cloud hebt, ohne die Maschinen passend zu dimensionieren, zahlt drauf. Deshalb gehört die Verbrauchskalkulation in die Beratung, nicht in die erste Monatsrechnung.",
      },
      {
        heading: "Azure, lokaler Server oder Private Cloud: Was passt wann?",
        body:
          "Wer nur eine Option prüft, entscheidet nicht, sondern bestätigt. Darum stellen wir in jeder Beratung mindestens drei Modelle nebeneinander:",
        table: {
          headers: [
            "Kriterium",
            "Microsoft Azure",
            "Lokaler Server",
            "Private Cloud beim Dienstleister",
            "Hybrid-Modell",
          ],
          rows: [
            ["Anschaffungskosten", "keine, Abrechnung nach Verbrauch", "hoch (Hardware, Lizenzen)", "keine bis gering", "mittel"],
            ["Laufende Kosten", "monatlich, nutzungsabhängig", "gering nach Anschaffung", "feste Monatspauschale", "gemischt"],
            ["Skalierung", "kurzfristig, in beide Richtungen", "nur durch Neukauf", "nach Absprache", "teils/teils"],
            ["Fernzugriff und Standorte", "Kernstärke", "erfordert VPN-Aufbau", "gut", "gut"],
            ["Betrieb bei Internetausfall", "nicht erreichbar", "läuft weiter", "nicht erreichbar", "Kritisches läuft lokal weiter"],
            ["Datenstandort", "wählbare Region, z. B. Deutschland", "im eigenen Haus", "beim Dienstleister, vertraglich geregelt", "kombiniert"],
            ["Typischer Fall", "schwankende Last, verteilte Teams, anstehende Server-Erneuerung", "stabile Altanwendungen, große lokale Datenmengen", "feste Kosten gewünscht, kein Eigenbetrieb", "Produktion, Offline-Pflichten"],
          ],
        },
        bodyAfterTable:
          "Ehrlich eingeordnet: Azure ist nicht automatisch die richtige Antwort. Dauerhaft voll ausgelastete Rechenlast ist in der Miete in der Regel teurer als im Eigentum, und ein funktionierender, gepflegter lokaler Server ist kein Sanierungsfall. Nicht jedes System gehört in die Cloud - genau das klären wir in der Bestandsaufnahme. Für den lokalen Weg mit voller Datenhoheit beraten wir Sie ebenso, siehe [Datensicherheit / Private Cloud](/leistungen/private-cloud).",
      },
      {
        heading: "Was kostet der Betrieb in Azure?",
        body:
          "Die Betriebskosten setzen sich im Kern aus drei Blöcken zusammen: Rechenleistung, Speicher und Datenverkehr aus der Cloud heraus. Dazu kommen Lizenzen und, falls beauftragt, die Betreuung durch einen Dienstleister. Konkrete Euro-Beträge hängen so stark an Größe und Nutzungsprofil der Umgebung, dass jede pauschale Zahl unseriös wäre; belastbar wird die Kalkulation erst nach der Bestandsaufnahme.\n\nDrei Stellhebel entscheiden über die Rechnung. Reservierungen: Wer Kapazität für ein oder drei Jahre fest bucht, zahlt laut Microsoft-Preismodell deutlich weniger als im flexiblen Tarif (Quelle: Microsoft Learn, Azure Reservations). Dimensionierung: Cloud-Maschinen lassen sich kleiner anlegen als alte physische Server, die auf Zuwachs gekauft wurden. Abschalten: Testsysteme, die nachts und am Wochenende durchlaufen, sind reine Geldvernichtung. Klingt banal. Ist aber in der Praxis der häufigste Kostentreiber.",
      },
      {
        heading: "Wie steht es um Datenschutz und DSGVO?",
        body:
          "Azure lässt sich DSGVO-konform betreiben - das passiert aber nicht von selbst, sondern durch Konfiguration. Drei Punkte gehören in jedes Konzept: die Regionswahl (Microsoft betreibt Rechenzentrumsregionen unter anderem in Deutschland und der Schweiz), der Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO und der Zugriffsschutz mit Multi-Faktor-Authentifizierung und abgestuften Berechtigungen. Ein Admin-Konto ohne MFA ist im Jahr 2026 fahrlässig; einen vollständigen Schutz gibt es in der IT-Sicherheit allerdings nicht.\n\nFür die Einordnung der Anbieter-Sicherheit hilft der Kriterienkatalog C5 des BSI, mit dem Cloud-Dienste ihre Sicherheitsmaßnahmen nachweisen (Quelle: BSI). Bei Spezialfällen, etwa besonders sensiblen Datenkategorien, gehört Ihr Datenschutzbeauftragter mit an den Tisch - die datenschutzrechtliche Einzelfallprüfung ersetzt keine IT-Beratung.",
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
        description: "Server, Daten und Anwendungen werden schrittweise verlagert, in der Regel außerhalb der Geschäftszeiten, damit Ihr Betrieb weiterläuft.",
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
          "Nicht jedes System gehört in die Cloud. Typische Kandidaten für den Verbleib im Haus sind Altanwendungen ohne Cloud-Freigabe des Herstellers, Systeme mit sehr großen lokalen Datenmengen, Maschinensteuerungen in der Produktion und alles, was auch bei einem Internetausfall laufen muss. Genau dafür gibt es Hybrid-Modelle.",
      },
      {
        question: "Wie lange dauert eine Migration zu Azure?",
        answer:
          "Einzelne Workloads wie ein Cloud-Backup sind in wenigen Tagen eingerichtet. Eine vollständige Migration einer kleinen bis mittleren Umgebung dauert von der Bestandsaufnahme bis zum Regelbetrieb in der Regel mehrere Wochen bis wenige Monate, abhängig von Datenmenge, Anwendungen und Testaufwand.",
      },
    ],
    partnerKeys: ["microsoft"],
    relatedSlugs: ["microsoft-365", "private-cloud", "it-beratung"],
  },

  // 13 - Mac IT-Service
  {
    slug: "mac-it-service",
    order: 13,
    navLabel: "Mac IT-Service",
    icon: "workspace",
    title: "Mac IT-Service für Unternehmen: Ihr Apple-Systemhaus",
    tagline: "Betreuung, Verwaltung und Support für Macs im Unternehmen - aus einer Hand.",
    cardDescription:
      "Wir betreuen Apple-Arbeitsplätze im Unternehmen: Einrichtung, Geräteverwaltung per MDM, Support und Sicherheit - auch in gemischten Umgebungen mit Windows.",
    metaTitle: "Mac IT-Service & Apple Support für Unternehmen | Potsdam",
    metaDescription:
      "Mac IT-Service vom Systemhaus - Zero-Touch-Rollout, MDM mit Mosyle, Support neben Windows. Denn ein Mac im Unternehmen ist kein Einzelgerät. Potsdam & Berlin.",
    schemaServiceType: "Apple-Gerätebetreuung, MDM und Support für Unternehmen",
    schemaDescription:
      "Mac IT-Service vom Systemhaus: Zero-Touch-Rollout über Apple Business Manager, zentrale Verwaltung per Mosyle MDM, Integration in Windows- und Microsoft-365-Umgebungen sowie laufender Support.",
    ctaText:
      "Ob Ihre Macs schon ein MDM brauchen oder erst eine saubere Bestandsaufnahme, klärt sich am schnellsten im Gespräch. Vereinbaren Sie ein unverbindliches Erstgespräch - wir schauen uns Ihre Apple-Geräte und die Umgebung drumherum ehrlich an.",
    image: `${IMG}/2025/03/datadiorama-8009.jpg`,
    image2: `${IMG}/2025/03/datadiorama-8126.jpg`,
    intro:
      "Ein Mac IT-Service ist die laufende Betreuung von Apple-Geräten im Unternehmen durch ein Systemhaus: Einrichtung, zentrale Verwaltung per MDM, Sicherheit und Support aus einer Hand. datadiorama betreut als IT-Systemhaus aus Potsdam Macs, iPhones und iPads genauso selbstverständlich wie Windows-Umgebungen - viele unserer Kunden fahren beides parallel. Der Grundsatz dahinter: Ein Mac im Unternehmen ist kein Einzelgerät, sondern Teil Ihrer IT.",
    keyTakeaways: [
      "Mac-Betreuung vom Systemhaus: Einrichtung, Geräteverwaltung (MDM), Support und Sicherheit aus einer Hand - auch neben Windows.",
      "Zero-Touch-Rollout: Neue Macs konfigurieren sich beim ersten Einschalten selbst, über Apple Business Manager und MDM (Quelle: Apple Platform Deployment, Apple Support-Dokumentation).",
      "Zentrale Verwaltung mit Mosyle: Updates, Festplattenverschlüsselung (FileVault) und Software auf allen Geräten, ohne jeden Mac einzeln anzufassen.",
      "Faustregel aus unserer Praxis: Ab etwa fünf bis zehn Macs kippt die Selbstverwaltung - dann braucht es ein MDM.",
      "Verlorene Geräte lassen sich aus der Ferne sperren oder löschen; Compliance-Nachweise für Versicherung und Audit inklusive.",
      "Persönlich vor Ort in Potsdam und Berlin oder per Fernwartung, mit festen Ansprechpartnern statt Hotline.",
    ],
    facts: [
      { label: "Leistung", value: "Mac-Betreuung, MDM & Apple Support" },
      { label: "Geräte", value: "Mac, MacBook, iPhone, iPad" },
      { label: "Verwaltung", value: "Mosyle MDM & Apple Business Manager" },
      { label: "Region", value: "Potsdam, Berlin & St. Gallen" },
      { label: "Modell", value: "Laufende Betreuung oder Projekt" },
    ],
    sections: [
      {
        heading: "Was umfasst ein Mac IT-Service für Unternehmen?",
        body:
          "Ein Mac IT-Service deckt den gesamten Lebenszyklus eines Apple-Geräts im Unternehmen ab: Beschaffung und Einrichtung neuer Geräte, zentrale Verwaltung per Mobile Device Management (MDM), automatische Updates und Sicherheitsrichtlinien, die Anbindung an Ihre bestehende Infrastruktur und den Support, wenn etwas klemmt. Vergleichbar mit klassischer IT-Betreuung, nur mit Apple-Kompetenz.\n\nDer Unterschied zum Apple Store oder zur Apple-Hotline: Wir kennen Ihre Umgebung. Ein Mac im Unternehmen ist kein Einzelgerät, sondern Teil eines Netzwerks mit Dateiablagen, Druckern, E-Mail, Microsoft 365 oder Google Workspace und Sicherheitsanforderungen. Genau diese Integration ist unser Alltag als Systemhaus - seit 2013.",
      },
      {
        heading: "Ab wann lohnt sich professionelle Mac-Betreuung?",
        body:
          "In vielen Unternehmen fangen Macs klein an: Die Geschäftsführung arbeitet mit einem MacBook, das Marketing braucht Apple-Geräte für Grafik und Video, neue Mitarbeitende bringen den Wunsch nach dem gewohnten Gerät mit. Solange es zwei oder drei Geräte sind, verwaltet die jeder selbst. Ab etwa fünf bis zehn Macs kippt das: Niemand weiß, welche Geräte auf welchem Stand sind, Updates bleiben liegen, und beim Ausscheiden eines Mitarbeiters ist unklar, wie man an Gerät und Daten kommt.\n\nDer eigentliche Auslöser ist allerdings selten die Stückzahl, sondern ein Ereignis. Ein MacBook geht verloren, und niemand kann es aus der Ferne sperren. Die Cyber-Versicherung fragt nach Festplattenverschlüsselung und Update-Nachweisen. Ein neuer Kollege soll am ersten Tag arbeitsfähig sein, nicht nach drei Tagen Handarbeit. Oder der bisherige IT-Dienstleister kennt nur Windows und behandelt Macs als Fremdkörper. Kommt Ihnen eines davon bekannt vor? Dann ist der Zeitpunkt jetzt.",
      },
      {
        heading: "Zero-Touch-Rollout mit Apple Business Manager und Mosyle",
        body:
          "Kern jeder professionell verwalteten Mac-Umgebung ist ein Mobile Device Management. Wir setzen dafür auf Mosyle, eine auf Apple spezialisierte MDM-Plattform, in Kombination mit dem Apple Business Manager - Apples kostenlosem Unternehmensportal, das gekaufte Geräte verbindlich Ihrer Organisation zuordnet. Das Zusammenspiel ermöglicht den Zero-Touch-Rollout: Ein neu gekaufter Mac wird beim ersten Einschalten automatisch Ihrem Unternehmen zugewiesen und bezieht Konfiguration, Sicherheitsrichtlinien und Programme selbst, ohne dass ihn ein Administrator je angefasst hat (Quelle: Apple Platform Deployment).\n\nIm laufenden Betrieb steuert das MDM Updates für macOS und Anwendungen, erzwingt die Festplattenverschlüsselung FileVault, verteilt WLAN- und VPN-Profile und kann verlorene Geräte aus der Ferne sperren oder löschen. Für Sie heißt das: Jeder Mac ist nachweisbar auf einem definierten, dokumentierten Stand - ob er im Büro in Potsdam steht oder im Home-Office. Warum Mosyle? Die Plattform deckt Mac, iPhone und iPad ab, ist schnell eingeführt und liegt bei den Lizenzkosten pro Gerät nach unserer Erfahrung unter vielen Enterprise-Alternativen. Es gibt [Alternativen wie Jamf oder Microsoft Intune](/beitraege/mdm-vergleich-jamf-kandji-mosyle); welche passt, hängt an Gerätemix und vorhandenen Lizenzen.",
      },
      {
        heading: "Selbst verwalten, Apple-Spezialist oder Systemhaus: Was passt wann?",
        body: "",
        table: {
          headers: [
            "Kriterium",
            "Selbstverwaltung durch Mitarbeitende",
            "Reiner Apple-Dienstleister",
            "Windows-Systemhaus ohne Apple-Fokus",
            "Systemhaus mit Mac- und Windows-Kompetenz",
          ],
          rows: [
            ["Geeignet bis", "ca. 3-5 Geräte", "reine Apple-Umgebungen", "reine Windows-Umgebungen", "gemischte Umgebungen jeder Größe"],
            ["Sicherheits-Nachweise (Verschlüsselung, Updates)", "keine", "ja", "für Macs meist lückenhaft", "ja, für beide Welten"],
            ["Zero-Touch-Rollout", "nein", "ja", "selten", "ja"],
            ["Integration Microsoft 365 / Netzwerk / Drucker", "Handarbeit je Gerät", "oft nur Apple-seitig", "Windows-seitig", "durchgängig"],
            ["Anzahl Ansprechpartner", "intern", "zwei (plus Windows-Partner)", "einer, aber mit Mac-Lücke", "einer"],
            ["Ehrliche Grenze", "ab dem ersten verlorenen Gerät riskant", "passt nicht, wenn Windows-Hälfte existiert", "Macs bleiben Fremdkörper", "bei sehr großen Enterprise-Flotten ggf. dedizierte Apple-Teams sinnvoll"],
          ],
        },
        bodyAfterTable:
          "Die Tabelle zeigt den Normalfall im Mittelstand: Windows-Arbeitsplätze in Verwaltung und Buchhaltung, Macs in Geschäftsführung, Marketing oder Entwicklung, dazu Microsoft 365 oder Google Workspace als gemeinsame Plattform. Genau für diese Realität sind wir aufgestellt - Sie brauchen keinen zweiten Dienstleister nur für die Macs.",
      },
      {
        heading: "Was kostet Mac-Betreuung?",
        body:
          "Die Kosten bestehen üblicherweise aus zwei Blöcken: der MDM-Lizenz pro Gerät und Monat sowie der Betreuung selbst, als monatliche Pauschale pro Gerät oder Arbeitsplatz oder als Projektaufwand für die Ersteinrichtung. Konkrete Beträge hängen an Geräteanzahl, gewünschtem Leistungsumfang und dem Zustand der bestehenden Umgebung. Ein pauschaler Preis vor der Bestandsaufnahme wäre geraten, nicht kalkuliert - deshalb nennen wir ihn erst danach. Die Einrichtung von Apple Business Manager und MDM fällt nur einmal an; davon profitieren auch kleine Flotten früh.",
      },
    ],
    benefits: [
      {
        title: "Apple-Kompetenz vom Systemhaus",
        description:
          "Macs sind bei uns kein Sonderfall, sondern Alltag - inklusive Integration in Windows- und Cloud-Umgebungen.",
        icon: "workspace",
      },
      {
        title: "Sicher und nachweisbar verwaltet",
        description:
          "Verschlüsselung, Updates und Richtlinien zentral per MDM - mit Nachweisen für Compliance und Versicherung.",
        icon: "shield",
      },
      {
        title: "Neue Geräte ohne Handarbeit",
        description:
          "Zero-Touch-Rollout: Der Mac richtet sich beim ersten Einschalten selbst ein - fertig konfiguriert am ersten Arbeitstag.",
        icon: "rocket",
      },
    ],
    process: [
      {
        title: "Erstgespräch und Bestandsaufnahme",
        description:
          "Wir erfassen Ihre Apple-Geräte, die bestehende Infrastruktur und klären Ziele: Verwaltung, Sicherheit, Support.",
      },
      {
        title: "Apple Business Manager und MDM einrichten",
        description:
          "Wir registrieren Ihr Unternehmen im Apple Business Manager, verbinden ihn mit Mosyle und definieren Ihre Richtlinien.",
      },
      {
        title: "Rollout und Migration",
        description:
          "Neue Geräte kommen per Zero-Touch ins System; bestehende Macs nehmen wir strukturiert in die Verwaltung auf - je nach Ausgangslage per Neuinstallation mit Datenübernahme oder nachträglicher Registrierung.",
      },
      {
        title: "Laufende Betreuung",
        description:
          "Updates, Monitoring und Support im Alltag, per Fernwartung oder vor Ort in Potsdam und Berlin, mit festen Ansprechpartnern.",
      },
    ],
    faq: [
      {
        question: "Betreut ihr auch gemischte Umgebungen mit Macs und Windows-PCs?",
        answer:
          "Ja - das ist sogar der häufigste Fall. Als Systemhaus betreuen wir Windows und macOS gleichwertig und sorgen dafür, dass beide Welten dieselben Dateiablagen, E-Mail-Konten und Drucker nutzen. Sie brauchen keinen zweiten Dienstleister nur für die Macs.",
      },
      {
        question: "Ab wie vielen Macs lohnt sich ein MDM?",
        answer:
          "Als Faustregel: ab etwa fünf Geräten. Der eigentliche Auslöser ist aber selten die Stückzahl, sondern der Anlass - ein verlorenes MacBook, eine Compliance-Anforderung oder ein neuer Mitarbeiter, der am ersten Tag arbeitsfähig sein soll. Da die Einrichtung über den Apple Business Manager einmalig ist, profitieren auch kleine Flotten früh davon.",
      },
      {
        question: "Welches MDM setzt ihr für Macs ein?",
        answer:
          "Wir arbeiten mit Mosyle, einer auf Apple spezialisierten MDM-Plattform. Sie deckt Mac, iPhone und iPad ab, ist schnell eingeführt und liegt bei den Lizenzkosten pro Gerät nach unserer Erfahrung unter vielen Enterprise-Alternativen. Alternativen wie Jamf oder Microsoft Intune können je nach Umgebung ebenfalls passen; das klären wir in der Bestandsaufnahme.",
      },
      {
        question: "Was ist der Apple Business Manager - und brauchen wir den?",
        answer:
          "Der Apple Business Manager ist Apples kostenloses Portal für Unternehmen. Er ordnet gekaufte Geräte verbindlich Ihrer Organisation zu, ermöglicht in Verbindung mit einem MDM den automatischen Rollout und verwaltet Volumenlizenzen für Apps. Für eine professionell verwaltete Apple-Umgebung ist er die Grundlage - wir richten ihn für Sie ein.",
      },
      {
        question: "Funktionieren Microsoft 365 und Teams auf dem Mac?",
        answer:
          "Ja. Word, Excel, PowerPoint, Outlook, Teams und OneDrive gibt es als vollwertige Mac-Anwendungen, die wir per MDM automatisch installieren und aktuell halten. Auch die Anbindung an Exchange Online, SharePoint und die Telefonanlage ist auf dem Mac Standard - richtig eingerichtet merkt niemand einen Unterschied.",
      },
      {
        question: "Übernehmt ihr auch bestehende, bisher unverwaltete Macs?",
        answer:
          "Ja. Bestehende Geräte nehmen wir strukturiert in die Verwaltung auf - je nach Ausgangslage per Neuinstallation mit Datenübernahme oder durch nachträgliche Registrierung im MDM. Dabei bringen wir Verschlüsselung, Updates und Sicherheitsrichtlinien auf den definierten Stand.",
      },
    ],
    relatedSlugs: ["it-beratung", "workspaces", "home-office"],
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
