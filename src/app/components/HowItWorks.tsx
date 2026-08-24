import { motion } from 'motion/react';
import { FileText, Search, UserCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';
import ProcessSteps, { type ProcessStep } from './common/ProcessSteps';
import { cx, section, container, buttonPrimary, buttonLg } from './common/ui';

/* ─────────────────────────────────────────────────────────────────────────
   HOW TUTOO WORKS — the booklet's four steps.

   Layout, numbering and the connecting spine live in the shared
   ProcessSteps; /online-tuition renders the same component with its own
   wording. This page owns only the words.

   Worded for how Tutoo actually works today: we shortlist and share tutor
   profiles, and the parent chooses. Do not promise the parent can talk to a
   tutor before choosing until that is genuinely possible.
───────────────────────────────────────────────────────────────────────── */

const STEPS: ProcessStep[] = [
  {
    icon: FileText,
    title: 'Tell Us What You Need',
    text: 'Class, subject, and whether you want a tutor at home or online. Takes under a minute.',
  },
  {
    icon: Search,
    title: 'We Find Suitable Tutors',
    text: 'We assess your child for free, then shortlist verified tutors who match what you asked for.',
  },
  {
    icon: UserCheck,
    title: 'Choose Your Tutor',
    text: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
  },
  {
    icon: GraduationCap,
    title: 'Start Learning',
    text: 'Classes begin at your home or online, with attendance and updates you can check.',
  },
];

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className={cx('relative bg-white', section)}>
      <div className={container}>

        <SectionHeading
          eyebrow="How It Works"
          title="Finding a tutor is simple"
          lead="Tell us what you need. We'll help you find the right one."
        />

        <ProcessSteps steps={STEPS} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}
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
