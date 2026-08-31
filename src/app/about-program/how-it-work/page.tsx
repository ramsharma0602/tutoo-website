import { motion } from 'motion/react';
import {
  MessageSquare,
  ClipboardCheck,
  Users,
  UserCheck,
  BookOpenCheck,
  KeyRound,
  LayoutDashboard,
  FileText,
  GraduationCap,
  MapPin,
  CalendarClock,
  BadgeCheck,
  ShieldCheck,
  XCircle,
  Home,
  Monitor,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageSchema from '../../../seo/PageSchema';
import PageHero from '../../components/common/PageHero';
import { SectionHeading } from '../../components/common/SectionHeading';
import ProcessSteps, { type ProcessStep } from '../../components/common/ProcessSteps';
import FeatureGrid, { type Feature } from '../../components/common/FeatureGrid';
import AudienceSplit, { type AudienceColumn } from '../../components/common/AudienceSplit';
import FaqAccordion, { type FaqItem } from '../../components/common/FaqAccordion';
import ConversionCTA from '../../components/common/ConversionCTA';
import { cx, card, section, sectionTinted, container } from '../../components/common/ui';
import { seoConfig } from '../../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   /how-it-work — the canonical process page

   ── THIS IS A REBUILD. WHAT WAS HERE BEFORE ─────────────────────────────
   3,256 lines across seven bespoke section files, importing nothing from
   components/common and using no design token. An audit found:

     · "Verified Tutor / Background Checked" — which directly contradicted
       /safety, where we state plainly that no police or criminal record
       check is run. One of the two pages was lying to a parent.
     · A hardcoded six-digit OTP, 458921, rendered on a public page.
     · A parent-dashboard mock-up for an invented student showing 89% / 87%
       / 92%, unlabelled, indistinguishable from live data.
     · Three invented candidate tutors with match scores — "Rahul S. 94%".
     · "Industry-Leading Session Security" — an unsourced superlative.
     · "Your data is encrypted and never shared" — an absolute security
       claim nobody had verified.
     · An assessment dashboard with a "78% Readiness Score" and "Visual
       learning style detected", for a structured assessment that does not
       exist.
     · "Step 1 of 5" printed five times on a page shipping four steps, and a
       journey timeline numbered 01,02,03,04,05,07,08,09 — 06 missing.
     · Every CTA a bare <button> with no handler and no href. The primary
       conversion path on the process page was inert.
     · No <main> landmark, no reduced-motion guard, ~40 infinite animations,
       emoji as unlabelled text nodes, #94A3B8 on white at 12px (~2.9:1).

   All of it is gone. Nothing on this page is a number that cannot be
   defended on the phone to a parent.

   ── THE FIVE STEPS ARE THE REAL ONES ────────────────────────────────────
   Confirmed with the business, in this order: the free assessment happens
   FIRST and is done by someone from Tutoo, and its result is what informs
   which tutors get shortlisted. Matching is software-shortlisted and then
   confirmed by a person — that human step is a selling point, not something
   to hide behind the word "intelligent".

   If that order ever changes, it changes here, on /for-parents (STEPS) and
   on /fees (STEPS) together. Three pages describing one process is how the
   old contradiction happened.

   ── WHY THE "AFTER" SECTION EXISTS ──────────────────────────────────────
   The OTP, the parent dashboard and the monthly report are real, and they
   are the genuinely uncommon part of this business. The old page buried
   them under invented charts. They get their own section, stated plainly.

   ── THE HERO PHOTOGRAPH IS NOT WIRED YET ────────────────────────────────
   The image prop is deliberately absent: there is no honest photograph for
   this page in public/tutoo_assets/photos yet, and PageHero's text-only
   variant is a designed state, not a fallback. When the coordinator photo
   exists, pass `image={{...}}` exactly as /for-parents does. Do not point it
   at an existing file to fill the space — every other photo on the site
   already belongs to a page, and reusing one here would make both look like
   stock.
───────────────────────────────────────────────────────────────────────── */

/* ── The process. This list is the page. ─────────────────────────────────
   Titles are deliberately short: five across at 1280px gives each card about
   224px, and a three-line title in a 224px card destroys the row. The
   sentence underneath carries the detail. */
const STEPS: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: 'Tell us what you need',
    text: 'Class, subjects, timings and your area. It takes under a minute, on the form or on WhatsApp.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free assessment',
    text: 'Someone from Tutoo works out where your child actually stands. Nothing is charged and nothing is owed afterwards.',
  },
  {
    icon: Users,
    title: 'We shortlist',
    text: 'We narrow it to tutors who fit — then a person at Tutoo checks the shortlist before it reaches you.',
  },
  {
    icon: UserCheck,
    title: 'You choose',
    text: 'We send you the profiles. You pick. We do not assign a tutor to you.',
  },
  {
    icon: BookOpenCheck,
    title: 'Classes start',
    text: 'On the schedule you agreed, at the fee agreed before anything began.',
  },
];

/* ── What the shortlist is actually matched on ─────────────────────────── */
const MATCH_ON: Feature[] = [
  {
    icon: GraduationCap,
    title: 'Class and board',
    text: 'CBSE, ICSE, SSC or HSC, and the class your child is actually in — not a general subject label.',
  },
  {
    icon: MapPin,
    title: 'Your area',
    text: 'For home tuition, whether the tutor can realistically reach you and keep reaching you.',
  },
  {
    icon: CalendarClock,
    title: 'Your timings',
    text: 'The slots that work around school and everything else, on the days you asked for.',
  },
  {
    icon: BadgeCheck,
    title: 'What the assessment found',
    text: 'Where your child needs the work, so the shortlist reflects the requirement and not just the subject.',
  },
];

/* ── After classes start. All three of these are real. ─────────────────── */
const AFTER: Feature[] = [
  {
    icon: KeyRound,
    title: 'A code starts every session',
    text: 'A class is only marked as started once a one-time code is entered. The session that gets recorded is the session that actually happened.',
  },
  {
    icon: LayoutDashboard,
    title: 'A parent login',
    text: 'You can sign in and see the sessions that have run against the schedule you agreed.',
  },
  {
    icon: FileText,
    title: 'A report every month',
    text: 'A written summary of what has been covered and where your child is, once a month.',
  },
];

/* ── The counterweight. ─────────────────────────────────────────────────
   Every process page on the internet lists what a company does. The useful
   half is what it does not, and a parent who reads this and continues is a
   better lead than one who finds out later. Each line here is also stated
   somewhere else on the site — none of it is new policy invented for this
   page. */
const WE_DO_NOT = [
  {
    title: 'We do not assign tutors',
    text: 'You choose from the shortlist. Nobody arrives at your door that you have not already agreed to.',
  },
  {
    title: 'We do not run police or criminal record checks',
    text: 'We check ID, we check qualification documents, and we interview every tutor. That is the honest limit of it.',
    href: '/safety',
    linkLabel: 'What we check, in full',
  },
  {
    title: 'We do not publish a price list',
    text: 'A single number would be wrong for most families. We tell you your exact fee before you commit to anything.',
    href: '/fees',
    linkLabel: 'How fees are agreed',
  },
  {
    title: 'We do not lock you into a long contract',
    text: 'If it is not working, tell us. If the problem is the tutor rather than the tuition, we arrange someone else.',
  },
];

const DELIVERY: AudienceColumn[] = [
  {
    icon: Home,
    eyebrow: 'At your home',
    title: 'A tutor at your table',
    accent: '#EA580C',
    tint: '#FFF1E7',
    points: [
      'The tutor travels to you, in Kothrud (Pune) or Kolhapur',
      'Same tutor each class, at the times you set',
      'You can see the class happening in your own home',
      'Fee reflects the travel — we tell you before you start',
    ],
  },
  {
    icon: Monitor,
    eyebrow: 'Online',
    title: 'The same class, on a screen',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    points: [
      'No travel, so usually the lower of the two',
      'Opens up tutors who are not near your area',
      'Easier to fit around a crowded evening',
      'You can switch between home and online later',
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'How long does the whole process take?',
    a: 'It depends on the subject and your area — a common Class 8 maths requirement in Kothrud moves faster than a specialist Class 12 subject. Tell us your timings when you enquire and we will tell you honestly what to expect rather than promise a number we cannot hold to.',
  },
  {
    q: 'Who does the free assessment?',
    a: 'Someone from Tutoo, before any tutor is shortlisted. That is the point of doing it first — what it finds is one of the things the shortlist is then matched on. It is free and there is no obligation to continue afterwards.',
  },
  {
    q: 'Is the matching done by a computer or by a person?',
    a: 'Both, in that order. We narrow the list to tutors who fit the class, subject, area and timings, and then a person at Tutoo checks that shortlist before it is sent to you. Nothing reaches you that a human has not looked at.',
  },
  {
    q: 'Can I say no to the tutors you send?',
    a: 'Yes, and it costs you nothing. We do not assign tutors. If none of the profiles feel right, tell us why and we will go back and shortlist again.',
  },
  {
    q: 'What is the code at the start of a class for?',
    a: 'A session is only marked as started once a one-time code is entered. It means the attendance you see is a record of classes that actually took place, rather than something typed in later from memory.',
  },
  {
    q: 'What do you check about a tutor before they reach me?',
    a: 'Identity documents, qualification documents, and an interview. We do not run police or criminal record checks and we do not claim to — the safety page sets out exactly what is and is not checked so you can judge it for yourself.',
  },
  {
    q: 'When do I find out the fee?',
    a: 'Before you commit to anything, and after the free assessment — never after the first class and never in a message later. The fee depends on the class, the subjects, how often classes run and whether the tutor travels to you.',
  },
  {
    q: 'What if the tutor is not the right fit after a few classes?',
    a: 'Tell us. You are not locked into a long contract, and if the problem is the tutor rather than the tuition we will arrange someone else instead.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Tutoo matches a student with a tutor',
  description:
    'The five stages from a first enquiry to a running class: tell us what you need, a free assessment, a shortlist checked by a person, you choose the tutor, and classes start.',
  publisher: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
};

export default function HowITWork() {
  return (
    <main className="bg-white">
      <PageSchema jsonLd={schema} />

      <PageHero
        eyebrow="How It Works"
        title="From your first message"
        titleAccent="to the first class."
        lead="Five stages, in the order they actually happen — who does what, what you decide, and what it costs you to find out. Which is nothing, until you have agreed a fee."
        chips={[
          { icon: ClipboardCheck, label: 'Free assessment first' },
          { icon: UserCheck, label: 'You choose the tutor' },
          { icon: Users, label: 'A person checks every match' },
        ]}
        id="how-it-works-heading"
      />

      {/* ── The five steps ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="steps-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="The Process"
            title="Five stages, start to finish"
            lead="Nothing is charged until stage five, and nothing starts until you have agreed to it."
            id="steps-heading"
          />
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* ── How the shortlist is built ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="match-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="Stage Three, In Detail"
            title="How we decide who to send you"
            lead="A shortlist is narrowed by system and then confirmed by a person. Both halves matter, and we would rather tell you which is which."
            id="match-heading"
          />

          <FeatureGrid items={MATCH_ON} columns={4} />

          {/* The human step. This is the part worth being loud about, because
              it is the part most matching services do not do. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className={cx(card, 'mt-8 lg:mt-10 max-w-4xl mx-auto relative overflow-hidden p-7 lg:p-9')}
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-[#7B2FF7]" aria-hidden="true" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F4EFFE] items-center justify-center shrink-0">
                <ShieldCheck className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-1.5">
                  Before any profile reaches you
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-[#1E1B3A] leading-tight mb-3">
                  Every tutor has had their ID checked, their documents checked,
                  and an interview
                </h3>
                <p className="text-[15.5px] leading-relaxed text-[#4B4763]">
                  That is what verification means here, and it is the whole of
                  what it means. We do not run police or criminal record checks,
                  and we do not call previous employers. We would rather you
                  knew the limit than assumed a stronger one.
                </p>
                <Link
                  to="/safety"
                  className="group mt-4 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#6D28D9] hover:underline"
                >
                  Read exactly what we check
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── After classes start ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="after-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="After Stage Five"
            title="What happens once classes are running"
            lead="The part most tuition arrangements leave vague. These three things exist and you will use all of them."
            id="after-heading"
          />
          <FeatureGrid items={AFTER} columns={3} />
        </div>
      </section>

      {/* ── Home or online ── */}
      <AudienceSplit
        eyebrow="Two Ways To Do It"
        title="At your home, or online"
        lead="The five stages above are identical either way. Only the last one changes."
        columns={DELIVERY}
        id="delivery-heading"
      />

      {/* ── What we do not do ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="not-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="Plainly"
            title="Four things we do not do"
            lead="Worth knowing before you enquire rather than after."
            id="not-heading"
          />

          <ul className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {WE_DO_NOT.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={cx(card, 'min-w-0 p-6 lg:p-7')}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 inline-flex w-9 h-9 rounded-xl bg-[#FDEEEE] items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <XCircle className="w-[18px] h-[18px] text-[#DC2626]" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-bold text-[#1E1B3A] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#4B4763]">{item.text}</p>
                    {item.href && (
                      <Link
                        to={item.href}
                        className="group mt-3 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-[#6D28D9] hover:underline"
                      >
                        {item.linkLabel}
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        items={FAQS}
        eyebrow="FAQs"
        title="Questions about the process"
        lead="The ones parents actually ask on the first call."
        tone="white"
        id="how-it-works-faq"
      />

      <ConversionCTA
        placement="how_it_works_final_cta"
        title="Start at stage one"
        lead="Tell us your child's class, subjects and your area. The assessment that follows is free, and you will have seen tutor profiles before you decide anything."
        primaryLabel="Book a Free Assessment"
        primaryHref="/book-free-assessment"
        secondaryLabel="Find a Tutor"
        secondaryHref="/find-a-tutor"
        whatsappMessage="Hi Tutoo, I'd like to understand how it works for: Class __, Subject __, area __."
        footnote={
          <p className="text-[15px] text-[#6E6A85]">
            <Phone className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#EA580C]" aria-hidden="true" />
            Would rather ask a person first?{' '}
            <Link to="/contact-us" className="font-semibold text-[#6D28D9] hover:underline">
              Contact us
            </Link>
          </p>
        }
      />
    </main>
  );
}
