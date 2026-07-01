interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-black/5 bg-ink text-white">
      <div className="container-page py-14 sm:py-16">
        {eyebrow && <p className="eyebrow text-brand-accent">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
