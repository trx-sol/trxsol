export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trxsol.com/#organization",
        name: "TRX Sol",
        url: "https://trxsol.com",
        logo: {
          "@type": "ImageObject",
          url: "https://trxsol.com/logo.png",
          width: 200,
          height: 60,
        },
        description:
          "Professional website design and development company serving India and USA. We offer comprehensive digital solutions including custom website development, SEO optimization, digital marketing, graphic design, and app development.",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Delhi",
          addressLocality: "Uttam Nagar",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@trxsol.com",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.facebook.com/trxsol",
          "https://www.linkedin.com/company/trxsol",
          "https://twitter.com/trxsol",
          "https://www.instagram.com/trxsol",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://trxsol.com/#website",
        url: "https://trxsol.com",
        name: "TRX Sol",
        description: "Professional website design and development company",
        publisher: {
          "@id": "https://trxsol.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://trxsol.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://trxsol.com/#webpage",
        url: "https://trxsol.com",
        inLanguage: "en-US",
        name: "TRX Sol - Professional Website Design & Development Company",
        isPartOf: {
          "@id": "https://trxsol.com/#website",
        },
        about: {
          "@id": "https://trxsol.com/#organization",
        },
        description:
          "Leading website design and development company serving India and USA. Specializing in SEO, digital marketing, graphic design, app development, and modern web solutions.",
      },
      {
        "@type": "Service",
        name: "Website Design & Development",
        description:
          "Custom website design and development services with modern technologies and responsive design",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "Web Design",
        category: "Technology",
      },
      {
        "@type": "Service",
        name: "Digital Marketing",
        description:
          "Comprehensive digital marketing solutions including SEO, social media marketing, and content marketing",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "Digital Marketing",
        category: "Marketing",
      },
      {
        "@type": "Service",
        name: "Graphic Design",
        description:
          "Professional graphic design services including logo design, branding, and marketing materials",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "Graphic Design",
        category: "Design",
      },
      {
        "@type": "Service",
        name: "App Development",
        description:
          "Mobile app development for iOS and Android platforms with modern frameworks",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "Mobile App Development",
        category: "Technology",
      },
      {
        "@type": "Service",
        name: "SEO Optimization",
        description:
          "Search engine optimization services to improve website rankings and organic traffic",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "SEO",
        category: "Marketing",
      },
      {
        "@type": "Service",
        name: "Social Media Management",
        description:
          "Professional social media management and marketing services across all major platforms",
        provider: {
          "@id": "https://trxsol.com/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: "Social Media Marketing",
        category: "Marketing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
