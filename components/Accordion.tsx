"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDownIcon } from "./icons";

export type AccordionItem = {
  key: string;
  heading: ReactNode;
  content: ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-ice">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-h${index}`;
        const panelId = `${baseId}-p${index}`;
        return (
          <div key={item.key} className="border-b border-ice">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-12 w-full items-center justify-between gap-6 py-3 text-left"
              >
                {item.heading}
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
                <div className="pb-4">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
