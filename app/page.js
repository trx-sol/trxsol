import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientLogosSlider from "@/components/ClientLogosSlider";

export const metadata = {
  title:
    "TRX Sol - Professional Website Design & Development Company | India and USA",
  description:
    "TRX Sol is a premier website design and development company serving India and USA. We offer comprehensive digital solutions including custom website development, SEO optimization, digital marketing, graphic design, and app development. Transform your business with our expert web solutions.",
  keywords: [
    "website design",
    "website development",
    "web design company",
    "digital marketing",
    "SEO services",
    "graphic design",
    "app development",
    "web development India",
    "web design USA",
    "digital agency",
    "IT services",
    "responsive websites",
    "ecommerce websites",
    "corporate websites",
    "mobile app development",
    "social media marketing",
    "content marketing",
    "brand identity design",
    "UI/UX design",
    "modern web development",
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
    canonical: "https://trxsol.com",
  },
  openGraph: {
    title: "TRX Sol - Professional Website Design & Development Company",
    description:
      "Leading website design and development company serving India and USA. Specializing in SEO, digital marketing, graphic design, app development, and modern web solutions.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRX Sol - Website Design & Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "TRX Sol - Website Design & Development Company",
    description:
      "Professional website design and development services in India and USA. SEO, digital marketing, graphic design, and modern web solutions.",
    images: ["https://trxsol.com/home-twitter-image.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <RecentProjectsSection />
      <FAQSection />
      <TestimonialsSection />
      <ClientLogosSlider />
    </main>
  );
}
