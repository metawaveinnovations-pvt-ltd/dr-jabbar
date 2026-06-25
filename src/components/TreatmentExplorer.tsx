import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, X, ShieldCheck, Scale, Calculator, DollarSign, Send, ArrowRight } from 'lucide-react';
import { CLINIC_CONTACT } from '../data';

interface ComparisonCard {
  id: string;
  name: string;
  aesthetics: string;
  comfort: string;
  removable: string;
  duration: string;
  idealFor: string;
  costLevel: string;
  description: string;
}

export default function TreatmentExplorer() {
  const [activeCategory, setActiveCategory] = useState<'braces' | 'aligners' | 'cosmetic'>('aligners');
  const [selectedInquiry, setSelectedInquiry] = useState<string>('aligners');
  const [patientBudgetRange, setPatientBudgetRange] = useState<string>('installments');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const treatments: ComparisonCard[] = [
    {
      id: 'metal',
      name: 'Modern Metal Braces',
      aesthetics: 'Visible metal brackets',
      comfort: 'Moderate (initial 3-5 days adjustment)',
      removable: 'No (fixed bonded brackets)',
      duration: '12 - 24 Months',
      idealFor: 'Complex bites & teen crowding cases',
      costLevel: 'Most affordable / starting at low installments',
      description: 'Highly durable, medical-grade stainless steel brackets utilizing low-friction shape-memory wires.'
    },
    {
      id: 'ceramic',
      name: 'Aesthetic Ceramic Braces',
      aesthetics: 'Semi-translucent, tooth-colored',
      comfort: 'Comfortable with rounded brackets',
      removable: 'No (fixed aesthetic brackets)',
      duration: '12 - 18 Months',
      idealFor: 'Working professionals & university students',
      costLevel: 'Mid-range premium / budget plan eligible',
      description: 'Engineered performance of traditional brackets, but crafted from polycrystalline ceramic materials.'
    },
    {
      id: 'aligners',
      name: 'Premium Clear Aligners',
      aesthetics: 'Virtually 100% invisible',
      comfort: 'High comfort (no sharp metal elements)',
      removable: 'Yes (removable for dining & brushing)',
      duration: '6 - 15 Months',
      idealFor: 'Adults, executives, and active lifestyles',
      costLevel: 'Premium luxury tier / flexible milestones',
      description: 'Slightly progressive series of medical-grade polymer trays designed with 3D CAD/CAM models.'
    },
    {
      id: 'veneers',
      name: 'Porcelain Veneers & DSD',
      aesthetics: 'Instantly flawless tooth shape/shade',
      comfort: 'Excellent immediately after placement',
      removable: 'No (permanently bonded porcelain)',
      duration: '2 - 3 visits (Instant alignment)',
      idealFor: 'Severe stains, minor crowding, spacing gaps',
      costLevel: 'Premium cosmetic tier',
      description: 'State-of-the-art visual planning mapping facial symmetry to design ultra-thin, durable porcelain layers.'
    }
  ];

  const handleCostInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Send a beautifully formulated WhatsApp message or fake API success
    const message = `Assalam-o-Alaikum, my name is ${name}. I am inquiring about the treatment cost of ${selectedInquiry} at Dr. Abdul Jabbar Orthodontics Center. My budget preference is ${patientBudgetRange}. Please send me the details at ${phone}.`;
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CLINIC_CONTACT.whatsapp}?text=${encoded}`;
    
    // Simulate/Trigger action
    window.open(waUrl, '_blank');
    setIsSent(true);
    setName('');
    setPhone('');
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section
      id="treatment-explorer"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            COMPREHENSIVE COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Interactive Treatment Explorer
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Compare options side-by-side and evaluate their visual, physical, and financial attributes to pick your ideal treatment.
          </p>
        </div>

        {/* 1. Comparison Tool Table Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Comparison Matrix Table */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between h-full relative">
              
              <div className="flex items-center gap-2 mb-6 text-slate-950 dark:text-white">
                <Scale className="w-5 h-5 text-[#1DA1F2]" />
                <h3 className="font-display font-extrabold text-sm sm:text-base tracking-wide uppercase">
                  Side-By-Side Alignment Matrix
                </h3>
              </div>

              {/* Responsive Scrollable Comparison Matrix */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="py-3 font-display font-bold text-slate-400 uppercase tracking-wider">Features</th>
                      {treatments.map((t) => (
                        <th key={t.id} className="py-3 px-3 sm:px-4 font-display font-extrabold text-slate-900 dark:text-white">
                          {t.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/50 dark:divide-slate-800/40">
                    <tr>
                      <td className="py-4 text-slate-400 font-medium">Aesthetics</td>
                      {treatments.map((t) => (
                        <td key={t.id} className="py-4 px-4 font-semibold text-slate-600 dark:text-slate-300">
                          {t.aesthetics}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-400 font-medium">Treatment Speed</td>
                      {treatments.map((t) => (
                        <td key={t.id} className="py-4 px-4 font-bold text-[#00C9A7]">
                          {t.duration}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-400 font-medium">Removable?</td>
                      {treatments.map((t) => (
                        <td key={t.id} className="py-4 px-4 font-semibold text-slate-600 dark:text-slate-300">
                          {t.removable}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-400 font-medium">Ideal Candidate</td>
                      {treatments.map((t) => (
                        <td key={t.id} className="py-4 px-4 font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                          {t.idealFor}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-400 font-medium">Investment Tier</td>
                      {treatments.map((t) => (
                        <td key={t.id} className="py-4 px-4 font-bold text-[#0F4C81] dark:text-[#1DA1F2] leading-tight">
                          {t.costLevel}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2.5 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                <span>Final options depend heavily on clinical skeletal x-ray diagnosis by Dr. Abdul Jabbar.</span>
              </div>

            </div>
          </div>

          {/* 2. Interactive Cost Inquiry Form */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#0F4C81]/5 to-[#1DA1F2]/5 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C9A7]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Calculator className="w-5 h-5 text-[#00C9A7]" />
                  <h3 className="font-display font-extrabold text-sm sm:text-base tracking-wide uppercase">
                    Cost & Installment Estimator
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Orthodontics is a lifelong asset. Check pricing levels and request a tailored interest-free monthly installment plan immediately.
                </p>

                {/* Simulated calculator inputs */}
                <form onSubmit={handleCostInquirySubmit} className="space-y-4 pt-2 text-left">
                  
                  {/* Select Treatment */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Interested Treatment
                    </label>
                    <select
                      value={selectedInquiry}
                      onChange={(e) => setSelectedInquiry(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#1DA1F2] bg-white dark:bg-slate-900 dark:text-white"
                    >
                      <option value="Premium Clear Aligners">Premium Clear Aligners</option>
                      <option value="Aesthetic Ceramic Braces">Aesthetic Ceramic Braces</option>
                      <option value="Modern Metal Braces">Modern Metal Braces</option>
                      <option value="Porcelain Veneers">Porcelain Veneers & Smile Design</option>
                    </select>
                  </div>

                  {/* Payment preference */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Preferred Payment Plan
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPatientBudgetRange('installments')}
                        className={`p-2.5 rounded-xl border text-center font-bold text-xs cursor-pointer transition-all ${
                          patientBudgetRange === 'installments'
                            ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-sm'
                            : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        Monthly Installments
                      </button>
                      <button
                        type="button"
                        onClick={() => setPatientBudgetRange('full')}
                        className={`p-2.5 rounded-xl border text-center font-bold text-xs cursor-pointer transition-all ${
                          patientBudgetRange === 'full'
                            ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-sm'
                            : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        Single Full Payment
                      </button>
                    </div>
                  </div>

                  {/* Patient coordinates */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#1DA1F2] bg-white dark:bg-slate-900 dark:text-white"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number (WhatsApp)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#1DA1F2] bg-white dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>Get Cost Estimation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <AnimatePresence>
                    {isSent && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-center text-[10px] text-emerald-600 dark:text-emerald-400 font-bold"
                      >
                        Inquiry compiled successfully! Redirecting you to our clinic coordinator on WhatsApp.
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
