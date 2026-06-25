import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, HelpCircle, Check, Eye, ChevronRight } from 'lucide-react';

interface Hotspot {
  id: string;
  title: string;
  coord: { x: string; y: string }; // percentage coordinates on our dental schematic
  description: string;
  clinicalRationale: string;
  aestheticOutcome: string;
  benefits: string[];
}

export default function EducationalHotspots() {
  const [selectedHotspot, setSelectedHotspot] = useState<string>('alignment');

  const hotspots: Hotspot[] = [
    {
      id: 'alignment',
      title: 'Teeth Alignment',
      coord: { x: '48%', y: '40%' },
      description: 'Resolving dental crowding, spacing anomalies, and tooth rotations to create a seamless, cohesive dental arch.',
      clinicalRationale: 'By applying calculated, gentle continuous mechanical force, teeth undergo biological remodeling through bone resorption and deposition, moving safely into targeted pathways.',
      aestheticOutcome: 'Creates a gorgeous, symmetric "buccal corridor" (the dark space visible in the corners of the mouth when smiling) and a radiant line of teeth.',
      benefits: ['Eliminates food impaction zones', 'Reduces localized plaque/calculus buildup', 'Protects teeth from uneven enamel wear']
    },
    {
      id: 'bite',
      title: 'Bite Correction',
      coord: { x: '50%', y: '58%' },
      description: 'Aligning the mechanical relationship between upper and lower dental arches to resolve overbites, underbites, and deep bites.',
      clinicalRationale: 'Coordinates the dental intercuspation, ensuring the chewing forces are distributed evenly across the posterior teeth instead of overloading anterior incisors.',
      aestheticOutcome: 'Restores balanced vertical face proportions, improves lip posture, and eliminates "sunken mouth" appearances.',
      benefits: ['Optimizes chewing and digestive efficiency', 'Relieves chronic TMJ jaw joint pain and clicking', 'Prevents early fractures of front teeth']
    },
    {
      id: 'jaw',
      title: 'Jaw Development',
      coord: { x: '35%', y: '68%' },
      description: 'Intercepting and modifying skeletal growth discrepancies of the maxilla and mandible during childhood or puberty.',
      clinicalRationale: 'Uses orthopedic devices like palatal expanders and growth-guidance appliances to gently widen narrow skeletal bones before the mid-palatal suture fuses.',
      aestheticOutcome: 'Broadens the upper arch for a premium, wider smile, aligns jaw projections, and balances the lateral facial profile.',
      benefits: ['Prevents the need for surgical jaw corrections later', 'Improves nasal airflow and airway breathing capacity', 'Aligns facial bone asymmetry']
    },
    {
      id: 'smile',
      title: 'Smile Design',
      coord: { x: '65%', y: '32%' },
      description: 'Harmonizing tooth lengths, shapes, and angles with the golden proportions of the lips, face, and gums.',
      clinicalRationale: 'Maps the incisal edges of the teeth to align perfectly with the curvature of the lower lip during a moderate smile (Smile Arc theory).',
      aestheticOutcome: 'Delivers a youthful, vibrant smile where teeth follow the natural lip curve, minimizing excess gum show ("gummy smile").',
      benefits: ['Establishes golden mathematical beauty ratios', 'Maximizes dynamic facial aesthetics', 'Customized to age, gender, and lip posture']
    },
    {
      id: 'facial',
      title: 'Facial Balance',
      coord: { x: '50%', y: '16%' },
      description: 'Structuring the soft tissues of the lower third of the face (cheeks, lips, chin) to align with global aesthetic profiles.',
      clinicalRationale: 'Adjusts tooth support angles to change how lips drape over teeth. Moving front teeth back or front adjusts lip fullness and chin prominence.',
      aestheticOutcome: 'Produces a strong, symmetric, and youthful lateral profile, with highly refined cheek and jaw contours.',
      benefits: ['Optimizes natural profile angles', 'Supports lip volumes and prevents premature aging lines', 'Coordinates soft tissue harmony']
    }
  ];

  const activeData = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <section
      id="orthodontics-explained"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            BIOMECHANICS & AESTHETICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            What Orthodontics Really Does
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Beyond standard tooth alignment, professional orthodontics is a science of facial bone orthopedics, soft-tissue draping, and neuromusculoskeletal harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Interactive Schematic Vector Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-xl p-6 sm:p-10 relative overflow-hidden flex flex-col items-center">
              
              {/* Header inside schematic */}
              <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    SMILE ARCHITECT GRID v1.4
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* The Schematic Arch Container */}
              <div className="relative w-full max-w-[340px] aspect-square rounded-full border-2 border-dashed border-slate-200 dark:border-slate-800/80 p-8 flex items-center justify-center">
                
                {/* Simulated dental arch lines */}
                <svg className="absolute inset-0 w-full h-full text-slate-200 dark:text-slate-800/60" viewBox="0 0 100 100">
                  {/* Outer curve */}
                  <path d="M 15 80 A 35 35 0 0 1 85 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  {/* Central vertical axis of facial symmetry */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                  {/* Horizontal bipupillary referential axis */}
                  <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                </svg>

                {/* Highly stylized clinical dental arch graphics */}
                <div className="w-full h-full rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center relative bg-slate-50/50 dark:bg-slate-900/30">
                  
                  {/* Centered representation of beautiful teeth layout */}
                  <div className="w-32 h-32 rounded-full border-4 border-[#1DA1F2]/10 dark:border-sky-500/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0F4C81]/10 to-[#1DA1F2]/20 dark:from-sky-950/30 dark:to-emerald-950/30 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#00C9A7]" />
                    </div>
                  </div>

                  {/* Dynamic Hotspot Nodes */}
                  {hotspots.map((hotspot) => {
                    const isSelected = selectedHotspot === hotspot.id;
                    return (
                      <button
                        key={hotspot.id}
                        onClick={() => setSelectedHotspot(hotspot.id)}
                        style={{ left: hotspot.coord.x, top: hotspot.coord.y }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                      >
                        <div className="relative">
                          {/* Pulsing glow ring */}
                          <span className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                            isSelected 
                              ? 'bg-[#00C9A7]/30 scale-125' 
                              : 'bg-[#1DA1F2]/10 group-hover:bg-[#1DA1F2]/20 scale-100'
                          }`} />
                          
                          {/* Inner solid node point */}
                          <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-md ${
                            isSelected
                              ? 'bg-[#00C9A7] border-white dark:border-slate-950 text-white'
                              : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>

                          {/* Float labels */}
                          <span className={`absolute left-7 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase transition-all whitespace-nowrap shadow-sm border ${
                            isSelected
                              ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                              : 'bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 group-hover:text-slate-900 dark:group-hover:text-white'
                          }`}>
                            {hotspot.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Schematic footer caption */}
              <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center max-w-sm mt-8 font-mono leading-relaxed">
                Click any coordinate hotspot node above to explore the exact skeletal, muscular, and bio-mechanical structural results.
              </p>

            </div>
          </div>

          {/* Right Side: Educational Detail Dashboard Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-xl p-8 sm:p-10 flex flex-col justify-between h-full relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHotspot}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#00C9A7] tracking-widest uppercase bg-[#00C9A7]/10 px-3 py-1 rounded-full">
                      Orthodontic Vector Focus
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      {hotspots.indexOf(activeData) + 1} / {hotspots.length}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                    {activeData.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {activeData.description}
                  </p>

                  {/* Scientific Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    
                    {/* Clinical Column */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2]">
                        <Info className="w-3.5 h-3.5" />
                        <span>Clinical Mechanism</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {activeData.clinicalRationale}
                      </p>
                    </div>

                    {/* Aesthetic Column */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#00C9A7]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Aesthetic Outcome</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {activeData.aestheticOutcome}
                      </p>
                    </div>

                  </div>

                  {/* Bullet Benefits Check */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Key Health & Stability Advantages
                    </h4>
                    <div className="space-y-2">
                      {activeData.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          <div className="p-0.5 rounded-full bg-[#00C9A7]/10 text-[#00C9A7] shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Consultation shortcut banner */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Need a diagnostic skeletal evaluation?
                </span>
                <a
                  href="#booking"
                  className="px-4.5 py-2.5 bg-[#0F4C81] text-white rounded-xl text-xs font-bold hover:bg-[#0c3d68] transition-colors flex items-center gap-1.5"
                >
                  <span>Request Analysis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
