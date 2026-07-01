import Link from "next/link";

import { AvailabilityBadge, DiscountBadge } from "@/components/ProductBadges";
import { PriceTag } from "@/components/PriceTag";
import { SanityImage } from "@/components/SanityImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRightIcon } from "@/components/icons";
import type { Product } from "@/sanity/lib/types";
import { productWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  whatsappNumber?: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const hasDiscount =
    product.discountPrice != null && product.discountPrice < product.price;
  const enquiryLink = productWhatsAppLink(product, whatsappNumber);

  return (
    <article className="card group">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-ink-muted/5"
      >
        <SanityImage
          image={product.images?.[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {hasDiscount && <DiscountBadge />}
          {product.bestSeller && (
            <span className="badge bg-ink text-brand-accent">Best Seller</span>
          )}
        </div>
        <div className="absolute right-3 top-3">
          <AvailabilityBadge availability={product.availability} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {product.category?.name && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-red">
            {product.category.name}
          </p>
        )}
        <h3 className="mb-1 font-display text-base font-bold leading-snug text-ink">
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 hover:text-brand-red"
          >
            {product.name}
          </Link>
        </h3>
        {product.shortDescription && (
          <p className="mb-3 line-clamp-2 text-sm text-ink/60">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-auto space-y-3 pt-2">
          <PriceTag price={product.price} discountPrice={product.discountPrice} />

          <div className="flex flex-col gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="btn-outline w-full py-2.5 text-xs"
            >
              View Details
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <WhatsAppButton
              href={enquiryLink}
              size="sm"
              label="Enquire on WhatsApp"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
