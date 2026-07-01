import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { CheckIcon } from "@/components/icons";
import { BRAND_NAME, WHY_CHOOSE_US } from "@/lib/constants";
import { buildGeneralEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { getSiteSettings } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Supplement Bank is your trusted fitness partner — 100% genuine gym supplements, trusted brands, expert guidance, and pan-India delivery.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Authenticity First",
    body: "Every product is genuine and sourced responsibly. We never compromise on quality — your health depends on it.",
  },
  {
    title: "For Every Fitness Journey",
    body: "Whether you're a beginner or a competitive athlete, we've got the right stack and the guidance to match your goals.",
  },
  {
    title: "Real Support",
    body: "No bots, no runaround. Chat with real people on WhatsApp who know supplements and actually want to help.",
  },
];

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const brandName = settings?.brandName || BRAND_NAME;
  const whatsappHref = buildWhatsAppLink(
    settings?.whatsappNumber,
    buildGeneralEnquiryMessage(),
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={`About ${brandName}`}
        description="Premium quality, genuine products, and a team that treats your goals like our own."
      />

      <section className="container-page py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink/70">
            <p>
              <strong className="text-ink">{brandName}</strong> was built on a
              simple belief: getting genuine, high-quality supplements shouldn&apos;t
              be complicated or risky. The market is flooded with counterfeits —
              we set out to be the brand you can trust, every single time.
            </p>
            <p>
              We stock premium gym supplements, fitness nutrition, gym wear, and
              accessories from the brands athletes actually trust. From your first
              tub of whey to a complete competition stack, we&apos;re here for the
              whole journey.
            </p>
            <p>
              We keep things personal. Instead of a faceless checkout, you talk
              to real people on WhatsApp who help you pick the right products,
              confirm availability, and arrange fast delivery across India.
            </p>
          </div>

          <div className="rounded-2xl bg-ink p-8 text-white">
            <h2 className="text-2xl text-white">What We Stand For</h2>
            <ul className="mt-6 space-y-5">
              {WHY_CHOOSE_US.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-accent text-ink">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-14">
        <WhatsAppBanner
          href={whatsappHref}
          title="Ready to start? Talk to us."
          description="Tell us your goals and we'll recommend the perfect products for you."
        />
      </div>
    </>
  );
}
