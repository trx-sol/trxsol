"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import HeadText from "./Head-text"
import { projectFetch } from "@/lib/datafatch"
import { useEffect, useState } from "react"

export default function RecentProjectsSection() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectFetch()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <HeadText
            title={"Our Recent"}
            title2={"Projects"}
            description={
              "Explore our latest work showcasing innovative designs and cutting-edge development solutions that drive real business results."
            }
          />
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="glass-effect border border-trx-purple/20 hover:border-trx-cyan/50 hover:shadow-2xl hover:shadow-trx-cyan/10 transition-all duration-500 group bg-black/60 backdrop-blur-md h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Enhanced Project Image */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center bg-gradient-to-r from-trx-purple/90 to-trx-cyan/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Enhanced Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-trx-cyan transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    {/* Enhanced Description */}
                    <p className="text-gray-300 mb-3 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gradient-to-r from-white/10 to-white/5 text-gray-300 px-3 py-1.5 rounded-lg border border-white/10 hover:border-trx-cyan/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced View Project Button */}
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/80 hover:to-trx-cyan/80 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-trx-cyan/25 py-3 text-base font-semibold">
                        View Project
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-trx-cyan/30 group">
              View All Projects
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
