import type { ContentSection, FaqItem } from "@/lib/types";

export interface PostContent {
  intro: string;
  keyTakeaways: string[];
  sections: ContentSection[];
  faq: FaqItem[];
}

/**
 * Ausführliche Beitragsinhalte je Slug (redaktionell erstellt & faktengeprüft).
 * Wird in posts.ts mit den Metadaten zusammengeführt.
 */
export const POST_CONTENT: Record<string, PostContent> = {
  // Übertragen von datadiorama.com/die-3-stufen-des-backup-zen (29.06.2026).
  "die-3-stufen-des-backup-zen": {
    "intro": "„Kein Backup, kein Mitleid“ – solche Sprüche kennt jeder, und im Notfall helfen sie niemandem. Schlimmer noch: Sie sorgen eher dafür, dass Mitarbeitende die Datensicherung selbst in die Hand nehmen und damit unter Umständen mehr Schaden als Nutzen anrichten. Richtig ist: Unternehmen brauchen ein Backup-Konzept – und die Mitarbeitenden sollten davon wissen. Wie das aussehen kann, zeigen die drei Stufen des Backup-Zen, die wir in der Regel mit Synology-Systemen umsetzen.",
    "keyTakeaways": [
      "Ein Backup via Mitarbeiter ist keins – unabhängig von der Position oder der Art der Daten.",
      "Grundlage jeder Datensicherung ist ein Backup-Konzept aus Vertrag, Technologie und verständlicher Dokumentation.",
      "Stufe 1: automatische lokale Sicherung auf einem Speicher mit verteilten Festplatten.",
      "Stufe 2: zusätzlich ein unveränderliches Duplikat auf einem zweiten Gerät – idealerweise in einem anderen Gebäudeteil.",
      "Stufe 3: verschlüsselte Kopie im gesicherten EU-Rechenzentrum in Frankfurt am Main."
    ],
    "sections": [
      {
        "heading": "Warum ein Backup via Mitarbeiter keins ist",
        "body": "Ein Beispiel: Herr Hecht arbeitet an einem wichtigen Projekt. Er weiß, nur Dummköpfe machen keine Backups, und er weiß auch: Ein Notebook kann kaputtgehen oder gestohlen werden. Also hat er einen USB-Stick am Schlüsselbund, mit dem er täglich eine Sicherheitskopie macht.\n\nWas wir uns hier fragen: Hat Herr Hecht oder seine Familie den Speicher schon einmal daheim genutzt – und ist das Netzwerk dort sicher, sind die Geräte sauber? Wird Herr Hecht den Stick abgeben, wenn er den Job wechselt? Sind wir überhaupt berechtigt, die Daten in private Hände zu geben? Denkt Herr Hecht auch an stressigen Tagen an das Backup? Und so weiter.\n\nDas Fazit ist eindeutig: Ein Backup via Mitarbeiter ist keins. Das gilt unabhängig von der Position oder der Art der Daten."
      },
      {
        "heading": "Die Grundlage: ein Backup-Konzept",
        "body": "Unternehmen müssen ein Backup-Konzept haben – und die Mitarbeitenden sollten davon wissen. Wesentliche Bestandteile eines Backup-Konzeptes sind:",
        "bullets": [
          "Ein Vertrag, der die Rechtskonformität sicherstellt: Was wird wo und wie lange gespeichert, wer ist dafür zuständig und wer hat Zugriff?",
          "Technologie, die vollautomatisch sichert, was gesichert werden muss – und warnt, wenn das nicht klappt.",
          "Eine verständliche Dokumentation zur eingesetzten Technologie, zu den physischen Speicherorten der Daten, den notwendigen Zugangsdaten und vor allem zum Prozess der Wiederherstellung."
        ]
      },
      {
        "heading": "Stufe 1: Automatische lokale Sicherung",
        "body": "Egal, wie Sie die Datensicherung angehen: Das Backup-Konzept ist stets die Grundlage. Die folgenden Ausbaustufen betreffen vor allem den zweiten Punkt – die Technologie.\n\nAuf der ersten Stufe werden alle wichtigen Dateien, Datenbanken, virtuellen Maschinen, E-Mails usw. mindestens täglich automatisch auf einen Speicher mit verteilten Festplatten gesichert. Wir realisieren das in der Regel mit einem oder mehreren Synology-NAS-Systemen, da die Technik sehr hohe Qualität und Zuverlässigkeit zu vernünftigen Preisen bietet."
      },
      {
        "heading": "Stufe 2: Lokale Sicherung mit unveränderlichem Duplikat",
        "body": "Wie auf Stufe 1 wird alles automatisch gesichert – nur mit dem Unterschied, dass es von jedem Datenpunkt eine unveränderliche Kopie gibt. Eine Änderung an den Originaldaten ist nicht möglich; jeder Schreibvorgang erzeugt eine speicheroptimierte Kopie.\n\nDa auf dem ersten NAS üblicherweise diverse Dienste genutzt werden, nehmen wir für diesen Zweck gern ein oder mehrere weitere Geräte, die auf dem Gelände auch in einem anderen Gebäude oder Gebäudeteil untergebracht sind – um bei Einbruch oder Havarie die Sicherheit der Daten zu verbessern."
      },
      {
        "heading": "Stufe 3: Kopie im gesicherten EU-Rechenzentrum",
        "body": "Hier nehmen wir die bestehende Sicherung und kopieren sie über einen verschlüsselten Kanal in ein Speicherzentrum von Synology in Frankfurt am Main. Dort wird sie auf einem verschlüsselten Multi-Festplatten-Verbund gespeichert. Dieser steht in einem klimatisierten Raum mit Temperaturfühlern, Brandmeldern, einer vollautomatischen CO2-Löschanlage und einer Rund-um-die-Uhr-Zugangssicherung mit protokollierten Eingangsschleusen und Wachdienst.\n\nWelche Stufe in welcher Ausprägung für Sie richtig ist – und ob alle Ihre Daten oder nur kritische Teile mehrfach gesichert werden müssen –, diskutieren wir gern im Rahmen einer unverbindlichen Beratung."
      }
    ],
    "faq": [
      {
        "question": "Reicht es, wenn Mitarbeitende selbst Backups machen?",
        "answer": "Nein. Ein Backup via Mitarbeiter ist keins – es hängt an einzelnen Personen, privaten Geräten und guten Vorsätzen. Rechtssicher und zuverlässig wird Datensicherung erst durch ein Backup-Konzept mit vollautomatischer Technologie."
      },
      {
        "question": "Was gehört in ein Backup-Konzept?",
        "answer": "Drei Bestandteile: ein Vertrag, der die Rechtskonformität sicherstellt (was wird wo, wie lange gespeichert, wer hat Zugriff), eine Technologie, die vollautomatisch sichert und bei Problemen warnt, sowie eine verständliche Dokumentation – insbesondere zum Prozess der Wiederherstellung."
      },
      {
        "question": "Was bedeutet ein unveränderliches Backup?",
        "answer": "Von jedem Datenpunkt existiert eine Kopie, die nachträglich nicht verändert werden kann. Jeder Schreibvorgang erzeugt eine neue, speicheroptimierte Kopie. Das schützt unter anderem vor Ransomware und versehentlichem Löschen."
      }
    ]
  },
  // Originaltext vom Kunden (Juli 2026), Slug entspricht datadiorama.com/proxmox.
  "proxmox": {
    "intro": "Viele Unternehmen betreiben ihre Infrastruktur seit Jahren auf Windows Servern. Doch steigende Lizenzkosten, zunehmende Abhängigkeiten von Microsoft-Diensten und immer komplexere Lizenzmodelle führen dazu, dass viele IT-Verantwortliche nach Alternativen suchen. Eine der interessantesten Lösungen ist die Migration bestehender Windows-Server-Umgebungen auf eine moderne Virtualisierungsplattform wie Proxmox VE (Virtual Environment) – für mehr Freiheit und weniger Kosten.",
    "keyTakeaways": [
      "Proxmox VE bietet Enterprise-Funktionen wie Hochverfügbarkeit, Live-Migration und Cluster-Betrieb – ohne Lizenzkosten pro CPU oder VM.",
      "Der Umstieg senkt laufende Kosten und reduziert die Herstellerabhängigkeit von Microsoft (Vendor Lock-in).",
      "Daten, Backups und Anwendungen bleiben im eigenen Rechenzentrum oder bei einem selbst gewählten Hosting-Anbieter – gut für Datenschutz und Compliance.",
      "Die Migration erfolgt sanft: Windows-Server laufen zunächst als virtuelle Maschinen weiter (P2V) und werden Schritt für Schritt durch Open-Source-Dienste ersetzt."
    ],
    "sections": [
      {
        "heading": "Warum Proxmox?",
        "body": "Proxmox VE ist eine Open-Source-Virtualisierungslösung, die KVM-Virtualisierung und Container-Technologie (LXC) kombiniert. Gerade für kleine und mittelständische Unternehmen stellt Proxmox eine attraktive Alternative zu Hyper-V oder VMware dar – mit vielen Funktionen, die sonst nur in teuren Enterprise-Produkten verfügbar sind:",
        "bullets": [
          "Zentrale Verwaltung über eine Weboberfläche",
          "Hochverfügbarkeit (HA)",
          "Live-Migration von virtuellen Maschinen",
          "Backup- und Restore-Funktionen",
          "Cluster-Betrieb",
          "Integrierte Firewall",
          "Keine Lizenzkosten pro CPU oder VM"
        ]
      },
      {
        "heading": "1. Deutlich geringere Lizenzkosten",
        "body": "Warum sich von Microsoft lösen? Der erste Grund sind die Kosten: Durch den Umstieg auf Open-Source-Lösungen können Unternehmen ihre laufenden IT-Kosten erheblich reduzieren. Microsoft erhöht regelmäßig die Kosten für:",
        "bullets": [
          "Windows Server",
          "CALs (Client Access Licenses) – Benutzer-Lizenzen",
          "Remote Desktop Services – extra Lizenz für die Remote-Nutzung von Windows",
          "SQL Server",
          "Microsoft 365"
        ]
      },
      {
        "heading": "2. Mehr Unabhängigkeit",
        "body": "Wer vollständig auf Microsoft setzt, begibt sich in eine starke Herstellerabhängigkeit (Vendor Lock-in). Mit Proxmox und Open-Source-Technologien behält das Unternehmen die Kontrolle über seine Infrastruktur. Direkte Auswirkungen auf die eigene IT können dagegen Änderungen haben bei:",
        "bullets": [
          "Lizenzmodellen",
          "Cloud-Strategien",
          "Produktlebenszyklen",
          "Datenschutzrichtlinien"
        ]
      },
      {
        "heading": "3. Datenschutz und Datensouveränität",
        "body": "Viele Unternehmen möchten ihre Daten nicht in Microsofts Cloud-Diensten speichern. Mit einer eigenen Proxmox-Umgebung bleiben Daten, Backups, Benutzerinformationen und Anwendungen im eigenen Rechenzentrum oder bei einem selbst gewählten Hosting-Anbieter.\n\nDas erleichtert häufig auch die Einhaltung von Datenschutzanforderungen und Compliance-Vorgaben."
      },
      {
        "heading": "4. Rechtssicherheit",
        "body": "In vielen Fällen ist Unternehmen nicht klar, welche Microsoft-Lizenzen sie eigentlich bräuchten, um ihre Lösungen rechtssicher zu betreiben. Für jeden Server im Netzwerk wird eine Vielzahl von Lizenzen benötigt, die sich nach der Anzahl der Prozessoren, der Kerne und der Benutzer sowie der Art der Nutzung und der genutzten Programme richtet.\n\nEine solche Lizenzstruktur ist bereits bei der Einrichtung komplex – nach einigen Jahren mit Personalwachstum und Anpassungen des Aufbaus hat fast jedes Unternehmen Lizenz-Deckungslücken oder zu hohe Lizenzkosten, im schlimmsten Fall beides. Auch korrekt erworbene Lizenzen müssen sauber verwaltet werden, um im Zweifel präsentiert werden zu können. Das sind weitere verdeckte Kosten, die bei Open-Source-Lösungen gar nicht erst entstehen."
      },
      {
        "heading": "5. Zukunftssichere Infrastruktur",
        "body": "Moderne Linux-Server und Open-Source-Anwendungen bieten heute für viele Anwendungsfälle leistungsfähige und häufig kostengünstigere Alternativen. Einzelne Microsoft-Komponenten lassen sich Schritt für Schritt ablösen:",
        "bullets": [
          "Hyper-V → Proxmox VE",
          "Active Directory → Samba AD oder FreeIPA",
          "SQL Server → PostgreSQL",
          "Exchange → Kopano, Zimbra oder Mailcow",
          "IIS → Nginx oder Apache",
          "Fileserver → Samba"
        ]
      },
      {
        "heading": "6. Höhere Flexibilität",
        "body": "Die IT-Abteilung kann Systeme exakt an die eigenen Anforderungen anpassen. Open-Source-Lösungen ermöglichen:",
        "bullets": [
          "Individuelle Anpassungen",
          "Automatisierung per Skript",
          "Offene Schnittstellen",
          "Keine künstlichen Produktbeschränkungen"
        ]
      },
      {
        "heading": "Wie erfolgt die Migration eines Windows Servers zu Proxmox?",
        "body": "Der Umstieg muss nicht bedeuten, dass Windows sofort abgeschafft wird. Ein typisches Vorgehen:",
        "bullets": [
          "Schritt 1 – Bestehende Windows-Server virtualisieren: Physische Windows-Server werden als virtuelle Maschinen auf Proxmox übernommen (P2V-Migration). Die Benutzer können die Windows-Server normal weiternutzen und merken erstmal keinen Unterschied.",
          "Schritt 2 – Hardware konsolidieren: Mehrere Server können auf einem leistungsfähigen Proxmox-Cluster betrieben werden, gleichzeitig steigt die Backup-Sicherheit.",
          "Schritt 3 – Einzelne Dienste ersetzen: Nach und nach werden Microsoft-Dienste durch Open-Source-Alternativen ersetzt.",
          "Schritt 4 – Windows nur dort einsetzen, wo es wirklich benötigt wird: Spezialsoftware kann weiterhin auf Windows laufen, während Standarddienste auf Linux-Systeme migriert werden."
        ]
      },
      {
        "heading": "Fazit",
        "body": "Die Migration von Windows (Hyper-V) oder VMware auf Proxmox ist für viele Unternehmen ein sinnvoller Schritt, um Kosten zu senken, die Abhängigkeit von amerikanischen Konzernen zu reduzieren und die Kontrolle über die eigene IT-Infrastruktur zurückzugewinnen.\n\nDabei muss der Wechsel nicht radikal erfolgen. Proxmox ermöglicht einen sanften Übergang, bei dem bestehende Windows-Systeme zunächst weiterbetrieben und später schrittweise durch offene Technologien ersetzt werden können.\n\nWer langfristig auf Flexibilität, Transparenz und Datensouveränität setzt, findet in Proxmox eine leistungsfähige und wirtschaftliche Alternative zu klassischen Microsoft-Umgebungen."
      }
    ],
    "faq": [
      {
        "question": "Müssen wir Windows sofort abschaffen, wenn wir zu Proxmox wechseln?",
        "answer": "Nein. Bestehende Windows-Server werden zunächst als virtuelle Maschinen auf Proxmox übernommen (P2V-Migration) und laufen normal weiter – die Benutzer merken erstmal keinen Unterschied. Erst danach werden einzelne Dienste schrittweise durch Open-Source-Alternativen ersetzt."
      },
      {
        "question": "Was kostet Proxmox?",
        "answer": "Proxmox VE ist Open Source und verursacht keine Lizenzkosten pro CPU oder VM. Damit entfallen auch komplexe Lizenzstrukturen wie CALs oder Remote-Desktop-Lizenzen – und die verdeckten Kosten für deren Verwaltung."
      },
      {
        "question": "Welche Open-Source-Alternativen gibt es zu Microsoft-Diensten?",
        "answer": "Typische Ablösungen sind Proxmox VE statt Hyper-V, Samba AD oder FreeIPA statt Active Directory, PostgreSQL statt SQL Server, Kopano, Zimbra oder Mailcow statt Exchange, Nginx oder Apache statt IIS sowie Samba als Fileserver."
      },
      {
        "question": "Kann Proxmox Hyper-V oder VMware ersetzen?",
        "answer": "Ja, gerade für kleine und mittelständische Unternehmen: Proxmox VE bietet zentrale Verwaltung, Hochverfügbarkeit, Live-Migration, Cluster-Betrieb und Backup-Funktionen – Funktionen, die sonst nur in teuren Enterprise-Produkten verfügbar sind."
      }
    ]
  },
  // Übertragen von datadiorama.com/it-nach-europa-holen (28.05.2026).
  "it-nach-europa-holen": {
    "intro": "IT-Souveränität hat viele Dimensionen – und viele lösbare Probleme. Dieser Beitrag richtet sich an kleine und mittelständische Unternehmen sowie öffentliche und gemeinnützige Institutionen mit bis zu 500 Mitarbeitenden. Er gibt einen Überblick, auf welchen Ebenen Organisationen ihre Daten und IT-Prozesse stärker unter eigene Kontrolle bringen können: einerseits, um rechtssicher im Sinne des Datenschutzes und der gebotenen Sorgfalt zu operieren, andererseits, um im Falle einer internationalen Krise handlungsfähig zu bleiben.",
    "keyTakeaways": [
      "Bei Hardware und öffentlicher Infrastruktur haben einzelne Unternehmen kaum Einfluss – bei Datenspeicherung, Kommunikation und Software dagegen sehr wohl.",
      "Für die Cloudspeicher der großen US-Anbieter gibt es zahlreiche europäische Alternativen, die oft auch Kostenvorteile bieten.",
      "E-Mail und Team-Chat lassen sich ohne amerikanische Anbieter abwickeln – beim Umstieg auf MAPI-Unterstützung achten, wenn Outlook bleiben soll.",
      "Bei Office-Software und Betriebssystemen entscheiden Nutzerakzeptanz und kritische Anwendungen über den richtigen Weg – Schulungen sind eine wichtige Komponente."
    ],
    "sections": [
      {
        "heading": "Hintergrund",
        "body": "Die Unterbrechung von Lieferketten hat Europa schmerzhaft bewusst gemacht, wie stark es von seinen industriellen Partnern auf anderen Kontinenten abhängig ist. Ereignisse wie die Corona-Pandemie oder die Blockade des Suezkanals durch die Ever Given ließen europäische Apotheken leerlaufen, Bänder stillstehen und Preise für IT-Bauteile und -Produkte heftig und schnell steigen. Diese Beispiele höherer Gewalt zeichnen sich jedoch dadurch aus, dass alle Betroffenen an einem Strang ziehen, um die Folgen möglichst gering zu halten. Spätestens seit der US-Präsident öffentlich darüber räsoniert, die NATO aufzulösen und Grönland zu einem US-Bundesstaat zu machen, müssen Unternehmen sich aber auch fragen: Was wäre, wenn dies einmal nicht der Fall ist? Der CLOUD Act – ein Gesetz, das US-Unternehmen verpflichtet, der US-Regierung die Daten ihrer Kunden zur Verfügung zu stellen, auch wenn diese außerhalb der USA gehostet sind – wäre dann vielleicht nur ein Vorgeschmack auf das, was möglich wäre, falls es einen Konflikt gäbe. Zum jetzigen Zeitpunkt kann man in aller Nüchternheit sagen: Die europäische Wirtschaft könnte von einem Tag auf den anderen praktisch handlungsunfähig gemacht werden, wenn die amerikanischen Software-Giganten ihre Dienste in Europa einstellen.\n\nAber auch ohne eine Eskalation wächst die Sorge um die Sicherheit der Daten vor unbefugten Zugriffen in einer zunehmend unter Druck stehenden internationalen Rechtsordnung."
      },
      {
        "heading": "Betrachtungsebenen und Eingrenzung",
        "body": "Die Teile der IT, auf die ein Unternehmen keinen Einfluss nehmen kann, lassen wir außer Acht und nennen sie nur der Vollständigkeit halber: Die IT-Hardware wird derzeit nicht in nennenswertem Umfang in Europa hergestellt, sodass es praktisch keine Optionen gibt, hiesige Produkte einzusetzen. Und auf die öffentliche Infrastruktur haben einzelne Kunden nur marginalen Einfluss – hier hilft bestenfalls eine redundante Anbindung.\n\nIm Entscheidungsbereich eines Unternehmens liegen dagegen drei Elemente: die Speicherung der Daten, die Kommunikationsmittel und die eingesetzte Software. Diese drei sehen wir uns näher an."
      },
      {
        "heading": "Datenspeicherung: Cloudspeicher",
        "body": "Bei der Datenspeicherung geht es um die dauerhafte Speicherung von Dateien, Datenbanken und Kommunikationsarchiven auf an Netzwerke angeschlossenen Medien – also Cloudspeicher, Dateiserver und NAS-Geräte.\n\nCloudspeicher sind in der Regel von einem Anbieter gemietete Ressourcen. Der Speicherplatz ist nicht durch ein Gerät beschränkt, sondern durch den Vertrag; der physische Speicherort der Daten ist für den Nutzer zunächst nicht relevant und in der Regel auch nicht bekannt. Der Anbieter verteilt die Daten so, dass sie bei defekter Hardware oder lokalen Stromausfällen sicher sind – im Extremfall liegt eine Datei-Kopie auf fünf Kontinenten vor. Das ist einerseits ein Sicherheitsvorteil, kann aber im Hinblick auf Compliance und die Absicherung gegen Zugriffe ausländischer staatlicher Akteure zum Problem werden.\n\nDie großen US-Anbieter Microsoft, Amazon und Google sind mit Azure, AWS und Google Cloud die mit Abstand wichtigsten Akteure weltweit; zusammen machen sie etwa 64 % des weltweiten Marktes aus. Die gute Nachricht: Es gibt zahlreiche europäische Alternativen, die häufig auch Kostenvorteile bieten, da sie oft keine Lizenzierung pro Nutzer erfordern. Wichtig ist, von Anfang an einen Plan zu haben, der lokale Kopien oder vollständige Downloads sicherstellt, um Lock-in-Effekte zu vermeiden.",
        "bullets": [
          "Vorteil: Kein Hardwaremanagement erforderlich",
          "Vorteil: Backups inklusive",
          "Vorteil: Geringe Supportanforderungen",
          "Vorteil: Sehr einfache Umsetzung ortsunabhängiger Arbeit",
          "Vorteil: Keine Anlagenverwaltung nötig – direkte Verbuchung der laufenden Kosten",
          "Vorteil: Skaliert in der Regel stufenlos und einfach",
          "Nachteil: Starke Anbieterbindung, hohe Migrationsschwelle",
          "Nachteil: Dauerhafte und steigende laufende Kosten",
          "Nachteil: Synchronisierungsvorgänge",
          "Nachteil: Ohne Internet ist die Arbeit schwierig",
          "Nachteil: Geringe Kontrolle über den physischen Speicherort der Daten",
          "Nachteil: Insolvenzen, Verkauf oder politische Konflikte können existenzbedrohend werden",
          "Nachteil: Keine Kontrolle bei Änderungen der Funktionsweise von Anbieterseite"
        ]
      },
      {
        "heading": "Datenspeicherung: Dateiserver",
        "body": "Dateiserver können sowohl im lokalen Netzwerk als auch in einem angemieteten Platz in einem Rechenzentrum stehen. Sie haben den Vorteil, dass sich der Großteil der Ausgaben auf die Anschaffung konzentriert – was von Vorteil sein kann, wenn die Organisation von Investitionsprogrammen profitiert. Die Verantwortung für die Speichermedien verlagert sich auf den Betreiber. Da die Verwendung von macOS oder Windows bei einem Dateiserver keine Vorteile bietet, kann hier softwareseitig voll auf europäische Lösungen gesetzt werden. Bei der Hardware ist vor allem die Ausfallsicherheit relevant: Festplatten und Netzteile sind redundant auszulegen, sodass im Betrieb getauscht werden kann.\n\nDateiserver können auch auf virtuellen Maschinen liegen, was hohe Flexibilität bei Skalierung und Backups bietet. Stehen sie in den eigenen Räumen, sind die physische Sicherung gegen unbefugte Zugriffe und eine unterbrechungsfreie Stromversorgung sicherzustellen. Für Zugriffe von außerhalb des eigenen Netzwerks ist die Einrichtung von VPN-Verbindungen erforderlich.",
        "bullets": [
          "Vorteil: Hoher Grad an Kontrolle über Hard- und Software",
          "Vorteil: Hohe Flexibilität in Auslegung und Sicherung",
          "Vorteil: Geringe Latenz bei Arbeit im lokalen Netz",
          "Vorteil: Konzentration der Gesamtkosten auf den Investitionszeitpunkt",
          "Vorteil: Kontinuierliches Arbeiten auch bei Internetausfall",
          "Nachteil: Vergleichsweise hohe Supportanforderungen",
          "Nachteil: Aktualität der Software und Gesundheit der Hardware sind selbst sicherzustellen",
          "Nachteil: Fernzugriffe müssen extra eingerichtet werden (VPN)",
          "Nachteil: Geo-Redundanz ist nur durch doppelte Anschaffung zu erreichen",
          "Nachteil: Alle 5–8 Jahre ist ein Austausch erforderlich"
        ]
      },
      {
        "heading": "Datenspeicherung: NAS-Geräte",
        "body": "NAS-Geräte sind im Wesentlichen Computer, deren Hard- und Software darauf spezialisiert ist, als Dateiserver in einem lokalen Netzwerk zu dienen. Vieles, was über Dateiserver gesagt wurde, gilt daher auch für NAS-Geräte. Sie bieten den Vorteil, dass die Ersteinrichtung vergleichsweise einfach und preiswert ist und umfangreiche Software für Backup und Wiederherstellung bereits mitgeliefert wird.\n\nNachteilig ist, dass die für den professionellen Einsatz geeigneten Anbieter (Synology, QNAP) beide in Taiwan ansässig sind. Da sich Taiwan in einem diplomatischen Dauerkonflikt mit China befindet, sind Szenarien denkbar, in denen es zu Ausfällen bei Software-Aktualisierungen oder der Lieferung von Ersatzteilen kommt.",
        "bullets": [
          "Vorteil: Hoher Grad an Kontrolle über den Standort der Daten",
          "Vorteil: Geringe Latenz bei Arbeit im lokalen Netz",
          "Vorteil: Konzentration der Gesamtkosten auf den Investitionszeitpunkt",
          "Vorteil: Kontinuierliches Arbeiten auch bei Internetausfall",
          "Vorteil: Vorgeplante Backup- und Restore-Prozesse",
          "Vorteil: Geringer Einrichtungsaufwand",
          "Nachteil: Aktualität der Software und Gesundheit der Hardware sind selbst sicherzustellen",
          "Nachteil: Fernzugriffe müssen extra eingerichtet werden (VPN)",
          "Nachteil: Geo-Redundanz ist nur durch doppelte Anschaffung zu erreichen",
          "Nachteil: Einbruch, Brand etc. können zu Datenverlust führen",
          "Nachteil: Alle 5–8 Jahre ist ein Austausch erforderlich"
        ]
      },
      {
        "heading": "Kommunikationsmittel: E-Mail und Chat",
        "body": "E-Mail ist das bei Weitem meistgenutzte Kommunikationsmittel im geschäftlichen Bereich; innerhalb von Organisationen kommen zunehmend Gruppenchats dazu. Theoretisch ist E-Mail ein internationaler technischer Standard, der sich unkompliziert auf rein europäischer Ebene abwickeln lässt. Praktisch nutzen jedoch viele Unternehmen Google- und vor allem Microsoft-Systeme für ihre Mails – aus Nutzersicht, weil Outlook für viele synonym für E-Mail steht, aus Admin-Sicht, weil die großen Mail-Anbieter es zuletzt immer schwerer gemacht haben, die sichere Zustellung von E-Mails fremder Server mit vertretbarem Aufwand zu gewährleisten. Trotz dieser Hindernisse ist es absolut möglich, E-Mail ohne amerikanische Beteiligung abzuwickeln. Wenn die Nutzer auf Outlook bestehen – was oft weniger mit Mails als mit Kalendern und Outlook-Erweiterungen von Branchensoftware zu tun hat –, ist darauf zu achten, dass der Anbieter oder Server das MAPI-Protokoll beherrscht. Ist das der Fall, kann der Umstieg nahtlos erfolgen.\n\nBeim Chat gab es die Unternehmenskommunikation in thematisch organisierten Gruppen lange bevor Microsoft Teams sich etabliert hat. Hier stellt sich weniger die Frage, ob es möglich ist, Slack und Microsoft den Rücken zu kehren, als vielmehr, welche Lösung am besten zu den Abläufen der Organisation passt – viele lassen sich auch komplett selbst verwalten. Insbesondere die Anbindung an gemeinsam genutzte Dokumente, Single Sign-on und die Integration von Telefonie sind Funktionen, die ein Umstieg von MS Teams komplex machen können und daher Beratung erfordern."
      },
      {
        "heading": "Software: Betriebssysteme, Domänen und Office",
        "body": "Bei Betriebssystemen für Notebooks und Desktop-Computer führt Microsoft Windows mit knapp 80 % Marktanteil vor macOS mit rund 10 %. Linux ist im Unternehmensumfeld überwiegend auf Servern anzutreffen. Ob eine Umstellung aller Rechner auf Linux sinnvoll ist, hängt davon ab, ob es unternehmenskritische Prozesse gibt, die mit einer Linux-Umgebung nicht kompatibel sind. Moderne Linux-Systeme bieten mindestens ebenso viel Nutzungskomfort wie Windows; das größere Problem stellen inkompatible Anwendungen dar – Lexware Office, Adobe Photoshop und AutoCAD sind typische Fälle.\n\nEine lokale Windows-Domäne mit Active Directory regelt den Zugriff auf Dateien, Drucker und andere Netzwerkressourcen gruppenbasiert. Dennoch lässt sich mit überschaubarem Aufwand eine lokale Domäne ohne Windows-Server aufbauen – auf Basis von LDAP, dem internationalen Industriestandard, oder mit Open-Source-Lösungen, die volle Kompatibilität mit Active Directory bieten.\n\nIm Office-Bereich führt die Dominanz von Microsoft zu Vorbehalten der Benutzer, die über Jahre Expertise etwa in Excel aufgebaut haben. Nutzerakzeptanz ist eine wesentliche Voraussetzung für den Erfolg einer Umstellung – Schulungen sind hier eine wichtige Komponente. Generell ist zwischen lokal installierten Anwendungen und Webanwendungen zu unterscheiden: Browserbasierte Lösungen haben Vorteile bei Datensicherung und simultaner Zusammenarbeit und sind unabhängig vom Betriebssystem. In Europa entwickelte und gehostete Lösungen sind Nextcloud, OnlyOffice und Collabora; bei den lokal installierten Alternativen ist LibreOffice klar führend."
      },
      {
        "heading": "Fazit",
        "body": "Die weltweiten Lieferketten sind stark verschränkt, und wir alle haben Grund, uns für eine reibungslose Zusammenarbeit einzusetzen. Es ist dennoch vor dem Hintergrund der aktuellen Entwicklungen sinnvoll, sich Gedanken zu machen, wie die Arbeitsfähigkeit sichergestellt werden kann, wenn es eine Krise in der interkontinentalen Kooperation gibt.\n\nAus europäischer Sicht steht vor allem Hardware aus hiesiger Produktion praktisch nicht zur Verfügung – das zu ändern, ist Sache von Politik und Großunternehmen. Es ist aber absolut möglich, die technische Infrastruktur so aufzustellen, dass eine Weiterarbeit auch ohne Hilfe aus dem Ausland möglich ist. Dabei entsteht gleichzeitig ein Effekt für die Binnenkonjunktur, da IT-Budgets in lokalen Support und regionale Infrastrukturen fließen.\n\nSowohl bei der Kommunikation als auch bei der Speicherung von Daten und der eingesetzten Software gibt es zu den Angeboten amerikanischer Megakonzerne leistungsfähige Alternativen. Welche Umstellung auf welcher Ebene die richtige ist, hängt von vielen Faktoren ab, die am besten vor Ort von Experten beurteilt werden."
      }
    ],
    "faq": [
      {
        "question": "Kann ein Unternehmen seine IT komplett auf europäische Anbieter umstellen?",
        "answer": "Bei Hardware praktisch nicht – sie wird kaum in Europa hergestellt. Bei Datenspeicherung, E-Mail, Chat und Software gibt es dagegen leistungsfähige europäische Alternativen, sodass eine weitgehende Umstellung in diesen Bereichen absolut möglich ist."
      },
      {
        "question": "Warum ist der CLOUD Act für deutsche Unternehmen relevant?",
        "answer": "Der CLOUD Act verpflichtet US-Unternehmen, der US-Regierung die Daten ihrer Kunden zur Verfügung zu stellen – auch wenn diese außerhalb der USA gehostet sind. Wer Daten bei US-Anbietern speichert, kann sich diesem Zugriff also nicht durch die Wahl eines europäischen Rechenzentrums entziehen."
      },
      {
        "question": "Können wir Outlook behalten, wenn wir den Mail-Anbieter wechseln?",
        "answer": "Ja, sofern der neue Anbieter oder Server das MAPI-Protokoll beherrscht. Dann kann der Umstieg für die Nutzer nahtlos erfolgen – inklusive der gewohnten Kalender-Funktionen."
      },
      {
        "question": "Ist LibreOffice ein vollwertiger Ersatz für Microsoft Office?",
        "answer": "LibreOffice ist die führende lokal installierte Alternative, allerdings kann es bei komplexen Formeln oder Formatierungen zu Abweichungen kommen. Entscheidend für den Erfolg einer Umstellung ist die Nutzerakzeptanz – Schulungen helfen dabei. Browserbasierte europäische Alternativen sind Nextcloud, OnlyOffice und Collabora."
      }
    ]
  },
  "it-outsourcing-vorteile": {
    "intro": "IT-Outsourcing bedeutet, IT-Aufgaben wie Support, Netzwerkbetreuung, Sicherheit oder den Betrieb von Servern an einen externen Dienstleister auszulagern, statt sie vollständig intern zu leisten. Für kleine und mittlere Unternehmen (KMU) liegen die größten Vorteile in planbaren Kosten, dem Zugang zu Spezialwissen, höherer Ausfallsicherheit und der Entlastung der eigenen Mitarbeitenden. So bleibt mehr Zeit für das Kerngeschäft, während ein qualifizierter Partner die IT zuverlässig und dokumentiert betreibt.",
    "keyTakeaways": [
      "IT-Outsourcing macht IT-Kosten planbar: Statt unregelmäßiger Investitionen in Personal und Hardware zahlen Sie kalkulierbare, vertraglich vereinbarte Leistungen.",
      "KMU erhalten Zugang zu breitem Spezialwissen, das eine einzelne interne IT-Kraft kaum abdecken kann – von Netzwerk über Cloud bis IT-Sicherheit.",
      "Externe Betreuung kann Verfügbarkeit und Sicherheit erhöhen, etwa durch geregelte Erreichbarkeit, Dokumentation und ein Vier-Augen-Prinzip.",
      "Outsourcing ist modular: Sie lagern gezielt einzelne Bereiche aus und kombinieren sie bei Bedarf mit Ihrer internen IT."
    ],
    "sections": [
      {
        "heading": "Was bedeutet IT-Outsourcing für KMU?",
        "body": "IT-Outsourcing beschreibt die Auslagerung von IT-Aufgaben an einen externen Dienstleister oder ein IT-Systemhaus. Das kann den gesamten IT-Betrieb umfassen oder sich auf einzelne Bereiche beschränken – etwa den Anwendersupport, die Betreuung von Netzwerk und WLAN, die Verwaltung von Microsoft 365 oder die IT-Sicherheit. Der Dienstleister übernimmt definierte Verantwortlichkeiten, während strategische Entscheidungen im Unternehmen bleiben.\n\nGerade für kleine und mittlere Unternehmen ist dieses Modell attraktiv, weil sie selten eine vollständig besetzte IT-Abteilung mit Spezialisten für jeden Bereich aufbauen können. Outsourcing schließt diese Lücke, ohne dass dauerhaft Personal eingestellt werden muss. Dabei ist es kein Alles-oder-nichts-Ansatz: Viele KMU kombinieren eine kleine interne IT mit externer Unterstützung für spezialisierte oder zeitintensive Aufgaben."
      },
      {
        "heading": "Die wichtigsten Vorteile im Überblick",
        "body": "Die Vorteile des IT-Outsourcings betreffen Kosten, Kompetenz, Verfügbarkeit und die Entlastung interner Ressourcen. Sie ergeben sich vor allem dann, wenn die Zusammenarbeit klar geregelt und dokumentiert ist.",
        "bullets": [
          "Planbare Kosten: Vertraglich vereinbarte Leistungen lassen sich besser budgetieren als schwankende Ausgaben für Personal, Weiterbildung und Hardware.",
          "Zugang zu Spezialwissen: Ein Team aus Fachleuten deckt mehr Themen ab als eine einzelne interne Kraft.",
          "Höhere Verfügbarkeit: Geregelte Erreichbarkeit und mehrere Ansprechpartner können das Risiko langer Ausfälle verringern.",
          "Entlastung der Mitarbeitenden: Interne IT-Kräfte oder fachfremde Mitarbeitende werden von Routine- und Spezialaufgaben befreit.",
          "Aktuelle Technologien: Ein Dienstleister verfolgt Markt- und Sicherheitsentwicklungen kontinuierlich.",
          "Skalierbarkeit: Leistungen lassen sich an Wachstum, Saisongeschäft oder neue Standorte anpassen."
        ]
      },
      {
        "heading": "Kosten besser planen statt überraschen lassen",
        "body": "Eine eigene IT-Abteilung verursacht laufende Fixkosten: Gehälter, Weiterbildung, Lizenzen und Hardware. Hinzu kommen unregelmäßige Investitionen, etwa wenn Server erneuert oder Sicherheitslösungen eingeführt werden. Für KMU sind solche Sprünge schwer zu kalkulieren.\n\nBeim Outsourcing werden Leistungen vertraglich vereinbart und damit planbar. Statt in den Aufbau und Erhalt eigener Kapazitäten zu investieren, zahlen Sie für die tatsächlich benötigte Betreuung. Das bedeutet nicht automatisch, dass IT günstiger wird – aber die Ausgaben werden transparenter und lassen sich gezielter budgetieren. Wichtig ist eine klare Leistungsbeschreibung, damit beide Seiten wissen, welche Aufgaben abgedeckt sind und wo zusätzliche Vereinbarungen nötig werden."
      },
      {
        "heading": "Spezialwissen und Verfügbarkeit für stabile IT",
        "body": "In vielen KMU ist die IT auf eine oder zwei Personen konzentriert – oder läuft nebenbei mit. Fällt diese Person aus oder fehlt das Spezialwissen für ein konkretes Problem, kann der Betrieb schnell ins Stocken geraten. Ein externer Partner bringt ein Team mit unterschiedlichen Kompetenzen mit, von der Netzwerk- und Servertechnik bis zur IT-Sicherheit.\n\nGleichzeitig kann die Verfügbarkeit steigen: Mit mehreren Ansprechpartnern und geregelten Erreichbarkeiten lassen sich Störungen oft schneller bearbeiten, und das Risiko langer Ausfälle sinkt. Entscheidend für die Stabilität sind dabei nachvollziehbare Prozesse. Eine saubere Dokumentation der Systeme und ein Vier-Augen-Prinzip bei kritischen Änderungen sorgen dafür, dass Wissen nicht an einzelnen Personen hängt und Fehler frühzeitig auffallen."
      },
      {
        "heading": "Sicherheit und Datenschutz als Daueraufgabe",
        "body": "IT-Sicherheit ist kein einmaliges Projekt, sondern eine laufende Aufgabe. Bedrohungen verändern sich, Software muss aktualisiert, Zugänge müssen verwaltet und Daten gesichert werden. Für KMU ist es oft schwierig, diesen Aufwand neben dem Tagesgeschäft konsequent zu leisten.\n\nEin spezialisierter Partner betreibt Schutzmaßnahmen wie Firewalls, regelmäßige Backups und überwachte Updates strukturiert und kontinuierlich. Wichtig ist, dass diese Maßnahmen zum tatsächlichen Risiko des Unternehmens passen und dokumentiert sind – etwa im Sinne nachvollziehbarer Verantwortlichkeiten und Wiederherstellungskonzepte. So wird Sicherheit von einer reaktiven Notfallaufgabe zu einem geplanten, überprüfbaren Bestandteil des IT-Betriebs."
      },
      {
        "heading": "So unterstützt datadiorama als IT-Systemhaus",
        "body": "Die datadiorama GmbH ist seit 2013 als IT-Systemhaus und in der Softwareentwicklung tätig, mit Standorten in Potsdam, Berlin und Mörschwil in der Schweiz. Das Leistungsspektrum deckt typische Outsourcing-Bedarfe von KMU ab: IT-Support, Netzwerkbetreuung, Telefonanlagen, Mailserver-Betreuung, Microsoft 365 und Microsoft Teams, Workspaces, Home-Office-Anbindung sowie Private-Cloud- und NAS-Lösungen.\n\nDabei arbeitet datadiorama mit etablierten Partnern und Technologien: als zertifizierter UniFi-Partner (UEWA) im Netzwerkbereich, mit Securepoint für IT-Sicherheit, sipgate und easybell für Cloud-Telefonie, Synology (Consulting Expert 2026) für NAS und Private Cloud sowie Microsoft 365 und Google Workspace für die tägliche Zusammenarbeit. Werte wie Zuverlässigkeit, saubere Dokumentation und ein Vier-Augen-Prinzip prägen die Arbeitsweise – ergänzt um den Anspruch, nachhaltig zu wirtschaften und perspektivisch klimaneutral zu werden.",
        "bullets": [
          "Modulare Betreuung: einzelne Bereiche auslagern oder die IT umfassend betreuen lassen.",
          "Breites Leistungsspektrum von Support und Netzwerk bis Cloud-Telefonie und Private Cloud.",
          "Dokumentierte, nachvollziehbare Arbeitsweise mit Vier-Augen-Prinzip."
        ]
      }
    ],
    "faq": [
      {
        "question": "Lohnt sich IT-Outsourcing auch für kleine Unternehmen?",
        "answer": "Ja. Gerade kleine Unternehmen profitieren, weil sie selten eigene Spezialisten für alle IT-Themen beschäftigen können. Über einen externen Partner erhalten sie Zugang zu Fachwissen und einer geregelten Betreuung, ohne dauerhaft Personal aufbauen zu müssen. Sinnvoll ist häufig ein modularer Einstieg, bei dem zunächst einzelne Bereiche wie Support oder IT-Sicherheit ausgelagert werden."
      },
      {
        "question": "Welche IT-Aufgaben kann ich auslagern?",
        "answer": "Auslagern lassen sich unter anderem der Anwendersupport, die Betreuung von Netzwerk und WLAN, Server und Mailserver, die Verwaltung von Microsoft 365 oder Google Workspace, Telefonanlagen, Home-Office-Anbindungen sowie Private-Cloud- und NAS-Lösungen. Sie entscheiden, ob Sie einzelne Bereiche oder den gesamten IT-Betrieb an einen Dienstleister übergeben."
      },
      {
        "question": "Verliere ich durch Outsourcing die Kontrolle über meine IT?",
        "answer": "Nein, sofern die Zusammenarbeit klar geregelt ist. Strategische Entscheidungen bleiben im Unternehmen, der Dienstleister übernimmt definierte Aufgaben. Eine saubere Dokumentation der Systeme und nachvollziehbare Verantwortlichkeiten sorgen dafür, dass Sie jederzeit Überblick und Steuerung behalten."
      },
      {
        "question": "Wie finde ich den passenden IT-Dienstleister?",
        "answer": "Achten Sie auf ein zum eigenen Bedarf passendes Leistungsspektrum, relevante Partnerschaften und Zertifizierungen, eine transparente Leistungsbeschreibung sowie nachvollziehbare Arbeitsprozesse wie Dokumentation und ein Vier-Augen-Prinzip. Wichtig sind außerdem klare Ansprechpartner und eine geregelte Erreichbarkeit, damit Störungen zuverlässig bearbeitet werden."
      }
    ]
  },
  "google-workspace-vs-microsoft-365": {
    "intro": "Pauschal ist keine der beiden Plattformen besser, denn die richtige Wahl zwischen Google Workspace und Microsoft 365 hängt vor allem davon ab, wie Ihr Team arbeitet. Microsoft 365 passt zu Organisationen, die auf vertraute Desktop-Programme, eine enge Windows-Integration und Offline-Arbeit setzen, während Google Workspace dort punktet, wo browserbasiertes Arbeiten, einfache Bedienung und unkomplizierte Echtzeit-Zusammenarbeit im Vordergrund stehen. Beide gehören zu den führenden Cloud-Plattformen für E-Mail, Office-Anwendungen, Zusammenarbeit und Datenspeicherung im Unternehmen, sodass es in den meisten Fällen kein objektiv besseres Produkt gibt, sondern nur das besser passende für Ihre Prozesse, Ihre IT-Landschaft und Ihre Mitarbeitenden.",
    "keyTakeaways": [
      "Beide Plattformen bieten ein vergleichbares Grundpaket: Textverarbeitung, Tabellenkalkulation, Präsentationen, E-Mail, Chat, Videokonferenz und Cloud-Speicher unter zentraler Verwaltung.",
      "Microsoft 365 spielt seine Stärken bei Desktop-Apps, Offline-Nutzung und Windows-Integration aus, während Google Workspace beim browserbasierten Arbeiten und der reibungslosen Echtzeit-Kollaboration überzeugt.",
      "Die Entscheidung sollte sich an Ihren Arbeitsweisen, Ihrer bestehenden IT und Ihren Datenschutzanforderungen orientieren, nicht allein am Funktionsumfang oder Listenpreis.",
      "Eine saubere Einführung und Datenmigration ist erfolgskritisch und sollte geplant erfolgen; datadiorama unterstützt als Partner für Microsoft 365 und Google Workspace bei Einrichtung, Konfiguration und Umzug."
    ],
    "sections": [
      {
        "heading": "Was Google Workspace und Microsoft 365 gemeinsam haben",
        "body": "Auf den ersten Blick ähneln sich die beiden Plattformen stark. Beide sind cloudbasierte Produktivitäts-Suiten, die im Abonnement bereitgestellt und über eine zentrale Administrationsoberfläche verwaltet werden. Über diese Konsole legen Sie Benutzerkonten an, vergeben Lizenzen, steuern Sicherheitseinstellungen und verwalten Geräte sowie Zugriffsrechte.\n\nAuch der Anwendungsumfang ist weitgehend deckungsgleich. Für nahezu jede Funktion gibt es auf beiden Seiten ein Gegenstück, sodass die Grundbedürfnisse eines Büroalltags in beiden Welten abgedeckt sind. Die Unterschiede liegen daher seltener darin, was die Plattformen leisten, sondern eher darin, wie sie bedient und integriert werden.",
        "bullets": [
          "Textverarbeitung: Microsoft Word vs. Google Docs",
          "Tabellen: Microsoft Excel vs. Google Sheets",
          "Präsentationen: Microsoft PowerPoint vs. Google Slides",
          "E-Mail & Kalender: Outlook/Exchange vs. Gmail/Google Kalender",
          "Kommunikation: Microsoft Teams vs. Google Chat und Google Meet",
          "Cloud-Speicher: OneDrive/SharePoint vs. Google Drive"
        ]
      },
      {
        "heading": "Wo die Unterschiede wirklich liegen",
        "body": "Die entscheidenden Differenzen zeigen sich im Arbeitsmodell. Microsoft 365 kombiniert vollwertige Desktop-Programme mit Web-Versionen. Wer umfangreiche Excel-Modelle, komplexe Word-Dokumente oder Offline-Arbeit benötigt, profitiert von den installierten Anwendungen und der tiefen Integration in Windows. Google Workspace ist konsequent browserbasiert konzipiert: Die Anwendungen laufen primär im Webbrowser, was Einrichtung und Wartung der Endgeräte vereinfacht und plattformübergreifend einheitlich funktioniert.\n\nBei der Echtzeit-Zusammenarbeit gilt Google traditionell als besonders flüssig, da mehrere Personen gleichzeitig im selben Dokument arbeiten können, ohne über Versionen nachdenken zu müssen. Microsoft hat hier stark aufgeholt und bündelt Zusammenarbeit, Chat und Videokonferenzen zentral in Microsoft Teams. Auch bei Oberfläche und Einstieg gibt es Nuancen: Google wirkt oft schlanker und schneller erlernbar, während Anwender von der vertrauten Office-Umgebung von Microsoft profitieren.",
        "bullets": [
          "Arbeitsmodell: Desktop plus Web (Microsoft) vs. primär Browser (Google)",
          "Offline-Fähigkeit: ausgeprägter bei Microsoft 365",
          "Echtzeit-Kollaboration: sehr stark bei Google, ausgereift bei Microsoft Teams",
          "Lernkurve: meist niedriger bei Google, vertraut bei bestehender Microsoft-Nutzung"
        ]
      },
      {
        "heading": "Lizenzmodelle und Speicher richtig einordnen",
        "body": "Beide Anbieter arbeiten mit gestaffelten Abonnement-Tarifen, die sich im Funktionsumfang, in den Sicherheits- und Verwaltungsoptionen sowie im inkludierten Speicher unterscheiden. Microsoft bietet dabei eine besonders feingliedrige Auswahl an Plänen, unter anderem mit oder ohne Desktop-Apps. Google strukturiert seine Editionen übersichtlicher.\n\nWichtig ist, nicht nur den Listenpreis pro Nutzer zu vergleichen, sondern den tatsächlichen Bedarf zugrunde zu legen: Welche Anwendungen brauchen Ihre Mitarbeitenden wirklich, wie viel Speicher fällt an und welche Compliance- und Sicherheitsfunktionen sind erforderlich? Aktuelle Tarife und Speicherkontingente ändern sich regelmäßig, weshalb sich ein Blick in die offiziellen Konditionen der Anbieter zum Entscheidungszeitpunkt lohnt. Achten Sie zudem auf Folgekosten wie zusätzlichen Speicher oder Add-ons."
      },
      {
        "heading": "Sicherheit, Datenschutz und DSGVO",
        "body": "Beide Plattformen bringen umfangreiche Sicherheitsmechanismen mit: Mehr-Faktor-Authentifizierung, Verschlüsselung, Geräte- und Zugriffsverwaltung sowie Schutzfunktionen gegen Phishing und Schadsoftware gehören zum Standard. In der Praxis hängt das Sicherheitsniveau jedoch stark von der richtigen Konfiguration ab, nicht allein vom Produkt.\n\nFür deutsche und europäische Unternehmen sind Datenschutz und DSGVO-Konformität zentrale Kriterien. Relevante Fragen betreffen den Speicherort der Daten, den Abschluss eines Auftragsverarbeitungsvertrags sowie die Steuerung von Zugriffen und Aufbewahrung. Eine durchdachte Grundkonfiguration, klare Berechtigungskonzepte und ergänzende Sicherheitslösungen erhöhen das Schutzniveau spürbar. datadiorama setzt im Bereich IT-Sicherheit unter anderem auf Lösungen von Securepoint und arbeitet nach dokumentierten Prozessen mit Vier-Augen-Prinzip.",
        "bullets": [
          "Mehr-Faktor-Authentifizierung und rollenbasierte Zugriffsrechte konsequent aktivieren",
          "Speicherort der Daten und Auftragsverarbeitungsvertrag prüfen",
          "Backup- und Aufbewahrungsstrategie definieren, auch für Cloud-Daten",
          "Sicherheit als laufenden Prozess verstehen, nicht als einmalige Einrichtung"
        ]
      },
      {
        "heading": "Welche Plattform passt zu welchem Unternehmen?",
        "body": "Als Orientierung lässt sich sagen: Microsoft 365 ist häufig die richtige Wahl für Organisationen, die bereits stark im Microsoft-Umfeld verankert sind, viel mit anspruchsvollen Excel- und Word-Dokumenten arbeiten, Offline-Arbeit benötigen oder eine enge Integration mit Windows und weiteren Microsoft-Diensten wünschen.\n\nGoogle Workspace passt dagegen oft zu Teams, die mobil und standortübergreifend arbeiten, Wert auf einfache Bedienung und schnelle Einarbeitung legen und bei denen browserbasierte Echtzeit-Zusammenarbeit im Mittelpunkt steht. In gemischten Umgebungen ist auch eine bewusste Kombination einzelner Dienste denkbar. Entscheidend ist eine ehrliche Bestandsaufnahme Ihrer Arbeitsweisen, Endgeräte und vorhandenen Systeme, bevor Sie sich festlegen."
      },
      {
        "heading": "Einführung und Migration mit datadiorama",
        "body": "Die Plattformwahl ist nur der erste Schritt; den größten Unterschied macht eine saubere Einführung. Eine durchdachte Migration umfasst die Einrichtung der Konten, die Konfiguration der Umgebung samt Sicherheitseinstellungen, den Umzug bestehender E-Mails, Kontakte, Kalender und Dateien sowie die Anbindung von Domains. Wird dieser Prozess geplant durchgeführt, vermeiden Sie Datenverluste, Ausfallzeiten und Frust bei den Mitarbeitenden.\n\ndatadiorama ist als IT-Systemhaus für Microsoft 365 und Google Workspace aufgestellt und begleitet Unternehmen von der Beratung über die Einrichtung bis zum laufenden Betrieb. Ergänzend deckt das Team angrenzende Bereiche wie Mailserver-Betreuung, Microsoft Teams, Netzwerkbetreuung, Home-Office-Anbindung sowie Private Cloud bzw. NAS ab. So lässt sich eine Plattform nicht isoliert, sondern als stimmiger Teil Ihrer gesamten IT einführen."
      }
    ],
    "faq": [
      {
        "question": "Ist Google Workspace oder Microsoft 365 günstiger?",
        "answer": "Beide Anbieter arbeiten mit gestaffelten Abonnement-Tarifen, die sich im Funktionsumfang und Speicher unterscheiden. Welche Variante günstiger ist, hängt vom tatsächlichen Bedarf ab, also davon, welche Anwendungen, wie viel Speicher und welche Sicherheitsfunktionen Sie benötigen. Da sich Preise und Editionen regelmäßig ändern, sollten Sie die aktuellen Konditionen zum Entscheidungszeitpunkt prüfen, statt nur den Listenpreis pro Nutzer zu vergleichen."
      },
      {
        "question": "Kann ich von einer Plattform zur anderen wechseln?",
        "answer": "Ja, ein Wechsel zwischen Google Workspace und Microsoft 365 ist möglich. E-Mails, Kontakte, Kalender und Dateien lassen sich migrieren, und Domains können auf die neue Umgebung umgezogen werden. Damit dabei keine Daten verloren gehen und der Betrieb möglichst unterbrechungsfrei bleibt, sollte die Migration geplant und schrittweise erfolgen. datadiorama unterstützt bei Einrichtung, Konfiguration und Datenmigration."
      },
      {
        "question": "Sind beide Plattformen DSGVO-konform nutzbar?",
        "answer": "Beide Plattformen lassen sich grundsätzlich datenschutzkonform einsetzen, sofern sie korrekt konfiguriert werden. Wichtig sind unter anderem ein Auftragsverarbeitungsvertrag, die Klärung des Datenspeicherorts sowie klare Berechtigungs- und Aufbewahrungskonzepte. Das tatsächliche Datenschutz- und Sicherheitsniveau hängt stark von der Einrichtung und dem laufenden Betrieb ab, nicht allein vom gewählten Produkt."
      },
      {
        "question": "Welche Plattform ist besser für die Zusammenarbeit im Team?",
        "answer": "Google Workspace gilt bei der browserbasierten Echtzeit-Zusammenarbeit als besonders flüssig, da mehrere Personen gleichzeitig im selben Dokument arbeiten können. Microsoft 365 bündelt Zusammenarbeit, Chat und Videokonferenzen zentral in Microsoft Teams und ist hier ebenfalls sehr ausgereift. Welche Lösung besser passt, hängt davon ab, ob Ihr Team eher browser- oder desktopzentriert arbeitet."
      }
    ]
  },
  "professionelle-wlan-planung": {
    "intro": "Professionelle WLAN-Planung ist der systematische Prozess, mit dem ein Unternehmen seine Funknetz-Infrastruktur vorab analysiert, ausleuchtet und dimensioniert, damit überall stabile, sichere und ausreichend schnelle Verbindungen bereitstehen. Statt Access Points nach Gefühl zu verteilen, stützt sich eine fundierte Planung auf eine Standortanalyse, eine Funkfeld-Ausleuchtung (WLAN-Site-Survey) und eine auf den Bedarf abgestimmte Hardware- und Sicherheitsarchitektur. Das Ergebnis ist ein lückenloses WLAN ohne Funklöcher, das mit Ihrem Unternehmen mitwächst.",
    "keyTakeaways": [
      "Ein lückenloses Unternehmens-WLAN entsteht nicht durch mehr Hardware, sondern durch eine durchdachte Planung aus Bedarfsanalyse, Ausleuchtung und richtiger Platzierung der Access Points.",
      "Eine Funkfeld-Ausleuchtung (Site-Survey) deckt Funklöcher, Überlappungen und Störquellen auf, bevor teure Fehlinvestitionen entstehen.",
      "Sicherheit (WPA3, getrennte Gäste- und Mitarbeiternetze, VLANs) und Skalierbarkeit gehören von Anfang an in die Planung und nicht erst in den Betrieb.",
      "datadiorama plant, installiert und betreut Unternehmens- und Hotel-WLAN als zertifizierter UniFi-Partner mit dokumentiertem, nachvollziehbarem Vorgehen."
    ],
    "sections": [
      {
        "heading": "Was professionelle WLAN-Planung bedeutet",
        "body": "Professionelle WLAN-Planung umfasst alle Schritte, die ein zuverlässiges, sicheres und leistungsfähiges Funknetz im Unternehmen sicherstellen, bevor und während es aufgebaut wird. Dazu gehören die Erfassung des tatsächlichen Bedarfs, die bauliche und funktechnische Analyse der Räumlichkeiten, die Berechnung der notwendigen Access Points sowie die Festlegung eines Sicherheits- und Netzwerkkonzepts.\n\nDer entscheidende Unterschied zum privaten WLAN liegt in den Anforderungen: In Unternehmen greifen viele Geräte gleichzeitig zu, vom Notebook über VoIP-Telefone bis zu mobilen Scannern und IoT-Sensoren. Diese müssen sich beim Gang durch das Gebäude unterbrechungsfrei zwischen den Access Points bewegen (Roaming), priorisierten Datenverkehr erhalten und voneinander getrennt werden können. Ein einzelner Consumer-Router kann das nicht leisten; nötig ist eine geplante, zentral verwaltete Infrastruktur.",
        "bullets": [
          "Bedarfsanalyse: Anzahl der Geräte, Anwendungen, benötigte Bandbreite und Mobilität der Nutzer",
          "Funktechnische Analyse: Gebäudegeometrie, Wandmaterialien, Stockwerke und vorhandene Verkabelung",
          "Konzept: Anzahl und Standorte der Access Points, Funkkanäle, Sendeleistung und Roaming",
          "Sicherheit und Trennung: Verschlüsselung, getrennte Netze und Zugriffsregeln"
        ]
      },
      {
        "heading": "Warum schlecht geplantes WLAN teuer wird",
        "body": "Ein WLAN, das ohne Planung gewachsen ist, verursacht im Betrieb laufende Probleme, die oft erst spät als Ursache erkannt werden. Typisch sind Funklöcher in einzelnen Räumen, Verbindungsabbrüche beim Wechsel zwischen Etagen und spürbare Einbrüche der Geschwindigkeit, sobald viele Personen gleichzeitig online sind.\n\nHäufig wird darauf mit dem Zukauf weiterer Access Points reagiert. Werden diese ohne Kanalplanung aufgestellt, stören sie sich gegenseitig und verschlechtern die Lage zusätzlich. Genauso problematisch ist überdimensionierte oder unpassende Hardware, die Geld bindet, ohne das eigentliche Problem zu lösen. Eine vorausschauende Planung vermeidet diese Kosten, weil die Komponenten bedarfsgerecht und aufeinander abgestimmt ausgewählt werden.",
        "bullets": [
          "Abdeckungslücken und schwaches Signal in einzelnen Bereichen",
          "Verbindungsabbrüche und stockende Video- oder Telefonie-Verbindungen",
          "Überlastung durch zu viele Geräte je Access Point",
          "Gegenseitige Störung von Access Points durch fehlende Kanalplanung",
          "Sicherheitslücken durch ungetrennte Netze und veraltete Verschlüsselung"
        ]
      },
      {
        "heading": "Die Funkfeld-Ausleuchtung (Site-Survey) als Fundament",
        "body": "Kern jeder professionellen WLAN-Planung ist die Funkfeld-Ausleuchtung, auch Site-Survey genannt. Dabei wird mit spezieller Messtechnik erfasst, wie sich die Funksignale in den realen Räumlichkeiten ausbreiten, wo sie durch Wände, Decken oder Materialien gedämpft werden und welche Störquellen vorhanden sind. So lassen sich die optimalen Standorte für die Access Points bestimmen, statt auf Vermutungen zu setzen.\n\nUnterschieden wird in der Regel zwischen einer Planungs-Ausleuchtung anhand von Gebäudeplänen vor der Installation und einer Vor-Ort-Messung im fertig eingerichteten Objekt. Gerade in Bestandsgebäuden, in denen Stahlbeton, Brandschutzwände oder Metallregale die Ausbreitung beeinflussen, liefert die Messung vor Ort belastbare Ergebnisse. Eine abschließende Kontrollmessung nach der Installation bestätigt, dass die geplante Abdeckung auch tatsächlich erreicht wird.",
        "bullets": [
          "Erkennen von Funklöchern und unnötigen Überlappungen vor dem Kauf",
          "Identifizieren von Störquellen wie benachbarten Netzen oder elektrischen Geräten",
          "Festlegen von Anzahl, Position und Ausrichtung der Access Points",
          "Dokumentation der Abdeckung als Grundlage für Betrieb und spätere Erweiterungen"
        ]
      },
      {
        "heading": "Sicherheit und Netztrennung von Anfang an mitdenken",
        "body": "Ein leistungsfähiges WLAN ist nur dann ein gutes WLAN, wenn es auch sicher betrieben wird. Dazu gehört eine aktuelle Verschlüsselung nach WPA3-Standard ebenso wie die saubere Trennung verschiedener Nutzergruppen. Ein typisches Konzept trennt das interne Mitarbeiternetz, ein Gäste-WLAN ohne Zugriff auf interne Systeme und gegebenenfalls ein eigenes Netz für IoT- oder Produktionsgeräte.\n\nTechnisch wird diese Trennung über VLANs und SSIDs umgesetzt und durch Zugriffsregeln sowie eine geeignete Firewall ergänzt. So bleibt der Datenverkehr kontrolliert, und ein kompromittiertes Gerät im Gästenetz kann nicht auf sensible Unternehmensdaten zugreifen. datadiorama bindet IT-Sicherheit, etwa mit Lösungen von Securepoint, von Beginn an in die Netzwerkplanung ein, statt sie nachträglich aufzusetzen."
      },
      {
        "heading": "Skalierbarkeit und zentrale Verwaltung",
        "body": "Unternehmen verändern sich: Flächen kommen hinzu, die Zahl der Geräte steigt, und neue Anwendungen wie Cloud-Telefonie oder Videokonferenzen erhöhen die Anforderungen. Eine professionelle Planung berücksichtigt dieses Wachstum, sodass sich das WLAN erweitern lässt, ohne es komplett neu aufzubauen.\n\nDabei helfen zentral verwaltete Systeme, bei denen alle Access Points über eine einheitliche Oberfläche konfiguriert, überwacht und aktualisiert werden. Das vereinfacht den Betrieb, beschleunigt die Fehlersuche und sorgt für einheitliche Einstellungen. Als zertifizierter UniFi-Partner (UEWA) plant und betreibt datadiorama solche Umgebungen.",
        "bullets": [
          "Reserven bei Abdeckung und Kapazität für zukünftiges Wachstum einplanen",
          "Zentrales Management für einheitliche Konfiguration und Updates",
          "Monitoring zur frühzeitigen Erkennung von Engpässen und Störungen",
          "Strukturierte Verkabelung und Switching als stabile Basis des WLAN"
        ]
      },
      {
        "heading": "Wie datadiorama bei der WLAN-Planung vorgeht",
        "body": "datadiorama, IT-Systemhaus und Softwareentwickler mit Hauptsitz in Potsdam und einem Büro in Berlin, begleitet Unternehmen über den gesamten Lebenszyklus ihres WLAN. Der Ablauf beginnt mit der Analyse der Ausgangssituation, der Klärung der Ziele und einem individuellen Netzwerk-Check. Darauf folgen die Ausleuchtung zur Ermittlung der optimalen Standorte, die technische Umsetzung und die anschließende laufende Betreuung.\n\nDieses Vorgehen ist in die Werte des Unternehmens eingebettet: Zuverlässige Dokumentation und das Vier-Augen-Prinzip sorgen für Nachvollziehbarkeit und Qualität. Neben dem klassischen Unternehmens-WLAN plant datadiorama auch Hotel-WLAN sowie angrenzende Bereiche wie Netzwerkbetreuung, Telefonanlagen, Home-Office-Anbindung und Private-Cloud-Lösungen, sodass das Funknetz Teil einer durchdachten Gesamt-IT wird.",
        "bullets": [
          "Analyse der Ausgangssituation, Zieldefinition und individueller Netzwerk-Check",
          "Funkfeld-Ausleuchtung und Ermittlung der optimalen Access-Point-Standorte",
          "Technische Umsetzung mit dokumentierter Konfiguration und Vier-Augen-Prinzip",
          "Laufende Betreuung, Monitoring und Erweiterung im Betrieb"
        ]
      }
    ],
    "faq": [
      {
        "question": "Was kostet eine professionelle WLAN-Planung?",
        "answer": "Die Kosten hängen von der Größe und Beschaffenheit der Räumlichkeiten, der Zahl der Nutzer und Geräte sowie den Anforderungen an Sicherheit und Verfügbarkeit ab. Pauschale Angaben sind daher nicht seriös. Sinnvoll ist ein individueller Netzwerk-Check, auf dessen Basis ein passendes Konzept und ein konkretes Angebot erstellt werden. Eine gute Planung zahlt sich aus, weil sie Fehlinvestitionen in unpassende Hardware und teure Betriebsstörungen vermeidet."
      },
      {
        "question": "Was ist eine WLAN-Ausleuchtung beziehungsweise ein Site-Survey?",
        "answer": "Bei einer WLAN-Ausleuchtung wird mit spezieller Messtechnik ermittelt, wie sich die Funksignale in den konkreten Räumen ausbreiten, wo Funklöcher oder Störquellen liegen und wie viele Access Points an welchen Standorten nötig sind. Sie kann vorab anhand von Gebäudeplänen und ergänzend vor Ort durchgeführt werden und bildet die Grundlage für eine bedarfsgerechte, lückenlose Abdeckung."
      },
      {
        "question": "Wie viele Access Points braucht ein Unternehmen?",
        "answer": "Eine feste Zahl gibt es nicht. Maßgeblich sind die Fläche, die baulichen Gegebenheiten wie Wandmaterialien und Stockwerke, die Anzahl gleichzeitig aktiver Geräte und die geforderte Bandbreite. Erst die Ausleuchtung liefert eine belastbare Aussage, denn ein einzelner ungünstig platzierter Access Point kann mehr Probleme verursachen als mehrere richtig positionierte."
      },
      {
        "question": "Plant datadiorama auch WLAN für Hotels und Gästebereiche?",
        "answer": "Ja. datadiorama plant und betreibt sowohl klassisches Unternehmens-WLAN als auch Hotel-WLAN. Gerade in Gästebereichen sind eine flächendeckende Abdeckung, eine saubere Trennung von Gäste- und internem Netz sowie eine stabile Verwaltung vieler gleichzeitiger Verbindungen entscheidend, was eine professionelle Planung voraussetzt."
      }
    ]
  },
  "zwei-faktor-authentifizierung-im-homeoffice": {
    "intro": "Die Zwei-Faktor-Authentifizierung (2FA) ergänzt das Passwort um einen zweiten, unabhängigen Identitätsnachweis – etwa einen zeitlich begrenzten Code aus einer App. Im Home-Office, wo Mitarbeitende über private Netzwerke und unterschiedliche Geräte auf Unternehmensdaten zugreifen, schließt 2FA genau die Lücke, die ein gestohlenes oder abgefangenes Passwort allein offenlässt. Sie zählt damit zu den wirksamsten Schutzmaßnahmen mit einem sehr guten Verhältnis von Aufwand und Nutzen, weil ein bekannt gewordenes Passwort ohne den zweiten Faktor für einen Angreifer kaum verwertbar ist.",
    "keyTakeaways": [
      "2FA kombiniert zwei voneinander unabhängige Faktoren (Wissen, Besitz oder Inhärenz) und macht ein allein gestohlenes Passwort weitgehend wertlos.",
      "Im Home-Office ist 2FA besonders wichtig, weil private WLANs, gemischte Geräte und ungesicherte Zugriffswege das Risiko von Datenabgriff und Konto-Übernahme erhöhen.",
      "App-basierte Verfahren (TOTP) und Hardware-Token sind deutlich sicherer als Codes per SMS oder E-Mail.",
      "2FA entfaltet ihren vollen Nutzen erst als Teil eines Gesamtkonzepts aus VPN, sauberer Geräteverwaltung und klaren Richtlinien – hier unterstützt datadiorama bei Planung und Einrichtung."
    ],
    "sections": [
      {
        "heading": "Was ist Zwei-Faktor-Authentifizierung?",
        "body": "Zwei-Faktor-Authentifizierung bedeutet, dass sich eine Person nicht nur mit einem einzigen Merkmal anmeldet, sondern mit zwei unabhängigen Nachweisen aus unterschiedlichen Kategorien. Das Passwort allein reicht nicht mehr aus – erst die Kombination mit einem zweiten Faktor gibt den Zugang frei.\n\nIn der IT-Sicherheit unterscheidet man drei Faktor-Kategorien. Eine echte Zwei-Faktor-Authentifizierung verwendet immer zwei davon, nicht zweimal dieselbe – zwei Passwörter wären also keine 2FA.",
        "bullets": [
          "Wissen – etwas, das nur die Person kennt (Passwort, PIN)",
          "Besitz – etwas, das die Person hat (Smartphone mit Authenticator-App, Hardware-Token, Sicherheitsschlüssel)",
          "Inhärenz – etwas, das die Person ist (Fingerabdruck, Gesichtserkennung)"
        ]
      },
      {
        "heading": "Warum 2FA im Home-Office wichtig ist",
        "body": "Im Büro greifen Mitarbeitende meist über ein abgesichertes, zentral verwaltetes Firmennetz auf Anwendungen zu. Im Home-Office verschiebt sich dieser Zugriff in private Umgebungen: ungewartete Router, mitbenutzte WLANs und gelegentlich auch private Endgeräte. Damit steigt die Wahrscheinlichkeit, dass Zugangsdaten abgegriffen oder über Phishing erbeutet werden.\n\nEin VPN verschlüsselt zwar die Verbindung zwischen Heimarbeitsplatz und Unternehmen, schützt aber nicht davor, dass ein Angreifer mit einem gestohlenen Passwort eine legitime Anmeldung vortäuscht. Genau hier setzt 2FA an: Selbst wenn ein Passwort kompromittiert ist, fehlt dem Angreifer der zweite Faktor. Bei zeitbasierten Verfahren ist der generierte Code zudem nur kurze Zeit gültig, sodass abgefangene Codes praktisch nicht wiederverwendbar sind.",
        "bullets": [
          "Schutz bei Passwort-Diebstahl, Phishing und wiederverwendeten Passwörtern",
          "Absicherung des Zugriffs auf Cloud-Dienste wie Microsoft 365 oder Google Workspace",
          "Reduziertes Risiko bei der Nutzung privater oder gemischter Endgeräte",
          "Bessere Nachvollziehbarkeit von Anmeldevorgängen über den jeweiligen zweiten Faktor"
        ]
      },
      {
        "heading": "Die gängigen 2FA-Verfahren im Vergleich",
        "body": "Nicht jeder zweite Faktor bietet das gleiche Schutzniveau. Die Wahl des Verfahrens sollte sich am Schutzbedarf der jeweiligen Anwendung und an der praktischen Nutzbarkeit für die Mitarbeitenden orientieren.\n\nApp-basierte Einmalcodes (TOTP, Time-based One-Time Password) gelten als guter Standard für die meisten Unternehmenszwecke: Sie funktionieren offline, sind nicht an die Mobilfunknummer gebunden und lassen sich breit ausrollen. Hardware-Sicherheitsschlüssel bieten ein besonders hohes Schutzniveau, vor allem gegen Phishing. SMS und E-Mail sind besser als gar kein zweiter Faktor, gelten aber als die schwächsten Varianten.",
        "bullets": [
          "Authenticator-Apps (TOTP): sicher, offlinefähig, breit unterstützt – empfohlener Standard",
          "Hardware-Token bzw. Sicherheitsschlüssel (z. B. nach FIDO2): hohes Schutzniveau, besonders phishingresistent",
          "Push-Bestätigung: komfortabel, aber anfällig für unbedachtes Wegklicken von Anfragen",
          "SMS und E-Mail: niedrige Hürde, jedoch anfällig für SIM-Swapping und abgefangene Nachrichten"
        ]
      },
      {
        "heading": "Authenticator-Apps und Hardware-Token in der Praxis",
        "body": "Für den breiten Einsatz haben sich Authenticator-Apps etabliert, da sie auf nahezu jedem Smartphone laufen und mit vielen Diensten kompatibel sind. Bekannte Vertreter sind der Microsoft Authenticator (naheliegend bei intensiver Microsoft-365-Nutzung), der Google Authenticator sowie Lösungen wie Authy oder Bitwarden, die zusätzlich eine Synchronisation über mehrere Geräte ermöglichen.\n\nFür besonders schützenswerte Zugänge – etwa administrative Konten oder Zugriffe auf sensible Systeme – sind Hardware-Sicherheitsschlüssel sinnvoll. Wichtig ist in beiden Fällen ein durchdachter Umgang mit Wiederherstellungscodes und Ersatzgeräten, damit der Verlust eines Smartphones nicht zur Aussperrung führt. Genau diese organisatorischen Details entscheiden in der Praxis darüber, ob 2FA reibungslos angenommen wird."
      },
      {
        "heading": "2FA als Baustein eines Gesamtkonzepts",
        "body": "Zwei-Faktor-Authentifizierung ist wirksam, aber sie ist kein Einzelwerkzeug, das alle Risiken abdeckt. Ihre volle Wirkung entfaltet sie erst im Zusammenspiel mit einem sicheren Fernzugriff, einer sauberen Verwaltung der Endgeräte und klaren internen Richtlinien dazu, welche Dienste mit welchem Faktor geschützt werden.\n\nAls IT-Systemhaus mit Schwerpunkten unter anderem auf Microsoft 365, Google Workspace, Netzwerkbetreuung und Home-Office-Arbeitsplätzen unterstützt datadiorama dabei, 2FA sinnvoll in die bestehende Infrastruktur einzubetten – von der Auswahl geeigneter Verfahren über die Einführung bis zur Dokumentation. Die Arbeitsweise orientiert sich dabei an den Werten Zuverlässigkeit und Nachvollziehbarkeit, etwa durch sorgfältige Dokumentation und das Vier-Augen-Prinzip.",
        "bullets": [
          "Verschlüsselter Fernzugriff und sauber konfigurierte Netzwerke",
          "Konsequente 2FA für Cloud-Dienste und administrative Zugänge",
          "Klare Richtlinien zu Geräten, Wiederherstellung und Verantwortlichkeiten",
          "Begleitung bei Einrichtung und Dokumentation durch datadiorama"
        ]
      }
    ],
    "faq": [
      {
        "question": "Ist Zwei-Faktor-Authentifizierung dasselbe wie Multi-Faktor-Authentifizierung?",
        "answer": "2FA ist ein Spezialfall der Multi-Faktor-Authentifizierung (MFA). 2FA verwendet genau zwei Faktoren, MFA verlangt zwei oder mehr. In der Praxis werden die Begriffe oft synonym gebraucht; entscheidend ist, dass die Faktoren aus unterschiedlichen Kategorien stammen (Wissen, Besitz, Inhärenz)."
      },
      {
        "question": "Welche 2FA-Methode ist am sichersten?",
        "answer": "Hardware-Sicherheitsschlüssel nach FIDO2-Standard bieten ein besonders hohes Schutzniveau, da sie sehr phishingresistent sind. Für den breiten Einsatz im Unternehmen sind App-basierte Einmalcodes (TOTP) ein guter und praxistauglicher Standard. SMS und E-Mail sollten nur dort eingesetzt werden, wo keine stärkere Methode verfügbar ist."
      },
      {
        "question": "Was passiert, wenn ein Mitarbeiter sein Smartphone mit der Authenticator-App verliert?",
        "answer": "Für diesen Fall sollten vorab Wiederherstellungscodes hinterlegt und ein Verfahren für Ersatzgeräte definiert sein. Viele Lösungen erlauben zudem eine Geräte-Synchronisation oder eine administrative Neuzuweisung. Dieses Notfallkonzept gehört zwingend zur Planung, damit der Verlust nicht zur dauerhaften Aussperrung führt."
      },
      {
        "question": "Ersetzt 2FA ein VPN im Home-Office?",
        "answer": "Nein, beide ergänzen sich. Ein VPN verschlüsselt die Verbindung, verhindert aber nicht, dass jemand mit gestohlenen Zugangsdaten eine gültige Anmeldung vortäuscht. 2FA schützt genau diesen Anmeldevorgang. Erst gemeinsam – ergänzt durch Geräteverwaltung und Richtlinien – ergeben sie einen tragfähigen Schutz."
      }
    ]
  },
  "private-cloud-mit-nas": {
    "intro": "Eine Private Cloud mit NAS ist ein selbst betriebener Cloud-Speicher, der auf einem Network Attached Storage (NAS) im eigenen Unternehmen oder Rechenzentrum läuft. Sie bietet Datei-Synchronisation, Zusammenarbeit und Fernzugriff wie öffentliche Cloud-Dienste, hält die Daten aber vollständig unter Ihrer Kontrolle und außerhalb der Reichweite ausländischer Zugriffsgesetze. So gewinnen Unternehmen ihre Datenhoheit zurück, ohne auf den Komfort moderner Cloud-Workflows zu verzichten.",
    "keyTakeaways": [
      "Eine Private Cloud auf NAS-Basis speichert Unternehmensdaten im eigenen Verantwortungsbereich statt bei US-Hyperscalern und erleichtert dadurch die DSGVO-Konformität.",
      "Der US CLOUD Act kann US-Anbieter zur Herausgabe von Daten verpflichten, unabhängig vom physischen Speicherort der Server. Für europäische Unternehmen entsteht daraus ein rechtliches Risiko.",
      "Datenhoheit erfordert mehr als nur eigene Hardware: Verschlüsselung, eine durchdachte Backup-Strategie, klare Zugriffskonzepte und regelmäßige Wartung sind entscheidend.",
      "datadiorama begleitet als Synology Consulting Expert 2026 Planung, Einrichtung und Betrieb von Private-Cloud-Lösungen mit NAS."
    ],
    "sections": [
      {
        "heading": "Was ist eine Private Cloud mit NAS?",
        "body": "Eine Private Cloud ist eine Cloud-Infrastruktur, die ausschließlich von einer einzigen Organisation genutzt wird und unter deren Kontrolle steht. Anders als bei der Public Cloud teilen sich hier keine fremden Mandanten dieselbe Plattform. Wird eine solche Private Cloud auf einem NAS (Network Attached Storage) betrieben, dient ein dediziertes Speichersystem im eigenen Netzwerk als Fundament für Dateiablage, Synchronisation und kollaborative Anwendungen.\n\nEin NAS ist im Kern ein netzwerkfähiger Speicher mit eigenem Betriebssystem. Moderne Geräte, etwa von Synology, gehen jedoch weit über die reine Dateiablage hinaus: Über zusätzliche Pakete stellen sie Funktionen wie Datei-Synchronisation, Office-Zusammenarbeit, Kalender, Kontakte und gesicherten Fernzugriff bereit. Damit lässt sich eine Umgebung schaffen, die im Arbeitsalltag wie eine gewohnte Cloud wirkt, deren Daten aber physisch und rechtlich im eigenen Haus verbleiben.",
        "bullets": [
          "Public Cloud: geteilte Infrastruktur eines externen Anbieters, die Daten liegen in dessen Verantwortungsbereich.",
          "Private Cloud mit NAS: dedizierte, selbst betriebene Umgebung, die Daten verbleiben im eigenen Netzwerk.",
          "Hybrid-Ansatz: Kombination beider Welten, etwa lokales NAS plus ausgewählter Cloud-Dienst für einzelne Anwendungsfälle."
        ]
      },
      {
        "heading": "Warum Datenhoheit zum Geschäftsrisiko wird: der US CLOUD Act",
        "body": "Viele Unternehmen speichern ihre Geschäftsdaten bei großen US-Anbietern und vertrauen darauf, dass ein europäischer Serverstandort genügt. Der US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) durchbricht diese Annahme: Er kann Anbieter, die dem US-Recht unterliegen, dazu verpflichten, gespeicherte Daten herauszugeben, unabhängig davon, in welchem Land die Server physisch stehen. Maßgeblich ist die Kontrolle über das Unternehmen, nicht der Speicherort der Daten.\n\nFür europäische Unternehmen entsteht daraus ein Spannungsfeld mit der DSGVO. Ein behördlicher Zugriff, der außerhalb der eigenen Kontrolle und ohne Transparenz erfolgt, lässt sich kaum mit den Grundsätzen der Datenschutz-Grundverordnung vereinbaren. Hinzu kommt das wirtschaftliche Risiko: Sensible Konstruktionsdaten, Kalkulationen oder Mandanteninformationen sollten nachvollziehbar geschützt sein. Datenhoheit bedeutet, jederzeit zu wissen und selbst zu bestimmen, wer auf welche Daten zugreifen kann."
      },
      {
        "heading": "Vorteile einer Private Cloud auf NAS-Basis",
        "body": "Eine eigene Private Cloud verschiebt Verantwortung und Kontrolle zurück ins Unternehmen. Der zentrale Gewinn ist die Datenhoheit: Sie entscheiden, wo Daten liegen, wer sie sieht und wie lange sie aufbewahrt werden. Das erleichtert den Nachweis der DSGVO-Konformität, weil keine intransparenten Drittparteien beteiligt sind.\n\nNeben dem Datenschutz spielt die Flexibilität eine Rolle. Eine selbst betriebene Umgebung lässt sich an die eigenen Prozesse anpassen, statt sich an die Vorgaben eines Anbieters zu binden. Auch wirtschaftlich kann sich der Ansatz rechnen, wenn an die Stelle laufender Pro-Nutzer-Gebühren eine planbare Investition in Hardware und Betrieb tritt. Die konkrete Wirtschaftlichkeit hängt jedoch immer von Unternehmensgröße, Datenvolumen und Betriebsmodell ab und sollte individuell betrachtet werden.",
        "bullets": [
          "Datenhoheit: vollständige Kontrolle über Speicherort und Zugriff.",
          "Datenschutz: einfacherer Nachweis der DSGVO-Konformität ohne Zugriff intransparenter Dritter.",
          "Flexibilität: Anpassung an die eigenen Workflows statt starrer Anbietervorgaben.",
          "Kostenstruktur: planbare Investition statt fortlaufender Abogebühren pro Nutzer.",
          "Performance: schneller lokaler Zugriff im eigenen Netzwerk."
        ]
      },
      {
        "heading": "Was Datenhoheit technisch wirklich voraussetzt",
        "body": "Eigene Hardware allein schafft noch keine sichere Private Cloud. Wer Daten zurückholt, übernimmt auch die Verantwortung für deren Schutz und Verfügbarkeit. Eine durchdachte Architektur ist deshalb entscheidend, damit aus dem Gewinn an Kontrolle kein neues Sicherheitsrisiko wird.\n\nIm Zentrum steht ein belastbares Backup-Konzept. Bewährt hat sich die 3-2-1-Regel: drei Datenkopien auf zwei unterschiedlichen Medien, davon eine Kopie außer Haus. Ein NAS ersetzt kein Backup, sondern ist selbst Teil der zu sichernden Infrastruktur. Ebenso wichtig sind verschlüsselte Verbindungen für den Fernzugriff, ein sauberes Rechte- und Rollenkonzept sowie die regelmäßige Aktualisierung von Betriebssystem und Anwendungen, um bekannte Schwachstellen zu schließen.",
        "bullets": [
          "Backup nach der 3-2-1-Regel inklusive externer Kopie für den Katastrophenfall.",
          "Verschlüsselung der Daten im ruhenden Zustand und bei der Übertragung.",
          "Abgesicherter Fernzugriff, etwa über VPN, statt direkter Freigabe ins Internet.",
          "Differenzierte Benutzer- und Zugriffsrechte nach dem Prinzip der minimalen Berechtigung.",
          "Regelmäßige Updates und ein nachvollziehbares Monitoring des Systems."
        ]
      },
      {
        "heading": "Für wen sich der Umstieg lohnt",
        "body": "Besonders profitieren Unternehmen, die mit sensiblen oder personenbezogenen Daten arbeiten, etwa Kanzleien, Praxen, Ingenieurbüros oder Beratungen. Auch Organisationen mit hohen Compliance-Anforderungen oder dem Wunsch nach digitaler Souveränität finden in der Private Cloud eine passende Antwort.\n\nDabei muss es nicht um ein Entweder-oder gehen. Häufig ist ein hybrider Aufbau sinnvoll, bei dem ein NAS die Datenhoheit für kritische Informationen sichert, während etablierte Dienste wie Microsoft 365 oder Google Workspace für andere Aufgaben weiter genutzt werden. Welche Aufteilung passt, ergibt sich aus einer ehrlichen Bestandsaufnahme der vorhandenen Prozesse, Datenarten und gesetzlichen Pflichten."
      },
      {
        "heading": "Wie datadiorama bei der Private Cloud unterstützt",
        "body": "datadiorama ist ein IT-Systemhaus aus Potsdam mit weiteren Standorten in Berlin und im schweizerischen Mörschwil und seit 2013 am Markt. Als Synology Consulting Expert 2026 begleitet das Unternehmen die Einführung von Private-Cloud-Lösungen auf NAS-Basis: von der Bedarfsanalyse über die Auswahl und Einrichtung der Hardware bis zum laufenden Betrieb.\n\nDie Private Cloud ist dabei in ein breiteres Leistungsspektrum eingebettet, das unter anderem Netzwerkbetreuung, IT-Support, Mailserver-Betreuung sowie die Integration von Microsoft 365 und Google Workspace umfasst. So lässt sich eine NAS-Lösung sauber in eine bestehende Infrastruktur einfügen. Der Arbeitsweise liegen dokumentierte Prozesse und das Vier-Augen-Prinzip zugrunde, ergänzt um den Anspruch, nachhaltig und perspektivisch klimaneutral zu arbeiten.",
        "bullets": [
          "Beratung und Konzeption der passenden Private-Cloud-Architektur.",
          "Einrichtung von NAS, Backup-Strategie und gesichertem Fernzugriff.",
          "Integration in vorhandene Netzwerke und Cloud-Dienste.",
          "Laufender Betrieb und Support mit dokumentierter Arbeitsweise."
        ]
      }
    ],
    "faq": [
      {
        "question": "Ersetzt ein NAS ein Backup?",
        "answer": "Nein. Ein NAS ist ein Speichersystem und selbst Teil der zu sichernden Infrastruktur, kein Ersatz für ein Backup. Auch ein NAS kann durch Hardwaredefekte, Bedienfehler, Diebstahl oder Ransomware ausfallen. Empfohlen wird die 3-2-1-Regel: drei Datenkopien auf zwei unterschiedlichen Medien, davon eine Kopie außer Haus."
      },
      {
        "question": "Ist eine Private Cloud mit NAS automatisch DSGVO-konform?",
        "answer": "Nein. Eine Private Cloud erleichtert die DSGVO-Konformität deutlich, weil die Daten im eigenen Verantwortungsbereich bleiben und keine intransparenten Drittanbieter zugreifen. Konformität entsteht aber erst durch die richtige Umsetzung: Verschlüsselung, Zugriffskonzepte, dokumentierte Prozesse und gesicherte Fernzugriffe. Die technische Basis allein genügt nicht."
      },
      {
        "question": "Worin unterscheidet sich eine Private Cloud von Microsoft 365 oder Google Workspace?",
        "answer": "Bei Microsoft 365 und Google Workspace liegen die Daten in der Infrastruktur eines externen, meist US-amerikanischen Anbieters. Bei einer Private Cloud mit NAS betreiben Sie den Speicher selbst und behalten die volle Kontrolle über Speicherort und Zugriff. Beide Ansätze lassen sich auch hybrid kombinieren."
      },
      {
        "question": "Kann ich auch von unterwegs auf die Private Cloud zugreifen?",
        "answer": "Ja. Moderne NAS-Systeme bieten gesicherten Fernzugriff für Datei-Synchronisation und Zusammenarbeit. Wichtig ist eine abgesicherte Anbindung, etwa über VPN und verschlüsselte Verbindungen, statt einer ungeschützten Freigabe ins Internet, damit der Komfort nicht zulasten der Sicherheit geht."
      }
    ]
  },
  "was-ist-der-us-cloud-act": {
    "intro": "Der US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) ist ein US-Bundesgesetz aus dem Jahr 2018, das amerikanische Behörden ermächtigt, von Unternehmen unter US-Jurisdiktion die Herausgabe gespeicherter Daten zu verlangen, unabhängig davon, in welchem Land diese Daten physisch liegen. Deutsche Unternehmen sind betroffen, weil viele genutzte Cloud-Dienste von US-Konzernen wie Microsoft, Google oder Amazon stammen und damit dem Zugriff nach US-Recht unterliegen, selbst wenn die Server in Deutschland oder der EU stehen. Daraus ergibt sich ein direktes Spannungsverhältnis zur europäischen Datenschutz-Grundverordnung (DSGVO).",
    "keyTakeaways": [
      "Der CLOUD Act verpflichtet US-Anbieter zur Datenherausgabe an US-Behörden, auch wenn die Daten außerhalb der USA gespeichert sind. Der Serverstandort allein bietet daher keinen Schutz.",
      "Betroffen ist jedes deutsche Unternehmen, das Dienste von Anbietern mit US-Muttergesellschaft nutzt, etwa Microsoft 365, Google Workspace oder AWS.",
      "Es besteht ein Spannungsverhältnis zur DSGVO, weil eine Datenherausgabe ohne europäisches Rechtshilfeverfahren den Grundsätzen von Zweckbindung, Transparenz und Datensouveränität widersprechen kann.",
      "Risiken lassen sich durch bewusste Anbieterauswahl, Verschlüsselung und datensouveräne Architekturen wie eine eigene Private Cloud bzw. NAS-Lösung gezielt verringern."
    ],
    "sections": [
      {
        "heading": "Was ist der US CLOUD Act? Eine Definition",
        "body": "Der CLOUD Act steht für \"Clarifying Lawful Overseas Use of Data Act\" und wurde im März 2018 in den USA verabschiedet. Er schafft eine Rechtsgrundlage dafür, dass US-Strafverfolgungsbehörden von Unternehmen, die der US-Jurisdiktion unterliegen, die Herausgabe elektronischer Daten verlangen können, und zwar ausdrücklich auch dann, wenn diese Daten auf Servern außerhalb der Vereinigten Staaten gespeichert sind.\n\nVor dem Gesetz war juristisch umstritten, ob eine US-Behörde auf Daten zugreifen darf, die ein US-Konzern in einem Rechenzentrum im Ausland speichert. Der CLOUD Act beantwortet diese Frage eindeutig: Maßgeblich ist nicht der physische Speicherort, sondern die Kontrolle des Unternehmens über die Daten. Damit gilt das Prinzip der extraterritorialen Reichweite, das den eigentlichen Kern der Diskussion für europäische Unternehmen bildet."
      },
      {
        "heading": "Warum betrifft das Gesetz deutsche Unternehmen?",
        "body": "Viele deutsche Unternehmen nutzen täglich Cloud-Dienste von Anbietern mit Sitz in den USA oder mit US-Muttergesellschaft. Dazu zählen weit verbreitete Werkzeuge für E-Mail, Dateiablage, Kollaboration und Infrastruktur. Sobald ein Dienstleister der US-Jurisdiktion unterliegt, kann er grundsätzlich nach dem CLOUD Act zur Herausgabe von Kundendaten verpflichtet werden.\n\nEntscheidend ist dabei ein häufiges Missverständnis: Auch ein Rechenzentrum in Frankfurt oder Berlin schützt nicht zwingend vor einem Zugriff, wenn der Anbieter ein US-Unternehmen ist. Ein Serverstandort innerhalb der EU ist datenschutzrechtlich wertvoll, hebt die Reichweite des CLOUD Act aber nicht automatisch auf.",
        "bullets": [
          "Betroffen sind unter anderem gängige Dienste wie Microsoft 365, Google Workspace und große Public-Cloud-Plattformen.",
          "Auch deutsche Tochtergesellschaften oder EU-Rechenzentren von US-Konzernen können in den Anwendungsbereich fallen.",
          "Relevant ist die Frage für nahezu jede Branche, besonders aber für Unternehmen mit sensiblen Personen-, Gesundheits- oder Geschäftsdaten."
        ]
      },
      {
        "heading": "Der Konflikt mit der DSGVO",
        "body": "Die europäische Datenschutz-Grundverordnung stellt strenge Anforderungen an die Verarbeitung und Weitergabe personenbezogener Daten. Eine Datenherausgabe an eine ausländische Behörde ist nach Artikel 48 DSGVO grundsätzlich nur über anerkannte Rechtshilfeverfahren zulässig, nicht allein auf Grundlage einer ausländischen behördlichen Anordnung.\n\nGenau hier entsteht das Spannungsverhältnis: Der CLOUD Act kann einen US-Anbieter zur Herausgabe verpflichten, während die DSGVO eine solche Weitergabe ohne entsprechendes Verfahren untersagen kann. Unternehmen geraten dadurch potenziell in eine Situation widersprüchlicher Rechtspflichten.",
        "bullets": [
          "Souveränität: Die extraterritoriale Reichweite kann nationale und europäische Kontrollmechanismen unterlaufen.",
          "Rechtsweg: Etablierte internationale Rechtshilfeverfahren können umgangen werden.",
          "Datenschutzgrundsätze: Zweckbindung, Transparenz und Betroffenenrechte lassen sich schwerer durchsetzen.",
          "Verantwortlichkeit: Die datenschutzrechtliche Verantwortung verbleibt beim deutschen Unternehmen als Verantwortlichem im Sinne der DSGVO."
        ]
      },
      {
        "heading": "Welche Daten sind besonders schützenswert?",
        "body": "Nicht alle Daten haben das gleiche Schutzbedürfnis. Für die Risikobewertung lohnt sich eine Einordnung der eigenen Datenbestände. Je sensibler eine Information und je gravierender ein unbefugter Zugriff wäre, desto sorgfältiger sollte die Wahl der Speicherlösung erfolgen.\n\nEine strukturierte Bestandsaufnahme hilft, Prioritäten zu setzen und den Schutzaufwand dort zu konzentrieren, wo er den größten Nutzen bringt. Sie ist zugleich die Grundlage für ein belastbares Datenschutz- und Informationssicherheitskonzept.",
        "bullets": [
          "Personenbezogene Daten von Kundinnen und Kunden, Mitarbeitenden und Bewerbenden.",
          "Besondere Kategorien wie Gesundheits-, Sozial- oder Finanzdaten.",
          "Geschäftsgeheimnisse, Entwicklungsunterlagen und vertrauliche Verträge.",
          "Kommunikationsdaten und E-Mail-Verkehr mit sensiblen Inhalten."
        ]
      },
      {
        "heading": "Wie deutsche Unternehmen ihre Datensouveränität stärken",
        "body": "Der CLOUD Act lässt sich nicht aus der Welt schaffen, sein Risiko aber gezielt steuern. Ein wirksamer Ansatz beginnt mit Transparenz über die eingesetzten Dienste und reicht bis zu technischen und organisatorischen Maßnahmen, die den Zugriff Dritter erschweren oder verhindern.\n\nEine besonders weitreichende Option ist die datensouveräne Speicherung in einer eigenen Infrastruktur, etwa über eine Private Cloud auf NAS-Basis. Liegen Daten auf einem System, das das Unternehmen selbst kontrolliert und das keinem US-Anbieter unterliegt, greift die direkte Reichweite des CLOUD Act nicht. Für sensible Bestände kann dies eine sinnvolle Ergänzung oder Alternative zu reinen Public-Cloud-Diensten sein.\n\nDie datadiorama GmbH unterstützt Unternehmen als IT-Systemhaus bei genau solchen Fragestellungen, etwa beim Aufbau einer Private Cloud bzw. NAS-Lösung. Als Synology Consulting Expert 2026 sowie über die Partnerschaft mit Securepoint im Bereich IT-Sicherheit lassen sich datensouveräne und abgesicherte Architekturen planen und umsetzen.",
        "bullets": [
          "Bestandsaufnahme: Welche Dienste werden genutzt und welchem Recht unterliegen die Anbieter?",
          "Datenklassifizierung: Sensible Daten identifizieren und gezielt absichern.",
          "Verschlüsselung: Ende-zu-Ende- und clientseitige Verschlüsselung, bei der nur das Unternehmen die Schlüssel hält.",
          "Architektur: Private Cloud bzw. NAS für besonders schützenswerte Daten in eigener Kontrolle.",
          "Vertragsgestaltung: Auftragsverarbeitung, Standardvertragsklauseln und Transparenz über Zugriffsmöglichkeiten prüfen."
        ]
      },
      {
        "heading": "Public Cloud, EU-Anbieter oder eigene Infrastruktur?",
        "body": "Pauschal ist keine Variante richtig oder falsch, entscheidend ist der konkrete Anwendungsfall. Public-Cloud-Dienste bieten hohe Verfügbarkeit, Komfort und einen großen Funktionsumfang, unterliegen bei US-Anbietern jedoch potenziell dem CLOUD Act. Europäische Anbieter ohne US-Bezug verringern dieses spezifische Risiko, während eine eigene Infrastruktur die größtmögliche Kontrolle bietet, dafür aber mehr Eigenverantwortung bei Betrieb und Sicherheit erfordert.\n\nIn der Praxis bewährt sich häufig ein hybrider Ansatz: weniger kritische Anwendungen in komfortablen Cloud-Diensten, besonders schützenswerte Daten hingegen in einer selbst kontrollierten Umgebung. Welche Kombination passt, hängt von Schutzbedarf, Compliance-Anforderungen und den betrieblichen Abläufen ab und sollte fachlich begleitet entschieden werden."
      }
    ],
    "faq": [
      {
        "question": "Schützt ein Serverstandort in Deutschland oder der EU vor dem CLOUD Act?",
        "answer": "Nicht zwangsläufig. Maßgeblich ist nicht der physische Speicherort, sondern ob der Anbieter der US-Jurisdiktion unterliegt. Ein US-Konzern kann auch dann zur Herausgabe verpflichtet werden, wenn die Daten in einem Rechenzentrum innerhalb der EU liegen. Ein EU-Standort ist datenschutzrechtlich dennoch wertvoll, hebt die Reichweite des CLOUD Act allein aber nicht auf."
      },
      {
        "question": "Steht der CLOUD Act im Widerspruch zur DSGVO?",
        "answer": "Es besteht ein erhebliches Spannungsverhältnis. Die DSGVO erlaubt eine Datenherausgabe an ausländische Behörden grundsätzlich nur über anerkannte Rechtshilfeverfahren, während der CLOUD Act US-Anbieter direkt verpflichten kann. Dadurch können widersprüchliche Rechtspflichten entstehen, für die das deutsche Unternehmen als Verantwortlicher einstehen muss."
      },
      {
        "question": "Welche konkreten Maßnahmen reduzieren das Risiko?",
        "answer": "Hilfreich sind eine Bestandsaufnahme der genutzten Dienste, die Klassifizierung sensibler Daten, der Einsatz starker Verschlüsselung mit Schlüsselhoheit beim Unternehmen sowie die Speicherung besonders schützenswerter Daten in einer selbst kontrollierten Infrastruktur wie einer Private Cloud bzw. NAS-Lösung."
      },
      {
        "question": "Kann eine eigene Private Cloud bzw. NAS-Lösung sinnvoll sein?",
        "answer": "Für sensible Datenbestände ja. Liegen Daten auf einem System in eigener Kontrolle, das keinem US-Anbieter unterliegt, greift die direkte Reichweite des CLOUD Act nicht. Die datadiorama GmbH unterstützt als IT-Systemhaus und Synology Consulting Expert 2026 beim Aufbau solcher datensouveränen Lösungen sowie beim Thema IT-Sicherheit."
      }
    ]
  },
  // Übertragen von datadiorama.com/was-ist-informationssicherheit (Original vom 12.11.2024, via Webarchiv).
  "was-ist-informationssicherheit": {
    "intro": "In der heutigen digitalen Landschaft sind Unternehmen einer Vielzahl von Cyberbedrohungen ausgesetzt. Um die Integrität, Vertraulichkeit und Verfügbarkeit von Unternehmensdaten zu gewährleisten, ist eine proaktive und umfassende Informationssicherheitsstrategie von entscheidender Bedeutung.",
    "keyTakeaways": [
      "Informationssicherheit schützt Informationen vor unbefugtem Zugriff, Veränderung oder Zerstörung – die drei zentralen Schutzziele sind Vertraulichkeit, Integrität und Verfügbarkeit.",
      "Wirksamer Schutz kombiniert technische Maßnahmen (Verschlüsselung, Firewalls, Intrusion Detection, Backups) mit organisatorischen Maßnahmen (ISMS, Mitarbeiterschulungen, Risikoanalysen).",
      "Zwei Drittel der deutschen Unternehmen fühlen sich von Cyberangriffen bedroht; Angriffe können erhebliche finanzielle Schäden, Reputationsverluste und Wettbewerbsnachteile verursachen.",
      "Verstöße gegen Datenschutzvorschriften wie die DSGVO können hohe Bußgelder nach sich ziehen – unabhängig davon, ob der Vorfall durch Cyberkriminalität oder leichtfertiges Handeln verursacht wurde.",
      "Datenlecks führen häufig zu Meldepflichten, Betriebsunterbrechungen und Umsatzverlusten – Prävention ist deutlich günstiger als die Nachsorge."
    ],
    "sections": [
      {
        "heading": "Informationssicherheit definiert",
        "body": "Informationssicherheit ist ein komplexes Themengebiet, das sich mit dem Schutz von Informationen vor unbefugtem Zugriff, Veränderung oder Zerstörung befasst. Ziel ist es, die Vertraulichkeit, Integrität und Verfügbarkeit von Daten sicherzustellen.\n\nUm dieses Ziel zu erreichen, implementieren wir von Datadiorama in Unternehmen sowohl technische als auch organisatorische Maßnahmen. Technische Schutzmaßnahmen, die von unseren Technikern eingerichtet werden, umfassen unter anderem Verschlüsselungsalgorithmen, Firewalls, Intrusion-Detection-Systeme und regelmäßige Datensicherungen. Organisatorische Maßnahmen wie die Implementierung eines Informationssicherheitsmanagementsystems (ISMS), Schulungen zur Sensibilisierung der Mitarbeiter und die Durchführung von Risikoanalysen ergänzen die technischen Vorkehrungen.\n\nDie Bedeutung der Informationssicherheit ist in der heutigen digitalisierten Welt enorm. Cyberbedrohungen nehmen stetig zu, und zwei Drittel der deutschen Unternehmen fühlen sich von Cyberangriffen bedroht. Solche Angriffe können zu erheblichen finanziellen Schäden, Reputationsverlusten und Wettbewerbsnachteilen führen. Aktuelle Herausforderungen in der Informationssicherheit umfassen unter anderem die zunehmende Komplexität von IT-Infrastrukturen, die wachsende Bedeutung von Cloud Computing und die steigende Anzahl von IoT-Geräten."
      },
      {
        "heading": "Die Schutzziele der Informationssicherheit",
        "body": "Zusammenfassend lässt sich Informationssicherheit in die folgenden Bereiche aufteilen:",
        "bullets": [
          "Vertraulichkeit: Nur autorisierte Personen oder Systeme dürfen auf Informationen zugreifen. Dies wird durch Maßnahmen wie Zugangsbeschränkungen, rollenbasierte Zugriffskontrollen, Verschlüsselung und die Pseudonymisierung personenbezogener Daten gewährleistet.",
          "Integrität: Informationen müssen korrekt, vollständig und unverfälscht sein. Veränderungen dürfen nur von autorisierten Personen vorgenommen werden und müssen nachvollziehbar protokolliert werden. Hierzu dienen digitale Signaturen, Hash-Verfahren und Versionierungssysteme.",
          "Verfügbarkeit: Autorisierte Personen oder Systeme müssen jederzeit oder zu vereinbarten Zeiten Zugriff auf benötigte Informationen haben. Dies setzt eine robuste IT-Infrastruktur, redundante Systeme und umfassende Notfallpläne voraus.",
          "Authentizität: Die eindeutige Identifizierung von Personen oder Systemen stellt sicher, dass nur autorisierte Benutzer auf Systeme und Daten zugreifen können.",
          "Verantwortlichkeit: Die klare Zuordnung von Verantwortlichkeiten für die Informationssicherheit innerhalb einer Organisation."
        ]
      },
      {
        "heading": "Die Bedeutung rechtlicher Aspekte in der Informationssicherheit",
        "body": "Darüber hinaus spielt die rechtliche Compliance eine entscheidende Rolle. Unternehmen sind verpflichtet, zahlreiche Datenschutzgesetze und -vorschriften einzuhalten (z. B. die DSGVO), um Bußgelder und Reputationsschäden zu vermeiden.\n\nDas Ziel unserer IT-Sicherheitsexperten ist es, ein angemessenes Schutzniveau für die Informationen eines Unternehmens zu gewährleisten. Durch den Einsatz von Expertensoftware und die dauerhafte Beobachtung der aktuellen Bedrohungslage sind wir in der Lage, die Daten in Ihrem Unternehmen nachhaltig vor Angriffen – und damit vor finanziellem Schaden – zu schützen."
      },
      {
        "heading": "Die Folgen unzureichender Informationssicherheit",
        "body": "Ein Verstoß oder ein zu lapidarer Umgang mit der Sicherheit von IT-Systemen kann schwerwiegende Folgen haben. Als Erstes wäre hier der Reputationsverlust zu nennen: Wer möchte schon, dass sensible Daten öffentlich im Netz einsehbar sind? Datenlecks können das Vertrauen von Kunden und Geschäftspartnern nachhaltig schädigen und zu einem erheblichen Imageverlust führen.\n\nDer Reputationsverlust zieht oft auch einen finanziellen Schaden nach sich: Das Image muss wieder aufgebaut werden, und die Kosten für die Wiederherstellung von Daten, Entschädigungszahlungen und eventuell anfallende Bußgelder können Unternehmen erheblich belasten. Ein Datenleck bringt in fast allen Fällen auch eine Meldung an die zuständige Datenschutzbehörde und damit einen DSGVO-Verstoß mit sich. Unternehmen unterliegen zahlreichen Datenschutzgesetzen und -vorschriften, deren Nichteinhaltung empfindliche Strafen nach sich ziehen kann. Dabei macht der Gesetzgeber keinen Unterschied, ob der Informationsverlust durch mutwillige Zerstörung wie Cyberkriminalität oder durch leichtfertiges Handeln eines Mitarbeitenden verursacht wurde.\n\nKommt es durch einen Cyberangriff oder ein Datenleck zum Verlust von Informationen, kann dies zudem eine Betriebsunterbrechung nach sich ziehen, bis die Informationssicherheit wiederhergestellt ist. Diese Betriebsunterbrechung kann zu Umsatzverlusten führen."
      },
      {
        "heading": "Datadiorama: Ihr Partner für ganzheitliche Informationssicherheit",
        "body": "Als erfahrener IT-Security-Dienstleister unterstützt Datadiorama Unternehmen dabei, ihre Informationssicherheit zu optimieren. Wir bieten maßgeschneiderte Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind. In umfassenden Sicherheitsanalysen identifizieren und bewerten wir Ihre individuellen Sicherheitsrisiken und implementieren passende Sicherheitslösungen. Dabei setzen wir auf moderne Technologien wie Intrusion-Detection-Systeme, Firewalls und Verschlüsselung. Wir schulen Ihre Mitarbeiter in den Bereichen IT-Sicherheit und Datenschutz und entwickeln einen individuellen Notfallplan für Ihr Unternehmen, um im Falle eines Sicherheitsvorfalls schnell und effektiv reagieren zu können.\n\nDie Vorteile einer Zusammenarbeit mit Datadiorama:",
        "bullets": [
          "Expertise: Unsere erfahrenen IT-Security-Experten verfügen über tiefgreifendes Fachwissen.",
          "Individualität: Wir passen unsere Lösungen an Ihre spezifischen Anforderungen an.",
          "Zuverlässigkeit: Wir sind Ihr vertrauenswürdiger Partner für alle Fragen rund um Informationssicherheit."
        ]
      }
    ],
    "faq": [
      {
        "question": "Was versteht man unter Informationssicherheit?",
        "answer": "Informationssicherheit befasst sich mit dem Schutz von Informationen vor unbefugtem Zugriff, Veränderung oder Zerstörung. Ziel ist es, die Vertraulichkeit, Integrität und Verfügbarkeit von Daten sicherzustellen – ergänzt um Aspekte wie Authentizität und Verantwortlichkeit."
      },
      {
        "question": "Welche Maßnahmen gehören zur Informationssicherheit?",
        "answer": "Eine Kombination aus technischen Maßnahmen – etwa Verschlüsselung, Firewalls, Intrusion-Detection-Systeme und regelmäßige Datensicherungen – und organisatorischen Maßnahmen wie einem Informationssicherheitsmanagementsystem (ISMS), Mitarbeiterschulungen und Risikoanalysen."
      },
      {
        "question": "Welche Folgen kann unzureichende Informationssicherheit haben?",
        "answer": "Datenlecks können zu Reputationsverlust, finanziellen Schäden, DSGVO-Bußgeldern und Betriebsunterbrechungen mit Umsatzverlusten führen. Der Gesetzgeber unterscheidet dabei nicht, ob der Vorfall durch Cyberkriminalität oder leichtfertiges Handeln eines Mitarbeitenden verursacht wurde."
      },
      {
        "question": "Warum ist Informationssicherheit gerade jetzt so wichtig?",
        "answer": "Cyberbedrohungen nehmen stetig zu – zwei Drittel der deutschen Unternehmen fühlen sich bedroht. Gleichzeitig steigt die Komplexität von IT-Infrastrukturen durch Cloud Computing und die wachsende Anzahl von IoT-Geräten, was den Schutzbedarf zusätzlich erhöht."
      }
    ]
  },
  // Übertragen von datadiorama.com/dokumentenmanagement (Original vom 30.05.2024, via Webarchiv).
  "dokumentenmanagement": {
    "intro": "In der heutigen digitalen Welt generieren und verwalten Unternehmen eine Vielzahl von Dokumenten: Verträge, Rechnungen, Kundenakten, Marketingmaterialien – die Liste ist lang. Doch wie können Unternehmen diese Flut an Dokumenten effizient verwalten und gleichzeitig die Sicherheit und Integrität der Daten gewährleisten? Die Antwort liegt im Dokumentenmanagement.",
    "keyTakeaways": [
      "Dokumentenmanagement (DMS) ist der systematische Prozess der Erstellung, Ablage, Speicherung, Suche und Nutzung von Dokumenten.",
      "Ein DMS steigert die Effizienz, verbessert die Zusammenarbeit, mindert Risiken wie Datenverlust und hilft bei der Einhaltung von Compliance-Vorschriften wie der DSGVO.",
      "Kernfunktionen sind Dokumentenerfassung, revisionssichere Archivierung, Verwaltung mit Versionierung, Metadaten-Suche und Workflow-Automatisierung.",
      "Bekannte Systeme sind Microsoft SharePoint, Docuware, M-Files, Alfresco und OpenKM – die Wahl richtet sich nach Anforderungen und Budget.",
      "Unsere favorisierte Lösung ist Microsoft SharePoint mit Dokumentenverwaltung, Teamwebsites, Zusammenarbeitstools und Workflow-Automatisierung."
    ],
    "sections": [
      {
        "heading": "Was ist Dokumentenmanagement?",
        "body": "Dokumentenmanagement, kurz DMS, ist der systematische Prozess der Erstellung, Ablage, Speicherung, Suche und Nutzung von Dokumenten.\n\nZiel des Dokumentenmanagements ist es, die Effizienz und Transparenz bei der Bearbeitung von Dokumenten zu verbessern und gleichzeitig die Sicherheit und Integrität der Daten zu gewährleisten."
      },
      {
        "heading": "Warum ist Dokumentenmanagement wichtig?",
        "body": "Dokumentenmanagement ist aus mehreren Gründen wichtig:",
        "bullets": [
          "Effizienzsteigerung: Durch die digitale Verwaltung von Dokumenten können Unternehmen Zeit und Geld sparen. Dokumente können schneller gefunden, bearbeitet und archiviert werden.",
          "Verbesserte Zusammenarbeit: Mitarbeitende können Dokumente gemeinsam bearbeiten und nutzen – das verbessert die Zusammenarbeit und steigert die Produktivität.",
          "Risikominderung: Die sichere und revisionssichere Speicherung von Dokumenten verringert das Risiko von Datenverlust und -diebstahl.",
          "Compliance: Dokumentenmanagement hilft Unternehmen, Vorschriften wie DSGVO und Sarbanes-Oxley einzuhalten."
        ]
      },
      {
        "heading": "Wie funktioniert Dokumentenmanagement?",
        "body": "Dokumentenmanagement-Systeme (DMS) unterstützen Unternehmen bei der digitalen Verwaltung ihrer Dokumente. Sie bieten Funktionen wie:",
        "bullets": [
          "Dokumentenerfassung: Dokumente können digitalisiert und in das DMS eingescannt oder importiert werden.",
          "Dokumentenarchivierung: Dokumente werden sicher und revisionssicher im DMS abgelegt.",
          "Dokumentenverwaltung: Dokumente können im DMS bearbeitet, versioniert und freigegeben werden.",
          "Dokumentensuche: Dokumente können anhand von Metadaten schnell und einfach gefunden werden.",
          "Workflow-Automatisierung: Dokumentenprozesse können automatisiert werden, z. B. die Genehmigung von Rechnungen oder die Freigabe von Marketingmaterialien."
        ]
      },
      {
        "heading": "Welche Vorteile bietet ein Dokumentenmanagement-System?",
        "body": "Ein Dokumentenmanagement-System bietet Unternehmen eine Reihe von Vorteilen:",
        "bullets": [
          "Effizienzsteigerung: Ein DMS kann die Bearbeitung von Dokumenten um bis zu 80 % beschleunigen.",
          "Verbesserte Zusammenarbeit: Ein DMS ermöglicht die gemeinsame Bearbeitung von Dokumenten und verbessert die Kommunikation zwischen Mitarbeitenden.",
          "Risikominderung: Ein DMS kann das Risiko von Datenverlust und -diebstahl verringern.",
          "Compliance: Ein DMS unterstützt bei der Einhaltung von Compliance-Vorschriften.",
          "Kostensenkung: Durch die Reduzierung von Papierverbrauch und Druckkosten spart ein DMS Geld."
        ]
      },
      {
        "heading": "Welche Dokumentenmanagement-Systeme gibt es?",
        "body": "Es gibt eine Vielzahl von Dokumentenmanagement-Systemen auf dem Markt, die Unternehmen dabei unterstützen, ihre Dokumente effizient zu organisieren, zu verwalten und auf sie zuzugreifen. Zu den bekanntesten Systemen gehören Microsoft SharePoint, Docuware, M-Files, Alfresco und OpenKM. Diese Systeme bieten Funktionen wie Versionierung, Workflow-Management, Suche und Archivierung, um den Umgang mit Dokumenten zu erleichtern und die Produktivität zu steigern. Unternehmen sollten bei der Auswahl ihre individuellen Anforderungen und ihr Budget berücksichtigen, um das passende System zu finden."
      },
      {
        "heading": "Unsere favorisierte Lösung: Microsoft SharePoint",
        "body": "SharePoint ist eine umfassende Plattform von Microsoft, die Unternehmen dabei unterstützt, effizient zusammenzuarbeiten und Informationen auszutauschen. Die Funktionen umfassen Dokumentenverwaltung, Teamwebsites, Zusammenarbeitstools, Workflow-Automatisierung und Content-Management.\n\nDurch SharePoint können Nutzer nahtlos Inhalte erstellen, organisieren und gemeinsam bearbeiten, sodass Produktivität und Effizienz im Unternehmen gesteigert werden. Die Plattform ermöglicht auch die Einrichtung von Teamwebsites, auf denen Teammitglieder Informationen teilen und effektiv zusammenarbeiten können. Mit den Collaboration-Tools können Nutzer gemeinsam an Dokumenten arbeiten, Diskussionen führen, Aufgaben verwalten und Kalender synchronisieren. Darüber hinaus bietet SharePoint Funktionen zur Automatisierung von Arbeitsabläufen, wie Genehmigungsprozesse, um repetitive Aufgaben zu vereinfachen. Die Content-Management-Funktion unterstützt die Erstellung und Verwaltung von Inhalten, einschließlich Webseiten, Blogs und Wikis.\n\nKurz zusammengefasst bietet das Dokumentenmanagement-System von Microsoft folgende Vorteile:",
        "bullets": [
          "Dokumentenverwaltung: Benutzer können Dokumente speichern, organisieren und gemeinsam bearbeiten.",
          "Teamwebsites: SharePoint ermöglicht die Einrichtung von Teamwebsites, auf denen Teammitglieder Informationen und Ressourcen teilen können.",
          "Zusammenarbeitstools: Nutzer können gemeinsam an Dokumenten arbeiten, Diskussionen führen, Aufgaben verwalten und Kalender synchronisieren.",
          "Workflow-Automatisierung: SharePoint bietet Funktionen zur Automatisierung von Arbeitsabläufen, etwa Genehmigungsprozesse.",
          "Content-Management: Die Plattform unterstützt die Erstellung und Verwaltung von Inhalten, einschließlich Webseiten, Blogs und Wikis.",
          "Business Intelligence: SharePoint bietet Funktionen zur Beschaffung, Analyse und Visualisierung von Unternehmensdaten."
        ]
      },
      {
        "heading": "Fazit",
        "body": "Dokumentenmanagement ist für Unternehmen jeder Größe wichtig. Durch die digitale Verwaltung von Dokumenten können Unternehmen die Effizienz und Transparenz bei der Bearbeitung von Dokumenten verbessern, die Sicherheit und Integrität der Daten gewährleisten und Compliance-Vorschriften einhalten."
      }
    ],
    "faq": [
      {
        "question": "Was ist ein Dokumentenmanagement-System (DMS)?",
        "answer": "Ein DMS unterstützt Unternehmen bei der digitalen Verwaltung ihrer Dokumente – vom Erfassen und revisionssicheren Archivieren über Versionierung und Freigabe bis zur Metadaten-Suche und Workflow-Automatisierung."
      },
      {
        "question": "Welche Vorteile bringt ein DMS?",
        "answer": "Ein DMS kann die Bearbeitung von Dokumenten um bis zu 80 % beschleunigen, verbessert die Zusammenarbeit, verringert das Risiko von Datenverlust und -diebstahl, hilft bei der Einhaltung von Compliance-Vorschriften und senkt Kosten durch weniger Papier und Druck."
      },
      {
        "question": "Welche DMS-Lösungen gibt es am Markt?",
        "answer": "Zu den bekanntesten Systemen gehören Microsoft SharePoint, Docuware, M-Files, Alfresco und OpenKM. Bei der Auswahl sollten die individuellen Anforderungen und das Budget berücksichtigt werden."
      },
      {
        "question": "Warum wird SharePoint als Lösung empfohlen?",
        "answer": "SharePoint vereint Dokumentenverwaltung, Teamwebsites, Zusammenarbeitstools, Workflow-Automatisierung, Content-Management und Business-Intelligence-Funktionen in einer Plattform und ist eng in die Microsoft-Welt integriert."
      }
    ]
  },
  // Übertragen von datadiorama.com/e-mail-archivierung (Original vom 30.05.2024, via Webarchiv).
  "e-mail-archivierung": {
    "intro": "In der heutigen digitalen Welt ist die E-Mail-Kommunikation unverzichtbar geworden. Unternehmen nutzen E-Mails für den Austausch mit Kunden, Partnern und Mitarbeitenden – pro Tag werden weltweit Milliarden von E-Mails versendet und empfangen. Unternehmen haben dabei eine sogenannte Archivierungspflicht: Sie müssen E-Mails ordnungsgemäß und unter Beachtung bestimmter Aufbewahrungsfristen archivieren.",
    "keyTakeaways": [
      "E-Mail-Archivierung ist die langfristige, revisionssichere und verlustfreie Ablage von E-Mails in einem manipulationssicheren Archivsystem.",
      "GoBD und HGB schreiben die revisionssichere Archivierung geschäftsrelevanter E-Mails in Deutschland gesetzlich vor.",
      "Archivierung entlastet das aktive Postfach, verbessert die Server-Performance und schützt E-Mails vor Verlust.",
      "Gängige Lösungen sind Microsoft Exchange Online Archiving (eng in Microsoft 365 integriert) und Google Workspace (in die Google-Oberfläche integriert).",
      "Moderne Lösungen bieten zusätzlich Verschlüsselung, Zugriffskontrolle, Komprimierung und Unterstützung bei Compliance-Vorschriften wie der DSGVO."
    ],
    "sections": [
      {
        "heading": "Was ist E-Mail-Archivierung?",
        "body": "E-Mail-Archivierung ist die langfristige, revisionssichere und verlustfreie Ablage von E-Mails. Dabei werden E-Mails aus dem aktiven Postfach in ein Archivsystem verschoben, wo sie manipulationssicher und immer abrufbereit aufbewahrt werden. Moderne E-Mail-Archivierungslösungen bieten dabei weit mehr als die reine Ablage: Sie ermöglichen eine effiziente Suche und Wiederherstellung von E-Mails, die Verwaltung von Zugriffsrechten und die Einhaltung von Compliance-Vorschriften. Im Fokus steht also nicht nur die rechtssichere Aufbewahrung, sondern auch die möglichst effiziente Suche nach alten Mails."
      },
      {
        "heading": "Warum ist E-Mail-Archivierung wichtig?",
        "body": "Rechtliche Vorgaben: Unternehmen sind in Deutschland und vielen anderen Ländern gesetzlich verpflichtet, ihre E-Mails für einen bestimmten Zeitraum aufzubewahren. Die GoBD (Grundsätze ordnungsgemäßer Buchführung) und das HGB (Handelsgesetzbuch) schreiben die revisionssichere Archivierung von geschäftsrelevanten E-Mails vor.\n\nRevisionssicherheit: E-Mails sind wichtige Beweismittel im Falle von Rechtsstreitigkeiten oder behördlichen Prüfungen. Durch die revisionssichere Archivierung können Unternehmen sicherstellen, dass ihre E-Mails unverändert und manipulationssicher aufbewahrt werden.\n\nEffizienzsteigerung: Durch die Archivierung wird das aktive Postfach entlastet und die Performance des E-Mail-Servers verbessert. Außerdem können archivierte E-Mails einfach und schnell durchsucht werden, sodass wichtige Informationen schnell wiedergefunden werden.\n\nVerlustschutz: E-Mails können versehentlich gelöscht werden oder durch einen Systemfehler verloren gehen. Durch die Archivierung sind sie vor Verlust geschützt.\n\nWeitere Vorteile:",
        "bullets": [
          "Verbesserte Zusammenarbeit: Mitarbeitende können schnell und einfach auf Informationen aus früheren Projekten und Gesprächen zugreifen – das verbessert die Zusammenarbeit und steigert die Produktivität.",
          "Geringere Speicherkosten: Moderne Archivierungslösungen komprimieren E-Mails vor der Ablage. Das reduziert den Speicherbedarf erheblich und senkt die Speicherkosten.",
          "Erhöhte Datensicherheit: Archivierungslösungen bieten zusätzliche Sicherheitsfunktionen wie Verschlüsselung und Zugriffskontrolle, die E-Mails vor unbefugtem Zugriff schützen."
        ]
      },
      {
        "heading": "Wie funktioniert E-Mail-Archivierung?",
        "body": "Es gibt verschiedene Möglichkeiten, E-Mails in elektronischer Form zu archivieren. Die gängigste Methode ist die Verwendung einer dedizierten E-Mail-Archivierungslösung. Diese Lösungen bieten Funktionen wie die automatische Archivierung von E-Mails, die revisionssichere Aufbewahrung und die einfache Suche nach archivierten Nachrichten.\n\nModerne E-Mail-Archivierungslösungen können in die vorhandene IT-Infrastruktur eines Unternehmens integriert werden. Sie arbeiten mit gängigen E-Mail-Servern und bieten Schnittstellen zu anderen Geschäftssystemen, z. B. CRM- und ERP-Systemen."
      },
      {
        "heading": "Welche E-Mail-Archivierungslösungen gibt es?",
        "body": "Es gibt mehrere E-Mail-Archivierungslösungen auf dem Markt, von einfachen Cloud-basierten Diensten bis hin zu umfassenden Enterprise-Lösungen. Eine der beliebtesten ist die Lösung von Microsoft Exchange, welche die umfangreichen E-Mail-Funktionen von Microsoft um eine E-Mail-Archivierung erweitert. Google bietet mit Google Workspace ebenfalls eine effiziente Methode für die automatische Archivierung von E-Mails, die Möglichkeit zur Suche und Wiederherstellung archivierter Nachrichten sowie die Einhaltung gesetzlicher Vorschriften zur Datenaufbewahrung."
      },
      {
        "heading": "Vorteile von Microsoft Exchange in der E-Mail-Archivierung",
        "body": "Die Microsoft Exchange Online Archivierung ist eng mit Microsoft 365 integriert und bietet Nutzern von MS Exchange eine native Erfahrung in der gewohnten Oberfläche.",
        "bullets": [
          "Integrierte Archivierungsfunktion: E-Mails werden automatisch in Archiven gespeichert, um Platz auf dem Server zu sparen und die Leistung zu verbessern.",
          "Leicht zu durchsuchen: Leistungsstarke Suchfunktionen ermöglichen es, schnell und einfach nach bestimmten E-Mails zu suchen. Archivieren lassen sich Exchange-Postfächer, öffentliche Ordner, Teams-Nachrichten und OneDrive for Business.",
          "Sicherheit: Eine Reihe von Sicherheitsfeatures schützt archivierte E-Mails vor unbefugtem Zugriff. Die E-Mails werden DSGVO-konform an einem deutschen Serverstandort gehostet.",
          "Compliance: Mit Exchange lassen sich die Vorschriften der Aufbewahrungsfristen einhalten, sodass archivierte E-Mails den gesetzlichen Anforderungen entsprechen.",
          "Skalierbarkeit: Exchange ist sehr gut skalierbar und kann problemlos an die Anforderungen von Unternehmen jeder Größe angepasst werden."
        ]
      },
      {
        "heading": "Vorteile von Google Workspace in der E-Mail-Archivierung",
        "body": "Google Workspace ist in die bekannte Google-Oberfläche integriert, während Microsoft Exchange Online Archiving eine separate Add-on-Lösung ist. Google Workspace bietet zudem einige erweiterte Funktionen, wie die Möglichkeit, Daten aus sozialen Medien zu archivieren, und die Integration mit anderen Google-Diensten.",
        "bullets": [
          "Einfache Verwaltung und Durchsuchbarkeit von Gmail, Google Drive und Kalender: Google Workspace ermöglicht die Archivierung vieler integrierter Dienste.",
          "Kontrolle über E-Mail-Daten: Unternehmen behalten die Kontrolle über ihre E-Mail-Daten und stellen sicher, dass wichtige Informationen nicht verloren gehen.",
          "Compliance und gesetzliche Anforderungen: Google Workspace ermöglicht die Einhaltung zahlreicher Compliance-Standards, einschließlich HIPAA, HITECH, Sarbanes-Oxley und DSGVO.",
          "Schutz vor Datenverlust: Datenverschlüsselung, Zugriffskontrollen und Überwachungsprotokolle sichern die archivierten Daten."
        ]
      },
      {
        "heading": "Welche Vorteile bietet eine E-Mail-Archivierungslösung?",
        "body": "Eine E-Mail-Archivierungslösung bietet Unternehmen eine Reihe von Vorteilen:",
        "bullets": [
          "Rechtssicherheit: Alle E-Mails werden revisionssicher und konform mit den gesetzlichen Vorgaben archiviert.",
          "Effizienzsteigerung: Das aktive Postfach wird entlastet und die Performance des E-Mail-Servers verbessert.",
          "Verlustschutz: E-Mails sind vor Verlust geschützt.",
          "Komfort: Eine komfortable und intuitive Oberfläche erleichtert die Suche nach archivierten E-Mails.",
          "Skalierbarkeit: Die Lösung kann an die individuellen Bedürfnisse des Unternehmens angepasst werden.",
          "Sicherheit: Zusätzliche Funktionen wie Verschlüsselung und Zugriffskontrolle schützen E-Mails vor unbefugtem Zugriff.",
          "Compliance: Die Lösung unterstützt bei der Einhaltung von Vorschriften wie DSGVO und PCI DSS."
        ]
      },
      {
        "heading": "Fazit",
        "body": "Die E-Mail-Archivierung ist für Unternehmen unverzichtbar, um rechtliche Anforderungen zu erfüllen, Datenverluste zu vermeiden und die Produktivität zu steigern. Durch die Archivierung können E-Mails effizient gespeichert, gesichert und wiederhergestellt werden. Das trägt dazu bei, den Überblick über die Kommunikation im Unternehmen zu behalten und die Compliance mit gesetzlichen Vorschriften sicherzustellen. Darüber hinaus ermöglicht die E-Mail-Archivierung eine verbesserte Suche und Analyse von Informationen, was die Entscheidungsfindung und die Zusammenarbeit erleichtert. Insgesamt ist die E-Mail-Archivierung daher ein wichtiger Bestandteil der IT-Strategie eines jeden Unternehmens.\n\nGern unterstützen wir Sie bei der Auswahl des passenden Systems."
      }
    ],
    "faq": [
      {
        "question": "Sind Unternehmen zur E-Mail-Archivierung verpflichtet?",
        "answer": "Ja. In Deutschland schreiben die GoBD (Grundsätze ordnungsgemäßer Buchführung) und das HGB (Handelsgesetzbuch) die revisionssichere Archivierung geschäftsrelevanter E-Mails unter Beachtung bestimmter Aufbewahrungsfristen vor."
      },
      {
        "question": "Was bedeutet revisionssichere Archivierung?",
        "answer": "E-Mails werden unverändert und manipulationssicher aufbewahrt und sind jederzeit abrufbereit. So können sie im Falle von Rechtsstreitigkeiten oder behördlichen Prüfungen als Beweismittel dienen."
      },
      {
        "question": "Welche Archivierungslösungen sind empfehlenswert?",
        "answer": "Zu den beliebtesten Lösungen zählen Microsoft Exchange Online Archiving, das eng in Microsoft 365 integriert ist und DSGVO-konform an einem deutschen Serverstandort hostet, sowie Google Workspace, das in die bekannte Google-Oberfläche integriert ist und zahlreiche Compliance-Standards unterstützt."
      },
      {
        "question": "Welche Vorteile bringt die Archivierung neben der Rechtssicherheit?",
        "answer": "Sie entlastet das aktive Postfach, verbessert die Server-Performance, schützt vor Datenverlust, senkt durch Komprimierung die Speicherkosten und erleichtert mit effizienter Suche den Zugriff auf Informationen aus früheren Projekten."
      }
    ]
  },
  // Übertragen von datadiorama.com/unifi-ubiquiti (Original vom 03.05.2024, via Webarchiv).
  "unifi-ubiquiti": {
    "intro": "Suchen Sie nach einer leistungsstarken, skalierbaren und zuverlässigen WLAN-Lösung für Ihr Unternehmen? Dann ist UniFi von Ubiquiti eine ausgezeichnete Wahl. In Kombination mit der Expertise von Datadiorama, Ihrem zertifizierten UniFi-Partner in der Region, stellen wir Netzwerkverbindungen auf höchstem Niveau her – damit Sie immer mit Kunden und Mitarbeitern in Verbindung bleiben und schnelle, zuverlässige Netzwerke bereitstellen können.",
    "keyTakeaways": [
      "UniFi Ubiquiti besteht aus zwei Teilbereichen: hochwertiger Netzwerk-Hardware (Router, Switches, Access Points) und der Software zur zentralen Verwaltung aller Geräte über eine Weboberfläche.",
      "UniFi Access Points bieten dank moderner WLAN-Technologien wie Wi-Fi 7, Long Range und MU-MIMO hohe Geschwindigkeiten und flächendeckende Abdeckung – vom kleinen Hotel bis zum weitläufigen Bürogebäude.",
      "Das System ist beliebig skalierbar: Weitere UniFi-Geräte lassen sich jederzeit hinzufügen, wenn die Anforderungen wachsen.",
      "Regelmäßige Softwareupdates und umfassende Sicherheitsfunktionen schützen das Netzwerk vor unbefugtem Zugriff.",
      "Als zertifizierter UniFi-Partner übernimmt Datadiorama Beratung, Installation, Wartung und Troubleshooting aus einer Hand."
    ],
    "sections": [
      {
        "heading": "Was ist UniFi Ubiquiti?",
        "body": "Das UniFi-Netzwerksystem von Ubiquiti umfasst zwei Teilbereiche: die Hardware und die Software. Die Hardware umfasst Access Points, Switches, Router und andere Netzwerkgeräte, die höchste Qualitätsstandards erfüllen. Die Software, der UniFi Controller, ermöglicht die zentrale Verwaltung aller UniFi-Geräte über eine Weboberfläche."
      },
      {
        "heading": "UniFi Router: Leistungsstarkes Gateway für Ihr Netzwerk",
        "body": "UniFi Router bilden das zentrale Gateway Ihres UniFi-WLAN-Netzwerks und sorgen für eine zuverlässige und performante Datenübertragung zwischen den Access Points im Netzwerk und dem Internet. Sie bieten umfassende Routing-Funktionen und ermöglichen die Anbindung Ihres Netzwerks an verschiedene Internetverbindungen, z. B. DSL, Kabel oder Glasfaser."
      },
      {
        "heading": "UniFi Switches: Zuverlässige Datenübertragung in Ihrem Netzwerk",
        "body": "UniFi Switches sind in verschiedenen Ausführungen mit unterschiedlicher Portanzahl und PoE-Unterstützung erhältlich, sodass wir die passende Lösung für Ihre Anforderungen finden können. PoE-fähige UniFi Switches versorgen kompatible Geräte wie Access Points direkt über das Ethernet-Kabel mit Strom, was die Installation vereinfacht und zusätzliche Verkabelung überflüssig macht."
      },
      {
        "heading": "UniFi Access Points: Leistung und Abdeckung für Ihr WLAN",
        "body": "Das Herzstück eines jeden UniFi-WLAN-Netzwerks sind die Access Points. Sie bieten dank modernster WLAN-Technologien wie Wi-Fi 7, Long Range und MU-MIMO eine hervorragende Abdeckung und hohe Geschwindigkeiten. Damit sorgen Sie für ein starkes und zuverlässiges WLAN-Signal in Ihrem gesamten Unternehmen – egal ob Sie ein kleines Hotel oder ein weitläufiges Bürogebäude abdecken möchten. UniFi Access Points sind zudem in verschiedenen Ausführungen erhältlich, sodass sich das passende Modell für Ihre individuellen Anforderungen auswählen lässt."
      },
      {
        "heading": "UniFi Software: Intuitive Verwaltung und Kontrolle Ihres WLAN-Netzwerks",
        "body": "Die UniFi Software bildet das Herzstück der Plattform und ermöglicht unseren zertifizierten Experten die Einrichtung, Konfiguration und Überwachung aller UniFi-Geräte über eine Weboberfläche. Damit haben wir die vollständige Kontrolle über Ihr WLAN-Netzwerk und konfigurieren es nach Ihren Vorstellungen und Anforderungen.\n\nDie UniFi Software umfasst:",
        "bullets": [
          "UniFi Controller: Die zentrale Management-Software ermöglicht die Einrichtung, Konfiguration und Überwachung aller UniFi-Geräte über eine Weboberfläche.",
          "UniFi Network Application: Sie bietet erweiterte Funktionen für die Netzwerkverwaltung, einschließlich detaillierter Netzwerkstatistiken, Traffic-Analyse und Geräte-Troubleshooting.",
          "UniFi Protect: Ein optionales Videoüberwachungssystem, das nahtlos in das UniFi-Ökosystem integriert werden kann."
        ]
      },
      {
        "heading": "Die Vorteile der UniFi Software",
        "body": "Zu den Vorteilen der UniFi Software zählen:",
        "bullets": [
          "Umfassende Funktionen: Die UniFi Software bietet eine Vielzahl von Funktionen für die Einrichtung, Konfiguration und Überwachung Ihres UniFi-Netzwerks.",
          "Zentrale Verwaltung: Alle UniFi-Geräte lassen sich zentral von einem Ort aus verwalten.",
          "Regelmäßige Updates: Über die UniFi Software versehen wir Ihre Geräte regelmäßig mit wichtigen Sicherheitsupdates."
        ]
      },
      {
        "heading": "Warum UniFi Ubiquiti wählen?",
        "body": "UniFi Ubiquiti bietet eine Reihe von Vorteilen, die es zur idealen Lösung für Geschäftskunden machen:",
        "bullets": [
          "Leistung: Mit UniFi bauen wir ein leistungsstarkes WLAN-Netzwerk, das auch hohe Anforderungen problemlos bewältigt. Die Access Points bieten hervorragende Abdeckung und hohe Geschwindigkeiten, sodass alle Geräte gleichzeitig ohne Leistungseinbußen genutzt werden können.",
          "Skalierbarkeit: Ob kleines oder großes Unternehmensnetzwerk – UniFi lässt sich problemlos skalieren. Weitere Geräte können jederzeit hinzugefügt werden, um das Netzwerk an wachsende Anforderungen anzupassen.",
          "Flexibilität: Sie haben die Freiheit, Ihr WLAN-Netzwerk genau an Ihre Bedürfnisse anzupassen – verschiedene Netzwerktypen, Gastnetzwerke, Bandbreitenlimits und vieles mehr.",
          "Sicherheit: Umfassende Sicherheitsfunktionen schützen Ihr WLAN-Netzwerk vor unbefugtem Zugriff. Regelmäßige Softwareupdates halten das Netzwerk auf dem neuesten Stand der Sicherheitstechnik."
        ]
      },
      {
        "heading": "UniFi mit Datadiorama: Ihr UniFi-Experte in der Region",
        "body": "Datadiorama ist Ihr zertifizierter UniFi-Partner in der Region. Unsere erfahrenen Techniker richten Ihnen ein Netzwerk ein, das genau Ihren Anforderungen entspricht. Wir nehmen gezielt Ihren Bedarf auf und konfigurieren das passende Paket für Ihr Unternehmen. Nach der Installation der Hard- und Software stehen wir Ihnen für laufende Wartung und kurzfristiges Troubleshooting zur Seite.\n\nMit Datadiorama profitieren Sie von:",
        "bullets": [
          "Umfassender Expertise: Unsere Techniker verfügen über umfassendes Wissen und Erfahrung mit UniFi-Produkten und -Systemen und empfehlen Ihnen die optimale Lösung für Ihre Anforderungen.",
          "Individueller Beratung: Wir nehmen uns Zeit, Ihre Bedürfnisse und Anforderungen genau zu verstehen, und erstellen eine maßgeschneiderte UniFi-Lösung.",
          "Schneller und zuverlässiger Installation: Unsere Techniker installieren Ihr UniFi-Netzwerk schnell, zuverlässig und professionell.",
          "Kompetenter Wartung und Support: Wir betreuen Ihr UniFi-Netzwerk laufend, damit Sie sich jederzeit auf eine optimale Leistung verlassen können."
        ]
      }
    ],
    "faq": [
      {
        "question": "Was ist UniFi Ubiquiti?",
        "answer": "UniFi ist das Netzwerksystem des Herstellers Ubiquiti. Es besteht aus hochwertiger Hardware (Router, Switches, Access Points) und einer Software, mit der sich alle Geräte zentral über eine Weboberfläche einrichten, konfigurieren und überwachen lassen."
      },
      {
        "question": "Für welche Unternehmen eignet sich UniFi?",
        "answer": "UniFi eignet sich für kleine wie große Umgebungen – vom kleinen Hotel bis zum weitläufigen Bürogebäude. Das System ist beliebig skalierbar: Weitere Geräte lassen sich jederzeit hinzufügen, wenn die Anforderungen wachsen."
      },
      {
        "question": "Wie sicher ist ein UniFi-Netzwerk?",
        "answer": "UniFi bietet umfassende Sicherheitsfunktionen zum Schutz vor unbefugtem Zugriff. Über die zentrale Software werden die Geräte regelmäßig mit wichtigen Sicherheitsupdates versorgt, sodass das Netzwerk auf dem neuesten Stand der Sicherheitstechnik bleibt."
      },
      {
        "question": "Welche Leistungen übernimmt Datadiorama rund um UniFi?",
        "answer": "Als zertifizierter UniFi-Partner übernehmen wir die Bedarfsaufnahme, die individuelle Beratung, die Installation von Hard- und Software sowie die laufende Wartung und kurzfristiges Troubleshooting."
      }
    ]
  },
  // Übertragen von datadiorama.com/edge-computing (Original vom 13.11.2023, via Webarchiv).
  "edge-computing": {
    "intro": "Von Smartphones bis zu vernetzten Haushaltsgeräten – in unserer digitalisierten Welt sind Daten allgegenwärtig. Doch wie kann diese Datenflut effizient verwaltet werden? Edge Computing spielt dabei eine Schlüsselrolle: Statt die Daten in entfernte Cloud-Rechenzentren zu verschieben, verarbeitet diese Technologie sie in Echtzeit – direkt dort, wo sie entstehen, auf den jeweiligen Geräten. Cloud-Technologien werden weiterhin eine wichtige Rolle spielen, doch Edge Computing markiert durch schnellere und effizientere Verarbeitung den nächsten Schritt in der Evolution der Datenverarbeitung.",
    "keyTakeaways": [
      "Edge Computing verarbeitet Daten direkt am Entstehungsort – das verkürzt Reaktionszeiten, entlastet das Netzwerk und stärkt den Datenschutz.",
      "Herausforderungen sind Skalierbarkeit, Sicherheit, Interoperabilität, Geräte-Management und Datenintegrität.",
      "Eingesetzt wird die Technologie unter anderem beim autonomen Fahren, in Smart Cities, in der Telemedizin und in der Fertigungsindustrie.",
      "Auch KMU profitieren: von schnellerer Datenverarbeitung bis zur leichteren Erfüllung von DSGVO-Anforderungen durch lokale Datenverarbeitung.",
      "5G, KI auf Edge-Geräten und die Edge-Cloud-Integration werden das Potenzial der Technologie weiter steigern."
    ],
    "sections": [
      {
        "heading": "Welche Vorteile hat Edge Computing?",
        "body": "Da die Daten direkt an ihrem Entstehungsort verarbeitet werden, wird die Übertragungszeit zu weit entfernten Rechenzentren minimiert, wodurch sich die Reaktionszeiten beschleunigen. Zudem wird das Netzwerk entlastet, was insbesondere bei einer eingeschränkten Internetanbindung von Vorteil ist.\n\nEin weiterer Vorteil ergibt sich aus einem gesteigerten Datenschutz und einer erhöhten Sicherheit: Indem Daten lokal auf dem Gerät bearbeitet und gespeichert werden, minimiert sich das Risiko, dass sie beim Transfer zu zentralen Servern beeinträchtigt werden. Und dank Edge Computing können Geräte Entscheidungen in Echtzeit treffen, ohne auf das Feedback eines entfernten Servers angewiesen zu sein. Das steigert die Effizienz in vielen Technologiebereichen."
      },
      {
        "heading": "Gibt es auch Herausforderungen, die Edge Computing mit sich bringt?",
        "body": "Während Edge Computing zweifellos viele Vorteile in Bezug auf Datenverarbeitung und Reaktionszeit bietet, bringt die Technologie auch eine Reihe von Herausforderungen mit sich.\n\nEin zentrales Problem betrifft die Skalierbarkeit. Bei herkömmlichen Cloud-Computing-Modellen können Ressourcen einfach hinzugefügt oder entfernt werden, um die wachsende Zahl von Nutzern und Daten zu bewältigen. Bei Edge-Systemen, die häufig nur über begrenzte Hardwarekapazitäten verfügen, kann diese Skalierung komplexer und kostspieliger sein.\n\nEin weiterer Punkt ist die Sicherheit. Da sich Edge-Geräte an vorderster Front befinden, sind sie leichter physischen und digitalen Angriffen ausgesetzt. Darüber hinaus kann es schwieriger sein, für ein derart fragmentiertes und diversifiziertes System ständige Sicherheitsupdates bereitzustellen.\n\nAuch die Interoperabilität stellt eine große Herausforderung dar. Angesichts der Vielzahl unterschiedlicher Hersteller und Systeme auf dem Markt ist es nicht einfach, eine reibungslose Kommunikation und Integration zwischen den Geräten zu gewährleisten. Eine gemeinsame Norm kann helfen, ist in einer sich schnell entwickelnden Technologielandschaft aber nicht immer möglich.\n\nDaneben ist das Management von Edge-Geräten nicht einfach zu bewerkstelligen: Aufgrund des dezentralen Charakters müssen Unternehmen eine Vielzahl von Geräten überwachen und verwalten – dafür sind robuste Managementwerkzeuge und -verfahren erforderlich. Nicht zu vernachlässigen ist schließlich die Datenintegrität: Die Dezentralisierung von Daten und deren Verarbeitung an verschiedenen Orten birgt das Risiko von Inkonsistenzen, insbesondere bei Netzwerkunterbrechungen oder anderen Störungen."
      },
      {
        "heading": "Wo wird Edge Computing angewendet?",
        "body": "Edge Computing ist weit mehr als nur ein aktueller Trend: Es wird inzwischen in vielen Branchen eingesetzt. Eine der revolutionärsten Anwendungen ist das autonome Fahren. Fahrzeuge müssen in Sekundenbruchteilen Entscheidungen treffen, die auf einer Vielzahl von Sensoren beruhen. Edge Computing ermöglicht es ihnen, Daten in Echtzeit zu analysieren und schnell auf sich ändernde Straßenbedingungen zu reagieren, ohne dass die Kommunikation mit einem entfernten Rechenzentrum verzögert wird.\n\nIntelligente Städte (Smart Cities) profitieren ebenfalls stark von Edge Computing. In vernetzten urbanen Umgebungen überwachen unzählige Sensoren und Geräte Verkehrsmuster und Umweltbedingungen in Echtzeit. Edge Computing ermöglicht eine schnellere und angemessenere Reaktion auf städtische Herausforderungen – sei es intelligentes Verkehrsmanagement, effiziente Abfallwirtschaft oder fortschrittliche Umweltüberwachung.\n\nIm Gesundheitswesen hat Edge Computing insbesondere die Telemedizin entscheidend vorangebracht. Medizinische Geräte sind in der Lage, die Vitalparameter von Patienten in Echtzeit zu überwachen und bei Abweichungen sofort einen Alarm auszulösen. Das ermöglicht ein schnelles Eingreifen, was insbesondere bei kritischen Patienten lebensrettend sein kann.\n\nAuch die Fertigungsindustrie wird durch Edge Computing revolutioniert. Maschinen in modernen Produktionsanlagen sind häufig mit Sensoren zur kontinuierlichen Überwachung von Betriebsdaten ausgestattet. Mit Edge Computing können sie selbstständig und in Echtzeit auf Abweichungen oder Fehler reagieren und so Ausfallzeiten minimieren und die Effizienz maximieren."
      },
      {
        "heading": "Wie kann Ihr Unternehmen konkret von Edge Computing profitieren?",
        "body": "Trotz der mit der Technologie verbundenen Herausforderungen bietet Edge Computing Unternehmen unabhängig von ihrer Größe erhebliche Vorteile – von der Beschleunigung der Datenverarbeitung bis hin zur Verbesserung des Datenschutzes.\n\nKonzerne wie Siemens oder Bosch nutzen Edge Computing bereits, um Daten in Echtzeit direkt an der Fertigungslinie zu verarbeiten. Damit lassen sich nicht nur Produktionsprozesse optimieren, auch der Übergang zur Industrie 4.0 wird erleichtert.\n\nAber auch KMU können von Edge Computing profitieren: ob ein mittelständischer Fertigungsbetrieb, der seine Effizienz steigern möchte, ein Dienstleistungsunternehmen, das seine Kundenerfahrung in Echtzeit verbessern will, ein Einzelhändler, der Kundendaten in Echtzeit analysiert, um ein personalisiertes Einkaufserlebnis zu bieten, oder ein innovatives Start-up im Bereich Internet der Dinge (IoT), das seine Produkte reaktionsfähiger machen möchte – Edge Computing bietet für alle Bereiche maßgeschneiderte Lösungen.\n\nAuch in Sachen Datenschutz ist jedes Unternehmen, das Edge Computing einsetzt, gut aufgestellt: Gerade in Europa, wo die DSGVO strenge Datenschutzstandards vorgibt, sorgt die lokale Datenverarbeitung dafür, dass Datentransfers minimiert werden und Unternehmen Datenschutzanforderungen leichter erfüllen können."
      },
      {
        "heading": "Wie wird Edge Computing die künftige digitale Landschaft verändern?",
        "body": "Edge Computing hat eine vielversprechende Zukunft, und mehrere wichtige Entwicklungen könnten dieses Potenzial noch steigern.\n\nEiner der wichtigsten Faktoren ist die 5G-Technologie. Die schnelle und nahezu verzögerungsfreie Datenübertragung von 5G eröffnet dem Edge Computing völlig neue Möglichkeiten und wird der Wegbereiter für eine Vielzahl neuer Echtzeitanwendungen und -dienste sein, die in der Vergangenheit nur schwer vorstellbar waren.\n\nGleichzeitig ist zu erwarten, dass Edge-Geräte zunehmend über Funktionen der künstlichen Intelligenz und des maschinellen Lernens verfügen werden. Das bedeutet, dass sie nicht nur Daten verarbeiten, sondern auch tiefgreifende Analysen durchführen und Entscheidungen in Echtzeit treffen können.\n\nZudem wird das Konzept der Edge-Cloud-Integration immer wichtiger: Dabei werden die unmittelbaren Vorteile des Edge Computing mit den nahezu unbegrenzten Rechen- und Speicherkapazitäten der Cloud kombiniert. Dieses Zusammenspiel könnte die Möglichkeiten der Datenverarbeitung von Grund auf revolutionieren.\n\nAuch wenn Edge Computing vielen noch unbekannt ist, hat sich die Technologie bereits fest in unserer digitalen Welt etabliert – ob beim alltäglichen Gebrauch des Smartphones oder bei den Entwicklungen zum autonomen Fahren. Es ist daher wahrscheinlich, dass Edge Computing in nicht allzu ferner Zukunft zu einem nahtlosen und allgegenwärtigen Bestandteil unserer digitalen Umgebung wird. Wenn Sie die Technologie effizient, sicher und zukunftsfähig in Ihrem Unternehmen einsetzen möchten, beraten wir Sie gern unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Was ist Edge Computing?",
        "answer": "Edge Computing verarbeitet Daten in Echtzeit direkt dort, wo sie entstehen – auf den jeweiligen Geräten –, statt sie in entfernte Cloud-Rechenzentren zu verschieben. Das beschleunigt Reaktionszeiten und entlastet das Netzwerk."
      },
      {
        "question": "Welche Vorteile bietet Edge Computing beim Datenschutz?",
        "answer": "Da Daten lokal auf dem Gerät verarbeitet und gespeichert werden, minimieren sich Datentransfers und damit das Risiko, dass Daten beim Transfer zu zentralen Servern beeinträchtigt werden. Gerade unter der DSGVO erleichtert das die Erfüllung von Datenschutzanforderungen."
      },
      {
        "question": "Welche Herausforderungen bringt Edge Computing mit sich?",
        "answer": "Zu den zentralen Herausforderungen gehören die Skalierbarkeit begrenzter Hardwarekapazitäten, die Absicherung exponierter Edge-Geräte, die Interoperabilität verschiedener Hersteller und Systeme, das Management vieler dezentraler Geräte sowie die Datenintegrität bei Netzwerkunterbrechungen."
      },
      {
        "question": "Lohnt sich Edge Computing auch für kleine und mittlere Unternehmen?",
        "answer": "Ja. Ob Fertigungsbetrieb, Dienstleister, Einzelhändler oder IoT-Start-up – Edge Computing bietet maßgeschneiderte Lösungen für schnellere Datenverarbeitung, bessere Kundenerfahrung in Echtzeit und einen leichteren Umgang mit Datenschutzanforderungen."
      }
    ]
  },
  // Übertragen von datadiorama.com/blockchain-technologie (Original vom 30.08.2023, via Webarchiv).
  "blockchain-technologie": {
    "intro": "In den letzten Jahren hat ein Begriff in der Finanz- und Technologiewelt für Furore gesorgt: Blockchain. Ursprünglich wurde diese Technologie 2008 als Grundlage für die Kryptowährung Bitcoin entwickelt. Sie hat das Potenzial, nicht nur die Art und Weise zu revolutionieren, wie wir Transaktionen durchführen, sondern auch, wie wir Daten speichern, teilen und verifizieren. Doch was genau steckt hinter dieser Technologie, über die viel gesprochen, die aber selten verstanden wird – und wie kann Ihr Unternehmen davon profitieren?",
    "keyTakeaways": [
      "Die Blockchain ist ein dezentrales, verteiltes digitales Buchführungssystem: Daten werden in einer Kette von Blöcken gespeichert, die nachträglich nicht unbemerkt verändert werden können.",
      "Dezentralität, Transparenz und kryptographische Verfahren machen die Technologie sehr sicher gegen Hacking und Betrug.",
      "Eingesetzt wird die Blockchain bereits im Finanzsektor, Gesundheitswesen, in Lieferketten und im Immobiliensektor.",
      "Nachteile sind Skalierungsprobleme, hoher Stromverbrauch bei Proof-of-Work-Systemen und die komplexe Einführung.",
      "In Deutschland gelten klare rechtliche Vorgaben – von BaFin-Lizenzen über AML/KYC-Pflichten bis zu Datenschutz und Steuerrecht."
    ],
    "sections": [
      {
        "heading": "Was verbirgt sich hinter der Blockchain-Technologie und wie ist sie aufgebaut?",
        "body": "Bei der Blockchain-Technologie handelt es sich im Wesentlichen um ein dezentrales und verteiltes digitales Buchführungssystem. Es ermöglicht die Speicherung von Daten in einer Kette von Blöcken, wobei jeder Block einen spezifischen Code des vorhergehenden Blocks, einen Zeitstempel und die Daten der Transaktion enthält. Diese Struktur stellt sicher, dass Informationen in einem Block nicht geändert werden können, ohne die Daten in allen nachfolgenden Blöcken zu beeinflussen."
      },
      {
        "heading": "Was ist das Besondere an der Blockchain-Technologie?",
        "body": "Die Blockchain-Technologie zeichnet sich durch ihre Dezentralität, Transparenz und Sicherheit aus. Statt auf einer zentralen Kontrollinstanz basiert die Blockchain auf einem Netzwerk von Computern, die als „Nodes“ (Knoten) bezeichnet werden. Jeder Knoten verfügt über eine Kopie der gesamten Blockchain und trägt dazu bei, dass neue Transaktionen bestätigt werden können. Transaktionen, die einmal in der Blockchain gespeichert wurden, sind unveränderlich und für jeden im Netzwerk sichtbar. Durch den Einsatz von kryptographischen Verfahren werden die Daten wirksam vor Manipulation und unbefugtem Zugriff geschützt.\n\nDeshalb gilt die Blockchain-Technologie als sehr sicher gegen Hacking und Betrug."
      },
      {
        "heading": "In welchen Branchen wird die Blockchain-Technologie bereits eingesetzt?",
        "body": "Die Möglichkeit, transparente, unveränderliche und überprüfbare Daten zu liefern, macht sie inzwischen zu einem attraktiven Werkzeug für viele Geschäftsbereiche: im Finanzsektor für Transaktionen und Smart Contracts, im Gesundheitswesen für die sichere Speicherung von Patientendaten, in der Lieferkette, um Produkte von ihrem Ursprung bis zum Endverbraucher zu verfolgen, und sogar im Immobiliensektor, um Grundbucheinträge zu verwalten."
      },
      {
        "heading": "Welche Vorteile und Nachteile hat die Blockchain-Technologie für Unternehmen?",
        "body": "Die Vorteile liegen auf der Hand: Neben der Transparenz und der erhöhten Sicherheit werden Transaktionen effizienter und kostengünstiger, da sie direkt zwischen den Beteiligten ohne eine dritte Instanz, wie z. B. eine Bank, durchgeführt und in ihrer Echtheit bestätigt werden können.\n\nAllerdings hat die Technologie auch Nachteile. So haben aktuelle Blockchains ggf. noch Schwierigkeiten, mit einer großen Anzahl von Transaktionen umzugehen. Darüber hinaus nutzen einige Blockchain-Systeme die sogenannte Proof-of-Work-Methode, bei der Computer komplexe Rechenaufgaben lösen müssen – dieser Vorgang verbraucht sehr viel Strom.\n\nDes Weiteren gestaltet sich der Einstieg in die Blockchain-Technologie anfangs als schwierig, weil sowohl die Einrichtung als auch das Verständnis dieser Technik sehr komplex ist. Schließlich sind nicht alle Branchen bzw. Kunden bereit, diese Technologie zu adaptieren."
      },
      {
        "heading": "Welche rechtlichen Aspekte sind beim Einsatz zu beachten?",
        "body": "Zwar hat die Blockchain-Technologie das Potenzial, viele Branchen zu revolutionieren, sie bringt aber auch eine Vielzahl von rechtlichen Herausforderungen mit sich. Um Innovation zu fördern und gleichzeitig Verbraucher und Marktintegrität zu schützen, wurden in Deutschland klare Richtlinien für diese aufstrebende Technologie gesetzt. Wenn Sie die Technologie in Ihrem Unternehmen einsetzen möchten, sollten Sie Folgendes beachten:",
        "bullets": [
          "Je nach Geschäftsmodell kann eine Lizenzierung oder Registrierung bei der Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) erforderlich sein – seit 2020 benötigen z. B. Kryptowert-Verwahrer eine entsprechende BaFin-Lizenz.",
          "Unternehmen, die mit Krypto-Assets handeln, werden oft als Finanzinstitute angesehen und müssen strenge AML- und KYC-Vorschriften einhalten, um Geldwäsche vorzubeugen und Transparenz gegenüber den Kunden zu gewährleisten.",
          "Blockchain-Anwendungen müssen die Bestimmungen des Datenschutzes respektieren.",
          "Im Bereich der Finanzdienstleistungen sind kapitalmarkt- und wertpapierrechtliche Vorschriften einzuhalten – Tokens oder Kryptowährungen könnten als Wertpapiere eingestuft werden.",
          "Über potenzielle Risiken von Blockchain-Produkten oder -Dienstleistungen muss transparent informiert werden, um den Verbraucherschutz zu wahren.",
          "Die steuerlichen Auswirkungen von Transaktionen mit Kryptowährung sollten bedacht und entsprechende Vorkehrungen getroffen werden."
        ]
      },
      {
        "heading": "Fazit: Chancen verstehen und nutzen",
        "body": "Beachten Sie, dass sich die Bestimmungen ändern können – um auf dem Laufenden zu bleiben, sollten Sie ggf. rechtliche Beratung in Anspruch nehmen.\n\nDennoch ist es im Zeitalter der digitalen Transformation unerlässlich, die Möglichkeiten und Grenzen der Blockchain-Technologie zu verstehen und sie für das eigene Unternehmen nutzbar zu machen. Außerdem lohnt es sich oft, in neue Technologien zu investieren, wenn dadurch Prozesse optimiert werden können und sich in Anbetracht der zunehmenden Cyberkriminalität zusätzlich die Sicherheit erhöht. Gern beraten wir Sie unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Was ist eine Blockchain?",
        "answer": "Ein dezentrales, verteiltes digitales Buchführungssystem: Daten werden in einer Kette von Blöcken gespeichert, wobei jeder Block einen Code des vorhergehenden Blocks, einen Zeitstempel und die Transaktionsdaten enthält. Informationen in einem Block lassen sich nicht ändern, ohne alle nachfolgenden Blöcke zu beeinflussen."
      },
      {
        "question": "Warum gilt die Blockchain als besonders sicher?",
        "answer": "Weil sie dezentral auf vielen Knoten (Nodes) läuft, jede Transaktion für alle im Netzwerk sichtbar und unveränderlich ist und kryptographische Verfahren die Daten vor Manipulation und unbefugtem Zugriff schützen."
      },
      {
        "question": "Welche Nachteile hat die Blockchain-Technologie?",
        "answer": "Aktuelle Blockchains haben teils Schwierigkeiten mit sehr vielen Transaktionen, Proof-of-Work-Systeme verbrauchen viel Strom, und Einrichtung wie Verständnis der Technik sind komplex. Zudem sind nicht alle Branchen und Kunden bereit, die Technologie zu adaptieren."
      },
      {
        "question": "Brauche ich für Blockchain-Anwendungen eine BaFin-Lizenz?",
        "answer": "Je nach Geschäftsmodell kann eine Lizenzierung oder Registrierung bei der BaFin erforderlich sein – insbesondere für Dienstleistungen rund um Kryptowährungen oder Tokens. Seit 2020 benötigen etwa Kryptowert-Verwahrer eine entsprechende Lizenz."
      }
    ]
  },
  // Übertragen von datadiorama.com/kuenstliche-intelligenz-und-maschinelles-lernen (Original vom 28.06.2023, via Webarchiv).
  "kuenstliche-intelligenz-und-maschinelles-lernen": {
    "intro": "Insbesondere kleine und mittelständische Unternehmen (KMU) in Deutschland haben noch immer viel Respekt vor dem Einsatz von Künstlicher Intelligenz (KI) und Maschinellem Lernen (ML) – viele halten diese Technologien für etwas, das sich eher für Großkonzerne wie Google oder Amazon eignet. Eines ist allerdings sicher: KI und ML durchdringen inzwischen viele Branchen und Geschäftsfelder und revolutionieren die Art und Weise, wie Unternehmen arbeiten, Prozesse ablaufen und Entscheidungen getroffen werden. Wer hier nicht Schritt hält, wird über kurz oder lang nicht mehr konkurrenzfähig sein. Damit Ihnen das nicht passiert, haben wir vier konkrete Anwendungsbereiche zusammengestellt, mit denen Sie sich gegenüber Ihren Wettbewerbern einen Vorteil verschaffen können.",
    "keyTakeaways": [
      "KI ist der Oberbegriff für Maschinen, die Aufgaben ausführen, die normalerweise menschliche Intelligenz erfordern – ML ist ein Teilbereich davon und die Methode, mit der KI erreicht wird.",
      "Geschäftsprozesse lassen sich mit KI und ML automatisieren: vom Chatbot im Kundenservice über Marketing und Buchhaltung (RPA) bis zu Personalwesen und Lieferketten.",
      "In der IT-Sicherheit erkennen KI- und ML-Systeme Bedrohungen wie Malware und Phishing schneller und ermöglichen automatische Reaktionen auf Sicherheitsvorfälle.",
      "Datenanalysen mit KI und ML liefern Erkenntnisse zu Kundenverhalten, Betriebsdaten, Finanzen und Markenwahrnehmung.",
      "Vorausschauende Wartung (Predictive Maintenance) erkennt Maschinenprobleme, bevor sie auftreten, und vermeidet so Ausfälle und teure Reparaturen."
    ],
    "sections": [
      {
        "heading": "Künstliche Intelligenz ist nicht gleich Maschinelles Lernen",
        "body": "Manche befürchten, dass der Einsatz technischer Innovationen mit Arbeitsplatzverlusten einhergeht. Diese Befürchtung ist nicht ganz unbegründet, denn letztlich sorgen KI und Co. dafür, dass bestimmte Prozesse in Unternehmen optimiert werden. Vielfach fallen Arbeitsplätze jedoch nicht komplett weg – es ändern sich nur einzelne Arbeitsschritte.\n\nZum besseren Verständnis lohnt ein Blick auf den Unterschied der beiden Begriffe: KI ist ein Oberbegriff für die Fähigkeit von Maschinen, Aufgaben auszuführen, für die normalerweise menschliche Intelligenz benötigt wird. Hierzu gehören beispielsweise das Lösen von Problemen, Lernen, das Fällen von Entscheidungen oder das Erkennen von Sprache.\n\nMaschinelles Lernen hingegen ist ein Teilbereich der KI, der sich darauf konzentriert, Algorithmen zu entwerfen und zu entwickeln, die es Computern ermöglichen, aus Daten zu lernen. Im Grunde ist ML also die Methode, mit der wir KI erreichen. Mit Hilfe von ML sind Maschinen in der Lage, sich auf der Grundlage von Erfahrungen zu verbessern und anzupassen, ohne dass eine explizite Programmierung erforderlich ist."
      },
      {
        "heading": "1. Automatisierung von Unternehmensprozessen",
        "body": "Kleine und mittelständische Unternehmen können KI und ML nutzen, um ihre Geschäftsprozesse zu automatisieren.\n\nSo lässt sich durch den Einsatz von KI-Chatbots der Kundenservice deutlich verbessern. Ein Chatbot kann Bestellungen entgegennehmen, Kunden über den Stand ihrer Bestellung informieren oder Produktinformationen liefern. Außerdem kann eine Vielzahl von Kundenanfragen automatisch bearbeitet werden. Das erhöht die Effizienz, senkt die Wartezeit für die Kunden und steigert die Kundenzufriedenheit.\n\nDarüber hinaus ist auch die Automatisierung von Marketing- und Vertriebsaktivitäten möglich: So können z. B. das Kundenverhalten vorhergesagt, Umsatzprognosen erstellt oder Kundendaten analysiert werden, um personalisierte Marketingkampagnen zu entwickeln.\n\nAuch die Verarbeitung von Rechnungen und die Buchhaltung lassen sich vereinfachen. Robotic Process Automation (RPA) ist eine Technologie, bei der Software-Roboter sich wiederholende, regelbasierte Routineaufgaben übernehmen, die bisher von Menschen ausgeführt wurden. So können Rechnungen gescannt, Daten extrahiert, in Buchhaltungssysteme eingespeist und Zahlungen veranlasst werden.\n\nAußerdem können KI und ML das Personalwesen optimieren, indem z. B. Bewerbungsprozesse automatisiert ablaufen. Entsprechende Tools helfen beim Scannen von Lebensläufen, bei der Bewertung von Bewerbern, bei der Planung von Vorstellungsgesprächen oder bei der Vorbereitung von Interviewfragen.\n\nSchließlich verbessern KI und ML auch Lieferketten, indem sie Daten aus verschiedenen Quellen zur Vorhersage von Nachfrage, Lieferzeiten und potenziellen Engpässen analysieren. Auf diese Weise sind eine effizientere Verwaltung der Lagerbestände und die Vermeidung von Lieferengpässen möglich."
      },
      {
        "heading": "2. Steigerung der IT-Sicherheit",
        "body": "KI und ML werden im Bereich der IT-Sicherheit nicht nur für große Unternehmen immer wichtiger. Sie ermöglichen es, Bedrohungen schneller zu erkennen und besser darauf zu reagieren. KI- und ML-Systeme analysieren große Mengen von Netzwerkdaten in Echtzeit und erkennen ungewöhnliche Aktivitäten, die auf mögliche Sicherheitsverletzungen hindeuten.\n\nAuch Malware – selbst solche, die noch nie zuvor in Erscheinung getreten ist – kann mit Hilfe von ML schneller identifiziert werden. Darüber hinaus können KI und ML Phishing-Attacken erkennen und abwehren, indem sie E-Mails auf verdächtige Anhänge, Links oder Formulierungen analysieren.\n\nDes Weiteren haben Unternehmen die Möglichkeit, automatische Reaktionen auf Sicherheitsvorfälle zu implementieren: Ein betroffenes System wird dann automatisch vom Netz getrennt oder verdächtige Prozesse werden abgebrochen."
      },
      {
        "heading": "3. Analyse von Daten",
        "body": "KI und ML ermöglichen kleinen und mittleren Unternehmen, wertvolle Erkenntnisse aus ihren Daten zu gewinnen. Neben Analysen des Kundenverhaltens und der Kundenpräferenzen, die beispielsweise in personalisierte Angebote münden und die Kundenbindung erhöhen, können Unternehmen ihre Betriebsdaten analysieren, um die Effizienz zu steigern und Kosten zu senken. Hierfür könnten etwa Verkaufsdaten ausgewertet werden, um Lagerbestände zu optimieren und Über- oder Unterbestände zu vermeiden.\n\nAuch für Finanzanalysen sind KI und ML nützlich – um künftige Umsätze vorherzusagen, finanzielle Risiken zu bewerten oder Betrug aufzudecken. Überdies können soziale Medien und andere Online-Datenquellen analysiert werden, um zu verstehen, wie ein Produkt oder eine Marke online wahrgenommen wird. So lassen sich Marketingstrategien anpassen, auf Kundenfeedback reagieren oder potenzielle Krisen schneller erkennen."
      },
      {
        "heading": "4. Schutz vor Ausfällen durch vorausschauende Wartung",
        "body": "Dank der vorausschauenden Wartung (Predictive Maintenance) können mittels KI und ML Maschinenausfälle und -probleme erkannt werden, ehe sie auftreten. Das hilft KMU, unerwartete Betriebsausfälle und teure Reparaturen zu vermeiden.\n\nMit Hilfe von Sensoren, die an Geräten oder Maschinen angebracht werden, können z. B. Druck oder Temperatur überwacht und aufgezeichnet werden. Ein ungewöhnlicher Anstieg der Temperatur könnte etwa auf einen Defekt im Kühlsystem hindeuten. ML-Modelle helfen also dabei, Daten zu analysieren und Abweichungen von der Norm frühzeitig anzuzeigen. Sie können aber auch Muster erkennen und sogar Vorhersagen darüber treffen, wann Maschinen voraussichtlich ausfallen werden. Das hat auch den Vorteil, dass Wartungsarbeiten besser planbar sind und Kosten durch Ausfallzeiten gesenkt werden. Auch die Lebensdauer einzelner Maschinenteile lässt sich vorhersagen – so können nicht nur unerwartete Ausfälle vermieden, sondern auch besser festgelegt werden, wann bestimmte Teile ausgetauscht werden müssen.\n\nWie Sie sehen, gibt es zahlreiche Möglichkeiten, wie auch Sie als kleines oder mittelständisches Unternehmen von Künstlicher Intelligenz und Maschinellem Lernen profitieren und Ihre Wettbewerbsfähigkeit verbessern können. Gern unterstützen wir Sie dabei, die Technologien zu finden, die für Ihr Unternehmen am besten geeignet sind, und sie optimal einzubinden."
      }
    ],
    "faq": [
      {
        "question": "Was ist der Unterschied zwischen Künstlicher Intelligenz und Maschinellem Lernen?",
        "answer": "KI ist der Oberbegriff für die Fähigkeit von Maschinen, Aufgaben auszuführen, für die normalerweise menschliche Intelligenz benötigt wird. Maschinelles Lernen ist ein Teilbereich der KI, bei dem Algorithmen es Computern ermöglichen, aus Daten zu lernen – im Grunde die Methode, mit der KI erreicht wird."
      },
      {
        "question": "Eignen sich KI und ML auch für kleine und mittelständische Unternehmen?",
        "answer": "Ja. KMU können unter anderem Geschäftsprozesse automatisieren, die IT-Sicherheit stärken, Daten analysieren und Maschinen vorausschauend warten – und sich so Wettbewerbsvorteile verschaffen."
      },
      {
        "question": "Führt der Einsatz von KI zwangsläufig zu Arbeitsplatzverlusten?",
        "answer": "Die Befürchtung ist nicht ganz unbegründet, da KI Prozesse optimiert. Vielfach fallen Arbeitsplätze jedoch nicht komplett weg – es ändern sich nur einzelne Arbeitsschritte."
      },
      {
        "question": "Was bedeutet vorausschauende Wartung (Predictive Maintenance)?",
        "answer": "Sensoren an Maschinen überwachen Werte wie Druck oder Temperatur; ML-Modelle erkennen Abweichungen frühzeitig und sagen sogar voraus, wann Maschinen voraussichtlich ausfallen. So lassen sich Ausfälle vermeiden und Wartungsarbeiten besser planen."
      }
    ]
  },
  // Übertragen von datadiorama.com/cyber-angriff (Original vom 26.05.2023, via Webarchiv).
  "cyber-angriff": {
    "intro": "Ein Cyber-Angriff ist eine vorsätzliche Handlung, bei der ein Angreifer in ein Computersystem, ein Netzwerk oder eine Website eindringt und versucht, vertrauliche Informationen zu stehlen, zu beschädigen oder zu stören. Ist ein Unternehmen betroffen, hat schnelles Handeln oberste Priorität. Wer vorbeugen will, findet hier die wichtigsten Maßnahmen – und ein aktuelles Beispiel, das zeigt, wie real die Bedrohung ist.",
    "keyTakeaways": [
      "Cyber-Angriffe erfolgen u. a. als Phishing, Ransomware, DDoS-Attacken oder Malware – die Motive reichen von Erpressung über Spionage bis Sabotage.",
      "Laut einer Bitkom-Studie aus dem Jahr 2020 war nahezu jedes zweite deutsche Unternehmen Opfer von Cyber-Angriffen – besonders betroffen waren kleine und mittelständische Unternehmen.",
      "Der Angriff auf den Krankenkassen-IT-Dienstleister Bitmarck 2023 gelang u. a., weil Daten nicht per Zwei-Faktor-Authentifizierung gesichert waren – rund 330.000 Versichertendatensätze wurden gestohlen.",
      "Wirksame Schutzmaßnahmen: Zwei-Faktor-Authentifizierung, aktuelle Antiviren- und Firewall-Software, starke Passwörter mit Passwortmanager, Mitarbeiterschulungen und Backups.",
      "Eine umfassende, regelmäßig überprüfte Sicherheitsstrategie schützt vor finanziellen Schäden und Reputationsverlust."
    ],
    "sections": [
      {
        "heading": "Ein aktueller Fall: der Cyberangriff auf Bitmarck",
        "body": "Wie aktuell das Thema ist, zeigt der zweite Cyberangriff in Folge auf den großen Krankenkassen-IT-Dienstleister Bitmarck Ende April 2023, der bei zahlreichen Krankenkassen zu technischen Störungen und Einschränkungen im Tagesgeschäft geführt hat. Bitmarck kümmert sich nicht nur um die IT etlicher Krankenkassen in Deutschland, sondern ist auch für IT-Dienstleistungen rund um die elektronische Krankenkassenkarte (eGK) und die elektronische Patientenakte (ePA) zuständig.\n\nBei diesem Angriff konnten nach Recherchen des Computermagazins c’t persönliche Daten von rund 330.000 Versicherten gestohlen werden – darunter Namen, Geburtsdaten, Versichertennummern und gehashte, also verschlüsselte Passwörter. Gelungen ist dies, weil die Angreifer Passwörter eines Angestellten entwenden konnten, die für E-Mail, Remote-Desktop-Anwendungen und eine Instanz der Kollaborationssoftware Jira verwendet wurden. Über Jira konnten die Angreifer den Datensatz kopieren. Das gelang auch deshalb so gut, weil die Daten nicht über eine Zwei-Faktor-Authentifizierung gesichert waren.\n\nLeider kommt es, wie dieses Beispiel zeigt, auch in großen Unternehmen immer wieder zu erheblichen Sicherheitsmängeln. Und die Zwei-Faktor-Authentifizierung ist nur eine wichtige Maßnahme, um firmenrelevante Daten zu schützen."
      },
      {
        "heading": "Was ist ein Cyber-Angriff und welche Varianten gibt es?",
        "body": "Ein Cyber-Angriff ist eine vorsätzliche Handlung, bei der ein Angreifer in ein Computersystem, ein Netzwerk oder eine Website eindringt und versucht, vertrauliche Informationen zu stehlen, zu beschädigen oder zu stören. Cyberangriffe können auf ganz unterschiedliche Art und Weise erfolgen, z. B. in Form von:",
        "bullets": [
          "Phishing-Angriffe: betrügerische E-Mails, die vorgeben, von einem legitimen Absender zu stammen, und den Empfänger dazu bringen sollen, auf einen Link zu klicken oder persönliche Daten preiszugeben.",
          "Ransomware: Schadsoftware, die das Computersystem des Opfers verschlüsselt und für die Freigabe ein Lösegeld verlangt.",
          "DDoS-Attacken (Distributed Denial of Service): Angriffe, die ein Netzwerk oder eine Website durch das gleichzeitige Versenden einer großen Anzahl von Anfragen überlasten und lahmlegen.",
          "Malware: Software, mit der ein Computersystem infiziert, Daten gestohlen oder das System beschädigt werden kann."
        ]
      },
      {
        "heading": "Warum kommt es überhaupt zu solchen Angriffen?",
        "body": "Es gibt verschiedene Gründe, warum Cyber-Angriffe durchgeführt werden. Geht es um finanziellen Gewinn, versuchen die Angreifer, Geld durch den Diebstahl von Identitäten, Kreditkarteninformationen u. a. zu erpressen. Einige Angriffe zielen aus Spionagezwecken darauf ab, vertrauliche Informationen von Unternehmen oder Regierungsbehörden zu stehlen. Ein weiterer Grund ist Sabotage – in diesem Fall wird der Betrieb von Systemen oder Diensten gestört oder beschädigt.\n\nWenn Sie denken, dass Ihr Unternehmen zu klein oder unbedeutend ist, um einen Cyber-Angriff zu provozieren, irren Sie sich. Cyber-Attacken sind ein weltweites Phänomen und betreffen bei weitem nicht mehr nur große Unternehmen. So zeigte eine Studie des Digitalverbandes Bitkom aus dem Jahr 2020, dass nahezu jedes zweite deutsche Unternehmen Opfer von Cyber-Angriffen war – und bemerkenswerterweise waren insbesondere kleine und mittelständische Unternehmen betroffen."
      },
      {
        "heading": "Was können Sie tun, um Ihre Unternehmensdaten ausreichend zu schützen?",
        "body": "Neben einer Absicherung der Zugänge mittels Zwei-Faktor-Authentifizierung sollten Sie auf allen Computern eine Antiviren-Software und eine Firewall installieren, die regelmäßig aktualisiert werden.\n\nAußerdem ist es ratsam, starke Passwörter zu verwenden – also solche, die ausreichend lang, komplex und einzigartig sind und keine persönlichen Informationen oder Wörter enthalten, die in einem Wörterbuch zu finden sind. Leider werden Passwörter oft nicht regelmäßig geändert, weil sich viele komplexe Passwörter nicht merken können. Dieses Problem lässt sich durch einen Passwortmanager beheben: Er hilft dabei, einzigartige und starke Passwörter zu erstellen und zu speichern.\n\nEine weitere wichtige Maßnahme, um Datenmissbrauch vorzubeugen, ist die Schulung Ihrer Mitarbeitenden. Wenn diese verdächtige Aktivitäten wie fragwürdige E-Mails oder Websites besser erkennen und an die IT-Abteilung bzw. einen IT-Administrator weiterleiten, können Schwachstellen schneller aufgedeckt und behoben werden.\n\nUm den Verlust wichtiger Daten zu verhindern, hilft darüber hinaus das Einrichten von Backups. Wie schnell ist es passiert, dass eine Datei versehentlich geändert oder gelöscht wird und sich das nicht mehr rückgängig machen lässt – in solchen Fällen ist ein Backup die Rettungsleine. Es schützt zudem vor Hardware-Ausfällen, Viren und Malware sowie vor Datenverlust oder -schädigung bei einer Software-Installation oder -Aktualisierung, und es verhindert im Ernstfall Ausfallzeiten und Produktivitätsverluste. Auch Zertifikate und digitale Signaturen sollten regelmäßig überprüft werden, um sicherzustellen, dass E-Mails und Websites von legitimen Absendern stammen."
      },
      {
        "heading": "Fazit: Eine umfassende Sicherheitsstrategie zahlt sich aus",
        "body": "Eine umfassende Sicherheitsstrategie, die regelmäßig überprüft und aktualisiert wird, schützt Ihr Unternehmen maßgeblich vor Cyber-Angriffen. Denn sollte ein solcher Angriff erfolgreich sein, hat das nicht nur finanzielle Schäden zur Folge, sondern könnte auch den Ruf Ihres Unternehmens nachhaltig schädigen.\n\nGern prüfen wir auch anhand eines Penetrationstests, wie Ihr Unternehmen in Sachen Datensicherheit aufgestellt ist, und beraten Sie unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Was ist ein Cyber-Angriff?",
        "answer": "Eine vorsätzliche Handlung, bei der ein Angreifer in ein Computersystem, ein Netzwerk oder eine Website eindringt und versucht, vertrauliche Informationen zu stehlen, zu beschädigen oder zu stören. Gängige Formen sind Phishing, Ransomware, DDoS-Attacken und Malware."
      },
      {
        "question": "Sind auch kleine Unternehmen von Cyber-Angriffen betroffen?",
        "answer": "Ja. Eine Bitkom-Studie aus dem Jahr 2020 zeigte, dass nahezu jedes zweite deutsche Unternehmen Opfer von Cyber-Angriffen war – insbesondere kleine und mittelständische Unternehmen waren betroffen."
      },
      {
        "question": "Welche Maßnahmen schützen am wirksamsten vor Cyber-Angriffen?",
        "answer": "Zwei-Faktor-Authentifizierung, regelmäßig aktualisierte Antiviren- und Firewall-Software, starke und einzigartige Passwörter (idealerweise per Passwortmanager verwaltet), Mitarbeiterschulungen, Backups sowie die regelmäßige Prüfung von Zertifikaten und digitalen Signaturen."
      },
      {
        "question": "Warum sind Backups so wichtig?",
        "answer": "Backups sind die Rettungsleine bei versehentlich geänderten oder gelöschten Dateien. Sie schützen außerdem vor Hardware-Ausfällen, Viren und Malware sowie vor Datenverlust bei Software-Installationen und verhindern im Ernstfall Ausfallzeiten und Produktivitätsverluste."
      }
    ]
  },
  // Übertragen von datadiorama.com/microsoft-exchange-server (Original vom 05.05.2023, via Webarchiv).
  "microsoft-exchange-server": {
    "intro": "Microsoft Exchange ist eine Server-Software, die E-Mails, Termine, Kontakte und Aufgaben verwaltet. Die Software ist primär für Unternehmen und Bildungsinstitutionen ausgelegt. Der Austausch per E-Mail ist im beruflichen wie im privaten Umfeld nicht mehr wegzudenken – und dank des Exchange Servers können Sie die digitale Kommunikation in Ihrem Unternehmen optimieren. Warum es sich lohnt, diese Serveranwendung zu nutzen, erfahren Sie in diesem Artikel.",
    "keyTakeaways": [
      "Der Exchange Server arbeitet als Server-Client-Modell: E-Mails, Kalender, Kontakte und Aufgaben werden zentral gespeichert und von allen Geräten synchronisiert.",
      "Geteilte E-Mail-Ordner, freigegebene Kalender und Aufgabenverwaltung erleichtern die Zusammenarbeit im Team und steigern die Produktivität.",
      "Umfassende Sicherheitsfunktionen wie E-Mail-Verschlüsselung, Spam- und Virenfilterung sowie Zugriffsrechteverwaltung sind enthalten.",
      "Der Exchange Server ist beliebig skalierbar und wächst mit der Unternehmensgröße mit.",
      "Neben der lokalen Software bietet Microsoft mit Exchange Online auch eine cloudbasierte Variante an."
    ],
    "sections": [
      {
        "heading": "Wie genau funktioniert der Microsoft Exchange Server?",
        "body": "Der Exchange Server arbeitet als Server-Client-Modell. Das bedeutet, dass ein Server die Daten von Benutzern speichert und verwaltet, während die Clients (z. B. Desktop-Computer, Laptops, Smartphones) auf diese Daten zugreifen können.\n\nUm den Austausch von Daten zwischen dem Server und den Clients zu ermöglichen, verwendet der Exchange Server das Protokoll „Exchange ActiveSync“.\n\nSendet ein Benutzer eine E-Mail, wird sie auf dem Exchange Server gespeichert und von dort aus an den Empfänger gesendet. Wenn der Empfänger die E-Mail öffnet, wird sie vom Exchange Server heruntergeladen und in seinem Posteingang angezeigt. Auch Kalender, Kontakte und Aufgaben werden auf dem Exchange Server gespeichert und können von den Benutzern auf ihren Geräten abgerufen werden."
      },
      {
        "heading": "Was ist das Besondere am Microsoft Exchange Server?",
        "body": "Der Microsoft Exchange Server wurde als umfassende Groupware- und E-Mail-Transport-Server-Software entwickelt. Aufgrund seiner Benutzerfreundlichkeit und seiner leistungsstarken Funktionen hat sich der Exchange Server als eine der wichtigsten Kommunikationsplattformen in Unternehmen weltweit etabliert.\n\nDer Erfolg beruht vor allem darauf, dass er sowohl als zentrale Ablage und Verwaltung von E-Mails dient, als auch die Speicherung und Koordination von Terminen, Kontakten und Aufgaben ermöglicht. Damit geht der Exchange Server weit über die Funktionalitäten einer klassischen E-Mail-Anwendung hinaus und bietet ein breiteres Spektrum an Werkzeugen und Ressourcen für eine effektive Zusammenarbeit und ein effizientes Management von Geschäftsprozessen."
      },
      {
        "heading": "1. Leistungsstarke E-Mail-Verwaltung",
        "body": "E-Mails und Kalender können nicht nur zentral verwaltet und freigegeben, sondern von jedem Gerät aus synchronisiert werden. Damit haben Sie sowohl Zugriff via Smartphone und Tablet als auch über Outlook und andere E-Mail-Programme. Außerdem können Sie per Outlook Web Access von jedem Webbrowser weltweit zugreifen."
      },
      {
        "heading": "2. Leichtere Zusammenarbeit im Team, höhere Produktivität",
        "body": "Mit dem Microsoft Exchange Server können gemeinsame E-Mail-Ordner erstellt und geteilt sowie Kalender freigegeben und anderen Benutzern innerhalb oder außerhalb des eigenen Unternehmens Zugriff darauf gewährt werden. Letzteres erleichtert es, gemeinsam Termine zu planen und die Verfügbarkeit von Teammitgliedern zu koordinieren.\n\nDarüber hinaus können Kontakte und Kontaktgruppen freigegeben werden, die von mehreren Benutzern bearbeitet und eingesehen werden können – Informationen lassen sich so schnell und einfach teilen. Dank der Aufgabenverwaltungsfunktion können Teams ihre Aufgaben effektiv erstellen, zuweisen und verfolgen. Schließlich unterstützt der Exchange Server die Synchronisation von E-Mails, Kalendern und Kontakten mit mobilen Geräten wie Smartphones und Tablets – Teammitglieder können so auch unterwegs auf wichtige Informationen zugreifen und mit ihrem Team in Verbindung bleiben.\n\nUnd mehr noch: Der Microsoft Exchange Server ermöglicht die Zusammenarbeit in Echtzeit und steigert so die Produktivität in Ihrem Unternehmen. Ein großer Vorteil dieses Features ist die E-Mail-Signatur, die durch die zentrale Ablage auf dem Exchange Server auf allen Geräten in exakt demselben Design versendet wird."
      },
      {
        "heading": "3. Umfassende Sicherheitsfunktionen",
        "body": "Mit der Server-Software stehen Ihnen umfassende Sicherheitsfunktionen zur Verfügung, wie z. B. eine E-Mail-Verschlüsselung, eine Spam- und Virenfilterung, eine Überwachung, um Datenverlust zu verhindern, sowie die Verwaltung von Zugriffsrechten."
      },
      {
        "heading": "4. Beliebig skalierbar",
        "body": "Der Exchange Server ist für jede Unternehmensgröße geeignet, weil er bezüglich seiner Funktionen beliebig erweitert werden kann. Sollte Ihr Unternehmen wachsen und mehr Mitarbeiter hinzukommen, benötigen Sie gegebenenfalls mehr Postfächer und eine bessere Verwaltung von Ressourcen wie Speicherplatz und Netzwerkbandbreite. Dank der Skalierbarkeit des Exchange Servers können die Postfachgröße und die Anzahl der Benutzerkonten flexibel an die Anforderungen Ihres Unternehmens angepasst werden."
      },
      {
        "heading": "5. Reibungslose Integration",
        "body": "Die Server-Softwarelösung bietet eine nahtlose Integration in andere Microsoft-Produkte und erleichtert damit die Zusammenarbeit. So können Benutzer z. B. ihre E-Mails abrufen, während sie auf SharePoint-Websites und -Dokumente zugreifen, oder Skype for Business verwenden, um Videokonferenzen zu planen und gleichzeitig auf ihre E-Mails zu antworten."
      },
      {
        "heading": "Exchange 2019 und Exchange Online",
        "body": "Inzwischen steht mit Exchange 2019 eine überarbeitete Version zur Verfügung. Diese hat nicht nur neue Funktionen, sondern wurde vor allem in Sachen Sicherheit und Performance der E-Mail- und Kalender-Server verbessert.\n\nNeben der lokalen Software „Exchange Server“, die entweder auf einem unternehmenseigenen Server oder in einem Rechenzentrum betrieben wird, bietet Microsoft auch die cloudbasierte Variante „Exchange Online“ an. Dieser Dienst steht entweder als „Hosted Exchange“ oder im Rahmen eines Office-365-Angebots zur Verfügung.\n\nWenn Sie unsicher sind, welche Variante von Microsoft Exchange sich für Ihr Unternehmen am besten eignet, beraten wir Sie gern unverbindlich – auch bei der Einrichtung, die je nach Unternehmensgröße und gewünschten Funktionen sehr aufwändig sein kann."
      }
    ],
    "faq": [
      {
        "question": "Wie funktioniert der Microsoft Exchange Server?",
        "answer": "Der Exchange Server arbeitet als Server-Client-Modell: Der Server speichert und verwaltet E-Mails, Kalender, Kontakte und Aufgaben, während Clients wie Desktop-Computer, Laptops und Smartphones über das Protokoll „Exchange ActiveSync“ darauf zugreifen."
      },
      {
        "question": "Worin unterscheidet sich Exchange von einer klassischen E-Mail-Anwendung?",
        "answer": "Exchange dient nicht nur der zentralen Ablage und Verwaltung von E-Mails, sondern ermöglicht auch die Speicherung und Koordination von Terminen, Kontakten und Aufgaben – und bietet damit ein breites Spektrum an Werkzeugen für die Zusammenarbeit im Team."
      },
      {
        "question": "Gibt es Exchange auch als Cloud-Lösung?",
        "answer": "Ja. Neben der lokalen Software „Exchange Server“ bietet Microsoft die cloudbasierte Variante „Exchange Online“ an – entweder als „Hosted Exchange“ oder im Rahmen eines Office-365-Angebots."
      },
      {
        "question": "Ist der Exchange Server auch für kleine Unternehmen geeignet?",
        "answer": "Ja. Der Exchange Server ist für jede Unternehmensgröße geeignet, da Postfachgröße und Anzahl der Benutzerkonten flexibel an die Anforderungen des Unternehmens angepasst werden können."
      }
    ]
  },
  // Übertragen von datadiorama.com/passwort-manager-fuer-unternehmen (Original vom 29.03.2023, via Webarchiv).
  "passwort-manager-fuer-unternehmen": {
    "intro": "Wenn es um den Schutz von vertraulichen Informationen geht, ist die Verwaltung von Passwörtern in vielen Unternehmen oft eine Herausforderung. Die gute Nachricht: Ein Passwort-Manager kann Ihnen dabei helfen, Passwortrichtlinien in Ihrem Unternehmen durchzusetzen und den Schutz von Zugangsdaten zu erhöhen. Sie und Ihre Mitarbeiter können damit sichere und einzigartige Passwörter erstellen lassen, die automatisch gespeichert und verwaltet werden – das erhöht die IT-Sicherheit und schützt Ihre Daten vor unbefugtem Zugriff.",
    "keyTakeaways": [
      "Ein Passwort-Manager erhöht die IT-Sicherheit und steigert zugleich Effizienz und Produktivität – gemerkt werden muss nur noch das Masterpasswort.",
      "Das Masterpasswort sollte mindestens 12 Zeichen lang, einzigartig und eine zufällige Kombination aus Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen sein.",
      "Der größte Vorteil ist zugleich das größte Risiko: Wird der Passwort-Manager gehackt – wie 2022 bei LastPass –, können alle Daten betroffen sein.",
      "Wichtige Sicherheitsfunktionen bei der Auswahl: 2-Faktor-Authentisierung, Passwortprüfung und Zero-Knowledge-Security.",
      "Für den Businessbereich empfehlenswert (Stand 2023): Bitwarden, Dashlane und Keeper."
    ],
    "sections": [
      {
        "heading": "Welche weiteren Vorteile hat ein Passwort-Manager für Unternehmen?",
        "body": "Neben einer erhöhten IT-Sicherheit steigert die Verwendung eines Passwort-Managers auch die Effizienz und Produktivität in Ihrem Unternehmen. Denn abgesehen von einem zentralen Passwort (Masterpasswort) muss sich niemand mehr Passwörter merken oder manuell eingeben. Dadurch passieren auch weniger Fehler.\n\nAußerdem lassen sich Passwort-Manager einfach in bestehende Systeme integrieren und der Zugriff auf bestimmte Benutzer (z. B. Administratoren oder Gruppen) beschränken.\n\nPasswort-Manager erleichtern auch die Zusammenarbeit von Mitarbeitern. So können Teams einfach und sicher auf gemeinsame Konten zugreifen, ohne dass jedes Teammitglied das entsprechende Passwort kennen muss.\n\nDes Weiteren können Passwort-Manager dabei helfen nachzuvollziehen, wer Zugang zu Ihren Konten hatte und wann Ihre Passwörter geändert wurden – beispielsweise wenn Compliance-Anforderungen erfüllt werden müssen."
      },
      {
        "heading": "Was müssen Sie bei der Erstellung des Masterpassworts beachten?",
        "body": "Wenn Sie einen Passwort-Manager für Ihr Unternehmen nutzen möchten, gibt es hinsichtlich des Masterpassworts wichtige Punkte zu beachten. Ihr Masterpasswort sollte:",
        "bullets": [
          "mindestens 12 Zeichen lang sein,",
          "eine zufällige Kombination von Groß- und Kleinbuchstaben enthalten,",
          "Zahlen und Sonderzeichen beinhalten."
        ]
      },
      {
        "heading": "So erstellen Sie ein sicheres, merkbares Masterpasswort",
        "body": "Außerdem sollte das Masterpasswort einzigartig sein (also nur für den Passwort-Manager und für keine weiteren Konten verwendet werden), kein Wort oder einen kompletten Satz und auch keine leicht zu erratenden Daten und Namen wie Ihr Geburtsdatum oder den Namen Ihres Haustieres enthalten.\n\nZwar generieren die meisten Passwort-Manager bei der ersten Anmeldung bzw. beim Erstellen eines neuen Kontos auf Wunsch auch ein sicheres Passwort. Allerdings lohnt es sich, selbst ein sicheres Passwort zu kreieren – das können Sie sich mit Sicherheit besser merken als ein kryptisches, generiertes Passwort.\n\nGehen Sie hierfür folgendermaßen vor: Überlegen Sie sich einen beliebigen Satz, der alle oben genannten Punkte erfüllt. Dieser Satz könnte lauten: „Unsere Kunden stehen bei uns an erster Stelle, deshalb garantieren wir eine 100%ige Zufriedenheitsgarantie.“ Aus den Anfangsbuchstaben bzw. -zeichen dieses Satzes lässt sich nun folgendes Passwort ableiten: „UKsbuaeSdgwe100%Z“."
      },
      {
        "heading": "Hat die Nutzung eines Passwort-Managers auch Nachteile?",
        "body": "Der größte Vorteil ist gleichzeitig auch der größte Nachteil. Denn wenn ein Passwort-Manager gehackt wird, können alle Ihre Daten in die falschen Hände gelangen. So geschehen bei dem viel genutzten Dienst LastPass, der im August 2022 Opfer einer Hacker-Attacke wurde. Dabei konnten die Angreifer Kundendaten wie Namen, E-Mail- und Rechnungsadressen sowie Telefonnummern erbeuten. Außerdem verschafften sich die Hacker Zugang zu den Passwort-Tresoren von LastPass-Nutzern und entwendeten sowohl verschlüsselte Daten (z. B. Benutzernamen, Passwörter der jeweiligen Online-Accounts) als auch unverschlüsselte Daten (z. B. Webadressen der von den Kunden genutzten Online-Accounts). Dieser Vorfall hat das Vertrauen in LastPass erheblich geschmälert.\n\nDoch auch Serverausfälle und Softwareprobleme können schwerwiegende Folgen haben. Im schlimmsten Fall haben Sie dadurch über einen gewissen Zeitraum keinen Zugriff auf Ihre dringend benötigten Passwörter.\n\nDarüber hinaus entstehen bei der Nutzung eines Passwort-Managers ggf. zusätzliche Kosten, z. B. dann, wenn Sie mehrere Geräte verwenden oder weitergehende Funktionen benötigen.\n\nSchließlich sollten Sie bedenken, dass die Einrichtung eines Passwort-Managers Zeit braucht: Sowohl der Umgang mit dem Tool selbst als auch das Übertragen der Informationen aus all Ihren bestehenden Konten dauert eine Weile, auch wenn die meisten Dienste über Werkzeuge zum Importieren von Daten verfügen."
      },
      {
        "heading": "Auf welche Sicherheitsfunktionen sollten Sie bei der Auswahl achten?",
        "body": "Ehe Sie sich für einen Passwort-Manager entscheiden, sollten diese Sicherheitsfunktionen vorhanden sein:",
        "bullets": [
          "2-Faktor-Authentisierung: Per SMS oder Authentifizierungs-App wird Ihnen beim Login ein Code gesendet, den Sie eingeben müssen, um Zugriff auf Ihr Konto zu erhalten.",
          "Passwortprüfung: Diese untersucht Ihre bestehenden Passwörter und weist Sie darauf hin, falls sie zu schwach sein sollten und verstärkt werden müssen.",
          "Zero-Knowledge-Security: Der Anbieter hat keinen Zugriff auf Ihre Daten."
        ]
      },
      {
        "heading": "Welcher Passwort-Manager ist für Ihr Unternehmen am besten geeignet?",
        "body": "So pauschal lässt sich die Frage nicht beantworten, denn es hängt immer von Ihren spezifischen Anforderungen und Präferenzen ab. Bevor Sie eine Entscheidung treffen, sollten Sie die einzelnen Dienste miteinander vergleichen. Für den Businessbereich empfehlen wir die drei folgenden Lösungen (Stand 2023), die alle oben genannten Sicherheitsfunktionen erfüllen.\n\n1. Bitwarden ist ein Open-Source-Passwort-Manager. Das bedeutet, dass jeder den Quellcode prüfen kann und dadurch Schwachstellen und Sicherheitsprobleme schnell ausfindig gemacht werden können. Außerdem ist Bitwarden sehr benutzerfreundlich, preiswert, verfügt über intuitive Apps und verlässliche Autofills und hat zahlreiche praktische Sicherheits-Features.\n\n2. Dashlane ist nicht nur im Premium-, sondern auch im Businessbereich eine gute Lösung. Die für Windows, Mac, iOS und Android erhältliche Software ist einfach zu bedienen, bietet eine hohe Sicherheit und verfügt über zahlreiche nützliche Funktionen. So erleichtert das Passwort-Sharing das Arbeiten in Teams, da Accountdetails sicher miteinander geteilt werden können. Die Administratoren-Konsole ermöglicht eine einfache Verwaltung der Zugriffsrechte einzelner Nutzer, und mögliche Gefahren können mittels des Sicherheits-Dashboards schneller erkannt werden. Dashlane bietet für Unternehmen zwei verschiedene Tarife an: „Team“ und „Business“. In Sachen Sicherheit steht der Code der mobilen App als Open Source zur Verfügung. Das bedeutet zwar nicht, dass Nutzer Dashlane selbst als Instanz aufsetzen können wie bei Bitwarden – allerdings hat jeder die Möglichkeit, die Mobilanwendung zu prüfen, um Sicherheitsprobleme aufzuspüren.\n\n3. Keeper gehört zu den besten Anbietern fürs Passwortmanagement, auch wenn die Lösung nicht Open Source ist. Sie ist nicht nur extrem zuverlässig, sondern bietet zahlreiche nützliche Features, die bereits im regulären Business-Tarif enthalten sind. Neben einem eigenen „Keeper-Tresor“ für jeden Benutzer verfügt das Tool über eine Richtlinienverwaltung für Administratoren. Außerdem beinhaltet der Tarif, dass Aktivitätsberichte erstellt und Sicherheitsprüfungen durchgeführt werden können. Der Enterprise-Tarif bietet noch mehr Funktionen, wie z. B. SSO, eine automatische Teamverwaltung oder eine Entwickler-API zur Passwortrotation und Integration im Backend. Darüber hinaus hält Keeper kostenpflichtige Erweiterungen bereit, etwa einen Cloud Security Vault, der das Speichern wichtiger Daten sicherstellt. Zusätzlich bietet Keeper einen verschlüsselten Messenger-Dienst und das Programm BreachWatch an, welches das Internet und Dark Web nach gestohlenen Passwörtern durchsucht und Sie im Falle einer Kompromittierung informiert.\n\nGern besprechen wir gemeinsam mit Ihnen, welche Lösung für Ihr Unternehmen am besten geeignet ist."
      }
    ],
    "faq": [
      {
        "question": "Welche Vorteile bietet ein Passwort-Manager für Unternehmen?",
        "answer": "Er erhöht die IT-Sicherheit, setzt Passwortrichtlinien durch, spart Zeit (nur das Masterpasswort muss gemerkt werden), erleichtert den sicheren Team-Zugriff auf gemeinsame Konten und hilft, Zugriffe für Compliance-Zwecke nachzuvollziehen."
      },
      {
        "question": "Wie sollte ein sicheres Masterpasswort aussehen?",
        "answer": "Mindestens 12 Zeichen lang, eine zufällige Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen – und einzigartig, also für kein anderes Konto verwendet. Leicht zu erratende Daten wie Geburtsdatum oder Haustiername sind tabu."
      },
      {
        "question": "Welche Risiken haben Passwort-Manager?",
        "answer": "Wird der Dienst gehackt – wie LastPass im August 2022 –, können alle Daten betroffen sein. Auch Serverausfälle können den Zugriff auf Passwörter zeitweise blockieren. Zudem können zusätzliche Kosten entstehen, und die Einrichtung braucht Zeit."
      },
      {
        "question": "Welche Passwort-Manager eignen sich für Unternehmen?",
        "answer": "Für den Businessbereich empfehlenswert sind (Stand 2023) Bitwarden (Open Source, preiswert, benutzerfreundlich), Dashlane (Passwort-Sharing, Admin-Konsole, Sicherheits-Dashboard) und Keeper (Richtlinienverwaltung, Aktivitätsberichte, umfangreicher Enterprise-Tarif)."
      }
    ]
  },
  // Übertragen von datadiorama.com/starlink-internet (Original vom 12.12.2022, via Webarchiv).
  "starlink-internet": {
    "intro": "Wer kennt ihn nicht, den umtriebigen Unternehmer und Visionär Elon Musk. Neben zahlreichen anderen Organisationen wie Tesla, The Boring Company oder Neuralink gründete er im Jahr 2002 das Raumfahrt- und Telekommunikationsunternehmen SpaceX. Mit dem von SpaceX betriebenen Satellitennetzwerk Starlink hat sich Musk in den Kopf gesetzt, schnelles Internet auch in abgelegenen Gegenden zur Verfügung zu stellen. Wie Starlink funktioniert und was Sie darüber hinaus über das Satelliten-Internet wissen müssen, erfahren Sie in diesem Artikel.",
    "keyTakeaways": [
      "Starlink ist das Satelliten-Internet von SpaceX: Tausende Satelliten in niedriger Erdumlaufbahn (340–1.150 km) liefern flächendeckend Internet – auch fernab jedes Telekommunikationsnetzes.",
      "Die Stärke liegt in der Verfügbarkeit, nicht in der Geschwindigkeit: 50–250 Mbit/s Download und 40–50 ms Latenz sind langsamer als Kabel oder Glasfaser, aber deutlich besser als klassisches Satelliten-Internet.",
      "Für Privathaushalte kostet Starlink rund 80 Euro pro Monat plus einmalige Hardwarekosten; Business-Tarife bieten mehr Leistung zu deutlich höheren Preisen (Stand Dezember 2022).",
      "Die Verbindung ist wetterfest: Starker Regen stört die Übertragung nicht, und eine integrierte Heizung der Satellitenschüssel hält auch Schnee fern.",
      "Es gibt keine Vertragsbindung – Starlink ist jederzeit kündbar, die Hardware kann innerhalb von 30 Tagen mit voller Rückerstattung zurückgesendet werden."
    ],
    "sections": [
      {
        "heading": "Was ist Starlink?",
        "body": "Die Idee für ein schnelles Internet klingt simpel: Man nehme eine Vielzahl von Satelliten und lasse sie in verhältnismäßig geringer Distanz um die Erde kreisen. Die Satelliten fungieren als Netzwerk und ermöglichen so den weltweiten Versand von Daten.\n\nIm Vergleich zu Satelliten vergleichbarer Anbieter wie dem bisherigen Marktführer Hughesnet, die in einer Höhe von 35.000 Kilometern um die Erde kreisen, beträgt die Entfernung von Starlink-Satelliten nur zwischen 340 und 1.150 Kilometern.\n\nDerzeit befinden sich 3.275 Starlink-Satelliten in der Erdumlaufbahn (Stand 15.11.2022). Damit ist SpaceX der größte Satellitenbetreiber der Erde. Doch damit nicht genug: Das Unternehmen will bis zu 30.000 Satelliten in den Weltraum befördern. Bis 2027 wurden bereits befristete Genehmigungen für den Start von maximal 11.927 Satelliten gewährt."
      },
      {
        "heading": "Wie funktioniert Starlink – und was müssen Sie für die Nutzung beachten?",
        "body": "Um Starlink zu nutzen, benötigen Sie ein Abonnement. Darin ist ein Set enthalten, bestehend aus einer Satellitenschüssel und einem Router.\n\nDer Router verbindet Ihre Geräte wie Computer, Handys, Laptops oder Tablets per WLAN oder LAN-Kabel. Die Satellitenschüssel ist per Funk mit den Starlink-Satelliten im Weltraum verbunden. Sobald sie ans Stromnetz angeschlossen und gen Himmel ausgerichtet wurde, steuert sie eigenständig einen Satelliten an und leitet das empfangene Signal an den Router weiter. Im Prinzip ähnelt die Kommunikation zwischen Satellitenschüssel und Satelliten der von Clients und Servern. Steht die Verbindung, brauchen Sie sich nur noch einzuloggen und loszulegen.\n\nHinweis: Anders als bei normalen Satellitenschüsseln setzt die Benutzung von Starlink einen freien Rundum-Blick nach oben voraus. Ein idealer Standort für die Satellitenschüssel ist daher eine Freifläche oder ein Dach."
      },
      {
        "heading": "Lohnt sich Starlink auch für Sie?",
        "body": "Wenn Sie in einer Region wohnen, in der es keinen oder nur schlechten Internetempfang gibt, könnte Starlink eine gute Alternative für Sie sein. Zwar können die Kosten nicht mit denen von Glasfaser, Kabel oder DSL mithalten, dafür ist der Dienst in Deutschland flächendeckend verfügbar. Eine Übersicht über die verfügbaren Standorte stellt Starlink auf seiner Homepage bereit.\n\nEin großer Pluspunkt für Starlink ist die Verfügbarkeit fernab eines Telekommunikationsnetzes. So stellt Starlink nicht nur für Privathaushalte und Firmen eine Lösung bereit, sondern hat ebenfalls ein stabiles Internet für Wohnmobile und den maritimen Bereich entwickelt, das sogar auf hoher See eine stabile Verbindung herstellt.\n\nFür Wohnmobile unterscheidet Starlink noch einmal zwischen „High Performance“ und „Flat High Performance“ – geeignet für die stationäre Aufstellung auf dem Campingplatz oder, in der Flat-Variante, für die dauerhafte Installation der Satellitenschüssel im Wohnmobil. Auch hier liegt der Fokus also klar auf den entlegenen Gebieten."
      },
      {
        "heading": "Welche Tarife gibt es bei Starlink?",
        "body": "Starlink ist in mehreren Ausführungen erhältlich: Starlink „Private“, „Business“ und zwei mobile Lösungen. Während die Standard-Variante für Privathaushalte gedacht ist, richtet sich der Business-Tarif an Geschäftskunden. Für die Business- und die mobile Wohnmobillösung gibt es zusätzlich einen „High Performance“- bzw. Premium-Tarif. Dieser ermöglicht noch höhere Geschwindigkeiten als der Standard-Tarif. Außerdem kann sich die Satellitenanlage mit mehr Satelliten verbinden, wodurch die Internetverbindung robuster ist – auch in extremen Umgebungen.\n\nDie Preise für Privathaushalte liegen aktuell bei 80 Euro pro Monat bei einer Bandbreite von 50–200 Mbit/s. Hinzu kommen einmalige Hardwarekosten in Höhe von 450 Euro.\n\nDie Business-Variante kostet im Standard-Tarif 65 Euro mit 50–200 Mbit/s oder 475 Euro für 100–275 Mbit/s, ein Premium-Dashboard und eine höhere Netzpriorität. Die einmaligen Hardwarekosten für Satellitenschüssel und Router liegen hier jeweils bei 2.820 Euro."
      },
      {
        "heading": "Wie schnell ist Starlink im Vergleich zu Glasfaser, Kabel oder DSL?",
        "body": "Der große Vorteil von Starlink liegt, wie schon angedeutet, nicht in der Geschwindigkeit, sondern in der schieren Verfügbarkeit einer Internetverbindung.\n\nDie Download-Geschwindigkeit von Starlink beträgt je nach Tarif zwischen 50 und 250 Mbit/s. Damit sind Internet-Alternativen wie DSL mit einer maximalen Geschwindigkeit von 250 Mbit/s und insbesondere Kabel und Glasfaser mit bis zu 1.000 Mbit/s deutlich schneller.\n\nAuch in Bezug auf die Latenzzeit kann Starlink mit Werten von 40 bis 50 Millisekunden (ms) nicht mit alternativen Internetverbindungen mithalten. Während die Latenzzeit bei DSL- und Kabel-Internetzugängen in der Regel zwischen 20 und 40 ms beträgt, weist Glasfaser mit Werten unter 10 ms die geringste Latenz auf. Immerhin schneidet Starlink verglichen mit anderen Anbietern von Satelliten-Internet insgesamt besser ab.\n\nZur Einordnung: Die Latenzzeit (auch Ping) beschreibt, wie lange gesendete Daten brauchen, bis sie beim Empfangsgerät ankommen. Grundsätzlich gilt: Je geringer die Latenzzeit, desto besser bzw. schneller ist die Internetverbindung. Normale Ping-Werte liegen zwischen zehn und 100 ms."
      },
      {
        "heading": "Mit welchen Kosten müssen Sie für die Nutzung von Starlink rechnen?",
        "body": "Für Starlink Standard zahlen Sie einmalig 460 Euro für die Hardware (ohne Versand- und Abwicklungskosten). Hinzu kommt eine monatliche Gebühr von 80 Euro (Preise: Stand Dezember 2022). Die beiden Business-Tarife sind deutlich teurer, beinhalten jedoch auch mehr Leistung.\n\nHinweis: Zuzüglich zu den genannten Kosten sollten Sie den höheren Stromverbrauch der Satellitenschüssel einkalkulieren. Sie verbraucht circa 30-mal mehr Energie als ein gängiger Router."
      },
      {
        "heading": "Ist die Internetverbindung via Starlink auch stabil?",
        "body": "Die Internetverbindung ist sehr stabil, sodass selbst starker Regen keine negativen Auswirkungen auf die Datenübertragung hat. Außerdem verfügt die Satellitenschüssel über eine integrierte Heizung, sodass auch Schneeschichten kein Problem darstellen."
      },
      {
        "heading": "Wie sind die Vertragsbedingungen von Starlink?",
        "body": "Um Starlink zu nutzen, müssen Sie keinen Vertrag abschließen und können jederzeit kündigen. Außerdem verweisen die FAQ von Starlink darauf, dass Ihnen eine vollständige Rückerstattung für die Hardware gewährt wird, falls Sie den Service innerhalb von 30 Tagen nach Erhalt zurücksenden.\n\nSie möchten Starlink ausprobieren und benötigen dabei fachmännische Hilfe? Gern beraten wir Sie unverbindlich und richten den Dienst für Sie ein."
      }
    ],
    "faq": [
      {
        "question": "Für wen lohnt sich Starlink?",
        "answer": "Vor allem für Nutzer in Regionen mit keinem oder schlechtem Internetempfang – Starlink ist in Deutschland flächendeckend verfügbar und funktioniert auch fernab jedes Telekommunikationsnetzes, etwa im Wohnmobil oder auf hoher See. Wo Glasfaser, Kabel oder DSL verfügbar sind, sind diese schneller und günstiger."
      },
      {
        "question": "Wie schnell ist Starlink?",
        "answer": "Je nach Tarif liegt die Download-Geschwindigkeit zwischen 50 und 250 Mbit/s bei einer Latenz von 40 bis 50 ms. Damit ist Starlink langsamer als Kabel oder Glasfaser (bis 1.000 Mbit/s, unter 10 ms Latenz), schneidet aber besser ab als andere Satelliten-Internet-Anbieter."
      },
      {
        "question": "Was kostet Starlink?",
        "answer": "Für Privathaushalte kostet Starlink rund 80 Euro pro Monat plus einmalige Hardwarekosten von etwa 450–460 Euro (Stand Dezember 2022). Business-Tarife starten bei 65 Euro monatlich, die Hardware kostet hier 2.820 Euro. Zusätzlich sollten Sie den höheren Stromverbrauch der Satellitenschüssel einkalkulieren."
      },
      {
        "question": "Gibt es bei Starlink eine Vertragsbindung?",
        "answer": "Nein. Sie können jederzeit kündigen, und wenn Sie die Hardware innerhalb von 30 Tagen nach Erhalt zurücksenden, erhalten Sie laut Starlink-FAQ eine vollständige Rückerstattung."
      }
    ]
  },
  // Übertragen von datadiorama.com/netzwerksicherheit-unternehmen (Original vom 27.10.2022, via Webarchiv).
  "netzwerksicherheit-unternehmen": {
    "intro": "Sie machen sich Gedanken darüber, ob die Netzwerksicherheit Ihres Unternehmens gegeben ist? Damit sind Sie nicht allein. In Zeiten, in denen Cyberkriminalität an der Tagesordnung steht und Angriffe auf Unternehmen schnell über die Medien die Runde machen, ist das auch nicht verwunderlich. Zwar ist nicht jedes Unternehmen gleichermaßen von Cyberattacken bedroht, doch die Netzwerksicherheit sollte auch in Ihrem Unternehmen oberste Priorität haben. Nachfolgend haben wir die sechs häufigsten Probleme zusammengestellt, die die Sicherheit Ihres Unternehmensnetzwerks gefährden können.",
    "keyTakeaways": [
      "Viele Firewalls in Unternehmen sind für den geschäftlichen Einsatz nicht robust genug oder decken nicht alle Punkte ab, an denen Daten ein- und ausgehen.",
      "Virenscanner nützen nur, wenn sie fachgerecht installiert, regelmäßig aktualisiert und nicht von Mitarbeitern abgeschaltet werden.",
      "Phishing – insbesondere gezieltes Spear-Phishing – ist eines der größten Einfallstore; Security-Awareness-Schulungen sind die beste Gegenmaßnahme.",
      "Ungesicherte WLAN-Router und schwache Passwörter machen es Angreifern leicht; Passwörter sollten mindestens 8 bis 12 Zeichen lang sein.",
      "BYOD („Bring Your Own Device“) erfordert ein eigenes IT-Sicherheitskonzept mit VPN, Verschlüsselung und klarem Rechte-Management."
    ],
    "sections": [
      {
        "heading": "1. Firewalls fehlen oder sind nicht robust genug",
        "body": "Eine der wichtigsten Sicherheitsmaßnahmen, um Ihr Unternehmensnetzwerk zu schützen, ist die Einrichtung einer sogenannten Firewall (zu Deutsch: Brandschutzmauer). Sie fungiert als eine Art Barriere zwischen dem zu schützenden Netzwerk und der Außenwelt, indem sie den eingehenden Datenverkehr prüft und entweder zulässt oder blockiert.\n\nFirewalls gibt es in verschiedenen Ausführungen, wie z. B. Hardware-Firewalls (On-Premise), Firewalls in der Cloud oder Kombinationslösungen.\n\nMeist verfügen Unternehmen zwar über eine entsprechende Firewall. In vielen Fällen sind diese für den geschäftlichen Einsatz jedoch nicht stabil genug bzw. decken nicht das gesamte Netzwerk an den Punkten ab, an denen Daten ein- und ausgehen. Wenn Sie unsicher sind, ob die in Ihrem Unternehmen genutzte Firewall den Ansprüchen genügt, lohnt sich eine fachkundige Prüfung."
      },
      {
        "heading": "2. Anti-Viren-Scanner werden nicht gewartet",
        "body": "Neben einer korrekt konfigurierten Firewall ist auch eine kluge Antivirus-Lösung für die Netzwerksicherheit entscheidend. So sollten auf allen Firmencomputern und anderen technischen Geräten (z. B. E-Mail-Servern) Antiviren-, Spyware- und Malware-Scanner installiert sein.\n\nObwohl solche Vorkehrungen in den meisten Unternehmen getroffen werden, kommt es immer wieder vor, dass Scans nicht aktualisiert werden – z. B. weil Mitarbeiter den Scanner während der Arbeitszeit einfach ausschalten. Ein weiteres Problem ist, dass keine regelmäßigen Updates der Scanner stattfinden. Dadurch haben Viren, Würmer, Trojaner, Ransomware und Spyware leichtes Spiel, in ein Unternehmensnetzwerk einzudringen.\n\nUm die Sicherheit Ihres Unternehmensnetzwerks zu gewährleisten, achten Sie darauf, dass Scanner sowohl fachgerecht installiert als auch regelmäßig gewartet werden."
      },
      {
        "heading": "3. Veraltete E-Mail-Übertragungsmethoden",
        "body": "Wenn Sie cloudbasierte Optionen wie z. B. Microsoft 365 oder Exchange verwenden, sind Ihre E-Mail-Übertragungssysteme auf dem neuesten Stand und damit grundsätzlich sicher.\n\nFalls Sie jedoch noch immer E-Mail-Systeme wie z. B. POP (Post Office Protocol) oder andere Systeme verwenden, die keine Passwörter verschlüsseln, besteht die Gefahr, dass Dritte mit entsprechendem Know-how und den richtigen Tools Anmeldeinformationen erfassen und Ihre Daten manipulieren können. In diesem Fall sollten Sie schnellstmöglich auf moderne E-Mail-Übertragungsmethoden umstellen."
      },
      {
        "heading": "4. Phishing-E-Mails als Eintrittstor zum Unternehmensnetzwerk",
        "body": "Vielleicht haben Sie oder Ihre Mitarbeiter auch schon versehentlich auf eine Phishing-Mail geklickt. Dann sind Sie keine Ausnahme, denn seit der Corona-Pandemie ist ein massiver Zuwachs von Spam- und Phishing-Kampagnen zu verzeichnen.\n\nDer mit der Pandemie verbundene Trend zum Home-Office spielt Cyberkriminellen zusätzlich in die Hände. Denn viele Firmen waren nicht darauf vorbereitet, ihren Mitarbeitern in kurzer Zeit eine ausreichend gesicherte Infrastruktur zur Verfügung zu stellen. Die so entstandenen Sicherheitslücken sind größtenteils noch immer nicht behoben.\n\nHinzu kommt, dass Kriminelle immer geschickter vorgehen. Bei den sogenannten Spear-Phishing-Mails spähen Angreifer auf der Firmenhomepage oder in den sozialen Medien ihre Opfer aus und erstellen dann maßgeschneiderte Phishing-Mails. Dabei nehmen sie beispielsweise gezielt auf ein Ereignis Bezug, von dem nur der Mitarbeiter weiß, oder lesen mittels Malware (z. B. Emotet) bestehende E-Mail-Verläufe aus und verschicken innerhalb der Organisation E-Mails mit einem infizierten Anhang. Somit wird es für Mitarbeiter immer schwieriger, echte von falschen Nachrichten zu unterscheiden.\n\nDie beste Maßnahme, um zu verhindern, dass Ihre Mitarbeiter Phishing-Mails anklicken, sind umfangreiche Security-Awareness-Schulungen. Hier geht es darum, das Bewusstsein für IT-Sicherheitsrisiken zu schärfen, sodass Angestellte künftig vorsichtiger und kritischer – unter anderem im Umgang mit Phishing-Mails – agieren."
      },
      {
        "heading": "5. Sicherheitsrisiko durch WLAN und andere drahtlose Netzwerke",
        "body": "Ob zur Verknüpfung von Computern, Druckern oder Netzwerkbaugruppen: Drahtlose Netzwerke sind allgegenwärtig und ermöglichen Mitarbeitern, auch während der Arbeitszeit online zu gehen.\n\nOft verfügen Unternehmen jedoch lediglich über eine Haupt-Internetverbindung kombiniert mit mehreren drahtlosen Routern. Diese Methode spart zwar Geld, ist aber in vielen Fällen ein Sicherheitsrisiko für das Unternehmensnetzwerk. Vor allem dann, wenn für die Router keine Passwörter festgelegt werden, kann sich jeder, der in Reichweite ist, mit dem betreffenden Netzwerk verbinden. Für Hacker ist dies ein „gefundenes Fressen“, denn sie suchen gezielt nach solchen Schwachstellen, um das Netzwerk anzugreifen.\n\nDoch nicht nur eine fehlende Passwortvergabe erleichtert es Angreifern, Daten zu erfassen. Auch Passwörter, die zu leicht zu erraten sind, stellen ein Sicherheitsrisiko dar. Achten Sie deshalb darauf, dass (Router-)Passwörter mindestens 8 bis 12 Zeichen lang sind. Überlegen Sie sich am besten einen Satz, der mindestens eine Zahl enthält und sich gut merken lässt, etwa: „Am liebsten fahre ich 5 Mal im Jahr in den Urlaub, besser alle 2 Wochen.“ Für das Passwort werden nur die ersten Buchstaben eines jeden Wortes sowie die Zahlen verwendet und mathematische Operatoren (+-*/) als Zeichen geschrieben. Daraus ergibt sich das sichere Passwort: Alfi5*iJidU,ba2W"
      },
      {
        "heading": "6. Sicherheitsrisiko BYOD („Bring Your Own Device“)",
        "body": "In den meisten deutschen Unternehmen ist BYOD („Bring Your Own Device“) schon ein Normalzustand. Das bedeutet, dass Mitarbeiter ihre privaten mobilen Endgeräte wie Computer, Smartphones, Tablets, Laptops und USB-Sticks auch am Arbeitsplatz (im Unternehmen und/oder im Home-Office) nutzen.\n\nWas grundsätzlich erst einmal nach einer guten Idee klingt, stellt viele Unternehmen jedoch vor große Herausforderungen – vor allem in Bezug auf die Sicherheit. Das Problem dabei ist, dass viele Geräte ungeschützt sind, über unzureichende Identifizierungstechnologien oder veraltete Programme verfügen. Darüber hinaus ist es für IT-Administratoren schwierig, sämtliche Software-Aktualisierungen manuell oder halbautomatisiert vorzunehmen, weil es zu viele verschiedene privat genutzte Geräte, Anwendungen und Betriebssysteme gibt.\n\nWenn Sie dennoch nicht auf BYOD verzichten wollen, ist ein entsprechendes IT-Sicherheitskonzept ratsam, das folgende Punkte berücksichtigen sollte:",
        "bullets": [
          "Einrichtung einer Firewall und eines Virtual Private Networks (VPN)",
          "Regelmäßige Aktualisierung der Virenscanner sowie Updates von Software und Betriebssystem",
          "Sicherstellung des Rechte- und Zugriffsmanagements",
          "Trennung von privaten und beruflich genutzten Geräten mittels Virtualisierung (Unternehmensdaten sollten im Firmennetzwerk gespeichert werden und nicht auf privaten Geräten)",
          "Verschlüsselung aller Geräte",
          "Komplette Löschung der Unternehmenssoftware und -daten auf privat genutzten Geräten im Falle einer Beendigung des Arbeitsverhältnisses"
        ]
      },
      {
        "heading": "Netzwerksicherheit im Unternehmen – Fazit",
        "body": "Netzwerksicherheit ist ein komplexes Thema, und sofern Sie keinen eigenen IT-Fachmann im Haus haben, kann es sehr nützlich sein, sich in Sachen IT-Sicherheit von einem externen Dienstleister beraten zu lassen.\n\nDarüber hinaus können Sie über entsprechende Schulungen Ihre Mitarbeiter für das Thema sensibilisieren. Denn das schwächste Glied in der Kette sind nach wie vor Menschen – und der größte Angriffspunkt beim Hacking ist immer das Social Engineering, hierbei explizit das Phishing (das „Fischen“ nach Passwörtern). Gern beraten wir Sie unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Reicht eine vorhandene Firewall aus, um das Unternehmensnetzwerk zu schützen?",
        "answer": "Nicht unbedingt. Viele Firewalls sind für den geschäftlichen Einsatz nicht stabil genug oder decken nicht das gesamte Netzwerk an den Punkten ab, an denen Daten ein- und ausgehen. Eine fachkundige Prüfung schafft Klarheit."
      },
      {
        "question": "Wie schütze ich meine Mitarbeiter am besten vor Phishing-Mails?",
        "answer": "Die beste Maßnahme sind umfangreiche Security-Awareness-Schulungen. Sie schärfen das Bewusstsein für IT-Sicherheitsrisiken, sodass Mitarbeiter vorsichtiger und kritischer mit verdächtigen E-Mails umgehen."
      },
      {
        "question": "Wie sieht ein sicheres Router-Passwort aus?",
        "answer": "Es sollte mindestens 8 bis 12 Zeichen lang sein. Ein bewährter Trick: einen merkbaren Satz mit mindestens einer Zahl überlegen und nur die Anfangsbuchstaben der Wörter sowie die Zahlen verwenden, mathematische Operatoren als Zeichen geschrieben."
      },
      {
        "question": "Ist BYOD im Unternehmen grundsätzlich unsicher?",
        "answer": "BYOD birgt Risiken, weil viele private Geräte ungeschützt oder veraltet sind. Mit einem IT-Sicherheitskonzept – u. a. VPN, regelmäßigen Updates, Rechte-Management, Verschlüsselung und Trennung privater und beruflicher Daten – lässt es sich aber verantwortungsvoll umsetzen."
      }
    ]
  },
  // Übertragen von datadiorama.com/automatisierung-von-geschaeftsprozessen (Original vom 24.08.2022, via Webarchiv).
  "automatisierung-von-geschaeftsprozessen": {
    "intro": "Es passiert jeden Tag: Dokumente werden in unterschiedlichen Dateiformaten geliefert und sollen in ein System eingepflegt oder für einen Bericht zusammengefügt werden. Schnell kommt es dabei zu Übertragungs-, Abschreib- oder Kopierfehlern. Doch das muss nicht sein, denn diese Aufgaben lassen sich automatisieren und standardisieren. Dadurch steigt nicht nur die betriebliche Effizienz – es bleibt auch mehr Zeit für strategische Entscheidungen, und Sie können mit konkurrierenden Unternehmen mithalten.",
    "keyTakeaways": [
      "Wiederkehrende Übertragungsaufgaben lassen sich automatisieren – das spart Zeit und Arbeitskosten und verhindert Abschreib- und Kopierfehler.",
      "Software arbeitet exakter und konsistenter als manuelle Bearbeitung und liefert immer dasselbe Ergebnis.",
      "Das größte Potenzial haben mittelständische Unternehmen, weil dort viele Prozesse aus Kostengründen noch manuell ablaufen.",
      "Typische Anwendungsfälle sind Datentransfers zwischen Portalen, PDF, Excel und Datev sowie die automatische Erstellung von Dokumenten und Reports.",
      "Am Anfang steht die Analyse der Anforderungen und Daten – Automatiken laufen dann nach Zeitplan oder werden durch neue Dateien ausgelöst."
    ],
    "sections": [
      {
        "heading": "Welche Vorteile bringt die Automatisierung von Geschäftsprozessen?",
        "body": "Zeit und Kosten sparen: Durch den Einsatz von Software können tausende Daten pro Sekunde gefiltert, analysiert und Metriken berechnet werden – viel schneller und präziser als bei manueller Bearbeitung. Außerdem spart die Automatisierung viel Zeit und Arbeitskosten, insbesondere dann, wenn mehrere Operationen gleichzeitig durchgeführt werden müssen.\n\nFehler verhindern und Genauigkeit erhöhen: Schon eine einzige Fehlberechnung kann für ein Unternehmen in finanzieller Hinsicht fatale Folgen haben. Der menschliche Faktor birgt zudem das Risiko, dass trotz exakter Vorgaben und Arbeitsschritte oft unterschiedliche Ergebnisse erzielt werden – Mitarbeitende sind schließlich keine Roboter mit konstant gleichem Leistungsniveau. Software hingegen kann nicht nur mehrere Aufgaben gleichzeitig, sondern auch viel exakter und immer mit demselben Ergebnis ausführen. Außerdem lassen sich automatisierte Prozesse effizienter delegieren und besser skalieren.\n\nZufriedene Mitarbeitende: In vielen Bereichen wiederholen sich Abläufe immer und immer wieder. Das führt schnell zu Langeweile oder Frustration. Übernimmt eine Software diese wiederkehrenden Aufgaben, sind Mitarbeitende nicht nur zufriedener, sondern können die gewonnene Zeit für anspruchsvollere Tätigkeiten nutzen."
      },
      {
        "heading": "Wer profitiert am meisten von der Automatisierung?",
        "body": "Auch wenn letztlich jedes Unternehmen von einer Automatisierung von Geschäftsprozessen profitiert – das größte Potenzial haben mittelständische Unternehmen. Denn gerade hier laufen viele Prozesse meist aus Kostengründen noch manuell ab.\n\nIn diesen Bereichen können wir Sie bei einer Automatisierung unterstützen, um Ihren Mitarbeitenden den Arbeitsalltag zu erleichtern:",
        "bullets": [
          "Datentransfer von Internetportalen in Excel oder umgekehrt",
          "Datentransfer von PDF in Excel oder Excel zu PDF",
          "Datentransfer aus beliebigen Quellen zu Excel oder Datev",
          "Datentransfer von Excel zu Excel oder Datev",
          "Automatische Erstellung von PDF-Dokumenten aus Excel-Tabellen",
          "Automatische Übertragung von Dokumentenstapeln (PDF oder Word) in Excel-Tabellen"
        ]
      },
      {
        "heading": "Beispiele aus der Praxis",
        "body": "Für die Umsetzung entwickeln wir eine Software, die genau auf Ihre Anwendungsfälle zugeschnitten ist, oder beraten Sie bei Auswahl und Implementierung der am Markt vorhandenen Lösungen.\n\nFür ein großes Ingenieur-Unternehmen im Energiebereich haben wir eine Konvertierung von Messdaten aus hunderten unterschiedlicher Datenquellen sowie eine Zusammenfassung der Daten und Ausgabe in automatischen Reports und Abrechnungen (PDF, Excel) umgesetzt.\n\nEine Druckerei profitiert jetzt vom automatischen Auslesen von PDF-Dateien für eine Zeitplanungsdatenbank. Und für ein großes Bauunternehmen haben wir eine Umwandlung von PDF-Dateien in Datev-importierbare XML-Reports erstellt."
      },
      {
        "heading": "Am Anfang steht der intensive Austausch",
        "body": "Bevor es an die Umsetzung geht, schauen wir uns die genauen Anforderungen und die betreffenden Daten an. Dadurch können wir die Automatisierung von Geschäftsprozessen Ihren Bedürfnissen entsprechend anpassen.\n\nJe nachdem, was gewünscht ist, können die Automatiken entweder nach Zeitplan laufen oder werden ausgelöst, wenn eine passende Datei in einem bestimmten Verzeichnis gespeichert wird. Gern beraten wir Sie unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Welche Aufgaben lassen sich typischerweise automatisieren?",
        "answer": "Vor allem wiederkehrende Datentransfers: von Internetportalen in Excel, zwischen PDF und Excel, aus beliebigen Quellen zu Excel oder Datev sowie die automatische Erstellung von PDF-Dokumenten aus Excel-Tabellen oder die Übertragung von Dokumentenstapeln in Tabellen."
      },
      {
        "question": "Für welche Unternehmen lohnt sich die Automatisierung besonders?",
        "answer": "Das größte Potenzial haben mittelständische Unternehmen, weil dort viele Prozesse meist aus Kostengründen noch manuell ablaufen. Grundsätzlich profitiert aber jedes Unternehmen."
      },
      {
        "question": "Wie werden automatisierte Prozesse ausgelöst?",
        "answer": "Je nach Anforderung laufen die Automatiken nach einem Zeitplan oder werden ausgelöst, sobald eine passende Datei in einem bestimmten Verzeichnis gespeichert wird."
      },
      {
        "question": "Brauche ich eine individuelle Software oder gibt es fertige Lösungen?",
        "answer": "Beides ist möglich: Entweder wird eine Software entwickelt, die genau auf Ihre Anwendungsfälle zugeschnitten ist, oder Sie werden bei Auswahl und Implementierung der am Markt vorhandenen Lösungen beraten."
      }
    ]
  },
  // Übertragen von datadiorama.com/it-sicherheit-schulung (Original vom 20.06.2022, via Webarchiv).
  "it-sicherheit-schulung": {
    "intro": "Wussten Sie, dass Cyberattacken mehr Schäden in Unternehmen verursachen als jede andere Form der Kriminalität? Die Folgen einer erfolgreichen Attacke sind unternehmensgefährdend: tage- oder wochenlange Arbeitsausfälle, der Verlust unersetzbarer Bestandsdaten, Rufschädigung, hohe Kosten zur Wiedererlangung der Arbeitsfähigkeit bis hin zur jahrelangen Erschwerung der Weiterarbeit durch fehlende Datenbasis. Führende IT-Sicherheitsunternehmen sehen in der Stärkung des Sicherheitsbewusstseins der Angestellten den größten Hebel zur Verbesserung der Unternehmenssicherheit – und die geeignetste Maßnahme dafür sind Mitarbeiterschulungen (Security-Awareness-Schulungen).",
    "keyTakeaways": [
      "Auf Unternehmen zugeschnittene Angriffe nehmen zu – Erpressung mit Datenverschlüsselung und Veröffentlichungsdrohung (Double Extortion Ransomware) ist ein Millionengeschäft mit professionellen kriminellen Strukturen.",
      "90 % der verbreiteten Angriffe auf Unternehmensnetzwerke erfordern eine Mitwirkung von innen – häufig unwissentlich.",
      "Geschulte Mitarbeitende erkennen Angriffe früher, handeln im Notfall besser und machen die häufigsten Fehler nie.",
      "Empfohlen werden eine Basisschulung für alle, eine Basisschulung in der Einarbeitung, jährliche Auffrischungen, eine Extra-Schulung für Entscheider und regelmäßige Weiterbildung des IT-Personals.",
      "Security-Awareness-Schulungen sind für jede Unternehmensgröße relevant."
    ],
    "sections": [
      {
        "heading": "Was sind die Vorteile von IT-Sicherheitsschulungen?",
        "body": "Die Vorteile von IT-Sicherheits- oder Security-Awareness-Schulungen liegen auf der Hand: Geschulte Mitarbeiter:innen erkennen einen Angriff früher, handeln im Notfall besser und schneller und helfen so, den Schaden zu begrenzen. Und mehr noch: Mitarbeiterschulungen schaffen nicht nur eine sicherheitsbewusste Unternehmenskultur – geschulte Teams machen die häufigsten Fehler nie und die seltenen Fehler seltener.\n\nDie Trainings haben noch einen weiteren positiven Effekt: Ihre Mitarbeitenden sind insgesamt zufriedener, weil sie bestehende Einschränkungen besser verstehen und nicht als Ausdruck des Misstrauens ihnen gegenüber empfinden."
      },
      {
        "heading": "Welche Maßnahmen sind sinnvoll und wie oft sollten sie durchgeführt werden?",
        "body": "90 % der verbreiteten Angriffe auf Unternehmensnetzwerke erfordern eine Mitwirkung von innen, also aus dem Unternehmen heraus. Das heißt aber nicht, dass Mitarbeiter:innen immer bewusst involviert sein müssen. Vieles geschieht leider unwissentlich – sei es, weil Sicherheitsmaßnahmen aus mangelndem Verständnis oder fehlender Motivation umgangen werden, weil sich Mitarbeiter:innen auf technische Schutzmechanismen verlassen oder weil schlicht das Wissen rund um IT-Sicherheit fehlt. Deshalb sind Mitarbeiterschulungen so essenziell.\n\nUm die Sicherheit in Ihrem Unternehmen zu erhöhen, empfehlen wir folgende Maßnahmen:",
        "bullets": [
          "1x Basis-Sicherheitsschulung für alle Mitarbeiter:innen auf allen Ebenen",
          "1x Basis-Schulung als Teil des Einarbeitungsprozesses",
          "1x jährlich eine kurze Auffrischung zu den wesentlichen und neuen Aspekten",
          "Extra-Schulung für Entscheider:innen zu strukturellen Maßnahmen zur Verbesserung der IT-Sicherheit",
          "Regelmäßige Weiterbildung Ihres IT-Personals"
        ]
      },
      {
        "heading": "Worin unterscheiden sich die jeweiligen Schulungen?",
        "body": "Für die Basis-Sicherheitsschulung sollten Sie ca. 2 Stunden einplanen. Dabei gehen wir anschaulich auf die größten Gefahren ein und erklären, wie man sie erkennt und meidet und wie im Notfall zu verfahren ist. Vorwissen ist nicht erforderlich.\n\nDie Auffrischungsschulung dauert ca. 1 Stunde und richtet sich an diejenigen, die die Basisschulung bereits erhalten haben. Hierbei gehen wir anhand von Illustrationen auf die gängigsten Probleme der IT-Sicherheit ein und erinnern an die wichtigsten Verhaltensregeln.\n\nDie Schulung für Entscheider:innen dauert 2–3 Stunden und befasst sich mit technischen und organisatorischen Strategien zur Vermeidung der häufigsten IT-Sicherheitsprobleme und zur Schadensbegrenzung im Notfall. Im Fokus stehen die besonderen Bedürfnisse im jeweiligen Tätigkeitsfeld der geschulten Organisation. Ein Tipp: Steht bei Ihnen eine Umstrukturierung der EDV an, ist die Schulung für Entscheider:innen genau das Richtige, denn sie eignet sich auch als Vorbereitung auf die Zusammenarbeit mit Beratungs- oder anderen IT-Unternehmen. Vorwissen ist nicht erforderlich."
      },
      {
        "heading": "Ab welcher Unternehmensgröße sind Security-Awareness-Schulungen relevant?",
        "body": "Security-Awareness-Schulungen sind für jede Unternehmensgröße relevant. Für große Unternehmen, die häufig IT-Abteilungen mit internen Sicherheitsstrategien haben, bieten wir auf das Unternehmen zugeschnittene Schulungen an und planen diese gemeinsam mit den entsprechenden Abteilungen. Die Schulungen führen wir entweder in unseren Räumlichkeiten oder gern auch bei Ihnen vor Ort durch – sprechen Sie uns einfach an."
      }
    ],
    "faq": [
      {
        "question": "Warum sind Mitarbeiterschulungen für die IT-Sicherheit so wichtig?",
        "answer": "90 % der verbreiteten Angriffe auf Unternehmensnetzwerke erfordern eine Mitwirkung von innen – häufig unwissentlich, etwa weil Sicherheitsmaßnahmen umgangen werden oder Wissen fehlt. Geschulte Mitarbeitende erkennen Angriffe früher und begrenzen im Notfall den Schaden."
      },
      {
        "question": "Wie oft sollten IT-Sicherheitsschulungen durchgeführt werden?",
        "answer": "Empfohlen werden eine Basisschulung für alle Mitarbeitenden, eine Basisschulung als Teil der Einarbeitung, eine jährliche kurze Auffrischung, eine Extra-Schulung für Entscheider:innen sowie regelmäßige Weiterbildung des IT-Personals."
      },
      {
        "question": "Brauchen Teilnehmende Vorwissen für die Schulungen?",
        "answer": "Nein. Sowohl für die ca. zweistündige Basis-Sicherheitsschulung als auch für die Schulung für Entscheider:innen ist kein Vorwissen erforderlich."
      },
      {
        "question": "Lohnen sich Security-Awareness-Schulungen auch für kleine Unternehmen?",
        "answer": "Ja, sie sind für jede Unternehmensgröße relevant. Für größere Unternehmen mit eigenen IT-Abteilungen werden die Schulungen zugeschnitten und gemeinsam mit den entsprechenden Abteilungen geplant."
      }
    ]
  },
  // Übertragen von datadiorama.com/microsoft-365-migration-fallbeispiel (Original vom 10.05.2022, via Webarchiv).
  "microsoft-365-migration-fallbeispiel": {
    "intro": "Im Zuge der Digitalisierung werden Cloud-Services immer wichtiger. Viele Unternehmen profitieren bereits von den Vorteilen moderner Cloud-Umgebungen, etwa einer kostengünstigen, schnellen und wartungsfreien IT-Infrastruktur und der Möglichkeit, digitale Services leicht zu skalieren. In unserem Fallbeispiel lesen Sie, wie unsere Experten von Datadiorama ein KMU dabei unterstützt haben, auf Microsoft 365 umzustellen.",
    "keyTakeaways": [
      "Ausgangslage: eine Kinder- und Jugendhilfe-Einrichtung mit 40 Mitarbeitern an verteilten Standorten, Problemen beim VPN-Datenzugriff und Versionschaos bei Dokumenten – bei besonders sensiblen, gesetzlich zu schützenden Daten.",
      "Empfohlene Lösung: Microsoft 365 mit Serverstandort Deutschland, nach Vorstellung mehrerer Alternativvarianten mit Kosten und Prozessen.",
      "Umsetzung: Dokumentenmigration, Bereinigung von Doppelstrukturen, Userkonten und Zugriffsrechte auf Basis eines gemeinsamen Datenschutzkonzepts, Schulung von Multiplikatoren vor Ort.",
      "Ergebnis: besser vernetzte Standorte, einfachere zentrale Verwaltung, leichtere Zusammenarbeit – und der Wegfall der fehleranfälligen VPN-Zugriffe."
    ],
    "sections": [
      {
        "heading": "Das Problem",
        "body": "Für eine Kinder- und Jugendhilfe-Einrichtung mit 40 Mitarbeitern an verteilten Standorten im In- und Ausland haben wir auf Microsoft 365 umgestellt, weil das Unternehmen große Probleme mit der Regelung des Datenzugriffs über VPN und mit dem Versenden verschiedener Versionen derselben Dokumente hatte. Darüber hinaus ergeben sich aus der Arbeit mit gefährdeten Jugendlichen besonders sensible und gesetzlich zu schützende Daten. Hier bestand also dringend Handlungsbedarf."
      },
      {
        "heading": "Die Umsetzung",
        "body": "Die Ausgangslage war, dass es im Betrieb sowohl lokale Rechner mit verschiedenen Versionen von Windows und Office als auch mehrere Betriebssystem-Umgebungen gab. Nachdem verschiedene Alternativvarianten mit den dazugehörigen Kosten und Prozessen vorgestellt wurden, haben wir dem Unternehmen als beste Lösung Microsoft 365 mit Serverstandort Deutschland empfohlen.\n\nIn der Umsetzung wurden zunächst die Dokumente von den verschiedenen lokalen Datenträgern und Servern migriert. Dabei identifizierten und beseitigten unsere Experten unnütze Doppelstrukturen, legten die Userkonten für das gesamte Team an und verteilten die Zugriffsrechte auf Basis eines gemeinsam erstellten Datenschutzkonzeptes.\n\nDie Umstellung war für die meisten Mitarbeiter einfach, denn die neuen Anwendungen waren mit den gewohnten weitgehend deckungsgleich und leicht zu bedienen. Für den Umgang mit Microsoft Teams und die Nutzung gemeinsamer Kalender schulten unsere Spezialisten Multiplikatoren innerhalb des Teams direkt vor Ort.\n\nDie Notwendigkeit, sich per VPN in die Unternehmenszentrale zu verbinden, um auf gemeinsame Daten zuzugreifen, entfiel – und damit auch eine häufige Quelle von Fehlern und eine Gefährdung der Daten durch schlecht gesicherte Heim-Netzwerke bei den Mitarbeitern."
      },
      {
        "heading": "Das Ergebnis",
        "body": "Die Umstellung war ein Erfolg auf ganzer Linie. Nicht nur die einzelnen Standorte sind jetzt besser verzahnt und vernetzt als zuvor, auch die zentrale Verwaltung ist viel einfacher geworden. Außerdem erleichtern die Cloud-Anwendungen die Zusammenarbeit der Mitarbeiter – ein Aspekt, der vor allem in der Corona-Pandemie wichtig war."
      },
      {
        "heading": "Ihr Partner für die Cloud-Umstellung",
        "body": "Mit folgenden Leistungen unterstützen wir Sie bei der Migration in die Cloud:",
        "bullets": [
          "Beratung bei der Auswahl der optimalen Lösung und der Planung des Weges dahin",
          "Schulung der Angestellten zur optimalen Nutzung der Vorteile",
          "Praktische Umsetzung der Migration in die Cloud",
          "Dauerhafte Betreuung der Unternehmens-IT und optimale Sicherung von Cloud-Daten",
          "Gestaltung der Prozesse zur Nutzung der Cloud-Vorteile und Verbesserung der Unternehmenssicherheit"
        ]
      }
    ],
    "faq": [
      {
        "question": "Warum hat sich die Einrichtung für Microsoft 365 entschieden?",
        "answer": "Das Unternehmen hatte große Probleme mit dem Datenzugriff über VPN und mit verschiedenen Versionen derselben Dokumente. Zudem erfordert die Arbeit mit gefährdeten Jugendlichen den Schutz besonders sensibler Daten. Nach Vorstellung mehrerer Alternativen fiel die Wahl auf Microsoft 365 mit Serverstandort Deutschland."
      },
      {
        "question": "Wie aufwendig war die Umstellung für die Mitarbeiter?",
        "answer": "Für die meisten Mitarbeiter war die Umstellung einfach, weil die neuen Anwendungen den gewohnten weitgehend glichen. Für Microsoft Teams und gemeinsame Kalender wurden Multiplikatoren im Team direkt vor Ort geschult."
      },
      {
        "question": "Welche Verbesserungen brachte die Migration?",
        "answer": "Die Standorte sind besser verzahnt und vernetzt, die zentrale Verwaltung ist einfacher, die Zusammenarbeit leichter – und die fehleranfälligen VPN-Zugriffe über schlecht gesicherte Heim-Netzwerke entfielen."
      }
    ]
  },
  // Übertragen von datadiorama.com/web-app-vs-desktop-app (Original vom 10.05.2022, via Webarchiv).
  "web-app-vs-desktop-app": {
    "intro": "Sie und Ihre Mitarbeiter nutzen Excel und Word noch immer lokal auf dem Rechner? In diesem Artikel erklären wir Ihnen, welche Vor- und Nachteile lokale bzw. webbasierte Anwendungen haben und ob es sich lohnt, weiterhin auf die klassische Desktop-Anwendung zu setzen.",
    "keyTakeaways": [
      "Web-Anwendungen laufen im Browser und funktionieren geräte- und betriebssystemunabhängig; lokale Anwendungen müssen installiert werden und sind an ein Betriebssystem gebunden.",
      "Lokale Anwendungen punkten bei fehlendem oder langsamem Internet, einmaligen Kosten und Spezialfunktionen – bergen aber Risiken bei Geräteverlust, Virenbefall und fehlender zentraler Rechteverwaltung.",
      "Web-Anwendungen ermöglichen Zugriff von überall, gleichzeitiges Arbeiten mehrerer Nutzer und automatische Aktualität – benötigen aber eine funktionierende Internetverbindung.",
      "Für rechenintensive Aufgaben wie Videoschnitt, BIM oder 3D-Modelling bleiben lokale Anwendungen die bessere Wahl; für Office-Programme und einfache Tools empfiehlt sich der Umstieg auf Web-Anwendungen.",
      "Die sichere Speicherung der Daten in der Cloud steigert die Unternehmenssicherheit und erleichtert die Zusammenarbeit – auch im Home-Office."
    ],
    "sections": [
      {
        "heading": "Web App vs. Desktop App – die Unterschiede",
        "body": "Ein wesentlicher Unterschied zwischen lokalen und webbasierten Anwendungen besteht darin, dass auf Web-Anwendungen online über einen Browser wie Chrome oder Firefox zugegriffen werden kann. Im Gegensatz dazu müssen lokale Anwendungen auf einem Rechner installiert werden, damit sie funktionieren. Außerdem sind lokale Anwendungen auf ein Betriebssystem wie Windows, macOS oder Linux festgelegt – sie können also z. B. nur auf einem Windows-, nicht jedoch auf einem Mac-Rechner installiert werden."
      },
      {
        "heading": "Lokale Anwendungen – Vorteile",
        "body": "Viele haben sich bereits an die ständige Verfügbarkeit des Internets gewöhnt. Doch gerade dann, wenn kein Internet zur Verfügung steht oder es plötzlich ausfällt, ist derjenige im Vorteil, der seine Desktop-Anwendung auf einem Rechner oder Laptop installiert hat.\n\nEin weiterer Vorteil ergibt sich aus der Nutzung lokaler Anwendungen, denn vielerorts ist das Internet so langsam, dass das Arbeiten am Rechner schwer oder gar nicht möglich ist.\n\nAußerdem fallen für lokale Anwendungen nur einmalige Kosten oder je nach Programm auch gar keine Kosten an. Hinzu kommt, dass einige Spezialfunktionen nur lokal zur Verfügung stehen."
      },
      {
        "heading": "Lokale Anwendungen – Nachteile",
        "body": "Lokale Anwendungen sind nur auf dem Rechner verfügbar, auf dem sie installiert wurden. Das heißt: Sie müssen den Rechner, auf dem sich die Desktop-Anwendungen befinden, immer dabeihaben.\n\nEin weiterer Nachteil resultiert aus dem Verlust oder Diebstahl einzelner Datenträger (z. B. externe Festplatten, USB-Sticks) oder eines Arbeitsrechners bzw. Laptops. Das kann schwere Schäden für Ihr Unternehmen bzw. Ihre Reputation zur Folge haben. Auch ein Virenbefall oder Hardwareschaden ist für viele Unternehmen der Worst Case – vor allem, wenn dadurch wichtige Daten für immer verloren gehen.\n\nIn der Regel gibt es bei lokalen Anwendungen keine Versionsverwaltung für Dokumente. Dadurch ist es für den Nutzer nicht möglich, auf vorherige Versionen eines Dokuments zurückzugreifen – es sei denn, er hat „alte“ Versionen als solche gekennzeichnet und entsprechend gespeichert. Auch die Nutzung unterschiedlicher Versionen der gleichen Software kann zu Problemen führen: So kann ein Mitarbeiter eine Datei eines anderen Mitarbeiters unter Umständen nicht öffnen, weil die Dateiformate nicht kompatibel sind.\n\nDa es im Hinblick auf den Datenschutz keine zentrale Rechteverwaltung gibt, muss jeder einzelne Rechner separat gesichert werden – das kann sehr aufwendig sein. Im Falle einer Vertretung durch Kollegen, z. B. im Krankheitsfall, kann die Orientierung auf dem „fremden“ Rechner schwierig sein, weil andere Ablagesysteme verwendet werden oder notwendige Passwörter nicht bekannt sind.\n\nAuch beim kompletten Ausscheiden eines Mitarbeiters aus dem Unternehmen (Offboarding) kann es zu Problemen kommen – nämlich dann, wenn sich wichtige Daten auf Geräten außerhalb der Firma befinden, etwa weil Mitarbeiter Tablets und Notebooks gleichzeitig beruflich und privat nutzen. Dabei kommt es gelegentlich vor, dass Mitarbeiter Daten auf ihren lokalen Festplatten löschen, die nicht wiederherstellbar sind. Insbesondere wenn E-Mails mit Anhängen heruntergeladen und gleichzeitig vom Server entfernt werden, kann das folgenschwer für das betreffende Unternehmen sein."
      },
      {
        "heading": "Web-Anwendungen – Vorteile",
        "body": "Solange eine Internetverbindung besteht, ist der Zugriff auf Ihre Daten immer und von überall möglich – unabhängig vom verwendeten Endgerät. Zudem sind Web-Anwendungen nicht von der verwendeten Hardware abhängig. Ein großer Vorteil ist auch die Möglichkeit, dass mehrere Nutzer innerhalb eines Programms gleichzeitig arbeiten können.\n\nAußerdem müssen Web-Anwendungen weder heruntergeladen noch installiert werden. Auch die Anmeldung ist vor allem für Einsteiger sehr einfach, weil sie häufig über Drittanbieter wie Facebook oder Apple-ID erfolgt. Das Web-Hosting ist inzwischen zudem relativ günstig."
      },
      {
        "heading": "Web-Anwendungen – Nachteile",
        "body": "Zwar gibt es Bereiche von Web-Anwendungen, die auch im Offline-Modus verfügbar sind, doch in der Regel bedarf es einer funktionierenden, im Idealfall schnellen Internetverbindung – andernfalls leidet die Benutzererfahrung (User Experience)."
      },
      {
        "heading": "Web App vs. Desktop App – Fazit",
        "body": "Es bleibt abzuwarten, wie sich die Technik weiterentwickelt und ob lokale Anwendungen auch auf lange Sicht bestehen bleiben. Der Trend zur Web-Anwendung ist jedoch schon jetzt branchenübergreifend, denn viele führende Unternehmen haben in den letzten Jahren in Web Apps investiert – sei es, um Reichweite und Marktanteile zu gewinnen oder das eigene Branding zu stärken.\n\nAllerdings kommt es darauf an, wofür lokale bzw. Web-Anwendungen eingesetzt werden. Für Anwendungen, bei denen große Datenmengen im Arbeitsspeicher verarbeitet werden müssen, sollten Sie lokale Anwendungen bevorzugen. Hierzu gehören z. B.:",
        "bullets": [
          "professionelle Postproduktion und Schnitt von Filmen und Videos",
          "Branchenlösungen, die es nur als lokale Anwendung gibt",
          "Building-Information-Modelling-Systeme (BIM)",
          "3D-Modelling",
          "Bildbearbeitung im DTP-Bereich"
        ]
      },
      {
        "heading": "Unsere Empfehlung",
        "body": "Wichtig zu wissen ist, dass auch Anwendungen, die lokal sinnvoller sind, ihre Datenhaltung in der Cloud haben können.\n\nFür alle Schreibprogramme, Tabellenkalkulationen und Präsentationen (z. B. Office-Programme wie Word, Excel, PowerPoint) sowie für Datenbanken und einfache Zeichen- und Bildbearbeitungsprogramme empfehlen wir Ihnen, auf Web-Anwendungen umzusteigen. Nicht nur, weil sie immer besser werden und stets aktuell sind, sondern auch, weil durch die sichere Speicherung Ihrer Daten in der Cloud die Unternehmenssicherheit enorm gesteigert wird.\n\nPassende Cloudlösungen gibt es für jede Unternehmensgröße – vom selbstständigen Einzelunternehmer bis zur globalen Aktiengesellschaft. Je wichtiger der Datenbestand für den Erfolg und die Sicherheit Ihres Unternehmens ist, desto eher sollten Sie handeln. Auch das Arbeiten im Home-Office wird mit Web-Anwendungen viel einfacher, insbesondere wenn mehrere Mitarbeiter gemeinsam an Dokumenten arbeiten möchten.\n\nUnsere Experten von Datadiorama haben schon zahlreiche kleine und mittelständische Unternehmen von lokalen Umgebungen auf moderne Cloudumgebungen umgestellt, etwa auf Google Workspace (ehemals G Suite) oder auf Microsoft 365. Gern beraten wir auch Sie unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Was ist der Unterschied zwischen einer Web App und einer Desktop App?",
        "answer": "Auf Web-Anwendungen greifen Sie online über einen Browser zu, sie funktionieren geräte- und betriebssystemunabhängig. Lokale Anwendungen müssen auf einem Rechner installiert werden und sind an ein Betriebssystem wie Windows, macOS oder Linux gebunden."
      },
      {
        "question": "Wann sind lokale Anwendungen die bessere Wahl?",
        "answer": "Wenn große Datenmengen im Arbeitsspeicher verarbeitet werden müssen – etwa bei professionellem Videoschnitt, BIM-Systemen, 3D-Modelling oder Bildbearbeitung im DTP-Bereich – oder wenn eine Branchenlösung nur als lokale Anwendung existiert. Auch bei fehlendem oder langsamem Internet sind lokale Anwendungen im Vorteil."
      },
      {
        "question": "Für welche Programme lohnt sich der Umstieg auf Web-Anwendungen?",
        "answer": "Für Schreibprogramme, Tabellenkalkulationen und Präsentationen (Word, Excel, PowerPoint), Datenbanken sowie einfache Zeichen- und Bildbearbeitungsprogramme. Sie sind stets aktuell, ermöglichen gleichzeitiges Arbeiten mehrerer Nutzer und die sichere Cloud-Speicherung erhöht die Unternehmenssicherheit."
      },
      {
        "question": "Welche Risiken bergen lokale Anwendungen für Unternehmen?",
        "answer": "Verlust oder Diebstahl von Geräten und Datenträgern, Virenbefall, Hardwareschäden, fehlende Versionsverwaltung, inkompatible Dateiformate und fehlende zentrale Rechteverwaltung. Auch beim Offboarding von Mitarbeitern können unwiederbringlich Daten verloren gehen."
      }
    ]
  },
  // Übertragen von datadiorama.com/penetrationstest (Original vom 03.05.2022, via Webarchiv).
  "penetrationstest": {
    "intro": "Wissen Sie, wie gut Ihr Unternehmen gegen einen professionellen Hackerangriff geschützt ist? In Anbetracht der stetigen Zunahme von Angriffen auf Unternehmen jeder Größe ist die Frage nicht ganz unberechtigt. Mit Hilfe eines sogenannten Penetrationstests lassen sich Sicherheitslücken aufdecken – und Ihr Unternehmen ist gewappnet vor der Gefahr von außen.",
    "keyTakeaways": [
      "Ein Penetrationstest (Pentest) ist ein Härtetest für die IT-Sicherheit, der Schwachstellen wie Programmier- und Konfigurationsfehler oder fehlende Sicherheitsupdates aufdeckt.",
      "Getestet wird mit zwei Szenarien: einem Angriff von außen über das Internet und einem internen Angriff direkt aus dem Unternehmen heraus.",
      "Beinahe alle 39 Sekunden erfolgt ein Hackerangriff, der im Schnitt erst nach 200 Tagen entdeckt wird; die Schadensbehebung kostet deutsche Unternehmen durchschnittlich über 70.000 Euro.",
      "Gerade kleine und mittelständische Unternehmen werden bevorzugt angegriffen, weil Hacker dort geringere Sicherheitsmaßnahmen unterstellen.",
      "Ein Penetrationstest sollte regelmäßig – spätestens nach zwei Jahren – wiederholt werden."
    ],
    "sections": [
      {
        "heading": "Penetrationstest – Was ist das?",
        "body": "Ein Penetrationstest oder kurz Pentest ist ein Härtetest für Ihre IT-Sicherheit im Unternehmen, mit dem nicht erkannte Sicherheitslücken behoben werden können. Dabei werden IT-Systeme und -Anwendungen auf potenzielle Schwachstellen geprüft. Neben Programmierfehlern sind auch Konfigurationsfehler oder fehlende Sicherheitsupdates die Ursache für das Eindringen in ein System."
      },
      {
        "heading": "Wie umfangreich ist ein Penetrationstest?",
        "body": "Der Umfang des Sicherheitschecks richtet sich ganz danach, welches Gefährdungspotenzial bei Ihnen vorliegt. Letztlich hängt es von Ihnen ab, ob Sie nur einzelne, besonders kritische Komponenten checken lassen möchten oder ein Rundumpaket wünschen.\n\nIm Vorfeld wird ausführlich besprochen, was das Ziel der IT-Sicherheitsanalyse sein soll. Und auch wenn der Penetrationstest einem echten Hackerangriff gleichkommt – keine Sorge: Ihre IT bleibt selbstverständlich unversehrt, sodass Ihr Betrieb uneingeschränkt weiterlaufen kann."
      },
      {
        "heading": "Wie läuft der simulierte Hackerangriff ab?",
        "body": "Hierbei kommen zwei verschiedene Angriffsszenarien zum Einsatz.\n\nBei einem Angriff von außen versuchen die Experten, über die aus dem Internet zugänglichen Systeme in das unternehmensinterne Netzwerk einzudringen und beispielsweise IP-Adressen abzufangen, das Login Ihres Kundenportals zu umgehen oder Ihre Webpräsenz im Ganzen anzugreifen. Beim internen Angriff agieren die Fachleute direkt aus Ihrem Unternehmen heraus, um Ihre Systeme auf Herz und Nieren zu prüfen. Ziel ist es festzustellen, welche Schäden entstehen können, sollten Unternehmenszugänge kriminell missbraucht werden. Da einige Schutzsysteme dann schon umgangen wurden, verursacht ein Angriff von innen heraus meist einen größeren Schaden.\n\nIm Anschluss an einen Angriff wird alles akribisch dokumentiert, sodass Sie nachvollziehen können, wo Schwachstellen sind. Außerdem werden die Ergebnisse Ihnen bzw. Ihrer Geschäftsführung präsentiert. Auf Wunsch unterstützen die Fachleute Sie auch beim Consulting Ihrer IT-Abteilung oder beraten Ihren IT-Partner.\n\nEtwa ein halbes Jahr nach dem Pentest empfiehlt es sich, einen neuen simulierten Hackerangriff durchzuführen, um zu testen, wie gut die Sicherheitslücken geschlossen wurden."
      },
      {
        "heading": "Warum sind Unternehmen überhaupt Ziel von Hackerangriffen?",
        "body": "Weil sich (insbesondere personenbezogene) Daten zu einem äußerst wertvollen Wirtschaftsgut entwickelt haben, sind Unternehmen immer öfter von Hackerangriffen betroffen. Hinzu kommt, dass im Kontext der Digitalisierung vermehrt kritische Geschäftsanwendungen web- bzw. mobilbasiert ablaufen oder Daten und Anwendungen zunehmend in die Cloud verlagert werden. Daraus ergeben sich für Cyberkriminelle immer neue Angriffsmöglichkeiten.\n\nDie Zahlen sind erschreckend: Beinahe alle 39 Sekunden erfolgt ein Hackerangriff, der im Schnitt erst nach 200 Tagen entdeckt wird. Oft jedoch wird der Angriff gar nicht bemerkt – mit fatalen Folgen, denn zur Behebung des Schadens zahlen deutsche Unternehmen im Durchschnitt über 70.000 Euro.\n\nMittels eines Pentests lassen sich Schwachstellen der IT-Infrastruktur aufdecken. Gerade die Unternehmensführung, aber auch IT-Verantwortliche sollten deshalb ein besonderes Augenmerk auf Cybersecurity und Datenschutzmaßnahmen legen und ggf. eine Erhöhung der Ausgaben für die Cybersicherheit rechtzeitig einplanen."
      },
      {
        "heading": "Warum sind Hackerangriffe erfolgreich?",
        "body": "In vielen Unternehmen sind beispielsweise Serverlizenzen abgelaufen, werden Passwörter doppelt oder dreifach vergeben oder Passwörter werden nicht regelmäßig geändert. All das begünstigt, dass ein Hackerangriff gelingt. Um den Ernstfall zu umgehen, lohnt es sich, ein professionelles IT-Unternehmen zu beauftragen, das mittels eines Penetrationstests Fehler aufdeckt. Dann lässt sich auch besser budgetieren, wie im Falle eines erfolgreichen Angriffs die IT-Sicherheit Ihres Unternehmens wiederhergestellt werden kann."
      },
      {
        "heading": "Ist ein Pentest für kleine und mittelständische Unternehmen sinnvoll?",
        "body": "Inzwischen ist jedes Unternehmen ein lohnendes Ziel für Hacker. Home-Office, cloudbasierte Systeme und virtuelle Server unterstützen den Weg in die Zukunft, transportieren aber auch sensible Daten und bringen damit potenzielle neue Sicherheitslücken auch bei kleinen und mittelständischen Unternehmen ins Spiel. Und da Hacker insbesondere bei kleinen und mittelständischen Unternehmen geringere Sicherheitsmaßnahmen unterstellen, werden diese bevorzugt angegriffen."
      },
      {
        "heading": "Wie oft sollte ein Penetrationstest wiederholt werden?",
        "body": "Sowohl die getestete Infrastruktur bzw. die Anwendung als auch die Methoden des Pentests selbst entwickeln sich weiter, sodass die Ergebnisse des Tests mit der Zeit nicht mehr aussagekräftig sind. Deshalb sollte ein Penetrationstest im Idealfall regelmäßig – spätestens jedoch nach zwei Jahren – wiederholt werden. Gern beraten wir Sie unverbindlich zur besten Vorgehensweise für Ihr Unternehmen."
      }
    ],
    "faq": [
      {
        "question": "Was ist ein Penetrationstest?",
        "answer": "Ein Penetrationstest (Pentest) ist ein Härtetest für die IT-Sicherheit im Unternehmen: IT-Systeme und -Anwendungen werden auf potenzielle Schwachstellen wie Programmierfehler, Konfigurationsfehler oder fehlende Sicherheitsupdates geprüft."
      },
      {
        "question": "Wird der laufende Betrieb durch den Pentest beeinträchtigt?",
        "answer": "Nein. Auch wenn der Penetrationstest einem echten Hackerangriff gleichkommt, bleibt die IT unversehrt, sodass der Betrieb uneingeschränkt weiterlaufen kann."
      },
      {
        "question": "Lohnt sich ein Pentest auch für kleine und mittelständische Unternehmen?",
        "answer": "Ja. Inzwischen ist jedes Unternehmen ein lohnendes Ziel für Hacker – und weil Angreifer bei kleinen und mittelständischen Unternehmen geringere Sicherheitsmaßnahmen unterstellen, werden diese sogar bevorzugt angegriffen."
      },
      {
        "question": "Wie oft sollte ein Penetrationstest wiederholt werden?",
        "answer": "Idealerweise regelmäßig, spätestens jedoch nach zwei Jahren. Etwa ein halbes Jahr nach dem Pentest empfiehlt sich zudem ein erneuter Test, um zu prüfen, wie gut die Sicherheitslücken geschlossen wurden."
      }
    ]
  },
  // Übertragen von datadiorama.com/ipv4-auf-ipv6-umstellung (Original vom 10.03.2022, via Webarchiv).
  "ipv4-auf-ipv6-umstellung": {
    "intro": "Jedes Unternehmen, das im Internet unterwegs ist, wird früher oder später von IPv4 auf IPv6 umstellen müssen. Was sich hinter diesen kryptisch anmutenden Zahlenkombinationen verbirgt und warum eine Umstellung auf IPv6 jetzt für Ihr Unternehmen wichtig ist, erklären wir Ihnen in diesem kurzen Artikel.",
    "keyTakeaways": [
      "IPv4 aus den 1980er Jahren erlaubt nur rund 4 Milliarden eindeutige Adressen – zu wenig für die wachsende Zahl vernetzter Geräte.",
      "IPv6 bietet praktisch unbegrenzt viele Adressen, mehr Sicherheit durch Verschlüsselungs- und Authentifizierungsfunktionen und eine bessere Übertragungsqualität für Audio und Video.",
      "IPv4 und IPv6 sind nicht kompatibel – da immer mehr Provider umstellen, drohen Probleme beim Datenaustausch, etwa nicht zugestellte E-Mails.",
      "Unternehmen sollten ihre Netzinfrastruktur sukzessive auf IPv6 aktualisieren – wer erst startet, wenn Geschäftspartner darauf beharren, ist zu spät dran."
    ],
    "sections": [
      {
        "heading": "Was ist eine IP-Adresse und wofür ist sie überhaupt da?",
        "body": "Eine IP-Adresse ist im Grunde mit einer genauen Wohnanschrift vergleichbar, die sich aus Land, Stadt, Postleitzahl, Straße und Hausnummer zusammensetzt. Ohne diese exakten Angaben wäre keine Zustellung von Briefen oder Paketen an eine bestimmte Person möglich.\n\nEbenso verhält es sich im Internet: Jedem Gerät, das mit dem Internet verbunden ist – ob Computer, Smartphone oder Server –, wird eine IP-Adresse (IP = Internet Protocol) zugewiesen. Erst durch diese Adresse sind die Geräte ansprechbar und erreichbar. IP-Adressen sorgen also für einen reibungslosen Datenaustausch, egal ob man Websites aufruft, E-Mails versendet oder via Social Media kommuniziert.\n\nWie genau die IP-Adresse aussieht, hängt vom Internetprotokoll ab. Hier wird zwischen den Versionen IPv4 und IPv6 unterschieden. Das Internetprotokoll IPv4 wurde in den 1980er Jahren entwickelt. Es besteht aus vier Zahlenblöcken von 0 bis 255, die durch einen Punkt getrennt sind (z. B. 183.563.201.3). Aufgrund der rasanten Entwicklung des World Wide Web zeichnete sich jedoch schnell ab, dass die Anzahl der mit IPv4 generierbaren Adressen bald nicht mehr ausreichen würde – insgesamt lassen sich damit „nur“ circa 4 Milliarden eindeutige IP-Adressen erstellen.\n\nDeshalb wurde das Internetprotokoll IPv6 eingeführt. IPv6-Adressen bestehen aus acht Zeichenblöcken mit den Buchstaben a bis f und den Zahlen 0 bis 9, getrennt durch Doppelpunkte (z. B. 3002:Bdc9:76b2:0000:0000:7e3b:0360:4724). In Zeiten, in denen nicht nur Rechner, Smartphones oder Tablets, sondern selbst „gewöhnliche“ Haushaltsgeräte mit dem Internet verbunden sind und eine IP-Adresse benötigen, setzt sich IPv6 immer mehr durch."
      },
      {
        "heading": "Welche Vorteile hat IPv6?",
        "body": "Mit IPv6 lassen sich nicht nur ausreichend viele eindeutige Adressen generieren, ohne dass das System an seine Grenzen stößt. Der neue Standard erhöht durch die Einbindung von Verschlüsselungs- und Authentifizierungsfunktionen auch die Sicherheit im Internet und sorgt für eine bessere Übertragungsqualität von Audio- und Videodaten – wichtig etwa für Internet-Telefonie oder Videostreaming."
      },
      {
        "heading": "Was gibt es bei der Umstellung zu beachten?",
        "body": "IPv4 und IPv6 sind nicht kompatibel. Deshalb kann es zu Verständigungsschwierigkeiten zwischen Netzwerkgeräten des alten und des neuen Standards kommen. Zwar sind die meisten Informationen noch in beiden Varianten verfügbar und damit weiterhin erreichbar. Doch immer mehr Internetprovider stellen ihre Zugangsserver auf IPv6 um. Dadurch kommt es zunehmend zu Problemen beim Datenaustausch – mit der Folge, dass z. B. relevante E-Mails nicht beim Empfänger ankommen oder Kundenbestellungen nicht weitergeleitet werden.\n\nAuch wenn IPv4 parallel zu IPv6 durch Übergangstechniken oder frei werdende IP-Adressen noch einige Jahre nutzbar bleibt, ist davon auszugehen, dass die Nutzungsqualität des alten Protokolls sinkt, die Kosten jedoch steigen.\n\nDeshalb empfiehlt es sich, die unternehmenseigene Netzinfrastruktur sukzessive auf den neuen Standard IPv6 zu aktualisieren. Sukzessive deshalb, weil die IT-Infrastruktur eines Unternehmens ab einer bestimmten Größe im Vergleich zu Privathaushalten so komplex ist, dass eine Umstellung zum einen sehr teuer und zum anderen nicht von heute auf morgen realisierbar ist. Doch erst dann mit der Umstellung zu starten, wenn die ersten Geschäftspartner auf dem Datenaustausch via IPv6 beharren, wäre eindeutig zu spät."
      },
      {
        "heading": "Wobei können unsere Experten Sie unterstützen?",
        "body": "Falls in Ihrem Unternehmen die notwendige Expertise fehlt, helfen Ihnen unsere Experten von Datadiorama gern weiter. Sie kennen die Schwachstellen und unterstützen Sie bei folgenden Aufgaben:",
        "bullets": [
          "Firewallkonfiguration für das Routing von IPv6-Services, die im Internet erreichbar sein sollen",
          "Lokale IPv4/IPv6-Konversion passend zur Anforderung",
          "Beseitigung von Fehlern durch falsche IPv6/IPv4-Konfiguration",
          "Tunnelung von IPv6-Diensten durch IPv4-Netzwerke und umgekehrt",
          "Überprüfung von Netzwerkgeräten auf korrekte Sicherheitskonfiguration",
          "IPv6 via VPN"
        ]
      },
      {
        "heading": "IPv6 als Grundlage für Cloud-Lösungen",
        "body": "Auch wenn Sie mit dem Gedanken spielen, Cloud-Lösungen in Ihrem Unternehmen zu etablieren, werden Sie früher oder später nicht um eine moderne Infrastruktur mit IPv6-fähigen Systemen auf Seiten des Providers herumkommen. Wenn Sie Fragen zur IPv6-Umstellung haben oder Unterstützung bei der Umsetzung benötigen, beraten wir Sie gern unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Warum reichen die IPv4-Adressen nicht mehr aus?",
        "answer": "Mit IPv4 lassen sich insgesamt nur circa 4 Milliarden eindeutige IP-Adressen erstellen. Da heute nicht nur Rechner und Smartphones, sondern auch Haushaltsgeräte und andere vernetzte Geräte eine IP-Adresse benötigen, stößt das System an seine Grenzen."
      },
      {
        "question": "Sind IPv4 und IPv6 miteinander kompatibel?",
        "answer": "Nein. Deshalb kann es zu Verständigungsschwierigkeiten zwischen Netzwerkgeräten des alten und des neuen Standards kommen – etwa E-Mails, die nicht beim Empfänger ankommen, oder Kundenbestellungen, die nicht weitergeleitet werden."
      },
      {
        "question": "Wann sollten Unternehmen mit der Umstellung auf IPv6 beginnen?",
        "answer": "Am besten jetzt – und zwar sukzessive. Die IT-Infrastruktur eines Unternehmens ist ab einer bestimmten Größe so komplex, dass eine Umstellung nicht von heute auf morgen realisierbar ist. Erst zu starten, wenn Geschäftspartner auf IPv6 beharren, wäre eindeutig zu spät."
      },
      {
        "question": "Welche Vorteile bietet IPv6 gegenüber IPv4?",
        "answer": "IPv6 bietet praktisch unbegrenzt viele eindeutige Adressen, erhöht durch integrierte Verschlüsselungs- und Authentifizierungsfunktionen die Sicherheit und sorgt für eine bessere Übertragungsqualität von Audio- und Videodaten."
      }
    ]
  },
  // Übertragen von datadiorama.com/word-online-nutzen (Original vom 08.03.2022, via Webarchiv).
  "word-online-nutzen": {
    "intro": "Seit einiger Zeit können Sie Word, Excel und PowerPoint kostenlos im Browser nutzen. Welche Unterschiede darin bestehen, Word lokal auf dem Rechner oder im Browser zu verwenden, und ob sich die Online-Variante lohnt, klären wir für Sie in diesem Beitrag. Das Einzige, was Sie für die Browser-Version benötigen, ist ein Microsoft-Konto – einmal angemeldet, werden Sie sich schnell zurechtfinden.",
    "keyTakeaways": [
      "Word, Excel und PowerPoint sind als Browser-Anwendungen kostenlos nutzbar – benötigt wird lediglich ein Microsoft-Konto.",
      "Dokumente aus den Browser-Anwendungen werden in der Microsoft Cloud (OneDrive) gespeichert, können aber jederzeit als .docx-Kopie lokal abgelegt und weiterbearbeitet werden.",
      "Die kostenlose Online-Version hat einen begrenzten Funktionsumfang – etwa bei Textformatierung und dem Nachverfolgen von Änderungen; diese Features bietet nur das kostenpflichtige Microsoft 365.",
      "Für Lebensläufe, Anschreiben und Briefe genügt die kostenlose Version; für die Zusammenarbeit im Team empfiehlt sich Microsoft 365 oder Google Workspace.",
      "Cloudlösungen sparen Speicherplatz und sind stets aktuell, da die Programme automatisch aktualisiert werden."
    ],
    "sections": [
      {
        "heading": "Word im Browser nutzen – so geht es",
        "body": "Vielleicht nutzen Sie Word bisher nur als lokales Programm auf dem Rechner. Doch Microsoft bietet nahezu dasselbe Programm zur Textverarbeitung auch online als Browser-Anwendung an. So starten Sie:",
        "bullets": [
          "Melden Sie sich bei Ihrem Microsoft-Konto an.",
          "Nach der Anmeldung gelangen Sie zu einer Übersichtsseite, auf der aktuelle Dokumente eingesehen werden können.",
          "Um ein neues Word-Dokument im Browser zu öffnen, klicken Sie auf das Plus-Symbol oder auf „Neues leeres Dokument“.",
          "Auch die Bearbeitung eines bestehenden Dokuments ist möglich: Klicken Sie dafür auf „Hochladen und öffnen“ am rechten Bildschirmrand.",
          "Sollten Sie Ihr Wunschdokument in den angezeigten Dokumenten nicht finden, klicken Sie auf „Mehr auf OneDrive“ unten rechts. Hier finden Sie alle bisher gespeicherten Dokumente."
        ]
      },
      {
        "heading": "Word im Browser nutzen oder Dokumente auf dem Computer speichern?",
        "body": "Die Dokumente, die Sie in den Browser-Anwendungen von Word, Excel oder PowerPoint erzeugen, können nicht nur in der Microsoft Cloud (OneDrive) gespeichert werden, sondern auch lokal – wie gewohnt auf der Festplatte. Der Trend geht allerdings klar zum Cloudspeicher. Das bedeutet, dass alle Dokumente in der Cloud bleiben. Sie können aber jederzeit eine Kopie mit dem aktuellen Stand auf der Festplatte Ihres Computers speichern. Diese Kopie entspricht dem gewohnten .docx-Format, sodass die Datei auch lokal weiterbearbeitet werden kann. Das Original verbleibt im Cloud-Ordner."
      },
      {
        "heading": "Word online nutzen und Speicherplatz sparen",
        "body": "Um den Speicherplatz auf Ihrem Computer nicht zu sehr zu strapazieren, empfiehlt es sich, eine Verknüpfung zwischen Ihrem Online-Cloud-Speicher von Microsoft (OneDrive) und Ihrem Computer herzustellen. Auf diese Weise haben Sie einen einfachen Zugang zu Ihren online gespeicherten Dateien. Außerdem sparen Sie Speicherplatz auf Ihrer Festplatte, weil Dokumente, Tabellen und Präsentationen nun in der Cloud liegen. OneDrive lässt sich sowohl unter Windows als auch unter macOS einrichten – gern unterstützen wir Sie dabei oder bringen Ihre Firma für Sie in die Cloud."
      },
      {
        "heading": "Word online nutzen – was kostet das?",
        "body": "Microsoft-365-Pakete (früher als MS Office bekannt) starten als lokale Software bei 5,10 Euro pro Benutzer und Monat. Ein Paket beinhaltet bereits die Anwendungen Word, Excel, PowerPoint, Teams und Outlook sowie 1 Terabyte des Cloudspeichers OneDrive. Die Browser-Anwendung von Microsoft Word ist kostenlos."
      },
      {
        "heading": "Kostenpflichtig oder kostenlos – welche Version passt?",
        "body": "Ob Ihnen die kostenlose Browser-Version von Word ausreicht oder Sie Word besser kostenpflichtig über Microsoft 365 nutzen sollten, entscheidet der Funktionsumfang der beiden Anwendungen. So ist bei der kostenlosen Online-Version von Word beispielsweise die Formatierung des Textes begrenzt. Ein weiteres Feature, über das nur die kostenpflichtige Variante von Microsoft 365 verfügt, ist das Nachverfolgen von Änderungen, wenn Sie ein Dokument gemeinsam mit anderen nutzen. Gern unterstützen wir Sie dabei, die passende Version für Ihr Unternehmen zu finden und zu implementieren."
      },
      {
        "heading": "Word online nutzen – Alternativen",
        "body": "Auch Google bietet mit seiner Cloud-Lösung Google Drive eine gut funktionierende Online-Textverarbeitung an. Google Docs hat einen ähnlich großen Funktionsumfang, vereinfacht aber die Zusammenarbeit mit Kollegen am selben Dokument deutlich. Während dieses Feature bei Google bereits in der kostenlosen Version enthalten ist, müssen Sie hierfür bei Microsoft auf die kostenpflichtige Variante von Microsoft 365 zurückgreifen."
      },
      {
        "heading": "Fazit",
        "body": "Word lässt sich in seinen Basisfunktionen sehr gut online im Browser nutzen und ist überdies kostenlos. Insbesondere wenn Sie nur Lebensläufe erstellen, Anschreiben anfertigen oder Briefe schreiben möchten, genügt die kostenlose Version von Microsoft Word Online. Geht es allerdings um die Zusammenarbeit mit Kollegen, sollten Sie entweder auf Microsoft 365 umsteigen oder Google Workspace in Betracht ziehen.\n\nEin weiterer Vorteil von Cloudlösungen ist, dass Sie wertvollen Speicherplatz sparen und die Programme ständig auf dem neuesten Stand sind. In der lokalen Variante müssen Sie hingegen Speicherplatz für die installierten Programme und die lokalen Dateien freihalten. Außerdem profitieren Sie nicht von der Weiterentwicklung, weil keine automatischen Updates erfolgen.\n\nWir von Datadiorama sind Experten für die Integration von Microsoft 365 und Google Workspace und unterstützen Sie gern bei der Auswahl des passenden Produkts."
      }
    ],
    "faq": [
      {
        "question": "Ist Word online wirklich kostenlos?",
        "answer": "Ja, die Browser-Anwendung von Microsoft Word ist kostenlos. Sie benötigen lediglich ein Microsoft-Konto. Der Funktionsumfang ist gegenüber der kostenpflichtigen Variante allerdings begrenzt, etwa bei der Textformatierung."
      },
      {
        "question": "Wo werden die Dokumente aus Word Online gespeichert?",
        "answer": "Standardmäßig in der Microsoft Cloud (OneDrive). Sie können aber jederzeit eine Kopie im gewohnten .docx-Format auf der Festplatte speichern und lokal weiterbearbeiten – das Original verbleibt in der Cloud."
      },
      {
        "question": "Wann lohnt sich der Umstieg auf das kostenpflichtige Microsoft 365?",
        "answer": "Vor allem bei der Zusammenarbeit mit Kollegen: Features wie das Nachverfolgen von Änderungen gibt es nur in Microsoft 365. Die Pakete starten bei 5,10 Euro pro Benutzer und Monat und enthalten Word, Excel, PowerPoint, Teams, Outlook und 1 TB OneDrive-Speicher."
      },
      {
        "question": "Gibt es Alternativen zu Word Online?",
        "answer": "Ja, Google Docs in Google Drive bietet einen ähnlich großen Funktionsumfang und vereinfacht die Zusammenarbeit am selben Dokument deutlich – dieses Feature ist bei Google bereits in der kostenlosen Version enthalten."
      }
    ]
  },
  // Übertragen von datadiorama.com/microsoft-365-migration (Original vom 10.11.2021, via Webarchiv).
  "microsoft-365-migration": {
    "intro": "Sie spielen mit dem Gedanken, zu Microsoft 365 (ehemals Office 365) zu migrieren, sind sich aber noch nicht sicher, ob das der richtige Schritt für Ihr Unternehmen ist? Immer mehr Unternehmen entscheiden sich für die Cloud-basierte Plattform, um die geschäftliche Produktivität zu steigern – und das zu planbaren Kosten. Auch wenn die Migration eine komplexe Aufgabe ist, die durch neue Tools neue Arbeitsabläufe mit sich bringt, sprechen die folgenden sechs Vorteile für die Verlagerung in die Cloud.",
    "keyTakeaways": [
      "Abonnementpläne zum Festpreis machen Softwareausgaben transparent und besser budgetierbar.",
      "Microsoft kümmert sich um alle Upgrades und neuen Funktionen – Updates laufen automatisch.",
      "Tools wie Teams, OneDrive for Business und Exchange Online erleichtern die Zusammenarbeit räumlich getrennter Teams.",
      "Lizenzen lassen sich flexibel erweitern und wieder reduzieren, Single-Sign-On erspart den „Passwortsalat“.",
      "Der Zugriff auf die Anwendungen ist von überall und jederzeit möglich – im Büro, im Homeoffice oder mobil."
    ],
    "sections": [
      {
        "heading": "1. Kostenreduktion",
        "body": "Die Microsoft-365-Abonnementpläne sind zu einem Festpreis erhältlich. Dadurch haben Sie einen besseren Überblick über Ihre Softwareausgaben und können diese besser budgetieren."
      },
      {
        "heading": "2. Keine Upgrades mehr nötig",
        "body": "Ein weiterer Vorteil ist, dass sich Microsoft um alle Upgrades und neuen Funktionalitäten kümmert. Sie müssen bevorstehende Aktualisierungen und Wartungen nicht mehr im Auge behalten, weil die Updates automatisch durchgeführt werden."
      },
      {
        "heading": "3. Bessere Zusammenarbeit von Teams",
        "body": "In vielen Unternehmen arbeiten Teams heute räumlich oder zeitlich getrennt voneinander. Das kann die Kommunikation beeinträchtigen und letztlich die Produktivität Ihres Unternehmens empfindlich senken. Microsoft 365 bietet eine große Auswahl an Tools wie Teams, Office Groups, OneDrive for Business oder Exchange Online, die die Kommunikation zwischen Teams vereinfachen und damit eine reibungslose Zusammenarbeit sichern."
      },
      {
        "heading": "4. Schnelle Skalierbarkeit",
        "body": "Die Globalisierung führt dazu, dass sich Geschäftsanforderungen ändern – sei es durch die Erweiterung Ihres Unternehmens um einen Standort, aufgrund eines Umzugs oder einer Fusion. Mit Microsoft 365 lässt sich die Anzahl der Lizenzen, die Sie für Zusammenarbeit oder Produktivität benötigen, beliebig erweitern und bei Bedarf auch wieder reduzieren."
      },
      {
        "heading": "5. Kein „Passwortsalat“ mehr",
        "body": "Mit Microsoft 365 können sich Ihre Mitarbeiter per Single-Sign-On anmelden. Das ermöglicht mit einer einmaligen Authentifizierung den Zugriff auf alle Rechner und Dienste – in Abhängigkeit von der Zugriffsberechtigung des einzelnen Mitarbeiters – ohne ständige Neuanmeldung für die einzelnen Dienste. Außerdem müssen sich Ihre Mitarbeiter nicht mehr so viele Passwörter merken."
      },
      {
        "heading": "6. Flexibles Arbeiten von überall und jederzeit",
        "body": "Mit Microsoft 365 lässt sich die Produktivität Ihrer Mitarbeiter steigern, denn auf die Anwendungen kann von überall und jederzeit zugegriffen werden. Egal ob im Büro oder im Homeoffice, vom Smartphone oder von anderen mobilen Geräten – mit dieser Anwendungssuite ist Arbeiten flexibler denn je.\n\nWenn Sie ohnehin schon Microsoft-Anwendungen in Ihrem Unternehmen nutzen, hat die Migration zu Microsoft 365 nur Vorteile für Sie. Gern sorgen wir für einen reibungslosen Ablauf der Migration, ohne Ihr Alltagsgeschäft zu beeinträchtigen."
      }
    ],
    "faq": [
      {
        "question": "Warum lohnt sich eine Migration zu Microsoft 365?",
        "answer": "Microsoft 365 bietet planbare Kosten durch Festpreis-Abonnements, automatische Updates, bessere Team-Zusammenarbeit, flexible Skalierbarkeit der Lizenzen, Single-Sign-On und ortsunabhängiges Arbeiten."
      },
      {
        "question": "Muss ich mich nach der Migration noch um Updates kümmern?",
        "answer": "Nein. Microsoft kümmert sich um alle Upgrades und neuen Funktionalitäten – die Updates werden automatisch durchgeführt."
      },
      {
        "question": "Lassen sich Microsoft-365-Lizenzen an veränderte Anforderungen anpassen?",
        "answer": "Ja. Die Anzahl der Lizenzen lässt sich beliebig erweitern und bei Bedarf auch wieder reduzieren – etwa bei neuen Standorten, einem Umzug oder einer Fusion."
      },
      {
        "question": "Was bringt Single-Sign-On bei Microsoft 365?",
        "answer": "Mit einer einmaligen Authentifizierung erhalten Mitarbeiter Zugriff auf alle Rechner und Dienste entsprechend ihrer Zugriffsberechtigung – ohne ständige Neuanmeldung und ohne sich viele Passwörter merken zu müssen."
      }
    ]
  },
  // Übertragen von datadiorama.com/outlook-e-mails-archivieren (Original vom 10.11.2021, via Webarchiv).
  "outlook-e-mails-archivieren": {
    "intro": "Mit Outlook E-Mails zu archivieren klingt simpel. Doch einfach nur „alte Elemente“ aus dem aktiven Posteingang in einen externen Archivordner zu verschieben, ist bei der großen Menge an täglich eingehenden E-Mails nicht ratsam – spätestens bei der Suche nach einer bestimmten E-Mail verschwenden Sie kostbare Arbeitszeit. Die beiden entscheidenden Schritte, um relevante E-Mails schnell wiederzufinden, sind ein aufgeräumtes Postfach und eine sinnvolle Ordnerstruktur.",
    "keyTakeaways": [
      "Vor der Archivierung steht das Aufräumen: Jede eingehende E-Mail sofort löschen, weiterleiten, ablegen, bearbeiten oder terminieren.",
      "Das 7-Ordner-System sorgt für eine übersichtliche Ablagestruktur: maximal 7 Unterverzeichnisse pro Hauptordner.",
      "Die AutoArchivierung verschiebt alte Elemente regelmäßig in eine PST-Archivdatei – Intervall, Speicherort und Alter sind frei wählbar.",
      "Alternativ lassen sich Ordner über „Alte Elemente bereinigen“ manuell archivieren.",
      "Einzelne Ordner können über die Ordner-Eigenschaften von der Archivierung ausgenommen werden."
    ],
    "sections": [
      {
        "heading": "Postfach aufräumen: Welche Art von E-Mail liegt vor?",
        "body": "Überlegen Sie sich zuerst, was für eine Art von E-Mail in Ihrem Postfach eingegangen ist, und gehen Sie dann nach diesen fünf Regeln vor:",
        "bullets": [
          "Eine E-Mail, die Sie als irrelevant einstufen, sollten Sie immer sofort nach Erhalt löschen.",
          "Ist die E-Mail nicht für Sie bestimmt bzw. muss sie von einem Kollegen bearbeitet werden, sollten Sie sie umgehend weiterleiten.",
          "Handelt es sich um eine E-Mail, die abgelegt werden muss, sollte sie ins Archiv überführt werden.",
          "Wenn Sie die E-Mail sofort bearbeiten können, dann tun Sie das so schnell wie möglich.",
          "Für alle übrigen E-Mails legen Sie genau fest, wann Sie sie bearbeiten möchten – am besten mit einem Termin in Ihrem Kalender."
        ]
      },
      {
        "heading": "Eine gute Ablagestruktur schaffen",
        "body": "Als nächsten wichtigen Schritt sollten Sie sich eine gute Ablagestruktur im Outlook-Archiv schaffen. Hierfür legen Sie eigene Ordner an, in die die entsprechenden E-Mails einsortiert werden.\n\nNutzen Sie hierfür am besten das 7-Ordner-System. Das bedeutet, dass jeder Hauptordner maximal 7 Unterverzeichnisse und jedes dieser Unterverzeichnisse wiederum maximal 7 Unterordner hat.\n\nNachdem Sie Ihre Ordnerstruktur im Archiv eingerichtet haben, stehen Ihnen zwei Möglichkeiten der Archivierung von E-Mails in Outlook zur Verfügung: die Autoarchivierung und die manuelle Archivierung."
      },
      {
        "heading": "Die automatische Archivierung",
        "body": "Die Autoarchivierung ist eine praktische Sache, denn alle alten Elemente werden von Outlook regelmäßig in eine PST-Archivdatei (.pst) verschoben. Wie oft, wohin (Speicherort, z. B. Cloud oder Festplatte) und ab welchem Alter Outlook-Dateien archiviert werden sollen, können Sie selbst festlegen.\n\nUm die Autoarchivierung einzurichten, gehen Sie folgendermaßen vor: Nachdem Sie Outlook geöffnet haben, klicken Sie links oben auf „Datei“. Im Anschluss wählen Sie im blau hinterlegten Menü „Optionen“. Danach klicken Sie in dem sich öffnenden Fenster „Outlook-Optionen“ auf „Erweitert“ und finden dort die „Einstellungen für AutoArchivierung“.\n\nNachdem Sie ein Häkchen in die Box „AutoArchivierung“ gesetzt haben, können Sie noch den zeitlichen Abstand zwischen den einzelnen Archivierungszeiträumen festlegen sowie das Alter, ab dem alte Elemente archiviert werden sollen. Alle anderen aktivierten Häkchen sollten Sie nicht deaktivieren. Zur Aktivierung der AutoArchivierung bestätigen Sie den Vorgang mit OK."
      },
      {
        "heading": "Die manuelle Archivierung",
        "body": "Die manuelle Archivierung von E-Mails ist ideal, wenn Sie selbst entscheiden möchten, wann eine Archivierung für welchen Ordner erfolgen soll.\n\nHierfür klicken Sie auf „Datei“ > „Informationen“ > „Tools“ > „Alte Elemente bereinigen“. Danach können Sie bestimmen, welche Ordner Sie archivieren wollen. Hierfür wählen Sie einzelne Ordner aus oder setzen ein Häkchen bei „Alle Ordner gemäß Ihrer AutoArchivierungseinstellung archivieren“. Sofern Sie Elemente haben, bei denen keine AutoArchivierung festgelegt ist, wählen Sie für diese einen eigenen Ablageort – ansonsten schlägt Outlook den Ablageort „Eigene Dateien“ vor.\n\nGenau wie bei der AutoArchivierung können Sie auch hier festlegen, welche Ordner ab wann archiviert und in welche Archivdatei einsortiert werden sollen. Zum Schluss bestätigen Sie Ihre Auswahl mit OK."
      },
      {
        "heading": "Was ist noch wichtig?",
        "body": "Archivierte E-Mails öffnen: Klicken Sie auf „Datei“ > „Öffnen und Exportieren“ > „Outlook-Datei öffnen“ und wählen Sie die gewünschte PST-Datei aus. Wenn Sie einen eigenen Ordner angelegt haben (also nicht einen von Outlook vorgegebenen), müssen Sie Outlook zunächst zu diesem navigieren.\n\nE-Mails werden nicht archiviert: Unter Umständen kann es passieren, dass einzelne E-Mails nicht archiviert werden, obwohl sie den Archivierungszeitpunkt erreicht haben – z. B. wenn eine E-Mail in einen anderen Ordner verschoben oder aufgrund einer Sicherung wiederhergestellt wurde. In diesem Fall können Sie die betreffende E-Mail entweder händisch ins Archiv verschieben oder abwarten, bis sie das entsprechende Alter erreicht hat.\n\nE-Mails von der Archivierung ausnehmen: Wenn Sie E-Mails länger im Postfach aufbewahren oder einzelne Ordner nicht archivieren möchten, öffnen Sie Ihr Postfach und klicken den entsprechenden Ordner mit der rechten Maustaste an (z. B. „Gesendete Elemente“). Im sich öffnenden Menü wählen Sie „Eigenschaften“ und können dann im Dialogfenster unter „AutoArchivierung“ unter anderem „Elemente in diesem Ordner nicht archivieren“ auswählen."
      },
      {
        "heading": "Fazit",
        "body": "Mit einem aufgeräumten und sauberen Outlook-Profil entlasten Sie nicht nur Ihren Computer, sondern erleichtern auch Ihren Arbeitsalltag. Bei Fragen rund um das Thema E-Mail-Archivierung beraten wir Sie gern unverbindlich."
      }
    ],
    "faq": [
      {
        "question": "Wie richte ich die AutoArchivierung in Outlook ein?",
        "answer": "Über „Datei“ > „Optionen“ > „Erweitert“ > „Einstellungen für AutoArchivierung“. Dort setzen Sie das Häkchen bei „AutoArchivierung“, legen Intervall und Mindestalter der zu archivierenden Elemente fest und bestätigen mit OK."
      },
      {
        "question": "Wie öffne ich bereits archivierte E-Mails?",
        "answer": "Klicken Sie auf „Datei“ > „Öffnen und Exportieren“ > „Outlook-Datei öffnen“ und wählen Sie die gewünschte PST-Datei aus. Bei eigenen Ordnern müssen Sie Outlook zunächst dorthin navigieren."
      },
      {
        "question": "Warum werden manche E-Mails nicht archiviert?",
        "answer": "Das kann passieren, wenn eine E-Mail in einen anderen Ordner verschoben oder aus einer Sicherung wiederhergestellt wurde. Verschieben Sie sie dann händisch ins Archiv oder warten Sie, bis sie das eingestellte Alter erreicht."
      },
      {
        "question": "Kann ich einzelne Ordner von der Archivierung ausnehmen?",
        "answer": "Ja. Klicken Sie den Ordner mit der rechten Maustaste an, wählen Sie „Eigenschaften“ und aktivieren Sie unter „AutoArchivierung“ die Option „Elemente in diesem Ordner nicht archivieren“."
      }
    ]
  },
  // Übertragen von datadiorama.com/virtuelle-server-vorteile (Original vom 22.07.2021, via Webarchiv).
  "virtuelle-server-vorteile": {
    "intro": "Clevere IT-Lösungen werden in Unternehmen immer wichtiger. Vielleicht haben Sie bisher gezögert, einen virtuellen Server zu nutzen, weil Sie dachten: „Der kommt doch sowieso nur für große Firmen infrage.“ Doch das stimmt nicht – auch kleine und mittelständische Unternehmen profitieren von dieser Technologie. Ein virtueller Server ist eine virtuelle Maschine (VM), die von einer spezifischen Software auf einem physischen Computer erstellt wird. Dabei teilt sich der virtuelle Server die Ressourcen eines einzigen physischen Servers mit anderen virtuellen Servern. Der so bezeichnete Virtual Private Server (VPS) bietet seinen Benutzern dieselbe Serverfunktion wie ein dedizierter Server – also ein Server, der nur Ihnen zur Verfügung steht.",
    "keyTakeaways": [
      "Virtualisierung spart Kosten und Zeit: Mehrere Betriebssysteme laufen auf einem einzigen physischen Server, der dadurch deutlich besser ausgelastet ist – gängige Server sind im Betrieb oft zu weniger als 5 Prozent ausgelastet.",
      "Weniger Hardware bedeutet weniger Fehlerquellen, und virtuelle Server lassen sich im Notfall deutlich schneller wiederherstellen als traditionelle IT-Systeme.",
      "Ressourcen lassen sich flexibel erweitern und bei Bedarf ebenso einfach wieder reduzieren – ideal für wachsende Unternehmen.",
      "Der Zugriff auf die Daten ist rund um die Uhr von überall möglich, was flexibles Arbeiten und eine sehr gute Home-Office-Anbindung ermöglicht.",
      "Weniger physische Server im Rechenzentrum bedeuten weniger Kühlung und weniger Stromverbrauch – ein Beitrag zum Umweltschutz."
    ],
    "sections": [
      {
        "heading": "1. Enorme Kosten- und Zeitersparnis",
        "body": "Mittels eines VPS können mehrere verschiedene Betriebssysteme (z. B. Windows und Linux) auf ein und demselben physischen, leistungsstarken Computer betrieben werden. Damit sparen Sie nicht nur Anschaffungs- und laufende Kosten, weil Sie im Normalfall mehrere physische Server benötigen würden, sondern auch Stromkosten, da die vorhandene Hardware viel besser ausgelastet ist. Das ist vor allem deshalb interessant, weil gängige Server während des Betriebs oft zu weniger als 5 Prozent ausgelastet sind und große Ressourcen vorhalten, die überhaupt nicht gebraucht werden.\n\nEine virtuelle Maschine hat auch den Vorteil, dass sie sich mit nur wenigen Mausklicks auf der bereits bestehenden Infrastruktur erstellen lässt. Das spart Zeit und schont das Budget, weil nichts bestellt oder extra eingeplant werden muss.",
        "bullets": [
          "Mehrere Betriebssysteme auf einem physischen Server",
          "Kostensparend, da nur ein Server benötigt wird",
          "Verwaltung über nur ein Management-Programm"
        ]
      },
      {
        "heading": "2. Weniger Hardware, weniger Probleme",
        "body": "Das komplette System kann über ein einziges Management-Programm verwaltet werden, das der Hersteller normalerweise gleich mitliefert. So können Aktualisierungen und Wartung vornehmlich von einem Administrator durchgeführt werden – auch das spart Kosten und Zeit.\n\nWomöglich ist es bei Ihnen auch schon vorgekommen, dass die Hardware „versagt“ und alles aufwendig und zeitraubend durch einen Fachmann wiederhergestellt werden muss. Mit nur einem physischen Server können zwar ebenfalls Probleme auftreten, diese lassen sich jedoch viel schneller beheben, als wenn es zum Ausfall gleich mehrerer Server kommt."
      },
      {
        "heading": "3. Optimale Ausfallsicherheit (Disaster Recovery)",
        "body": "Und was passiert, wenn dieser eine Server ausfällt? Gerade virtuelle Server haben den Vorteil, dass sie im Gegensatz zu traditionellen IT-Systemen schnell wiederhergestellt werden können. Sie sind nicht nur einfacher zu sichern – es lassen sich auch im laufenden Betrieb alle virtuellen Geräte gemeinsam sichern. Um hier eine optimale Lösung anbieten zu können, arbeiten wir mit namhaften Anbietern wie VMware oder Proxmox zusammen, die uns eine ausfallsichere Basis zur Verfügung stellen."
      },
      {
        "heading": "4. Problemlose Erweiterbarkeit des virtuellen Servers",
        "body": "Wenn Ihr Unternehmen wächst und Sie mehr Ressourcen brauchen, lässt sich der VPS beliebig erweitern. Für den umgekehrten Fall, dass Sie die vorhandenen Ressourcen nicht mehr benötigen, können sie ganz einfach und mit wenig Aufwand wieder auf den früheren Stand herabgestuft werden."
      },
      {
        "heading": "5. Dauerhafte Verfügbarkeit",
        "body": "Ein weiterer Vorteil ist, dass Sie von überall und jederzeit – 24 Stunden am Tag, 7 Tage die Woche – Zugriff auf Ihre Daten haben. Das ermöglicht flexibles Arbeiten für Sie und Ihre Mitarbeiter."
      },
      {
        "heading": "6. Sehr gute Home-Office-Anbindung",
        "body": "Gerade in Krisenzeiten ist Flexibilität wichtig, damit das Geschäft weiterläuft. Und wenn dann noch „von oben“ entschieden wird, wie die Arbeitswelt gestaltet werden soll, ist eine Technologie, die flexibles Arbeiten auch aus dem Home-Office ermöglicht, von großem Vorteil. So haben während der Coronapandemie insbesondere die Unternehmen von einem VPS profitiert, deren Mitarbeiter aufgrund der Home-Office-Pflicht von zu Hause aus gearbeitet haben."
      },
      {
        "heading": "7. Hardware immer aktuell – insbesondere bei IT-Outsourcing",
        "body": "Wenn Sie sich dafür entscheiden, einen virtuellen Server bei einem externen Anbieter wie einem IT-Systemhaus zu mieten, müssen Sie nicht ständig im Auge behalten, ob Ihre Hardware noch auf dem neuesten Stand ist. Sie können sich auf Ihren Anbieter verlassen, der die Technik immer an alle Veränderungen anpasst.\n\nVor allem für kleine Unternehmen, die sich oft aus Kostengründen keinen eigenen IT-Mitarbeiter leisten können, ist IT-Outsourcing eine gute und preiswerte Alternative."
      },
      {
        "heading": "8. Ein kleiner Beitrag zum Umweltschutz",
        "body": "Das Thema Umweltschutz ist nicht erst durch die Bewegung „Fridays for Future“ stärker in das Bewusstsein einer breiten Öffentlichkeit gerückt. Durch den Einsatz von virtuellen Maschinen werden weniger Server im Rechenzentrum benötigt – und weniger physische Server bedeuten weniger Kühlung und weniger Strom im laufenden Betrieb. Auch wenn das vielleicht nur ein kleiner Beitrag zur besseren Klimabilanz ist, so ist es doch ein Schritt in die richtige Richtung."
      },
      {
        "heading": "Fazit",
        "body": "Die Virtualisierung von Servern hat viele Vorteile, die sehr nützlich für Ihr Geschäft sind und vor allem Geld und Zeit sparen. Falls Sie sich für den Einsatz dieser Technologie entscheiden, beraten wir Sie gern umfassend, klären offene Fragen und helfen bei der Umsetzung."
      }
    ],
    "faq": [
      {
        "question": "Was ist ein virtueller Server?",
        "answer": "Ein virtueller Server ist eine virtuelle Maschine (VM), die per Software auf einem physischen Computer erstellt wird. Er teilt sich die Ressourcen eines einzigen physischen Servers mit anderen virtuellen Servern und bietet als Virtual Private Server (VPS) dieselbe Serverfunktion wie ein dedizierter Server."
      },
      {
        "question": "Lohnen sich virtuelle Server auch für kleine Unternehmen?",
        "answer": "Ja. Gerade kleine und mittelständische Unternehmen profitieren von der Kosten- und Zeitersparnis, der einfachen Erweiterbarkeit und der Möglichkeit, den Server bei einem externen Anbieter zu mieten – etwa wenn kein eigener IT-Mitarbeiter beschäftigt werden kann."
      },
      {
        "question": "Wie steht es um die Ausfallsicherheit virtueller Server?",
        "answer": "Virtuelle Server lassen sich im Gegensatz zu traditionellen IT-Systemen schnell wiederherstellen. Sie sind einfacher zu sichern, und alle virtuellen Geräte können im laufenden Betrieb gemeinsam gesichert werden. Lösungen wie VMware oder Proxmox sorgen für eine ausfallsichere Basis."
      },
      {
        "question": "Kann ein virtueller Server mit dem Unternehmen mitwachsen?",
        "answer": "Ja. Ein VPS lässt sich beliebig erweitern, wenn mehr Ressourcen benötigt werden, und mit wenig Aufwand auch wieder auf den früheren Stand herabstufen, wenn die Ressourcen nicht mehr gebraucht werden."
      }
    ]
  },
  // Übertragen von datadiorama.com/cloud-loesungen-fuer-unternehmen (Original vom 27.07.2020, via Webarchiv).
  "cloud-loesungen-fuer-unternehmen": {
    "intro": "Home-Office, flexible Arbeitszeiten, mobile Arbeitsplätze – von zuhause oder unterwegs zu arbeiten hat Vorteile für Mitarbeitende und Arbeitgeber. Entsprechend müssen Firmendaten immer und überall, schnell und sicher für berechtigte Mitarbeitende erreichbar sein. Die Lösung: Cloud-Speicher. Nicht erst seit der Corona-Krise ist der Bedarf an Cloud-Lösungen für Unternehmen stark angestiegen. Vier Anbieter werden von Unternehmen bevorzugt genutzt: Google Drive, Microsoft OneDrive, Dropbox und Box.",
    "keyTakeaways": [
      "Cloud-Speicher machen Firmendaten jederzeit, überall und geräteunabhängig für berechtigte Nutzer verfügbar – ohne eigene Hardware-Kosten und mit bedarfsgerechter Skalierung.",
      "Alle vier verglichenen Anbieter (Google Drive, Microsoft OneDrive, Dropbox, Box) legen Wert auf Nutzerfreundlichkeit und verschlüsselte Datenübertragung.",
      "US-Anbieter unterliegen dem CLOUD Act – bei personenbezogenen Daten ist daher Vorsicht geboten; deutsche Cloud-Dienstleister liegen datenschutzrechtlich vorn.",
      "Für die Verarbeitung persönlicher Daten in der Cloud ist ein Auftragsverarbeitungsvertrag (AV-Vertrag) notwendig; verantwortlich bleibt der Cloud-Anwender.",
      "Empfehlung: Cloud-Speicherdienste mit einer End-to-End-Verschlüsselung kombinieren – gerade beim Zugriff aus dem Heimnetzwerk."
    ],
    "sections": [
      {
        "heading": "Die Funktionen der Cloud",
        "body": "Eine Cloud ist ein Online-Speicherplatz, der gemietet wird. Die Dateien, aber auch die IT-Infrastruktur (Cloud Computing) sowie Programme (Software as a Service, SaaS) liegen also nicht mehr lokal auf dem Firmenserver. Berechtigte Nutzer können über das Internet auf Dateien oder Ordner von jedem Gerät, zu jeder Zeit und von jedem Ort aus zugreifen, sie speichern oder verschieben. In den meisten Fällen ist für die Nutzung der Cloud keine zusätzliche Software nötig; die Anmeldung erfolgt bei den meisten Diensten über ein Web-Interface. Die Vorteile:\n\nMittlerweile hat sich die Cloud als IT-Betriebsmodell durchgesetzt und ist zu einem wichtigen Treiber der Digitalisierung in Deutschland geworden. Der Umsatz mit Cloud-Dienstleistungen sollte laut Prognose von Statista bis 2021 auf über 43 Milliarden Euro steigen.",
        "bullets": [
          "Mobilität",
          "Keine Kosten für Hardware und Software",
          "Bedarfsgerechte Skalierung der IT-Infrastruktur",
          "Nutzungsabhängige Zahlung"
        ]
      },
      {
        "heading": "Die Sicherheit der Cloud",
        "body": "Bereits seit 2015 gaben laut Statista mehr als 50 Prozent der befragten Unternehmen an, mit Cloud-Diensten zu arbeiten. Als Gegenargument wurde „Zweifel an Datenschutz“ am häufigsten genannt. Zurecht?\n\nAls im Jahr 2013 Stiftung Warentest Cloud-Dienste unter die Lupe nahm, konnte keiner überzeugen. Mittlerweile haben die Anbieter das Problem erkannt: Heute werden die Daten meist verschlüsselt übergeben. Nur eine gute Verschlüsselungs-Software kann verhindern, dass Daten von unberechtigten Dritten ausgelesen werden. Insbesondere die großen Anbieter legen Wert auf Datenschutz. Wer auf Nummer sicher gehen will, dem empfehlen wir Cloud-Speicherdienste in Kombination mit einer End-to-End-Verschlüsselung.\n\nAuch wenn die verglichenen großen Cloud-Anbieter damit werben, dass ihre Clouds ISO-27001-zertifiziert sind, zerstreuen diese Zertifikate die Bedenken nicht vollständig: Der Standard bezieht sich laut Computerwoche lediglich auf Dienstleistungen und Rechenzentren, nicht aber auf die besonderen Risiken der Cloud-Architektur. Jedoch streben immer mehr Cloud-Anbieter eine Auditierung durch externe Wirtschaftsprüfungsunternehmen an.\n\nDatenschutzrechtlich liegen etablierte Cloud-Dienstleister aus Deutschland vorn. Sie garantieren, dass die Daten ausschließlich auf Servern in Deutschland unter Einhaltung der Datenschutzrichtlinien gespeichert werden."
      },
      {
        "heading": "Datenschutz in der Cloud",
        "body": "Da in der Cloud persönliche Daten gespeichert werden – etwa Namen, Kontakte, Anschriften, Bankverbindungen und IP-Adressen –, ist ein Auftragsverarbeitungsvertrag (AV-Vertrag) notwendig. Dieser regelt die Zusammenarbeit zwischen Cloud-Anbieter und Cloud-Anwender. Der Anwender bleibt beim Cloud Computing gemäß Bundesdatenschutzgesetz die verantwortliche Stelle und ist im Außenverhältnis für die Sicherheit der Daten verantwortlich."
      },
      {
        "heading": "Google Drive – weitere Google-Dienste inklusive",
        "body": "Google Drive, der Speicherdienst von Google, ist seit 2021 in das Toolpaket Google Workspace (ehemals G Suite) integriert und wird über eine Web-Schnittstelle bedient. Dort steht eine Dateiverwaltung zur Verfügung, über die sich Ordner anlegen, Daten hochladen und mit anderen teilen lassen. Verschiedene Rollen ermöglichen, dass eine Person den Inhalt von Dateien nur sehen, kommentieren oder sogar verändern kann. Mit dem Rechner synchronisiert werden die Daten automatisch bei bestehender Internetverbindung oder per Klick auf das Symbol in der Taskleiste; auch nur freigegebene Dateien oder Ordner lassen sich synchronisieren.\n\nDie Daten werden bei der Übertragung und auf dem Speicher verschlüsselt, wodurch keine zusätzliche End-to-End-Verschlüsselung von Client-Seite nötig ist. Jedoch ist Google ein amerikanisches Unternehmen und unterliegt somit dem CLOUD Act – nach diesem Gesetz können amerikanische Behörden von der Entschlüsselung Gebrauch machen.\n\nGoogle bietet Drive als kostenfreie Version an; nötig ist lediglich ein Google-Konto. Dafür gibt es 15 GB Speicherplatz sowie sämtliche Google-Dienste wie Google Docs, Google Fotos oder Google Tabellen. Gegen Aufpreis kann Speicherplatz dazugebucht werden. Für die Business-Variante Google Workspace stehen drei Abo-Pakete zur Auswahl; neben dem Cloud-Speicher bietet Google Workspace Zugriff auf weitere Dienste wie Gmail, Meet, Formulare, Sites und Currents.",
        "bullets": [
          "Google Workspace Business Starter: 4,68 EUR pro Nutzer und Monat",
          "Google Workspace Business Standard: 9,36 EUR pro Nutzer und Monat",
          "Google Workspace Business Plus: 15,60 EUR pro Nutzer und Monat"
        ]
      },
      {
        "heading": "Microsoft OneDrive für Unternehmen – integriert in Microsoft 365 und Co.",
        "body": "Die Businessversion von Microsoft OneDrive ist eine robuste und leicht zu bedienende Cloud-Speicherplattform für jede Unternehmensgröße.\n\nDatensicherheit und Compliance nehmen bei OneDrive einen wichtigen Platz ein: OneDrive verwendet fortschrittliche Datenverschlüsselungsmethoden sowohl bei der Übertragung als auch im Ruhezustand. Eine BitLocker-Laufwerksverschlüsselung ergänzt die Dateiverschlüsselung. Zudem können Sie bei Microsoft 365 Ihre eigenen Verschlüsselungsschlüssel in Azure Key Vault hochladen.\n\nDie Zusammenarbeit mit anderen Microsoft-Programmen funktioniert reibungslos: OneDrive integriert sich in Microsoft Outlook und gewährleistet so das nahtlose Teilen von Dateien, wobei die Versionskontrolle erhalten bleibt. Eine weitere Besonderheit ist die Dateiwiederherstellung, die das Wiederherstellen des Dateistatus zu jedem Zeitpunkt innerhalb der letzten 30 Tage ermöglicht. Ähnlich dem Desktop verfügt OneDrive außerdem über einen Papierkorb für gelöschte Dateien.\n\nZum Synchronisieren wird die kostenlose OneDrive-Synchronisierungs-App benötigt, die für Office 2013 und Office 2016 verfügbar ist bzw. für Microsoft-365-Abonnements, die Office-2016-Anwendungen umfassen. Bei entsprechender Einstellung synchronisiert OneDrive automatisch oder nur ausgewählte Dateien oder Ordner. Für OneDrive for Business stehen drei Pläne zur Auswahl:",
        "bullets": [
          "OneDrive for Business (Plan 1): 4,20 EUR pro Nutzer und Monat im Jahresabo",
          "OneDrive for Business (Plan 2): 8,40 EUR pro Nutzer und Monat im Jahresabo",
          "Microsoft 365 Business Standard: 10,50 EUR pro Nutzer und Monat im Jahresabo (inklusive verschiedener Office-Apps und Dienste)"
        ]
      },
      {
        "heading": "Dropbox für Unternehmen – der Speedster unter den Cloud-Speichern",
        "body": "Dropbox ist seit 2007 am Markt und ein Pionier in Sachen Cloud-Storage. Bei der kostenlosen Einzelnutzer-Version kann immer nur ein Ordner mit einem identischen auf dem Server synchronisiert werden. Dagegen bietet die Business-Lösung eine Verwaltungskonsole, differenzierte Freigabeberechtigungen bzw. umfassende Admin-, Überwachungs-, Sicherheits- und Integrationsfunktionen sowie Möglichkeiten zur Teamarbeit. Dropbox eignet sich in beiden Versionen gut zum Austausch großer Dateien – ganz einfach über ein Online-Interface oder die kostenfreie Synchronisationssoftware.\n\nBei der Geschwindigkeit des Synchronisierens hat Dropbox die Nase vorn: Es werden nur die veränderten Bits kopiert, anstatt die gesamte Datei auszutauschen. In puncto Datensicherheit nutzt Dropbox eine TLS-Verschlüsselung, die durch eine Zwei-Faktor-Authentifizierung beim Login ergänzt werden kann. Gespeichert wird bei Amazon S3 – damit „steht“ der Dropbox-Datenserver in den USA und unterliegt dem amerikanischen Datenschutzrecht (CLOUD Act). Hier ist Vorsicht beim Speichern personenbezogener Daten geboten; Unternehmensdaten sollten mit einer Zero-Knowledge-Verschlüsselung gesichert werden, wenn sie in die Cloud gespeichert werden. Für Dropbox Business stehen drei Abo-Pakete zur Auswahl:",
        "bullets": [
          "Dropbox für Teams Standard: 10 EUR pro Nutzer und Monat im Jahresabo",
          "Dropbox für Teams Advanced: 15 EUR pro Nutzer und Monat im Jahresabo",
          "Dropbox für Teams Enterprise: auf Anfrage"
        ]
      },
      {
        "heading": "Box Drive für Unternehmen",
        "body": "Box Drive verbindet den Desktop mit der Cloud. Über den Windows Explorer oder Mac Finder greifen Sie innerhalb weniger Sekunden direkt auf die benötigten Dateien zu. Gespeichert werden sie wie lokale Dateien, aber eben automatisch in der Cloud. Dadurch verringert sich das Risiko von Datenverlusten, falls das Gerät verloren geht oder gestohlen wird.\n\nBox Drive legt großen Wert auf Zusammenarbeit, Suche und Versionskontrolle. Die Freigabe und Verwaltung der zentral verfügbaren, ausgelagerten Dateien ist komfortabel. Auch in Bezug auf Sicherheit und Datenschutz ist Box Drive sehr unternehmerfreundlich: Der Cloud-Service unterstützt mithilfe des Schlüsselverwaltungsdienstes von AWS (Amazon Web Services) die kundenverwaltete Verschlüsselung der Dateien. Zudem können Unternehmen die notwendigen Codierungsschlüssel über ein optionales Hardware-Sicherheitsmodul (HSM) selbst sichern. Für Box Drive stehen vier Abo-Pakete zur Auswahl:",
        "bullets": [
          "Box Drive für Unternehmen Starter: 4,27 EUR pro Nutzer und Monat im Jahresabo",
          "Box Drive für Unternehmen Business: 12,82 EUR pro Nutzer und Monat im Jahresabo",
          "Box Drive für Unternehmen Business Plus: 21,37 EUR pro Nutzer und Monat im Jahresabo",
          "Box Drive für Unternehmen Enterprise: 31,50 EUR pro Nutzer und Monat im Jahresabo"
        ]
      },
      {
        "heading": "Fazit: nutzerfreundlich und datenschutzoptimiert",
        "body": "Die Vorteile einer Cloud für Firmen liegen auf der Hand: Daten, Kundendateien, E-Mails und Co. sind jederzeit verfügbar und aktuell. Die Vergabe bestimmter Rechte ermöglicht, dass Nutzer Dateien entweder nur sehen oder auch bearbeiten dürfen. Beim Vergleich der vier Cloud-Speicher für Unternehmen kann man insgesamt sagen, dass sie alle Wert auf Nutzerfreundlichkeit legen. Dateien und Ordner können ohne Zusatzsoftware synchronisiert werden. Beim Datenschutz haben alle verglichenen Anbieter nachgebessert, sodass die Daten meist verschlüsselt übergeben werden.\n\nWir empfehlen jedoch die Kombination mit einer End-to-End-Verschlüsselung. Diese sorgt insbesondere beim Heimnetzwerk – einem bei Hackern beliebten Angriffspunkt – für sicheren Zugriff auf die Unternehmensdaten. Gern helfen wir Ihnen bei der Wahl des richtigen Cloud-Dienstes und übernehmen für Sie den Onboarding-Prozess und die Schulung der Mitarbeitenden."
      }
    ],
    "faq": [
      {
        "question": "Welche Cloud-Anbieter werden von Unternehmen bevorzugt genutzt?",
        "answer": "Vier Anbieter stehen bei Unternehmen besonders hoch im Kurs: Google Drive, Microsoft OneDrive, Dropbox und Box. Alle vier legen Wert auf Nutzerfreundlichkeit und verschlüsselte Datenübertragung, unterscheiden sich aber in Funktionen, Preisen und Datenschutzdetails."
      },
      {
        "question": "Wie sicher sind Cloud-Speicher für Unternehmensdaten?",
        "answer": "Die großen Anbieter übergeben Daten heute meist verschlüsselt und sind ISO-27001-zertifiziert. Dieses Zertifikat deckt jedoch nicht alle Risiken der Cloud-Architektur ab. Wer auf Nummer sicher gehen will, kombiniert den Cloud-Dienst mit einer End-to-End-Verschlüsselung."
      },
      {
        "question": "Was bedeutet der CLOUD Act für die Anbieterwahl?",
        "answer": "US-Anbieter wie Google und Dropbox unterliegen dem CLOUD Act, nach dem amerikanische Behörden Zugriff auf entschlüsselte Daten verlangen können. Beim Speichern personenbezogener Daten ist daher Vorsicht geboten; datenschutzrechtlich liegen etablierte deutsche Cloud-Dienstleister vorn."
      },
      {
        "question": "Ist ein Auftragsverarbeitungsvertrag für die Cloud-Nutzung nötig?",
        "answer": "Ja. Da in der Cloud persönliche Daten wie Namen, Anschriften oder Bankverbindungen gespeichert werden, ist ein AV-Vertrag zwischen Cloud-Anbieter und -Anwender notwendig. Der Anwender bleibt dabei die verantwortliche Stelle für die Sicherheit der Daten."
      }
    ]
  },
  // Übertragen von datadiorama.com/rechnungsprogramm-fuer-kleinunternehmer (Original vom 27.07.2020, via Webarchiv).
  "rechnungsprogramm-fuer-kleinunternehmer": {
    "intro": "Rechnungen schreiben ist für viele Kleinunternehmer eine unangenehme Aufgabe: Es kostet Zeit, man muss die Infos aus verschiedenen Quellen zusammensuchen, und zu guter Letzt verlangt der Staat, dass Rechnungen nicht mehr verändert werden dürfen, sind sie einmal abgespeichert. Da liegt die Anschaffung eines einfachen Rechnungsprogramms nahe. Dieser Artikel bietet einen Einstieg in die besten Softwarelösungen für Kleinunternehmer und gibt Entscheidungshilfen, damit Sie die passende Lösung finden.",
    "keyTakeaways": [
      "Seit dem 01.01.2015 verlangen die GoBD eine revisionssichere Archivierung – Rechnungen aus Word oder Excel erfüllen diese Anforderung nicht.",
      "Rechnungsprogramme bündeln alle Daten an einem Ort, minimieren Fehlerquellen und erstellen saubere Rechnungen in kürzester Zeit.",
      "Viele Anbieter gleichen Zahlungseingänge automatisch mit dem Konto ab und verschicken automatisiert Mahnungen.",
      "Entscheidend bei der Auswahl: Die Software muss zu den eigenen Anforderungen passen und einfach zu bedienen sein; eine DATEV-/Steuerberater-Schnittstelle ist hilfreich.",
      "Im Vergleich der vier Anbieter Fastbill, easybill, Smoice und Lexoffice punktet Smoice mit Extras wie Angebotsannahme per Mail, Lexoffice mit dem günstigsten Preis."
    ],
    "sections": [
      {
        "heading": "Ist ein Rechnungsprogramm für Kleinunternehmer notwendig?",
        "body": "Wenn Sie bisher Ihre Rechnungen – wie die meisten Kleinunternehmer – mit Word oder Excel geschrieben haben, ist ein Rechnungsprogramm eigentlich schon seit dem 01.01.2015 notwendig. An diesem Tag sind die neuen GoBD, die Grundsätze der ordnungsgemäßen Buchführung, in Kraft getreten. Diese legen eine revisionssichere Archivierung fest, was bedeutet, dass eine einmal gespeicherte Rechnung nicht mehr verändert werden darf.\n\nIm Normalfall speichern Sie als Kleinunternehmer die Rechnungen auf dem PC, auf einer externen Festplatte oder in der Cloud. Muss an der Rechnung etwas geändert werden, kann sie jederzeit aufgerufen, verändert und mit derselben Rechnungsnummer wieder abgespeichert werden. Das ist mit den GoBD-Regeln nicht mehr zulässig. Wenn Sie also Ihre Rechnungen mit Word oder Excel schreiben, ist ein Rechnungsprogramm notwendig."
      },
      {
        "heading": "Was kann eine Rechnungssoftware Ihnen abnehmen?",
        "body": "Eine Rechnungssoftware für Kleinunternehmer bietet im Kern vier Erleichterungen:",
        "bullets": [
          "GoBD-konforme Ablage",
          "Daten an einem Ort gebündelt",
          "Fehlerquellen werden minimiert",
          "Saubere Rechnungen in kürzester Zeit"
        ]
      },
      {
        "heading": "Die Vorteile im Detail",
        "body": "Um an den vorherigen Punkt anzuknüpfen: Rechnungsprogramme speichern die Rechnungen so, wie es die Grundsätze der ordnungsgemäßen Buchführung vorsehen – auf einem externen Server sicher archiviert und unveränderbar. Bei Qualitätsanbietern wie Lexoffice oder Smoice werden die Daten in einem deutschen Hochsicherheitsrechenzentrum abgelegt, das in hohem Maße für den Datenschutz zertifiziert ist.\n\nEin weiterer Vorteil von Rechnungssoftware ist, dass alle Daten an einem Ort gebündelt werden. Sie müssen nicht erst in den einen Ordner, um die Kundeninformationen zusammenzusuchen, und in den nächsten, um die passende Rechnungsnummer zu finden – womöglich noch mit eingeschränktem Zugriff aus dem Home-Office. Alles ist in einer Software gebündelt, und Fehlerquellen wie doppelte oder ausgelassene Rechnungsnummern werden eliminiert.\n\nEin weiterer großer Vorteil ist der Abgleich mit Ihren Kontoauszügen. Sie müssen Rechnungen nicht mehr manuell mit Kontoauszügen abgleichen, um zu verifizieren, dass die Kunden gezahlt haben. Viele Anbieter bieten diese Funktion automatisch mit an: Über eine Schnittstelle zu Ihrer Bank findet ein Abgleich mit Ihrem Rechnungsausgang statt. Wenn eine Überweisung zu einer Rechnung passt, wird der offene Betrag auf null gesetzt.\n\nWird eine Rechnung einmal nicht gezahlt, kann das gerade für Kleinunternehmer mühselig werden: Welche Mahnstufe hat der Kunde? Wurde schon gemahnt oder nur erinnert? Auch das nimmt Ihnen ein modernes Rechnungsprogramm ab, indem es automatisiert Mahnungen verschickt, wenn der Abgleich mit dem Kontoauszug bis zum Stichtag nicht erfolgt ist.\n\nAuch das Versenden von Rechnungen per Mail muss nicht mehr händisch geschehen, sondern kann durch die Software erledigt werden. Gute Anbieter stellen durch zuverlässige Mailserver sicher, dass die Mails auch ankommen und nicht im Spam-Filter des Kunden landen."
      },
      {
        "heading": "Welche Vorteile haben Rechnungsprogramme für Ihre Buchhaltung?",
        "body": "Zusammengefasst profitiert Ihre Buchhaltung in drei Bereichen:",
        "bullets": [
          "Zeitersparnis: kein lästiges Suchen nach Informationen an verschiedenen Orten, Rechnungen schreiben innerhalb weniger Minuten",
          "Konformität: Die Hersteller der Software kümmern sich um eine GoBD-konforme Speicherung Ihrer Kundendaten",
          "Automatisierung: Abgleich der Zahlungseingänge mit Ihrem Konto, Mahnwesen, wiederkehrende Verträge, Lastschriften – all das können moderne Rechnungsprogramme automatisiert abbilden"
        ]
      },
      {
        "heading": "Worauf sollten Sie bei der Wahl der Rechnungssoftware achten?",
        "body": "Wichtig ist, dass die Software Ihren Anforderungen entspricht und für Sie einfach zu handhaben ist, damit sie eine Arbeitserleichterung mit sich bringt. Ein guter Support kommt damit einher.\n\nZwei Anwendungsbeispiele: Für Freiberufler könnte eine schnelle Abrechnung von geleisteten Stunden und die Abrechnung von wiederkehrenden Verträgen ein Thema sein. Bei Handwerkern sollten schnelles Erstellen von Angeboten und eine Zeiterfassung vor Ort gegeben sein, ebenso wie ein automatisiertes Mahnwesen.\n\nNicht alle Lösungen in diesem Test bieten beispielsweise einen automatischen Abgleich mit Ihren Kontoauszügen an. Wenn Sie nur eine Rechnung pro Jahr schreiben, ist dieser Abgleich aber auch nicht vonnöten. Wenn Sie wiederkehrende Leistungen per Lastschrift einziehen möchten, sollten diese beiden Funktionen ebenfalls an Bord sein. Auch Ihr Steuerberater kann Ihnen nützliche Informationen zur passenden Software geben. Viele Anbieter bieten eine Schnittstelle zu Steuerberatern bzw. zu DATEV an, was die Übertragung der Monatsabschlüsse vereinfacht."
      },
      {
        "heading": "Überblick über die besten Anbieter",
        "body": "Im Vergleich stehen Fastbill, easybill, Smoice und Lexoffice. Alle vier Anbieter überzeugen bei Handhabung, anpassbaren PDF-Vorlagen, Rechnungsversand per Mail, Kundendatenbank, Vertragsabrechnung und automatisiertem Mahnwesen.\n\nUnterschiede zeigen sich im Tempo und bei den Extras: Angebote sind bei Smoice in etwa 2 Minuten erstellt, bei easybill in 3 Minuten, bei Fastbill und Lexoffice in etwa 5 Minuten. Rechnungen erstellen dauert bei Fastbill und Smoice rund 1 Minute, bei Lexoffice 2 und bei easybill 3 Minuten. Eine Angebotsannahme per Mail und eine automatische Mehrwertsteuer-Berechnung bietet im Test nur Smoice.\n\nPreislich liegt Lexoffice mit 7,90 Euro pro Monat vorn, gefolgt von Fastbill mit 8,99 Euro, easybill mit 15,48 Euro und Smoice mit 19,00 Euro pro Monat."
      }
    ],
    "faq": [
      {
        "question": "Darf ich meine Rechnungen weiterhin mit Word oder Excel schreiben?",
        "answer": "Nein. Seit dem 01.01.2015 gelten die GoBD, die eine revisionssichere Archivierung verlangen: Eine einmal gespeicherte Rechnung darf nicht mehr verändert werden. Mit Word oder Excel ist das nicht sichergestellt, daher ist ein Rechnungsprogramm notwendig."
      },
      {
        "question": "Was nimmt mir ein Rechnungsprogramm konkret ab?",
        "answer": "Es sorgt für eine GoBD-konforme Ablage, bündelt alle Daten an einem Ort, minimiert Fehlerquellen wie doppelte Rechnungsnummern, gleicht Zahlungseingänge automatisch mit dem Konto ab, verschickt automatisiert Mahnungen und versendet Rechnungen per Mail."
      },
      {
        "question": "Worauf sollte ich bei der Auswahl achten?",
        "answer": "Die Software muss Ihren Anforderungen entsprechen und einfach zu bedienen sein. Prüfen Sie, ob Funktionen wie Kontoabgleich, Lastschrifteinzug oder Zeiterfassung benötigt werden, und ob eine Schnittstelle zu DATEV bzw. Ihrem Steuerberater vorhanden ist."
      },
      {
        "question": "Welcher Anbieter ist der günstigste im Vergleich?",
        "answer": "Lexoffice ist mit 7,90 Euro pro Monat der günstigste der vier verglichenen Anbieter, gefolgt von Fastbill (8,99 Euro), easybill (15,48 Euro) und Smoice (19,00 Euro) – wobei Smoice als einziger Angebotsannahme per Mail und automatische MwSt.-Berechnung bietet."
      }
    ]
  },
};
