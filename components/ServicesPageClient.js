"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Star,
  Monitor,
  Target,
  Palette,
  Smartphone,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import servicesData from "@/data/services.json";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";
import HeadText from "./Head-text";

export default function ServicesPageClient() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      <div className="min-h-screen bg-black relative overflow-hidden">
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

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <HeadText
                title={"Our"}
                title2={"Services"}
                description={
                  "Comprehensive digital solutions to transform your business and boost your online presence"
                }
              />
            </div>
          </section>

          {/* Services Grid */}
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => {
                  const IconComponent = getIconComponent(service.icon);
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/services/${service.slug}`}>
                        <Card className="h-full bg-black/40 backdrop-blur-sm border-trx-purple/20 hover:border-trx-cyan/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
                          <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-white group-hover:text-trx-cyan transition-colors">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
                              {service.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < service.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                              <ArrowRight className="w-5 h-5 text-trx-cyan group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-3xl p-8 sm:p-12 border border-trx-purple/20"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and discover how our expert team can
                  help you achieve your digital goals
                </p>
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Button>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      <ConsultationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
