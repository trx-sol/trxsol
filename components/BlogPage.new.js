"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeadText from "./Head-text";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("/blogs.json");
            const data = await response.json();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    const categories = [
        "All",
        "SEO",
        "Web Development",
        "Digital Marketing",
        "E-commerce",
        "Technology"
    ];

    const filteredBlogs = selectedCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.seo.secondary_keywords.includes(selectedCategory));

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <HeadText
                            title="Our"
                            title2="Blog"
                            description="Expert insights and guides to help you grow your business online."
                        />
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-black/50 backdrop-blur-sm border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category === selectedCategory
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
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.seo.slug}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                                    <Link href={`/blog/${blog.seo.slug}`}>
                                        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                                            <Image
                                                src={blog.page_info.featured_image.src}
                                                alt={blog.page_info.featured_image.alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </Link>

                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(blog.publish_info.date_published).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{blog.page_info.reading_time_minutes} min read</span>
                                            </div>
                                        </div>

                                        <Link href={`/blog/${blog.seo.slug}`}>
                                            <h2 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                                                {blog.page_info.h1}
                                            </h2>
                                        </Link>

                                        <p className="text-gray-400 line-clamp-3 mb-4">
                                            {blog.content.introduction}
                                        </p>

                                        <div className="flex items-center justify-between mt-6">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                                                    <Image
                                                        src={blog.publish_info.publisher.logo}
                                                        alt={blog.publish_info.author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-sm">
                                                        {blog.publish_info.author.name}
                                                    </p>
                                                    <p className="text-gray-400 text-xs">
                                                        {blog.publish_info.author.bio.split(" ").slice(0, 3).join(" ")}...
                                                    </p>
                                                </div>
                                            </div>

                                            <Button
                                                variant="link"
                                                className="text-cyan-400 hover:text-cyan-300 p-0"
                                                asChild
                                            >
                                                <Link href={`/blog/${blog.seo.slug}`} className="flex items-center gap-1">
                                                    Read More
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                                            {blog.seo.secondary_keywords.slice(0, 3).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                                                >
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
