"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Palette, Code, Rocket } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Info Gathering",
      description:
        "Need detailed information on your business vision and goals",
      icon: Target,
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We will help you to decide what technologies or languages should be implemented.",
      icon: CheckCircle,
    },
    {
      number: "03",
      title: "Design",
      description: "It&apos;s time to set the look and feel of your website.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Development",
      description:
        "Writing a valid code that conforms to current web standards.",
      icon: Code,
    },
    {
      number: "05",
      title: "Testing And Launch",
      description: "Checking the complete functionality of Website etc.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-cyan/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It&apos;s{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Going?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We start by understanding your requirement and vision to Design and
            Develop a Website in Delhi that is tailored to your specific needs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative group">
                <Card className="glass-effect border border-trx-purple/20 hover:border-trx-cyan/40 hover:shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300 bg-black/40 backdrop-blur-sm h-full overflow-hidden">
                  <CardContent className="p-8 relative z-10">
                    {/* Large Background Number */}
                    <div className="absolute top-4 right-4 text-8xl md:text-9xl font-bold text-trx-purple/10 group-hover:text-trx-cyan/15 transition-colors duration-300">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-trx-cyan transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
