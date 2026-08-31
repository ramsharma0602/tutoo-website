import { motion } from 'motion/react';
import {
  Receipt,
  GraduationCap,
  BookOpen,
  CalendarClock,
  MapPin,
  ClipboardCheck,
  MessageSquare,
  Handshake,
  BadgeCheck,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import PageHero from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import FeatureGrid, { type Feature } from '../components/common/FeatureGrid';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import ConversionCTA from '../components/common/ConversionCTA';
import { cx, card, section, sectionTinted, container } from '../components/common/ui';
import { seoConfig } from '../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   /fees — how fees are worked out and agreed

   ── WHY THERE IS NO PRICE LIST ──────────────────────────────────────────
   Because there isn't one. A fee depends on the class, the subjects, how
   often classes run and whether a tutor travels — the same combination the
   enquiry form already collects. Publishing a table would mean either
   inventing numbers or publishing a range so wide it tells a parent nothing,
   and then maintaining it as tutors and areas change.

   What a parent actually wants from a fees page is not a number. It is the
   answer to "will I be surprised?" — so the page explains what moves the
   fee, when it is agreed, and what is free. That is all true today and needs
   no maintenance.

   ── WHAT THIS PAGE MUST NOT BECOME ──────────────────────────────────────
   Nothing about payment methods, wallets, online checkout, refunds, EMI or
   payouts. None of that exists on this site by explicit instruction, and a
   fees page is exactly where it would creep back in. This page is about how a
   fee is *agreed*, not how money moves.

   If a real, maintained price band is ever published, it belongs in a data
   file with an owner and a review date — not hardcoded into this component.
───────────────────────────────────────────────────────────────────────── */

const FACTORS: Feature[] = [
  {
    icon: GraduationCap,
    title: 'Class',
    text: 'A Class 3 reading session and a Class 12 physics session are not the same work, and are not priced the same.',
  },
  {
    icon: BookOpen,
    title: 'Subjects',
    text: 'One subject or three. Specialist subjects at senior level cost more because fewer tutors teach them.',
  },
  {
    icon: CalendarClock,
    title: 'How often',
    text: 'Twice a week is not four times a week. You tell us the schedule that suits your family.',
  },
  {
    icon: MapPin,
    title: 'Home or online',
    text: 'A home tutor travels to you. Online classes have no travel, and are usually the lower of the two.',
  },
];

const STEPS: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: 'You tell us what you need',
    text: 'Class, subjects, timings and your area. Nothing is charged for this.',
  },
  {
    icon: ClipboardCheck,
    title: 'The first assessment is free',
    text: 'We work out where your child actually stands before anyone quotes you anything.',
  },
  {
    icon: Receipt,
    title: 'We tell you the exact fee',
    text: 'For your requirement, in full, before you commit to anything. Ask us anything about it.',
  },
  {
    icon: Handshake,
    title: 'You decide, then classes start',
    text: 'Nothing begins until you have agreed the fee. Saying no at this point costs you nothing.',
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'How much does tuition cost?',
    a: 'It depends on the class, the subjects, how often you want classes, and whether the tutor travels to you. We tell you the exact fee for your requirement before you commit to anything — there are no hidden charges.',
  },
  {
    q: 'Why is there no price list on the website?',
    a: 'Because a single number would be wrong for most families. A Class 4 maths session twice a week and Class 12 physics four times a week are different work at different fees. Rather than publish a range so wide it tells you nothing, we work out your actual fee and tell you before you decide.',
  },
  {
    q: 'Is the first assessment really free?',
    a: 'Yes. The assessment is free and there is no obligation to continue afterwards. It exists so that we can match the right tutor, and so you can see how we work before spending anything.',
  },
  {
    q: 'Do I pay anything to find a tutor?',
    a: 'No. Telling us your requirement, seeing tutor profiles and the first assessment are all free. A fee only comes into it once you have chosen a tutor and agreed to start classes.',
  },
  {
    q: 'Can the fee change later?',
    a: 'Only if what you asked for changes — more subjects, more classes a week, a different class level. If your requirement stays the same, the fee you agreed stays the same. Any change is discussed with you first.',
  },
  {
    q: 'What if we stop after a few classes?',
    a: 'Tell us. You are not locked into a long contract, and if the problem is the tutor rather than the tuition, we will arrange someone else instead.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tuition Fees',
  description:
    'How Tutoo works out tuition fees — what the fee depends on, when it is agreed, and what is free. No hidden charges, and the first assessment costs nothing.',
  publisher: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
};

const FREE = [
  'Telling us what your child needs',
  'Seeing the profiles of tutors who fit',
  'The first assessment',
  'Changing tutor if the fit is wrong',
];

export default function FeesPage() {
  return (
    <main className="bg-white">
      <PageSchema jsonLd={schema} />

      <PageHero
        eyebrow="Fees"
        title="What it costs, and"
        titleAccent="when you find out."
        lead="There is no price list on this page, and that is deliberate. Here is what a fee depends on, when it is agreed, and everything that costs nothing."
        chips={[
          { icon: BadgeCheck, label: 'First assessment free' },
          { icon: Receipt, label: 'Exact fee before you commit' },
          { icon: Handshake, label: 'No hidden charges' },
        ]}
        id="fees-heading"
      />

      {/* ── What moves the fee ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="factors-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="What It Depends On"
            title="Four things decide the fee"
            lead="Which is why one number on a website would be wrong for almost everybody."
            id="factors-heading"
          />
          <FeatureGrid items={FACTORS} columns={4} />
        </div>
      </section>

      {/* ── How it is agreed ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="agreed-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="How It Works"
            title="When you find out the fee"
            lead="Before you commit to anything — not after the first class, and not in a message later."
            id="agreed-heading"
          />
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* ── What is free ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="free-heading">
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className={cx(card, 'max-w-3xl mx-auto relative overflow-hidden p-7 lg:p-9')}
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-[#16A34A]" aria-hidden="true" />

            <div className="flex items-center gap-3.5 mb-6">
              <span className="inline-flex w-12 h-12 rounded-2xl bg-[#E9F8EF] items-center justify-center shrink-0">
                <BadgeCheck className="w-[22px] h-[22px] text-[#16A34A]" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#16A34A] mb-0.5">
                  Costs nothing
                </p>
                <h2 id="free-heading" className="text-xl lg:text-2xl font-bold text-[#1E1B3A] leading-tight">
                  Four things you never pay for
                </h2>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {FREE.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 min-w-0 text-[15.5px] leading-relaxed text-[#1E1B3A]"
                >
                  <span
                    className="mt-0.5 w-[18px] h-[18px] rounded-full bg-[#E9F8EF] flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <BadgeCheck className="w-3 h-3 text-[#16A34A]" strokeWidth={3} />
                  </span>
                  <span className="min-w-0">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[15px] leading-relaxed text-[#6E6A85]">
              A fee only starts once you have chosen a tutor and agreed to
              begin. If you decide against it after the free assessment, that is
              a normal outcome and there is nothing to settle.
            </p>
          </motion.div>
        </div>
      </section>

      <FaqAccordion
        items={FAQS}
        eyebrow="FAQs"
        title="Questions parents ask about fees"
        lead="Including why there is no price list."
        tone="tinted"
        id="fees-faq"
      />

      <ConversionCTA
        placement="fees_final_cta"
        title="Want your actual number?"
        lead="Tell us your child's class, subjects and how often you want classes, and we will tell you the exact fee. The assessment before it is free."
        primaryLabel="Book a Free Assessment"
        primaryHref="/book-free-assessment"
        secondaryLabel="Find a Tutor"
        secondaryHref="/find-a-tutor"
        whatsappMessage="Hi Tutoo, I'd like to know the fee for: Class __, Subject __, __ classes a week."
        footnote={
          <p className="text-[15px] text-[#6E6A85]">
            <Phone className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#EA580C]" aria-hidden="true" />
            Would rather just ask?{' '}
            <Link to="/contact-us" className="font-semibold text-[#6D28D9] hover:underline">
              Contact us
            </Link>
          </p>
        }
      />
    </main>
  );
}
