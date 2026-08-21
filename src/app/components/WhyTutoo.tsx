import { motion } from 'motion/react';
import {
  UserCheck,
  User,
  Laptop,
  Clock,
  ShieldCheck,
  ListChecks,
} from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   WHY TUTOO — the booklet's six reasons, in the booklet's own words.

   Each line is a statement about how we work. None of them is a statistic, a
   rating, or an outcome promise, so every one is something we can stand behind.
───────────────────────────────────────────────────────────────────────── */

const REASONS = [
  {
    icon: UserCheck,
    title: 'Right Tutor',
    description: 'We help you find a tutor who matches your requirement.',
  },
  {
    icon: User,
    title: 'Personal Learning',
    description: "One-to-one attention based on the student's needs.",
  },
  {
    icon: Laptop,
    title: 'Online & Home',
    description: 'Choose the learning mode that works for you.',
  },
  {
    icon: Clock,
    title: 'Flexible',
    description: 'Choose timings that suit your schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Profiles',
    description: 'Tutor information is reviewed before connecting.',
  },
  {
    icon: ListChecks,
    title: 'Simple Process',
    description: 'Tell us what you need. We help you find the tutor.',
  },
];

export function WhyTutoo() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden">
      {/* Soft brand glow, top right */}
      <div
        className="hidden lg:block absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(123,47,247,0.13) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Why Tutoo"
          title="Why choose Tutoo?"
          lead="Finding a tutor should be simple. Here is what you get."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.07 }}
              className="group bg-white rounded-[22px] ring-1 ring-[#EFEDF6] hover:ring-[#7B2FF7]/25 shadow-[0_8px_28px_rgba(30,27,58,0.05)] hover:shadow-[0_16px_40px_rgba(30,27,58,0.09)] hover:-translate-y-1 transition-all duration-300 p-6 lg:p-7"
            >
              <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F4EFFE] items-center justify-center mb-5 group-hover:bg-[#EDE4FD] transition-colors">
                <reason.icon className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} />
              </span>

              <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2">
                {reason.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4B4763]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
