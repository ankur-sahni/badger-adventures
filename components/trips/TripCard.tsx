import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/types";
import { MapPinIcon, MountainIcon } from "@/components/icons";
import { formatDuration, formatFeet, formatPrice, tripHref } from "@/lib/trips";

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={tripHref(trip)}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-snow shadow-[var(--shadow-card)] transition-shadow duration-[400ms] ease-[var(--ease-soft)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={trip.heroImage.src}
          alt={trip.heroImage.alt}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 86vw"
          className="object-cover transition-transform duration-[400ms] ease-[var(--ease-soft)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-2xl leading-tight font-medium">{trip.name}</h3>
        <p className="flex items-center gap-2 text-sm text-slate">
          <MountainIcon className="size-4 shrink-0" />
          <span>
            {formatFeet(trip.maxAltitudeFt)} · {formatDuration(trip.durationDays)} · {trip.difficulty}
          </span>
        </p>
        <p className="flex items-center gap-2 text-sm text-slate">
          <MapPinIcon className="size-4 shrink-0" />
          <span>{trip.route}</span>
        </p>
        <p className="mt-auto pt-2 text-[15px]">
          <span className="font-semibold">{formatPrice(trip.pricePerPersonINR)}</span>
          <span className="text-slate"> / person</span>
        </p>
      </div>
    </Link>
  );
}
