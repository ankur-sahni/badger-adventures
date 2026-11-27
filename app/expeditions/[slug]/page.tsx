import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TripPage } from "@/components/trips/TripPage";
import { formatDuration, getTrip, getTrips } from "@/lib/trips";

export function generateStaticParams() {
  return getTrips("expedition").map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: PageProps<"/expeditions/[slug]">): Promise<Metadata> {
  const trip = getTrip("expedition", (await params).slug);
  if (!trip) return {};
  return {
    title: `${trip.name} (${formatDuration(trip.durationDays)}) from Manali`,
    description: trip.shortDescription,
  };
}

export default async function ExpeditionPage({ params }: PageProps<"/expeditions/[slug]">) {
  const trip = getTrip("expedition", (await params).slug);
  if (!trip) notFound();
  return <TripPage trip={trip} />;
}
