import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useScrollTo } from '../hooks/useScrollTo';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/main-logo.png';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void; // Optional override
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const scrollTo = useScrollTo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Determine active section
      const sections = ['fitur', 'cara-kerja', 'untuk-siapa'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is visible in the viewport (with some offset for better UX)
          // 150px offset helps highlight the section a bit earlier
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active state
    handleScroll();
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
    { name: 'Fitur', id: 'fitur' },
    { name: 'Cara Kerja', id: 'cara-kerja' },
    { name: 'Untuk Siapa', id: 'untuk-siapa' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-0" : "bg-transparent py-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavClick('hero')}
        >
          <img src={logo} alt="JadiClipper Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "transition-colors font-medium text-sm",
                activeSection === link.id
                  ? "text-primary font-bold"
                  : "text-textDark hover:text-primary"
              )}
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
                    className={cn(
                      "text-left font-medium py-2 border-b border-gray-50 last:border-0",
                      activeSection === link.id
                        ? "text-primary font-bold"
                        : "text-textDark"
                    )}
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
