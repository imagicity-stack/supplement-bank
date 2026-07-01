import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AvailabilityBadge } from "@/components/ProductBadges";
import { PortableText } from "@/components/PortableText";
import { PriceTag } from "@/components/PriceTag";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckIcon } from "@/components/icons";
import { BRAND_NAME } from "@/lib/constants";
import { formatPrice, productWhatsAppLink } from "@/lib/whatsapp";
import { siteUrl } from "@/sanity/env";
import {
  getProductBySlug,
  getProductSlugs,
  getRelatedProducts,
  getSiteSettings,
} from "@/sanity/lib/data";
import { urlForImage } from "@/sanity/lib/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const title = product.seoTitle || product.name;
  const description =
    product.seoDescription ||
    product.shortDescription ||
    `Buy ${product.name} at ${BRAND_NAME}. Genuine products, delivered across India. Enquire on WhatsApp.`;

  const ogImage = product.images?.[0]?.asset
    ? urlForImage(product.images[0]).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}/products/${product.slug}`,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [product, settings] = await Promise.all([
    getProductBySlug(slug),
    getSiteSettings(),
  ]);

  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(slug, product.category?._id);
  const enquiryLink = productWhatsAppLink(product, settings?.whatsappNumber);

  return (
    <>
      <div className="container-page py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/50">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-ink">
                Products
              </Link>
            </li>
            {product.category && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={`/products?category=${product.category.slug}`}
                    className="hover:text-ink"
                  >
                    {product.category.name}
                  </Link>
                </li>
              </>
            )}
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery images={product.images} productName={product.name} />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              {product.category?.name && (
                <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
                  {product.category.name}
                </span>
              )}
              <AvailabilityBadge availability={product.availability} />
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl">{product.name}</h1>

            {product.brand && (
              <p className="mt-2 text-sm text-ink/60">
                Brand: <span className="font-semibold text-ink">{product.brand}</span>
              </p>
            )}

            <div className="mt-5">
              <PriceTag
                price={product.price}
                discountPrice={product.discountPrice}
                size="lg"
              />
            </div>

            {product.shortDescription && (
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {product.shortDescription}
              </p>
            )}

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-ink/60">
                  Variants
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <span
                      key={variant._key}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-ink"
                    >
                      {variant.label}
                      {variant.price != null && (
                        <span className="text-ink/50">
                          · {formatPrice(variant.price)}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                href={enquiryLink}
                label="Enquire on WhatsApp"
                className="flex-1"
              />
              <Link href="/products" className="btn-outline">
                Back to Products
              </Link>
            </div>

            <p className="mt-4 text-xs text-ink/50">
              Tap “Enquire on WhatsApp” to check availability & delivery. No
              online payment — we confirm everything on chat.
            </p>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-3 font-display text-lg font-bold text-ink">
                  Key Benefits
                </h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-accent/20 text-ink">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Full description + How to use */}
        {((product.description?.length ?? 0) > 0 ||
          (product.howToUse?.length ?? 0) > 0) && (
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {product.description && product.description.length > 0 && (
              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                  Description
                </h2>
                <div className="prose-sm max-w-none">
                  <PortableText value={product.description} />
                </div>
              </section>
            )}
            {product.howToUse && product.howToUse.length > 0 && (
              <section>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                  How To Use
                </h2>
                <div className="max-w-none">
                  <PortableText value={product.howToUse} />
                </div>
              </section>
            )}
          </div>
        )}
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="container-page py-14">
          <SectionHeading
            eyebrow="You May Also Like"
            title="Related Products"
            link={{ href: "/products", label: "View all" }}
          />
          <ProductGrid products={related} whatsappNumber={settings?.whatsappNumber} />
        </section>
      )}
    </>
  );
}
