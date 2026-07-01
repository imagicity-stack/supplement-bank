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
        eyebrow="Shop By Category"
        title="Featured Categories"
        description="Find exactly what your training needs — from protein to pre-workout to apparel."
        link={{ href: "/categories", label: "View all categories" }}
      />

      {categories.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      ) : (
        // Fallback shown before the client adds categories in Sanity Studio.
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {FALLBACK_CATEGORIES.slice(0, 9).map((name) => (
            <Link
              key={name}
              href="/products"
              className="group flex items-center justify-between rounded-2xl border border-black/[0.06] bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="font-display text-base font-bold text-ink">
                {name}
              </span>
              <ArrowRightIcon className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
