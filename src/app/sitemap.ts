import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { JOBS } from "@/data/jobs";
import { POSTS } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date("2026-06-24");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/jobs`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/beitraege`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/fernzugriff`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const jobs: MetadataRoute.Sitemap = JOBS.map((j) => ({
    url: `${base}/jobs/${j.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/beitraege/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...services, ...jobs, ...posts];
}
