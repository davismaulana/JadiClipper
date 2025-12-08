import React from 'react';
import { motion } from 'framer-motion';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

const SolutionSection: React.FC = () => {
  return (
    <section className="min-h-screen py-16 md:py-32 bg-surface flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={springTransition}
            className="text-4xl md:text-6xl font-black text-textDark leading-tight"
          >
            Tapi gimana kalau... <br />
            <span className="text-secondary bg-secondary/10 px-4 py-1 rounded-xl transform -rotate-1 inline-block mt-2">1 Video Panjang</span> <br className="md:hidden" /> 
            bisa jadi <br className="md:hidden" />
            <span className="text-accent bg-accent/10 px-4 py-1 rounded-xl transform rotate-1 inline-block mt-2">10+ Klip Viral</span>?
          </motion.h2>

          <motion.div 
            variants={popUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-accent" />
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500" />
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500" />

             <p className="text-2xl md:text-3xl text-textDark font-medium leading-relaxed relative z-10">
              "JadiClipper bukan magic. Ini <span className="font-bold underline decoration-wavy decoration-secondary decoration-4">Asisten AI</span> yang nonton stream kamu 24/7, ketawa pas lucu, dan langsung potongin buat kamu."
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             {[
                { label: "Hemat Waktu", val: "90%", color: "text-secondary" },
                { label: "Lebih Cepat", val: "10x", color: "text-primary" },
                { label: "Tanpa Editor", val: "Free", color: "text-accent" },
                { label: "Quality", val: "HD", color: "text-green-500" },
             ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={popUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={springTransition}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                 >
                     <div className={`text-3xl md:text-4xl font-black mb-2 ${item.color}`}>{item.val}</div>
                     <div className="text-xs md:text-sm text-textLight font-bold uppercase tracking-wide">{item.label}</div>
                 </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
