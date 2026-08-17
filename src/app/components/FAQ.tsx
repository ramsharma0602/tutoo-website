import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle, Plus, Minus, Users, ShieldCheck, TrendingUp,
  MessageCircle, ArrowRight, Sparkles
} from 'lucide-react';
import PageSchema from '../../seo/PageSchema';
import { getFAQSchema } from '../../seo/schema';

/* The booklet's seven questions first, in the booklet's order and voice —
   short sentences, plain words, and its habit of saying "depending on tutor
   availability" instead of over-promising. Three questions parents actually
   ask us (fees, vetting, proof a class happened) are kept after those. */
const faqs = [
  {
    question: 'How do I find a tutor?',
    answer:
      'Tell us your class, subject, location and whether you want home or online classes. We shortlist suitable tutors and share them with you.',
  },
  {
    question: 'Can I find an online tutor?',
    answer:
      'Yes. We arrange one-to-one online classes, and they are available anywhere in India.',
  },
  {
    question: 'Can I find a home tutor?',
    answer:
      'Yes, in Kothrud (Pune) and Kolhapur, depending on tutor availability in your area.',
  },
  {
    question: 'Which classes do you cover?',
    answer:
      'Class 1 to Class 12, plus JEE, NEET and MHT-CET preparation.',
  },
  {
    question: 'Which boards do you cover?',
    answer:
      'CBSE, ICSE and SSC (Maharashtra board), depending on tutor availability for your class and subject.',
  },
  {
    question: 'Can I choose my tutor?',
    answer:
      'Yes. We share the profiles of the tutors who fit your requirement, and you choose the one you want.',
  },
  {
    question: 'Can I request a specific tutor?',
    answer:
      'Yes, if that tutor is available for your class, subject and timing. Tell us who you have in mind and we will check.',
  },
  {
    question: 'How much does tuition cost?',
    answer:
      'It depends on the class, subjects and how often you want classes. We tell you the exact fee before you commit to anything — there are no hidden charges, and the first assessment is free.',
  },
  {
    question: 'How do you check your tutors?',
    answer:
      'Every tutor gives us their ID and qualification documents, and we interview them before they take their first class. We only send tutors we have checked ourselves.',
  },
  {
    question: 'How do I know the class actually happened?',
    answer:
      'Each class starts with an OTP, so you know exactly when it begins. Attendance is recorded for every session, and for home tuition the tutor’s location is tracked during the class.',
  },
];

const trustChips = [
  { icon: Users, label: 'Home & Online Classes', color: '#7B2FF7' },
  { icon: ShieldCheck, label: 'Verified Tutors', color: '#7B2FF7' },
  { icon: TrendingUp, label: 'Free Assessment, No Obligation', color: '#7B2FF7' },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FAFAFC] relative overflow-hidden">
      <PageSchema jsonLd={getFAQSchema(faqs)} />
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
              Finding a tutor, classes, boards and fees — the questions parents ask us most.
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
