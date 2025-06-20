import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Alex Healthcare System",
  description: "Get in touch with Alex Healthcare System for hospital construction, medical equipment, and healthcare infrastructure solutions. Call +91 7002394679 or email alexhealthcare10@gmail.com",
  keywords: [
    "contact Alex Healthcare System",
    "hospital construction contact",
    "medical equipment contact",
    "healthcare infrastructure contact",
    "hospital consultancy contact",
    "modular OT contact",
    "ICU setup contact",
    "medical gas pipeline contact",
    "Northeast India healthcare contact",
    "hospital licensing contact"
  ],
  openGraph: {
    title: "Contact Us - Alex Healthcare System",
    description: "Get in touch with Alex Healthcare System for hospital construction, medical equipment, and healthcare infrastructure solutions.",
    url: "https://www.alexhealthcaresystem.com/contact",
    siteName: "Alex Healthcare System",
    images: [
      {
        url: "/contactu-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Alex Healthcare System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Alex Healthcare System",
    description: "Get in touch with Alex Healthcare System for hospital construction, medical equipment, and healthcare infrastructure solutions.",
    images: ["/contactu-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.alexhealthcaresystem.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 