// Single source for every contact detail on the site. Edit here only.
// Values marked PLACEHOLDER must be replaced before launch.

export const site = {
  name: "Badger Adventures",
  // PLACEHOLDER: replace with the live domain (used for canonical URLs, sitemap and OpenGraph).
  url: "https://www.badgeradventures.example",
  description:
    "Small-group treks and expeditions from Manali, Himachal Pradesh, planned in the open and led by local guides.",
  phones: [
    // From the itinerary PDFs.
    { label: "Bookings", display: "+91 98164 13089", tel: "+919816413089" },
  ],
  // wa.me format: country code + number, digits only. Assumed to be the same as the bookings line.
  whatsappNumber: "919816413089",
  instagram: {
    handle: "@badger_adventures_",
    url: "https://www.instagram.com/badger_adventures_/",
  },
  // PLACEHOLDER: replace with the real public email address.
  email: "hello@badgeradventures.example",
  address: {
    locality: "Manali",
    region: "Himachal Pradesh",
    country: "IN",
    display: "Manali, Himachal Pradesh",
  },
  defaultWhatsAppMessage: "Hi Badger Adventures, I'd like to plan a trek.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treks", href: "/treks" },
  { label: "Expeditions", href: "/expeditions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
] as const;
