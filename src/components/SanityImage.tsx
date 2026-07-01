import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import type { SanityImageWithAlt } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

interface SanityImageProps {
  image?: SanityImageWithAlt;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

/**
 * Renders a Sanity image through next/image with a graceful placeholder
 * when the image is missing (e.g. before the client uploads any).
 */
export function SanityImage({
  image,
  alt,
  width = 800,
  height = 800,
  sizes,
  className,
  fill = false,
  priority = false,
}: SanityImageProps) {
  const hasImage = !!image?.asset;

  if (!hasImage) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-ink-muted/10 to-ink-muted/5 text-ink/20",
          className,
        )}
        aria-label={alt}
        role="img"
      >
        <svg viewBox="0 0 24 24" className="h-1/4 w-1/4" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  const src = urlForImage(image)
    .width(fill ? 1200 : width)
    .height(fill ? 1200 : height)
    .url();

  if (fill) {
    return (
      <Image
        src={src}
        alt={image.alt || alt}
        fill
        sizes={sizes || "(max-width: 768px) 100vw, 33vw"}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={image.alt || alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
