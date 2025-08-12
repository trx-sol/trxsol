"use client";
import React from "react";
import { motion } from "framer-motion";
import HeadText from "./Head-text";

// Helper to create initials from name
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 12,
  reverse = false,
}) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ translateY: reverse ? "-50%" : "0%" }}
        animate={{ translateY: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, name, role }, i) => (
                <div
                  key={`${i}-${index}`}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-lg shadow-trx-cyan/10 max-w-xs w-full"
                >
                  <div className="text-gray-200 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-trx-purple to-trx-cyan text-white flex items-center justify-center text-xs font-semibold">
                      {getInitials(name)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="leading-5 text-gray-400 tracking-tight text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// Testimonial data
const firstColumn = [
  {
    name: "Dr. Ananya Gupta",
    role: "Dental Clinic Owner · Dwarka, Delhi",
    text: "TRX SOL ne hamari clinic ki website nayi banayi—simple, fast aur mobile‑friendly. Local SEO ke baad Google se daily inquiries mil rahi hain.",
  },
  {
    name: "James Whitaker",
    role: "E‑commerce Founder · Austin, TX",
    text: "Our Shopify site was cluttered. TRX SOL rebuilt the product pages and cleaned up the brand kit—sales feel steady instead of spiky.",
  },
  {
    name: "Riya Kapoor",
    role: "Boutique Owner · Andheri, Mumbai",
    text: "Instagram creatives aur logo refresh ke baad brand bilkul professional lagta hai. Landing page se direct WhatsApp leads aati hain.",
  },
];

const secondColumn = [
  {
    name: "Emily Turner",
    role: "Home Renovation · Seattle, WA",
    text: "We needed real SEO, not jargon. They fixed the basics, structured our blog, and now we rank for our city + service.",
  },
  {
    name: "Kabir Arora",
    role: "Cafe Owner · Chandigarh",
    text: "Cafe ke liye menu site + Google reviews widget set kiya. Weekend footfall visibly badha—ads par kam kharcha ho raha hai.",
  },
  {
    name: "Maya Brooks",
    role: "Marketing Manager · Brooklyn, NY",
    text: "They redesigned our B2B site, clarified the copy, and tightened page speed. Demo requests doubled without increasing ad spend.",
  },
];

const thirdColumn = [
  {
    name: "Arjun Mehta",
    role: "Gym Owner · Ahmedabad",
    text: "Logo, color palette aur social templates—sab ek hi place pe. Team ko post banana easy ho gaya, brand consistent rehta hai.",
  },
  {
    name: "Carlos Rivera",
    role: "SaaS PM · Miami, FL",
    text: "TRX SOL migrated our blog, set up schema, and cleaned internal links. Search traffic is finally predictable.",
  },
  {
    name: "Neha Malhotra",
    role: "Jewellery Store · Delhi",
    text: "WhatsApp catalogue + simple site ne jewellery orders streamline kar diye. Photos bhi unhone retouch ki—clients trust karte hain.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-black py-20  overflow-hidden">
      {/* Subtle gradient glows like Hero */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-trx-purple/10 via-transparent to-trx-cyan/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center"
        >
          <HeadText
            title={"What our"}
            title2={"Users Say"}
            description={
              "See what our customers have to say about working with TRX Sol."
            }
          />
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={18}
            className="hidden md:block"
            reverse
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
