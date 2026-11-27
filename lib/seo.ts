import type { Metadata } from "next";
import type { Faq, ImageAsset, Trip } from "@/types";
import { site } from "@/config/site";
import { images } from "@/config/images";
import { itineraryLabel, tripHref } from "./trips";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
  absoluteTitle?: boolean;
};

// Child metadata replaces openGraph/twitter wholesale, so every page builds the full set here.
export function pageMetadata({ title, description, path, image = images.hero, absoluteTitle = false }: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.src],
    },
  };
}

export function tripMetadata(trip: Trip): Metadata {
  const isDayHike = trip.durationDays === 1;
  const days = `${trip.durationDays} days`;
  const altitude =
    trip.category === "trek"
      ? `${trip.maxAltitudeFt.toLocaleString("en-IN")} ft`
      : `${trip.maxAltitudeM.toLocaleString("en-IN")} m`;
  return pageMetadata({
    title: isDayHike ? `${trip.name} from Manali` : `${trip.name} from Manali (${days}, ${altitude})`,
    description: isDayHike
      ? `${trip.shortDescription} ${trip.difficulty} guided day hike with timings, inclusions and price.`
      : `${trip.shortDescription} ${trip.difficulty} · ${days} · day-by-day itinerary, inclusions and price.`,
    path: tripHref(trip),
    image: trip.heroImage,
  });
}

const absolute = (path: string) => new URL(path, site.url).toString();

export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": absolute("/#organization"),
    name: site.name,
    url: absolute("/"),
    description: site.description,
    image: images.hero.src,
    telephone: site.phones[0].tel,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: "Himachal Pradesh, India",
    sameAs: [site.instagram.url],
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function touristTripSchema(trip: Trip) {
  const url = absolute(tripHref(trip));
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.shortDescription,
    url,
    image: [trip.heroImage.src, ...trip.galleryImages.map((image) => image.src)],
    touristType: trip.category === "trek" ? "Trekking" : "Mountaineering",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: trip.itinerary.length,
      itemListElement: trip.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `${itineraryLabel(day)}: ${day.title}`,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      price: trip.pricePerPersonINR,
      priceCurrency: "INR",
      url,
    },
    provider: { "@id": absolute("/#organization") },
  };
}
