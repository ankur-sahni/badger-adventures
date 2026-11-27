import { site } from "@/config/site";
import { enquiryTripOptions } from "@/lib/trips";
import { InstagramIcon, PhoneIcon } from "@/components/icons";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EnquiryTrustLine } from "@/components/EnquiryTrustLine";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-navy text-snow">
      <div className="container-page flex flex-col gap-10 lg:flex-row lg:gap-14">
        <div className="lg:w-5/12">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Plan your trip with us"
            subtitle="Call, message or send an enquiry. We reply with dates, price and a full plan."
            tone="dark"
          />
          <EnquiryTrustLine />
          <Reveal delay={120}>
            <ul className="mt-6 flex flex-col gap-1">
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="inline-flex min-h-11 items-center gap-4 transition-colors duration-300 hover:text-ice"
                  >
                    <PhoneIcon className="size-5 text-ice" />
                    <span>
                      <span className="sr-only">{phone.label}: </span>
                      {phone.display}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-4 transition-colors duration-300 hover:text-ice"
                >
                  <InstagramIcon className="size-5 text-ice" />
                  <span>
                    <span className="sr-only">Instagram: </span>
                    {site.instagram.handle}
                  </span>
                </a>
              </li>
              <li className="eyebrow pt-3 text-ice">
                <address className="not-italic">{site.address.display}</address>
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal delay={160} className="lg:w-7/12">
          <EnquiryForm tripOptions={enquiryTripOptions} />
        </Reveal>
      </div>
    </section>
  );
}
