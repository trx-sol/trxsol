"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { X, Send } from "lucide-react";
import servicesData from "../data/services.json";

export default function ConsultationDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    country: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to console
    console.log("=== CONSULTATION FORM SUBMISSION ===");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Service:", formData.service);
    console.log("Country:", formData.country);
    console.log("Message:", formData.message);
    console.log("================================");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      country: "",
    });

    // Close dialog
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-effect border border-trx-purple/20 bg-black/90 backdrop-blur-xl max-w-md mx-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-white text-center">
            Get Free Consultation
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="mt-1 bg-black/50 border-trx-purple/30 text-white placeholder-gray-400 focus:border-trx-cyan"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-1 bg-black/50 border-trx-purple/30 text-white placeholder-gray-400 focus:border-trx-cyan"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-white text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 bg-black/50 border-trx-purple/30 text-white placeholder-gray-400 focus:border-trx-cyan"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Country */}
          <div>
            <Label htmlFor="country" className="text-white text-sm font-medium">
              Country *
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
              required
            >
              <SelectTrigger className="mt-1 bg-black/50 border-trx-purple/30 text-white focus:border-trx-cyan">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-trx-purple/30">
                <SelectItem
                  value="india"
                  className="text-white hover:bg-trx-purple/20"
                >
                  India
                </SelectItem>
                <SelectItem
                  value="usa"
                  className="text-white hover:bg-trx-purple/20"
                >
                  United States
                </SelectItem>
                <SelectItem
                  value="other"
                  className="text-white hover:bg-trx-purple/20"
                >
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Service */}
          <div>
            <Label htmlFor="service" className="text-white text-sm font-medium">
              Service Interested In *
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleInputChange("service", value)}
              required
            >
              <SelectTrigger className="mt-1 bg-black/50 border-trx-purple/30 text-white focus:border-trx-cyan">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-trx-purple/30">
                {servicesData.map((service) => (
                  <SelectItem
                    key={service.slug}
                    value={service.slug}
                    className="text-white hover:bg-trx-purple/20"
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-white text-sm font-medium">
              Project Details
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="mt-1 bg-black/50 border-trx-purple/30 text-white placeholder-gray-400 focus:border-trx-cyan min-h-[100px]"
              placeholder="Tell us about your project requirements..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan hover:from-trx-purple/90 hover:to-trx-cyan/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Consultation Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
