import type { Metadata } from "next";

import { LegalContent } from "@/components/LegalContent";
import { PageHeader } from "@/components/PageHeader";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the ${BRAND_NAME} privacy policy to understand how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Introduction",
    body: [
      `This Privacy Policy explains how ${BRAND_NAME} ("we", "us", "our") handles information when you browse our catalogue website and enquire about products through WhatsApp.`,
      "We are a catalogue and enquiry website. We do not sell products online through a cart or payment gateway, and we do not require you to create an account.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Because this is a catalogue site, we collect very little information directly. When you contact us via WhatsApp, phone, or email, you share the details you choose to send us — such as your name, contact number, and the products you're interested in.",
      "Like most websites, we may automatically collect standard technical data (such as browser type and general usage analytics) to keep the site running smoothly and improve your experience.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you share to respond to your enquiries, provide product and availability details, arrange delivery, and offer customer support.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "WhatsApp Communication",
    body: [
      "When you click an enquiry button, you are redirected to WhatsApp with a pre-filled message. Your use of WhatsApp is governed by WhatsApp's own privacy policy and terms.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: [
      "We may use cookies and similar technologies to understand how visitors use our site. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We take reasonable measures to protect any information you share with us. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "Changes To This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have any questions about this Privacy Policy, please reach out to us through the contact details on our Contact page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle your information."
      />
      <LegalContent sections={sections} />
    </>
  );
}
