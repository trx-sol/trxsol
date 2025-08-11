import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import servicesData from "@/data/services.json";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata = {
  title:
    "Our Services | TRX Sol - Professional Web Design, Development & Digital Marketing",
  description:
    "Explore TRX Sol's comprehensive digital services including website design, development, SEO, digital marketing, graphic design, and app development. Expert solutions for businesses in India and USA.",
  keywords: [
    "web design services",
    "website development services",
    "digital marketing services",
    "SEO services",
    "graphic design services",
    "app development services",
    "social media management",
    "web development company",
    "digital agency services",
    "IT services India",
    "web design USA",
  ],
  authors: [{ name: "TRX Sol Team" }],
  creator: "TRX Sol",
  publisher: "TRX Sol",
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
  alternates: {
    canonical: "https://trxsol.com/services",
  },
  openGraph: {
    title: "TRX Sol Services - Web Design, Development & Digital Marketing",
    description:
      "Comprehensive digital services including website design, development, SEO, digital marketing, and app development. Serving India and USA with expert solutions.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com/services",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRX Sol Services - Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "TRX Sol Services - Web Design & Development",
    description:
      "Professional web design, development, SEO, and digital marketing services. Expert solutions for India and USA businesses.",
    images: ["https://trxsol.com/services-twitter-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
