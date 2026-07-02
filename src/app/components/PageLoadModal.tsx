import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, TrendingUp, Shield, BarChart2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
const features = [
  'AI Learning Assessment',
  'Verified Expert Tutors',
  'Real-Time Parent Dashboard',
  'Weekly Progress Reports',
  'OTP-Secured Sessions',
];

const classes = ['Class 1–5', 'Class 6–8', 'Class 9–10', 'Class 11–12', 'Competitive Exams'];
const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE'];
const subjects = ['Mathematics', 'Science', 'English', 'Coding & AI', 'Olympiad', 'JEE / NEET'];

export function PageLoadModal() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: '',
    mobile: '',
    studentClass: '',
    board: '',
    subject: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(11,18,32,0.72)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
            style={{ maxHeight: '90vh' }}
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#16C47F]/50 via-[#2563EB]/30 to-[#7C3AED]/40 blur-sm pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row bg-[#0B1220] rounded-3xl overflow-auto" style={{ maxHeight: '90vh' }}>
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* LEFT — Dashboard visuals */}


              {/* RIGHT — Form */}
              <div className="flex-1 p-8 lg:p-10 overflow-y-auto">
                {!submitted ? (
                  <>
                    {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#16C47F]/20 to-[#2563EB]/20 border border-[#16C47F]/30 text-[#16C47F] text-xs font-bold uppercase tracking-widest mb-5">
                      Limited Free Assessment
                    </span> */}

                    <h2
                      className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Discover your child's real{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16C47F] to-[#2563EB]">
                        learning potential.
                      </span>
                    </h2>

                    <p className="text-white/50 text-sm mb-6">
                      Get a free AI-powered academic assessment, personalized learning analysis, and verified tutor recommendations.
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-2 mb-7">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#16C47F]/30 to-[#2563EB]/30 border border-[#16C47F]/40 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#16C47F]" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Form */}
                    <form className="space-y-3">

                      {/* CTA */}
                      <Button
                        type="submit"
                        onClick={() => navigate('/book-free-assessment')}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold text-sm shadow-lg shadow-[#16C47F]/25 hover:shadow-[#16C47F]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-1"
                      >
                        Book Free Assessment
                      </Button>

                      <p className="text-center text-white/30 text-xs pt-1">
                        No spam. No obligation.{' '}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors"
                        >
                          Explore Platform Instead
                        </button>
                      </p>
                    </form>

                    {/* Trust bar */}
                    <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t border-white/5">
                      {[
                        { num: '12,000+', label: 'Students' },
                        { num: '3,400+', label: 'Verified Tutors' },
                        { num: '94%', label: 'Improvement Rate' },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-white font-bold text-sm">{s.num}</p>
                          <p className="text-white/30 text-xs">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16C47F]/30 to-[#2563EB]/30 border border-[#16C47F]/40 flex items-center justify-center mb-5">
                      <Check className="w-8 h-8 text-[#16C47F]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      You're on the list!
                    </h3>
                    <p className="text-white/50 text-sm mb-6 max-w-xs">
                      Our team will reach out within 24 hours to schedule your free AI-powered assessment.
                    </p>
                    <button
                      onClick={() => setOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      Explore Platform
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
