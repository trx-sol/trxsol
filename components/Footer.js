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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("");

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
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@trxsol.com" },
  ];

  const handleCallClick = (phoneNumber, office) => {
    setSelectedPhone({ number: phoneNumber, office });
    setShowCallDialog(true);
  };

  const confirmCall = () => {
    window.location.href = `tel:${selectedPhone.number}`;
    setShowCallDialog(false);
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-trx-purple/10 via-transparent to-trx-cyan/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Still Confused?{" "}
              <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Contact Us Now
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
              Get in touch with our experts for a free consultation. We&apos;re
              here to help you bring your vision to life.
            </p>

            {/* Contact Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
              <div
                className="bg-black/60 backdrop-blur-sm border-2 border-trx-purple/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-trx-cyan/60 transition-all duration-300 group cursor-pointer transform hover:scale-105"
                onClick={() => handleCallClick("+919876543210", "India Office")}
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-center">
                  India Office
                </h3>
                <p className="text-trx-cyan font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-center">
                  +91 98765 43210
                </p>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg text-center">
                  Delhi NCR, Uttam Nagar
                </p>
                <p className="text-trx-cyan text-xs sm:text-sm mt-1 sm:mt-2 font-medium text-center">
                  Click to call
                </p>
              </div>

              <div
                className="bg-black/60 backdrop-blur-sm border-2 border-trx-purple/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-trx-cyan/60 transition-all duration-300 group cursor-pointer transform hover:scale-105"
                onClick={() => handleCallClick("+15551234567", "USA Office")}
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-center">
                  USA Office
                </h3>
                <p className="text-trx-cyan font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-center">
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg text-center">
                  New York, NY
                </p>
                <p className="text-trx-cyan text-xs sm:text-sm mt-1 sm:mt-2 font-medium text-center">
                  Click to call
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-trx-cyan/30 text-xl"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <a
                href="mailto:hello@trxsol.com"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-trx-purple/40 text-white hover:bg-trx-purple/10 hover:border-trx-cyan/60 font-bold rounded-2xl transition-all duration-300 text-xl"
              >
                <Mail className="w-6 h-6 mr-3" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

      {/* Call Confirmation Dialog */}
      {showCallDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-trx-purple/30 rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Call {selectedPhone.office}?
              </h3>
              <p className="text-gray-400 mb-6">
                Do you want to call {selectedPhone.number}?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowCallDialog(false)}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmCall}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-trx-purple to-trx-cyan text-white rounded-xl hover:from-trx-purple/90 hover:to-trx-cyan/90 transition-all"
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
