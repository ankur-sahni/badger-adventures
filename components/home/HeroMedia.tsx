"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroVideo, images } from "@/config/images";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/useMediaQuery";

export function HeroMedia() {
  const layerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Start the video only after the page has loaded so it never competes with the poster image and fonts.
  useEffect(() => {
    const markLoaded = () => setPageLoaded(true);
    if (document.readyState === "complete") {
      const timer = setTimeout(markLoaded, 0);
      return () => clearTimeout(timer);
    }
    window.addEventListener("load", markLoaded, { once: true });
    return () => window.removeEventListener("load", markLoaded);
  }, []);

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
        <div className="settle absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          {pageLoaded && !reducedMotion && !videoFailed && (
            <video
              key={isDesktop ? "desktop" : "mobile"}
              className="absolute inset-0 size-full animate-[fade-in_600ms_ease-out] object-cover"
              src={isDesktop ? heroVideo.desktop : heroVideo.mobile}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              onError={() => setVideoFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
