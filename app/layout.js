import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title:
    "TRX Sol - Professional Website Design & Development Company | India and USA",
  description:
    "TRX Sol is a premier website design and development company serving Uttam Nagar and Dwarka. We offer comprehensive digital solutions including custom website development, SEO optimization, digital marketing, and modern UI/UX design. Our fast, responsive websites are built with cutting-edge technologies to boost your online presence.",
  keywords:
    "website design, website development, SEO services, digital marketing, Uttam Nagar, Dwarka, web design company, UI/UX design, responsive websites, modern web development",
  authors: [{ name: "TRX Sol Team" }],
  creator: "TRX Sol",
  publisher: "TRX Sol",
  robots: "index, follow",
  openGraph: {
    title: "TRX Sol - Professional Website Design & Development Company",
    description:
      "Leading website design and development company in Uttam Nagar and Dwarka. Specializing in SEO, digital marketing, and modern web solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRX Sol - Website Design & Development Company",
    description:
      "Professional website design and development services in Uttam Nagar and Dwarka. SEO, digital marketing, and modern web solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
