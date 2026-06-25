import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Activity, Eye, FileSpreadsheet, Layers, ShieldAlert, Cpu } from 'lucide-react';

export default function OrthodontistRole() {
  const cards = [
    {
      id: 'diagnosis',
      title: 'Precision Diagnosis',
      badge: 'Level 01: Identification',
      icon: ShieldAlert,
      color: 'from-amber-500/10 to-amber-600/5 text-amber-600 dark:text-amber-400',
      description: 'Orthodontists are masters of dentofacials. Dr. Abdul Jabbar maps the genetic, skeletal, and functional aspects of teeth alignment and jaw posture.',
      subheads: [
        { label: 'Crooked Teeth & Rotations', desc: 'Evaluating crowded alignments preventing functional cleaning.' },
        { label: 'Bite Malocclusions', desc: 'Sizing overbites, underbites, crossbites, and deep bites.' },
        { label: 'Skeletal Jaw Alignment', desc: 'Measuring jaw asymmetry and profile disharmony.' }
      ]
    },
    {
      id: 'planning',
      title: 'Digital Treatment Planning',
      badge: 'Level 02: Bio-Engineering',
      icon: Target,
      color: 'from-blue-500/10 to-blue-600/5 text-[#1DA1F2] dark:text-sky-300',
      description: 'Aligning teeth requires calculating the exact mathematical force boundaries. Every movement is planned digitally before custom devices are produced.',
      subheads: [
        { label: '3D Computerized Analysis', desc: 'Using CAD systems to simulate monthly bone remodeling stages.' },
        { label: 'Customized Tooth Vectors', desc: 'Aligning wire-force vectors precisely with tooth roots.' },
        { label: 'Facial Harmony Calculations', desc: 'Planning the lips draping ratio for natural aesthetics.' }
      ]
    },
    {
      id: 'treatment',
      title: 'Active Treatment Delivery',
      badge: 'Level 03: Force Mechanics',
      icon: Activity,
      color: 'from-emerald-500/10 to-emerald-600/5 text-emerald-600 dark:text-emerald-400',
      description: 'Active tooth alignment involves the application of medical brackets, expansion devices, and custom clear aligners for gentle realignment.',
      subheads: [
        { label: 'Custom Orthodontic Braces', desc: 'Placing low-friction metal or semi-translucent ceramic systems.' },
        { label: 'Palatal & Skeletal Expanders', desc: 'Correcting jaw bone discrepancies non-surgically during active growth.' },
        { label: 'Clear Aligners Trays', desc: 'Guiding teeth using removable, medical-grade polymer trays.' }
      ]
    },
    {
      id: 'monitoring',
      title: 'Long-Term Retention',
      badge: 'Level 04: Bone Stability',
      icon: ShieldCheck,
      color: 'from-[#0F4C81]/10 to-[#1DA1F2]/5 text-[#0F4C81] dark:text-sky-200',
      description: 'Because bone retains a biological memory, teeth will relapse without stabilizers. We lock the smile permanently.',
      subheads: [
        { label: 'Fixed Bonded Retainers', desc: 'Custom thin medical wires hidden behind the teeth.' },
        { label: 'Removable Nightly Trays', desc: 'Durable clear retainers maintaining alignment during sleep.' },
        { label: 'Post-Treatment Monitoring', desc: 'Periodic check-ups to confirm joint stability and chewing health.' }
      ]
    }
  ];

  return (
    <section
      id="orthodontist-role"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            ACADEMIC PERSPECTIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            What Does an Orthodontist Really Do?
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            While general dental practitioners focus on teeth health, decays, and crowns, an Orthodontist is a specialized facial architect focused on dentofacial orthopedics and bite engineering.
          </p>
        </div>

        {/* Premium Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col justify-between bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-[#1DA1F2]/30 dark:hover:border-[#1DA1F2]/30 transition-all shadow-sm"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${card.color} shadow-sm shrink-0`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>

                  {/* Scientific Subheadings */}
                  <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-4.5 space-y-3.5">
                    {card.subheads.map((sub, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] shrink-0 mt-1.5" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {sub.label}
                          </h4>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-sans mt-0.5 leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Footer Accent */}
                <div className="mt-8 pt-4 border-t border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>BIO-COMPATIBLE SYSTEMS</span>
                  <span className="text-[#00C9A7] font-bold">● DR JABBAR CERTIFIED</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
