import Image from "next/image";
import type { Trip } from "@/types";
import { ButtonLink } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import {
  enquiryTripOptions,
  formatDuration,
  formatFeet,
  formatMetres,
  itineraryLabel,
} from "@/lib/trips";
import { faqPageSchema, touristTripSchema } from "@/lib/seo";
import { EnquiryTrustLine } from "@/components/EnquiryTrustLine";
import { PriceTag } from "./PriceTag";

export function TripPage({ trip }: { trip: Trip }) {
  const altitude = `${formatFeet(trip.maxAltitudeFt)} (${formatMetres(trip.maxAltitudeM)})`;
  const glance = [
    { label: "Duration", value: formatDuration(trip.durationDays) },
    { label: "Max altitude", value: altitude },
    { label: "Difficulty", value: trip.difficulty },
    { label: "Start and end", value: trip.route },
    { label: "Region", value: trip.region },
    { label: "Price", value: <PriceTag price={trip.pricePerPersonINR} className="justify-end" /> },
    { label: "Led by", value: "Certified guides" },
  ];

  return (
    <>
      <JsonLd data={touristTripSchema(trip)} />
      <JsonLd data={faqPageSchema(trip.faqs)} />
      <section className="relative isolate flex h-[62svh] min-h-[26rem] max-h-[36rem] items-end overflow-hidden text-snow">
        <Image
          src={trip.heroImage.src}
          alt={trip.heroImage.alt}
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(11_31_51/0.55)_0%,rgb(11_31_51/0.25)_40%,rgb(11_31_51/0.88)_100%)]"
        />
        <div className="container-page pb-10 lg:pb-12">
          <p className="eyebrow text-snow/90">{trip.region}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] font-light sm:text-5xl">{trip.name}</h1>
          <p className="mt-3 text-snow/90">
            {formatDuration(trip.durationDays)} · {altitude} · {trip.difficulty}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="#enquire">Enquire for dates</ButtonLink>
            <p className="text-lg">
              <PriceTag price={trip.pricePerPersonINR} tone="dark" />
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="overview-title" className="section-y">
        <div className="container-page flex flex-col gap-10 lg:flex-row lg:gap-14">
          <div className="lg:w-7/12">
            <SectionHeading id="overview-title" eyebrow="Overview" title={`About the ${trip.category}`} />
            <Reveal delay={100} className="mt-5 flex max-w-2xl flex-col gap-4 leading-relaxed text-slate">
              {trip.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:w-5/12">
            <dl className="rounded-[var(--radius-card)] bg-ice/25 p-6">
              {glance.map((item) => (
                <div key={item.label} className="flex justify-between gap-6 border-b border-ice py-2.5 last:border-b-0">
                  <dt className="eyebrow pt-0.5 text-slate">{item.label}</dt>
                  <dd className="text-right text-[15px] font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="itinerary-title" className="section-y bg-ice/25">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:gap-14">
          <div className="lg:w-4/12">
            <SectionHeading
              id="itinerary-title"
              eyebrow="Itinerary"
              title={trip.durationDays === 1 ? "Hour by hour" : "Day by day"}
            />
          </div>
          <Reveal delay={100} className="lg:w-8/12">
            <Accordion
              items={trip.itinerary.map((day) => ({
                key: `day-${day.day}`,
                heading: (
                  <span className="flex items-baseline gap-4">
                    <span className="eyebrow w-20 shrink-0 whitespace-nowrap text-slate">{itineraryLabel(day)}</span>
                    <span className="font-display text-lg font-normal sm:text-xl">{day.title}</span>
                  </span>
                ),
                content: (
                  <div className="max-w-2xl sm:pl-24">
                    {day.facts && <p className="text-sm font-medium text-slate">{day.facts.join(" · ")}</p>}
                    <p className="mt-2 text-[15px] leading-relaxed text-slate">{day.description}</p>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="included-title" className="section-y">
        <div className="container-page">
          <SectionHeading id="included-title" eyebrow="What's included" title="Inclusions and exclusions" />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-14">
            <Reveal delay={80} className="md:w-1/2">
              <h3 className="font-display text-2xl">Included</h3>
              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-slate marker:text-slate">
                {trip.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160} className="md:w-1/2">
              <h3 className="font-display text-2xl">Not included</h3>
              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-slate marker:text-slate">
                {trip.exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          {trip.notes && (
            <Reveal className="mt-8 rounded-[var(--radius-card)] bg-ice/25 p-6">
              <h3 className="eyebrow text-slate">Good to know</h3>
              <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-relaxed text-slate">
                {trip.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      <section aria-labelledby="plan-title" className="section-y bg-navy text-snow">
        <div className="container-page">
          <SectionHeading id="plan-title" eyebrow="Planning" title="Before you go" tone="dark" />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-10">
            {[
              { title: "Best season", text: trip.bestSeason },
              { title: "Fitness level", text: trip.fitnessLevel },
              { title: "How to reach", text: trip.howToReach },
            ].map((block, index) => (
              <Reveal key={block.title} delay={index * 90} className="border-t border-slate pt-5 md:w-1/3">
                <h3 className="font-display text-xl">{block.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ice">{block.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="section-y">
        <div className="container-page">
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="On the trail" />
          <ul className="mt-8 flex flex-col gap-5 sm:flex-row">
            {trip.galleryImages.map((image, index) => (
              <li key={image.src} className="sm:w-1/3">
                <Reveal delay={index * 90}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="trip-faq-title" className="section-y bg-ice/25">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:gap-14">
          <div className="lg:w-5/12">
            <SectionHeading id="trip-faq-title" eyebrow="FAQ" title={`${trip.name} questions`} />
          </div>
          <Reveal delay={100} className="lg:w-7/12">
            <FaqAccordion items={trip.faqs} />
          </Reveal>
        </div>
      </section>

      <section id="enquire" aria-labelledby="enquire-title" className="section-y bg-navy text-snow">
        <div className="container-page flex flex-col gap-10 lg:flex-row lg:gap-14">
          <div className="lg:w-5/12">
            <SectionHeading
              id="enquire-title"
              eyebrow="Enquire"
              title="Check dates and book"
              subtitle={`Tell us when you would like to do the ${trip.name} and we will reply with available dates and a full plan.`}
              tone="dark"
            />
            <EnquiryTrustLine />
          </div>
          <Reveal delay={120} className="lg:w-7/12">
            <EnquiryForm tripOptions={enquiryTripOptions} defaultTrip={trip.name} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
