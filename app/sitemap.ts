import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allTrips, tripHref } from "@/lib/trips";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/treks"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/expeditions"), changeFrequency: "monthly", priority: 0.9 },
    ...allTrips.map((trip) => ({
      url: url(tripHref(trip)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: url("/gallery"), changeFrequency: "monthly", priority: 0.5 },
  ];
}
