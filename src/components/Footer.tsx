import React from 'react';
import { FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-textDark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    JadiClipper
                </h3>
                <p className="text-gray-400 text-sm">
                    AI Clipping Automation #1 untuk Creator Indonesia.
                </p>
            </div>

            <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaDiscord size={24} /></a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaWhatsapp size={24} /></a>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} JadiClipper. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Early Access Testing (88/100 spots filled)</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy-policy.html" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms-of-service.html" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
