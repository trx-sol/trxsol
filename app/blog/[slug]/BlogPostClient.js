"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, User, Tag } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";

export default function BlogPostClient({ blog }) {
    if (!blog) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl text-white mb-4">Blog post not found</h1>
                    <Link
                        href="/blog"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(blog.publish_info.date_published).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <StructuredData data={blog.schema_ld} />

            <article className="min-h-screen bg-black">
                {/* Themed Blog Banner (no blog image) */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-trx-purple via-black to-trx-cyan"
                >
                    {/* Optional: Add a SVG or icon for visual interest */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none select-none flex items-center justify-center">
                        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="160" cy="160" r="120" fill="#06b6d4" fillOpacity="0.15" />
                            <circle cx="160" cy="160" r="80" fill="#a21caf" fillOpacity="0.12" />
                        </svg>
                    </div>
                    <div className="relative z-10 w-full">
                        <div className="container px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 drop-shadow-lg">
                                {blog.page_info.h1}
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{blog.page_info.reading_time_minutes} min read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{blog.publish_info.author.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Content Section */}
                <section className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {blog.seo.secondary_keywords.map((keyword, index) => (
                                <div
                                    key={index}
                                    className="bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                                >
                                    <Tag className="w-3 h-3" />
                                    {keyword}
                                </div>
                            ))}
                        </div>

                        {/* Introduction */}
                        <div className="prose prose-invert prose-lg max-w-none mb-12">
                            <p className="text-xl text-white/80 leading-relaxed">
                                {blog.content.introduction}
                            </p>
                        </div>

                        {/* Table of Contents if enabled */}
                        {blog.content.table_of_contents && (
                            <nav className="bg-white/5 rounded-lg p-6 mb-12">
                                <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
                                <ul className="space-y-2">
                                    {blog.content.sections.map((section, index) => (
                                        <li key={index}>
                                            <a href={`#section-${index}`} className="text-cyan-500 hover:text-cyan-400 transition-colors">
                                                {section.heading}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}

                        {/* Content Sections */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {blog.content.sections.map((section, index) => (
                                <div key={index} id={`section-${index}`} className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">{section.heading}</h2>
                                    <div className="text-white/80">{section.content}</div>
                                </div>
                            ))}
                        </div>

                        {/* Conclusion */}
                        <div className="prose prose-invert prose-lg max-w-none mt-12">
                            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
                            <p className="text-white/80">{blog.content.conclusion}</p>
                        </div>

                        {/* FAQ Section */}
                        {blog.content.faq && blog.content.faq.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {blog.content.faq.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            className="bg-white/5 rounded-lg p-6"
                                        >
                                            <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                                            <p className="text-white/80">{item.answer}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </section>
            </article>
        </>
    );
}
