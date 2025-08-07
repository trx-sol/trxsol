import HeroSection from "@/components/HeroSection";
import ClientLogosSlider from "@/components/ClientLogosSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ClientLogosSlider />
      <ServicesSection />
      <PortfolioSection />
      <HowItWorksSection />
      <FAQSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <BlogPreviewSection />
      <Footer />
    </main>
  );
}
