import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://penny-ahlstrom-portfolio.vercel.app/"),
  title: "Penny Ahlstrom | Portfolio",
  description: "Career portfolio of Penny Ahlstrom",

  openGraph: {
    title: "Penny Ahlstrom | Portfolio",
    description: "Career portfolio of Penny Ahlstrom",
    url: "https://penny-ahlstrom-portfolio.vercel.app/",
    siteName: "Penny Ahlstrom Portfolio",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Penny Ahlstrom | Portfolio",
    description: "Career portfolio of Penny Ahlstrom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}