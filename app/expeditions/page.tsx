import { pageMetadata } from "@/lib/seo";
import { TripListing } from "@/components/trips/TripListing";

export const metadata = pageMetadata({
  title: "Himalayan Expeditions from Manali",
  description:
    "Himalayan expeditions from Manali: Friendship Peak (5,289 m) and Yunam Peak (6,111 m), with technical gear, acclimatisation days and experienced instructors.",
  path: "/expeditions",
});

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
