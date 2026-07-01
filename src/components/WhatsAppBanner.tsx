import { WhatsAppButton } from "@/components/WhatsAppButton";

interface WhatsAppBannerProps {
  href: string;
  title?: string;
  description?: string;
}

export function WhatsAppBanner({
  href,
  title = "Have a question? Enquire on WhatsApp",
  description = "Chat directly with our team for product advice, availability, and fast delivery across India.",
}: WhatsAppBannerProps) {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-accent px-6 py-14 sm:px-12 sm:py-16">
        <div className="grain absolute inset-0 opacity-[0.08]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-6 select-none font-display text-[12rem] font-black uppercase leading-none text-ink/[0.06]"
        >
          SB
        </span>
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mx-auto flex w-fit items-center gap-2.5 text-[11px] font-bold uppercase tracking-label text-ink/60">
            <span className="h-2.5 w-2.5 -skew-x-12 bg-ink" />
            Direct Enquiry
          </p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-medium text-ink/70">
            {description}
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton href={href} label="Chat on WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}
