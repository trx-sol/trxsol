"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";
import HeadText from "./Head-text";

export default function BlogPreviewSection() {
  const blogPosts = [
    {
      title: "10 Essential SEO Tips for Local Businesses in 2024",
      excerpt:
        "Learn the latest SEO strategies to improve your local search rankings and drive more customers to your business in Uttam Nagar and Dwarka.",
      category: "SEO",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "📊",
      featured: true,
    },
    {
      title: "Why Mobile-First Design is Crucial for Your Business",
      excerpt:
        "Discover how mobile-first design can significantly improve your website's performance and user experience across all devices.",
      category: "Design",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "📱",
    },
    {
      title: "E-commerce Trends That Will Dominate 2024",
      excerpt:
        "Explore the latest e-commerce trends and how they can help your online store grow and succeed in the competitive market.",
      category: "E-commerce",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "🛒",
    },
    {
      title: "How to Choose the Right Website Design for Your Business",
      excerpt:
        "A comprehensive guide to selecting the perfect website design that matches your brand and appeals to your target audience.",
      category: "Design",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      image: "🎨",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HeadText
            title={"Latest"}
            title2={"Insights & Tips"}
            title3={""}
            description={
              "Stay updated with the latest trends in web design, SEO, and digital marketing. Expert tips to help your business grow online."
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-white/10 hover-lift group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-trx-purple to-trx-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm ml-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                  </div>

                  <CardTitle className="text-white text-2xl lg:text-3xl mb-4 group-hover:text-trx-cyan transition-colors">
                    {blogPosts[0].title}
                  </CardTitle>

                  <CardDescription className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                    <Button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white border-0 group/btn">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-8xl">{blogPosts[0].image}</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Regular Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="glass-effect border-white/10 hover-lift group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-trx-purple/20 to-trx-cyan/20 text-trx-cyan px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-trx-purple/10 to-trx-cyan/10 rounded-lg p-6 flex items-center justify-center mb-4">
                  <div className="text-4xl">{post.image}</div>
                </div>

                <CardTitle className="text-white text-xl group-hover:text-trx-cyan transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
