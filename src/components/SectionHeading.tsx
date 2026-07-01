import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  link?: { href: string; label: string };
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  link,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2
          className={cn(
            "text-3xl sm:text-4xl",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("mt-3 text-base", light ? "text-white/70" : "text-ink/60")}>
            {description}
          </p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold",
            light ? "text-brand-accent" : "text-brand-red hover:text-brand-red-dark",
          )}
        >
          {link.label}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
