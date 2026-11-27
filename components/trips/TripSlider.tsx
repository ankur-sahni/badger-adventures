"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

type TripSliderProps = {
  label: string;
  header: ReactNode;
  children: ReactNode[];
};

const arrowClass =
  "inline-flex size-11 items-center justify-center rounded-full border border-slate/30 text-navy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-snow disabled:pointer-events-none disabled:opacity-35";

export function TripSlider({ label, header, children }: TripSliderProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setEdges({ atStart: track.scrollLeft <= 4, atEnd: track.scrollLeft >= max - 4 });
    };
    const frame = requestAnimationFrame(update);
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-6">
        {header}
        <div className="flex shrink-0 gap-2">
        <button
          type="button"
          className={arrowClass}
          aria-label={`Previous ${label}`}
          disabled={edges.atStart}
          onClick={() => scrollByCard(-1)}
        >
          <ArrowLeftIcon className="size-5" />
        </button>
        <button
          type="button"
          className={arrowClass}
          aria-label={`Next ${label}`}
          disabled={edges.atEnd}
          onClick={() => scrollByCard(1)}
        >
          <ArrowRightIcon className="size-5" />
        </button>
        </div>
      </div>
      <ul
        ref={trackRef}
        aria-label={label}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-5[scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, index) => (
          <li
            key={index}
            className="w-[86%] shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
