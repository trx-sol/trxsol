import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | TRX Sol",
      description:
        "The requested service could not be found. Explore our other professional web design and development services.",
    };
  }

  return {
    title: `${service.title} Services | TRX Sol - Professional ${service.title}`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} services`,
      `${service.title.toLowerCase()} company`,
      "web design",
      "website development",
      "digital marketing",
      "SEO services",
      "India",
      "USA",
      "professional services",
      "digital solutions",
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
      canonical: `https://trxsol.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Services - TRX Sol`,
      description: service.description,
      type: "website",
      locale: "en_US",
      url: `https://trxsol.com/services/${service.slug}`,
      siteName: "TRX Sol",
      images: [
        {
          url: `https://trxsol.com/services/${service.slug}-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} Services - TRX Sol`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@trxsol",
      creator: "@trxsol",
      title: `${service.title} Services - TRX Sol`,
      description: service.description,
      images: [`https://trxsol.com/services/${service.slug}-twitter-image.jpg`],
    },
  };
}

export default function ServiceDetail({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
