"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import HeadText from "./Head-text";

const categories = [
  "All",
  "E-commerce",
  "Business",
  "Real Estate",
  "Education",
  "Healthcare",
  "Portfolio",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-commerce Website for Fashion Brand",
      description:
        "A modern, responsive e-commerce platform with advanced product filtering, secure payment integration, and mobile-first design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      image: "/portfolio/fashion.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description:
        "Complete restaurant management solution with online ordering, table reservations, and inventory management.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      category: "Business",
      image: "/portfolio/restaurant.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Real Estate Agency Website",
      description:
        "Professional real estate website with property listings, search functionality, and lead generation forms.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Google Maps"],
      category: "Real Estate",
      image: "/portfolio/realestate.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Educational Platform",
      description:
        "Online learning platform with video courses, progress tracking, and interactive assessments.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "Education",
      image: "/portfolio/education.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Healthcare Appointment System",
      description:
        "Patient appointment booking system with doctor profiles, scheduling, and telemedicine integration.",
      technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
      category: "Healthcare",
      image: "/portfolio/healthcare.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Creative Agency Portfolio",
      description:
        "Stunning portfolio website showcasing creative work with smooth animations and modern design.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      category: "Portfolio",
      image: "/portfolio/agency.jpg",
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <HeadText
            title={"Our"}
            title2={"Portfolio"}
            description={
              "A showcase of projects where creativity meets performance."
            }
          />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-trx-purple to-trx-cyan text-white border-transparent shadow-lg"
                  : "border-gray-700 text-gray-400 hover:border-trx-cyan hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredProjects.map((project) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block relative overflow-hidden rounded-xl group shadow-lg"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-white/10 text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Button */}
        <div className="text-center mt-14">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-trx-purple to-trx-cyan text-white font-semibold shadow-lg hover:shadow-trx-cyan/30 transition-all"
          >
            View All Projects →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
