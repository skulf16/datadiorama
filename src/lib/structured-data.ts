import { SITE, LOCATIONS } from "@/data/site";
import type { FaqItem, Service } from "@/lib/types";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Organisation / Systemhaus – site-weit referenzierbar. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.fullName,
    alternateName: "datadiorama",
    url: SITE.url,
    logo: SITE.logo,
    email: SITE.email,
    telephone: SITE.primaryPhone,
    foundingDate: String(SITE.foundedYear),
    description: SITE.description,
    slogan: SITE.tagline,
    areaServed: SITE.serviceArea.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: [
      "IT-Support",
      "Telefonanlagen",
      "Netzwerkbetreuung",
      "UniFi",
      "Microsoft 365",
      "Cloud-Lösungen",
      "Softwareentwicklung",
      "IT-Sicherheit",
    ],
    address: LOCATIONS.map((l) => ({
      "@type": "PostalAddress",
      streetAddress: l.street,
      postalCode: l.postalCode,
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: l.countryCode,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.primaryPhone,
      email: SITE.email,
      contactType: "customer support",
      availableLanguage: ["German", "English"],
      areaServed: ["DE", "CH"],
    },
    sameAs: ["https://www.datadiorama.ch/"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
  };
}

/** LocalBusiness pro Standort – wichtig für lokale Suche. */
export function localBusinessSchema() {
  return LOCATIONS.map((l) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#local-${l.id}`,
    name: `${SITE.name} ${l.label}`,
    parentOrganization: { "@id": ORG_ID },
    image: SITE.logo,
    url: SITE.url,
    telephone: l.phone,
    email: SITE.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      postalCode: l.postalCode,
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: l.countryCode,
    },
  }));
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/leistungen/${service.slug}/#service`,
    name: service.title,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: `${SITE.url}/leistungen/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: SITE.serviceArea.map((name) => ({ "@type": "AdministrativeArea", name })),
    ...(service.benefits.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.title,
            itemListElement: service.benefits.map((b) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: b.title, description: b.description },
            })),
          },
        }
      : {}),
  };
}

export function jobPostingSchema(job: {
  title: string;
  description: string;
  employmentType: string;
  slug: string;
  datePosted: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.fullName,
      sameAs: SITE.url,
      logo: SITE.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCATIONS[0].street,
        postalCode: LOCATIONS[0].postalCode,
        addressLocality: LOCATIONS[0].city,
        addressRegion: LOCATIONS[0].region,
        addressCountry: LOCATIONS[0].countryCode,
      },
    },
    directApply: true,
  };
}
