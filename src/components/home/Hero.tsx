import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

interface HeroProps {
  whatsappHref: string;
}

const HIGHLIGHTS = ["100% Genuine", "Trusted Brands", "Pan-India Delivery"];

const PANEL_STATS = [
  { value: "50+", label: "Trusted Brands" },
  { value: "10k+", label: "Happy Customers" },
  { value: "100%", label: "Authentic" },
  { value: "Pan-India", label: "Delivery" },
];

export function Hero({ whatsappHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-grid-dark [background-size:52px_52px] opacity-60" />
      {/* one restrained green wash — not a blob field */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />

      <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
        {/* Copy */}
        <div className="animate-fade-up lg:col-span-7">
          <p className="label label-light">Premium Fitness Nutrition — India</p>

          <h1 className="mt-6 font-display text-[2.75rem] font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Fuel Your Fitness
            <br />
            With{" "}
            <span className="relative inline-block text-brand-accent">
              Genuine
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="#4CAF23"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Supplements
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            Premium gym supplements, fitness accessories, and gym wear from
            trusted brands, delivered across India.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="btn-primary group">
              Explore Products
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-white/75"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-accent text-ink">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Brand panel */}
        <div className="animate-fade-up lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            {/* rotating ring */}
            <svg
              className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 animate-spin-slow text-white/10"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
            </svg>

            <div className="grain relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <BrandMark className="h-20 w-auto drop-shadow-[0_10px_30px_rgba(76,175,35,0.35)]" />
                <p className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-white">
                  Fuel Your Strength
                </p>
                <p className="text-sm font-semibold uppercase tracking-label text-brand-accent">
                  Trust What You Take
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {PANEL_STATS.map((s) => (
                  <div key={s.label} className="bg-ink/60 p-5 text-center">
                    <p className="font-display text-2xl font-black text-brand-accent">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
