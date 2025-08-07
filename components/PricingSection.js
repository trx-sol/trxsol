"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic Website",
      icon: Star,
      description: "Perfect for small businesses and startups",
      price: { monthly: 25000, annual: 25000 },
      features: [
        "5 Pages Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
        "Basic Analytics",
        "Social Media Integration",
        "Free Domain & Hosting (1 Year)",
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Business Website",
      icon: Zap,
      description: "Ideal for growing businesses and established brands",
      price: { monthly: 55000, annual: 55000 },
      features: [
        "10 Pages Website",
        "Advanced UI/UX Design",
        "E-commerce Integration",
        "Advanced SEO Package",
        "Blog Section",
        "3 Months Support",
        "Google Analytics Pro",
        "Content Management System",
        "Performance Optimization",
        "Free Domain & Hosting (1 Year)",
      ],
      cta: "Get Started",
      popular: true,
      gradient: "from-trx-purple to-trx-cyan",
    },
    {
      name: "Premium Website",
      icon: Crown,
      description: "Complete digital transformation for enterprise clients",
      price: { monthly: 95000, annual: 95000 },
      features: [
        "Unlimited Pages",
        "Custom E-commerce Platform",
        "Premium SEO Package",
        "Digital Marketing Campaign",
        "6 Months Support",
        "Advanced Analytics Dashboard",
        "Custom Integrations",
        "Priority Support 24/7",
        "Performance Monitoring",
        "Security Hardening",
        "Free Domain & Hosting (1 Year)",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your business needs. All packages
            include hosting, domain, and support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-white" : "text-gray-400"
              }`}
            >
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual
                  ? "bg-gradient-to-r from-trx-purple to-trx-cyan"
                  : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Monthly Payment <span className="text-trx-cyan">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative glass-effect border-white/10 hover-lift group ${
                plan.popular ? "ring-2 ring-trx-cyan ring-opacity-50" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-trx-purple to-trx-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${plan.gradient} opacity-20 blur-sm`}
              ></div>
              <div className="relative">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        ₹
                        {isAnnual
                          ? Math.round(plan.price.annual * 0.8)
                          : plan.price.monthly}
                      </span>
                      {isAnnual && (
                        <span className="text-gray-400 ml-2">/month</span>
                      )}
                    </div>
                    {!isAnnual && (
                      <p className="text-gray-400 text-sm mt-1">
                        One-time payment
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 text-trx-cyan mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0"
                        : "bg-transparent border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              Custom websites and enterprise solutions for large organizations
              with specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0">
                Contact Sales
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
