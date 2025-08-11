import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Sitemap() {
  const siteStructure = {
    main: [
      { name: "Home", href: "/", description: "Welcome to TRX Sol" },
      {
        name: "About Us",
        href: "/about",
        description: "Learn about our company",
      },
      {
        name: "Services",
        href: "/services",
        description: "Our service offerings",
      },
      { name: "Portfolio", href: "/portfolio", description: "View our work" },
      { name: "Blog", href: "/blog", description: "Latest insights and news" },
      {
        name: "Contact",
        href: "/contact",
        description: "Get in touch with us",
      },
    ],
    services: [
      {
        name: "Website Design",
        href: "/services/website-design",
        description: "Custom website design",
      },
      {
        name: "Web Development",
        href: "/services/web-development",
        description: "Full-stack development",
      },
      {
        name: "E-commerce Solutions",
        href: "/services/ecommerce",
        description: "Online store development",
      },
      {
        name: "SEO Services",
        href: "/services/seo",
        description: "Search engine optimization",
      },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Marketing strategies",
      },
      {
        name: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "Mobile application development",
      },
    ],
    legal: [
      {
        name: "Privacy Policy",
        href: "/privacy",
        description: "Data protection information",
      },
      {
        name: "Terms of Service",
        href: "/terms",
        description: "Service terms and conditions",
      },
      {
        name: "Cookie Policy",
        href: "/cookies",
        description: "Cookie usage information",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Sitemap"
        description="Complete overview of our website structure"
      />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Main Pages
                </h2>
                <div className="space-y-4">
                  {siteStructure.main.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold group-hover:text-trx-cyan transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {page.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-trx-cyan transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Services</h2>
                <div className="space-y-4">
                  {siteStructure.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold group-hover:text-trx-cyan transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-trx-cyan transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legal Pages */}
            <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Legal</h2>
                <div className="space-y-4">
                  {siteStructure.legal.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold group-hover:text-trx-cyan transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {page.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-trx-cyan transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm mt-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-4">
                Can&apos;t find what you&apos;re looking for? Contact our
                support team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="mailto:hello@trxsol.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-trx-purple/30 text-white hover:bg-trx-purple/10 hover:border-trx-cyan/50 font-semibold rounded-lg transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
