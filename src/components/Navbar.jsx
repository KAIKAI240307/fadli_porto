import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-xl py-4 border-b border-stone-200/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-display font-bold uppercase tracking-wider text-stone-900 hover:text-stone-600 transition-colors duration-300"
        >
          Fadli<span className="text-stone-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-900 hover:text-stone-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#faf8f5]/95 backdrop-blur-xl border-b border-stone-200 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors text-lg uppercase tracking-widest font-display"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
