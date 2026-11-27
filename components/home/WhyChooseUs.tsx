import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  { title: "Small groups", text: "Fewer people, more time with your guide." },
  { title: "Transparent planning", text: "Clear day-by-day plans before you pay." },
  { title: "Local expertise", text: "Manali leaders on routes they know." },
  { title: "Custom packages", text: "Private trips on your dates, any group." },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-navy text-snow">
      <div className="container-page">
        <SectionHeading id="why-title" eyebrow="Why Badger" title="What you can count on" tone="dark" />
        <ol className="mt-8 flex flex-col gap-y-8 sm:flex-row sm:flex-wrap lg:mt-10 lg:flex-nowrap">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="sm:w-1/2 sm:pr-8 lg:w-1/4">
              <Reveal delay={index * 90} className="border-t border-slate pt-5">
                <span aria-hidden className="font-display text-3xl font-light text-ice">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-normal">{reason.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ice">{reason.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
