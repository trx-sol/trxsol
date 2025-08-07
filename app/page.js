"use client";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ClientLogosSlider from "../components/ClientLogosSlider";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/CaseStudiesSection";
import FAQSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import BlogPreviewSection from "../components/BlogPreviewSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-trx-bg">
      <Navigation />
      <HeroSection />
      <ClientLogosSlider />
      <ServicesSection />
      <HowItWorksSection />
      <FAQSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <BlogPreviewSection />
      <Footer />
    </div>
  );
}
