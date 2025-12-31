import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PersonJsonLd, WebsiteJsonLd, BookJsonLd } from "@/components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Andrew David Edwards | Historian of Money and the American Revolution",
    template: "%s | Dr. Andrew David Edwards",
  },
  description:
    "Andrew David Edwards is a historian of Early America, capitalism, and money. Author of Money and the Making of the American Revolution (Princeton University Press).",
  keywords: [
    "Andrew David Edwards",
    "American Revolution",
    "history of money",
    "capitalism history",
    "Princeton University Press",
    "St Andrews",
    "economic history",
  ],
  authors: [{ name: "Andrew David Edwards" }],
  creator: "Andrew David Edwards",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewdavidedwards.com",
    siteName: "Dr. Andrew David Edwards",
    title: "Dr. Andrew David Edwards | Historian of Money and the American Revolution",
    description:
      "Historian of Early America, capitalism, and money. Author of Money and the Making of the American Revolution.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Historicaecon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
        <BookJsonLd />
      </head>
      <body
        className={`${playfair.variable} ${crimson.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
