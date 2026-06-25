import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUp, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_CONTACT, TREATMENTS_DATA } from '../data';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr. Jabbar', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Why Us', href: '#why-choose' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook Page' },
    { icon: Instagram, href: '#', label: 'Instagram Feed' },
    { icon: Linkedin, href: '#', label: 'LinkedIn Academic Profile' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Brand Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F4C81] to-[#1DA1F2] text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-tight text-white">
                  DR. ABDUL JABBAR
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-slate-500 font-medium">
                  SMILE DESIGN CENTER
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Establishing a new paradigm in aesthetic facial orthodontics across Hyderabad, combining elite academic research with painless computerized tooth alignment technologies.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-[#1DA1F2]/20 border border-slate-800 hover:border-[#1DA1F2]/30 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Clinic Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Featured Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Specialist care
            </h4>
            <ul className="space-y-2.5 text-xs">
              {TREATMENTS_DATA.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact summary */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Direct Contact
            </h4>
            <div className="space-y-2 leading-relaxed">
              <p className="font-semibold text-slate-300">Dr. Abdul Jabbar Center</p>
              <p className="text-slate-500 font-mono">Call: {CLINIC_CONTACT.phone}</p>
              <p className="text-slate-500">{CLINIC_CONTACT.email}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-sans">
            &copy; {currentYear} Dr. Abdul Jabbar Orthodontics & Smile Design Center. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-slate-500 hover:text-white underline cursor-pointer"
            >
              Privacy Policy & Clinical Disclaimer
            </button>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500 font-sans">Saddar, Hyderabad, PK</span>
          </div>
        </div>

      </div>

      {/* Back to Top Floating shortcut (redundant but nice reference) */}
      <a
        href="#home"
        className="fixed bottom-6 right-24 z-30 p-3 rounded-full bg-[#0F4C81] text-white hover:bg-[#0c3d68] shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </a>

      {/* Privacy Policy & Disclaimer Popup Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl p-6 sm:p-8 max-w-lg shadow-2xl border border-slate-200 dark:border-slate-800 z-10 max-h-[80vh] overflow-y-auto"
            >
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00C9A7]" />
                <span>Clinical Ethics & Privacy Disclaimer</span>
              </h3>
              
              <div className="mt-4 space-y-4 text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                <p>
                  <strong>Patient Data Safety:</strong> Any contact info, phone details, and names logged on this consultation website are strictly preserved in local offline cache environments (such as client browser local storage).
                </p>
                <p>
                  <strong>Clinical Guarantee:</strong> Orthodontic treatments, aligners, and braces depend heavily on biological bone-remodeling dynamics, hygiene cooperation, and periodic clinical reviews. Thus, treatment estimates are standard clinical guidelines and not absolute guarantees.
                </p>
                <p>
                  <strong>Academic Reference:</strong> References to academic lectures, publications, and positions refer to accredited affiliations of Dr. Abdul Jabbar in accordance with PMDC (Pakistan Medical & Dental Council) ethical frameworks.
                </p>
              </div>

              <button
                onClick={() => setShowPrivacy(false)}
                className="mt-6 w-full py-3 bg-[#0F4C81] text-white rounded-xl text-xs font-bold hover:bg-[#0c3d68] transition-colors"
              >
                Acknowledge and Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
