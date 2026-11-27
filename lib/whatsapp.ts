import { site } from "@/config/site";

export function whatsappUrl(message: string = site.defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function tripWhatsAppMessage(tripName: string) {
  return `Hi Badger Adventures, I'm interested in ${tripName}.`;
}
