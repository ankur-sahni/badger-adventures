"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { tripWhatsAppMessage, whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp({ tripNamesByPath }: { tripNamesByPath: Record<string, string> }) {
  const tripName = tripNamesByPath[usePathname()];
  return (
    <a
      href={whatsappUrl(tripName ? tripWhatsAppMessage(tripName) : undefined)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Badger Adventures on WhatsApp"
      className="fixed right-5 bottom-5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-snow shadow-[0_14px_30px_-10px_rgb(11_31_51/0.55)] transition-transform duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
