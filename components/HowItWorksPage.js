"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ContactForm from "./ContactForm";
import { MessageSquare, Palette, Rocket, CheckCircle } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discuss",
      subtitle: "Project Discovery",
      description:
        "We start with a comprehensive consultation to understand your business goals, target audience, and project requirements.",
      features: [
        "Free initial consultation",
        "Requirements gathering",
        "Project scope definition",
        "Timeline planning",
      ],
    },
    {
      icon: Palette,
      title: "Design",
      subtitle: "Creative Development",
      description:
        "Our design team creates stunning, user-friendly interfaces that align with your brand and business objectives.",
      features: [
        "Custom UI/UX design",
        "Mobile-first approach",
        "Brand integration",
        "Interactive prototypes",
      ],
    },
    {
      icon: Rocket,
      title: "Deliver",
      subtitle: "Launch & Support",
      description:
        "We build, test, and launch your website with ongoing support and maintenance to ensure optimal performance.",
      features: [
        "Quality assurance testing",
        "SEO optimization",
        "Performance optimization",
        "Ongoing support",
      ],
    },
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
            How We{" "}
            <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Work
            </span>
          </>
        }
        subtitle="Our proven 3-step process ensures your website project is delivered on time, within budget, and exceeds your expectations."
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8 mt-8"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <span className="text-gray-300 font-medium">Discuss</span>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-trx-purple to-trx-cyan"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <span className="text-gray-300 font-medium">Design</span>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-trx-purple to-trx-cyan"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <span className="text-gray-300 font-medium">Deliver</span>
          </div>
        </motion.div>
      </PageHero>

      {/* Process Steps */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon and Number */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center shadow-lg shadow-trx-cyan/25">
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-trx-cyan font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-trx-cyan flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                TRX Sol
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We combine creativity, technical expertise, and proven processes
              to deliver exceptional websites that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Experienced designers and developers dedicated to your success",
                icon: "👥",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing ensures your website works perfectly",
                icon: "✅",
              },
              {
                title: "Ongoing Support",
                description:
                  "We're here to help long after your website launches",
                icon: "🛠️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your website needs and create something amazing together."
      />
    </div>
  );
}
