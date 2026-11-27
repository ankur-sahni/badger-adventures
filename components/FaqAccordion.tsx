import type { Faq } from "@/types";
import { Accordion } from "./Accordion";

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion
      items={items.map((item) => ({
        key: item.q,
        heading: <span className="font-display text-lg font-normal sm:text-xl">{item.q}</span>,
        content: <p className="max-w-2xl text-[15px] leading-relaxed text-slate">{item.a}</p>,
      }))}
    />
  );
}
