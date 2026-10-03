import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { siteContent } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    default: `${siteContent.name} — Calm, Precision Software Engineering Studio`,
    template: `%s · ${siteContent.name}`,
  },
  description: siteContent.description,
  keywords: [
    "Software House",
    "Engineering Studio",
    "Next.js Development",
    "Distributed Systems",
    "Kubernetes",
    "AI Systems Architecture",
    "Design Systems",
    "Cloud Architecture",
  ],
  authors: [{ name: siteContent.name, url: siteContent.url }],
  creator: siteContent.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteContent.url,
    siteName: siteContent.name,
    title: `${siteContent.name} — Software Engineering Studio`,
    description: siteContent.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} — Software Engineering Studio`,
    description: siteContent.description,
    creator: "@oldbutgold_eng",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.name,
    url: siteContent.url,
    description: siteContent.description,
    foundingDate: siteContent.establishedYear,
    email: siteContent.email,
    sameAs: ["https://github.com", "https://twitter.com"],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--color-canvas)] text-[var(--color-frost)] antialiased relative min-h-screen flex flex-col font-sans">
        <SkipLink />
        <BackgroundGrid />
        <Header />
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
