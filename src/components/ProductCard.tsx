import Link from "next/link";

import { AvailabilityBadge } from "@/components/ProductBadges";
import { PriceTag } from "@/components/PriceTag";
import { SanityImage } from "@/components/SanityImage";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";
import type { Product } from "@/sanity/lib/types";
import { productWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  whatsappNumber?: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const hasDiscount =
    product.discountPrice != null && product.discountPrice < product.price;
  const discountPct = hasDiscount
    ? Math.round(((product.price - product.discountPrice!) / product.price) * 100)
    : 0;
  const enquiryLink = productWhatsAppLink(product, whatsappNumber);

  return (
    <article className="card group">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-[#f4f5f2]"
      >
        <SanityImage
          image={product.images?.[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {hasDiscount && (
            <span className="badge bg-brand-red text-white">-{discountPct}%</span>
          )}
          {product.bestSeller && (
            <span className="badge bg-ink text-brand-accent">Best Seller</span>
          )}
        </div>
        <div className="absolute right-3 top-3">
          <AvailabilityBadge availability={product.availability} />
        </div>

        {/* hover CTA sweep */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 py-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          View Details
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {product.brand && (
          <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-ink/40">
            {product.brand}
          </p>
        )}
        <h3 className="font-display text-[15px] font-bold leading-snug text-ink">
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 transition-colors hover:text-brand-accent-dark"
          >
            {product.name}
          </Link>
        </h3>
        {product.category?.name && (
          <p className="mt-1 text-xs text-ink/45">{product.category.name}</p>
        )}

        <div className="mt-auto pt-4">
          <PriceTag price={product.price} discountPrice={product.discountPrice} />

          <div className="mt-3 flex items-stretch gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ink/15 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Details
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="grid w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1fb457]"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
