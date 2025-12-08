import React from 'react';
import { motion } from 'framer-motion';
import { popUpVariants, containerVariants, springTransition } from '../lib/animations';

const metrics = [
  {
    value: "20+",
    label: "Jam Saved/Minggu",
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    value: "300%",
    label: "Avg. Reach Increase",
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    value: "10K+",
    label: "Klip Generated",
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    value: "0",
    label: "Rupiah Utk Editor",
    color: "text-orange-500",
    bg: "bg-orange-100"
  }
];

const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="min-h-screen py-24 bg-white flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={springTransition}
                className="text-3xl md:text-5xl font-black mb-4"
            >
                Bukan Sekedar Angka, Ini <span className="text-primary underline decoration-wavy">Impact</span>
            </motion.h2>
         </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={popUpVariants}
              whileHover={{ scale: 1.05 }}
              transition={springTransition}
              className={`p-8 rounded-3xl ${metric.bg} bg-opacity-30 text-center border-2 border-transparent hover:border-${metric.color.split('-')[1]}-200 transition-colors cursor-default`}
            >
              <div className={`text-4xl md:text-6xl font-black mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="font-bold text-textDark/70 uppercase tracking-wider text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12 text-gray-400 italic"
        >
            *Data rata-rata dari 60 user beta awal kami.
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
