import { homeFaqs } from "@/data/faqs";
import { faqPageSchema, pageMetadata, travelAgencySchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TripsSection } from "@/components/home/TripsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";

export const metadata = pageMetadata({
  title: "Trekking in Manali & Himalayan Expeditions | Badger Adventures",
  description:
    "Small-group trekking in Manali and Himalayan expeditions from Manali, from first treks like Bhrigu Lake to Friendship Peak and Yunam. Clear plans, local guides.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={travelAgencySchema()} />
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <Hero />
      <About />
      <WhyChooseUs />
      <TripsSection
        category="trek"
        eyebrow="Treks"
        title="Start your journey"
        subtitle="From a first weekend trek to high passes, listed easiest first."
      />
      <TripsSection
        category="expedition"
        eyebrow="Expeditions"
        title="The step up to the summit"
        subtitle="Guided climbs for trekkers ready for their first big peak."
        className="bg-ice/25"
      />
      <FaqSection />
      <Reviews />
      <Contact />
    </>
  );
}
