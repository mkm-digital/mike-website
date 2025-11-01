import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["300", "400", "500"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title:
    "MkM Digital — 360° Marketing Agency: Strategy, Social Media, Content, Web & SEO",
  description:
    "Premium full-service marketing. Strategy, social media, content creation, web design and SEO for brands in Italy, Romania, and Switzerland.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
