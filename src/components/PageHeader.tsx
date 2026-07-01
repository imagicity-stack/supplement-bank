interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-grid-dark [background-size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[100px]" />

      <div className="container-page relative py-16 sm:py-20">
        {eyebrow && <p className="label label-light">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-white/60">{description}</p>
        )}
      </div>
    </section>
  );
}
