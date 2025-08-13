"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-4 z-50 transition-all duration-700 ease-out ${isScrolled
        ? isOpen
          ? "left-[5%] right-[5%] backdrop-blur-xl bg-black/80 border border-white/20 shadow-[0_8px_32px_rgba(0,255,255,0.2)] rounded-3xl"
          : "left-[10%] right-[10%] lg:left-[10%] lg:right-[10%] backdrop-blur-xl bg-black/80 border border-white/20 shadow-[0_8px_32px_rgba(0,255,255,0.2)] rounded-full"
        : "left-4 right-4 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-700 h-20`}
        >
          {/* Logo */}
          <div className={`transition-all duration-700 ${isScrolled ? "scale-90" : "scale-100"}`}>
            <Link href="/" className="flex items-center gap-2">
              <Image src={"/logo.png"} alt="TRX Sol Logo" width={120} height={120} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`transition-all duration-700 ${isScrolled ? "scale-95" : "scale-100"
                  }`}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-all duration-700 ${isScrolled ? "scale-95" : "scale-100"
                }`}
            >
              <Button
                className={`bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] text-white transition-all duration-700 ${isScrolled
                  ? "px-5 py-3 rounded-full text-sm"
                  : "px-6 py-3 rounded-lg"
                  }`}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-700 ${isScrolled ? "scale-90" : "scale-100"
                }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 overflow-hidden rounded-b-3xl mt-2"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  whileHover={{ x: 8 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(0,255,255,0.6)] rounded-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
