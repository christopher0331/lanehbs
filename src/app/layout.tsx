import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Lane Home & Business Services LLC | Expert Contractors in Lake Tapps, WA",
  description:
    "Lane Home and Business Services LLC — your trusted residential and commercial painting, remodeling, renovation, deck, and fence contractors serving Lake Tapps, Bonney Lake, and the greater Pierce County area. Call (253) 414-3937 for a free estimate today.",
  keywords:
    "painting contractor Lake Tapps, Lake Tapps contractor, Bonney Lake painting, residential painting, commercial painting, remodeling, renovation, deck building, fence installation, Lane Vanderwaal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
