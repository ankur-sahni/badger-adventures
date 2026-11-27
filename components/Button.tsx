import Link from "next/link";
import type { ComponentProps } from "react";

export const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-6 text-[13px] font-medium tracking-[0.08em] text-navy uppercase shadow-[0_10px_24px_-12px_rgb(201_162_75/0.7)] transition-all duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-[0_16px_30px_-12px_rgb(201_162_75/0.8)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

export function ButtonLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  return <Link className={`${buttonClass} ${className}`} {...props} />;
}
