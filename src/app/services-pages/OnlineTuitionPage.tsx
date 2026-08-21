import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  ShieldCheck,
  Users,
  Laptop,
  ArrowRight,
  Phone,
  Plus,
  Minus,
  Home,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import { getFAQSchema } from '../../seo/schema';
import { track } from '../../seo/analytics';
import { SectionHeading } from '../components/common/SectionHeading';
import { whatsappLink, WhatsAppIcon } from '../components/common/FloatingWhatsApp';

import OnlineHero from '../components/online/OnlineHero';
import CoverageSelector from '../components/online/CoverageSelector';
import InsideAClass from '../components/online/InsideAClass';
import OnlineTutors from '../components/online/OnlineTutors';
import OnlineSafety from '../components/online/OnlineSafety';
import AudienceSplit from '../components/online/AudienceSplit';
import { Reviews } from '../components/Reviews';

/* ─────────────────────────────────────────────────────────────────────────
   /online-tuition

   ── WHY THIS PAGE NO LONGER USES ServiceLandingPage ─────────────────────
   ServiceLandingPage is shared by /home-tuition, /home-tuition/kothrud and
   /home-tuition/kolhapur. Online tuition and home tuition need genuinely
   different sections — device setup and "nobody else joins" here, city
   coverage and travel there — and forcing both through one template is what
   produced the previous thin, image-less page.

   So this page composes from the shared section kit instead
   (SectionHeading, TutorCard, AssetImage, Reviews, plus components/online/*).
   ServiceLandingPage is untouched and the three city pages still use it.
   /home-tuition can migrate onto this kit later.

   ── SECTION ORDER = THE ORDER A PARENT ASKS ─────────────────────────────
     what is this → is it worth it → can you teach my child → how does it
     work → what is a class really like → who teaches → is it safe → what do
     I get → what do others say → questions → act
───────────────────────────────────────────────────────────────────────── */

/* Copy kept verbatim from the previous page — it was accurate and plainly
   written. Only the icons changed: all four used to be the same tick. */
const BENEFITS = [
  {
    icon: Globe,
    title: 'Learn from anywhere',
    text: 'No travel — live classes at home, in any city in India.',
  },
  {
    icon: ShieldCheck,
    title: 'Same verified tutors',
    text: 'Online tutors go through the same verification and interview.',
  },
  {
    icon: Users,
    title: 'Truly one-to-one',
    text: 'Live interactive sessions, not recorded videos or batch classes.',
  },
  {
    icon: Laptop,
    title: 'Simple setup',
    text: 'A phone or laptop and an internet connection is all you need.',
  },
];

/* Numbered markers are justified here: this genuinely is a sequence, and the
   order carries information the reader needs. Copy unchanged. */
const STEPS = [
  {
    title: 'Tell us what you need',
    text: 'Class, subjects and preferred timing — takes under a minute.',
  },
  {
    title: 'We find suitable tutors',
    text: 'We assess your child for free over a video call, then shortlist verified tutors who fit.',
  },
  {
    title: 'Choose your tutor',
    text: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
  },
  {
    title: 'Start learning',
    text: 'One-to-one video classes on the agreed schedule, with attendance and progress you can check.',
  },
];

/* The four original questions, verbatim, plus the four parents actually ask
   on the phone. Every answer describes real behaviour. */
const FAQS = [
  {
    q: 'Are online classes live or recorded?',
    a: 'Live and one-to-one. Your child studies directly with their tutor in real time — it is not a recorded course or a large batch class.',
  },
  {
    q: 'Which classes and boards do you cover online?',
    a: 'Class 1–12 for CBSE, ICSE and SSC, plus JEE, NEET and CET preparation. Tell us your requirement and we will confirm tutor availability.',
  },
  {
    q: 'What device does my child need?',
    a: 'Any phone, tablet or laptop with a working camera, microphone and internet connection. We help with setup before the first class.',
  },
  {
    q: 'How much do online classes cost?',
    a: 'It depends on the class, subjects and how often you want classes. We tell you the exact fee before you commit to anything — there are no hidden charges, and the first assessment is free.',
  },
  {
    q: 'Can I choose my child’s tutor?',
    a: 'Yes. We share the profiles of the tutors who fit your requirement, and you choose the one you want.',
  },
  {
    q: 'What if my child does not get along with the tutor?',
    a: 'Tell us and we arrange a different tutor. You are not stuck with a match that is not working.',
  },
  {
    q: 'Which timings are available?',
    a: 'Classes are scheduled around your family. Tell us the days and times that suit you and we shortlist tutors who are free then.',
  },
  {
    q: 'Can we switch between online and home tuition later?',
    a: 'Yes — if you are in Kothrud (Pune) or Kolhapur, you can switch to home tuition whenever you like. Just tell us and we will arrange it.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Tuition',
  serviceType: 'Online tutoring',
  provider: { '@type': 'Organization', name: 'Tutoo' },
  areaServed: 'India',
  description:
    'Live one-to-one online classes with verified tutors for Class 1–12 (CBSE, ICSE, SSC) and JEE/NEET preparation, available anywhere in India.',
};

/* ── Benefits ─────────────────────────────────────────────────────────── */
function WhyOnline() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Online"
          title="Why parents choose online classes"
          lead="The same tutors and the same free first assessment as home tuition — without the travel."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="h-full bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_18px_44px_rgba(30,27,58,0.10)] hover:-translate-y-1 hover:ring-[#7B2FF7]/25 transition-all duration-300 p-6 lg:p-7"
            >
              <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F4EFFE] items-center justify-center mb-5">
                <b.icon className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} aria-hidden="true" />
              </span>
              {/* text-balance stops "Truly one-to-|one" breaking mid-phrase */}
              <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2 text-balance">
                {b.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4B4763]">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How it works ─────────────────────────────────────────────────────── */
function HowOnlineWorks() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="How online tuition works"
          lead="Four steps, and the first one takes under a minute."
        />

        <div className="relative">
          {/* the thread the four steps sit on — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#DDD6EE] to-transparent"
            aria-hidden="true"
          />

          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative h-full bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] p-6 lg:p-7 overflow-hidden"
              >
                <span
                  className="absolute -top-3 right-3 text-[68px] font-bold leading-none text-[#F4F2FA] select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>

                <span className="relative inline-flex w-11 h-11 rounded-2xl bg-[#7B2FF7] text-white text-[15px] font-bold items-center justify-center mb-5">
                  {i + 1}
                </span>

                <h3 className="relative text-[17px] font-bold text-[#1E1B3A] mb-2">{s.title}</h3>
                <p className="relative text-[15px] leading-relaxed text-[#4B4763]">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => {
              track('book_cta_click', { placement: 'online_how_it_works' });
              navigate('/book-free-assessment?mode=online');
            }}
            className="group inline-flex items-center gap-2.5 px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-[16px] shadow-[0_12px_30px_rgba(234,88,12,0.26)] transition-colors"
          >
            Book a Free Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-3 text-[14px] text-[#6E6A85]">
            Free first assessment · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────────────── */
function OnlineFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-white border-t border-[#F1EFF7]">
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions parents ask us"
          lead="Classes, tutors, timings and fees — answered plainly."
        />

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'ring-2 ring-[#7B2FF7]/35 shadow-[0_14px_36px_rgba(30,27,58,0.10)]'
                    : 'ring-1 ring-[#EFEDF6] shadow-[0_4px_16px_rgba(30,27,58,0.04)] hover:ring-[#7B2FF7]/25'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-base font-semibold text-[#1E1B3A] leading-snug">
                    {f.q}
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
                        <p className="text-[15px] leading-relaxed text-[#4B4763]">{f.a}</p>
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

/* ── Final CTA ────────────────────────────────────────────────────────── */
function OnlineFinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-t border-[#F1EFF7] overflow-hidden">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[30rem] opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(123,47,247,0.14) 0%, rgba(234,88,12,0.06) 45%, transparent 72%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]">
            Ready to find the right tutor?
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4B4763]">
            Tell us your child&apos;s class and subject. The first assessment is free,
            and there is no obligation after it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                track('find_tutor_click', { placement: 'online_final_cta' });
                navigate('/find-a-tutor?mode=online');
              }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-lg shadow-[0_12px_30px_rgba(234,88,12,0.28)] transition-colors"
            >
              Find a Tutor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                track('book_cta_click', { placement: 'online_final_cta' });
                navigate('/book-free-assessment?mode=online');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 rounded-xl bg-white ring-1 ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A] font-bold text-lg transition-all"
            >
              Book a Free Assessment
            </button>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3">
            <a
              href={whatsappLink(
                "Hi Tutoo, I'm interested in online classes. Class: __, Subject: __."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { placement: 'online_final_cta' })}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#1E1B3A] hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp us
            </a>

            <a
              href="tel:+918446146039"
              onClick={() => track('call_click', { placement: 'online_final_cta' })}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 84461 46039
            </a>
          </div>

          {/* The one honest off-ramp: online is not right for everyone, and we
              teach in person in two cities. Better a home-tuition enquiry than
              a bounce. */}
          <p className="mt-8 text-[15px] text-[#6E6A85]">
            <Home className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#EA580C]" aria-hidden="true" />
            In Kothrud (Pune) or Kolhapur and would rather have a tutor at home?{' '}
            <Link
              to="/home-tuition"
              className="font-semibold text-[#6D28D9] hover:underline"
            >
              See home tuition
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function OnlineTuitionPage() {
  /* No top padding here: OnlineHero carries pt-32 / lg:pt-36 on its own copy
     block, which clears the fixed Navbar the same way the homepage hero does. */
  return (
    <main className="bg-white">
      <PageSchema jsonLd={serviceSchema} />
      <PageSchema
        jsonLd={getFAQSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })))}
      />

      <OnlineHero />
      <WhyOnline />
      <CoverageSelector />
      <HowOnlineWorks />
      <InsideAClass />
      <OnlineTutors />
      <OnlineSafety />
      <AudienceSplit />
      <Reviews />
      <OnlineFAQ />
      <OnlineFinalCTA />
    </main>
  );
}
