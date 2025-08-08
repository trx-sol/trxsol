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
    "Fast-loading websites",
    "SEO Optimized",
    "Mobile Responsive",
    "24/7 Support",
  ];

  const websiteTypes = [
    { value: "basic", label: "Basic Website" },
    { value: "business", label: "Business Website" },
    { value: "ecommerce", label: "E-Commerce Website" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black pt-20 lg:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-trx-purple/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-trx-cyan/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-trx-cyan mr-2" />
              <span className="text-sm text-white">
                Serving Uttam Nagar & Dwarka
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Your Business{" "}
              <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Online
              </span>{" "}
              with TRX Sol
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Website Design & Development Company in Uttam Nagar & Dwarka
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan text-white px-6 py-3 text-lg font-semibold shadow-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-trx-cyan text-white px-6 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-black/40 border-white/10 backdrop-blur-lg shadow-lg w-full max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  Tell us about your project and we'll respond within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-black/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="bg-black/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-black/30 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Website Type</Label>
                    <Select>
                      <SelectTrigger className="bg-black/30 text-white">
                        <SelectValue placeholder="Select website type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black text-white">
                        {websiteTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="req" className="text-white">
                      Requirements
                    </Label>
                    <Textarea
                      id="req"
                      placeholder="Describe your project..."
                      className="bg-black/30 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan text-white py-3"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
