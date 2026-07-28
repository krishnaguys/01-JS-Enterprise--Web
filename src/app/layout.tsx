import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/common/Providers";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import EnquiryModal from "@/components/EnquiryModal";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JC Enterprises | Premium Industrial Uniforms & Safety Solutions",
  description:
    "Manufacturer and supplier of corporate uniforms, industrial uniforms, safety shoes, PPE equipment, housekeeping products, and industrial cleaning machines. Affordable • Comfortable • Durable since 2018.",
  keywords: [
    "JC Enterprises",
    "Industrial Uniforms",
    "Corporate Uniforms",
    "Safety Equipment",
    "PPE",
    "Cleaning Machines",
    "Customized T-Shirts",
  ],
  authors: [{ name: "JC Enterprises" }],
  metadataBase: new URL("https://jcenterprises.in"),
  openGraph: {
    title: "JC Enterprises | Premium Industrial Uniforms & Safety Solutions",
    description:
      "Your trusted partner for industrial uniforms, corporate workwear, PPE, and safety equipment in India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html
  lang="en"
  className={`${outfit.variable}`}
  suppressHydrationWarning
>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>

    <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
  <Providers>
    <Header />

    <main className="flex-grow pt-20">
      {children}
    </main>

    <Footer />
    <WhatsAppButton />
    <EnquiryModal />
  </Providers>
</body>
    </html>
  );
}