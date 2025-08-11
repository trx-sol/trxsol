import BlogPage from "@/components/BlogPage";

export const metadata = {
  title:
    "Blog | TRX Sol - Web Design, Development & Digital Marketing Insights",
  description:
    "Stay updated with the latest trends in web design, development, SEO, and digital marketing. Expert insights, tips, and strategies from TRX Sol's professional team.",
  keywords: [
    "web design blog",
    "website development blog",
    "digital marketing blog",
    "SEO blog",
    "web development tips",
    "digital marketing insights",
    "web design trends",
    "SEO best practices",
    "digital marketing strategies",
    "web development tutorials",
    "IT blog",
    "technology blog",
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
    canonical: "https://trxsol.com/blog",
  },
  openGraph: {
    title: "TRX Sol Blog - Web Design & Development Insights",
    description:
      "Expert insights on web design, development, SEO, and digital marketing. Stay ahead with the latest trends and best practices.",
    type: "website",
    locale: "en_US",
    url: "https://trxsol.com/blog",
    siteName: "TRX Sol",
    images: [
      {
        url: "https://trxsol.com/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRX Sol Blog - Web Design & Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trxsol",
    creator: "@trxsol",
    title: "TRX Sol Blog - Web Design & Development Insights",
    description:
      "Expert insights on web design, development, SEO, and digital marketing. Latest trends and best practices.",
    images: ["https://trxsol.com/blog-twitter-image.jpg"],
  },
};

export default function Blog() {
  return <BlogPage />;
}
