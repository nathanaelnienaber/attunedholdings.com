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
    default: "Nathanael Nienaber | Long Term Operator Buyer in Washington",
    template: "%s | Nathanael Nienaber",
  },
  description:
    "Nathanael Nienaber is a former founder, owner and operator, and former Boeing leader acquiring Washington essential service businesses via Attuned Holdings LLC. Fire and life safety, compliance, MSPs, and commercial field services. $1.5M+ deployable capital, SBA pre qualified up to $8M.",
  keywords: [
    "Washington business acquisition",
    "fire and life safety acquisition",
    "compliance services acquisition",
    "MSP acquisition",
    "managed IT services acquisition",
    "commercial field services acquisition",
    "search fund",
    "Attuned Holdings",
    "Nathanael Nienaber",
  ],
  openGraph: {
    title: "Nathanael Nienaber | Long Term Operator Buyer in Washington",
    description:
      "Nathanael Nienaber is a former founder, owner and operator, and former Boeing leader acquiring Washington essential service businesses via Attuned Holdings LLC. Fire and life safety, compliance, MSPs, and commercial field services. $1.5M+ deployable capital, SBA pre qualified up to $8M.",
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
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
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
