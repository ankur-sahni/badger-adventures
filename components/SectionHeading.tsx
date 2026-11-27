import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  id?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, tone = "light", id }: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-ice" : "text-slate";
  return (
    <Reveal className="max-w-2xl">
      <p className={`eyebrow ${muted}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl leading-[1.1] font-light text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className={`mt-3 max-w-xl leading-relaxed ${muted}`}>{subtitle}</p>}
    </Reveal>
  );
}
