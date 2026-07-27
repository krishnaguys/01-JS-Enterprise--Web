import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import "@/styles/variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise Portfolio",
  description: "Professional enterprise portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}