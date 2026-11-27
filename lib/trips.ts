import { treks } from "@/data/treks";
import { expeditions } from "@/data/expeditions";
import type { Trip, TripCategory } from "@/types";
import { CUSTOM_TRIP } from "./enquiry";

const byOrder = (a: Trip, b: Trip) => a.order - b.order;

export const allTrips: Trip[] = [...treks.toSorted(byOrder), ...expeditions.toSorted(byOrder)];

export const enquiryTripOptions = [...allTrips.map((trip) => trip.name), CUSTOM_TRIP];

export function getTrips(category: TripCategory, { featuredOnly = false } = {}) {
  const list = category === "trek" ? treks : expeditions;
  return list.filter((trip) => !featuredOnly || trip.featured).toSorted(byOrder);
}

export function getTrip(category: TripCategory, slug: string) {
  return getTrips(category).find((trip) => trip.slug === slug);
}

export function tripHref(trip: Pick<Trip, "category" | "slug">) {
  return `/${trip.category === "trek" ? "treks" : "expeditions"}/${trip.slug}`;
}

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const grouped = new Intl.NumberFormat("en-IN");

export const formatPrice = (amount: number) => inr.format(amount);

// Displayed saving is 20% of the final price, rounded to a tidy figure: nearest 100 under ₹1,000, else nearest 500.
export function displayedSaving(price: number) {
  const raw = price * 0.2;
  const step = raw < 1000 ? 100 : 500;
  return Math.round(raw / step) * step;
}
export const formatDuration = (days: number) => (days === 1 ? "Day hike" : `${days}D/${days - 1}N`);
export const itineraryLabel = (day: { day: number; label?: string }) => day.label ?? `Day ${day.day}`;
export const formatFeet = (feet: number) => `${grouped.format(feet)} ft`;
export const formatMetres = (metres: number) => `${grouped.format(metres)} m`;
