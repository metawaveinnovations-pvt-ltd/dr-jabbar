import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scan, Cpu, Layers, Laptop, Smartphone, Check, Sparkles, Database } from 'lucide-react';

interface TechItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  shortDesc: string;
  clinicalImpact: string;
  patientBenefit: string;
  technicalSpecs: string[];
  mockImageUrl: string;
}

export default function TechnologyShowcase() {
  const [selectedTech, setSelectedTech] = useState<string>('scanning');

  const techList: TechItem[] = [
    {
      id: 'scanning',
      title: '3D Intra-Oral Digital Scanning',
      category: 'Diagnostic Imaging',
      icon: Scan,
      shortDesc: 'Replaces uncomfortable traditional silicone dental pastes with real-time 3D mathematical surface rendering.',
      clinicalImpact: 'Generates ultra-precise 3D structural tooth maps with micron-level accuracy, capturing details that traditional mold materials miss.',
      patientBenefit: 'Completely comfortable, fast, gag-free clinical experience with instant results available on screen.',
      technicalSpecs: [
        'Captures 3,000 frames per second inside the oral cavity',
        'Direct mathematical rendering of tooth depth coordinates',
        'Directly compatible with CAD/CAM aligner modeling suites'
      ],
      mockImageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'planning',
      title: '3D CAD/CAM Aligner Planning',
      category: 'Treatment Simulation',
      icon: Laptop,
      shortDesc: 'Advanced orthodontic simulation software mapping precise biological pathways and movement forces.',
      clinicalImpact: 'Enables Dr. Abdul Jabbar to plan individual tooth rotations and translations using precise mathematical curves.',
      patientBenefit: 'Allows you to visually preview your finished straight smile on a monitor before brackets are ever bonded.',
      technicalSpecs: [
        'Calculates safe, sub-millimeter tooth translation forces',
        'Staged orthodontic tooth step animations produced in minutes',
        'Optimizes total treatment timelines by up to 25%'
      ],
      mockImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'wires',
      title: 'Shape-Memory Alloys',
      category: 'Orthodontic Appliances',
      icon: Cpu,
      shortDesc: 'NASA-developed nickel-titanium smart archwires that react dynamically to oral heat levels.',
      clinicalImpact: 'Applies a highly consistent, light, physiological continuous force that remains stable over long periods.',
      patientBenefit: 'Significantly less post-adjustment soreness, smoother tooth movement, and fewer clinical appointments.',
      technicalSpecs: [
        'Heat-activated thermal transformation thresholds',
        'Exerts uniform light pressure to prevent tooth root damage',
        'Substantially reduces emergency wire breakage incidents'
      ],
      mockImageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'monitoring',
      title: 'Digital Treatment Tracking',
      category: 'Patient Monitoring',
      icon: Smartphone,
      shortDesc: 'High-frequency clinical checkups integrated with advanced photogrammetric analysis.',
      clinicalImpact: 'Tracks minor tooth deviations from the planned 3D template in real-time, allowing immediate wire recalibrations.',
      patientBenefit: 'Guarantees your treatment stays perfectly on schedule, avoiding delays and keeping you updated.',
      technicalSpecs: [
        'Real-time photogrammetric tooth progress verification',
        'Direct clinic-to-patient instant messaging channels',
        'Auto-alert notification logs for aligner tray changes'
      ],
      mockImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const activeTech = techList.find((t) => t.id === selectedTech) || techList[0];
  const ActiveIcon = activeTech.icon;

  return (
    <section
      id="tech-innovation"
      className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            CLINICAL INNOVATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Precision Through Technology
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            By integrating international academic advancements, Dr. Abdul Jabbar Orthodontics replaces manual dental guesswork with microscopic diagnostic accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Technology Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            <div className="space-y-3">
              {techList.map((tech) => {
                const Icon = tech.icon;
                const isSelected = selectedTech === tech.id;

                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'bg-white dark:bg-slate-950 border-[#1DA1F2] shadow-md dark:shadow-none'
                        : 'bg-transparent border-slate-200/60 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#0F4C81] text-white'
                        : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-semibold tracking-wider text-[#00C9A7] uppercase">
                        {tech.category}
                      </span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                        {tech.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick trust badge below selector */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-950/30 flex gap-3">
              <Database className="w-5 h-5 text-[#00C9A7] shrink-0 mt-0.5 animate-pulse" />
              <div className="text-left">
                <h5 className="font-display font-bold text-xs text-slate-900 dark:text-white">HIPAA Secure Server Systems</h5>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans mt-0.5 leading-relaxed">
                  Your 3D scans, diagnostic X-rays, and treatment charts are encrypted and stored inside ISO-certified dental databases securely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Active Technology Visual Details */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-xl p-6 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#0F4C81]/5 to-[#1DA1F2]/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTech}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#00C9A7]/10 text-[#00C9A7]">
                        <ActiveIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#0F4C81] dark:text-[#1DA1F2] uppercase block">
                          Active System Module
                        </span>
                        <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-white mt-0.5">
                          {activeTech.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-md text-slate-500 dark:text-slate-400 self-start sm:self-center">
                      {activeTech.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-start">
                    
                    {/* Visual schematic panel */}
                    <div className="md:col-span-5 space-y-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-square bg-slate-900 border border-slate-800 group">
                        <img
                          src={activeTech.mockImageUrl}
                          alt={activeTech.title}
                          className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />
                        
                        {/* Live Overlay */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500 text-[8px] font-mono font-bold text-slate-950 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                          <span>Simulated Model</span>
                        </div>
                      </div>
                    </div>

                    {/* Scientific narrative */}
                    <div className="md:col-span-7 space-y-5">
                      
                      <div className="space-y-1.5">
                        <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          Clinical & Architectural Objective
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                          {activeTech.shortDesc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <h6 className="text-[10px] font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-wide">
                            Clinical Advantage
                          </h6>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                            {activeTech.clinicalImpact}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <h6 className="text-[10px] font-bold text-[#00C9A7] uppercase tracking-wide">
                            Patient Comfort
                          </h6>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                            {activeTech.patientBenefit}
                          </p>
                        </div>
                      </div>

                      {/* Technical specifications logs */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          Technical Performance Metrics
                        </h5>
                        <div className="space-y-1.5">
                          {activeTech.technicalSpecs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                              <Check className="w-3.5 h-3.5 text-[#00C9A7] shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
