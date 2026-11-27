import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    // Fills the viewport above the footer so no page background shows between them.
    <section className="flex min-h-[calc(100svh-9rem)] items-center bg-navy pt-28 pb-16 text-snow">
      <div className="container-page">
        <p className="eyebrow text-ice">404</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] font-light sm:text-5xl">
          This trail doesn&rsquo;t go anywhere
        </h1>
        <p className="mt-3 max-w-md leading-relaxed text-ice">
          The page you were looking for has moved or never existed. Pick a route below instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href="/treks">See all treks</ButtonLink>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-sm tracking-[0.08em] underline decoration-ice/60 underline-offset-8 transition-colors duration-300 hover:decoration-snow"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
