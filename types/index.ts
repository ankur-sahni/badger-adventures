export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Technical";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Trip = {
  slug: string;
  name: string;
  category: "trek" | "expedition";
  featured: boolean;
  order: number;
  region: string;
  durationDays: number;
  maxAltitudeM: number;
  difficulty: Difficulty;
  pricePerPersonINR: number;
  shortDescription: string;
  overview: string;
  bestSeason: string;
  fitnessLevel: string;
  howToReach: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs: Faq[];
  heroImage: string;
  galleryImages: string[];
};

export type Review = {
  quote: string;
  name: string;
  trip: string;
};
