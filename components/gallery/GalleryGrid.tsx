"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ImageAsset } from "@/types";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";

// Tile spans for a 4-column grid: 12 tiles cover 24 cells (6 full rows) so the grid ends without gaps.
const spans = [
  "col-span-2 row-span-2",
  "",
  "row-span-2",
  "",
  "col-span-2",
  "",
  "row-span-2",
  "row-span-2",
  "col-span-2 row-span-2",
  "",
  "col-span-2",
  "col-span-2",
];

const sizesFor = (span: string) =>
  span.includes("col-span-2") ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw";

export function GalleryGrid({ images }: { images: ImageAsset[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <ul className="grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-4 lg:auto-rows-[12rem]">
        {images.map((image, i) => {
          const span = spans[i % spans.length];
          return (
            <li key={image.src} className={span}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <button
                  type="button"
                  onClick={() => open(i)}
                  aria-label={`Open photo: ${image.alt}`}
                  className="group relative block size-full overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    preload={i === 0}
                    sizes={sizesFor(span)}
                    className="object-cover transition-transform duration-[400ms] ease-[var(--ease-soft)] group-hover:scale-105"
                  />
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <Lightbox dialogRef={dialogRef} images={images} index={index} onIndexChange={setIndex} label="Photo viewer" />
    </>
  );
}
