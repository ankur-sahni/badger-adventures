import type { Metadata } from "next";
import { TripListing } from "@/components/trips/TripListing";

export const metadata: Metadata = {
  title: "Treks in Manali",
  description:
    "Guided treks from Manali, from easy weekend walks to high passes: Chandrakhani, Beas Kund, Bhrigu Lake, Sar Pass and more.",
};

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
