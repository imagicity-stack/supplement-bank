import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons";
import { BRAND_NAME } from "@/lib/constants";
import { buildGeneralEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { getSiteSettings } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Supplement Bank. Chat on WhatsApp, call, or email us for product advice, availability, and delivery across India.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const brandName = settings?.brandName || BRAND_NAME;
  const whatsappHref = buildWhatsAppLink(
    settings?.whatsappNumber,
    buildGeneralEnquiryMessage(),
  );

  const socials = [
    { href: settings?.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: settings?.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: settings?.youtube, Icon: YouTubeIcon, label: "YouTube" },
  ].filter((s) => !!s.href);

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions about products, availability, or delivery? We're just a message away."
      />

      <section className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">
                    WhatsApp
                  </h2>
                  <p className="mt-1 text-sm text-ink/60">
                    Fastest way to reach us. Get product advice and place your
                    enquiry directly.
                  </p>
                  <WhatsAppButton
                    href={whatsappHref}
                    label="Start Chat"
                    size="sm"
                    className="mt-3"
                  />
                </div>
              </div>
            </div>

            {settings?.phoneNumber && (
              <ContactRow
                Icon={PhoneIcon}
                title="Call Us"
                value={settings.phoneNumber}
                href={`tel:${settings.phoneNumber}`}
              />
            )}
            {settings?.email && (
              <ContactRow
                Icon={MailIcon}
                title="Email"
                value={settings.email}
                href={`mailto:${settings.email}`}
              />
            )}
            {settings?.address && (
              <ContactRow Icon={MapPinIcon} title="Address" value={settings.address} />
            )}

            {socials.length > 0 && (
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card">
                <h2 className="font-display text-lg font-bold text-ink">
                  Follow Us
                </h2>
                <div className="mt-4 flex gap-3">
                  {socials.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-brand-accent hover:text-ink"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Intro / hours panel */}
          <div className="rounded-2xl bg-ink p-8 text-white">
            <h2 className="text-2xl text-white">We&apos;d love to hear from you</h2>
            <p className="mt-4 text-white/70">
              At {brandName}, every enquiry is handled by a real person. Tell us
              what you&apos;re training for and we&apos;ll help you find the right
              supplements, apparel, and accessories — with genuine products and
              fast delivery across India.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                100% genuine products, guaranteed
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Expert guidance on stacks & dosages
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Pan-India delivery to your doorstep
              </li>
            </ul>
            <div className="mt-8">
              <WhatsAppButton href={whatsappHref} label="Chat on WhatsApp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  title,
  value,
  href,
}: {
  Icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink/5 text-ink">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
        <p className="mt-1 text-sm text-ink/70">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card transition-colors hover:border-ink/20">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
