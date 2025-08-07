"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  const features = [
    "Fast-loading modern websites",
    "Boost visibility with SEO",
    "Mobile responsive designs",
    "24/7 support & consultation",
  ];

  const websiteTypes = [
    { value: "basic", label: "Basic Website" },
    { value: "business", label: "Business Website" },
    { value: "ecommerce", label: "E-Commerce Website" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 lg:pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-trx-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-trx-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8 order-2 xl:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-trx-cyan mr-2" />
              <span className="text-sm font-medium text-white">
                Serving Uttam Nagar & Dwarka
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Build Your Business{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Online
              </span>{" "}
              with TRX Sol
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
            >
              Website Design & Development Company in Uttam Nagar & Dwarka
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-gray-300 text-base lg:text-lg group-hover:text-white transition-colors duration-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              variants={itemVariants}
              className="glass-effect rounded-2xl p-4 lg:p-6 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-lg lg:text-xl text-white font-medium italic text-center">
                &ldquo;A great business starts with a powerful online presence.&rdquo;
              </blockquote>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            >
              <motion.div
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-trx-cyan/25 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm lg:text-base">
                    Call Us
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm">
                    +91 98765 43210
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-trx-cyan/25 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm lg:text-base">
                    Email Us
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm">
                    hello@trxsol.com
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center xl:justify-end order-1 xl:order-2"
          >
            <Card className="glass-effect border-white/10 w-full max-w-md lg:max-w-lg backdrop-blur-sm">
              <CardHeader className="text-center pb-4 lg:pb-6">
                <CardTitle className="text-xl lg:text-2xl font-bold text-white">
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-400 text-sm lg:text-base">
                  Tell us about your project and we&apos;ll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <form className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-white text-sm lg:text-base"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-10 lg:h-12 text-sm lg:text-base"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-white text-sm lg:text-base"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-10 lg:h-12 text-sm lg:text-base"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-white text-sm lg:text-base"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-10 lg:h-12 text-sm lg:text-base"
                      required
                    />
                  </div>

                  {/* Website Type Dropdown */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="website-type"
                      className="text-white text-sm lg:text-base"
                    >
                      Website Type
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-black/30 border-white/20 text-white focus:border-trx-cyan focus:ring-trx-cyan h-10 lg:h-12 text-sm lg:text-base">
                        <SelectValue placeholder="Select website type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-white/20">
                        {websiteTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-white hover:bg-white/10"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Requirements Textarea */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="requirements"
                      className="text-white text-sm lg:text-base"
                    >
                      Your Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan min-h-[80px] lg:min-h-[100px] text-sm lg:text-base"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 group h-10 lg:h-12 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </form>

                {/* Trust Indicators */}
                <div className="text-center space-y-2 pt-2">
                  <p className="text-gray-400 text-xs lg:text-sm">
                    ✓ Free consultation & quote
                  </p>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    ✓ No obligation, no pressure
                  </p>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    ✓ Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-trx-cyan/50 transition-colors duration-300"
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-trx-purple to-trx-cyan rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


