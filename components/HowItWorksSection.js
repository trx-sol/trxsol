"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Users, TrendingUp, Lock } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              TRX Sol
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            From secure setup to governance — everything simplified and
            beautifully designed.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-trx-cyan hover:shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <step.icon className="text-white w-7 h-7" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <button className="bg-gradient-to-r from-trx-purple to-trx-cyan text-white px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105 shadow-lg hover:shadow-trx-cyan/30">
            Start Trading
          </button>
        </motion.div>
      </div>
    </section>
  );
}
