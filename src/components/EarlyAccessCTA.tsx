import React from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { springTransition, funnyWiggleVariants, viewportConfig } from '../lib/animations';

const EarlyAccessCTA: React.FC = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="early-access" className="min-h-screen py-16 md:py-24 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white relative overflow-hidden flex flex-col justify-center text-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
             className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold border border-white/30 text-yellow-300"
          >
            🔥 Limited Beta Access
          </motion.div>

          <motion.h2 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={springTransition}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-lg"
          >
            Stop Buang Waktu.<br/>
            Mulai <span className="text-yellow-300 underline decoration-wavy">Viral.</span>
          </motion.h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Gabung waitlist sekarang dan jadilah creator pertama yang pake AI ini sebelum kompetitormu tau.
          </p>

          <div className="flex flex-col items-center gap-6 pt-8">
            <motion.div 
               variants={funnyWiggleVariants}
               whileHover="hover"
               className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-sm w-full"
            >
                <div className="text-4xl font-black text-yellow-300 mb-1">4 Sisa Slot</div>
                <div className="text-sm font-medium opacity-80">untuk Early Access Batch 1</div>
               <div className="w-full bg-black/20 h-2 rounded-full mt-3 overflow-hidden">
                   <motion.div 
                     initial={{ width: "10%" }}
                     whileInView={{ width: "92%" }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="bg-yellow-300 h-full" 
                   />
               </div>
               <div className="text-right text-xs mt-1 font-mono opacity-70">92% Claimed</div>
            </motion.div>

            <motion.button
              onClick={() => scrollTo('form-section')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springTransition}
              className="px-12 py-6 bg-white text-primary text-2xl font-black rounded-2xl shadow-2xl hover:bg-yellow-50 transition-all border-b-8 border-gray-200 active:border-b-0 active:translate-y-2 w-full md:w-auto"
            >
               Amankan Slot Saya! 🚀
            </motion.button>
            
            <p className="text-sm opacity-60">100% Gratis selama masa Beta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessCTA;
