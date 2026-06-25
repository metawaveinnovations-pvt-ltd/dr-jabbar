import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Calendar, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkTheme: boolean;
  toggleTheme: () => void;
  openBookingModal: () => void;
}

export default function Header({ darkTheme, toggleTheme, openBookingModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height for sticky glass effect and scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr. Jabbar', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Why Us', href: '#why-choose' },
    { name: 'Transformations', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md border-b border-slate-200/10 dark:border-slate-800/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 dark:bg-slate-900/50">
        <div
          id="scroll-indicator"
          className="h-full bg-gradient-to-r from-[#0F4C81] via-[#1DA1F2] to-[#00C9A7]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Section */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F4C81] to-[#1DA1F2] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
              <div className="absolute inset-0 rounded-xl border border-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[#0F4C81] dark:text-white transition-colors">
                DR. ABDUL JABBAR
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400 font-medium">
                ORTHODONTICS & SMILE DESIGN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold tracking-wide text-slate-600 hover:text-[#0F4C81] dark:text-slate-300 dark:hover:text-[#1DA1F2] rounded-lg hover:bg-slate-500/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Panel (Theme toggle, Call action, Booking trigger) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 transition-all duration-200"
            >
              {darkTheme ? <Sun className="w-4 h-4 text-[#00C9A7]" /> : <Moon className="w-4 h-4 text-[#0F4C81]" />}
            </button>

            {/* Quick Consultation CTA */}
            <a
              id="header-call"
              href="tel:+923001234567"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0F4C81] dark:text-slate-300 dark:hover:text-[#1DA1F2] border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1DA1F2]" />
              <span>+92 300 1234567</span>
            </a>

            {/* Premium Appointment CTA */}
            <button
              id="header-book-btn"
              onClick={openBookingModal}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Actions Overlay (Burger and theme toggle) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkTheme ? <Sun className="w-4 h-4 text-[#00C9A7]" /> : <Moon className="w-4 h-4 text-[#0F4C81]" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet & Larger Mobile Burger (visible when narrow desktop screen) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <button
              id="tablet-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#0F4C81]/5 rounded-xl hover:text-[#0F4C81] dark:hover:text-[#1DA1F2] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-4 border-t border-slate-200/50 dark:border-slate-800/20">
                <a
                  href="tel:+923001234567"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  <PhoneCall className="w-4 h-4 text-[#1DA1F2]" />
                  <span>Call: +92 300 1234567</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="flex items-center justify-center gap-2 py-3 bg-[#0F4C81] text-white rounded-xl text-sm font-bold shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#00C9A7]" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
