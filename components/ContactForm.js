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
import { ArrowRight } from "lucide-react";

export default function ContactForm({ title = "Get Your Free Quote", subtitle = "Tell us about your project and we'll get back to you within 24 hours" }) {
  const websiteTypes = [
    { value: "basic", label: "Basic Website" },
    { value: "business", label: "Business Website" },
    { value: "ecommerce", label: "E-Commerce Website" },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass-effect border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                {title}
              </CardTitle>
              <p className="text-gray-400 text-base md:text-lg">
                {subtitle}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-sm md:text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-12 text-base form-field-focus"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm md:text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-12 text-base form-field-focus"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-sm md:text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan h-12 text-base form-field-focus"
                    required
                  />
                </div>

                {/* Website Type Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="website-type" className="text-white text-sm md:text-base">
                    Website Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-black/30 border-white/20 text-white focus:border-trx-cyan focus:ring-trx-cyan h-12 text-base form-field-focus">
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

                {/* Project Details Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="project-details" className="text-white text-sm md:text-base">
                    Your Project Details
                  </Label>
                  <Textarea
                    id="project-details"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    className="bg-black/30 border-white/20 text-white placeholder-gray-400 focus:border-trx-cyan focus:ring-trx-cyan min-h-[120px] text-base form-field-focus"
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
                    className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 group h-12 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </form>

              {/* Trust Indicators */}
              <div className="text-center space-y-2 pt-4">
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
    </section>
  );
}
