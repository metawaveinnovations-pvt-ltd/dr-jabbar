import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Cpu, FileHeart, Users, Coffee, Check, ShieldCheck } from 'lucide-react';

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  const keyPillars = [
    {
      id: 'specialist',
      title: 'Highly Qualified Specialist',
      short: 'Royal College Accredited (FFD RCSI)',
      description: 'Dr. Abdul Jabbar is one of the very few orthodontists in Pakistan who holds a Fellowship from the prestigious Royal College of Surgeons in Ireland (FFD RCSI). This indicates compliance with the highest standards of clinical dental ethics, safety, and precision globally.',
      icon: Award,
      bullets: [
        'FFD (Royal College of Surgeons in Ireland) accreditation',
        'FCPS Fellow, College of Physicians and Surgeons Pakistan',
        'Over 14 years of highly focused orthodontic cases',
        'Specialization in conservative non-extraction techniques'
      ]
    },
    {
      id: 'academic',
      title: 'Academic Excellence',
      short: 'Associate Professor & Research Leader',
      description: 'His role as an Associate Professor of Orthodontics at the region’s premier medical university means he actively teaches the next generation of dentists. It ensures your treatment plan is designed using advanced, scientifically validated orthodontic procedures.',
      icon: BookOpen,
      bullets: [
        'Published 15+ peer-reviewed orthodontic articles',
        'Dual clinical and academic practice advantages',
        'Continuous research in skeletal growth modifications',
        'Supervising postgraduate clinical theses'
      ]
    },
    {
      id: 'tech',
      title: 'Advanced Technology',
      short: 'CAD/CAM & Digital Smile Design',
      description: 'We believe in replacing guesswork with precision. Our clinic is equipped with elite digital smile planning engines, CAD/CAM aligner software, high-definition intra-oral cameras, and low-radiation 3D diagnostic panoramic cephalometric imaging.',
      icon: Cpu,
      bullets: [
        'Digital smile pre-visualizations before treatment starts',
        'Low-radiation digital safety protocols',
        'High-fidelity intra-oral scanning (no messy paste)',
        '3D biological force dental planning models'
      ]
    },
    {
      id: 'plans',
      title: 'Personalized Treatment Plans',
      short: 'Bespoke Facial Aesthetics Design',
      description: 'No two smiles are identical. Dr. Jabbar designs comprehensive treatment plans based on detailed evaluations of your unique lip line, jaw symmetry, facial profile proportions, and chewing kinematics to ensure a beautiful and stable bite.',
      icon: FileHeart,
      bullets: [
        'Individualized wire memory customization',
        'Respects natural facial skeletal profile',
        'Conservative extraction-avoidance protocols',
        'Continuous monthly progress monitoring'
      ]
    },
    {
      id: 'care',
      title: 'Patient-Centered Care',
      short: 'Deep Empathy & Installment Plans',
      description: 'Orthodontic care is a journey of trust. We prioritize your convenience by offering friendly scheduling, immediate answers to dental emergency calls, highly transparent pricing structures, and affordable interest-free monthly installment packages.',
      icon: Users,
      bullets: [
        'Dedicated clinical coordinators for your questions',
        'Interest-free monthly budget payment schedules',
        'Flexible schedules tailored to students and professionals',
        'Rigorous post-treatment retention support systems'
      ]
    },
    {
      id: 'comfort',
      title: 'Comfortable Environment',
      short: 'Luxe Hospitality & Ultra-Sterilization',
      description: 'We redefine clinical atmosphere. Our premium state-of-the-art clinic offers a relaxing lounge, patient refreshments, warm ambient lighting, and strict Class-B steam autoclave sterilization cycles matching European hospital protocols.',
      icon: Coffee,
      bullets: [
        'Five-stage Class-B vacuum sterilization protocols',
        'Luxe, stress-free clinical lounge setting',
        'Friendly support staff speaking English, Urdu, Sindhi',
        'Painless clinical procedures utilizing comforting tech'
      ]
    }
  ];

  return (
    <section
      id="why-choose"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            The Golden Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Why Patients Choose Dr. Abdul Jabbar
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Delivering orthodontic results that align with the rigorous criteria of premium aesthetic clinics across London, Dubai, and New York.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {keyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              const isActive = activeIndex === idx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F0F6FF] to-white dark:from-slate-900 dark:to-slate-950 border-[#1DA1F2] shadow-sm'
                      : 'bg-transparent border-slate-100 dark:border-slate-900 hover:border-slate-200 dark:hover:border-slate-800'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors duration-300 ${
                    isActive
                      ? 'bg-[#0F4C81] text-white'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                  }`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-sm ${
                      isActive ? 'text-[#0F4C81] dark:text-[#1DA1F2]' : 'text-slate-800 dark:text-slate-300'
                    }`}>
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 font-medium uppercase tracking-wide">
                      {pillar.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Detail Panel */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[420px] bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              
              {/* Decorative radial accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4C81]/5 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Title and Icon inside detail */}
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 text-[#0F4C81] dark:text-[#1DA1F2] shadow-sm border border-slate-100 dark:border-slate-800">
                      {(() => {
                        const Icon = keyPillars[activeIndex].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#00C9A7] tracking-widest uppercase">
                        Core Quality Pillar
                      </span>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
                        {keyPillars[activeIndex].title}
                      </h3>
                    </div>
                  </div>

                  {/* Narrative paragraph */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {keyPillars[activeIndex].description}
                  </p>

                  {/* Bullet verifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {keyPillars[activeIndex].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Verified badge footer inside panel */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                  <span>Clinical safety verified standard</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-widest">
                  Pillar {activeIndex + 1} of 6
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
