"use client";

import { motion } from "framer-motion";
import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import HeadText from "./Head-text";

export default function FAQSection() {
  const [openItem, setOpenItem] = React.useState("1");

  const faqs = [
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer:
        "Our typical timeline is 2-4 weeks from start to finish. Basic websites take 1-2 weeks, while complex business websites take 2-3 weeks. E-commerce websites may take 3-4 weeks. We'll provide a detailed timeline during our consultation.",
    },
    {
      id: 2,
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we provide complete hosting and domain services. We offer secure hosting with SSL certificates, daily backups, and 24/7 support. We can also help you choose and register the perfect domain name for your business.",
    },
    {
      id: 3,
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our websites are built with a mobile-first approach. They're fully responsive and work perfectly on all devices - smartphones, tablets, and desktops. This is crucial for SEO and user experience.",
    },
    {
      id: 4,
      question: "Do you provide SEO services?",
      answer:
        "Yes, we include basic SEO optimization with every website. This includes keyword optimization, meta tags, site structure, and performance optimization. We also offer ongoing SEO services to improve your search rankings.",
    },
    {
      id: 5,
      question: "What happens after the website is launched?",
      answer:
        "After launch, we provide 1-3 months of free support and maintenance. We also offer ongoing maintenance packages that include updates, security monitoring, backups, and technical support. We're always here to help!",
    },
    {
      id: 6,
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we specialize in website redesigns! We can modernize your existing website, improve its performance, and enhance user experience. We'll analyze your current site and provide recommendations for improvement.",
    },
    {
      id: 7,
      question: "Do you provide training for managing the website?",
      answer:
        "Yes, we provide comprehensive training on how to manage your website. This includes content updates, basic maintenance, and using the content management system. We also provide detailed documentation and video tutorials.",
    },
    {
      id: 8,
      question: "What technologies do you use?",
      answer:
        "We work with the latest and most advanced technologies in the industry that ensure your website is lightning-fast, highly secure, and built for the future. We carefully select the optimal technology combination for each project to deliver exceptional performance and user experience.",
    },
    {
      id: 9,
      question: "Do you work with clients outside India and USA?",
      answer:
        "Yes, we work with clients across India and USA and beyond. While we're based in India and USA, we can serve clients anywhere through online consultations, video calls, and remote project management.",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HeadText
            title={"Frequently Asked"}
            title2={"Questions"}
            description={
              "Everything you need to know about our website design and development services. Can't find the answer you're looking for? Contact our team."
            }
          />
        </motion.div>

        {/* FAQ Chat-like Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="p-4">
            <Accordion.Root
              type="single"
              collapsible
              value={openItem || ""}
              onValueChange={(value) => setOpenItem(value)}
            >
              {faqs.map((item) => (
                <Accordion.Item
                  value={item.id.toString()}
                  key={item.id}
                  className="mb-2"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                      <div
                        className={cn(
                          "relative flex items-center space-x-2 rounded-xl p-4 transition-colors w-full max-w-2xl",
                          openItem === item.id.toString()
                            ? "bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 text-white border border-trx-purple/30"
                            : "bg-white/5 hover:bg-white/10 border border-white/10",
                          "text-white"
                        )}
                      >
                        <span className="font-medium text-lg">
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={cn(
                          "text-gray-400 transition-colors",
                          openItem === item.id.toString() && "text-trx-cyan"
                        )}
                      >
                        {openItem === item.id.toString() ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content asChild forceMount>
                    <motion.div
                      initial="collapsed"
                      animate={
                        openItem === item.id.toString() ? "open" : "collapsed"
                      }
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-7 mt-1 md:ml-16">
                        <div className="relative max-w-2xl rounded-2xl bg-gradient-to-r from-trx-purple to-trx-cyan px-6 py-4 text-white shadow-lg">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
