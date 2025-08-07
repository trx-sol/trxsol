"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ContactForm from "./ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent } from "./ui/card";
import { HelpCircle, MessageCircle, Clock, Shield, Zap } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Website costs vary based on complexity and features. Our basic websites start at ₹15,000, business websites at ₹25,000, and e-commerce solutions at ₹45,000. We provide detailed quotes after understanding your specific requirements. All our packages include hosting setup, SEO optimization, and 3 months of support."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on project complexity. Basic websites take 1-2 weeks, business websites 2-3 weeks, and e-commerce sites 3-4 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes! We offer complete hosting and domain management services. We can help you choose the right hosting plan, set up your domain, and handle all technical configurations. Our hosting packages include SSL certificates, daily backups, and 99.9% uptime guarantee."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach. We ensure your website looks and functions perfectly on all devices - smartphones, tablets, and desktops. This is crucial for SEO and user experience, and it's included in all our packages."
    },
    {
      question: "Do you provide SEO optimization?",
      answer: "Yes, SEO optimization is included in all our website packages. We implement on-page SEO best practices including meta tags, structured data, fast loading speeds, and mobile optimization. We also provide guidance on content optimization and can help with ongoing SEO strategies."
    },
    {
      question: "What kind of support do you provide after launch?",
      answer: "We provide 3 months of free support after launch, including bug fixes, minor updates, and technical assistance. After that, we offer ongoing maintenance packages starting at ₹2,000/month. We're always available to help with any questions or issues you may have."
    },
    {
      question: "Can you help with content creation?",
      answer: "Yes! We offer content creation services including copywriting, image selection, and basic SEO content. We can work with your existing content or create new content that aligns with your brand and business goals. Content creation is available as an add-on service."
    },
    {
      question: "Do you provide training on how to manage my website?",
      answer: "Absolutely! We provide comprehensive training on how to manage your website content, including how to update text, images, and basic functionality. We also provide detailed documentation and video tutorials. Training is included in all our packages."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and regular updates"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and excellent user experience"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Always here to help with any questions or issues"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Frequently Asked <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">Questions</span>
          </>
        }
        subtitle="Find answers to common questions about our website design and development services. Can't find what you're looking for? Contact us directly!"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30">
            <HelpCircle className="w-4 h-4 text-trx-cyan mr-2" />
            <span className="text-sm font-medium text-white">
              Got more questions? We're here to help!
            </span>
          </div>
        </motion.div>
      </PageHero>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white hover:text-trx-cyan text-lg font-medium py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">TRX Sol</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional websites with outstanding service and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're here to help! Contact us directly and we'll get back to you within 24 hours with a detailed response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-trx-purple to-trx-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-trx-cyan/25 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Us
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-trx-cyan hover:text-trx-cyan transition-all duration-300"
              >
                Schedule a Call
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        title="Ready to Get Started?"
        subtitle="Let's discuss your project and answer any remaining questions you might have."
      />
    </div>
  );
}
