import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Stethoscope, Compass, Hammer, Sparkles, Check, ShieldCheck } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Detailed Consultation',
      short: 'Consultation',
      description: 'Your smile transformation journey begins with a private consultation. Dr. Abdul Jabbar conducts a comprehensive clinical facial evaluation to understand your concerns and ultimate aesthetic and functional goals.',
      icon: MessageSquare,
      time: 'Day 1',
      details: [
        'Detailed facial aesthetics and symmetry mapping',
        'Direct check of temporomandibular joint (TMJ) function',
        'In-depth discussion of aligner, ceramic, and metal options'
      ]
    },
    {
      step: '02',
      title: 'Advanced Diagnosis & X-Rays',
      short: 'Diagnosis',
      description: 'We perform complete high-resolution digital scanning, panoramic X-rays, and lateral cephalometric imaging to map your dental and skeletal structures. No messy manual paste impressions are ever used.',
      icon: Stethoscope,
      time: 'Day 3',
      details: [
        'High-fidelity digital intra-oral scan mapping',
        'Cephalometric and panoramic skeletal diagnostics',
        'Clinical high-definition orthodontic facial photo series'
      ]
    },
    {
      step: '03',
      title: 'Digital Treatment Planning',
      short: 'Planning',
      description: 'Using professional 3D CAD/CAM software, Dr. Jabbar designs the precise biological force-curves and trajectory for each tooth. You will preview an interactive simulation of your exact month-by-month tooth realignment.',
      icon: Compass,
      time: 'Day 7',
      details: [
        'Interactive 3D timeline showing final aligned teeth',
        'Custom bracket and memory wire setup mapping',
        'Accurate planning to prevent unnecessary tooth extractions'
      ]
    },
    {
      step: '04',
      title: 'Active Orthodontic Treatment',
      short: 'Active Care',
      description: 'Orthodontic brackets are safely placed with premium medical adhesives, or custom clear aligners are delivered. Periodic adjustment check-ups are scheduled every 4 to 6 weeks to monitor growth and tooth movement.',
      icon: Hammer,
      time: 'Month 1 Onwards',
      details: [
        'Painless clinical placement with bio-compatible adhesives',
        'Detailed customized home care guidelines booklet',
        'Regular force adjustments with progressive high-tech wires'
      ]
    },
    {
      step: '05',
      title: 'Symmetric Smile Transformation',
      short: 'Transformation',
      description: 'Upon attaining ideal functional alignment and facial balance, brackets are gently removed. We perform a specialized enamel-polishing treatment to reveal your new beautiful smile.',
      icon: Sparkles,
      time: 'Completion Day',
      details: [
        'Gentle diagnostic polish and clinical safety checks',
        'Removal of bonding materials without scratching enamel',
        'High-definition before and after smile portrait series'
      ]
    },
    {
      step: '06',
      title: 'Retention & Long-Term Care',
      short: 'Retention',
      description: 'To secure your smile permanently against natural relapse tendencies, we fit state-of-the-art bonded fixed retainers behind the teeth and supply clear, premium removable retainers for nightly wear.',
      icon: ShieldCheck,
      time: 'Post-Treatment',
      details: [
        'Custom thin wire fixed retainer bonded behind front teeth',
        'Thermoplastic clear removable retainers crafted in-house',
        'Complimentary retention monitoring follow-up visits'
      ]
    }
  ];

  return (
    <section
      id="process"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            SMILE TRANSFORMATION JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Our 6-Step Clinical Protocol
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            We guide you through a highly calculated, academic-grade journey from digital assessment to permanent smile stability.
          </p>
        </div>

        {/* Stepper Steps Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-12">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-lg shadow-blue-900/10'
                    : 'bg-slate-50 border-slate-100 hover:border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#00C9A7] text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    Step {step.step}
                  </span>
                  <StepIcon className="w-5 h-5 mt-1" />
                  <span className="text-xs font-bold font-display line-clamp-1">{step.short}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Ambient water-mark step background */}
            <div className="absolute right-6 bottom-4 text-slate-200/40 dark:text-slate-800/20 font-display font-black text-8xl sm:text-9xl pointer-events-none select-none">
              {steps[activeStep].step}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10"
              >
                
                {/* Left Step Stats */}
                <div className="md:col-span-5 space-y-4">
                  <span className="text-[10px] font-extrabold text-[#00C9A7] tracking-widest uppercase bg-[#00C9A7]/10 px-2.5 py-1 rounded-md">
                    Phase {steps[activeStep].step} Timeline: {steps[activeStep].time}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Right Bullet List Checklist */}
                <div className="md:col-span-7 space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    What happens during this phase
                  </h4>
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#00C9A7] text-slate-950 mt-0.5 shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
