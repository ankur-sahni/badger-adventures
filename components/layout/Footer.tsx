import Link from "next/link";
import { cacheLife } from "next/cache";
import { navLinks, site } from "@/config/site";
import { Wordmark } from "./Wordmark";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-slate/50 bg-navy text-snow">
      <div className="container-page flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <Wordmark />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="eyebrow inline-flex min-h-11 items-center text-ice transition-colors duration-300 hover:text-snow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page border-t border-slate/40 py-4 text-sm text-ice">
        <p>
          &copy; <CopyrightYear /> {site.name}. {site.address.display}.
        </p>
      </div>
    </footer>
  );
}
