import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { urlForImage } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

interface LogoProps {
  settings: SiteSettings | null;
  brandName: string;
  /** "light" renders the wordmark in white (for dark sections). */
  variant?: "dark" | "light";
  className?: string;
  href?: string | null;
}

/**
 * Site logo. If the client has uploaded a logo in Studio (Site Settings), it's
 * shown as-is (light backgrounds only). Otherwise we render a tasteful shield
 * mark + wordmark so the site looks branded immediately.
 *
 * A plain <img> is used for the uploaded logo so its aspect ratio is preserved
 * regardless of the file's dimensions.
 */
export function Logo({
  settings,
  brandName,
  variant = "dark",
  className,
  href = "/",
}: LogoProps) {
  const uploadedSrc =
    variant === "dark" && settings?.logo?.asset
      ? urlForImage(settings.logo).height(96).url()
      : null;

  const inner = uploadedSrc ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={uploadedSrc}
      alt={brandName}
      className="h-9 w-auto object-contain sm:h-10"
    />
  ) : (
    <span className="flex items-center gap-2.5">
      <BrandMark className="h-9 w-auto sm:h-10" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-extrabold uppercase tracking-tight sm:text-base",
            variant === "light" ? "text-white" : "text-ink",
          )}
        >
          Supplement
        </span>
        <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.3em] text-brand-accent-dark sm:text-base">
          Bank
        </span>
      </span>
    </span>
  );

  if (!href) return <span className={className}>{inner}</span>;

  return (
    <Link href={href} aria-label={brandName} className={cn("inline-flex", className)}>
      {inner}
    </Link>
  );
}
