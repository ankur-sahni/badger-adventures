import Link from "next/link";
import type { TripCategory } from "@/types";
import { getTrips } from "@/lib/trips";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TripCard } from "@/components/trips/TripCard";
import { TripSlider } from "@/components/trips/TripSlider";

type TripsSectionProps = {
  category: TripCategory;
  eyebrow: string;
  title: string;
  subtitle: string;
  className?: string;
};

export function TripsSection({ category, eyebrow, title, subtitle, className = "" }: TripsSectionProps) {
  const trips = getTrips(category, { featuredOnly: true });
  const isTrek = category === "trek";
  const titleId = `${category}-title`;

  return (
    <section aria-labelledby={titleId} className={`section-y ${className}`}>
      <div className="container-page">
        <TripSlider
          label={isTrek ? "treks" : "expeditions"}
          header={<SectionHeading id={titleId} eyebrow={eyebrow} title={title} subtitle={subtitle} />}
        >
          {trips.map((trip, index) => (
            <Reveal key={trip.slug} delay={Math.min(index, 2) * 90} className="h-full">
              <TripCard trip={trip} />
            </Reveal>
          ))}
        </TripSlider>
        <Link
          href={isTrek ? "/treks" : "/expeditions"}
          className="inline-flex min-h-11 items-center text-sm tracking-[0.08em] text-navy [--link-rest:rgb(60_84_104/0.35)]"
        >
          <span className="link-line">{isTrek ? "View all treks" : "View all expeditions"}</span>
        </Link>
      </div>
    </section>
  );
}
