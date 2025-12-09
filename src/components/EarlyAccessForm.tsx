import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { earlyAccessSchema, type EarlyAccessFormData } from '../lib/validation';
import SuccessModal from './SuccessModal';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const EarlyAccessForm = () => {
    const [step, setStep] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const totalSteps = 4;

    const { register, handleSubmit, formState: { errors, isSubmitting }, trigger, reset, watch } = useForm<EarlyAccessFormData>({
        resolver: zodResolver(earlyAccessSchema) as any,
        mode: 'onChange'
    });
    
    // Watch fields for logic if needed
    const formData = watch();

    const onSubmit = async (data: EarlyAccessFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form Submitted:', data);
        setShowSuccessModal(true);
        reset();
        setStep(1);
    };

    const nextStep = async () => {
        let fieldsToValidate: (keyof EarlyAccessFormData)[] = [];
        if (step === 1) fieldsToValidate = ['fullName', 'email'];
        if (step === 2) fieldsToValidate = ['primaryPlatform', 'contentType'];
        if (step === 3) fieldsToValidate = ['videoFrequency', 'currentWorkflow'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    return (
        <div id="form-section" className="min-h-screen py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden flex items-center">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                   animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" 
                />
                <motion.div 
                   animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
                   transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-12 shadow-2xl">
                    
                    {/* Progress Bar */}
                    <div className="mb-10">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
                            <span>Step {step} of {totalSteps}</span>
                            <span>{showSuccessModal ? 100 : Math.round((step / (totalSteps + 1)) * 100)}% Complete</span>
                        </div>
                        <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${showSuccessModal ? 100 : (step / (totalSteps + 1)) * 100}%` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">Siapa nama kamu?</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Nama Lengkap</label>
                                        <input 
                                            {...register('fullName')}
                                            className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:bg-black/30 focus:border-white transition-colors"
                                            placeholder="e.g. Budi Gaming"
                                        />
                                        {errors.fullName && <p className="text-red-300 text-sm mt-1">{errors.fullName.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                                        <input 
                                            {...register('email')}
                                            type="email"
                                            className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:bg-black/30 focus:border-white transition-colors"
                                            placeholder="budi@example.com"
                                        />
                                        {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div 
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">Di mana kamu biasa upload?</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Platform Utama</label>
                                            <select 
                                                {...register('primaryPlatform')}
                                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-black/30 focus:border-white transition-colors appearance-none"
                                            >
                                                <option value="" className="text-textDark">Pilih Platform</option>
                                                <option value="youtube" className="text-textDark">YouTube</option>
                                                <option value="tiktok" className="text-textDark">TikTok</option>
                                                <option value="twitch" className="text-textDark">Twitch</option>
                                                <option value="instagram" className="text-textDark">Instagram</option>
                                                <option value="podcast" className="text-textDark">Spotify/Podcast</option>
                                            </select>
                                            {errors.primaryPlatform && <p className="text-red-300 text-sm mt-1">{errors.primaryPlatform.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Tipe Konten</label>
                                            <select 
                                                {...register('contentType')}
                                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-black/30 focus:border-white transition-colors appearance-none"
                                            >
                                                <option value="" className="text-textDark">Pilih Kategori</option>
                                                <option value="gaming" className="text-textDark">Gaming</option>
                                                <option value="comedy" className="text-textDark">Comedy/Entertainment</option>
                                                <option value="education" className="text-textDark">Edukasi/Tutorial</option>
                                                <option value="podcast" className="text-textDark">Podcast/Talkshow</option>
                                                <option value="vlog" className="text-textDark">Vlog/Lifestyle</option>
                                            </select>
                                            {errors.contentType && <p className="text-red-300 text-sm mt-1">{errors.contentType.message}</p>}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div 
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">Seberapa sering kamu upload?</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Frekuensi Video (per bulan)</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {['1-2', '3-5', '6-10', '10+'].map((opt) => (
                                                <label key={opt} className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formData.videoFrequency === opt ? 'bg-white text-primary border-white font-bold' : 'bg-transparent border-white/30 text-white hover:bg-white/10'}`}>
                                                    <input type="radio" value={opt} {...register('videoFrequency')} className="sr-only" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                        {errors.videoFrequency && <p className="text-red-300 text-sm mt-1">{errors.videoFrequency.message}</p>}
                                    </div>
                                    
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-white/80 mb-1">Workflow Sekarang (Optional)</label>
                                        <textarea 
                                            {...register('currentWorkflow')}
                                            className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:bg-black/30 focus:border-white transition-colors h-24 resize-none"
                                            placeholder="Ceritain dikit struggle editing kamu..."
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div 
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">Terakhir!</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-1">Apa frustrasi terbesar kamu saat ini? (Optional)</label>
                                        <textarea 
                                            {...register('frustrationsMain')}
                                            className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:bg-black/30 focus:border-white transition-colors h-24 resize-none"
                                            placeholder="Misal: Capek harus nonton ulang stream..."
                                        />
                                    </div>

                                    <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/20 bg-black/10 hover:bg-black/20 transition-colors">
                                        <input type="checkbox" {...register('whatsappOptIn')} className="w-5 h-5 rounded border-white/30 text-primary focus:ring-primary" />
                                        <span className="text-white text-sm">Boleh hubungi saya via WhatsApp untuk interview user? (Prioritas Akses)</span>
                                    </label>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex gap-4 pt-4 border-t border-white/10">
                            {step > 1 && (
                                <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
                                >
                                    Kembali
                                </button>
                            )}
                            
                            {step < totalSteps ? (
                                <button 
                                    type="button" 
                                    onClick={nextStep}
                                    className="flex-1 px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    Lanjut <FaArrowRight />
                                </button>
                            ) : (
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Mengirim...' : 'Gabung Waitlist - Gratis'} {isSubmitting ? '' : <FaCheck />}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} userName={formData.fullName?.split(' ')[0]} />
        </div>
    );
};

export default EarlyAccessForm;
