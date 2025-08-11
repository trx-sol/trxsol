"use client";

import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Search, Home, Grid3X3 } from "lucide-react";
import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 sm:p-12 border border-trx-purple/20 bg-black/40 backdrop-blur-sm"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
            >
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Service Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              The service you&apos;re looking for doesn&apos;t exist. Don&apos;t
              worry though, we have plenty of other amazing services that might
              interest you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 group">
                  <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View All Services
                </Button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-trx-purple/30 text-white hover:bg-trx-purple/10 hover:border-trx-cyan/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 group"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-trx-purple/20"
            >
              <p className="text-sm sm:text-base text-gray-400">
                Need help? Contact our support team for assistance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
