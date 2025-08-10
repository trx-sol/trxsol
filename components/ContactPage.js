"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import Form from "./Form";

export default function ContactPage() {
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

      {/* Form Section */}
      <section className="py-20 bg-black">
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

          <div className="flex justify-center">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}
