import {
  UserCheck,
  User,
  Laptop,
  Clock,
  ShieldCheck,
  ListChecks,
} from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';
import FeatureGrid, { type Feature } from './common/FeatureGrid';

/* ─────────────────────────────────────────────────────────────────────────
   WHY TUTOO — the booklet's six reasons, in the booklet's own words.

   Each line is a statement about how we work. None of them is a statistic, a
   rating, or an outcome promise, so every one is something we can stand behind.
───────────────────────────────────────────────────────────────────────── */

const REASONS: Feature[] = [
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

        <FeatureGrid items={REASONS} columns={3} />
      </div>
    </section>
  );
}
