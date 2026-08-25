import { motion } from 'motion/react';
import {
  Globe,
  ShieldCheck,
  Users,
  Laptop,
  ArrowRight,
  Home,
  FileText,
  Search,
  UserCheck,
  MonitorPlay,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import { track } from '../../seo/analytics';
import { SectionHeading } from '../components/common/SectionHeading';
import FeatureGrid, { type Feature } from '../components/common/FeatureGrid';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import ConversionCTA from '../components/common/ConversionCTA';
import {
  cx,
  section,
  container,
  buttonPrimary,
  buttonLg,
} from '../components/common/ui';

import OnlineHero from '../components/online/OnlineHero';
import CoverageSelector from '../components/common/CoverageSelector';
import InsideAClass from '../components/online/InsideAClass';
import OnlineTutors from '../components/online/OnlineTutors';
import OnlineSafety from '../components/online/OnlineSafety';
import AudienceSplit from '../components/common/AudienceSplit';
import { Reviews } from '../components/Reviews';

/* ─────────────────────────────────────────────────────────────────────────
   /online-tuition

   ── BUILT FROM THE SHARED KIT ───────────────────────────────────────────
   Every section here uses the same components as the homepage:
   SectionHeading, FeatureGrid, TutorCard, FaqAccordion, ConversionCTA,
   Reviews, and the surface/button tokens in components/common/ui.ts. The
   page owns its words and its order — nothing else. That is what stops it
   drifting into looking like a different site, which is exactly what
   happened when it carried its own copies of the FAQ and the closing CTA.

   ── WHY THERE IS NO SHARED SERVICE TEMPLATE ─────────────────────────────
   Both service pages used to run through one ServiceLandingPage template.
   Online and home tuition need genuinely different sections — device setup
   and "nobody else joins" here, city coverage and door-step safety there —
   and forcing both through one template is what produced the previous thin,
   image-less pages. That template is now deleted: /home-tuition and its two
   city pages compose HomeTuitionLayout, and this page composes its own
   order. What they share is the component kit, not a skeleton.

   ── SECTION ORDER = THE ORDER A PARENT ASKS ─────────────────────────────
     what is this → is it worth it → can you teach my child → how does it
     work → what is a class really like → who teaches → is it safe → what do
     I get → what do others say → questions → act
───────────────────────────────────────────────────────────────────────── */

/* Copy kept verbatim from the previous page — it was accurate and plainly
   written. Only the icons changed: all four used to be the same tick. */
const BENEFITS: Feature[] = [
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
const STEPS: ProcessStep[] = [
  {
    icon: FileText,
    title: 'Tell us what you need',
    text: 'Class, subjects and preferred timing — takes under a minute.',
  },
  {
    icon: Search,
    title: 'We find suitable tutors',
    text: 'We assess your child for free over a video call, then shortlist verified tutors who fit.',
  },
  {
    icon: UserCheck,
    title: 'Choose your tutor',
    text: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
  },
  {
    icon: MonitorPlay,
    title: 'Start learning',
    text: 'One-to-one video classes on the agreed schedule, with attendance and progress you can check.',
  },
];

/* The four original questions, verbatim, plus the four parents actually ask
   on the phone. Every answer describes real behaviour. */
const FAQS: FaqItem[] = [
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
    <section className={cx(section, 'bg-white')} aria-labelledby="why-online-heading">
      <div className={container}>
        <SectionHeading
          id="why-online-heading"
          eyebrow="Why Online"
          title="Why parents choose online classes"
          lead="The same tutors and the same free first assessment as home tuition — without the travel."
        />
        <FeatureGrid items={BENEFITS} columns={4} />
      </div>
    </section>
  );
}

/* ── How it works ─────────────────────────────────────────────────────── */
function HowOnlineWorks() {
  const navigate = useNavigate();

  return (
    <section className={cx('relative', section, 'bg-white')} aria-labelledby="how-online-heading">
      <div className={container}>
        <SectionHeading
          id="how-online-heading"
          eyebrow="How It Works"
          title="How online tuition works"
          lead="Four steps, and the first one takes under a minute."
        />

        <ProcessSteps steps={STEPS} />

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
            className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}
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

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function OnlineTuitionPage() {
  /* No top padding here: OnlineHero carries pt-32 / lg:pt-36 on its own copy
     block, which clears the fixed Navbar the same way the homepage hero does. */
  return (
    <main className="bg-white">
      <PageSchema jsonLd={serviceSchema} />

      <OnlineHero />
      <WhyOnline />
      <CoverageSelector mode="online" />
      <HowOnlineWorks />
      <InsideAClass />
      <OnlineTutors />
      <OnlineSafety />
      <AudienceSplit
        photo={{
          src: '/tutoo_assets/photos/parents-students.webp',
          srcSet:
            '/tutoo_assets/photos/parents-students-sm.webp 720w, /tutoo_assets/photos/parents-students.webp 1100w',
          sizes: '(min-width: 1024px) 560px, calc(100vw - 3rem)',
          width: 1100,
          height: 1375,
          alt: 'A mother sits beside her son at the dining table, looking on while he works through a problem with his tutor on the laptop.',
          objectPosition: 'center 35%',
          captionTitle: 'One class. Two people it has to work for.',
          captionSub: 'You can see how it is going. Your child can ask anything.',
        }}
      />
      <Reviews />

      {/* FAQPage structured data is emitted by the accordion itself, from the
          questions it is actually rendering — so the schema can never claim
          something the page does not show. */}
      <FaqAccordion
        items={FAQS}
        title="Questions parents ask us"
        lead="Classes, tutors, timings and fees — answered plainly."
        tone="white"
      />

      <ConversionCTA
        placement="online_final_cta"
        title="Ready to find the right tutor?"
        lead="Tell us your child's class and subject. The first assessment is free, and there is no obligation after it."
        primaryLabel="Find a Tutor"
        primaryHref="/find-a-tutor?mode=online"
        secondaryLabel="Book a Free Assessment"
        secondaryHref="/book-free-assessment?mode=online"
        whatsappMessage="Hi Tutoo, I'm interested in online classes. Class: __, Subject: __."
        footnote={
          /* The one honest off-ramp: online is not right for everyone, and we
             teach in person in two cities. Better a home-tuition enquiry than
             a bounce. */
          <p className="text-[15px] text-[#6E6A85]">
            <Home className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#EA580C]" aria-hidden="true" />
            In Kothrud (Pune) or Kolhapur and would rather have a tutor at home?{' '}
            <Link to="/home-tuition" className="font-semibold text-[#6D28D9] hover:underline">
              See home tuition
            </Link>
          </p>
        }
      />
    </main>
  );
}
