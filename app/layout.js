import Footer from "@/components/Footer";
import "./globals.css";
import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import FloatingBottomBar from "@/components/FloatingBottomBar";

export const metadata = {
  metadataBase: new URL("https://trxsol.com"),
  title: {
    default:
      "TRX Sol - Professional Website Design & Development Company | India and USA",
    template: "%s | TRX Sol",
  },
  description:
    "TRX Sol is a premier website design and development company serving India and USA. We offer comprehensive digital solutions including custom website development, SEO optimization, digital marketing, graphic design, app development, and modern UI/UX design. Our fast, responsive websites are built with cutting-edge technologies to boost your online presence and drive business growth.",
  keywords: [
    "website design",
    "website development",
    "SEO services",
    "digital marketing",
    "graphic design",
    "app development",
    "UI/UX design",
    "responsive websites",
    "web design company",
    "India",
    "USA",
    "modern web development",
    "ecommerce websites",
    "corporate websites",
    "mobile app development",
    "social media marketing",
    "content marketing",
    "brand identity design",
    "cybersecurity services",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://trxsol.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com",
    siteName: "TRX Sol",
    title: "TRX Sol - Professional Website Design & Development Company",
    description:
      "Leading website design and development company serving India and USA. Specializing in SEO, digital marketing, graphic design, app development, and modern web solutions.",
    images: [
      {
        url: "https://trxsol.com/og-image.jpg",
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
    images: ["https://trxsol.com/twitter-image.jpg"],
  },
  other: {
    "theme-color": "#8B5CF6",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TRX Sol",
    "application-name": "TRX Sol",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>

        <StructuredData />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
        <FloatingBottomBar />
      </body>
    </html>
  );
}
