"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Users, TrendingUp, Lock } from "lucide-react";
import { Section } from "./Section";

const steps = [
  {
    icon: Shield,
    title: "Secure Setup",
    description:
      "Create your secure wallet and connect to the TRX Sol network with enterprise-grade security.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience transactions that complete in milliseconds with our optimized blockchain technology.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Cross-Chain Bridge",
    description:
      "Seamlessly transfer assets between different blockchains using our advanced bridge technology.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "DeFi Ecosystem",
    description:
      "Access a comprehensive suite of DeFi tools including staking, lending, and yield farming.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Smart Trading",
    description:
      "Execute complex trading strategies with our advanced DEX and automated trading features.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Lock,
    title: "Governance",
    description:
      "Participate in platform governance and earn rewards by staking your TRX tokens.",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function HowItWorksSection() {
  return (
    <Section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How TRX Sol Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of blockchain technology with our
            revolutionary platform that combines speed, security, and
            scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-trx-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-trx-purple to-trx-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center text-trx-cyan font-semibold">
                  <span>Learn More</span>
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 rounded-2xl p-8 border border-trx-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of
              blockchain technology with TRX Sol
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Start Trading
              </button>
              <button className="border border-trx-cyan text-trx-cyan hover:bg-trx-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
