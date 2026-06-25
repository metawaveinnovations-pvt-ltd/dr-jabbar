import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle, Clock, Trash2, ShieldCheck, Sparkles } from 'lucide-react';
import { TREATMENTS_DATA } from '../data';
import { Appointment } from '../types';

interface BookingFormProps {
  isOpenInModal?: boolean;
  onCloseModal?: () => void;
}

export default function BookingForm({ isOpenInModal = false, onCloseModal }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'ceramic-braces',
    preferredDate: '',
    preferredTime: '17:00', // Default 5:00 PM
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [recentBooking, setRecentBooking] = useState<Appointment | null>(null);
  const [myBookings, setMyBookings] = useState<Appointment[]>([]);

  // Get today's date formatted as YYYY-MM-DD to set as the minimum allowed date in calendar input
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Load existing bookings on mount
  useEffect(() => {
    const saved = localStorage.getItem('dr_jabbar_bookings');
    if (saved) {
      try {
        setMyBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid Pakistani phone number (e.g. 03001234567)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Create a new Appointment object
    const newBooking: Appointment = {
      id: 'APT-' + Math.floor(100000 + Math.random() * 900000),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      treatment: TREATMENTS_DATA.find((t) => t.id === formData.treatment)?.title || formData.treatment,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message.trim(),
      status: 'Confirmed', // Instant online pre-approval
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updatedBookings = [newBooking, ...myBookings];
    setMyBookings(updatedBookings);
    localStorage.setItem('dr_jabbar_bookings', JSON.stringify(updatedBookings));

    setRecentBooking(newBooking);
    setIsSuccess(true);

    // Reset Form
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: 'ceramic-braces',
      preferredDate: '',
      preferredTime: '17:00',
      message: '',
    });
  };

  const deleteBooking = (id: string) => {
    const updated = myBookings.filter((b) => b.id !== id);
    setMyBookings(updated);
    localStorage.setItem('dr_jabbar_bookings', JSON.stringify(updated));
  };

  return (
    <section
      id="booking"
      className={isOpenInModal ? 'p-0' : 'py-24 bg-white dark:bg-slate-950 transition-colors duration-300'}
    >
      <div className={isOpenInModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {/* Section Header (Hidden when loaded inside sticky popup) */}
        {!isOpenInModal && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-[0.25em] block mb-3">
              Direct Placement
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Request Your Smile Assessment
            </h2>
            <div className="w-16 h-1 bg-[#00C9A7] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
              Enter your basic contact details and preferred slot. Dr. Abdul Jabbar’s team will review your booking and confirm via WhatsApp within 1 hour.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Booking Panel */}
          <div className={`${isOpenInModal ? 'md:col-span-12' : 'md:col-span-7'} space-y-6`}>
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-xl relative overflow-hidden bg-white dark:bg-slate-950">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  // Form UI
                  <motion.form
                    key="booking-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Header line inside modal form */}
                    {isOpenInModal && (
                      <div className="border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#1DA1F2]" />
                          <span>Schedule Free Assessment</span>
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">Book your clinical consultation slot directly with Dr. Jabbar.</p>
                      </div>
                    )}

                    {/* Name field */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Zainab Ahmed"
                        className={`w-full p-3.5 rounded-xl border text-sm font-semibold bg-slate-50/50 focus:bg-white focus:outline-none dark:bg-slate-900 dark:text-white transition-all ${
                          errors.name
                            ? 'border-rose-500'
                            : 'border-slate-200/60 focus:border-[#1DA1F2] dark:border-slate-800'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] font-semibold text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone & Email Fields Side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone field */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                          <span>Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 03001234567"
                          className={`w-full p-3.5 rounded-xl border text-sm font-semibold bg-slate-50/50 focus:bg-white focus:outline-none dark:bg-slate-900 dark:text-white transition-all ${
                            errors.phone
                              ? 'border-rose-500'
                              : 'border-slate-200/60 focus:border-[#1DA1F2] dark:border-slate-800'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] font-semibold text-rose-500 mt-1">{errors.phone}</p>}
                      </div>

                      {/* Email field */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. patient@example.com"
                          className={`w-full p-3.5 rounded-xl border text-sm font-semibold bg-slate-50/50 focus:bg-white focus:outline-none dark:bg-slate-900 dark:text-white transition-all ${
                            errors.email
                              ? 'border-rose-500'
                              : 'border-slate-200/60 focus:border-[#1DA1F2] dark:border-slate-800'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] font-semibold text-rose-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Treatment Selection */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                        <span>Desired Orthodontic Treatment</span>
                      </label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full p-3.5 rounded-xl border border-slate-200/60 focus:border-[#1DA1F2] text-sm font-semibold bg-slate-50/50 dark:bg-slate-900 dark:text-white focus:outline-none dark:border-slate-800 transition-all cursor-pointer"
                      >
                        {TREATMENTS_DATA.map((t) => (
                          <option key={t.id} value={t.id} className="dark:bg-slate-950 dark:text-white">
                            {t.title} (Est: {t.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date & Time slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date selection */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                          <span>Preferred Date</span>
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={getTodayDateString()}
                          className={`w-full p-3.5 rounded-xl border text-sm font-semibold bg-slate-50/50 focus:bg-white focus:outline-none dark:bg-slate-900 dark:text-white transition-all cursor-pointer ${
                            errors.preferredDate
                              ? 'border-rose-500'
                              : 'border-slate-200/60 focus:border-[#1DA1F2] dark:border-slate-800'
                          }`}
                        />
                        {errors.preferredDate && <p className="text-[11px] font-semibold text-rose-500 mt-1">{errors.preferredDate}</p>}
                      </div>

                      {/* Time selection (slots during 4pm - 9pm) */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                          <span>Preferred Arrival Time</span>
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full p-3.5 rounded-xl border border-slate-200/60 focus:border-[#1DA1F2] text-sm font-semibold bg-slate-50/50 dark:bg-slate-900 dark:text-white focus:outline-none dark:border-slate-800 transition-all cursor-pointer"
                        >
                          <option value="16:00" className="dark:bg-slate-950 text-white">04:00 PM (Afternoon slot)</option>
                          <option value="17:00" className="dark:bg-slate-950 text-white">05:00 PM (Afternoon slot)</option>
                          <option value="18:00" className="dark:bg-slate-950 text-white">06:00 PM (Late Afternoon)</option>
                          <option value="19:00" className="dark:bg-slate-950 text-white">07:00 PM (Evening slot)</option>
                          <option value="20:00" className="dark:bg-slate-950 text-white">08:00 PM (Evening slot)</option>
                          <option value="20:30" className="dark:bg-slate-950 text-white">08:30 PM (Last slot)</option>
                        </select>
                      </div>
                    </div>

                    {/* Extra Notes */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#1DA1F2]" />
                        <span>Clinical Notes or Symtoms (Optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe any skeletal issues, existing braces, dental pain, or aesthetic goals..."
                        className="w-full p-3.5 rounded-xl border border-slate-200/60 focus:border-[#1DA1F2] text-sm font-semibold bg-slate-50/50 dark:bg-slate-900 dark:text-white focus:outline-none dark:border-slate-800 transition-all resize-none"
                      />
                    </div>

                    {/* Booking Form CTA Button */}
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      className="w-full py-4 bg-[#0F4C81] hover:bg-[#0c3d68] text-white font-bold text-sm rounded-xl shadow-lg transition-colors cursor-pointer"
                    >
                      Confirm Direct Appointment Booking
                    </button>

                  </motion.form>
                ) : (
                  // Success State ticket
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"
                      >
                        <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                      </motion.div>
                      <h3 className="font-display font-extrabold text-2xl text-slate-950 dark:text-white mt-4">
                        Booking Successful!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                        Your assessment voucher has been generated. Dr. Jabbar’s coordinator will call or WhatsApp your number shortly.
                      </p>
                    </div>

                    {/* Aesthetic Ticket details */}
                    {recentBooking && (
                      <div className="border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-5 bg-slate-50 dark:bg-slate-900/50 text-left max-w-sm mx-auto space-y-3 relative overflow-hidden">
                        
                        {/* Decorative circles representing ticket notches */}
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50" />
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50" />

                        <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/40">
                          <span className="text-[10px] font-mono font-bold text-[#1DA1F2] uppercase tracking-wider">{recentBooking.id}</span>
                          <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            Pre-Approved
                          </span>
                        </div>

                        <div className="space-y-1 text-xs sm:text-sm font-semibold">
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Patient Name</p>
                          <p className="text-slate-800 dark:text-white">{recentBooking.name}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <div className="space-y-1 text-xs">
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Preferred Date</p>
                            <p className="text-slate-800 dark:text-white font-bold">{recentBooking.preferredDate}</p>
                          </div>
                          <div className="space-y-1 text-xs">
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Arrival Time</p>
                            <p className="text-slate-800 dark:text-white font-bold">{recentBooking.preferredTime}</p>
                          </div>
                        </div>

                        <div className="space-y-1 text-xs pt-1">
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Treatment</p>
                          <p className="text-slate-800 dark:text-white font-bold line-clamp-1">{recentBooking.treatment}</p>
                        </div>

                        <div className="pt-2 flex items-center justify-center gap-1.5 text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00C9A7]" />
                          <span>Bring dental history if available</span>
                        </div>

                      </div>
                    )}

                    <div className="pt-3 flex flex-col gap-2">
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800"
                      >
                        Book another Appointment
                      </button>
                      {isOpenInModal && onCloseModal && (
                        <button
                          onClick={onCloseModal}
                          className="px-6 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-xl"
                        >
                          Close Ticket Window
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column (Instructions or Live Booking State Dashboard) */}
          {!isOpenInModal && (
            <div className="md:col-span-5 space-y-6">
              
              {/* Patient Guidelines panel */}
              <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm space-y-4">
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#00C9A7]" />
                  <span>Clinical Booking Notice</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DA1F2] shrink-0 mt-1.5" />
                    <span>Free orthodontic assessments are valid for first-time visitors only.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DA1F2] shrink-0 mt-1.5" />
                    <span>Slots are offered on a first-come, first-served basis matching our 4:00 PM – 9:00 PM schedule.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DA1F2] shrink-0 mt-1.5" />
                    <span>Please allow up to 60 minutes for a comprehensive smile design blueprint analysis.</span>
                  </li>
                </ul>
              </div>

              {/* Live Scheduled Appointments Dashboard */}
              {myBookings.length > 0 && (
                <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-sm space-y-4 bg-slate-50/40 dark:bg-slate-900/10">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Your Scheduled Visits</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#1DA1F2]/10 text-[#0F4C81] dark:text-[#1DA1F2] text-[10px] font-bold font-mono">
                      {myBookings.length} Booked
                    </span>
                  </h4>
                  
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {myBookings.map((b) => (
                      <div
                        key={b.id}
                        className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-mono font-bold text-[#1DA1F2]">{b.id}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                              Confirmed
                            </span>
                          </div>
                          <h5 className="text-xs font-bold text-slate-800 dark:text-white line-clamp-1">{b.treatment}</h5>
                          <p className="text-[10px] text-slate-400">{b.preferredDate} &bull; {b.preferredTime}</p>
                        </div>
                        
                        {/* Cancellation button */}
                        <button
                          onClick={() => deleteBooking(b.id)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-colors cursor-pointer"
                          aria-label="Cancel Appointment"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
