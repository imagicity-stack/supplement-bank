import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCard } from "@/components/CategoryCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon } from "@/components/icons";
import { FALLBACK_CATEGORIES } from "@/lib/constants";
import { getAllCategories } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Shop supplements and fitness apparel by category — whey protein, mass gainer, creatine, pre workout, multivitamin, fat burner, gym wear, shakers, and accessories.",
  alternates: { canonical: "/categories" },
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <>
      <PageHeader
        eyebrow="Browse"
        title="Shop By Category"
        description="Find exactly what your training needs. Pick a category to explore products and enquire on WhatsApp."
      />

      <section className="container-page py-12">
        {categories.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FALLBACK_CATEGORIES.map((name) => (
                <Link
                  key={name}
                  href="/products"
                  className="group flex items-center justify-between rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="font-display text-lg font-bold text-ink">
                    {name}
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
            <EmptyState
              title="Categories are managed in Sanity Studio"
              description="Add categories with images in the admin portal and they'll appear here automatically."
              action={{ href: "/studio", label: "Open Sanity Studio" }}
            />
          </div>
        )}
      </section>
    </>
  );
}
