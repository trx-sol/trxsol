"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "./ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Globe,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["TRX Sol Office", "Uttam Nagar, New Delhi", "Delhi NCR, India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Mon - Fri: 9:00 AM - 6:00 PM",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@trxsol.com",
        "support@trxsol.com",
        "We reply within 24 hours",
      ],
    },
  ];

  const services = [
    "Website Design & Development",
    "E-commerce Solutions",
    "SEO & Digital Marketing",
    "UI/UX Design",
    "Mobile App Development",
    "Website Maintenance",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
            Let&apos;s Build Something{" "}
            <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Great
            </span>
          </>
        }
        subtitle="Ready to transform your business online? Get in touch with us today and let's discuss your project."
      />

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Services We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services We{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              From concept to launch, we provide comprehensive web solutions for
              businesses of all sizes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-trx-cyan/30 transition-colors duration-300"
                >
                  <span className="text-gray-300 text-sm font-medium">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tell us about your project requirements and we&apos;ll get back to
              you with a detailed proposal.
            </p>
          </motion.div>

          <ContactForm
            title="Get Your Free Quote"
            subtitle="Fill out the form below and we'll contact you within 24 hours to discuss your project."
          />
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Business Hours */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Business Hours
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Emergency Support</span>
                  <span className="text-trx-cyan font-medium">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Location</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-trx-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      TRX Sol Office
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Uttam Nagar, New Delhi
                    </p>
                    <p className="text-gray-300 text-sm">Delhi NCR, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-trx-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Service Areas
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Uttam Nagar, Dwarka, Delhi NCR
                    </p>
                    <p className="text-gray-300 text-sm">
                      Remote projects worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-trx-cyan" />
                    <span className="text-gray-300 text-sm">
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-trx-cyan" />
                    <span className="text-gray-300 text-sm">
                      hello@trxsol.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-trx-cyan" />
                    <span className="text-gray-300 text-sm">
                      WhatsApp: +91 98765 43210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us on the{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Map
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Visit our office in Uttam Nagar, Delhi NCR
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 rounded-2xl border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-trx-cyan mx-auto mb-4" />
              <p className="text-white font-semibold text-lg">
                Interactive Map
              </p>
              <p className="text-gray-300 text-sm">
                Google Maps integration would go here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
