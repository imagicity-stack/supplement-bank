import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "details", title: "Details" },
    { name: "flags", title: "Availability & Flags" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        "The URL-friendly version of the name. Click 'Generate' to create it automatically.",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      group: "content",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (₹)",
      type: "number",
      group: "content",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "discountPrice",
      title: "Discount Price (₹)",
      type: "number",
      group: "content",
      description:
        "Optional. If set, this shows as the sale price and the original price is struck through.",
      validation: (rule) =>
        rule.min(0).custom((discount, context) => {
          const price = (context.document?.price as number) ?? 0;
          if (discount != null && discount >= price) {
            return "Discount price should be lower than the regular price.";
          }
          return true;
        }),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Describe the image for accessibility & SEO.",
            }),
          ],
        }),
      ],
      options: { layout: "grid" },
      validation: (rule) => rule.min(1).error("Add at least one image."),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      group: "content",
      rows: 2,
      description: "A one-liner shown on product cards.",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "block" })],
      description: "The detailed product description shown on the product page.",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "string" })],
      description: "List the key benefits, one per line.",
      options: { layout: "tags" },
    }),
    defineField({
      name: "howToUse",
      title: "How To Use",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "block" })],
      description: "Usage / dosage instructions.",
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      group: "details",
      description:
        "E.g. flavours, weights or sizes (Chocolate 1kg, Vanilla 2kg, Size M/L/XL).",
      of: [
        defineArrayMember({
          type: "object",
          name: "variant",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. 'Chocolate 1kg' or 'Size L'",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "price",
              title: "Variant Price (₹)",
              type: "number",
              description: "Optional. Overrides the base price for this variant.",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "price" },
          },
        }),
      ],
    }),
    defineField({
      name: "brand",
      title: "Brand Name",
      type: "string",
      group: "details",
      description: "e.g. Optimum Nutrition, MuscleBlaze, Supplement Bank.",
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      group: "details",
      description:
        "The kind of product — used for filtering & SEO.",
      options: {
        list: [
          { title: "Supplement", value: "supplement" },
          { title: "Gym Wear / Apparel", value: "apparel" },
          { title: "Accessory", value: "accessory" },
          { title: "Shaker / Bottle", value: "shaker" },
        ],
        layout: "radio",
      },
      initialValue: "supplement",
    }),
    defineField({
      name: "availability",
      title: "Availability Status",
      type: "string",
      group: "flags",
      options: {
        list: [
          { title: "In Stock", value: "in_stock" },
          { title: "Out of Stock", value: "out_of_stock" },
          { title: "Pre-Order", value: "pre_order" },
        ],
        layout: "radio",
      },
      initialValue: "in_stock",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      group: "flags",
      description: "Show this product in the 'Featured' section on the home page.",
      initialValue: false,
    }),
    defineField({
      name: "bestSeller",
      title: "Best Seller",
      type: "boolean",
      group: "flags",
      description: "Show this product in the 'Best Sellers' section on the home page.",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description:
        "Custom title for search engines. Leave blank to use the product name.",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      group: "seo",
      rows: 3,
      description:
        "Custom description for search engines. Leave blank to use the short description.",
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: "Price, low to high",
      name: "priceAsc",
      by: [{ field: "price", direction: "asc" }],
    },
    {
      title: "Price, high to low",
      name: "priceDesc",
      by: [{ field: "price", direction: "desc" }],
    },
    {
      title: "Name, A → Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "images.0",
      price: "price",
    },
    prepare({ title, subtitle, media, price }) {
      return {
        title,
        subtitle: [subtitle, price ? `₹${price}` : null]
          .filter(Boolean)
          .join(" · "),
        media,
      };
    },
  },
});
