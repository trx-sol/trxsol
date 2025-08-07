"use client";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
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

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses
            in Delhi NCR achieve their digital goals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
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

        {/* View All Projects Button */}
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
            View All Projects
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
      </div>
    </section>
  );
}
