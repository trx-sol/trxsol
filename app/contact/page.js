import ContactPage from "@/components/ContactPage";

export const metadata = {
  title:
    "Contact Us | TRX Sol - Get Free Consultation for Web Design & Development",
  description:
    "Contact TRX Sol for professional website design and development services. Get free consultation for your digital projects. Serving India and USA with expert web solutions, SEO, and digital marketing services.",
  keywords: [
    "contact TRX Sol",
    "web design consultation",
    "website development quote",
    "digital marketing services",
    "SEO consultation",
    "web development India",
    "web design USA",
    "free consultation",
    "IT services contact",
    "digital agency contact",
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
    canonical: "https://trxsol.com/contact",
  },
  openGraph: {
    title: "Contact TRX Sol - Free Consultation for Web Design & Development",
    description:
      "Get in touch with TRX Sol for expert website design and development services. Free consultation available for businesses in India and USA.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com/contact",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TRX Sol - Web Design & Development Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "Contact TRX Sol - Web Design & Development Consultation",
    description:
      "Contact TRX Sol for professional website design and development services. Free consultation for India and USA clients.",
    images: ["https://trxsol.com/contact-twitter-image.jpg"],
  },
};

export default function Contact() {
  return <ContactPage />;
}
