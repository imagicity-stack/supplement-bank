import Link from "next/link";

import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

interface HeroProps {
  whatsappHref: string;
}

const HIGHLIGHTS = [
  "100% Genuine",
  "Trusted Brands",
  "Pan India Delivery",
];

export function Hero({ whatsappHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow text-brand-accent">
            <span className="h-px w-8 bg-brand-accent" />
            Premium Fitness Nutrition
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Fuel Your Fitness With{" "}
            <span className="text-brand-accent">Genuine Supplements</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Premium gym supplements, fitness accessories, and gym wear from
            trusted brands, delivered across India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="btn-primary">
              Explore Products
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-accent text-ink">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stat / visual panel */}
        <div className="relative animate-fade-up lg:justify-self-end">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <StatCard value="100%" label="Genuine Products" accent />
            <StatCard value="50+" label="Trusted Brands" />
            <StatCard value="Pan India" label="Fast Delivery" />
            <StatCard value="10k+" label="Happy Customers" accent />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-6 " +
        (accent
          ? "border-brand-accent/30 bg-brand-accent/10"
          : "border-white/10 bg-white/5")
      }
    >
      <p className="font-display text-3xl font-extrabold text-brand-accent sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
