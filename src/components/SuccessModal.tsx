import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle } from 'react-icons/hi';
import { FaDiscord, FaInstagram } from 'react-icons/fa';

interface SuccessModalProps {
  isOpen: boolean;
  onClose?: () => void;
  userName?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, userName }) => {
  // Auto-close logic can be handled here or by parent, but usually modal stays until user closes or clicks action
  // Prompt says auto-close 8 seconds
  useEffect(() => {
    if (isOpen && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <HiX size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiCheckCircle className="text-5xl text-success" />
              </div>
              <h2 className="text-2xl font-bold text-textDark mb-2">
                Selamat{userName ? `, ${userName}` : ''}! 🎉
              </h2>
              <p className="text-textLight">
                Kamu resmi masuk daftar <span className="font-bold text-primary">100 Early Adopter</span>.
              </p>
            </div>

            <div className="space-y-6 bg-gray-50 p-6 rounded-xl mb-8 text-left">
              <h3 className="font-bold text-textDark text-sm uppercase tracking-wide">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm text-textDark/80">
                <li>Kami akan review channel kamu dalam 2-3 hari.</li>
                <li>Kamu bakal dapat email konfirmasi & akses beta link.</li>
                <li>Siapkan 1 video panjang buat tes perdana kamu.</li>
              </ol>
            </div>

            <div className="space-y-3">
              <p className="text-center text-sm text-textLight mb-4">Sambil nunggu, join komunitas kami:</p>
              <div className="flex gap-4 justify-center">
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] text-white rounded-lg font-bold text-sm hover:bg-[#4752C4] transition-colors">
                    <FaDiscord size={18} /> Join Discord
                 </button>
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                    <FaInstagram size={18} /> @jadiclipper
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
