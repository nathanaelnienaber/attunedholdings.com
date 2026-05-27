import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { schemaData, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nathanael Nienaber | Acquiring Manufacturing Businesses in WA",
    template: "%s | Nathanael Nienaber",
  },
  description:
    "Nathanael Nienaber, former Boeing leader, is acquiring manufacturing and environmental businesses in Washington State via Attuned Holding. $1M+ ROBS equity ready.",
  keywords: [
    "Washington business acquisition",
    "manufacturing acquisition",
    "environmental services acquisition",
    "search fund",
    "Attuned Holding",
    "Nathanael Nienaber",
  ],
  openGraph: {
    title: "Nathanael Nienaber | Acquiring Manufacturing Businesses in WA",
    description:
      "Nathanael Nienaber, former Boeing leader, is acquiring manufacturing and environmental businesses in Washington State via Attuned Holding.",
    url: site.url,
    siteName: `${site.name} | ${site.entity}`,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
