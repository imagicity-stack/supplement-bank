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
    <section className="bg-ink text-white">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:py-20">
        <div>
          <p className="eyebrow text-brand-accent">
            <span className="h-px w-8 bg-brand-accent" />
            Train In Style
          </p>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            Gym Wear Built For{" "}
            <span className="text-brand-accent">Performance</span>
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Premium, breathable fitness apparel designed to move with you. From
            training tees to joggers — look as strong as you train.
          </p>
          <Link href="/products?category=gym-wear" className="btn-primary mt-8">
            Shop Gym Wear
            <ArrowRightIcon className="h-5 w-5" />
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
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {["Training Tees", "Joggers & Shorts", "Tank Tops", "Hoodies"].map(
              (label) => (
                <div
                  key={label}
                  className="flex aspect-[4/5] items-end rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="font-display text-lg font-bold text-white">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
