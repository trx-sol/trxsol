"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeadText from "./Head-text"
import { projectFetch } from "@/lib/datafatch"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const categories = ["All", "E-commerce", "Business", "Real Estate", "Education", "Healthcare", "Portfolio", "LMS"]

export default function PortfolioSection() {
  const [projects, setProjects] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectFetch()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-28 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <HeadText
            title="Our"
            title2="Portfolio"
            description="A showcase of projects where creativity meets performance, delivering exceptional digital experiences."
          />
        </motion.div>

        {/* Enhanced Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold text-sm ${activeCategory === cat
                ? "bg-gradient-to-r from-trx-purple to-trx-cyan text-white border-transparent shadow-lg shadow-trx-cyan/30"
                : "border-gray-600 text-gray-400 hover:border-trx-cyan hover:text-white hover:shadow-md hover:shadow-trx-cyan/20 bg-black/30 backdrop-blur-sm"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl group shadow-xl shadow-black/50 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-trx-cyan/30"
              >
                {/* Enhanced Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center bg-gradient-to-r from-trx-purple/90 to-trx-cyan/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
                        {project.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 text-xs bg-trx-cyan/20 backdrop-blur-sm text-trx-cyan rounded-full font-medium">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Link */}
                <Link
                  href={project.link}
                  className="absolute inset-0 z-10 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  )
}
