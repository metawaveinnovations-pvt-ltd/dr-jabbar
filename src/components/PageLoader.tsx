import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FBFF] dark:bg-slate-950 transition-colors duration-300"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#0F4C81] to-[#1DA1F2] text-white shadow-lg"
            >
              <Sparkles id="loader-icon" className="w-10 h-10 animate-pulse" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#00C9A7]"
                animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white text-center"
            >
              DR. ABDUL JABBAR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mt-1 font-sans"
            >
              Smile Design Center
            </motion.p>

            {/* Progress counter */}
            <div className="mt-8 w-48 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0F4C81] via-[#1DA1F2] to-[#00C9A7]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <motion.span
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400"
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
