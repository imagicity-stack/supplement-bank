/**
 * Central place for reading Sanity connection settings from the environment.
 *
 * The site is designed to *degrade gracefully*: if these are not yet set,
 * `npm run dev` still boots and pages render with empty states instead of
 * crashing. Fetch helpers check `isSanityConfigured` before hitting the API.
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";

/**
 * True when a real Sanity project ID has been provided. Used to avoid firing
 * doomed requests (and noisy errors) before the client configures Sanity.
 */
export const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id";

/** Used to build absolute URLs for SEO / Open Graph / sitemap. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
