"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroVideo, images } from "@/config/images";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

export function HeroMedia() {
  const layerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || reducedMotion) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, window.innerHeight) * 0.2;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      layer.style.transform = "";
    };
  }, [reducedMotion]);

  return (
    // Navy-to-slate gradient shows if both the video and the poster image fail.
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-navy via-slate to-navy">
      <div ref={layerRef} className="absolute -inset-x-0 -top-[5%] h-[115%] will-change-transform">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        {!reducedMotion && !videoFailed && (
          <video
            className="absolute inset-0 size-full object-cover"
            src={heroVideo.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            onError={() => setVideoFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
