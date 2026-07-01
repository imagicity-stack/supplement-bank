import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { ArrowRightIcon } from "@/components/icons";
import type { Product } from "@/sanity/lib/types";

interface ApparelHighlightProps {
  products: Product[];
  whatsappNumber?: string;
}

export function ApparelHighlight({ products, whatsappNumber }: ApparelHighlightProps) {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-[#f4f5f2]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[9rem] font-black uppercase leading-none text-ink/[0.035] sm:text-[14rem]"
        >
          Apparel
        </span>

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <p className="label">Train In Style</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-[2.75rem]">
              Gym Wear Built For{" "}
              <span className="text-brand-accent-dark">Performance</span>
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Premium, breathable fitness apparel designed to move with you. From
              training tees to joggers — look as strong as you train.
            </p>
            <Link href="/products?category=gym-wear" className="btn-dark mt-8 w-fit">
              Shop Gym Wear
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {products.slice(0, 2).map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  whatsappNumber={whatsappNumber}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {["Training Tees", "Joggers", "Tank Tops", "Hoodies"].map(
                (label, i) => (
                  <div
                    key={label}
                    className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl border border-ink/10 bg-ink p-5 text-white"
                  >
                    <span className="absolute right-3 top-2 font-display text-5xl font-black text-white/[0.06]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-bold uppercase tracking-tight">
                      {label}
                    </span>
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
