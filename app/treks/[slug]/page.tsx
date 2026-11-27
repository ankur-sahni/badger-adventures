import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TripPage } from "@/components/trips/TripPage";
import { getTrip, getTrips } from "@/lib/trips";
import { tripMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getTrips("trek").map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: PageProps<"/treks/[slug]">): Promise<Metadata> {
  const trip = getTrip("trek", (await params).slug);
  return trip ? tripMetadata(trip) : { title: "Page not found" };
}

export default async function TrekPage({ params }: PageProps<"/treks/[slug]">) {
  const trip = getTrip("trek", (await params).slug);
  if (!trip) notFound();
  return <TripPage trip={trip} />;
}
