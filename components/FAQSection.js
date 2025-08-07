"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
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
      "TRX Sol employs enterprise-grade security measures including multi-signature wallets, cold storage solutions, and regular security audits. Our platform has never been compromised and maintains the highest security standards.",
  },
  {
    question: "What are the transaction fees on TRX Sol?",
    answer:
      "TRX Sol offers some of the lowest transaction fees in the industry, typically less than $0.01 per transaction. This makes it ideal for micro-transactions and high-frequency trading.",
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
      "Getting started is easy! Simply create a wallet, purchase TRX tokens, and you're ready to explore our DeFi ecosystem. Our user-friendly interface makes it simple for beginners and experts alike.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about TRX Sol and our revolutionary
            blockchain platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-trx-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Contact Support
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
