"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Target,
  Monitor,
  Palette,
  Smartphone,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import servicesData from "@/data/services.json";
import ConsultationDialog from "@/components/ConsultationDialog";

export default function ServicesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get first 4 services for the homepage
  const featuredServices = servicesData.slice(0, 4);

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const iconMap = {
      Monitor: Monitor,
      Target: Target,
      Palette: Palette,
      Smartphone: Smartphone,
      Zap: Zap,
      Users: Users,
      Shield: Shield,
    };
    return iconMap[iconName] || Monitor; // Default to Monitor if icon not found
  };

  return (
    <>
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
              Our{" "}
              <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your business
              presence and drive sustainable growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredServices.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className="glass-effect border border-trx-purple/20 hover:border-trx-cyan/40 hover:shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300 group bg-black/40 backdrop-blur-sm h-full cursor-pointer">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg mx-auto">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-trx-cyan transition-colors text-center">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow text-center">
                          {service.shortDescription}
                        </p>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5 text-trx-cyan group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-trx-purple/20 max-w-4xl mx-auto bg-black/40 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Let&apos;s discuss your project and create something amazing
                together.
              </p>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <ConsultationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
