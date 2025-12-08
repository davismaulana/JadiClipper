import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaClosedCaptioning, FaCrop, FaBolt, FaMagic, FaChartLine } from 'react-icons/fa';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

const features = [
  {
    icon: <FaRobot />,
    title: "AI Moment Detection",
    description: "AI kami nonton 100% video kamu dan highlight moment yang bikin ngakak atau pogchamp.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: <FaClosedCaptioning />,
    title: "Auto Subtitle (Indo)",
    description: "Subtitle akurat 98% dalam Bahasa Indonesia. Slang, bahasa gaul, semua kebaca.",
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    icon: <FaCrop />,
    title: "Smart Vertical Crop",
    description: "Face tracking otomatis. Muka kamu + Gameplay selalu center, gak kepotong.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: <FaBolt />,
    title: "Instant Export",
    description: "Pilih klip -> Render -> Download. Cuma butuh 2 menit sampe file siap post.",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: <FaMagic />,
    title: "B-Roll Otomatis (Beta)",
    description: "Tambahin meme atau sound effect otomatis pas momen lucu. Magic!",
    color: "text-pink-500",
    bg: "bg-pink-50"
  },
  {
    icon: <FaChartLine />,
    title: "Virality Score",
    description: "AI kasih skor prediksi: 'Klip ini potensi 80% viral'. Post yang skornya tinggi duluan.",
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="fitur" className="min-h-screen py-16 md:py-24 bg-surface flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             className="text-primary font-bold tracking-widest uppercase mb-4 text-xs md:text-sm"
          >
             Feature Lengkap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={springTransition}
            className="text-3xl md:text-5xl font-black mb-6 text-textDark"
          >
            Satu Tool, <span className="text-secondary bg-secondary/10 px-2 rounded-lg">Semua Masalah Beres</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-textLight"
          >
            Kami handle teknisnya, kamu fokus bikin kontennya.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={popUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-default"
            >
              <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-textDark group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-textLight leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
