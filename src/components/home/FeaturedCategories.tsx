import Link from "next/link";

import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { FALLBACK_CATEGORIES } from "@/lib/constants";
import type { Category } from "@/sanity/lib/types";

export function FeaturedCategories({ categories }: { categories: Category[] }) {
  return (
    <section className="container-page">
      <SectionHeading
        index="01"
        eyebrow="Shop By Category"
        title="Featured Categories"
        description="Find exactly what your training needs — from protein to pre-workout to apparel."
        link={{ href: "/categories", label: "All categories" }}
      />

      {categories.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, i) => (
            <CategoryCard key={category._id} category={category} index={i + 1} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {FALLBACK_CATEGORIES.slice(0, 9).map((name, i) => (
            <Link
              key={name}
              href="/products"
              className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex items-center gap-3">
                <span className="font-display text-sm font-black text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-tight text-ink sm:text-base">
                  {name}
                </span>
              </span>
              <ArrowRightIcon className="h-5 w-5 text-brand-accent-dark transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
