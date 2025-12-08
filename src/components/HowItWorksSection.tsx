import React from 'react';
import { motion } from 'framer-motion';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

const steps = [
  {
    num: "01",
    title: "Paste Link Stream",
    description: "Copy link YouTube/Twitch dari stream kamu (yang 3-5 jam itu).",
  },
  {
    num: "02",
    title: "AI Nonton & Analisa",
    description: "AI kami nonton videomu, mendeteksi tawa, teriakan, dan momen 'pog'.",
  },
  {
    num: "03",
    title: "Pilih & Edit Dikit",
    description: "Kamu dapet 10-20 kandidat klip. Swipe kiri/kanan, edit caption kalau mau.",
  },
  {
    num: "04",
    title: "Viralin",
    description: "Download preset TikTok/Reels, upload, dan liat view naik.",
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="min-h-screen py-16 md:py-24 bg-gray-900 text-white flex flex-col justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={springTransition}
            className="text-4xl md:text-6xl font-black mb-6 text-white"
          >
            Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Magic</span> Ini
          </motion.h2>
          <p className="text-xl text-gray-400">Ribet? Nggak zaman. Cuma 4 langkah.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={popUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={springTransition}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-black shadow-lg shadow-primary/30 transform group-hover:rotate-12 transition-transform">
                {step.num}
              </div>
              
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (Desktop only, except last item) */}
              {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-8 h-1 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
