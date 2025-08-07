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
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-trx-purple/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-trx-cyan/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30"
            >
              <MapPin className="w-4 h-4 text-trx-cyan mr-2" />
              <span className="text-sm font-medium text-white">
                Serving Uttam Nagar & Dwarka
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Build Your Business <span className="gradient-text">Online</span>{" "}
              with TRX Sol
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Website Design & Development Company in Uttam Nagar & Dwarka
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 border border-white/10"
            >
              <blockquote className="text-xl text-white font-medium italic text-center">
                "A great business starts with a powerful online presence."
              </blockquote>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-gray-400 text-sm">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-gray-400 text-sm">hello@trxsol.com</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <Card className="glass-effect border-white/10 w-full max-w-md">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-white">
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-400">
                  Tell us about your project and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan"
                      required
                    />
                  </div>

                  {/* Website Type Dropdown */}
                  <div className="space-y-2">
                    <Label htmlFor="website-type" className="text-white">
                      Website Type
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-black/30 border-white/20 text-white focus:border-trx-cyan focus:ring-trx-cyan">
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
                    <Label htmlFor="requirements" className="text-white">
                      Your Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan min-h-[100px]"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 group h-12 text-lg font-semibold"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="text-center space-y-2">
                  <p className="text-gray-400 text-sm">
                    ✓ Free consultation & quote
                  </p>
                  <p className="text-gray-400 text-sm">
                    ✓ No obligation, no pressure
                  </p>
                  <p className="text-gray-400 text-sm">
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-trx-purple to-trx-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
