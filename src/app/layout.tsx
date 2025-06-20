import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialContact from "@/components/SocialContact";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Alex Healthcare System - Hospital Construction & Healthcare Infrastructure",
    template: "%s | Alex Healthcare System"
  },
  description: "Alex Healthcare System is your trusted partner in hospital construction and healthcare infrastructure development across Northeast India. Turnkey solutions for hospitals, clinics, modular OTs, ICU setups, and medical gas systems.",
  keywords: [
    "hospital construction",
    "healthcare infrastructure",
    "modular OT setup",
    "ICU setup",
    "medical gas pipeline",
    "hospital equipment",
    "healthcare facilities",
    "hospital licensing",
    "Northeast India hospitals",
    "turnkey hospital solutions",
    "medical equipment supply",
    "hospital compliance support"
  ],
  authors: [{ name: "Alex Healthcare System" }],
  creator: "Alex Healthcare System",
  publisher: "Alex Healthcare System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.alexhealthcaresystem.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.alexhealthcaresystem.com',
    siteName: 'Alex Healthcare System',
    title: 'Alex Healthcare System - Hospital Construction & Healthcare Infrastructure',
    description: 'Trusted partner in hospital construction and healthcare infrastructure development across Northeast India. Turnkey solutions for hospitals, clinics, modular OTs, and ICU setups.',
    images: [
      {
        url: '/alex.png',
        width: 1200,
        height: 630,
        alt: 'Alex Healthcare System - Hospital Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Healthcare System - Hospital Construction & Healthcare Infrastructure',
    description: 'Trusted partner in hospital construction and healthcare infrastructure development across Northeast India.',
    images: ['/alex.png'],
    creator: '@alexhealthcare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7b2e4f473fac9a70',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/alex.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="7b2e4f473fac9a70" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alex Healthcare System",
              "url": "https://www.alexhealthcaresystem.com",
              "logo": "https://www.alexhealthcaresystem.com/alex.png",
              "description": "Alex Healthcare System is your trusted partner in hospital construction and healthcare infrastructure development across Northeast India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No. 06, Jayanagar Road, Six Mile",
                "addressLocality": "Guwahati",
                "addressRegion": "Assam",
                "postalCode": "781022",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7002394679",
                "contactType": "customer service",
                "email": "alexhealthcare10@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/alexhealthcare",
                "https://www.linkedin.com/company/alex-healthcare-system"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 26.1445,
                  "longitude": 91.7362
                },
                "geoRadius": "500000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Healthcare Infrastructure Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hospital Construction",
                      "description": "Complete hospital building projects from concept to commissioning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Modular Theatres",
                      "description": "Modular OT setup and surgical spaces"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gas Systems",
                      "description": "Medical gas pipeline installation and plants"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Critical Care",
                      "description": "ICU setup and monitoring infrastructure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Medical Equipment",
                      "description": "Hospital furniture and surgical goods"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compliance Support",
                      "description": "Hospital licensing and regulatory services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
        <SocialContact />
      </body>
    </html>
  );
}
