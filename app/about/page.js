import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About Us | TRX Sol - Leading Web Design & Development Company",
  description:
    "Learn about TRX Sol, a premier website design and development company serving India and USA. Discover our mission, team expertise, and commitment to delivering cutting-edge digital solutions that drive business growth.",
  keywords: [
    "about TRX Sol",
    "web design company",
    "website development team",
    "digital agency India",
    "web development USA",
    "IT company Uttam Nagar",
    "professional web designers",
    "experienced developers",
    "digital solutions provider",
    "technology company",
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
    canonical: "https://trxsol.com/about",
  },
  openGraph: {
    title: "About TRX Sol - Professional Web Design & Development Company",
    description:
      "Discover TRX Sol's journey in delivering exceptional website design and development services. Our expert team creates innovative digital solutions for businesses in India and USA.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com/about",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About TRX Sol - Web Design & Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "About TRX Sol - Web Design & Development Company",
    description:
      "Learn about TRX Sol's expertise in website design and development. Serving India and USA with innovative digital solutions.",
    images: ["https://trxsol.com/about-twitter-image.jpg"],
  },
};

export default function About() {
  return <AboutPage />;
}
