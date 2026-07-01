import { groq } from "next-sanity";

// Shared projection for a product "card" (list views).
const productCardFields = groq`
  _id,
  name,
  "slug": slug.current,
  price,
  discountPrice,
  availability,
  featured,
  bestSeller,
  brand,
  productType,
  shortDescription,
  images,
  "category": category->{ _id, name, "slug": slug.current }
`;

// Full projection for the product detail page.
const productFullFields = groq`
  ${productCardFields},
  description,
  benefits,
  howToUse,
  variants[]{ _key, label, price },
  seoTitle,
  seoDescription
`;

export const allProductsQuery = groq`
  *[_type == "product"] | order(coalesce(featured, false) desc, name asc) {
    ${productCardFields}
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(name asc)[0...8] {
    ${productCardFields}
  }
`;

export const bestSellerProductsQuery = groq`
  *[_type == "product" && bestSeller == true] | order(name asc)[0...8] {
    ${productCardFields}
  }
`;

export const apparelProductsQuery = groq`
  *[_type == "product" && productType == "apparel"] | order(name asc)[0...4] {
    ${productCardFields}
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    ${productFullFields}
  }
`;

export const productSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)][].slug.current
`;

export const relatedProductsQuery = groq`
  *[
    _type == "product"
    && slug.current != $slug
    && category._ref == $categoryId
  ] | order(name asc)[0...4] {
    ${productCardFields}
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(coalesce(order, 999) asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    order,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`;

export const featuredCategoriesQuery = groq`
  *[_type == "category"] | order(coalesce(order, 999) asc, name asc)[0...6] {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    brandName,
    whatsappNumber,
    email,
    phoneNumber,
    address,
    instagram,
    facebook,
    youtube,
    announcement
  }
`;
