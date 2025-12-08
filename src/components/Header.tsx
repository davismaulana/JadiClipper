import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useScrollTo } from '../hooks/useScrollTo';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void; // Optional override
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const scrollTo = useScrollTo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      scrollTo(id);
    }
  };

  const navLinks = [
    { name: 'Cara Kerja', id: 'how-it-works' },
    { name: 'Fitur', id: 'features' },
    { name: 'Untuk Siapa', id: 'target-audience' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-bold cursor-pointer" 
          onClick={() => handleNavClick('hero')}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            JadiClipper
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-textDark hover:text-primary transition-colors font-medium text-sm"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('early-access')}
            className="px-5 py-2 rounded-full bg-primary text-white font-bold text-sm hover:bg-primaryDark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Akses Awal
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-textDark focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden border-t border-gray-100"
            >
              <nav className="flex flex-col py-4 px-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left text-textDark font-medium py-2 border-b border-gray-50 last:border-0"
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => handleNavClick('early-access')}
                  className="w-full py-3 rounded-lg bg-primary text-white font-bold text-center mt-2"
                >
                  Dapatkan Akses Awal
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
