"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function RecentProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "E-Commerce",
      description:
        "Modern e-commerce platform with advanced features, secure payment integration, and mobile-responsive design.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      link: "#",
    },
    {
      title: "Corporate Website",
      category: "Corporate",
      description:
        "Professional corporate website with modern design, SEO optimization, and content management system.",
      image: "/projects/corporate.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Sanity CMS"],
      link: "#",
    },
    {
      title: "Restaurant Website",
      category: "Food & Beverage",
      description:
        "Beautiful restaurant website with online ordering, menu management, and reservation system.",
      image: "/projects/restaurant.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      category: "Portfolio",
      description:
        "Creative portfolio website showcasing work with smooth animations and modern UI/UX design.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
      link: "#",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Recent{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing innovative designs and
            cutting-edge development solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect border border-trx-purple/20 hover:border-trx-cyan/40 hover:shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300 group bg-black/40 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-semibold">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 text-trx-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-trx-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Link href={project.link}>
                    <Button className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white transition-all duration-300 hover:scale-105">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
