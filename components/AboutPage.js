"use client";

import PageHero from "./PageHero";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={
          <>
            About{" "}
            <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
              TRX Sol
            </span>
          </>
        }
        subtitle="We're a passionate team of designers and developers dedicated to helping businesses in Delhi NCR succeed online."
      />

      {/* About Us Content */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <div className="space-y-8 text-gray-300 leading-relaxed text-xl md:text-2xl">
            <p>
              TRX Sol is a design‑and‑technology studio based in Delhi NCR,
              helping ambitious brands turn ideas into fast, beautiful, and
              measurable digital experiences. We bring together product
              strategists, UI/UX designers, and full‑stack engineers who care
              about outcomes—not just deliverables.
            </p>
            <p>
              From websites and web apps to performance marketing landing pages,
              we plan, design, build, and iterate in tight loops. Our process is
              simple: listen deeply, prototype quickly, validate with real
              users, and ship reliably. The result is work that loads faster,
              ranks higher, and converts better.
            </p>
            <p>
              We value reliability, integrity, creativity, and continuous
              improvement. Whether you are a startup preparing to launch or an
              established company modernizing your stack, our team partners with
              you to create long‑term impact—not just one‑off projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />
    </div>
  );
}
