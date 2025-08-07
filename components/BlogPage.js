"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ContactForm from "./ContactForm";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Elements Every Business Website Needs in 2024",
      excerpt: "Discover the must-have features that will make your business website stand out and convert visitors into customers in today's competitive digital landscape.",
      image: "/api/placeholder/400/250",
      category: "Web Design",
      author: "TRX Sol Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["Web Design", "Business", "UX"]
    },
    {
      id: 2,
      title: "SEO Strategies That Actually Work for Local Businesses",
      excerpt: "Learn proven SEO techniques specifically designed for local businesses in Delhi NCR, including Uttam Nagar and Dwarka area optimization strategies.",
      image: "/api/placeholder/400/250",
      category: "SEO",
      author: "TRX Sol Team",
      date: "March 12, 2024",
      readTime: "7 min read",
      tags: ["SEO", "Local Business", "Marketing"]
    },
    {
      id: 3,
      title: "The Complete Guide to E-commerce Website Development",
      excerpt: "Everything you need to know about building a successful e-commerce website, from choosing the right platform to optimizing for conversions.",
      image: "/api/placeholder/400/250",
      category: "E-commerce",
      author: "TRX Sol Team",
      date: "March 10, 2024",
      readTime: "8 min read",
      tags: ["E-commerce", "Development", "Business"]
    },
    {
      id: 4,
      title: "Mobile-First Design: Why It's Crucial for Your Business",
      excerpt: "Understand why mobile-first design is essential for business success and how to implement it effectively in your website strategy.",
      image: "/api/placeholder/400/250",
      category: "Mobile Design",
      author: "TRX Sol Team",
      date: "March 8, 2024",
      readTime: "6 min read",
      tags: ["Mobile", "Design", "UX"]
    },
    {
      id: 5,
      title: "Website Performance: Speed Up Your Site for Better Rankings",
      excerpt: "Learn how website speed affects your search rankings and discover practical tips to improve your site's performance and user experience.",
      image: "/api/placeholder/400/250",
      category: "Performance",
      author: "TRX Sol Team",
      date: "March 5, 2024",
      readTime: "4 min read",
      tags: ["Performance", "SEO", "Technical"]
    },
    {
      id: 6,
      title: "Content Marketing Strategies for Local Business Growth",
      excerpt: "Discover effective content marketing strategies that can help local businesses in Delhi NCR attract more customers and build brand authority.",
      image: "/api/placeholder/400/250",
      category: "Content Marketing",
      author: "TRX Sol Team",
      date: "March 3, 2024",
      readTime: "9 min read",
      tags: ["Content", "Marketing", "Local Business"]
    }
  ];

  const categories = [
    "All",
    "Web Design",
    "SEO",
    "E-commerce",
    "Mobile Design",
    "Performance",
    "Content Marketing"
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
            Latest <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">Insights</span> & Tips
          </>
        }
        subtitle="Stay updated with the latest trends in web design, SEO, and digital marketing. Expert insights to help your business grow online."
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 border border-trx-purple/30">
            <Tag className="w-4 h-4 text-trx-cyan mr-2" />
            <span className="text-sm font-medium text-white">
              Expert insights for business growth
            </span>
          </div>
        </motion.div>
      </PageHero>

      {/* Categories Filter */}
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
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

      {/* Blog Posts Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-all duration-300 overflow-hidden group h-full">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/30 to-trx-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 text-trx-cyan text-xs font-medium rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-trx-cyan transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full bg-gradient-to-r from-trx-purple/10 to-trx-cyan/10 hover:from-trx-purple/20 hover:to-trx-cyan/20 text-white border border-white/10 hover:border-trx-cyan/30 group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300">
                Load More Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated with <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">Web Trends</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get the latest insights on web design, SEO, and digital marketing delivered to your inbox. No spam, just valuable content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/30 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:border-trx-cyan focus:ring-trx-cyan focus:outline-none"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:shadow-trx-cyan/25 transition-all duration-300">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        title="Need Help with Your Website?"
        subtitle="Let's discuss how we can help you create a website that drives results for your business."
      />
    </div>
  );
}
