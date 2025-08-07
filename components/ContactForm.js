"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass-effect rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-trx-gray" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-trx-bg/50 border border-trx-gray/20 rounded-lg text-trx-text placeholder-trx-gray focus:border-trx-cyan focus:outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-trx-gray" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-trx-bg/50 border border-trx-gray/20 rounded-lg text-trx-text placeholder-trx-gray focus:border-trx-cyan focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-trx-gray" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full pl-10 pr-4 py-3 bg-trx-bg/50 border border-trx-gray/20 rounded-lg text-trx-text placeholder-trx-gray focus:border-trx-cyan focus:outline-none transition-colors"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-trx-gray" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full pl-10 pr-4 py-3 bg-trx-bg/50 border border-trx-gray/20 rounded-lg text-trx-text placeholder-trx-gray focus:border-trx-cyan focus:outline-none transition-colors resize-none"
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
