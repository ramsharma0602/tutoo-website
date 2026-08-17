import { motion } from 'motion/react';
import { X, Check, AlertTriangle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const problems = [
  'Search hundreds of tutor profiles manually',
  'Negotiate fees and schedules yourself',
  'No attendance verification',
  'No visibility into what\'s being taught',
  'No structured learning plans',
  'No parent dashboard',
  'No measurable progress tracking',
  'Tutor leaves? Start from zero again',
  'No accountability system',
  'No accountability for outcomes',
];

const solutions = [
  'Tutor matched to your requirement',
  'Verified tutors with background & safety checks',
  'OTP-based session verification every class',
  'Real-time parent dashboard & live monitoring',
  'AI-generated personalized learning plans',
  'Weekly progress analytics & reports',
  'Homework & attendance tracking',
  'Easy tutor replacement if it is not the right fit',
  'Full accountability through AI systems',
  'Clear progress updates after every class',
];

export function ProblemVsSolution() {
  const navigate = useNavigate();
  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#7B2FF7]/5 to-[#7B2FF7]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-semibold mb-4 uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Problem
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0A1028] mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Smart Assessments. Expert Tutors.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
              Better Outcomes.
            </span>
          </h2>
          <p className="text-lg text-[#6E6A85] max-w-3xl mx-auto">
            Most platforms simply help you find a tutor. Tutoo manages your child's complete learning journey through technology, analytics, safety systems, and measurable outcomes.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-red-100 bg-white/80 backdrop-blur-sm shadow-xl shadow-red-500/5">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-red-400 to-violet-500" />

              <div className="p-8">
                {/* Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-red-400 font-semibold uppercase tracking-widest">Old Way</p>
                    <h3 className="text-xl font-bold text-[#0A1028]">Traditional Tutor Marketplace</h3>
                  </div>
                </div>

                {/* Mini broken UI visual */}
                {/* <div className="mb-6 rounded-2xl bg-red-50/60 border border-red-100 p-4 flex gap-3 items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 bg-red-200/70 rounded-full w-4/5" />
                    <div className="h-2 bg-red-100/70 rounded-full w-3/5" />
                  </div>
                  <span className="text-xs text-red-400 font-medium">No data</span>
                </div> */}

                {/* Problem list */}
                <ul className="space-y-3">
                  {problems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-[#6E6A85]"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-3 h-3 text-red-500" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Subtle red glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — Tutoo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Outer glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden border border-[#7B2FF7]/30 bg-[#0A1028] shadow-2xl shadow-[#EA580C]/10">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#EA580C] to-[#C2410C]" />

              <div className="p-8">
                {/* Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7B2FF7]/20 to-[#7B2FF7]/20 flex items-center justify-center border border-[#7B2FF7]/30">
                    <Zap className="w-5 h-5 text-[#7B2FF7]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7B2FF7] font-semibold uppercase tracking-widest">New Way</p>
                    <h3 className="text-xl font-bold text-white">The Tutoo Way</h3>
                  </div>
                </div>

                {/* Mini dashboard visual */}
                {/* <div className="mb-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#7B2FF7] font-semibold">Live Dashboard</span>
                    <span className="flex items-center gap-1.5 text-xs text-violet-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
                      Active
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Sessions', value: '24' },
                      { label: 'Progress', value: 'On track' },
                      { label: 'Score', value: 'A+' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 p-2 text-center">
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                        <p className="text-white/40 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Solution list */}
                <ul className="space-y-3">
                  {solutions.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#7B2FF7]/30 to-[#7B2FF7]/30 border border-[#7B2FF7]/40 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#7B2FF7]" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Emerald glow */}
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#7B2FF7]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#7B2FF7]/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6E6A85] mb-4 text-sm">
            Verified tutors, transparent progress — built for families in Kothrud &amp; Kolhapur
          </p>
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-semibold text-sm shadow-lg shadow-[#EA580C]/25 hover:shadow-[#EA580C]/40 hover:scale-105 transition-all duration-300">
            <Zap className="w-4 h-4" />
            Book Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
