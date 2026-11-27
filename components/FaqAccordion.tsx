"use client";

import { useId, useState } from "react";
import type { Faq } from "@/types";
import { ChevronDownIcon } from "./icons";

export function FaqAccordion({ items, tone = "light" }: { items: Faq[]; tone?: "light" | "dark" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const divider = tone === "dark" ? "border-slate" : "border-ice";
  const answerColor = tone === "dark" ? "text-ice" : "text-slate";

  return (
    <div className={`border-t ${divider}`}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={item.q} className={`border-b ${divider}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-display text-xl font-normal sm:text-2xl"
              >
                {item.q}
                <ChevronDownIcon
                  className={`size-5 shrink-0 transition-transform duration-300 ease-[var(--ease-soft)] ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-soft)] ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`max-w-2xl pb-6 leading-relaxed ${answerColor}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
