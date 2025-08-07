"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import PortfolioCard from "./PortfolioCard";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-commerce Website for Fashion Brand",
      description:
        "A modern, responsive e-commerce platform with advanced product filtering, secure payment integration, and mobile-first design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      featured: true,
      link: "#",
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description:
        "Complete restaurant management solution with online ordering, table reservations, and inventory management.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      category: "Business",
      featured: false,
      link: "#",
    },
    {
      id: 3,
      title: "Real Estate Agency Website",
      description:
        "Professional real estate website with property listings, search functionality, and lead generation forms.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Google Maps"],
      category: "Real Estate",
      featured: false,
      link: "#",
    },
    {
      id: 4,
      title: "Educational Platform",
      description:
        "Online learning platform with video courses, progress tracking, and interactive assessments.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "Education",
      featured: true,
      link: "#",
    },
    {
      id: 5,
      title: "Healthcare Appointment System",
      description:
        "Patient appointment booking system with doctor profiles, scheduling, and telemedicine integration.",
      technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
      category: "Healthcare",
      featured: false,
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Website for Creative Agency",
      description:
        "Stunning portfolio website showcasing creative work with smooth animations and modern design.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      category: "Portfolio",
      featured: false,
      link: "#",
    },
    {
      id: 7,
      title: "Food Delivery App",
      description:
        "Mobile app for food delivery with real-time tracking, payment integration, and restaurant management.",
      technologies: ["React Native", "Firebase", "Redux", "Google Maps"],
      category: "Mobile App",
      featured: true,
      link: "#",
    },
    {
      id: 8,
      title: "Corporate Website for Tech Company",
      description:
        "Professional corporate website with modern design, blog system, and lead generation features.",
      technologies: ["Next.js", "Contentful", "Tailwind CSS", "Vercel"],
      category: "Corporate",
      featured: false,
      link: "#",
    },
    {
      id: 9,
      title: "Event Management Platform",
      description:
        "Comprehensive event management system with ticketing, registration, and event analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Business",
      featured: false,
      link: "#",
    },
    {
      id: 10,
      title: "Fitness Tracking App",
      description:
        "Mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      technologies: ["React Native", "Firebase", "HealthKit", "Redux"],
      category: "Mobile App",
      featured: false,
      link: "#",
    },
    {
      id: 11,
      title: "Online Banking Dashboard",
      description:
        "Secure banking dashboard with account management, transactions, and financial analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
      category: "Finance",
      featured: true,
      link: "#",
    },
    {
      id: 12,
      title: "Travel Booking Platform",
      description:
        "Comprehensive travel booking platform with hotel reservations, flight booking, and travel packages.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Payment Gateway"],
      category: "Travel",
      featured: false,
      link: "#",
    },
  ];

  const categories = [
    "All",
    "E-commerce",
    "Business",
    "Real Estate",
    "Education",
    "Healthcare",
    "Portfolio",
    "Mobile App",
    "Corporate",
    "Finance",
    "Travel",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Portfolio
            </span>
          </>
        }
        subtitle="Explore our diverse collection of successful projects across various industries and technologies."
      />

      {/* Filter Categories */}
      <section className="py-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-trx-purple to-trx-cyan text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-300 text-lg">
              Showing{" "}
              <span className="text-white font-semibold">
                {filteredProjects.length}
              </span>{" "}
              projects
              {selectedCategory !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="text-trx-cyan font-semibold">
                    {selectedCategory}
                  </span>
                </>
              )}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                category={project.category}
                featured={project.featured}
                link={project.link}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-trx-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-300">
                No projects found in the selected category. Try selecting a
                different category.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300"
              >
                Load More Projects
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Project
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create something
              amazing together. We&apos;re here to help bring your vision to
              life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300"
              >
                Get Free Quote
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-trx-cyan hover:text-trx-cyan transition-all duration-300"
              >
                Schedule a Call
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
