import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHogScript from "@/components/PostHogScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lanehbsllc.com"),
  title: {
    default: "Lane Home & Business Services LLC | Expert Contractors in Lake Tapps, WA",
    template: "%s | Lane HBS",
  },
  description:
    "Lane Home and Business Services LLC — your trusted residential and commercial painting, remodeling, renovation, deck, and fence contractors serving Lake Tapps, Enumclaw, Maple Valley, Covington, and the greater Pierce & King County area. Call (253) 414-3937 for a free estimate today.",
  keywords:
    "painting contractor Lake Tapps, Lake Tapps contractor, Enumclaw painting, Maple Valley contractor, Covington painting, residential painting, commercial painting, remodeling, renovation, deck building, fence installation, Lane Vanderwaal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lane Home & Business Services LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div className="min-h-screen bg-[#0d0d0d]">
          <PostHogScript />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
