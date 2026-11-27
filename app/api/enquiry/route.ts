import { enquiryTripOptions } from "@/lib/trips";
import { enquirySummary, validateEnquiry } from "@/lib/enquiry";

const DEFAULT_FROM = "Badger Adventures <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { data, errors } = validateEnquiry(body, enquiryTripOptions);

  // Honeypot filled in: likely a bot. Report success so it does not retry.
  if (data.website) return Response.json({ ok: true });

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json({ ok: false, fallback: "whatsapp" }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL || DEFAULT_FROM,
        to: [to],
        reply_to: data.email ? [data.email] : undefined,
        subject: `New enquiry: ${data.trip || "General"} from ${data.name}`,
        text: enquirySummary(data),
      }),
    });
    if (!response.ok) {
      console.error("Resend rejected enquiry email", response.status);
      return Response.json({ ok: false, fallback: "whatsapp" }, { status: 502 });
    }
  } catch (error) {
    console.error("Resend request failed", error);
    return Response.json({ ok: false, fallback: "whatsapp" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
