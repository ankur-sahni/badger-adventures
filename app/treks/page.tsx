import { pageMetadata } from "@/lib/seo";
import { TripListing } from "@/components/trips/TripListing";

export const metadata = pageMetadata({
  title: "Treks in Manali: Guided Small-Group Himalayan Treks",
  description:
    "Guided trekking in Manali, from weekend walks to high passes: Chandrakhani, Beas Kund, Bhrigu Lake, Sar Pass and more, with prices and day-by-day plans.",
  path: "/treks",
});

export default function TreksPage() {
  return (
    <TripListing
      category="trek"
      eyebrow="Treks"
      title="Treks from Manali"
      intro="Small-group treks in Kullu, Lahaul and the Parvati Valley, listed easiest first."
    />
  );
}
