import type { Metadata } from "next";
import { TripListing } from "@/components/trips/TripListing";

export const metadata: Metadata = {
  title: "Himalayan Expeditions from Manali",
  description:
    "Guided mountaineering expeditions from Manali: Friendship Peak (5,289 m) and Yunam Peak (6,111 m), with technical gear and certified instructors.",
};

export default function ExpeditionsPage() {
  return (
    <TripListing
      category="expedition"
      eyebrow="Expeditions"
      title="Himalayan expeditions"
      intro="Guided climbs to your first 5,000 m and 6,000 m summits, listed easiest first."
    />
  );
}
