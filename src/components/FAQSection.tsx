import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { cn } from '../lib/utils';
import { popUpVariants, springTransition, viewportConfig } from '../lib/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { 
    question: 'Berapa harga nantinya?', 
    answer: 'Untuk saat ini Early Access 100% GRATIS. Nantinya kami akan pakai model subscription bulanan yang jauh lebih murah daripada hire editor manusia.' 
  },
  { 
    question: 'Apakah support video bahasa daerah?', 
    answer: 'Ya! AI kami dilatih dengan dataset Bahasa Indonesia termasuk dialek Jawa, Sunda, dan slang Jakarta Selatan. Kalau ada yang miss, kamu bisa edit subtitle-nya manual dengan mudah.' 
  },
  {
    question: 'Bisa clip dari Twitch atau file lokal?',
    answer: 'Bisa banget. Kamu bisa paste link YouTube/Twitch atau upload file video (MP4/MOV) langsung dari komputer kamu.'
  },
  {
    question: 'Apakah hasil videonya ada watermark?',
    answer: 'Di versi Early Access ini: TIDAK ADA watermark. Kami mau kamu post hasilnya dan lihat sendiri impact-nya.'
  },
  {
    question: 'Berapa lama prosesnya?',
    answer: 'Tergantung durasi video. Rata-rata video 1 jam selesai diproses dalam 10-15 menit. Kamu bisa tinggal tidur dan terima beres.'
  }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-16 md:py-24 bg-white flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
            <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={viewportConfig}
               transition={springTransition}
                className="text-3xl md:text-5xl font-black mb-4 text-textDark"
            >
                Punya Pertanyaan?
            </motion.h2>
            <p className="text-xl text-textLight">Kami siap jawab kekhawatiran kamu.</p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={popUpVariants}
                    className="border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors bg-white shadow-sm"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className={cn("font-bold text-lg md:text-xl", openIndex === index ? "text-primary" : "text-textDark")}>
                            {faq.question}
                        </span>
                        <motion.div
                             animate={{ rotate: openIndex === index ? 180 : 0 }}
                             transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                             <HiChevronDown className={cn("text-gray-400", openIndex === index ? "text-primary" : "")} size={28} />
                        </motion.div>
                    </button>
                    
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="p-6 pt-0 text-textLight leading-relaxed border-t border-gray-100 bg-gray-50/50 text-lg">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
