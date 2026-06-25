import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, HelpCircle, Sparkles, ChevronRight, Check } from 'lucide-react';
import { CASE_STUDIES } from '../data';

export default function Gallery() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = CASE_STUDIES[activeCaseIdx];

  // Handle the Before & After Drag Comparison Slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStartDrag = () => {
    isDragging.current = true;
  };

  const handleStopDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleStopDrag);
    window.addEventListener('touchend', handleStopDrag);
    return () => {
      window.removeEventListener('mouseup', handleStopDrag);
      window.removeEventListener('touchend', handleStopDrag);
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Clinical Proof & Artistry
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Smile Transformation Gallery
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Real photographic case outcomes of Dr. Abdul Jabbar’s patients. Drag the interactive slider to witness the biological alignment and cosmetic transformation.
          </p>
        </div>

        {/* Case Studies Navigation Tabs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-12">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => {
                setActiveCaseIdx(idx);
                setSliderPosition(50); // Reset slider to center
              }}
              className={`w-full md:w-auto px-5 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                activeCaseIdx === idx
                  ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-lg shadow-blue-900/10'
                  : 'bg-white text-slate-500 border-slate-200/50 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400'
              }`}
            >
              Case {idx + 1}: {study.treatmentType}
            </button>
          ))}
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Before & After comparison slider */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
              <Eye className="w-4 h-4 text-[#1DA1F2]" />
              <span>Interactive Drag View (Before vs. After)</span>
            </div>

            {/* Slider Frame */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
              className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-900 cursor-ew-resize select-none"
            >
              {/* After Image (Full width background) */}
              <img
                src={activeCase.afterImage}
                alt="Perfect smile after orthodontic treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-4 bottom-4 z-10 bg-[#00C9A7] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                After
              </div>

              {/* Before Image (Positioned absolutely and clipped to slider percentage) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="Smile alignment before treatment"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute left-4 bottom-4 z-10 bg-slate-900/80 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Before
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Slider Handle button */}
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-2 border-[#1DA1F2] dark:border-slate-800 shadow-xl flex items-center justify-center shrink-0 -mx-4.5 select-none hover:scale-105 active:scale-95 transition-transform duration-200">
                  <div className="flex items-center gap-0.5">
                    <span className="w-1 h-3 bg-slate-300 dark:bg-slate-700 rounded-full" />
                    <span className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full" />
                    <span className="w-1 h-3 bg-slate-300 dark:bg-slate-700 rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Case Details & Clinical sheet */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] font-extrabold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-widest bg-[#0F4C81]/10 dark:bg-sky-500/10 px-2.5 py-1 rounded-md">
                    Case Study Analysis
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-3">
                    {activeCase.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-sans italic">
                    "{activeCase.description}"
                  </p>
                </div>

                {/* Patient Case stats */}
                <div className="grid grid-cols-3 gap-3 border-y border-slate-200/50 dark:border-slate-800/40 py-4">
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold block">Patient Age</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white mt-1 block">{activeCase.age} Years</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold block">Treatment Type</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white mt-1 block">{activeCase.treatmentType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold block">Active Duration</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white mt-1 block">{activeCase.duration}</span>
                  </div>
                </div>

                {/* Diagnosis and clinical resolution detail */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
                      <span>Diagnostic Malocclusion Problem</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {activeCase.problem}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Orthodontic Engineering Solution</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Trust endorsement */}
                <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500 text-white mt-0.5 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                    Excellent clinical stability and bite functional balance achieved post-treatment.
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
