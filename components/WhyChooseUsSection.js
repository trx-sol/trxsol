"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How much does a website cost?",
      answer:
        "Website costs vary based on your requirements. We offer packages starting from ₹25,000 for basic websites, ₹55,000 for business websites, and custom pricing for e-commerce solutions. Contact us for a free quote tailored to your specific needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Our typical timeline is 2-4 weeks from start to finish. Basic websites take 1-2 weeks, while complex business websites take 2-3 weeks. E-commerce websites may take 3-4 weeks. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we provide complete hosting and domain services. We offer secure hosting with SSL certificates, daily backups, and 24/7 support. We can also help you choose and register the perfect domain name for your business.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our websites are built with a mobile-first approach. They&apos;re fully responsive and work perfectly on all devices - smartphones, tablets, and desktops. This is crucial for SEO and user experience.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes, we include basic SEO optimization with every website. This includes keyword optimization, meta tags, site structure, and performance optimization. We also offer ongoing SEO services to improve your search rankings.",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "After launch, we provide 1-3 months of free support and maintenance. We also offer ongoing maintenance packages that include updates, security monitoring, backups, and technical support. We&apos;re always here to help!",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we specialize in website redesigns! We can modernize your existing website, improve its performance, and enhance user experience. We'll analyze your current site and provide recommendations for improvement.",
    },
    {
      question: "Do you provide training for managing the website?",
      answer:
        "Yes, we provide comprehensive training on how to manage your website. This includes content updates, basic maintenance, and using the content management system. We also provide detailed documentation and video tutorials.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-standard technologies including Next.js, React, Tailwind CSS, and other cutting-edge tools. This ensures your website is fast, secure, and future-proof. We choose the best technology stack for each project.",
    },
    {
      question: "Do you work with clients outside Uttam Nagar and Dwarka?",
      answer:
        "Yes, we work with clients across Delhi NCR and beyond. While we're based in Uttam Nagar and Dwarka, we can serve clients anywhere through online consultations, video calls, and remote project management.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our website design and development
            services. Can&apos;t find the answer you&apos;re looking for?
            Contact our team.
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 border border-white/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-trx-cyan transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you understand our services and get
              started with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
