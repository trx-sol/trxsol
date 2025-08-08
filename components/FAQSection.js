"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Section } from "./Section";

const faqs = [
  {
    question: "What is TRX Sol and how does it work?",
    answer:
      "TRX Sol is a revolutionary blockchain platform that combines the speed and efficiency of Solana with advanced DeFi capabilities. It enables lightning-fast transactions, low fees, and seamless cross-chain interoperability.",
  },
  {
    question: "How secure is the TRX Sol platform?",
    answer:
      "TRX Sol employs enterprise-grade security measures including multi-signature wallets, cold storage solutions, and regular security audits.",
  },
  {
    question: "What are the transaction fees on TRX Sol?",
    answer:
      "TRX Sol offers some of the lowest transaction fees in the industry, typically less than $0.01 per transaction.",
  },
  {
    question: "Can I stake my TRX tokens?",
    answer:
      "Yes! TRX Sol offers multiple staking options with competitive APY rates. You can stake your tokens to earn passive income while helping secure the network.",
  },
  {
    question: "Is TRX Sol compatible with other blockchains?",
    answer:
      "Absolutely! TRX Sol features advanced cross-chain bridges that allow seamless interaction with Ethereum, Bitcoin, and other major blockchains.",
  },
  {
    question: "How do I get started with TRX Sol?",
    answer:
      "Getting started is easy! Simply create a wallet, purchase TRX tokens, and you're ready to explore our DeFi ecosystem.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about TRX Sol.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-trx-cyan transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-trx-cyan" />
                  <h3 className="text-white font-semibold text-base md:text-lg group-hover:text-trx-cyan transition-colors">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-trx-cyan" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-trx-cyan transition-colors" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Still have questions? We’re here to help!
          </p>
          <button className="bg-gradient-to-r from-trx-purple to-trx-cyan px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
            Contact Support
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
