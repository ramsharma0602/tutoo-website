import { motion } from 'motion/react';
import {
  ShieldCheck,
  IdCard,
  MessagesSquare,
  FileCheck,
  UserCheck,
  Users,
  Repeat,
  Phone,
  DoorOpen,
  EyeOff,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import { track } from '../../seo/analytics';
import PageHero from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import FeatureGrid, { type Feature } from '../components/common/FeatureGrid';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import ConversionCTA from '../components/common/ConversionCTA';
import { cx, card, section, sectionTinted, container } from '../components/common/ui';
import { seoConfig } from '../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   /safety — what we check before a tutor reaches you

   ── WHY THIS IS A PAGE AND NOT A SECTION ────────────────────────────────
   It already exists as a six-card band on /home-tuition. It earns its own
   page because it is the one question a parent goes looking for *deliberately*
   — they open a menu and search for it, rather than scrolling into it — and
   because every service page, the FAQ and the footer all want to link to the
   same answer.

   ── WHAT THIS PAGE MAY AND MAY NOT SAY ──────────────────────────────────
   Confirmed operational, and therefore stated plainly:
     · government ID and qualification documents are collected and checked
     · every tutor is interviewed before their first class
     · the parent sees the profile before anyone arrives
     · the parent chooses; no tutor is assigned
     · a tutor can be changed on request
     · an adult is asked to be at home during classes
     · online classes start with an OTP and attendance is recorded

   Deliberately ABSENT, because nobody has confirmed them: police or criminal
   background checks, reference calls to previous employers, continuous GPS
   tracking, any "AI monitoring", and every score or percentage. The retired
   /for-parents page claimed a "98.4/100 safety score", "1,240 active sessions"
   and an "AI Safety System" — none of which exist. A safety page is the last
   place on a website to round a number up.
───────────────────────────────────────────────────────────────────────── */

const STEPS: ProcessStep[] = [
  {
    icon: FileCheck,
    title: 'They apply with their documents',
    text: 'Qualifications, subjects, classes they teach and the areas they can travel to.',
  },
  {
    icon: IdCard,
    title: 'We check ID and qualifications',
    text: 'Government photo ID and qualification documents. A tutor with neither is not listed.',
  },
  {
    icon: MessagesSquare,
    title: 'We interview them',
    text: 'We meet every tutor before their first class. We do not forward a profile we have not met.',
  },
  {
    icon: UserCheck,
    title: 'You see the profile, then decide',
    text: 'Name, qualification, experience and subjects — before anyone is at your door.',
  },
];

const SAFEGUARDS: Feature[] = [
  {
    icon: IdCard,
    title: 'Identity is checked, not assumed',
    text: 'Government photo ID and qualification documents are collected and checked before a tutor is listed.',
  },
  {
    icon: MessagesSquare,
    title: 'A person meets every tutor',
    text: 'An interview before the first class. Documents alone are never enough.',
  },
  {
    icon: UserCheck,
    title: 'You see who is coming',
    text: 'The profile reaches you before the tutor does — name, qualification, experience, subjects.',
  },
  {
    icon: Users,
    title: 'An adult should be at home',
    text: 'We ask that a parent or another adult is at home during class, particularly for younger children.',
  },
  {
    icon: Repeat,
    title: 'You can change tutor',
    text: 'If the fit is wrong for any reason, tell us and we arrange someone else. No explanation needed.',
  },
  {
    icon: Phone,
    title: 'One number, always',
    text: 'If a tutor does not arrive, or anything feels off, call us. A person picks up.',
  },
];

/* Home and online raise different worries, so they are answered separately
   rather than blended into one list that is half-true for each. */
const AT_HOME = [
  'You choose where the class happens — the dining table, a study desk, wherever your child already works.',
  'We ask that an adult is at home while the class is on.',
  'The tutor comes at the time you agreed. If they are running late or cannot come, you should hear from us, not find out at the door.',
  'If you would rather not continue with a tutor after the first class, that is a normal thing to say.',
];

const ONLINE = [
  'Every class starts with a one-time code, so you know exactly when it began.',
  'Attendance is recorded for every session.',
  'Classes are one-to-one. No other student joins the room.',
  'Your child needs no account of their own beyond the class link and the code.',
];

const FAQS: FaqItem[] = [
  {
    q: 'What exactly do you check before a tutor is listed?',
    a: 'Government photo ID and qualification documents, and an interview with our team. A tutor who does not complete all three is not listed and is never sent to a family.',
  },
  {
    q: 'Do you run police or criminal background checks?',
    a: 'Not at present. We check government photo ID and qualification documents, and we interview every tutor in person before their first class. We would rather tell you exactly what we do than imply a check we do not run.',
  },
  {
    q: 'Can I see the tutor’s details before they come to my home?',
    a: 'Yes, always. We share the tutor’s name, qualification, experience and subjects with you before the first class, and you choose whether to go ahead. Nobody arrives unannounced.',
  },
  {
    q: 'Does someone need to be at home during the class?',
    a: 'We ask that a parent or another adult is at home while a class is on, especially for younger children. It is a condition of home tuition, not a suggestion.',
  },
  {
    q: 'What if I am not comfortable with the tutor?',
    a: 'Tell us and we will arrange a different tutor. You do not need to give a reason, and you are never locked in with someone who does not suit your child.',
  },
  {
    q: 'Who do I call if something goes wrong?',
    a: 'Call +91 84461 46039. If a tutor has not arrived, or anything at all felt wrong about a class, we want to hear about it the same day.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tutor Safety & Verification',
  description:
    'What Tutoo checks before a tutor is listed — government ID, qualification documents and an interview — and what parents can expect before, during and after a class.',
  publisher: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
};

function ExpectationList({
  title,
  eyebrow,
  items,
  accent,
  tint,
  icon: Icon,
}: {
  title: string;
  eyebrow: string;
  items: string[];
  accent: string;
  tint: string;
  icon: typeof DoorOpen;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className={cx(card, 'relative overflow-hidden min-w-0 p-6 lg:p-7')}
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} aria-hidden="true" />

      <div className="flex items-center gap-3.5 mb-5">
        <span
          className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0"
          style={{ background: tint }}
        >
          <Icon className="w-[22px] h-[22px]" style={{ color: accent }} strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-bold uppercase tracking-[0.09em] mb-0.5" style={{ color: accent }}>
            {eyebrow}
          </p>
          <h3 className="text-xl font-bold text-[#1E1B3A] leading-tight text-balance">{title}</h3>
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2.5 min-w-0 text-[15px] leading-relaxed text-[#4B4763]">
            <span
              className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: accent }}
              aria-hidden="true"
            />
            <span className="min-w-0">{t}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SafetyPage() {
  return (
    <main className="bg-white">
      <PageSchema jsonLd={serviceSchema} />

      <PageHero
        eyebrow="Safety & Verification"
        title="Before a tutor comes"
        titleAccent="to your home."
        lead="A stranger teaching your child at your dining table is a big thing to agree to. Here is exactly what we check, what we do not, and what you can expect on the day."
        chips={[
          { icon: IdCard, label: 'Government ID checked' },
          { icon: MessagesSquare, label: 'Every tutor interviewed' },
          { icon: UserCheck, label: 'You choose the tutor' },
        ]}
        id="safety-heading"
      />

      {/* ── The four checks ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="checks-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="How It Works"
            title="What happens before a tutor reaches you"
            lead="Four steps. A tutor who does not clear all four is not listed."
            id="checks-heading"
          />
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* ── The six safeguards, on the dark band ── */}
      <section
        className="relative py-16 lg:py-24 bg-[#0A1028] overflow-hidden"
        aria-labelledby="safeguards-heading"
      >
        <div
          className="absolute inset-0 opacity-[0.16]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 72%)',
          }}
        />
        <div
          className="absolute -top-28 left-[12%] w-[30rem] h-[30rem] rounded-full"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, rgba(123,47,247,0.30) 0%, transparent 68%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute -bottom-32 right-[8%] w-[26rem] h-[26rem] rounded-full"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.20) 0%, transparent 68%)', filter: 'blur(40px)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Safeguards"
            title="Six things that are true of every tutor"
            lead="Not promises — the things we actually do, every time."
            id="safeguards-heading"
          />
          <FeatureGrid items={SAFEGUARDS} columns={3} tone="dark" />
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="expect-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="On the Day"
            title="What to expect"
            lead="Home tuition and online classes raise different questions, so here they are separately."
            id="expect-heading"
          />

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto items-start">
            <ExpectationList
              eyebrow="At your home"
              title="When the tutor arrives"
              items={AT_HOME}
              accent="#EA580C"
              tint="#FFF1E7"
              icon={DoorOpen}
            />
            <ExpectationList
              eyebrow="Online classes"
              title="When the class starts"
              items={ONLINE}
              accent="#7B2FF7"
              tint="#F4EFFE"
              icon={EyeOff}
            />
          </div>
        </div>
      </section>

      {/* ── What we do NOT do ──
          A safety page that only lists strengths is not a safety page. Saying
          plainly what is not checked is what makes the rest of it credible —
          and it is the honest answer to a question parents ask directly. */}
      <section className={cx(section, 'bg-white')} aria-labelledby="limits-heading">
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mx-auto rounded-[26px] bg-[#FFF8F3] ring-1 ring-[#EA580C]/20 p-7 lg:p-9"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex w-11 h-11 rounded-2xl bg-[#FFF1E7] items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#EA580C]" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <h2 id="limits-heading" className="text-xl lg:text-2xl font-bold text-[#1E1B3A]">
                What we do not claim
              </h2>
            </div>

            <p className="text-[15.5px] leading-relaxed text-[#4B4763]">
              We check government photo ID, qualification documents, and we
              interview every tutor. We do <strong className="font-semibold text-[#1E1B3A]">not</strong> currently
              run police or criminal record checks, and we do not call previous
              employers for references. We are telling you that plainly because
              a safety page that overstates itself is worth nothing — and
              because you should be able to decide with the real facts.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-[#4B4763]">
              If anything about a tutor or a class concerns you, call{' '}
              <a
                href="tel:+918446146039"
                onClick={() => track('call_click', { placement: 'safety_limits' })}
                className="font-semibold text-[#EA580C] hover:underline"
              >
                +91 84461 46039
              </a>
              . We would always rather hear about it than not.
            </p>
          </motion.div>
        </div>
      </section>

      <FaqAccordion
        items={FAQS}
        eyebrow="FAQs"
        title="Questions parents ask about safety"
        lead="Answered plainly, including the ones with an uncomfortable answer."
        tone="tinted"
        id="safety-faq"
      />

      <ConversionCTA
        placement="safety_final_cta"
        title="Still want to talk it through?"
        lead="Call us and ask anything about a tutor before you decide. The first assessment is free, and there is no obligation after it."
        primaryLabel="Find a Tutor"
        primaryHref="/find-a-tutor"
        secondaryLabel="Book a Free Assessment"
        secondaryHref="/book-free-assessment"
        whatsappMessage="Hi Tutoo, I have a question about tutor verification."
        footnote={
          <p className="text-[15px] text-[#6E6A85]">
            <Phone className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#EA580C]" aria-hidden="true" />
            Prefer to speak to someone?{' '}
            <Link to="/contact-us" className="font-semibold text-[#6D28D9] hover:underline">
              Contact us
            </Link>
          </p>
        }
      />
    </main>
  );
}
