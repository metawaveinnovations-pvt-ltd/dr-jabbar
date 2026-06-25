import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight, ShieldAlert } from 'lucide-react';
import { CLINIC_CONTACT } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F8FBFF] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
            Location & Hours
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Visit Our Smile Design Center
          </h2>
          <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            Our luxury orthodontic facility is centrally situated in Saddar Cantonment, Hyderabad, featuring secure parking, modern lounges, and wheelchair access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Business Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Address card */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex gap-4">
                <div className="p-3.5 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] dark:bg-sky-500/10 dark:text-sky-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Our Clinical Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                    {CLINIC_CONTACT.address}
                  </p>
                </div>
              </div>

              {/* Call card */}
              <a
                href={`tel:${CLINIC_CONTACT.phone}`}
                className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex gap-4 hover:border-[#1DA1F2]/30 transition-all cursor-pointer group"
              >
                <div className="p-3.5 rounded-xl bg-[#00C9A7]/10 text-[#00C9A7] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2]">Direct Phone Lines</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    {CLINIC_CONTACT.phone}
                  </p>
                  <span className="text-[10px] text-[#00C9A7] font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                    <span>Call or SMS</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Email card */}
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex gap-4 hover:border-[#1DA1F2]/30 transition-all cursor-pointer group"
              >
                <div className="p-3.5 rounded-xl bg-[#1DA1F2]/10 text-[#1DA1F2] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2]">Official Support Email</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    {CLINIC_CONTACT.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Timings Section */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/25 space-y-4">
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-[#1DA1F2]" />
                <span>Consultation Timings</span>
              </h4>
              <div className="space-y-2.5">
                {CLINIC_CONTACT.workingHours.map((hour, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">{hour.days}</span>
                    <span className="font-bold text-slate-800 dark:text-white font-mono bg-white dark:bg-slate-950 px-3 py-1 rounded-md shadow-sm">
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-2 text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>Clinical evaluations are strictly scheduled by pre-booked appointments.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps IFrame & WhatsApp quick card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Map Frame container */}
            <div className="rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-xl overflow-hidden aspect-video lg:h-full min-h-[300px] relative bg-slate-200">
              <iframe
                id="clinic-location-map"
                title="Dr. Abdul Jabbar Clinic Map Location"
                src={CLINIC_CONTACT.mapsEmbedUrl}
                className="w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="p-6 rounded-3xl bg-emerald-600/10 dark:bg-emerald-950/20 border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="font-display font-extrabold text-sm text-emerald-900 dark:text-emerald-400">
                  Prefer direct messaging?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
                  Send a message to our front-desk assistant on WhatsApp for instant directions or immediate bookings.
                </p>
              </div>
              <a
                id="contact-whatsapp-chat-link"
                href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hello%20Dr.%20Abdul%20Jabbar%20Orthodontics%20Clinic,%20I%20would%20like%20to%20know%20your%20exact%20location%20and%20parking%20availability.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all self-start sm:self-center"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Assistant</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
