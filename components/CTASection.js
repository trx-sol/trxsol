"use client";
import { Button } from "./ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-trx-purple/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-trx-cyan/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30 mb-8">
                <Zap className="w-4 h-4 text-trx-cyan mr-2" />
                <span className="text-sm font-medium text-white">
                  Limited Time Offer
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Build Your{" "}
                <span className="gradient-text">Dream Website</span>?
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of businesses in Uttam Nagar and Dwarka who trust
                TRX Sol to create their powerful online presence. Start your
                project today!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Professional Quality
                    </div>
                    <div className="text-gray-400 text-sm">
                      Modern & responsive design
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      SEO Optimized
                    </div>
                    <div className="text-gray-400 text-sm">
                      Rank higher in searches
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Fast & Secure
                    </div>
                    <div className="text-gray-400 text-sm">
                      Lightning-fast performance
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-4 text-lg font-semibold border-0 group">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Free consultation
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  No obligation
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  24-hour response
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-400">
              SSL certificates, daily backups, and 24/7 security monitoring
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
            <p className="text-gray-400">
              Built for search engines to help you rank higher and get more
              traffic
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-400">
              Optimized for speed with modern technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
