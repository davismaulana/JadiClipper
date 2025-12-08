import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { popUpVariants, containerVariants, springTransition, funnyWiggleVariants } from '../lib/animations';

const benefits = [
  "Lebih cepet dari editor manusia (2 menit vs 2 hari)",
  "Gak perlu revisi typo subtitle berulang-ulang",
  "Otomatis pilih yang lucu, bukan yang boring",
  "Format udah pasti pas buat TikTok/Reels/Shorts",
  "Budget 90% lebih murah dari hire editor",
  "Bisa upload konsisten tanpa burnout"
];

const WhyCreatorsLoveItSection: React.FC = () => {
  return (
    <section className="min-h-screen py-24 bg-surface flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-textDark">
                Kenapa Creator <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Jatuh Cinta?</span>
            </h2>
            <p className="text-xl text-textLight mb-8 leading-relaxed">
              Karena kami ngerti pain point kamu. Kami bangun tool ini bareng sama streamer yang udah capek ngedit.
            </p>
            <motion.div 
               whileHover="hover"
               variants={funnyWiggleVariants}
               className="inline-block p-4 bg-white rounded-2xl shadow-lg border-2 border-primary/20 cursor-pointer"
            >
                <span className="text-4xl">🥰</span> <span className="font-bold text-lg ml-2">Made with Love</span>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={popUpVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 mr-4">
                    <FaCheckCircle className="text-success text-2xl" />
                </div>
                <span className="text-lg font-medium text-textDark">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreatorsLoveItSection;
