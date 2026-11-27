// Shared by the enquiry form (client) and /api/enquiry (server). Keep free of data imports.

export const CUSTOM_TRIP = "Custom trip on request";

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  trip: string;
  dates: string;
  groupSize: string;
  message: string;
  website: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

const limits: Record<keyof Enquiry, number> = {
  name: 80,
  phone: 20,
  email: 120,
  trip: 80,
  dates: 100,
  groupSize: 3,
  message: 1000,
  website: 200,
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

export function validateEnquiry(input: unknown, allowedTrips: readonly string[]) {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const data = Object.fromEntries(
    (Object.keys(limits) as (keyof Enquiry)[]).map((key) => [
      key,
      key === "message"
        ? typeof raw.message === "string"
          ? raw.message.trim().slice(0, limits.message)
          : ""
        : clean(raw[key], limits[key]),
    ]),
  ) as Enquiry;

  const errors: EnquiryErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";

  const digits = data.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Please enter your phone number.";
  else if (!/^[+\d\s()-]+$/.test(data.phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";

  if (data.trip && !allowedTrips.includes(data.trip)) errors.trip = "Please choose a trip from the list.";

  if (data.groupSize) {
    const size = Number(data.groupSize);
    if (!Number.isInteger(size) || size < 1 || size > 100) errors.groupSize = "Please enter a group size between 1 and 100.";
  }

  return { data, errors };
}

export function enquirySummary(data: Enquiry) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    `Trip: ${data.trip || "Not chosen yet"}`,
    data.dates && `Preferred dates: ${data.dates}`,
    data.groupSize && `Group size: ${data.groupSize}`,
    data.message && `Message: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function enquiryWhatsAppMessage(data: Enquiry) {
  return `Hi Badger Adventures, I'd like to enquire about ${data.trip || "a trip"}.\n\n${enquirySummary(data)}`;
}
