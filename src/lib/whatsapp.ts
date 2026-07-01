import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants";
import type { Product } from "@/sanity/lib/types";

/** Format a price in Indian Rupees. */
export function formatPrice(value?: number): string {
  if (value == null) return "";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Strip everything except digits so the number is wa.me-safe. */
function normalizeNumber(raw?: string): string {
  const digits = (raw || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");
  return digits || DEFAULT_WHATSAPP_NUMBER.replace(/\D/g, "");
}

/**
 * Build a wa.me link with a pre-filled message.
 * @param number  WhatsApp number (from Sanity Site Settings, or fallback).
 * @param message The pre-filled message body.
 */
export function buildWhatsAppLink(number: string | undefined, message: string): string {
  const phone = normalizeNumber(number);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Build the product enquiry message in the required format.
 */
export function buildProductEnquiryMessage(product: Product): string {
  const price = product.discountPrice ?? product.price;
  const priceText = price != null ? formatPrice(price) : "Please advise";
  const categoryText = product.category?.name ?? "General";

  return [
    "Hi Supplement Bank, I am interested in this product:",
    "",
    `Product: ${product.name}`,
    `Price: ${priceText}`,
    `Category: ${categoryText}`,
    "",
    "Please share availability and delivery details.",
  ].join("\n");
}

/** Convenience: full wa.me link for a specific product. */
export function productWhatsAppLink(
  product: Product,
  number: string | undefined,
): string {
  return buildWhatsAppLink(number, buildProductEnquiryMessage(product));
}

/** A generic "get in touch" message for the header/hero/contact CTAs. */
export function buildGeneralEnquiryMessage(): string {
  return "Hi Supplement Bank, I would like to know more about your products.";
}
