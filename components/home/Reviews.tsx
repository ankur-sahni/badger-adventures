import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="section-y bg-ice/25">
      <div className="container-page">
        <SectionHeading id="reviews-title" eyebrow="Reviews" title="From the trail" />
        <ul className="mt-8 flex flex-col gap-5 lg:flex-row">
          {reviews.map((review, index) => (
            <li key={review.name} className="lg:w-1/3">
              <Reveal delay={index * 90} className="h-full">
                <figure className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius-card)] bg-snow p-6 shadow-[var(--shadow-card)]">
                  <blockquote className="line-clamp-2 font-display text-xl leading-snug font-light">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="eyebrow mt-1 text-slate">{review.trip}</p>
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
