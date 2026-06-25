import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Clock, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Real Patient Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Our Patients’ Stories of Change
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Hear from students, engineers, and healthcare professionals who have experienced premium orthodontic alignment under Dr. Abdul Jabbar’s care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonial Carousel Text */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[380px]">
            <div>
              <Quote className="w-12 h-12 text-[#0F4C81]/10 dark:text-sky-300/10 fill-current" />
              
              <div className="relative mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: TESTIMONIALS_DATA[activeIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>

                    {/* Review comment text */}
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed font-sans">
                      "{TESTIMONIALS_DATA[activeIndex].comment}"
                    </p>

                    {/* User profile details */}
                    <div className="flex items-center gap-4 pt-4">
                      <img
                        src={TESTIMONIALS_DATA[activeIndex].image}
                        alt={TESTIMONIALS_DATA[activeIndex].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#1DA1F2] shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white">
                          {TESTIMONIALS_DATA[activeIndex].name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                          {TESTIMONIALS_DATA[activeIndex].role} &bull; Age {TESTIMONIALS_DATA[activeIndex].age}
                        </p>
                        <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#1DA1F2]/10 text-[#0F4C81] dark:text-[#1DA1F2]">
                          Completed: {TESTIMONIALS_DATA[activeIndex].treatment}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Navigation arrows */}
            <div className="flex items-center gap-3 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/40">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81] transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400 font-mono font-bold ml-4">
                {activeIndex + 1} / {TESTIMONIALS_DATA.length} verified reviews
              </span>
            </div>
          </div>

          {/* Right Column: Premium Video Tour / Teaser Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-video lg:aspect-[4/5] flex items-center justify-center bg-slate-900">
              {/* Cover Image mockup */}
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
                alt="Clinic Tour Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Play Badge Trigger */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-slate-950 text-[#0F4C81] dark:text-[#1DA1F2] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer"
              >
                <Play className="w-6 h-6 fill-current text-[#0F4C81] dark:text-[#1DA1F2] translate-x-0.5" />
                <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-60" />
              </button>

              {/* Title Overlay info inside teaser */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase bg-emerald-500/90 tracking-widest text-slate-950 mb-2">
                  <Clock className="w-3 h-3" />
                  <span>3:15 Min Tour</span>
                </span>
                <h4 className="font-display font-extrabold text-base sm:text-lg tracking-tight">
                  Premium Clinic Tour & Sterilization Protocols
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-sans leading-relaxed">
                  Go behind the scenes of our advanced biological hygiene suites and orthodontic imaging bays.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Video Player Modal overlay */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Video Player Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-950 rounded-2xl w-full max-w-4xl aspect-video overflow-hidden z-10 shadow-2xl"
              >
                {/* Mock cinematic video playing message */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white space-y-4">
                  <div className="p-4 rounded-full bg-[#1DA1F2]/20 text-[#1DA1F2] animate-pulse">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                      Clinician's Interview & Virtual Tour
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      This represents a cinematic video introduction showing Dr. Abdul Jabbar explaining orthodontic technology, sterilizations, and treatment timelines.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-6 py-2 bg-white text-slate-950 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Return to website
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
