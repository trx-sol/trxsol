export default function sitemap() {
  const baseUrl = "https://trxsol.com";
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages
  const services = [
    "website-designing",
    "digital-marketing",
    "graphic-designing",
    "app-development",
    "seo-optimization",
    "social-media-management",
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Portfolio project pages (example projects)
  const portfolioProjects = [
    "ecommerce-website",
    "corporate-website",
    "mobile-app",
    "branding-project",
    "digital-marketing-campaign",
    "web-application",
    "ui-ux-design",
    "seo-optimization-project",
  ];

  const portfolioPages = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog post pages (example blog posts)
  const blogPosts = [
    "website-design-trends-2024",
    "seo-best-practices",
    "digital-marketing-strategies",
    "mobile-app-development-guide",
    "graphic-design-tips",
    "social-media-marketing",
    "cybersecurity-tips",
    "web-development-trends",
    "ui-ux-design-principles",
    "content-marketing-strategy",
    "responsive-web-design",
    "ecommerce-optimization",
    "brand-identity-design",
    "local-seo-strategies",
    "social-media-advertising",
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine all pages
  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages];
}
