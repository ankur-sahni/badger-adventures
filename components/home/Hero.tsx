import { ButtonLink } from "@/components/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import { HeroMedia } from "./HeroMedia";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden text-snow">
      <HeroMedia />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(11_31_51/0.6)_0%,rgb(11_31_51/0.3)_30%,rgb(11_31_51/0.6)_55%,rgb(11_31_51/0.9)_100%)]"
      />
      <div className="container-page pt-28 pb-14 lg:pb-20">
        <p className="eyebrow text-snow/90">Treks and expeditions from Manali</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.08] font-light text-balance sm:text-5xl">
          Himalayan treks, planned properly
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-snow/85 sm:text-lg">
          Small groups, clear plans and local guides, from your first trek to your first summit.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href="#contact">Plan your trek</ButtonLink>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm tracking-[0.08em] text-snow underline decoration-ice/60 underline-offset-8 transition-colors duration-300 hover:decoration-snow"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
