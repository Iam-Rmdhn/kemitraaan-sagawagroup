import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemitraan.sagawagroup.id"),
  title: {
    default: "Kemitraan Sagawa Group | Peluang Bisnis F&B",
    template: "%s | Kemitraan Sagawa Group",
  },
  description: "Sagawa Group menawarkan peluang bisnis kemitraan F&B terpercaya. Bergabunglah dengan Kagawa Rice Bowl, Kagawa Coffee Corner, atau RM Nusantara untuk kesuksesan finansial Anda.",
  keywords: [
    "Kemitraan Sagawa Group",
    "Franchise F&B",
    "Bisnis Kuliner",
    "Sagawa Group",
    "Kemitraan Makanan",
    "Peluang Usaha",
    "Kagawa Rice Bowl",
    "Kagawa Coffee",
    "RM Nusantara",
    "Independent Brand",
    "Mas Gaw",
    "Warnas",
    "Warung Selera Nusantara",
    "Masakan Mas Gawa",
    "Franchise Makanan Jepang"
  ],
  authors: [{ name: "Sagawa Group" }],
  creator: "Sagawa Group",
  publisher: "Sagawa Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kemitraan Sagawa Group | Peluang Bisnis F&B",
    description: "Sagawa Group menawarkan peluang bisnis kemitraan F&B terpercaya. Bergabunglah dengan brand kuliner unggulan kami untuk kesuksesan investasi Anda.",
    url: "https://kemitraan.sagawagroup.id",
    siteName: "Sagawa Group Kemitraan",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kemitraan Sagawa Group",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemitraan Sagawa Group | Peluang Bisnis F&B",
    description: "Sagawa Group menawarkan peluang bisnis kemitraan F&B terpercaya. Bergabunglah dengan brand kuliner unggulan kami.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google966956682119dc05",
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
    name: "Sagawa Group Kemitraan",
    url: "https://kemitraan.sagawagroup.id",
    logo: "https://kemitraan.sagawagroup.id/assets/img/kagawa-ricebowl.png",
    description: "Sagawa Group menawarkan peluang bisnis kemitraan F&B terpercaya. Bergabunglah dengan berbagai brand kuliner sukses seperti Kagawa Rice Bowl, Kagawa Coffee Corner, dan RM Nusantara.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-1470-3690",
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: "Indonesian"
    }
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=26740713475517789&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${albertSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '26740713475517789');
              fbq('track', 'PageView');
            `,
          }}
        />
        <ScrollProgress />
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
