import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Download, Heart, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface BlogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  bullets: string[];
}

export default function ResourceCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'hygiene' | 'adults' | 'retention'>('all');

  const articles: BlogArticle[] = [
    {
      id: 'retention',
      title: 'The Science of Braces Retention: Why Fixed Wires Matter',
      category: 'retention',
      readTime: '6 min read',
      date: 'Published June 12, 2026',
      summary: 'Orthodontic alignment physically moves teeth by remodeling underlying jawbones. Learn why teeth have a natural biological memory and why permanent fixed retention is key to preserving your smile.',
      bullets: [
        'Biological mechanism of post-orthodontic bone relapses',
        'Comparing transparent overnight thermoplastic retainers vs. fixed wire bonds',
        'How chewing dynamics shift teeth positions over a lifetime'
      ]
    },
    {
      id: 'hygiene',
      title: 'First Week with Braces: Clinical Hygiene Protocols',
      category: 'hygiene',
      readTime: '4 min read',
      date: 'Published May 28, 2026',
      summary: 'Placing brackets creates tiny crevices where food debris can easily get trapped. Dr. Abdul Jabbar outlines the exact five-stage dental hygiene steps to prevent white spot lesions and decays.',
      bullets: [
        'Interdental orthodontic proxy brushing techniques',
        'Selecting the right water flosser vs. dental wax parameters',
        'Key foods to strictly avoid to prevent broken bracket emergency visits'
      ]
    },
    {
      id: 'adults',
      title: 'Adult Orthodontics: Is It Ever Too Late to Align Teeth?',
      category: 'adults',
      readTime: '5 min read',
      date: 'Published April 15, 2026',
      summary: 'Many patients assume braces are strictly for teenagers. However, modern biomechanical engineering allows patients of any age to achieve beautiful alignment and bite corrections.',
      bullets: [
        'How adult alveolar bone density affects orthodontic tooth translations',
        'Discreet aesthetic Ceramic Braces vs. Clear Aligner systems compared',
        'Resolving chronic TMJ jaw clicking and early enamel wear'
      ]
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || article.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="resources"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            PATIENT EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            The Patient Resource Center
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Explore academic dental publications, post-care instruction sheets, and biological hygiene guides curated personally by Associate Professor Dr. Abdul Jabbar.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clinical articles, guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#1DA1F2] bg-white dark:bg-slate-950 dark:text-white shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {(['all', 'hygiene', 'adults', 'retention'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeTab === tab
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-sm'
                    : 'bg-white dark:bg-slate-950 text-slate-500 border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {tab === 'all' && 'All Articles'}
                {tab === 'hygiene' && 'Hygiene Care'}
                {tab === 'adults' && 'Adult Braces'}
                {tab === 'retention' && 'Retention Systems'}
              </button>
            ))}
          </div>
        </div>

        {/* Articles & Clinical Handouts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Blog Feed Grid (Left Column) */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, idx) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm p-6 sm:p-8 flex flex-col justify-between group hover:border-[#1DA1F2]/25 transition-colors text-left"
                  >
                    <div className="space-y-4">
                      
                      {/* Meta Tags */}
                      <div className="flex items-center gap-3 text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-[#00C9A7]/10 text-[#00C9A7] font-bold uppercase tracking-wider text-[9px]">
                          {article.category === 'hygiene' && 'Clinical Hygiene'}
                          {article.category === 'adults' && 'Adult Orthodontics'}
                          {article.category === 'retention' && 'Skeletal Retention'}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-medium font-mono">{article.readTime}</span>
                        </div>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-400 font-medium font-mono">{article.date}</span>
                      </div>

                      {/* Heading */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      {/* Brief narrative */}
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        {article.summary}
                      </p>

                      {/* Bullets */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        {article.bullets.map((bullet, i) => (
                          <div key={i} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] shrink-0 mt-1.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Article CTA */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-bold font-mono">BY DR. ABDUL JABBAR</span>
                      <a
                        href="#booking"
                        className="font-bold text-[#0F4C81] dark:text-[#1DA1F2] hover:underline flex items-center gap-1"
                      >
                        <span>Discuss this during consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </motion.article>
                ))
              ) : (
                <div className="bg-white dark:bg-slate-950 p-12 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
                  <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                  <h4 className="font-display font-bold text-sm text-slate-700 dark:text-slate-300">No matches found</h4>
                  <p className="text-xs text-slate-400 mt-1 font-sans">Try editing your search query or switching filters.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Handouts Download Panel (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-[#0F4C81]/5 to-[#1DA1F2]/5 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 p-6 sm:p-8 flex flex-col justify-between h-full relative">
              
              <div className="space-y-5 text-left">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Download className="w-5 h-5 text-[#00C9A7]" />
                  <h4 className="font-display font-extrabold text-sm sm:text-base tracking-wide uppercase">
                    Clinical Handouts
                  </h4>
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Instantly access professional digital pamphlets covering braces adaptations, aligner guidelines, and orthodontic first-week tips.
                </p>

                {/* Handout Items stack */}
                <div className="space-y-3 pt-2">
                  {[
                    { title: 'Braces First Week Adaptation Guide', desc: 'Managing minor soreness and orthodontic wax.', type: 'PDF • 1.4 MB' },
                    { title: 'Invisalign Aligner Cleaning Rules', desc: 'Daily cleaning of clear thermoplastic trays.', type: 'PDF • 950 KB' },
                    { title: 'Interdental Brushing Routine Map', desc: 'Detailed photographic hygiene steps.', type: 'JPEG • 2.1 MB' }
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm group hover:border-[#1DA1F2]/30 transition-all cursor-pointer"
                      onClick={() => alert('This educational resource is instantly provided to patients during clinical consultations.')}
                    >
                      <div className="text-left">
                        <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2] transition-colors leading-tight">
                          {doc.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 leading-relaxed font-sans">
                          {doc.desc}
                        </p>
                        <span className="text-[9px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded mt-1.5 inline-block">
                          {doc.type}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 group-hover:bg-[#00C9A7]/10 group-hover:text-[#00C9A7] transition-all shrink-0">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                  <span>PMDC COMPLIANT RESOURCE CENTER</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
