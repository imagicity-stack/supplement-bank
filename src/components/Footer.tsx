import Link from "next/link";

import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons";
import { FOOTER_LINKS } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";
import { buildGeneralEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";

interface FooterProps {
  settings: SiteSettings | null;
  brandName: string;
}

const CATEGORIES = [
  "Whey Protein",
  "Mass Gainer",
  "Creatine",
  "Pre Workout",
  "Gym Wear",
];

export function Footer({ settings, brandName }: FooterProps) {
  const year = new Date().getFullYear();
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
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="grain absolute inset-0" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-10 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Ready to fuel your fitness?
            </h2>
            <p className="mt-1 text-sm text-white/55">
              Chat with us on WhatsApp — genuine products, delivered across India.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shrink-0"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      <div className="container-page relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo settings={settings} brandName={brandName} variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Premium gym supplements, fitness accessories, and gym wear from
            trusted brands, delivered across India.
          </p>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-accent hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <FooterCol title="Explore" links={FOOTER_LINKS} />

        <div>
          <h3 className="label label-light">Categories</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <Link
                  href="/products"
                  className="text-white/55 transition-colors hover:text-brand-accent"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label label-light">Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm text-white/55">
            {settings?.phoneNumber && (
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href={`tel:${settings.phoneNumber}`} className="hover:text-white">
                  {settings.phoneNumber}
                </a>
              </li>
            )}
            {settings?.email && (
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href={`mailto:${settings.email}`} className="break-all hover:text-white">
                  {settings.email}
                </a>
              </li>
            )}
            {settings?.address && (
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>{settings.address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {brandName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="label label-light">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/55 transition-colors hover:text-brand-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
