import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle, Plus, Minus, Users, ShieldCheck, TrendingUp,
  MessageCircle, ArrowRight, Sparkles
} from 'lucide-react';

const faqs = [
  {
    question: 'How does Tutoo match the right tutor for my child?',
    answer:
      'Tutoo uses AI-powered learning assessments, subject analysis, board preferences, location intelligence, and learning goals to match students with the most suitable verified tutors.',
  },
  {
    question: 'Are all tutors verified before onboarding?',
    answer:
      'Yes. Every tutor goes through identity verification, academic validation, address checks, and background screening before being approved on the platform.',
  },
  {
    question: 'Can parents track live tutoring sessions?',
    answer:
      'Yes. Parents can monitor tutor arrival, session activity, attendance, duration, and progress updates directly through the parent dashboard.',
  },
  {
    question: 'What is OTP session verification?',
    answer:
      'Before every session starts, parents receive a secure OTP code. The class only begins after OTP confirmation, ensuring complete safety and attendance accuracy.',
  },
  {
    question: 'Do students receive progress reports?',
    answer:
      'Yes. Tutoo provides weekly progress analytics, homework tracking, assessment reports, weak-topic analysis, and AI-powered learning insights.',
  },
  {
    question: 'What happens if a tutor becomes unavailable?',
    answer:
      'Since learning plans and student progress are managed through the Tutoo Learning OS, replacement tutors can continue the learning journey seamlessly without disruption.',
  },
  {
    question: 'Does Tutoo provide online and home tutoring?',
    answer:
      'Yes. Students can choose between home tuition, online classes, hybrid learning, and specialized AI-assisted learning programs.',
  },
  {
    question: 'How quickly can we start after booking an assessment?',
    answer:
      'Most students are matched with verified tutors and receive their first learning session within 24 to 48 hours after assessment completion.',
  },
];

const trustChips = [
  { icon: Users, label: '12,000+ Active Students', color: '#16C47F' },
  { icon: ShieldCheck, label: '3,400+ Verified Tutors', color: '#2563EB' },
  { icon: TrendingUp, label: '94% Improvement Rate', color: '#7C3AED' },
];

export function ParentsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#16C47F]/7 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-[#2563EB]/7 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* LEFT — sticky heading block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#16C47F]/25 text-[#16C47F] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm shadow-[#16C47F]/10">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQs
            </span>

            {/* Heading */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Everything parents and tutors{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.18))' }}
              >
                need to know.
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-[#64748B] text-base leading-relaxed mb-8 max-w-sm">
              From tutor verification and AI assessments to live session tracking and progress reports — here are answers to the most common questions about Tutoo.
            </p>

            {/* Trust chips */}
            <div className="flex flex-col gap-3">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border shadow-sm w-fit"
                  style={{ borderColor: `${chip.color}22` }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${chip.color}18` }}
                  >
                    <chip.icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A]">{chip.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative floating sparkle */}
            <div className="mt-10 hidden lg:flex items-center gap-2 text-xs text-[#64748B]">
              <Sparkles className="w-3.5 h-3.5 text-[#16C47F]" />
              <span>AI-powered answers coming soon</span>
            </div>
          </motion.div>

          {/* RIGHT — accordion */}
          {/* RIGHT — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => {
              const isOpen = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen
                      ? 'border-transparent shadow-xl shadow-emerald-100'
                      : 'border-slate-200 shadow-sm'
                    }`}
                  style={
                    isOpen
                      ? {
                        background:
                          'linear-gradient(white, white) padding-box, linear-gradient(135deg,#16C47F,#2563EB) border-box',
                        border: '1.5px solid transparent',
                      }
                      : {}
                  }
                >
                  {/* Question */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] lg:text-base font-semibold text-slate-900 leading-relaxed">
                      {faq.question}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen
                          ? 'bg-gradient-to-r from-[#16C47F] to-[#2563EB]'
                          : 'bg-slate-100'
                        }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-white">
                          <p className="text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
