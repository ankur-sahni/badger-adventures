import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FaqSection } from "@/components/home/FaqSection";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <FaqSection />
      <Reviews />
      <Contact />
    </>
  );
}
