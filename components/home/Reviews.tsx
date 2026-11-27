import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="section-y bg-ice/25">
      <div className="container-page">
        <SectionHeading id="reviews-title" eyebrow="Reviews" title="From the trail" />
        <ul className="mt-16 flex flex-col gap-6 lg:flex-row">
          {reviews.map((review, index) => (
            <li key={review.name} className="lg:w-1/3">
              <Reveal delay={index * 90} className="h-full">
                <figure className="flex h-full flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-snow p-8 shadow-[var(--shadow-card)] sm:p-10">
                  <blockquote className="line-clamp-2 font-display text-2xl leading-snug font-light lg:text-xl xl:text-2xl">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="font-medium">{review.name}</p>
                    <p className="eyebrow mt-2 text-slate">{review.trip}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
