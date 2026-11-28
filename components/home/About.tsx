import Image from "next/image";
import { images } from "@/config/images";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section aria-labelledby="about-title" className="section-y">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
        <Reveal variant="image" className="lg:w-1/2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] lg:aspect-[4/3] lg:max-h-[26rem]">
            <div className="parallax-view absolute inset-x-0 -top-[8%] h-[116%]">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
        <div className="lg:w-1/2">
          <SectionHeading id="about-title" eyebrow="About us" title="Our home is Manali" />
          <div className="mt-5 flex max-w-lg flex-col gap-4 leading-relaxed text-slate">
            <Reveal delay={100}>
              <p>
                We run treks and expeditions from Manali with our own trek leaders, cooks and support
                staff.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Every plan is shared in full before you book: the route, the camps, and what is and
                isn&rsquo;t included.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
