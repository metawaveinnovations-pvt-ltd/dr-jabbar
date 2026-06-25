import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, GraduationCap, Briefcase, ChevronRight, Bookmark } from 'lucide-react';
import { DOCTOR_INFO, TIMELINE_DATA } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'experience' | 'credential'>('all');

  const filteredTimeline = TIMELINE_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const memberships = [
    'Life Member, Pakistan Association of Orthodontists (PAO)',
    'Member, World Federation of Orthodontists (WFO, USA)',
    'Fellow of Royal College of Surgeons in Ireland (FFD RCSI)',
    'Registered Specialist Orthodontist, Pakistan Medical & Dental Council (PMDC)',
  ];

  const categories = [
    { id: 'all', label: 'All Milestones' },
    { id: 'academic', label: 'Education & Academic' },
    { id: 'experience', label: 'Clinical Experience' },
    { id: 'credential', label: 'Elite Credentials' },
  ] as const;

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Academic & Clinical Leader
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Meet Your Orthodontist specialist
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Bridging high-tier clinical excellence from the Royal College of Surgeons Ireland with decades of active academic teaching and research as an Associate Professor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Biography & Core Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81]/10 to-[#1DA1F2]/10 rounded-2xl blur-lg group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/50">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Academic Dedication Meets Clinical Precision
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-sans">
                  {DOCTOR_INFO.aboutLong}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-sans">
                  Orthodontics is not just about straight teeth; it is about reshaping skeletal facial harmony, improving airway clearance, and optimizing masticatory performance to boost daily confidence.
                </p>
              </div>
            </div>

            {/* Memberships & Accreditations List */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-[#0F4C81] dark:text-[#1DA1F2]">
                Professional Memberships
              </h4>
              <div className="space-y-3">
                {memberships.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <Bookmark className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5 fill-current" />
                    <span className="font-medium">{member}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Chronology */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Timeline Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md shadow-blue-900/10'
                      : 'bg-transparent text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Timeline Events Stack */}
            <div className="relative border-l-2 border-slate-100 dark:border-slate-800 pl-6 sm:pl-8 space-y-8 py-2">
              <AnimatePresence mode="popLayout">
                {filteredTimeline.map((event, idx) => {
                  let EventIcon = GraduationCap;
                  let iconBg = 'bg-blue-500';
                  if (event.type === 'experience') {
                    EventIcon = Briefcase;
                    iconBg = 'bg-emerald-500';
                  } else if (event.type === 'credential') {
                    EventIcon = Award;
                    iconBg = 'bg-amber-500';
                  }

                  return (
                    <motion.div
                      key={event.year + event.title}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="relative group"
                    >
                      {/* Floating marker node */}
                      <span className={`absolute -left-[39px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full ${iconBg} text-white shadow-md z-10 transition-transform duration-300 group-hover:scale-110`}>
                        <EventIcon className="w-4 h-4" />
                      </span>

                      {/* Timeline Detail Card */}
                      <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-xs font-bold text-[#00C9A7] dark:text-emerald-400 tracking-wide font-mono bg-[#00C9A7]/10 px-2.5 py-1 rounded-md self-start">
                            {event.year}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                            {event.type.toUpperCase()}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mt-3">
                          {event.title}
                        </h4>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#1DA1F2]" />
                          <span>{event.institution}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-sans">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
