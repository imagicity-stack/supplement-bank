import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    title: "Browse the Catalogue",
    body: "Explore genuine supplements, gym wear, and accessories from the brands athletes trust.",
  },
  {
    title: "Enquire on WhatsApp",
    body: "Tap “Enquire” on any product. We confirm price, availability, and delivery — no online payment needed.",
  },
  {
    title: "Get It Delivered",
    body: "We dispatch fast and reliably, straight to your door, anywhere in India.",
  },
];

export function HowItWorks() {
  return (
    <section className="container-page">
      <SectionHeading
        index="04"
        eyebrow="Simple & Direct"
        title="How It Works"
        description="No cart, no checkout, no hassle. Just genuine products and a real conversation."
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="group relative bg-white p-8 transition-colors hover:bg-brand-accent-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-5xl font-black text-ink/10 transition-colors group-hover:text-brand-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-3 w-3 -skew-x-12 bg-brand-accent" />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
