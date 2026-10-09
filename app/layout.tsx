import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { faqItems, schemaData, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

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
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "Nathanael Nienaber | Long Term Operator Buyer in Washington",
    description:
      "Nathanael Nienaber is a former founder, owner and operator, and former Boeing leader acquiring Washington essential service businesses via Attuned Holdings LLC. Fire and life safety, compliance, MSPs, and commercial field services. $1.5M+ deployable capital, SBA pre qualified up to $8M.",
    url: site.url,
    siteName: `${site.name} | ${site.entity}`,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
