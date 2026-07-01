import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/sanity/lib/types";

interface ProductGridProps {
  products: Product[];
  whatsappNumber?: string;
}

export function ProductGrid({ products, whatsappNumber }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          whatsappNumber={whatsappNumber}
        />
      ))}
    </div>
  );
}
