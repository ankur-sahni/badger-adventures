export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Technical";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  facts?: string[];
};

export type Faq = {
  q: string;
  a: string;
};

export type TripCategory = "trek" | "expedition";

export type Trip = {
  slug: string;
  name: string;
  category: TripCategory;
  featured: boolean;
  order: number;
  region: string;
  route: string;
  durationDays: number;
  maxAltitudeM: number;
  maxAltitudeFt: number;
  difficulty: Difficulty;
  pricePerPersonINR: number;
  shortDescription: string;
  overview: string[];
  bestSeason: string;
  fitnessLevel: string;
  howToReach: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  notes?: string[];
  faqs: Faq[];
  heroImage: ImageAsset;
  galleryImages: ImageAsset[];
};

export type Review = {
  quote: string;
  name: string;
  trip: string;
};
