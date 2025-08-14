export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
          '/*?*',

        ],
      },
    ],
    sitemap: 'https://trxsol.in/sitemap.xml',
    host: 'https://trxsol.in',
  };
}
