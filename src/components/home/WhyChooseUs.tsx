import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-grid-dark [background-size:52px_52px] opacity-40" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label label-light">Why Choose Us</p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-[2.75rem]">
            Built On Trust,
            <br />
            <span className="text-brand-accent">Not Hype.</span>
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            We&apos;re more than a store — we&apos;re your trusted fitness
            partner, obsessed with authenticity, quality, and your results.
          </p>
          <Link href="/about" className="btn-outline-light mt-8 w-fit">
            Our Story
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <ul className="lg:pt-2">
          {WHY_CHOOSE_US.map((item, i) => (
            <li
              key={item.title}
              className="group grid grid-cols-[auto_1fr] gap-5 border-t border-white/10 py-6 transition-colors first:border-t-0 hover:border-brand-accent/40"
            >
              <span className="font-display text-2xl font-black text-white/25 transition-colors group-hover:text-brand-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
