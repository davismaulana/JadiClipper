import React from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { popUpVariants, containerVariants, springTransition } from '../lib/animations';

interface HeroProps {
  onFormScroll?: () => void;
  onDemoClick?: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ onFormScroll, onDemoClick }) => {
  const scrollTo = useScrollTo();

  const handlePrimaryClick = () => {
    if (onFormScroll) onFormScroll();
    else scrollTo('early-access');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-10 overflow-hidden bg-bgLight perspective-1000">
      {/* Background Elements - More Dynamic */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={popUpVariants}
          className="inline-flex items-center space-x-2 bg-white border-2 border-primary/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 shadow-sm mb-6 md:mb-8 hover:scale-105 transition-transform cursor-default scale-90 md:scale-100"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaCheckCircle className="text-success text-base md:text-lg" />
          </motion.div>
          <span className="text-xs md:text-sm font-bold text-textDark">Sudah Ditest 60+ Creator Indonesia</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={popUpVariants}
          className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-textDark mb-6 md:mb-8 leading-tight max-w-5xl drop-shadow-sm"
        >
          Ubah <span className="text-primary relative inline-block">
            Jam Grinding
            <motion.svg 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-full h-4 -bottom-2 left-0 text-primary opacity-50" 
              viewBox="0 0 100 10" 
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            </motion.svg>
          </span> <br className="hidden md:block"/>
          Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Waktu Kreativitas</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={popUpVariants}
          className="text-xl md:text-2xl text-textLight max-w-3xl mb-12 leading-relaxed"
        >
          Stop nonton ulang stream 4 jam cuma buat cari 3 klip TikTok. <br className="hidden md:block" />
          <b>JadiClipper</b> pake AI buat otomatisin bagian "membosankan" dari karirmu.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={popUpVariants}
          className="flex flex-col sm:flex-row gap-5 w-full max-w-md sm:max-w-none justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
            onClick={handlePrimaryClick}
            className="px-10 py-5 bg-primary text-white text-xl font-black rounded-2xl shadow-xl shadow-primary/20 border-b-4 border-primaryDark active:border-b-0 active:translate-y-1 transition-all"
          >
            Coba Sekarang – Gratis
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
            onClick={onDemoClick}
            className="px-10 py-5 bg-white text-textDark border-2 border-gray-200 text-xl font-bold rounded-2xl hover:border-textDark hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="bg-red-500 text-white p-2 rounded-full shadow-md"><FaPlay className="text-xs ml-0.5" /></span>
             Lihat Magic-nya (60s)
          </motion.button>
        </motion.div>
        
        <p className="mt-4 text-sm text-textLight opacity-80">
          Pemula sampai power user, semua berhasil save waktu 20+ jam/minggu.
        </p>

        {/* Visual/Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-gray-900 aspect-video relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <span className="text-white/50 font-mono">Hero Dashboard Interface Placeholder</span>
             {/* Generate Image can fill this later */}
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bgLight via-transparent to-transparent h-1/3 bottom-0 opacity-20"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
