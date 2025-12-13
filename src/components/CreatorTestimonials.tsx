import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

const testimonials = [
  {
    name: "Rian Gaming",
    handle: "@riangaming_id",
    content: "Dulu abis stream 5 jam, masih harus begadang ngedit. Sekarang? Kelar stream, tidur, besok pagi klip udah jadi. Hemat waktu parah.",
    role: "Streamer (Valorant/Dota)",
    avatarColor: "bg-blue-500"
  },
  {
    name: "Sarah Vlog",
    handle: "@sarah.daily",
    content: "Gak perlu pusing bayar editor mahal. Potongannya rapi, subtitle pas, tinggal upload. Fokus aku cuma bikin konten aja sekarang.",
    role: "Lifestyle Vlogger",
    avatarColor: "bg-pink-500"
  },
  {
    name: "Bang Tutorial",
    handle: "@bangtut_tech",
    content: "AI-nya pinter milih momen. Bagian yang boring diskip, langsung ke intinya. Ngebantu banget buat ngejar konsistensi upload.",
    role: "Tech Educator",
    avatarColor: "bg-purple-500"
  },
  {
    name: "Kocak Gaming",
    handle: "@kocakgaming",
    content: "Buat yang males ngedit kayak gw, ini penyelamat. Live tiap hari, konten pendek jalan terus. Ga ada alesan burnout lagi.",
    role: "Casual Streamer",
    avatarColor: "bg-green-500"
  }
];

const CreatorTestimonials: React.FC = () => {
  return (
    <section className="min-h-screen py-16 md:py-24 bg-white flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={viewportConfig}
            transition={springTransition}
            className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm mb-4"
          >
            ⭐ Bergabung dengan 60+ Creator Happy
          </motion.div>
          <motion.h2
            variants={popUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Kata Mereka yang Udah <span className="text-primary underline decoration-wavy">Pensiun Ngedit</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={popUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{
                y: -10,
                rotate: index % 2 === 0 ? 1 : -1,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
              }}
              transition={springTransition}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden group"
            >
              <FaQuoteLeft className="text-gray-100/50 text-8xl absolute -top-4 -right-4 -z-0 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />

              <div className="flex items-center mb-6 z-10">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md mr-4`}>
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-none">{testimonial.name}</h4>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <FaTwitter className="mr-1 text-blue-400" /> {testimonial.handle}
                  </div>
                </div>
              </div>

              <p className="text-textDark/80 leading-relaxed mb-6 flex-grow z-10 font-medium relative">
                "{testimonial.content}"
              </p>

              <div className="text-sm font-semibold text-primary uppercase tracking-wider z-10">
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorTestimonials;
