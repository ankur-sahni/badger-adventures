"use client";

import Image from "next/image";
import { useRef, type RefObject } from "react";
import type { ImageAsset } from "@/types";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "./icons";

type LightboxProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  images: ImageAsset[];
  index: number;
  onIndexChange: (index: number) => void;
  label: string;
};

const controlClass =
  "inline-flex size-11 items-center justify-center rounded-full bg-navy/60 text-snow transition-colors duration-300 hover:bg-snow hover:text-navy";

export function Lightbox({ dialogRef, images, index, onIndexChange, label }: LightboxProps) {
  const touchStart = useRef<number | null>(null);
  const step = (delta: number) => onIndexChange((index + delta + images.length) % images.length);
  const current = images[index];
  const multiple = images.length > 1;

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onKeyDown={(event) => {
        if (multiple && event.key === "ArrowRight") step(1);
        if (multiple && event.key === "ArrowLeft") step(-1);
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
        if (!multiple || touchStart.current === null) return;
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
            aria-label={`Close ${label.toLowerCase()}`}
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
        {multiple && (
          <>
            <button
              type="button"
              className={`${controlClass} absolute top-1/2 left-3 -translate-y-1/2 sm:left-6`}
              aria-label="Previous image"
              onClick={() => step(-1)}
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              className={`${controlClass} absolute top-1/2 right-3 -translate-y-1/2 sm:right-6`}
              aria-label="Next image"
              onClick={() => step(1)}
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </>
        )}
      </div>
    </dialog>
  );
}
