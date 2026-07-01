import { SectionHeading } from "@/components/SectionHeading";
import { CheckIcon } from "@/components/icons";
import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="container-page">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Choose Supplement Bank"
        description="We're more than a store — we're your trusted fitness partner, obsessed with quality and results."
        align="center"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-ink text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-ink">
              <CheckIcon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
