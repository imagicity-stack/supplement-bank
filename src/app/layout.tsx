import type { Metadata } from "next";

import { BRAND_NAME } from "@/lib/constants";
import { siteUrl } from "@/sanity/env";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Supplement Bank | Genuine Gym Supplements and Fitness Apparel",
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Shop genuine gym supplements, whey protein, creatine, mass gainers, gym wear, and fitness accessories from Supplement Bank.",
  keywords: [
    "gym supplements",
    "whey protein",
    "creatine",
    "mass gainer",
    "pre workout",
    "gym wear",
    "fitness accessories",
    "supplement bank",
    "India",
  ],
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    title: "Supplement Bank | Genuine Gym Supplements and Fitness Apparel",
    description:
      "Shop genuine gym supplements, whey protein, creatine, mass gainers, gym wear, and fitness accessories from Supplement Bank.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supplement Bank | Genuine Gym Supplements and Fitness Apparel",
    description:
      "Shop genuine gym supplements, whey protein, creatine, mass gainers, gym wear, and fitness accessories from Supplement Bank.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Global site fonts (applied to every page via the root layout). */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
