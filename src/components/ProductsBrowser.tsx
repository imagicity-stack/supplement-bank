"use client";

import { useMemo, useState } from "react";

import { EmptyState } from "@/components/EmptyState";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchIcon } from "@/components/icons";
import type { Category, Product } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

type SortKey = "relevance" | "price-asc" | "price-desc";

interface ProductsBrowserProps {
  products: Product[];
  categories: Category[];
  whatsappNumber?: string;
  initialCategory?: string;
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "relevance", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

/** The effective price used for sorting (discount wins if present). */
function effectivePrice(p: Product): number {
  return p.discountPrice != null && p.discountPrice < p.price
    ? p.discountPrice
    : p.price;
}

export function ProductsBrowser({
  products,
  categories,
  whatsappNumber,
  initialCategory = "all",
}: ProductsBrowserProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("relevance");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    let result = products.filter((p) => {
      const matchesCategory =
        category === "all" || p.category?.slug === category;
      if (!matchesCategory) return false;

      if (!term) return true;
      const haystack = [
        p.name,
        p.brand,
        p.shortDescription,
        p.category?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => effectivePrice(a) - effectivePrice(b));
    } else if (sort === "price-desc") {
      result = [...result].sort((a, b) => effectivePrice(b) - effectivePrice(a));
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, brands…"
            aria-label="Search products"
            className="w-full rounded-full border border-black/10 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="sr-only">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category filter chips */}
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <FilterChip
            active={category === "all"}
            onClick={() => setCategory("all")}
          >
            All
          </FilterChip>
          {categories.map((cat) => (
            <FilterChip
              key={cat._id}
              active={category === cat.slug}
              onClick={() => setCategory(cat.slug)}
            >
              {cat.name}
            </FilterChip>
          ))}
        </div>
      )}

      {/* Result count */}
      <p className="mb-6 text-sm text-ink/50">
        Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length > 0 ? (
        <ProductGrid products={filtered} whatsappNumber={whatsappNumber} />
      ) : (
        <EmptyState
          title="No products found"
          description={
            products.length === 0
              ? "Products will appear here once they're added in Sanity Studio."
              : "Try adjusting your search or filters."
          }
          action={
            products.length === 0
              ? { href: "/studio", label: "Open Sanity Studio" }
              : undefined
          }
        />
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-ink text-white"
          : "border border-black/10 bg-white text-ink/70 hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
