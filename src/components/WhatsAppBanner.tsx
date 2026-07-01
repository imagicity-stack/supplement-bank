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
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={href} label="Chat on WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}
