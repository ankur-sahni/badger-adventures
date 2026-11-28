"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/useInView";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fade" | "image";
};

export function Reveal({ children, delay = 0, className = "", variant = "fade" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${variant === "image" ? "reveal-image" : "reveal"} ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
