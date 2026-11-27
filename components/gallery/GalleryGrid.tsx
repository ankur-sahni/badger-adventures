"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { ImageAsset } from "@/types";
import { Reveal } from "@/components/Reveal";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/icons";

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

const controlClass =
  "inline-flex size-11 items-center justify-center rounded-full bg-navy/60 text-snow transition-colors duration-300 hover:bg-snow hover:text-navy";

export function GalleryGrid({ images }: { images: ImageAsset[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const step = useCallback(
    (delta: number) => setIndex((current) => (current + delta + images.length) % images.length),
    [images.length],
  );

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const current = images[index];

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

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
          if (event.key !== "Tab") return;
          // Native modal dialogs let Tab escape to the browser UI; keep it cycling through the controls.
          const controls = [...event.currentTarget.querySelectorAll<HTMLElement>("button")];
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
          touchStart.current = null;
        }}
        className="m-0 size-full max-h-none max-w-none bg-navy p-0 text-snow opacity-0 transition-[opacity,display,overlay] transition-discrete duration-200 backdrop:bg-transparent open:opacity-100 starting:open:opacity-0"
      >
        <div className="relative flex size-full flex-col">
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="eyebrow text-ice" aria-live="polite">
              {index + 1} / {images.length}
            </p>
            <button
              type="button"
              className={controlClass}
              aria-label="Close photo viewer"
              onClick={() => dialogRef.current?.close()}
            >
              <CloseIcon className="size-6" />
            </button>
          </div>
          <div className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 px-5 sm:px-20">
            {current && (
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="animate-[fade-in_200ms_ease-out] object-contain"
              />
            )}
          </div>
          <p className="mx-auto max-w-2xl px-5 py-4 text-center text-sm text-ice">{current?.alt}</p>
          <button
            type="button"
            className={`${controlClass} absolute top-1/2 left-3 -translate-y-1/2 sm:left-6`}
            aria-label="Previous photo"
            onClick={() => step(-1)}
          >
            <ArrowLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            className={`${controlClass} absolute top-1/2 right-3 -translate-y-1/2 sm:right-6`}
            aria-label="Next photo"
            onClick={() => step(1)}
          >
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </dialog>
    </>
  );
}
