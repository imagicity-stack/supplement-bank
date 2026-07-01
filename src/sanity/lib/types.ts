import type { PortableTextBlock } from "@portabletext/react";
import type { Image } from "sanity";

export type Availability = "in_stock" | "out_of_stock" | "pre_order";

export type ProductType = "supplement" | "apparel" | "accessory" | "shaker";

export interface SanityImageWithAlt extends Image {
  alt?: string;
}

export interface CategoryRef {
  _id: string;
  name: string;
  slug: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: Image;
  order?: number;
  productCount?: number;
}

export interface ProductVariant {
  _key: string;
  label: string;
  price?: number;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  category?: CategoryRef;
  price: number;
  discountPrice?: number;
  images: SanityImageWithAlt[];
  shortDescription?: string;
  description?: PortableTextBlock[];
  benefits?: string[];
  howToUse?: PortableTextBlock[];
  variants?: ProductVariant[];
  brand?: string;
  productType?: ProductType;
  availability: Availability;
  featured?: boolean;
  bestSeller?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SiteSettings {
  brandName?: string;
  logo?: SanityImageWithAlt;
  whatsappNumber?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  announcement?: string;
}
