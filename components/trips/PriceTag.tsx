import { displayedSaving, formatPrice } from "@/lib/trips";

type PriceTagProps = {
  price: number;
  tone?: "light" | "dark";
  className?: string;
};

export function PriceTag({ price, tone = "light", className = "" }: PriceTagProps) {
  const saving = displayedSaving(price);
  const muted = tone === "dark" ? "text-snow/75" : "text-slate";
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 ${className}`}>
      <s className={`${muted} decoration-1`}>
        <span className="sr-only">Was </span>
        {formatPrice(price + saving)}
      </s>
      <span>
        <span className="sr-only">now </span>
        <span className="font-semibold">{formatPrice(price)}</span>
        <span className={muted}> / person</span>
      </span>
      <span className="self-center rounded-full bg-ice px-2.5 py-0.5 text-[0.8em] font-semibold whitespace-nowrap text-navy">
        {formatPrice(saving)} off
      </span>
    </span>
  );
}
