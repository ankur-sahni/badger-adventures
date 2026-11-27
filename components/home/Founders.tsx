import Image from "next/image";
import { images } from "@/config/images";
import { founders, omPrakash } from "@/data/founders";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificatesButton } from "@/components/CertificatesButton";

export function Founders() {
  return (
    <section aria-labelledby="founders-title" className="section-y bg-ice/25">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
        <Reveal className="lg:w-5/12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] lg:aspect-[4/5] lg:max-h-[30rem]">
            <Image
              src={images.founders.src}
              alt={images.founders.alt}
              fill
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:w-7/12">
          <SectionHeading
            id="founders-title"
            eyebrow="The founders"
            title="Planned by us, led by certified guides"
            subtitle="Badger Adventures is run by its two founders. They plan every route, departure and team, and our certified guides lead the groups on the trail."
          />
          <ul className="mt-6 flex flex-col gap-x-8 gap-y-4 sm:flex-row">
            {founders.map((founder, index) => (
              <li key={founder.name} className="sm:w-1/2">
                <Reveal delay={index * 80} className="border-t border-slate/40 pt-3">
                  <h3 className="font-display text-2xl leading-snug">{founder.name}</h3>
                  <p className="eyebrow mt-1 text-slate">{founder.role}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{founder.summary}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <h3 className="eyebrow mt-6 text-slate">{omPrakash.name}&apos;s mountaineering training</h3>
          <ul className="mt-3 flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap">
            {omPrakash.credentials.map((credential, index) => (
              <li key={credential.course} className="sm:w-[calc(50%-1rem)]">
                <Reveal delay={index * 80} className="border-t border-ice pt-2.5">
                  <p className="font-display text-lg leading-snug">{credential.course}</p>
                  <p className="mt-0.5 text-sm text-slate">
                    {credential.institute} · {credential.year}. {credential.detail}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CertificatesButton certificates={omPrakash.certificates} />
          </div>
        </div>
      </div>
    </section>
  );
}
