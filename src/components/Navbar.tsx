import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site-data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold gold-gradient-text">
            Dr D Academy
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted-foreground gold-underline hover:text-primary transition-colors duration-300 pb-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 border border-primary/50 text-primary font-sans text-sm font-medium rounded golden-aura hover:bg-primary/10 transition-all duration-300"
          >
            Apply for Membership
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 border border-primary/50 text-primary text-center font-sans text-sm font-medium rounded golden-aura"
              >
                Apply for Membership
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
