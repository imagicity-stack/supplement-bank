import "server-only";

import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";

/**
 * A resilient wrapper around Sanity's `client.fetch`.
 *
 * Goals:
 *  - The site must still boot (`npm run dev`) and render *before* Sanity is
 *    configured. In that case we short-circuit and return `fallback`.
 *  - A transient Sanity/network error should never crash a page; we log it
 *    and return `fallback` so the UI shows a graceful empty state.
 *
 * Revalidation is handled via Next.js `next: { revalidate }` tags so the
 * catalogue stays fast but picks up Studio edits within a short window.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  fallback,
  revalidate = 60,
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  fallback: T;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate, tags },
    });
  } catch (error) {
    console.error("[sanityFetch] Failed to fetch from Sanity:", error);
    return fallback;
  }
}
