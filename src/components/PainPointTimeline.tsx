import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { popUpVariants, containerVariants, viewportConfig } from '../lib/animations';

interface TimelineStage {
  emoji: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
}

const stages: TimelineStage[] = [
  {
    emoji: '😊',
    title: 'Record (The Fun Part)',
    description: 'Kamu stream/record 3 jam dengan semangat. Ini alasan kamu jadi creator: menghibur dan berbagi.',
    color: 'bg-green-50',
    borderColor: 'border-green-200 text-green-700'
  },
  {
    emoji: '😩',
    title: 'Manual Hunting (The Painful Part)',
    description: 'Kamu nontonin ulang 3 jam itu cuma buat cari momen lucu. Mata lelah, otak bosen, tapi harus dilakukan.',
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-200 text-yellow-700'
  },
  {
    emoji: '🤬',
    title: 'Editing Hell (The Grindy Part)',
    description: 'Potong, crop, kasih subtitle manual per kata. Software crash, render lama. Jam 2 pagi masih di depan PC.',
    color: 'bg-orange-50',
    borderColor: 'border-orange-200 text-orange-700'
  },
  {
    emoji: '📉',
    title: 'Burnout & Inconsistency',
    description: 'Capek edit = males upload. Jadwal bolong-bolong. Algorithm nge-hukum channel kamu. Lingkaran setan.',
    color: 'bg-red-50',
    borderColor: 'border-red-200 text-red-700'
  }
];

const PainPointTimeline: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-white flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Kenapa Jadi Creator Itu <span className="text-red-500 inline-block transform hover:rotate-2 transition-transform">Berat?</span>
          </motion.h2>
          <p className="text-xl text-textLight max-w-2xl mx-auto">
            Siklus yang bikin 90% creator berhenti di tahun pertama.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gray-100 hidden md:block rounded-full" />

          <div className="space-y-12 md:space-y-24">
            {stages.map((stage, index) => (
              <motion.div 
                key={index}
                variants={popUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 mb-6 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                    className={cn(
                      "p-8 rounded-3xl border-l-8 shadow-lg hover:shadow-xl transition-all text-left relative overflow-hidden",
                      stage.color,
                      stage.borderColor.split(' ')[0]
                    )}
                  >
                    <div className="text-6xl mb-4 absolute top-4 right-4 opacity-20 filter grayscale">{stage.emoji}</div>
                    <div className="text-5xl mb-6 relative z-10">{stage.emoji}</div>
                    <h3 className={cn("text-2xl font-bold mb-3", stage.borderColor.split(' ')[1])}>{stage.title}</h3>
                    <p className="text-textDark opacity-80 leading-relaxed text-lg">
                      {stage.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-8 border-gray-100 hidden md:flex z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                    className={cn("w-4 h-4 rounded-full", stage.borderColor.split(' ')[1].replace('text-', 'bg-'))} 
                  />
                </div>

                {/* Empty Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointTimeline;
