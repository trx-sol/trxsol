"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Palette, Code, Smartphone, Zap } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Palette,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business, goals, and requirements to create the perfect strategy.",
      details: [
        "Business analysis & consultation",
        "Target audience research",
        "Project scope definition",
        "Timeline & budget planning",
      ],
    },
    {
      step: "02",
      icon: Code,
      title: "Design & Development",
      description:
        "Our expert team creates stunning designs and builds your website with modern technologies.",
      details: [
        "Custom UI/UX design",
        "Responsive development",
        "SEO optimization",
        "Performance optimization",
      ],
    },
    {
      step: "03",
      icon: Smartphone,
      title: "Testing & Launch",
      description:
        "Rigorous testing ensures your website works perfectly across all devices and browsers.",
      details: [
        "Cross-browser testing",
        "Mobile responsiveness",
        "Performance testing",
        "Security audit",
      ],
    },
    {
      step: "04",
      icon: Zap,
      title: "Support & Growth",
      description:
        "Ongoing support and maintenance to keep your website secure, fast, and up-to-date.",
      details: [
        "24/7 technical support",
        "Regular updates",
        "Performance monitoring",
        "Growth strategies",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step process ensures your website is delivered on time,
            within budget, and exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-trx-purple to-trx-cyan"></div>
                )}

                <Card className="glass-effect border-white/10 hover-lift group">
                  <CardHeader className="flex flex-row items-start space-y-0 pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-bold text-trx-cyan mr-2">
                          {step.step}
                        </span>
                        <CardTitle className="text-white text-xl">
                          {step.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-400">
                        {step.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Visual Demo */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">TRX Sol Development</div>
              </div>

              {/* Mock Website Preview */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 rounded-lg p-4">
                  <div className="text-white font-semibold mb-2">
                    Project Timeline
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">
                      2-4 Weeks
                    </div>
                    <div className="text-green-400 text-sm">On Time</div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Average delivery time
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">
                      Design Phase
                    </div>
                    <div className="text-white font-semibold">3-5 Days</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">
                      Development
                    </div>
                    <div className="text-white font-semibold">1-2 Weeks</div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-2">
                    Current Projects
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="text-white">Project {i}</div>
                        <div className="text-trx-cyan">Phase {i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-trx-cyan to-trx-purple rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <ArrowRight className="w-5 h-5 text-trx-cyan" />
          </div>
          <p className="text-gray-400 mt-4">
            Free consultation • No obligation • Quick response
          </p>
        </div>
      </div>
    </section>
  );
}
