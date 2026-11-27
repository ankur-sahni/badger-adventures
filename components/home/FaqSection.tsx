import { homeFaqs } from "@/data/faqs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="section-y">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:gap-14">
        <div className="lg:w-5/12">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions before you go" />
        </div>
        <Reveal delay={120} className="lg:w-7/12">
          <FaqAccordion items={homeFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
