import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Building,
  Users,
  Palette,
  Zap,
  CheckCircle,
  Send,
} from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const websiteTypes = [
    {
      value: "basic",
      label: "Basic Website",
      icon: Globe,
      description: "Simple website for personal or small business",
    },
    {
      value: "business",
      label: "Business Website",
      icon: Building,
      description: "Professional website for your business",
    },
    {
      value: "ecommerce",
      label: "E-Commerce Website",
      icon: ShoppingCart,
      description: "Online store to sell products",
    },
    {
      value: "portfolio",
      label: "Portfolio Website",
      icon: Palette,
      description: "Showcase your work and projects",
    },
    {
      value: "blog",
      label: "Blog/Content Website",
      icon: Users,
      description: "Share content and engage with audience",
    },
    {
      value: "webapp",
      label: "Web Application",
      icon: Zap,
      description: "Interactive web application",
    },
    {
      value: "others",
      label: "Others",
      icon: Globe,
      description: "Custom website requirements",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form data to console
    console.log("=== FORM SUBMISSION ===");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Website Type:", formData.websiteType);
    console.log("Requirements:", formData.requirements);
    console.log("Submission Time:", new Date().toLocaleString());
    console.log("======================");

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        websiteType: "",
        requirements: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-black/50 border border-trx-purple/30 backdrop-blur-lg shadow-xl w-full max-w-md mx-auto hover:shadow-trx-cyan/30 transition-all duration-300">
        <CardContent className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-gray-400 mb-4">
            Your website request has been submitted successfully.
          </p>
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you within 24 hours with a custom proposal.
          </p>
          <div className="mt-6">
            <div className="flex items-center justify-center space-x-2 text-trx-cyan">
              <Send className="w-4 h-4" />
              <span className="text-sm">Email sent to: {formData.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-black/50 border border-trx-purple/30 backdrop-blur-lg shadow-xl w-full max-w-md mx-auto hover:shadow-trx-cyan/30 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-white mb-2">
          Let&apos;s Build Your Website
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Your Name <span className="text-gray-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your Name"
                className="bg-black/30 text-white border-trx-purple/30 focus:border-trx-cyan transition-colors mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email <span className="text-gray-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Your Email"
                className="bg-black/30 text-white border-trx-purple/30 focus:border-trx-cyan transition-colors mt-1"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phone" className="text-white text-sm font-medium">
              Phone Number <span className="text-gray-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Mobile Number"
              className="bg-black/30 text-white border-trx-purple/30 focus:border-trx-cyan transition-colors mt-1"
              required
            />
          </div>
          <div>
            <Label className="text-white text-sm font-medium">
              What type of website do you need?{" "}
              <span className="text-gray-500">*</span>
            </Label>
            <Select
              value={formData.websiteType}
              onValueChange={(value) => handleInputChange("websiteType", value)}
            >
              <SelectTrigger className="bg-black/30 text-white border-trx-purple/30 focus:border-trx-cyan transition-colors mt-1">
                <SelectValue placeholder="Choose your website type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border border-trx-purple/30 max-h-60">
                {websiteTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <SelectItem
                      key={type.value}
                      value={type.value}
                      className="py-2"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-4 h-4 text-trx-cyan flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium text-sm">
                            {type.label}
                          </div>
                          <div className="text-xs text-gray-400 truncate">
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="req" className="text-white text-sm font-medium">
              Message <span className="text-gray-500">*</span>
            </Label>
            <Textarea
              id="req"
              value={formData.requirements}
              onChange={(e) =>
                handleInputChange("requirements", e.target.value)
              }
              placeholder="Message"
              className="bg-black/30 text-white border-trx-purple/30 focus:border-trx-cyan transition-colors mt-1 min-h-[120px] resize-none"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-trx-purple to-trx-cyan text-white py-2.5 text-base font-semibold hover:scale-[1.02] transition-transform hover:shadow-lg hover:shadow-trx-cyan/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
          <p className="text-xs text-gray-500 text-center mt-3">
            We&apos;ll get back to you within 24 hours with a custom proposal
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
