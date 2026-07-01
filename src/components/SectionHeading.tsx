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
  index?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  link,
  light = false,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {index && (
            <span
              className={cn(
                "font-display text-sm font-black tabular-nums",
                light ? "text-white/30" : "text-ink/25",
              )}
            >
              {index}
            </span>
          )}
          {eyebrow && (
            <span className={cn("label", light && "label-light")}>{eyebrow}</span>
          )}
        </div>
        <h2
          className={cn(
            "mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-[2.5rem] sm:leading-[1.05]",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              light ? "text-white/60" : "text-ink/55",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider",
            light
              ? "text-brand-accent"
              : "text-ink hover:text-brand-accent-dark",
          )}
        >
          {link.label}
          <span className="grid h-7 w-7 place-items-center rounded-full border border-current transition-all group-hover:bg-brand-accent group-hover:text-ink">
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </Link>
      )}
    </div>
  );
}
