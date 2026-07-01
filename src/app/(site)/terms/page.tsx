import type { Metadata } from "next";

import { LegalContent } from "@/components/LegalContent";
import { PageHeader } from "@/components/PageHeader";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions for using the ${BRAND_NAME} catalogue website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      `By accessing and using the ${BRAND_NAME} website, you agree to these Terms & Conditions. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: "About Our Website",
    body: [
      `${BRAND_NAME} is a product catalogue and enquiry website. It is not an online store — there is no shopping cart, online checkout, or payment gateway. All purchases are arranged directly through WhatsApp, phone, or email.`,
    ],
  },
  {
    heading: "Product Information & Pricing",
    body: [
      "We make every effort to display accurate product details, images, and prices. However, prices and availability may change without notice. Final pricing and availability are confirmed at the time of your enquiry.",
      "Product images are for illustration purposes and packaging may vary.",
    ],
  },
  {
    heading: "Enquiries & Orders",
    body: [
      "Clicking an enquiry button starts a conversation on WhatsApp with a pre-filled message. Placing an enquiry does not constitute a confirmed order. Orders are confirmed only after we communicate with you and agree on the product, price, and delivery details.",
    ],
  },
  {
    heading: "Health & Supplement Disclaimer",
    body: [
      "Our products are dietary supplements and fitness products. They are not intended to diagnose, treat, cure, or prevent any disease. Always read the label and consult a qualified healthcare professional before starting any supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      `All content on this website, including logos, text, and images, is the property of ${BRAND_NAME} or its licensors and may not be reproduced without permission.`,
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      `${BRAND_NAME} is not liable for any indirect or consequential damages arising from the use of this website or reliance on its content.`,
    ],
  },
  {
    heading: "Changes To These Terms",
    body: [
      "We may revise these Terms & Conditions at any time. Continued use of the site means you accept the updated terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have any questions about these Terms & Conditions, please contact us using the details on our Contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The rules for using our website."
      />
      <LegalContent sections={sections} />
    </>
  );
}
