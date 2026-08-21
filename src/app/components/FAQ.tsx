import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';
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


export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden">
      <PageSchema jsonLd={getFAQSchema(faqs)} />

      <div
        className="hidden lg:block absolute -top-32 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-50"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,247,0.12) 0%, transparent 68%)',
          filter: 'blur(24px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="FAQs"
          title="Questions parents ask us"
          lead="Finding a tutor, classes, boards and fees — answered plainly."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'ring-2 ring-[#7B2FF7]/35 shadow-[0_14px_36px_rgba(30,27,58,0.10)]'
                    : 'ring-1 ring-[#EFEDF6] shadow-[0_4px_16px_rgba(30,27,58,0.04)] hover:ring-[#7B2FF7]/25'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-base font-semibold text-[#1E1B3A] leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
                      isOpen ? 'bg-[#EA580C]' : 'bg-[#F4EFFE]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#6D28D9]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1">
                        <p className="text-[15px] leading-relaxed text-[#4B4763]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
