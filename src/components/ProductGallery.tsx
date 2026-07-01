"use client";

import { useState } from "react";

import { SanityImage } from "@/components/SanityImage";
import type { SanityImageWithAlt } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: SanityImageWithAlt[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const safeImages = images?.length ? images : [undefined];
  const current = safeImages[Math.min(active, safeImages.length - 1)];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/[0.06] bg-ink-muted/5">
        <SanityImage
          image={current}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {safeImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {safeImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View image ${index + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl border-2 bg-ink-muted/5 transition",
                index === active
                  ? "border-ink"
                  : "border-transparent hover:border-black/20",
              )}
            >
              <SanityImage
                image={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
