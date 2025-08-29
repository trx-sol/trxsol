"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import Form from "./Form";
import HeadText from "./Head-text";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <PageHero
        align="left"
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

      {/* Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <HeadText
              align="left"
              title={"Start Your"}
              title2={"Project"}
              description={
                "Tell us about your project requirements and we'll get back to you with a detailed proposal."
              }
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-black/50 border border-trx-purple/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-400 mb-6">
                Reach out via call, WhatsApp, or email. We usually respond
                within a few hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-trx-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <div className="text-trx-cyan">
                      <a
                        href="tel:+919315996085"
                        className="hover:underline block"
                      >
                        +91 9315996085 (India)
                      </a>
                      {/* <a
                        href="tel:+15551234567"
                        className="hover:underline block"
                      >
                        +1 (555) 123-4567 (USA)
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-trx-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/919315996085"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-trx-cyan hover:underline"
                    >
                      Chat on WhatsApp (India)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-trx-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:trxsol25@gmail.com"
                      className="text-trx-cyan hover:underline"
                    >
                      trxsol25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-trx-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">Uttam Nagar, Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <Form align="left" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="relative h-[400px] max-w-7xl mx-auto rounded-xl overflow-hidden mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.563149319496!2d77.2271198!3d28.612912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628151876979!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0 "

          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-[calc(100%-theme(spacing.4))]">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-trx-cyan mt-1" />
            <div>
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-300">India Gate, New Delhi</p>
              <p className="text-gray-300">Delhi, 110001, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
