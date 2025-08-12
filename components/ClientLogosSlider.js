"use client";
import { useEffect, useState } from "react";
import HeadText from "./Head-text";

export default function ClientLogosSlider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("client-logos");
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  const logos = [
    { name: "Delhi Metro", logo: "DELHI METRO" },
    { name: "Dwarka Expressway", logo: "DWARKA EXPRESSWAY" },
    { name: "Uttam Nagar Market", logo: "UTTAM NAGAR" },
    { name: "Dwarka Sector 12", logo: "DWARKA S12" },
    { name: "Janakpuri District", logo: "JANAKPURI" },
    { name: "Palam Vihar", logo: "PALAM VIHAR" },
    { name: "Rajouri Garden", logo: "RAJOURI GARDEN" },
    { name: "Vikaspuri", logo: "VIKASPURI" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-black/90 to-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <HeadText
            title={"Trusted by "}
            title2={"Local Businesses"}
            description={
              "Empowering brands across India and USA, and beyond to grow their online presence."
            }
          />
        </div>

        {/* Logo Slider */}
        <div
          id="client-logos"
          className={`relative overflow-hidden ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex space-x-10 md:space-x-16 animate-logo-slide">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="glass-effect rounded-xl px-6 py-5 min-w-[120px] md:min-w-[160px] text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <div className="text-white font-semibold text-sm md:text-lg uppercase tracking-wide">
                    {logo.logo}
                  </div>
                  <div className="text-gray-400 text-[10px] md:text-xs mt-1">
                    {logo.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
          {[
            { value: "500+", label: "Websites Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
