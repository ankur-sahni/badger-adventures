"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { navLinks } from "@/config/site";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Wordmark } from "./Wordmark";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const solid = pathname !== "/" || scrolled || open;

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = overflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  const closeAndRestoreFocus = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  // Keep Tab cycling between the menu links and the close button while the overlay is open.
  const trapFocus = (event: KeyboardEvent) => {
    if (!open) return;
    if (event.key === "Escape") {
      closeAndRestoreFocus();
      return;
    }
    if (event.key !== "Tab") return;
    const focusables = [
      toggleRef.current,
      ...(menuRef.current?.querySelectorAll<HTMLElement>("a") ?? []),
    ].filter((el): el is HTMLElement => el !== null);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div onKeyDown={trapFocus}>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={`fixed inset-x-0 top-0 z-50 text-snow transition-[background-color,box-shadow] duration-500 ease-[var(--ease-soft)] ${
          solid
            ? "bg-navy shadow-[0_8px_30px_-20px_rgb(0_0_0/0.6)]"
            : "bg-[linear-gradient(180deg,rgb(11_31_51/0.55),rgb(11_31_51/0))]"
        }`}
      >
        <nav
          aria-label="Main"
          className={`container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-out)] ${
            solid ? "h-16" : "h-20"
          }`}
        >
          <Wordmark onClick={close} />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`eyebrow relative inline-flex min-h-11 items-center transition-colors duration-300 hover:text-ice after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:bg-ice after:transition-transform after:duration-300 ${
                      active ? "text-ice after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!open}
        // Visibility only transitions on close; on open it must flip at once so the first link can take focus.
        className={`fixed inset-0 z-40 flex flex-col bg-navy pt-20 text-snow duration-300 ease-[var(--ease-soft)] lg:hidden ${
          open ? "visible opacity-100 transition-opacity" : "invisible opacity-0 transition-[opacity,visibility]"
        }`}
      >
        <nav aria-label="Mobile" className="container-page">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`border-b border-slate/60 transition-[opacity,transform] duration-500 ease-[var(--ease-soft)] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="flex min-h-14 items-center font-display text-3xl font-light aria-[current=page]:text-ice"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
