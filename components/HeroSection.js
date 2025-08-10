"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, MapPin } from "lucide-react";
import Form from "./Form";

export default function HeroSection() {
  const features = [
    "Fast-loading websites",
    "SEO Optimized",
    "Mobile Responsive",
    "24/7 Support",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black py-24 lg:py-28 overflow-hidden">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/15 via-transparent to-trx-cyan/15" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-purple/25 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-[30rem] md:h-[30rem] bg-trx-cyan/25 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/40 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-trx-cyan mr-2" />
              <span className="text-sm text-white tracking-wide">
                Serving Clients in India & USA
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl  font-extrabold text-white leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Digital Empire
              </span>{" "}
              with TRX Sol
            </h1>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                At{" "}
                <strong className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                  TRX Sol
                </strong>
                , we design high-performance websites that capture attention and
                drive results.
              </p>
              <p>
                Our team blends creativity, technology, and business strategy to
                create websites that are fast, beautiful, and built to convert.
              </p>
              <p>
                From startups to global brands, we deliver solutions that are
                tailor-made for your audience.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="w-7 h-7 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
