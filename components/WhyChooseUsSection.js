"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Palette, Award } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Team of expert website designers",
      description:
        "We are proud to have a team of expert website designers in Delhi, who are excellent at creating stunning websites and aware of cutting-edge innovation and technology. With their passion for creativity and great experience, they craft websites that are not only visually stunning but also highly functional and user-friendly.",
    },
    {
      icon: Palette,
      title: "Customized Website Designing Solutions",
      description:
        "A trusted web designing company in Delhi, TRX Sol offers customized website designing solutions in Delhi that reflect your brand identity. With attention to detail and a focus on user experience, we create visually stunning website Designs in Delhi that attract and convert visitors into customers.",
    },
    {
      icon: Award,
      title: "Proven track record and customer satisfaction",
      description:
        "We are a leading website designing company in Delhi. Our proven track record and unwavering commitment to customer satisfaction speak for themselves. With years of experience in the industry, TRX Sol has built a reputation for delivering top-notch website design and developing solutions in Delhi that cater to the diverse needs of businesses and organizations across various sectors.",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-purple/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-cyan/20 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover what makes TRX Sol the preferred choice for businesses
            seeking exceptional web design and development solutions.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect border border-trx-purple/20 hover:border-trx-cyan/40 hover:shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300 group bg-black/40 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-trx-cyan transition-colors">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
