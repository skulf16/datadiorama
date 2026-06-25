import type { Metadata } from "next";
import { SITE } from "@/data/site";

type BuildMetaArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noIndex = false,
  keywords,
}: BuildMetaArgs): Metadata {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  // Die Brand-Suffix-Logik übernimmt das title.template im Root-Layout.
  // Auf der Startseite den absoluten Titel verwenden (kein Suffix).
  const ogTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  const titleField = path === "/" ? { absolute: title } : title;
  // Bei eigenem Bild dieses verwenden; sonst greift das dynamische
  // app/opengraph-image (Marken-OG-Bild) automatisch.
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: SITE.fullName }]
    : undefined;

  return {
    title: titleField,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type,
      url,
      title: ogTitle,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
