"use client";

import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Design", href: "/services/website-design" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "E-commerce", href: "/services/ecommerce" },
      { name: "SEO Services", href: "/services/seo" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/#faq" },
    ],
    support: [
      { name: "Help Center", href: "/contact" },
      { name: "Documentation", href: "/contact" },
      { name: "24/7 Support", href: "/contact" },
      { name: "Maintenance", href: "/services/maintenance" },
      { name: "Training", href: "/services/training" },
      { name: "Updates", href: "/contact" },
    ],
    resources: [
      { name: "Case Studies", href: "/portfolio" },
      { name: "Tutorials", href: "/blog" },
      { name: "Free Tools", href: "/contact" },
      { name: "Webinars", href: "/contact" },
      { name: "Guides", href: "/blog" },
      { name: "Newsletter", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@trxsol.com" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast & Secure",
      description: "Lightning-fast websites with top-notch security",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across India and USA",
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Top Section with Features */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-trx-cyan/25">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-trx-purple/10 via-transparent to-trx-cyan/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Confused?{" "}
              <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Contact Us Now
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our experts for a free consultation. We&apos;re
              here to help you bring your vision to life.
            </p>

            {/* Contact Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-black/60 backdrop-blur-sm border border-trx-purple/30 rounded-2xl p-6 hover:border-trx-cyan/50 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  India Office
                </h3>
                <p className="text-trx-cyan font-bold text-2xl mb-1">
                  +91 98765 43210
                </p>
                <p className="text-gray-400 text-sm">Delhi NCR, Uttam Nagar</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-trx-purple/30 rounded-2xl p-6 hover:border-trx-cyan/50 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  USA Office
                </h3>
                <p className="text-trx-cyan font-bold text-2xl mb-1">
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-400 text-sm">New York, NY</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-trx-cyan/30 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="mailto:hello@trxsol.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-trx-purple/40 text-white hover:bg-trx-purple/10 hover:border-trx-cyan/60 font-bold rounded-xl transition-all duration-300 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center shadow-xl shadow-trx-cyan/30">
                <span className="text-white font-bold text-lg">TRX</span>
              </div>
              <div>
                <span className="text-white font-bold text-2xl tracking-wide">
                  TRX Sol
                </span>
                <p className="text-trx-cyan text-sm">Digital Excellence</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-base">
              Premium website design and development company serving India and
              USA. We craft fast, modern, and impactful online experiences for
              businesses worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0 group-hover:text-trx-cyan" />
                <span className="text-sm">hello@trxsol.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 group-hover:text-trx-cyan" />
                <span className="text-sm">
                  Delhi NCR, India & New York, USA
                </span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <Clock className="w-4 h-4 mr-3 flex-shrink-0 group-hover:text-trx-cyan" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center 
                  hover:bg-gradient-to-r hover:from-trx-purple hover:to-trx-cyan 
                  transition-all duration-300 shadow-lg hover:shadow-trx-cyan/30 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-bold mb-6 capitalize text-lg border-b border-trx-purple/30 pb-2">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-trx-cyan transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} TRX Sol. All rights reserved. | Serving India & USA
          </p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-trx-cyan transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-trx-cyan transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-trx-cyan transition-colors text-sm"
            >
              Cookie Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-trx-cyan transition-colors text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
