import type { TripCategory } from "@/types";
import { getTrips } from "@/lib/trips";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TripCard } from "./TripCard";

type TripListingProps = {
  category: TripCategory;
  eyebrow: string;
  title: string;
  intro: string;
};

export function TripListing({ category, eyebrow, title, intro }: TripListingProps) {
  const trips = getTrips(category);
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <section aria-label={title} className="section-y">
        <ul className="container-page flex flex-wrap gap-5">
          {trips.map((trip, index) => (
            <li
              key={trip.slug}
              className="w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              {/* The first row is above the fold, so it renders immediately for a fast LCP. */}
              {index < 3 ? (
                <TripCard trip={trip} headingLevel="h2" preloadImage={index === 0} />
              ) : (
                <Reveal delay={(index % 3) * 90} className="h-full">
                  <TripCard trip={trip} headingLevel="h2" />
                </Reveal>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
