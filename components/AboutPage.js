"use client";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "./ui/card";
import {
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Shield,
  Heart,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We're passionate about creating exceptional digital experiences that exceed expectations.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Building long-term relationships based on trust, transparency, and reliable delivery.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Staying ahead with cutting-edge technologies and creative solutions.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to helping your business grow.",
    },
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & Lead Developer",
      description:
        "Full-stack developer with 8+ years of experience in modern web technologies.",
      image: "/api/placeholder/200/200",
      skills: ["React", "Node.js", "Next.js", "TypeScript"],
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      description:
        "Creative designer focused on user-centered design and beautiful interfaces.",
      image: "/api/placeholder/200/200",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      name: "Amit Kumar",
      role: "SEO Specialist",
      description:
        "Digital marketing expert helping businesses rank higher and reach more customers.",
      image: "/api/placeholder/200/200",
      skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
    },
    {
      name: "Neha Singh",
      role: "Project Manager",
      description:
        "Ensuring smooth project delivery and excellent client communication.",
      image: "/api/placeholder/200/200",
      skills: ["Agile", "Scrum", "Client Relations", "Team Leadership"],
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses in Delhi NCR with cutting-edge digital
                solutions that drive growth, enhance user experience, and create
                lasting impact in the digital landscape.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe every business deserves a powerful online presence
                that reflects their values and helps them connect with their
                customers effectively.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading web design and development company in Delhi
                NCR, known for innovation, quality, and exceptional client
                relationships.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where every local business has the digital
                tools they need to compete and thrive in the global marketplace.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every project we
              deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The talented professionals behind every successful project we
              deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-trx-purple/20 to-trx-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-trx-cyan" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-trx-cyan font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm mb-4">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="gradient-text bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
                TRX Sol
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We&apos;re not just another web development company. Here&apos;s what makes
              us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Local Expertise",
                description:
                  "Deep understanding of Delhi NCR market and local business needs.",
              },
              {
                icon: Award,
                title: "Quality Focus",
                description:
                  "Every project is crafted with attention to detail and best practices.",
              },
              {
                icon: Star,
                title: "Proven Results",
                description:
                  "Track record of delivering successful projects that drive business growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="glass-effect border-white/10 hover:border-trx-cyan/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-trx-purple to-trx-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        title="Ready to Work with Us?"
        subtitle="Let's discuss your project and see how we can help bring your vision to life."
      />
    </div>
  );
}
