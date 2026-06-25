/**
 * Rendert strukturierte Daten (JSON-LD) für Suchmaschinen und KI-Systeme.
 * Wird serverseitig gerendert und ist damit für Crawler sofort sichtbar.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify ist sicher gegen XSS für reine Datenobjekte;
          // zusätzlich werden < / > maskiert.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
