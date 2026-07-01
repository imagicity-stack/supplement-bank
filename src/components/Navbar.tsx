"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { MAIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  brandName: string;
  announcement?: string;
  whatsappHref: string;
}

export function Navbar({ brandName, announcement, whatsappHref }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Add a shadow / solidify the navbar after scrolling a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {announcement && (
        <div className="overflow-hidden bg-ink text-white">
          <div className="container-page flex items-center justify-center py-2 text-center text-xs font-medium tracking-wide">
            <span className="truncate">{announcement}</span>
          </div>
        </div>
      )}

      <nav
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-black/5 bg-white/90 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-brand-accent">
              SB
            </span>
            <span className="hidden sm:inline">{brandName}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href)
                      ? "bg-ink text-white"
                      : "text-ink/70 hover:bg-ink/5 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden px-4 py-2 text-xs sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-ink/5 md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-black/5 px-5">
            <span className="font-display text-lg font-extrabold">{brandName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-ink/5"
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 p-4">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-semibold",
                    isActive(item.href)
                      ? "bg-ink text-white"
                      : "text-ink/80 hover:bg-ink/5",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-4">
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
