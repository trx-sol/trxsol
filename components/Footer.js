"use client";
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Design", href: "#features" },
      { name: "Web Development", href: "#features" },
      { name: "SEO Services", href: "#features" },
      { name: "E-commerce", href: "#features" },
      { name: "Digital Marketing", href: "#features" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Maintenance", href: "#" },
      { name: "Training", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Tutorials", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Free Tools", href: "#" },
      { name: "Webinars", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@trxsol.com" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TRX</span>
              </div>
              <span className="text-white font-bold text-xl">TRX Sol</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional website design and development company serving Uttam
              Nagar, Dwarka, and Delhi NCR. We create powerful online presences
              for businesses.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                hello@trxsol.com
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                +91 98765 43210
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-trx-purple hover:to-trx-cyan rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-trx-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-trx-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-trx-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-trx-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} TRX Sol. All rights reserved. | Serving Uttam
              Nagar, Dwarka & Delhi NCR
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-trx-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-trx-cyan transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-trx-cyan transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
