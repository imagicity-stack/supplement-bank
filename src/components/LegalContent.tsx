interface Section {
  heading: string;
  body: string[];
}

export function LegalContent({ sections }: { sections: Section[] }) {
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-3xl space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 font-display text-xl font-bold text-ink">
              {section.heading}
            </h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mb-3 leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
