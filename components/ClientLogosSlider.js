"use client";
import { useEffect, useState } from "react";
import HeadText from "./Head-text";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Code,
  Smartphone,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ClientLogosSlider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("features-section");
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed with 99.9% uptime guarantee and blazing fast loading times",
      benefits: [
        "CDN Integration",
        "Image Optimization",
        "Caching System",
        "Minified Code",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade security with SSL certificates and advanced protection systems",
      benefits: [
        "SSL Encryption",
        "Regular Backups",
        "DDoS Protection",
        "Firewall Security",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Modern Technology Stack",
      description:
        "Built with cutting-edge technologies for maximum scalability and performance",
      benefits: [
        "React/Next.js",
        "Node.js Backend",
        "Cloud Hosting",
        "Database Optimization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive design that works perfectly on all devices and screen sizes",
      benefits: [
        "Progressive Web App",
        "Touch Optimized",
        "Fast Loading",
        "Cross-Platform",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide accessibility with multi-language support and international SEO",
      benefits: [
        "Multi-Language",
        "International SEO",
        "Global CDN",
        "24/7 Monitoring",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Award-winning design and development with attention to every detail",
      benefits: [
        "Custom Design",
        "Quality Assurance",
        "Performance Testing",
        "User Experience",
      ],
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black border-y border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,59,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <HeadText
            title={"Our Core "}
            title2={"Capabilities"}
            description={
              "We deliver exceptional results with cutting-edge technology, unmatched support, and proven expertise that sets us apart from the competition."
            }
          />
        </div>

        {/* Enhanced Features Grid */}
        <div
          id="features-section"
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Main Card */}
              <div className="premium-glass rounded-2xl p-6 h-full hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-trx-purple/30 relative z-10">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-trx-cyan transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-trx-cyan" />
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/5 to-trx-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-trx-cyan to-trx-purple rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-glass {
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .premium-glass {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
