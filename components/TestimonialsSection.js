"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      company: "Spice Garden, Uttam Nagar",
      avatar: "RK",
      content:
        "TRX Sol transformed our restaurant's online presence completely. Our new website helped us increase online orders by 300% and we’re now getting customers from all over Delhi NCR.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Boutique Owner",
      company: "Fashion Hub, Dwarka",
      avatar: "PS",
      content:
        "The team at TRX Sol is incredibly professional and creative. They understood our vision perfectly and delivered a stunning website that showcases our fashion collection beautifully.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Real Estate Agent",
      company: "Dream Homes, Dwarka",
      avatar: "AP",
      content:
        "Our new website has been a game-changer for our real estate business. The SEO optimization helped us rank higher in local searches and we’re getting more qualified leads than ever.",
      rating: 5,
    },
    {
      name: "Sunita Verma",
      role: "Beauty Salon Owner",
      company: "Glamour Studio, Uttam Nagar",
      avatar: "SV",
      content:
        "TRX Sol created a beautiful, mobile-friendly website for our salon. The online booking system has made it so much easier for our customers to schedule appointments.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Gym Owner",
      company: "FitLife Gym, Dwarka",
      avatar: "VS",
      content:
        "The website TRX Sol built for our gym is amazing! It’s fast, responsive, and has helped us attract more members. The team’s support and maintenance service is excellent.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from local businesses in Uttam Nagar and Dwarka who have
            transformed their online presence with TRX Sol.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                onClick={() => setActiveIndex(index)}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-trx-cyan/20 transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? "ring-2 ring-trx-cyan/60" : ""
                }`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-trx-cyan mb-4" />

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    “{testimonial.content}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center text-white font-semibold mr-4 shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-trx-cyan text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9/5", label: "Client Rating" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to transform your business with a powerful website? Get
              started with a free consultation today.
            </p>
            <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
