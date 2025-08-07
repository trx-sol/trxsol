"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Eye, Code } from "lucide-react";

export default function PortfolioCard({
  title,
  description,
  technologies,
  image,
  link,
  category = "Web Design",
  featured = false,
}) {
  const cardVariants = {
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
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-all duration-300 overflow-hidden h-full">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/30 to-trx-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/50 text-trx-cyan text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-trx-purple to-trx-cyan text-white text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </motion.div>
              {link && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="pb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-trx-cyan transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Code className="w-4 h-4 text-trx-cyan" />
              <span className="text-xs text-gray-400 font-medium">
                Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="ghost"
              className="w-full bg-gradient-to-r from-trx-purple/10 to-trx-cyan/10 hover:from-trx-purple/20 hover:to-trx-cyan/20 text-white border border-white/10 hover:border-trx-cyan/30 group"
            >
              View Project
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
