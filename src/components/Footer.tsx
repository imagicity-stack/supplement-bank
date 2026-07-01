import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YouTubeIcon,
} from "@/components/icons";
import { FOOTER_LINKS } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

interface FooterProps {
  settings: SiteSettings | null;
  brandName: string;
}

export function Footer({ settings, brandName }: FooterProps) {
  const year = new Date().getFullYear();

  const socials = [
    { href: settings?.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: settings?.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: settings?.youtube, Icon: YouTubeIcon, label: "YouTube" },
  ].filter((s) => !!s.href);

  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-accent text-ink">
              SB
            </span>
            {brandName}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Premium gym supplements, fitness accessories, and gym wear from
            trusted brands, delivered across India.
          </p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-3">
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

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {settings?.phoneNumber && (
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href={`tel:${settings.phoneNumber}`} className="hover:text-white">
                  {settings.phoneNumber}
                </a>
              </li>
            )}
            {settings?.email && (
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href={`mailto:${settings.email}`} className="break-all hover:text-white">
                  {settings.email}
                </a>
              </li>
            )}
            {settings?.address && (
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>{settings.address}</span>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Categories
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {["Whey Protein", "Mass Gainer", "Creatine", "Pre Workout", "Gym Wear"].map(
              (cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {cat}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {brandName}. All rights reserved.
          </p>
          <div className="flex gap-4">
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
