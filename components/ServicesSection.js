"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Code,
  Palette,
  Search,
  Smartphone,
  ShoppingCart,
  Settings,
  Zap,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("design");

  const services = {
    design: [
      {
        icon: Palette,
        title: "Custom Website Design",
        description:
          "Unique, modern designs that perfectly represent your brand and engage your audience.",
        features: [
          "Responsive design",
          "Brand integration",
          "User experience focus",
          "Modern aesthetics",
        ],
      },
      {
        icon: Code,
        title: "Web Development",
        description:
          "Fast, secure, and scalable websites built with the latest technologies and best practices.",
        features: [
          "Next.js & React",
          "Performance optimized",
          "SEO friendly",
          "Security focused",
        ],
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description:
          "Websites that look and work perfectly on all devices, from mobile phones to desktops.",
        features: [
          "Mobile responsive",
          "Touch-friendly",
          "Fast loading",
          "Cross-browser compatible",
        ],
      },
    ],
    marketing: [
      {
        icon: Search,
        title: "SEO Optimization",
        description:
          "Improve your search engine rankings and drive more organic traffic to your website.",
        features: [
          "Keyword optimization",
          "Technical SEO",
          "Local SEO",
          "Performance optimization",
        ],
      },
      {
        icon: TrendingUp,
        title: "Digital Marketing",
        description:
          "Comprehensive digital marketing strategies to grow your online presence and reach.",
        features: [
          "Social media marketing",
          "Content marketing",
          "PPC campaigns",
          "Analytics tracking",
        ],
      },
      {
        icon: Users,
        title: "Social Media Management",
        description:
          "Professional social media management to build your brand and engage with customers.",
        features: [
          "Content creation",
          "Community management",
          "Paid advertising",
          "Performance reports",
        ],
      },
    ],
    business: [
      {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
          "Complete online store solutions to sell your products and services online.",
        features: [
          "Payment integration",
          "Inventory management",
          "Order processing",
          "Customer support",
        ],
      },
      {
        icon: Settings,
        title: "Website Maintenance",
        description:
          "Ongoing support and maintenance to keep your website secure, fast, and up-to-date.",
        features: [
          "Regular updates",
          "Security monitoring",
          "Backup services",
          "Performance optimization",
        ],
      },
      {
        icon: Shield,
        title: "Security & Hosting",
        description:
          "Secure hosting solutions with SSL certificates and regular security updates.",
        features: [
          "SSL certificates",
          "Daily backups",
          "Security monitoring",
          "24/7 support",
        ],
      },
    ],
  };

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive website design and development services to help your
            business establish a powerful online presence in Uttam Nagar,
            Dwarka, and beyond.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-white/10 mb-12">
            <TabsTrigger
              value="design"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-trx-purple data-[state=active]:to-trx-cyan data-[state=active]:text-white"
            >
              <Palette className="w-4 h-4 mr-2" />
              Design & Development
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-trx-purple data-[state=active]:to-trx-cyan data-[state=active]:text-white"
            >
              <Search className="w-4 h-4 mr-2" />
              Marketing & SEO
            </TabsTrigger>
            <TabsTrigger
              value="business"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-trx-purple data-[state=active]:to-trx-cyan data-[state=active]:text-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Business Solutions
            </TabsTrigger>
          </TabsList>

          {Object.entries(services).map(([category, categoryServices]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => (
                  <Card
                    key={index}
                    className="glass-effect border-white/10 hover-lift group"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <Zap className="w-12 h-12 text-trx-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives
              results for your business.
            </p>
            <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
