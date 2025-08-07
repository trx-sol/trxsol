"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      company: "Spice Garden, Uttam Nagar",
      avatar: "RK",
      content:
        "TRX Sol transformed our restaurant's online presence completely. Our new website helped us increase online orders by 300% and we're now getting customers from all over Delhi NCR.",
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
        "Our new website has been a game-changer for our real estate business. The SEO optimization helped us rank higher in local searches and we're getting more qualified leads than ever.",
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
        "The website TRX Sol built for our gym is amazing! It's fast, responsive, and has helped us attract more members. The team's support and maintenance service is excellent.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from local businesses in Uttam Nagar and Dwarka who have
            transformed their online presence with TRX Sol.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`glass-effect border-white/10 hover-lift transition-all duration-300 ${
                index === activeIndex
                  ? "ring-2 ring-trx-cyan ring-opacity-50"
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              500+
            </div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              4.9/5
            </div>
            <div className="text-gray-400">Client Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              98%
            </div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
