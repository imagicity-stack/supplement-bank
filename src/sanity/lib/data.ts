import { sanityFetch } from "@/sanity/lib/fetch";
import * as q from "@/sanity/lib/queries";
import type { Category, Product, SiteSettings } from "@/sanity/lib/types";

/**
 * Typed, cached data-access functions used across the app.
 * Every call goes through `sanityFetch`, so pages never crash when Sanity is
 * unconfigured or briefly unavailable — they just get empty/undefined data.
 */

export function getAllProducts() {
  return sanityFetch<Product[]>({
    query: q.allProductsQuery,
    fallback: [],
    tags: ["product"],
  });
}

export function getFeaturedProducts() {
  return sanityFetch<Product[]>({
    query: q.featuredProductsQuery,
    fallback: [],
    tags: ["product"],
  });
}

export function getBestSellerProducts() {
  return sanityFetch<Product[]>({
    query: q.bestSellerProductsQuery,
    fallback: [],
    tags: ["product"],
  });
}

export function getApparelProducts() {
  return sanityFetch<Product[]>({
    query: q.apparelProductsQuery,
    fallback: [],
    tags: ["product"],
  });
}

export function getProductBySlug(slug: string) {
  return sanityFetch<Product | null>({
    query: q.productBySlugQuery,
    params: { slug },
    fallback: null,
    tags: ["product"],
  });
}

export function getProductSlugs() {
  return sanityFetch<string[]>({
    query: q.productSlugsQuery,
    fallback: [],
    tags: ["product"],
  });
}

export function getRelatedProducts(slug: string, categoryId?: string) {
  if (!categoryId) return Promise.resolve<Product[]>([]);
  return sanityFetch<Product[]>({
    query: q.relatedProductsQuery,
    params: { slug, categoryId },
    fallback: [],
    tags: ["product"],
  });
}

export function getAllCategories() {
  return sanityFetch<Category[]>({
    query: q.allCategoriesQuery,
    fallback: [],
    tags: ["category"],
  });
}

export function getFeaturedCategories() {
  return sanityFetch<Category[]>({
    query: q.featuredCategoriesQuery,
    fallback: [],
    tags: ["category"],
  });
}

export function getSiteSettings() {
  return sanityFetch<SiteSettings | null>({
    query: q.siteSettingsQuery,
    fallback: null,
    tags: ["siteSettings"],
  });
}
