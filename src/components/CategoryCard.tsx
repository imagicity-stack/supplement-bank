import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { SanityImage } from "@/components/SanityImage";
import type { Category } from "@/sanity/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="card group relative aspect-[4/5] overflow-hidden"
    >
      <SanityImage
        image={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-display text-lg font-bold text-white">
          {category.name}
        </h3>
        {typeof category.productCount === "number" && (
          <p className="text-xs text-white/70">
            {category.productCount}{" "}
            {category.productCount === 1 ? "product" : "products"}
          </p>
        )}
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-brand-accent">
          Shop now
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
