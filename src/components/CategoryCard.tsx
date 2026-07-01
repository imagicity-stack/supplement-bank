import Link from "next/link";

import { SanityImage } from "@/components/SanityImage";
import { ArrowRightIcon } from "@/components/icons";
import type { Category } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index?: number;
}) {
  const hasImage = !!category.image?.asset;

  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-ink/10 bg-ink text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      {hasImage ? (
        <>
          <SanityImage
            image={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-grid-dark [background-size:28px_28px] opacity-70" />
          <div className="grain absolute inset-0" />
          {index != null && (
            <span className="absolute right-3 top-2 font-display text-6xl font-black text-white/[0.06]">
              {String(index).padStart(2, "0")}
            </span>
          )}
          <div className="absolute right-4 top-4 h-2.5 w-2.5 -skew-x-12 bg-brand-accent transition-transform duration-300 group-hover:scale-150" />
        </>
      )}

      <div className="relative p-4">
        <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight sm:text-lg">
          {category.name}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          {typeof category.productCount === "number" ? (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              {category.productCount}{" "}
              {category.productCount === 1 ? "item" : "items"}
            </p>
          ) : (
            <span />
          )}
          <span
            className={cn(
              "grid h-8 w-8 place-items-center rounded-full bg-white/10 text-brand-accent",
              "transition-all duration-300 group-hover:bg-brand-accent group-hover:text-ink",
            )}
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
