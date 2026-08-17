import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle, Plus, Minus, Users, ShieldCheck, TrendingUp,
  MessageCircle, ArrowRight, Sparkles
} from 'lucide-react';

const faqs = [
  {
    question: 'Who can apply to teach with Tutoo?',
    answer:
      'Anyone who knows their subject well and can teach it clearly — school and college teachers, postgraduates, research scholars, and experienced private tutors. You will need to show your qualification documents and ID.',
  },
  {
    question: 'How do I apply?',
    answer:
      'Fill in the tutor application form with your subjects, classes, city and experience. It takes a few minutes. You can also WhatsApp us if you would rather share your details that way.',
  },
  {
    question: 'What happens after I apply?',
    answer:
      'We review your application and get in touch about the next step — usually a short interview and a check of your ID and qualification documents. Once you are verified, we start matching you with students.',
  },
  {
    question: 'Can I choose my subjects and classes?',
    answer:
      'Yes. You tell us the subjects, boards and classes you are comfortable teaching, and we only send you student requirements that match.',
  },
  {
    question: 'Can I teach online, at home, or both?',
    answer:
      'Whichever suits you. You can teach at students’ homes in your city, take one-to-one online classes, or do both.',
  },
  {
    question: 'How are students assigned to me?',
    answer:
      'When a parent’s requirement matches your subjects, classes and area, we share it with you. You decide whether to take it — nothing is forced on you.',
  },
  {
    question: 'Do I need previous teaching experience?',
    answer:
      'It helps, but strong subject knowledge and the ability to explain clearly matter most. Tell us honestly what you have taught so far.',
  },
  {
    question: 'How much time do I need to commit?',
    answer:
      'That is up to you. Tell us the days and hours you are free, and we will only share requirements that fit your availability.',
  },
];

const trustChips = [
  { icon: Users, label: 'Home & Online Classes', color: '#7B2FF7' },
  { icon: ShieldCheck, label: 'Verified Tutors', color: '#7B2FF7' },
  { icon: TrendingUp, label: 'Free Assessment, No Obligation', color: '#7B2FF7' },
];

export function TutorsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFC] relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#7B2FF7]/7 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-[#7B2FF7]/7 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-[#7B2FF7]/5 rounded-full blur-3xl" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B2FF7]/25 text-[#7B2FF7] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm shadow-[#EA580C]/10">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQs
            </span>

            {/* Heading */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1E1B3A] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Everything parents and tutors{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#7B2FF7]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(123,47,247,0.18))' }}
              >
                need to know.
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-[#6E6A85] text-base leading-relaxed mb-8 max-w-sm">
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
                  <span className="text-sm font-semibold text-[#1E1B3A]">{chip.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative floating sparkle */}
            <div className="mt-10 hidden lg:flex items-center gap-2 text-xs text-[#6E6A85]">
              <Sparkles className="w-3.5 h-3.5 text-[#7B2FF7]" />
              <span>More answers coming soon</span>
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
                      ? 'border-transparent shadow-xl shadow-orange-100'
                      : 'border-slate-200 shadow-sm'
                    }`}
                  style={
                    isOpen
                      ? {
                        background:
                          'linear-gradient(white, white) padding-box, linear-gradient(135deg,#7B2FF7,#7B2FF7) border-box',
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
                          ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C]'
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
