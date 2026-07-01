/**
 * App-wide constants and static brand content.
 * Products & settings live in Sanity — this file is only for non-content
 * config (fallbacks, navigation, static marketing copy).
 */

/** Fallback WhatsApp number used when Site Settings has none. */
export const DEFAULT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER || "91XXXXXXXXXX";

export const BRAND_NAME = "Supplement Bank";

export const BRAND_TAGLINE =
  "Fuel Your Fitness With Genuine Supplements";

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Products",
    description:
      "Every product is sourced directly and authenticity-checked. No fakes, ever.",
  },
  {
    title: "Trusted Brands",
    description:
      "Only the brands athletes trust — the biggest names in sports nutrition.",
  },
  {
    title: "Expert Guidance",
    description:
      "Not sure what you need? Our team helps you pick the right stack for your goals.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Premium quality at prices that make sense. Real value, no compromises.",
  },
  {
    title: "Pan India Delivery",
    description:
      "Fast, reliable delivery to your doorstep, anywhere in India.",
  },
] as const;

/** Fallback categories shown before Sanity is populated. */
export const FALLBACK_CATEGORIES = [
  "Whey Protein",
  "Mass Gainer",
  "Creatine",
  "Pre Workout",
  "Multivitamin",
  "Fat Burner",
  "Gym Wear",
  "Shakers",
  "Fitness Accessories",
] as const;

export const AVAILABILITY_LABELS: Record<string, string> = {
  in_stock: "In Stock",
  out_of_stock: "Out of Stock",
  pre_order: "Pre-Order",
};
