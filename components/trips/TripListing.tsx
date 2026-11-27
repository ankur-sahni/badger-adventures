import type { TripCategory } from "@/types";
import { getTrips } from "@/lib/trips";
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
      <header className="bg-navy pt-28 pb-12 text-snow">
        <div className="container-page">
          <p className="eyebrow text-ice">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] font-light sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-xl leading-relaxed text-ice">{intro}</p>
        </div>
      </header>
      <section className="section-y">
        <ul className="container-page flex flex-wrap gap-5">
          {trips.map((trip, index) => (
            <li
              key={trip.slug}
              className="w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <Reveal delay={(index % 3) * 90} className="h-full">
                <TripCard trip={trip} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
