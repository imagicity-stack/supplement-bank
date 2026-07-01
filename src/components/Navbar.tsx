"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { MAIN_NAV } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  settings: SiteSettings | null;
  brandName: string;
  whatsappHref: string;
}

const TRUST_STRIP = [
  "100% Genuine Products",
  "Trusted Global Brands",
  "Pan-India Delivery",
  "Expert Guidance",
];

export function Navbar({ settings, brandName, whatsappHref }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const announcement = settings?.announcement;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Announcement + trust points, rendered as a seamless marquee.
  const strip = [announcement, ...TRUST_STRIP].filter(Boolean) as string[];

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement / trust marquee */}
      {strip.length > 0 && (
        <div className="overflow-hidden border-b border-white/10 bg-ink py-2 text-white">
          <div className="marquee-track gap-0">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {strip.map((item, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="flex items-center whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-label text-white/70"
                  >
                    <span className="mr-6 h-1.5 w-1.5 -skew-x-12 bg-brand-accent" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <nav
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-ink/10 bg-white/85 backdrop-blur-xl"
            : "border-transparent bg-white",
        )}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <Logo settings={settings} brandName={brandName} />

          <ul className="hidden items-center gap-8 md:flex">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-2 text-[13px] font-bold uppercase tracking-wider transition-colors",
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink/50 hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-brand-accent transition-all duration-300",
                      isActive(item.href) ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden px-5 py-2.5 text-[11px] lg:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order Now
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-ink transition-colors hover:bg-ink hover:text-white md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[300px] max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-ink/10 px-5">
            <Logo settings={settings} brandName={brandName} href={null} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-xl text-ink hover:bg-ink/5"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col p-3">
            {MAIN_NAV.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold uppercase tracking-wide transition-colors",
                    isActive(item.href)
                      ? "bg-ink text-white"
                      : "text-ink/70 hover:bg-ink/5",
                  )}
                >
                  {item.label}
                  <span className="font-display text-xs text-brand-accent-dark">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-ink/10 p-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
