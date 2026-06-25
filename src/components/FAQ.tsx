import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Informed Decisions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Clear, transparent clinical and financial answers to guide your orthodontic decision with confidence.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-950 border-[#1DA1F2]/40 shadow-md'
                    : 'bg-white/60 dark:bg-slate-950/40 border-slate-200/50 dark:border-slate-800/40 hover:border-slate-300'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500 group-hover:text-[#0F4C81] shrink-0">
                      <HelpCircle className="w-4.5 h-4.5 text-[#1DA1F2]" />
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-white">
                      {item.question}
                    </h3>
                  </div>
                  <span className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-slate-100 dark:border-slate-800/50">
                        <div className="pt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans space-y-4">
                          <p>{item.answer}</p>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-[#00C9A7]" />
                            <span>Category: {item.category} Support</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA below FAQs */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F4C81]/5 border border-[#0F4C81]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
              Still have questions about orthodontic care?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Connect directly with our clinical coordinators to get personalized answers.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold shadow-md inline-flex items-center gap-1.5 self-start sm:self-center transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#00C9A7]" />
            <span>Ask Us Anything</span>
          </a>
        </div>

      </div>
    </section>
  );
}
