"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">Dream</span>
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Crowd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            <Link 
              href="/get-started"
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white/80 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10 py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#features" 
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/get-started"
                className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-2 rounded-full font-medium mx-4 text-center hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
