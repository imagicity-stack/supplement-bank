import { ApparelHighlight } from "@/components/home/ApparelHighlight";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { buildGeneralEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import {
  getApparelProducts,
  getBestSellerProducts,
  getFeaturedCategories,
  getFeaturedProducts,
  getSiteSettings,
} from "@/sanity/lib/data";

export default async function HomePage() {
  const [settings, categories, bestSellers, featured, apparel] =
    await Promise.all([
      getSiteSettings(),
      getFeaturedCategories(),
      getBestSellerProducts(),
      getFeaturedProducts(),
      getApparelProducts(),
    ]);

  const whatsappNumber = settings?.whatsappNumber;
  const whatsappHref = buildWhatsAppLink(
    whatsappNumber,
    buildGeneralEnquiryMessage(),
  );

  return (
    <>
      <Hero whatsappHref={whatsappHref} />

      <div className="space-y-20 py-20">
        <FeaturedCategories categories={categories} />

        {bestSellers.length > 0 && (
          <section className="container-page">
            <SectionHeading
              eyebrow="Top Picks"
              title="Best Selling Products"
              description="The products our customers keep coming back for."
              link={{ href: "/products", label: "Shop all products" }}
            />
            <ProductGrid products={bestSellers} whatsappNumber={whatsappNumber} />
          </section>
        )}

        {featured.length > 0 && (
          <section className="container-page">
            <SectionHeading
              eyebrow="Handpicked"
              title="Featured Products"
              description="Curated by our team for quality, value, and results."
              link={{ href: "/products", label: "Shop all products" }}
            />
            <ProductGrid products={featured} whatsappNumber={whatsappNumber} />
          </section>
        )}

        <WhyChooseUs />

        <ApparelHighlight products={apparel} whatsappNumber={whatsappNumber} />

        <WhatsAppBanner href={whatsappHref} />
      </div>
    </>
  );
}
