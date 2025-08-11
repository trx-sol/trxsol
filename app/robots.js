export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
    ],
    sitemap: "https://trxsol.com/sitemap.xml",
    host: "https://trxsol.com",
  };
}
