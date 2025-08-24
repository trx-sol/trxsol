"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import ConsultationDialog from "@/components/ConsultationDialog";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import FAQSection from "@/components/FAQSection";
import PageHero from "./PageHero";

export default function ServiceDetailClient({ service }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black mt-20">
        <PageHero
          align="left"
          title={
            <>
              {service.title}{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Services
              </span>
            </>
          }
          subtitle={service.description}
        />
        {/* Hero Section */}
        <section className="relative py-24 bg-black overflow-hidden">
          {/* Gradient Background Glow */}
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
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/services"
                className="text-trx-cyan hover:text-trx-purple transition-colors flex items-center group"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span className="group-hover:underline">Back to Services</span>
              </Link>
            </motion.div>

            {/* Service Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm hover:border-trx-cyan/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        What We Offer
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + index * 0.1,
                            }}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle className="w-6 h-6 text-trx-cyan flex-shrink-0 mt-1" />
                            <p className="text-gray-300 leading-relaxed">
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Process Section */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm hover:border-trx-cyan/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Our Process
                      </h2>
                      <div className="space-y-8">
                        {service.process.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + index * 0.1,
                            }}
                            className="flex items-start space-x-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                              <span className="text-white font-bold text-lg">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                {step.title}
                              </h3>
                              <p className="text-gray-300 leading-relaxed text-lg">
                                {step.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Service Info */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm hover:border-trx-cyan/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Service Details
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5">
                          <Star className="w-6 h-6 text-trx-cyan" />
                          <div>
                            <span className="text-gray-300 text-lg">
                              Rating
                            </span>
                            <div className="flex items-center space-x-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < service.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-600"
                                    }`}
                                />
                              ))}
                              <span className="text-white font-semibold ml-2">
                                {service.rating}/5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="glass-effect border-0 bg-gradient-to-br from-trx-purple/30 via-black/60 to-trx-cyan/30 shadow-2xl rounded-2xl transition-all duration-300">
                    <CardContent className="p-10 text-center flex flex-col items-center">
                      <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
                        Ready to Get Started?
                      </h3>
                      <p className="text-gray-200 mb-8 text-lg leading-relaxed max-w-xl">
                        Let&apos;s discuss your project and create something amazing together. Our experts are ready to help you grow.
                      </p>
                      <Link href="/contact" passHref legacyBehavior>
                        <Button
                          as="a"
                          className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-trx-cyan/25 focus:ring-4 focus:ring-trx-cyan/40 focus:outline-none"
                        >
                          Get Free Consultation
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Recent Projects Section */}
        <RecentProjectsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Consultation Dialog */}
        <ConsultationDialog
          open={isConsultationOpen}
          onOpenChange={setIsConsultationOpen}
        />
      </div>
    </>
  );
}
