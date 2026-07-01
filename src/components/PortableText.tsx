import {
  PortableText as PortableTextComponent,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-ink/70">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-2xl font-bold text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-5 text-xl font-bold text-ink">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-brand-accent pl-4 italic text-ink/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1.5 pl-5 text-ink/70">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-ink/70">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-brand-red underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value?: PortableTextBlock[] }) {
  if (!value || value.length === 0) return null;
  return <PortableTextComponent value={value} components={components} />;
}
