import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Home, Monitor, ArrowRight, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { track } from '../../seo/analytics';

/* Phase 1 hero (UX plan §7): tutoring-first message, one primary CTA,
   mini requirement form that prefills /book-free-assessment.
   Replaces the platform pitch, fake dashboard and dead "Explore Platform". */

const CLASS_OPTIONS = [
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
  'Class 11', 'Class 12', 'JEE / NEET',
];

const TRUST_POINTS = [
  'Verified tutors',
  'Free assessment',
  'No obligation',
  'Progress updates for parents',
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      {/* Soft brand wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4EFFE] via-[#FAFAFC] to-[#FFF1E7] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b3a08_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E6E3F0] rounded-full mb-6 shadow-sm">
              <MapPin className="w-4 h-4 text-[#6D28D9]" />
              <span className="text-sm font-medium text-[#1E1B3A]">
                Kothrud (Pune) · Kolhapur · Online across India
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B3A] mb-6 leading-[1.12] tracking-[-0.02em]"
            >
              Looking for a Tutor?{' '}
              <span className="text-[#6D28D9]">We&apos;ll Help You Find the Right One.</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#4B4763] mb-8 leading-relaxed max-w-xl">
              Tutors for school subjects, boards and competitive exams, Class 1–12.
              Online or at home. One-to-one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                type="button"
                /* Label rule: "Find a Tutor" = browse page.
                   "Find My Tutor" (the form, right) = requirement form. */
                onClick={() => navigate('/find-a-tutor')}
                className="px-8 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl font-semibold transition-colors duration-200 text-lg"
              >
                Find a Tutor
              </button>
              <button
                type="button"
                onClick={() => navigate('/how-it-work')}
                className="px-8 py-4 bg-white border-[1.5px] border-[#7B2FF7] text-[#6D28D9] rounded-xl font-semibold hover:bg-[#F4EFFE] transition-colors duration-200 text-lg"
              >
                How Tutoo Works
              </button>
            </div>

            {/* Honest trust points — no invented numbers */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
              {TRUST_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1E1B3A]">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: mini requirement form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <RequirementMiniForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Compact requirement capture — hands off to /book-free-assessment with
   the answers prefilled via query params so the parent never re-enters them. */
function RequirementMiniForm() {
  const navigate = useNavigate();
  const [klass, setKlass] = useState('');
  const [mode, setMode] = useState<'home' | 'online' | ''>('');
  const [area, setArea] = useState('');

  const handleContinue = () => {
    const params = new URLSearchParams();
    if (klass) params.set('class', klass);
    if (mode) params.set('mode', mode);
    if (area.trim()) params.set('area', area.trim());
    const qs = params.toString();
    track('hero_form_submit', { klass, mode, has_area: Boolean(area.trim()) });
    navigate(`/book-free-assessment${qs ? `?${qs}` : ''}`);
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(30,27,58,0.10)] border border-[#E6E3F0] max-w-md lg:ml-auto">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl bg-[#F4EFFE] flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-[#6D28D9]" />
        </div>
        <h2 className="text-xl font-bold text-[#1E1B3A]">Tell us what you need</h2>
      </div>
      <p className="text-sm text-[#6E6A85] mb-6">
        Takes under a minute. We call you back within 24 hours.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="hero-class" className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">
            Student&apos;s class
          </label>
          <select
            id="hero-class"
            value={klass}
            onChange={(e) => setKlass(e.target.value)}
            className="w-full h-12 rounded-xl border border-[#E6E3F0] bg-white px-4 text-base text-[#1E1B3A] outline-none focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10 transition-all"
          >
            <option value="">Select class</option>
            {CLASS_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <span className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">
            Tuition mode
          </span>
          <div className="grid grid-cols-2 gap-3" role="group" aria-label="Tuition mode">
            <button
              type="button"
              aria-pressed={mode === 'home'}
              onClick={() => setMode('home')}
              className={`flex items-center justify-center gap-2 h-12 rounded-xl border text-sm font-semibold transition-colors ${
                mode === 'home'
                  ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                  : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
              }`}
            >
              <Home className="w-4 h-4" /> Home tuition
            </button>
            <button
              type="button"
              aria-pressed={mode === 'online'}
              onClick={() => setMode('online')}
              className={`flex items-center justify-center gap-2 h-12 rounded-xl border text-sm font-semibold transition-colors ${
                mode === 'online'
                  ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                  : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
              }`}
            >
              <Monitor className="w-4 h-4" /> Online
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="hero-area" className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">
            Area / city {mode === 'online' && <span className="font-normal text-[#6E6A85]">(optional)</span>}
          </label>
          <input
            id="hero-area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Kothrud, Pune"
            className="w-full h-12 rounded-xl border border-[#E6E3F0] bg-white px-4 text-base text-[#1E1B3A] outline-none focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10 transition-all"
          />
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold transition-colors duration-200"
        >
          Find My Tutor <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-xs text-[#6E6A85]">
          No spam. Free assessment, no obligation.
        </p>
      </div>
    </div>
  );
}
