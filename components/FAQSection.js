"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Our typical timeline is 2-4 weeks from start to finish. Basic websites take 1-2 weeks, while complex business websites take 2-3 weeks. E-commerce websites may take 3-4 weeks. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we provide complete hosting and domain services. We offer secure hosting with SSL certificates, daily backups, and 24/7 support. We can also help you choose and register the perfect domain name for your business.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our websites are built with a mobile-first approach. They're fully responsive and work perfectly on all devices - smartphones, tablets, and desktops. This is crucial for SEO and user experience.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes, we include basic SEO optimization with every website. This includes keyword optimization, meta tags, site structure, and performance optimization. We also offer ongoing SEO services to improve your search rankings.",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "After launch, we provide 1-3 months of free support and maintenance. We also offer ongoing maintenance packages that include updates, security monitoring, backups, and technical support. We're always here to help!",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we specialize in website redesigns! We can modernize your existing website, improve its performance, and enhance user experience. We'll analyze your current site and provide recommendations for improvement.",
    },
    {
      question: "Do you provide training for managing the website?",
      answer:
        "Yes, we provide comprehensive training on how to manage your website. This includes content updates, basic maintenance, and using the content management system. We also provide detailed documentation and video tutorials.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with the latest and most advanced technologies in the industry that ensure your website is lightning-fast, highly secure, and built for the future. We carefully select the optimal technology combination for each project to deliver exceptional performance and user experience.",
    },
    {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our website design and development
            services. Can&apos;t find the answer you&apos;re looking for?
            Contact our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-trx-cyan transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
