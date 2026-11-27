"use client";

import { useRef, useState } from "react";
import type { ImageAsset } from "@/types";
import { Lightbox } from "./Lightbox";

export function CertificatesButton({ certificates }: { certificates: ImageAsset[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          dialogRef.current?.showModal();
        }}
        className="inline-flex min-h-11 items-center text-sm tracking-[0.08em] text-navy underline decoration-slate/40 underline-offset-8 transition-colors duration-300 hover:decoration-navy"
      >
        View certificates ({certificates.length})
      </button>
      <Lightbox
        dialogRef={dialogRef}
        images={certificates}
        index={index}
        onIndexChange={setIndex}
        label="Certificate viewer"
      />
    </>
  );
}
