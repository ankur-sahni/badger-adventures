import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Trip } from "@/types";
import { ArrowRightIcon, MapPinIcon, MountainIcon } from "@/components/icons";
import { formatDuration, formatFeet, tripHref, tripPhotoTransitionName } from "@/lib/trips";
import { PriceTag } from "./PriceTag";

type TripCardProps = {
  trip: Trip;
  headingLevel?: "h2" | "h3";
  preloadImage?: boolean;
};

export function TripCard({ trip, headingLevel: Heading = "h3", preloadImage = false }: TripCardProps) {
  return (
    <Link
      href={tripHref(trip)}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-snow shadow-[var(--shadow-card)] transition-shadow duration-[400ms] ease-[var(--ease-soft)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative">
        <ViewTransition name={tripPhotoTransitionName(trip.slug)} share="morph" default="none">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={trip.heroImage.src}
              alt={trip.heroImage.alt}
              fill
              preload={preloadImage}
              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 86vw"
              className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover:scale-[1.06]"
            />
          </div>
        </ViewTransition>
        <span
          aria-hidden
          className="absolute top-4 right-4 inline-flex size-10 -translate-x-1.5 items-center justify-center rounded-full bg-snow/90 text-navy opacity-0 shadow-[var(--shadow-card)] transition-[opacity,translate] duration-500 ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        >
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <Heading className="font-display text-2xl leading-tight font-medium">{trip.name}</Heading>
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
          <PriceTag price={trip.pricePerPersonINR} />
        </p>
      </div>
    </Link>
  );
}
