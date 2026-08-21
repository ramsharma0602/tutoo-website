import { motion } from 'motion/react';
import { FileText, Search, UserCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   HOW TUTOO WORKS — the booklet's four steps.

   Worded for how Tutoo actually works today: we shortlist and share tutor
   profiles, and the parent chooses. Do not promise the parent can talk to a
   tutor before choosing until that is genuinely possible.
───────────────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    n: '01',
    icon: FileText,
    title: 'Tell Us What You Need',
    text: 'Class, subject, and whether you want a tutor at home or online. Takes under a minute.',
  },
  {
    n: '02',
    icon: Search,
    title: 'We Find Suitable Tutors',
    text: 'We assess your child for free, then shortlist verified tutors who match what you asked for.',
  },
  {
    n: '03',
    icon: UserCheck,
    title: 'Choose Your Tutor',
    text: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
  },
  {
    n: '04',
    icon: GraduationCap,
    title: 'Start Learning',
    text: 'Classes begin at your home or online, with attendance and updates you can check.',
  },
];

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="How It Works"
          title="Finding a tutor is simple"
          lead="Tell us what you need. We'll help you find the right one."
        />

        <div className="relative">
          {/* Connecting line behind the cards, desktop only */}
          <div
            className="hidden lg:block absolute top-[4.25rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#E6E3F0] to-transparent"
            aria-hidden="true"
          />

          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_16px_40px_rgba(30,27,58,0.10)] hover:-translate-y-1 transition-all duration-300 p-6 lg:p-7"
              >
                {/* Icon well + step number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#F4EFFE] flex items-center justify-center">
                    <step.icon className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} />
                  </span>
                  <span className="text-[2rem] font-bold leading-none text-[#1E1B3A]/[0.08] group-hover:text-[#EA580C]/25 transition-colors">
                    {step.n}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4B4763]">
                  {step.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className="group inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-lg shadow-[0_12px_30px_rgba(234,88,12,0.28)] transition-colors"
          >
            Find My Tutor
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-3.5 text-sm text-[#6E6A85]">
            Free first assessment · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
