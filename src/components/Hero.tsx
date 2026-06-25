import { motion } from 'motion/react';
import { Calendar, Award, CheckCircle, Shield, MessageCircle, Star, Sparkles } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_CONTACT } from '../data';

interface HeroProps {
  openBookingModal: () => void;
}

export default function Hero({ openBookingModal }: HeroProps) {
  // Create a list of float elements representing orthodontic bracket nodes or light sparkles
  const particles = Array.from({ length: 8 });

  const stats = [
    { value: '14+', label: 'Years Experience', icon: Award, color: 'text-[#0F4C81]' },
    { value: '1,200+', label: 'Successful Smiles', icon: Sparkles, color: 'text-[#00C9A7]' },
    { value: '100%', label: 'Patient Satisfaction', icon: CheckCircle, color: 'text-[#1DA1F2]' },
  ];

  const credentials = [
    'Associate Professor of Orthodontics',
    'FCPS Orthodontist',
    'Fellow of Royal College of Surgeons Ireland (RCSI)',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center bg-gradient-to-b from-[#F8FBFF] via-[#F0F6FF] to-[#F8FBFF] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-25">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 blur-sm"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, Math.random() * -50 - 20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            
            {/* Trust Indicator Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] dark:bg-sky-500/10 dark:text-sky-300 text-xs font-semibold tracking-wider uppercase"
            >
              <Star className="w-3.5 h-3.5 fill-current text-[#00C9A7]" />
              <span>Hyderabad's Premier Orthodontist Specialist</span>
            </motion.div>

            {/* Core Brand Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Transforming Smiles with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#1DA1F2] to-[#00C9A7]">
                Precision Orthodontics
              </span>
            </motion.h1>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Advanced Braces, customized aligners, and elite smile design treatments by{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Dr. Abdul Jabbar</strong>, Associate Professor & Royal College Accredited Consultant.
            </motion.p>

            {/* Credentials Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1"
            >
              {credentials.map((cred, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                >
                  <Shield className="w-3 h-3 text-[#1DA1F2]" />
                  <span>{cred}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              {/* Primary Booking Toggle */}
              <button
                id="hero-book-btn"
                onClick={openBookingModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0F4C81] hover:bg-[#0c3d68] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#00C9A7]" />
                <span>Book Free Assessment</span>
              </button>

              {/* Secondary WhatsApp Direct Connect */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hello%20Dr.%20Abdul%20Jabbar%20Orthodontics%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20smile%20transformation%20assessment.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:shadow-emerald-900/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-4.5 h-4.5 text-white fill-current" />
                <span>WhatsApp Consult</span>
              </a>
            </motion.div>
          </div>

          {/* Right Doctor Portrait / Visual Center */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-full lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent z-10" />
              
              {/* Actual Image */}
              <img
                id="doctor-hero-portrait"
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
                alt="Dr. Abdul Jabbar - Consultant Orthodontist"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating glass overlay card inside the image view */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-4 rounded-2xl border border-white/20">
                <p className="text-[10px] uppercase tracking-widest text-[#00C9A7] font-bold">Currently Welcoming Patients</p>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-1">Dr. Abdul Jabbar, FFD (RCSI)</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Associate Professor & Consultant</p>
              </div>

              {/* Visual accents */}
              <div className="absolute top-4 right-4 z-20 bg-[#00C9A7] text-white p-2.5 rounded-2xl shadow-lg flex items-center gap-1.5 text-xs font-bold animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smile Design specialist</span>
              </div>
            </motion.div>

            {/* Backglow Circle ornament */}
            <div className="absolute -z-10 w-80 h-80 bg-blue-500/10 dark:bg-sky-500/5 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Counter Overlay Section overlapping with next fold */}
        <div id="credentials-bar" className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex items-center gap-5"
                >
                  <div className={`p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color} shrink-0`}>
                    <StatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
