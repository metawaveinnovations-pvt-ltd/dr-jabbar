import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, AlertCircle, PhoneCall, CheckCircle } from 'lucide-react';

import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EducationalHotspots from './components/EducationalHotspots';
import Process from './components/Process';
import Services from './components/Services';
import OrthodontistRole from './components/OrthodontistRole';
import TechnologyShowcase from './components/TechnologyShowcase';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import TreatmentExplorer from './components/TreatmentExplorer';
import ResourceCenter from './components/ResourceCenter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CLINIC_CONTACT } from './data';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');

  // Synchronize Dark Theme state with document element classes
  useEffect(() => {
    // Check local storage or system preference on load
    const savedTheme = localStorage.getItem('dr_jabbar_theme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkTheme(false);
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkTheme(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dr_jabbar_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dr_jabbar_theme', 'light');
      }
      return newVal;
    });
  };

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  // Handle forwarding the user's micro-WhatsApp chat message
  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    if (!waMessage.trim()) return;

    const encodedMsg = encodeURIComponent(waMessage.trim());
    const waUrl = `https://wa.me/${CLINIC_CONTACT.whatsapp}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
    setWaMessage('');
    setIsWhatsAppOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      
      {/* 1. Global Page Loader */}
      <PageLoader />

      {/* 2. Premium Sticky Header */}
      <Header
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
        openBookingModal={openBookingModal}
      />

      {/* 3. Primary Sections Stack */}
      <main className="relative">
        <Hero openBookingModal={openBookingModal} />
        
        <About />
        
        <EducationalHotspots />
        
        <Process />
        
        <Services openBookingModal={openBookingModal} />
        
        <OrthodontistRole />
        
        <TechnologyShowcase />
        
        <Gallery />
        
        <WhyChoose />
        
        <TreatmentExplorer />
        
        <ResourceCenter />
        
        <Testimonials />
        
        <FAQ />
        
        <BookingForm />
        
        <Contact />
      </main>

      {/* 4. Professional Footer */}
      <Footer />

      {/* 5. Interactive Floating WhatsApp Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        
        {/* WhatsApp Chat drawer box */}
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="mb-4 w-72 sm:w-80 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950 overflow-hidden text-left"
            >
              {/* Box Header */}
              <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150"
                      alt="Clinic Assistant"
                      className="w-9 h-9 rounded-full object-cover border border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-600 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs">Clinic Coordinator</h4>
                    <p className="text-[10px] opacity-80">Online &bull; Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-700/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Box Chat flow area */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 min-h-[100px] text-xs space-y-3">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Assalam-o-Alaikum! Greetings from Dr. Abdul Jabbar Orthodontics Center. How can we help you with your smile transformation today?
                </div>
              </div>

              {/* Chat Input field */}
              <form onSubmit={handleWhatsAppSend} className="p-3 border-t border-slate-100 dark:border-slate-800/60 flex gap-2">
                <input
                  type="text"
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-emerald-500 dark:bg-slate-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 fill-current" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Badge */}
        <button
          id="floating-whatsapp-trigger"
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/20 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 group cursor-pointer z-40"
        >
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out text-xs font-bold whitespace-nowrap tracking-wide uppercase pr-0 group-hover:pr-2">
            WhatsApp Consult
          </span>
        </button>

      </div>

      {/* 6. Global Appointment Booking Popup Drawer */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookingModal}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10"
            >
              {/* Close floating button */}
              <button
                onClick={closeBookingModal}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Inject Form */}
              <BookingForm isOpenInModal={true} onCloseModal={closeBookingModal} />

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
