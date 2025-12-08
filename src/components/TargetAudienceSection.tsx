import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaMicrophone, FaChalkboardTeacher, FaLaughBeam, FaVideo } from 'react-icons/fa';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

const audiences = [
  {
    icon: <FaGamepad />,
    title: "Streamer Game",
    description: "Ubah 5 jam live grinding jadi highlight kill/funny moment.",
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    icon: <FaMicrophone />,
    title: "Podcaster",
    description: "Ambil quote terbaik atau debat panas jadi klip 60 detik.",
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Edukator",
    description: "Webinar 2 jam diringkas jadi tips-tips singkat padat.",
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    icon: <FaLaughBeam />,
    title: "Stand-up Comic",
    description: "Punchline terbaik langsung siap share tanpa ribet cut.",
    color: "text-yellow-500",
    bg: "bg-yellow-100"
  },
  {
    icon: <FaVideo />,
    title: "Vlogger / IRL",
    description: "Momen travel atau keseharian yang 'ngena' langsung ke-capture.",
    color: "text-red-500",
    bg: "bg-red-100"
  }
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section id="untuk-siapa" className="min-h-screen py-16 md:py-24 bg-white flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
             <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={springTransition}
                className="text-3xl md:text-5xl font-black mb-6"
            >
                Siapa yang Butuh <span className="text-primary">Tool Ini?</span>
            </motion.h2>
          <p className="text-xl text-textLight">
            Kalau kamu bikin konten panjang dan pengen 'nyebar' di sosmed pendek, ini buat kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={popUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ 
                y: -15, 
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="p-8 rounded-3xl border-2 border-transparent hover:border-gray-200 hover:shadow-2xl transition-all cursor-default text-center group bg-white"
            >
              <div className={`mx-auto w-16 h-16 ${audience.bg} ${audience.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-textLight text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
