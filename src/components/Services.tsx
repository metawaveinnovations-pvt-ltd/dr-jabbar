import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { TREATMENTS_DATA } from '../data';
import { TreatmentService } from '../types';

interface ServicesProps {
  openBookingModal: () => void;
}

export default function Services({ openBookingModal }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Braces' | 'Cosmetic' | 'Surgical'>('All');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentService | null>(null);

  const categories = ['All', 'Braces', 'Cosmetic', 'Surgical'] as const;

  const filteredTreatments = TREATMENTS_DATA.filter((t) => {
    if (selectedCategory === 'All') return true;
    return t.category === selectedCategory;
  });

  // Dynamically retrieve Lucide icon component by name string
  const renderIcon = (iconName: string) => {
    // Falls back to Sparkles if string lookup fails
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Elite Clinical Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Specialist Treatments & Services
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Every smile is engineered with personalized orthodontic protocols, utilizing non-extraction principles and state-of-the-art biological force calculations.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center gap-2 pb-12 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-lg shadow-blue-900/10'
                  : 'bg-white text-slate-500 border-slate-200/60 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700/60 dark:hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Treatments' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid with entrance animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment, idx) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative h-full flex flex-col justify-between p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:shadow-md hover:border-[#1DA1F2]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-[#F0F6FF] dark:bg-slate-900 text-[#0F4C81] dark:text-[#1DA1F2] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300">
                      {renderIcon(treatment.iconName)}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Service Text */}
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-sans leading-relaxed line-clamp-3">
                      {treatment.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="relative pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/40 mt-5">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    Est: {treatment.duration}
                  </span>
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] hover:underline cursor-pointer group/btn"
                  >
                    <span>Learn More</span>
                    <LucideIcons.ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Treatment Drawer / Modal Overlay */}
        <AnimatePresence>
          {selectedTreatment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTreatment(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>

                {/* Treatment Banner Header */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="p-4 rounded-2xl bg-[#0F4C81]/10 text-[#0F4C81] dark:bg-sky-500/10 dark:text-sky-300">
                    {renderIcon(selectedTreatment.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#00C9A7] tracking-widest uppercase bg-[#00C9A7]/10 px-2.5 py-1 rounded-md">
                      {selectedTreatment.category} Specialist Treatment
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1.5">
                      {selectedTreatment.title}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Medical Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Overview & Clinical Details
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {selectedTreatment.longDesc}
                    </p>
                  </div>

                  {/* Treatment Specs Info block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                      <p className="text-xs text-slate-400 dark:text-slate-500">Typical Treatment Duration</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white mt-1 flex items-center gap-1.5">
                        <LucideIcons.Clock className="w-4 h-4 text-[#1DA1F2]" />
                        <span>{selectedTreatment.duration}</span>
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                      <p className="text-xs text-slate-400 dark:text-slate-500">Recovery & Post-OP Comfort</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white mt-1 flex items-center gap-1.5">
                        <LucideIcons.Activity className="w-4 h-4 text-[#00C9A7]" />
                        <span>{selectedTreatment.recovery}</span>
                      </p>
                    </div>
                  </div>

                  {/* Specific FAQ Question */}
                  <div className="p-5 rounded-2xl bg-[#0F4C81]/5 dark:bg-slate-900/50 border border-[#0F4C81]/10 space-y-2">
                    <p className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-wider">
                      Frequently Asked Question
                    </p>
                    <h5 className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                      {selectedTreatment.faq.q}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {selectedTreatment.faq.a}
                    </p>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setSelectedTreatment(null);
                        openBookingModal();
                      }}
                      className="w-full py-3.5 bg-[#0F4C81] text-white text-xs font-bold rounded-xl shadow-lg hover:bg-[#0c3d68] transition-colors"
                    >
                      Book In-Clinic Assessment
                    </button>
                    <button
                      onClick={() => setSelectedTreatment(null)}
                      className="w-full py-3.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                    >
                      Close Window
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
