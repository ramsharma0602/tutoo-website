import { motion } from 'motion/react';
import {
  UserCheck,
  User,
  Laptop,
  Clock,
  ShieldCheck,
  ListChecks,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   WHY TUTOO

   The booklet's six reasons, in the booklet's own words. Each one is a
   statement about how we work — none of them is a statistic, a rating, or
   an outcome promise, so every line here is something we can stand behind.
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
    title: 'Online & Offline',
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
    <section className="py-16 lg:py-24 bg-white border-y border-[#EFEDF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#6D28D9] mb-3">
            Why Tutoo
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E1B3A] mb-4">
            Why Choose Tutoo?
          </h2>
          <p className="text-lg text-[#4B4763] leading-relaxed">
            Finding a tutor should be simple. Here is what you get.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i, 5) * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-[#E6E3F0] shadow-[0_1px_2px_rgba(30,27,58,0.06)] hover:shadow-[0_8px_24px_rgba(30,27,58,0.10)] hover:border-[#7B2FF7]/25 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F4EFFE] flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-[#6D28D9]" />
              </div>
              <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2">
                {reason.title}
              </h3>
              <p className="text-[15px] text-[#4B4763] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
