import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BRAND_NAME } from "@/lib/constants";
import { buildGeneralEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { getSiteSettings } from "@/sanity/lib/data";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const brandName = settings?.brandName || BRAND_NAME;
  const whatsappHref = buildWhatsAppLink(
    settings?.whatsappNumber,
    buildGeneralEnquiryMessage(),
  );

  return (
    <>
      <Navbar
        brandName={brandName}
        announcement={settings?.announcement}
        whatsappHref={whatsappHref}
      />
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer settings={settings} brandName={brandName} />
      <FloatingWhatsApp href={whatsappHref} />
    </>
  );
}
