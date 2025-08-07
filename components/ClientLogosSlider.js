"use client";
import { useEffect, useState } from "react";

export default function ClientLogosSlider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("client-logos");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
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
    <section className="py-16 bg-black/50 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Local Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We&apos;ve helped businesses across Uttam Nagar, Dwarka, and surrounding
            areas establish their powerful online presence
          </p>
        </div>

        <div
          id="client-logos"
          className={`relative overflow-hidden ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex space-x-16 animate-logo-slide">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="glass-effect rounded-lg px-6 py-4 min-w-[120px] text-center">
                  <div className="text-white font-bold text-lg">
                    {logo.logo}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{logo.name}</div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="glass-effect rounded-lg px-6 py-4 min-w-[120px] text-center">
                  <div className="text-white font-bold text-lg">
                    {logo.logo}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{logo.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              500+
            </div>
            <div className="text-gray-400">Websites Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              98%
            </div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              5+
            </div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
