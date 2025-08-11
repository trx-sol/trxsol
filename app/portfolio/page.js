import PortfolioSection from "@/components/PortfolioSection";

export const metadata = {
  title: "Portfolio | TRX Sol - Web Design & Development Projects Showcase",
  description:
    "Explore TRX Sol's impressive portfolio of web design and development projects. See our work in ecommerce websites, corporate sites, mobile apps, and digital marketing campaigns.",
  keywords: [
    "web design portfolio",
    "website development portfolio",
    "web development projects",
    "ecommerce websites",
    "corporate websites",
    "mobile app development",
    "digital marketing projects",
    "web design showcase",
    "development portfolio",
    "IT projects",
    "website examples",
    "project showcase",
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
    canonical: "https://trxsol.com/portfolio",
  },
  openGraph: {
    title: "TRX Sol Portfolio - Web Design & Development Projects",
    description:
      "Showcase of our best web design and development projects. Ecommerce, corporate websites, mobile apps, and digital marketing campaigns.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com/portfolio",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/portfolio-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRX Sol Portfolio - Web Design & Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "TRX Sol Portfolio - Web Design & Development Projects",
    description:
      "Showcase of our best web design and development projects. Ecommerce, corporate websites, and mobile apps.",
    images: ["https://trxsol.com/portfolio-twitter-image.jpg"],
  },
};

export default function Portfolio() {
  return <PortfolioSection />;
}
