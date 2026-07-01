import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { ProductsBrowser } from "@/components/ProductsBrowser";
import {
  getAllCategories,
  getAllProducts,
  getSiteSettings,
} from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse genuine gym supplements, whey protein, creatine, mass gainers, gym wear, and fitness accessories at Supplement Bank. Filter, search, and enquire on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const [products, categories, settings] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="All Products"
        description="Explore our full range of premium supplements, gym wear, and fitness accessories. Enquire on WhatsApp for availability and delivery."
      />
      <section className="container-page py-12">
        <ProductsBrowser
          products={products}
          categories={categories}
          whatsappNumber={settings?.whatsappNumber}
          initialCategory={category ?? "all"}
        />
      </section>
    </>
  );
}
