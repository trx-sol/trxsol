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
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center shadow-lg shadow-trx-cyan/30">
                <span className="text-white font-bold text-sm">TRX</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-wide">
                TRX Sol
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium website design and development company in Uttam Nagar,
              Dwarka, and Delhi NCR. We craft fast, modern, and impactful online
              experiences for businesses.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-400 text-sm hover:text-white transition">
                <Mail className="w-4 h-4 mr-2" />
                hello@trxsol.com
              </div>
              <div className="flex items-center text-gray-400 text-sm hover:text-white transition">
                <MessageCircle className="w-4 h-4 mr-2" />
                +91 98765 43210
              </div>
            </div>

            {/* Social */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center 
                  hover:bg-gradient-to-r hover:from-trx-purple hover:to-trx-cyan 
                  transition-all duration-300 shadow-md hover:shadow-trx-cyan/20"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} TRX Sol. All rights reserved. | Serving Uttam Nagar,
            Dwarka & Delhi NCR
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-trx-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-trx-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-trx-cyan transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
