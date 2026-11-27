"use client";

import { useId, useState, type FormEvent } from "react";
import { buttonClass } from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappUrl } from "@/lib/whatsapp";
import { enquiryWhatsAppMessage, validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";

type Status =
  | { kind: "idle" | "submitting" }
  | { kind: "sent"; data: Enquiry }
  | { kind: "whatsapp"; data: Enquiry };

type EnquiryFormProps = {
  tripOptions: string[];
  defaultTrip?: string;
};

const fieldClass =
  "mt-1.5 block min-h-11 w-full rounded-xl border border-slate bg-navy/40 px-4 py-2.5 text-[15px] text-snow placeholder:text-ice/60 transition-colors duration-300 focus:border-ice focus:outline-none aria-[invalid=true]:border-2 aria-[invalid=true]:border-snow";
const labelClass = "eyebrow text-ice";

export function EnquiryForm({ tripOptions, defaultTrip = "" }: EnquiryFormProps) {
  const id = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<EnquiryErrors>({});

  const fieldProps = (name: keyof Enquiry) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const errorFor = (name: keyof Enquiry) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-1.5 text-sm text-snow">
        {errors[name]}
      </p>
    ) : null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const { data, errors: clientErrors } = validateEnquiry(
      Object.fromEntries(new FormData(form)),
      tripOptions,
    );
    setErrors(clientErrors);
    const firstInvalid = Object.keys(clientErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok: boolean; errors?: EnquiryErrors };
      if (result.ok) {
        setStatus({ kind: "sent", data });
        return;
      }
      if (result.errors) {
        setErrors(result.errors);
        setStatus({ kind: "idle" });
        return;
      }
    } catch {
      // Network failure: fall through to the WhatsApp fallback below.
    }
    window.open(whatsappUrl(enquiryWhatsAppMessage(data)), "_blank");
    setStatus({ kind: "whatsapp", data });
  }

  if (status.kind === "sent" || status.kind === "whatsapp") {
    const sent = status.kind === "sent";
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-slate p-6 sm:p-8">
        <p className="font-display text-3xl font-light">
          {sent ? `Thank you, ${status.data.name.split(" ")[0]}.` : "Send your enquiry on WhatsApp"}
        </p>
        <p className="mt-3 max-w-md leading-relaxed text-ice">
          {sent
            ? "We have received your enquiry and will be in touch shortly with dates and a full plan. For a faster reply, message us on WhatsApp."
            : "Our email form is not available right now, so we have prepared your details as a WhatsApp message. Tap below if it did not open."}
        </p>
        <a
          href={whatsappUrl(enquiryWhatsAppMessage(status.data))}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} mt-6`}
        >
          <WhatsAppIcon className="size-5" />
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required className={fieldClass} />
          {errorFor("name")}
        </div>
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone
          </label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" required className={fieldClass} />
          {errorFor("phone")}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" className={fieldClass} />
          {errorFor("email")}
        </div>
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-trip`} className={labelClass}>
            Trip of interest
          </label>
          <select
            {...fieldProps("trip")}
            defaultValue={defaultTrip}
            className={`${fieldClass} [&_option]:bg-snow [&_option]:text-navy`}
          >
            <option value="">Choose a trip</option>
            {tripOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errorFor("trip")}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-dates`} className={labelClass}>
            Preferred dates
          </label>
          <input {...fieldProps("dates")} type="text" placeholder="e.g. mid-June" className={fieldClass} />
          {errorFor("dates")}
        </div>
        <div className="sm:w-1/2">
          <label htmlFor={`${id}-groupSize`} className={labelClass}>
            Group size
          </label>
          <input
            {...fieldProps("groupSize")}
            type="number"
            inputMode="numeric"
            min={1}
            max={100}
            className={fieldClass}
          />
          {errorFor("groupSize")}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea {...fieldProps("message")} rows={3} className={`${fieldClass} resize-y`} />
      </div>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="pt-2">
        <button type="submit" className={buttonClass} disabled={status.kind === "submitting"}>
          {status.kind === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
