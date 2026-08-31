import { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  Laptop,
  Headset,
  CheckCircle2,
  ShieldCheck,
  Send,
  ClipboardList,
  PhoneCall,
  FileCheck2,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import PageHero from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import FeatureGrid, { type Feature } from '../components/common/FeatureGrid';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import StatusModal from '../components/common/StatusModal';
import { CityAvailabilitySection } from '../components/CityAvailabilitySection';
import TutorApplicationForm from './TutorApplicationForm';
import { cx, card, panel, section, sectionTinted, container } from '../components/common/ui';
import { seoConfig } from '../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   /apply-tutor — become a tutor

   ── THE BUG THAT PROMPTED THE REBUILD ───────────────────────────────────
   The page opened with <CityAvailabilitySection variant="compact" /> as its
   very first element and reserved NO top padding. Navbar is fixed and spans
   y=44 to y=124, so the "Kothrud (Pune) · Kolhapur · Online anywhere in
   India" strip rendered at y=46 — entirely underneath the header, colliding
   with the nav links. Every other route reserves space (find-a-tutor uses
   pt-36 lg:pt-40). This one was the outlier.

   It is fixed by construction now: PageHero carries its own pt-32 lg:pt-36,
   so no page using it can reproduce this. The city strip has been promoted
   to a real section further down, where it can actually be read.

   ── WHAT ELSE WAS WRONG ─────────────────────────────────────────────────
   · No <h1> and no <main> — the only route on the site missing both. The
     page's largest text was an <h2>, and there was no skip-to-content
     target.
   · A four-tile "stats" strip whose values were "Verified", "1-to-1",
     "Flexible", "Free" under labels "Active Tutors", "Students Learning",
     "Subjects Covered", "To Apply". A stat layout with the digits scooped
     out still promises a number. Deleted rather than refilled.
   · "connect with students across India" — contradicted by the city strip
     on the same page. Home tuition is two cities. Only ONLINE is national,
     and the copy now says exactly that.
   · "Access training programs and teaching resources" — confirmed with the
     business as not existing. Removed rather than softened.
   · A Wallet icon on a card about choosing your timings, and the headline
     "Turn Your Knowledge Into a Rewarding Teaching Career". No figures, so
     the no-payment-content rule was not broken outright, but both signalled
     compensation with nothing behind them. Both gone. "No registration fee"
     stays: it is the opposite of asking a tutor for money, and in this
     market saying it plainly is worth more than the word costs.
   · A stranded "WHO CAN APPLY" comment with no heading above the chips.
   · Five one-off card recipes (rounded-[30px], [28px], [40px]) against the
     tokens in components/common/ui.ts, plus four unused lucide imports.

   ── WHAT IS CLAIMED HERE IS CONFIRMED ───────────────────────────────────
   Two tutor-side services were verified as real and are stated: a
   coordinator handles students and schedules, and enquiries are screened
   before they reach a tutor. Nothing else about what Tutoo does for a tutor
   appears on this page.
───────────────────────────────────────────────────────────────────────── */

/* What a tutor actually gets. Four, all confirmed. */
const BENEFITS: Feature[] = [
  {
    icon: BookOpen,
    title: 'Teach what you know',
    text: 'You pick the subjects, boards and classes you want. Nothing outside them is sent to you.',
  },
  {
    icon: Clock,
    title: 'Your own timings',
    text: 'Part-time or full-time, on the days and slots you set. You are not held to a fixed roster.',
  },
  {
    icon: Laptop,
    title: 'Home, online, or both',
    text: 'Travel to homes in Kothrud or Kolhapur, teach online from anywhere in India, or do both.',
  },
  {
    icon: Headset,
    title: 'Someone handles the coordination',
    text: 'A person at Tutoo manages students and schedules with you, so you are not chasing arrangements yourself.',
  },
];

/* Who can apply. This was previously six floating chips under a comment
   labelled WHO CAN APPLY with no heading rendered above them. */
const WHO_CAN_APPLY = [
  'Graduates and post-graduates',
  'B.Ed. and D.Ed. holders',
  'College students who can teach',
  'School and college teachers',
  'Working professionals teaching part-time',
  'Experienced private tutors',
];

/* What happens after the form. Every step here is what the business
   confirmed it actually does — the same ID, documents and interview check
   described on /safety and /how-it-work. Three pages, one process. */
const AFTER_APPLYING: ProcessStep[] = [
  {
    icon: Send,
    title: 'You apply',
    text: 'The form below. It takes a few minutes and there is no fee to submit it.',
  },
  {
    icon: ClipboardList,
    title: 'We read it',
    text: 'Every application is reviewed by a person, not filtered automatically.',
  },
  {
    icon: PhoneCall,
    title: 'A short interview',
    text: 'We call or WhatsApp you to talk through what you teach and how you teach it.',
  },
  {
    icon: FileCheck2,
    title: 'Document check',
    text: 'Identity and qualification documents. The same check every tutor on the platform has passed.',
  },
  {
    icon: GraduationCap,
    title: 'You start teaching',
    text: 'Screened enquiries that match your subjects and your area begin reaching you.',
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'Does it cost anything to apply?',
    a: 'No. There is no registration fee and no charge at any point in the application. If anyone asks you to pay to be listed as a Tutoo tutor, it is not us.',
  },
  {
    q: 'Do I need formal teaching experience?',
    a: 'Not necessarily. We take graduates, post-graduates, B.Ed. and D.Ed. holders, college students who can teach well, and working professionals who tutor part-time. What matters is that you know the subject and can teach it at the class level you are applying for.',
  },
  {
    q: 'Can I teach only online?',
    a: 'Yes. Online is open to tutors anywhere in India. Home tuition is currently limited to Kothrud (Pune) and Kolhapur, because those are the only two cities where we can actually place a tutor in a home today.',
  },
  {
    q: 'How many students will I get?',
    a: 'We cannot promise a number, and we would rather say so than give you one. It depends on your subjects, your class levels, your area and your availability — a Class 10 science tutor in Kothrud with weekday evening slots is matched more often than a narrow senior specialism.',
  },
  {
    q: 'What do you check before I can start?',
    a: 'Identity documents, qualification documents, and an interview. That is the whole of it — we do not run police or criminal record checks, and we say so on the safety page rather than implying a stronger check than we do.',
  },
  {
    q: 'What happens to the enquiries I receive?',
    a: 'They are screened before they reach you, so you are not spending your time on enquiries that were never real. You decide which ones you take.',
  },
  {
    q: 'Can I change my subjects or timings later?',
    a: 'Yes. Tell us and we will update what gets sent to you. Your availability is not fixed at the point of applying.',
  },
  {
    q: 'How long does the process take?',
    a: 'It depends on how quickly we can reach you for the interview and how quickly documents come back. We will tell you where your application stands rather than leave you guessing.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Apply as a Tutor',
  description:
    'Apply to teach with Tutoo — home tuition in Kothrud (Pune) and Kolhapur, or online anywhere in India. You choose your subjects, classes and timings. No registration fee.',
  publisher: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
};

export function ApplyTutorSection() {
  const [modal, setModal] = useState<{
    open: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({ open: false, type: 'success', title: '', message: '' });

  return (
    <main className="bg-white">
      <PageSchema jsonLd={schema} />

      <PageHero
        eyebrow="For Tutors"
        title="Teach the subjects you know,"
        titleAccent="on your own timings."
        lead="Apply to teach with Tutoo — at homes in Kothrud (Pune) and Kolhapur, or online from anywhere in India. You choose the subjects, the classes and the hours."
        chips={[
          { icon: CheckCircle2, label: 'No registration fee' },
          { icon: BookOpen, label: 'You choose your subjects' },
          { icon: Laptop, label: 'Home, online, or both' },
        ]}
        id="apply-tutor-heading"
      />

      {/* ── The form, high on the page ──────────────────────────────────
          An application page's job is the application. Supporting content
          goes below it, for the people who need convincing — not in front
          of the people who have already decided. */}
      <section className={cx(section, sectionTinted)} aria-labelledby="apply-heading" id="apply">
        <div className={container}>
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-10 items-start">
            {/* Left — who can apply */}
            <div className="min-w-0 lg:sticky lg:top-32">
              <p className="text-[13px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-3">
                Who can apply
              </p>
              <h2
                id="apply-heading"
                className="text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]"
              >
                If you can teach it, we want to hear from you
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#4B4763]">
                We do not require a formal teaching background. We do require
                that you know your subject and can teach it at the level you are
                applying for.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {WHO_CAN_APPLY.map((w, i) => (
                  <motion.li
                    key={w}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="inline-flex items-center gap-2 min-w-0 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#16A34A] shrink-0"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    <span className="text-[13.5px] font-semibold text-[#1E1B3A]">{w}</span>
                  </motion.li>
                ))}
              </ul>

              {/* The one money line kept on the page, and the reason it is
                  kept: in this market, tutors are routinely asked to pay to
                  be listed. Saying plainly that we never will is worth more
                  than the word "fee" costs. */}
              <div className={cx(card, 'mt-8 p-5 lg:p-6')}>
                <div className="flex items-start gap-3.5">
                  <span
                    className="inline-flex w-10 h-10 rounded-xl bg-[#E9F8EF] items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <ShieldCheck className="w-5 h-5 text-[#16A34A]" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15.5px] font-bold text-[#1E1B3A] mb-1">
                      There is no registration fee
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-[#4B4763]">
                      Applying costs nothing, and it always will. If anyone asks
                      you to pay to be listed as a Tutoo tutor, it is not us.
                      Enquiries are screened before they reach you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — the form */}
            <div className={cx(panel, 'min-w-0 p-6 sm:p-8 lg:p-9')}>
              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-1.5">
                Start your application
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-[#1E1B3A] leading-tight">
                Apply as a tutor
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[#6E6A85]">
                Every application is read by a person. We will call or WhatsApp
                you about the next step.
              </p>

              <div className="mt-7">
                <TutorApplicationForm
                  onStatus={(type, title, message) =>
                    setModal({ open: true, type, title, message })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── After you apply ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="after-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="What Happens Next"
            title="After you send the form"
            lead="The same check every tutor on the platform has already passed."
            id="after-heading"
          />
          <ProcessSteps steps={AFTER_APPLYING} />
        </div>
      </section>

      {/* ── What you get ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="benefits-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="Teaching With Tutoo"
            title="What you actually get"
            lead="Four things, all of which we can stand behind. We will not promise you a number of students, because that depends on your subjects and your area."
            id="benefits-heading"
          />
          <FeatureGrid items={BENEFITS} columns={4} />
        </div>
      </section>

      {/* ── Where we teach ─────────────────────────────────────────────
          This is the strip that used to sit behind the navbar. As a proper
          section it does the job it was written for: telling a tutor
          whether there is work near them before they fill in a form. */}
      <CityAvailabilitySection />

      <FaqAccordion
        items={FAQS}
        eyebrow="FAQs"
        title="Questions tutors ask"
        lead="Including the two we will not give you a number for."
        tone="tinted"
        id="apply-tutor-faq"
      />

      {/* ── Close ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="close-heading">
        <div className={cx(container, 'text-center')}>
          <h2
            id="close-heading"
            className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]"
          >
            Ready to apply?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4B4763]">
            The form takes a few minutes. There is no fee, and a person reads
            every application that comes in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#apply"
              /* Navy, not orange. ui.ts reserves orange for "the page's single
                 most important action. One per view" — on an application page
                 that is the submit button in the form, not a link that scrolls
                 you to it. Two orange buttons on one screen means neither is
                 the primary. */
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-colors bg-[#1E1B3A] hover:bg-[#2A2550] text-white px-8 h-14 text-[17px] w-full sm:w-auto"
            >
              Go to the form
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <Link
              to="/careers"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-colors bg-white ring-[1.5px] ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A] px-8 h-14 text-[17px] w-full sm:w-auto"
            >
              Other roles at Tutoo
            </Link>
          </div>
        </div>
      </section>

      <StatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </main>
  );
}

export default ApplyTutorSection;
