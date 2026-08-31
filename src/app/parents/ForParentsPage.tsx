import { motion } from 'motion/react';
import {
  Users,
  ShieldCheck,
  Receipt,
  Route,
  Home,
  Monitor,
  MessageSquare,
  ClipboardCheck,
  UserCheck,
  BookOpenCheck,
  Repeat,
  Phone,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import { track } from '../../seo/analytics';
import PageHero from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import ConversionCTA from '../components/common/ConversionCTA';
import { Reviews } from '../components/Reviews';
import {
  cx,
  card,
  cardHover,
  section,
  sectionTinted,
  container,
} from '../components/common/ui';
import { seoConfig } from '../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   /for-parents — the parents' guide

   ── THIS IS A REBUILD, NOT A RESTORE ────────────────────────────────────
   The previous /for-parents was retired for cannibalising /home-tuition, and
   an audit of it found worse: a "4.8 Parent Rating", "1200+ Tutors", "5000+
   Students", a parent-dashboard mock-up for an invented student ("Arjun Rao,
   Grade 9, Mumbai"), a five-star testimonial from an invented tutor, a
   "Before vs After Tutoo" chart claiming a +28% average improvement, a
   "98.4/100 safety score", an "Explore Parent Dashboard" button for software
   that does not exist, and four article cards whose images were hot-linked
   from two competitors. None of it was true and all of it has been deleted.

   ── WHAT THIS PAGE IS FOR ───────────────────────────────────────────────
   Not a third service page. /home-tuition and /online-tuition sell the two
   services; this page answers the questions a parent has *about being the
   parent* — what they decide, what we do, what it costs, who is coming, and
   how to reach a person. It is a hub: short answers, then a link to the page
   that answers properly.

   ── THE RULE ────────────────────────────────────────────────────────────
   Not one number on this page that nobody can verify. No ratings, no counts,
   no outcome claims, no dashboards. If a line here cannot be defended on the
   phone to a parent, it does not belong.
───────────────────────────────────────────────────────────────────────── */

/* What a parent controls vs what Tutoo handles. This is the section the page
   exists for — every parent's real worry is losing control of the decision. */
const YOU_DECIDE = [
  'Which tutor comes — you choose from the profiles we send',
  'When classes happen, around school and everything else',
  'Home or online, and you can switch later',
  'Whether to continue at all, after a free first assessment',
];

const WE_HANDLE = [
  'Finding tutors who match the class, subject and your area',
  'Checking ID and qualifications, and interviewing every tutor',
  'Arranging a different tutor if the fit is wrong',
  'Being reachable on one number when you need a person',
];

const STEPS: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: 'Tell us what you need',
    text: 'Class, subjects, timings and your area — it takes under a minute.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free assessment',
    text: 'We work out where your child actually stands before matching anyone.',
  },
  {
    icon: UserCheck,
    title: 'You pick the tutor',
    text: 'We send profiles. You choose. We never assign a tutor to you.',
  },
  {
    icon: BookOpenCheck,
    title: 'Classes start',
    text: 'On the schedule you agreed, at the fee you agreed, with nothing hidden.',
  },
];

/* The hub cards. Every one goes to a page that exists and answers in depth —
   no card here is a summary of itself. */
const GUIDES = [
  {
    icon: Route,
    eyebrow: 'The process',
    title: 'How it works',
    text: 'From your first message to the first class, and who does what at each step.',
    href: '/how-it-work',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Safety',
    title: 'Safety & verification',
    text: 'What we check before a tutor reaches you — and, plainly, what we do not check.',
    href: '/safety',
    accent: '#16A34A',
    tint: '#E9F8EF',
  },
  {
    icon: Receipt,
    eyebrow: 'Money',
    title: 'Fees',
    text: 'What the fee depends on, when it is agreed, and the four things that cost nothing.',
    href: '/fees',
    accent: '#EA580C',
    tint: '#FFF1E7',
  },
  {
    icon: Home,
    eyebrow: 'At your home',
    title: 'Home tuition',
    text: 'A tutor at your own table, in Kothrud (Pune) and Kolhapur.',
    href: '/home-tuition',
    accent: '#EA580C',
    tint: '#FFF1E7',
  },
  {
    icon: Monitor,
    eyebrow: 'From anywhere',
    title: 'Online classes',
    text: 'Live one-to-one over video, with the same tutors, anywhere in India.',
    href: '/online-tuition',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
  },
  {
    icon: Phone,
    eyebrow: 'Talk to us',
    title: 'Contact',
    text: 'Phone, WhatsApp and email. A person answers — this is not a ticket queue.',
    href: '/contact-us',
    accent: '#2563EB',
    tint: '#E8F0FE',
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'Do I have to accept the tutor you send?',
    a: 'No. We share the profiles of tutors who fit your requirement and you choose. If none of them feel right, tell us and we will look again.',
  },
  {
    q: 'What happens in the free assessment?',
    a: 'We spend time with your child to understand where they actually are in the subjects you are worried about — not a test they can pass or fail. It tells us which tutor to match, and it costs nothing.',
  },
  {
    q: 'How soon can classes start?',
    a: 'It depends on tutor availability for your class, subject, area and timing. Tell us what you need and we will tell you honestly when we can start, rather than promising a date we cannot keep.',
  },
  {
    q: 'What if the tutor is not the right fit?',
    a: 'Tell us and we will arrange a different tutor. You do not need to give a reason, and you are never locked in with someone who does not suit your child.',
  },
  {
    q: 'Can we switch between home tuition and online classes?',
    a: 'Yes. If you are in Kothrud (Pune) or Kolhapur you can have either, and you can move between them. Outside those two cities we teach online.',
  },
  {
    q: 'How do I know a class actually happened?',
    a: 'Online classes start with a one-time code and attendance is recorded for every session. For home tuition, you are at home while the class is on.',
  },
  {
    q: 'Who do I contact if something is wrong?',
    a: 'Call +91 84461 46039. If a tutor has not arrived, or a class did not go the way you expected, we would rather hear it from you the same day.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'For Parents',
  description:
    'A guide for parents: how tutor matching works, what you decide, what we check before a tutor reaches you, how fees are agreed, and how to reach a person.',
  publisher: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
};

function ControlCard({
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
  icon: typeof Users;
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
          <li key={t} className="flex items-start gap-2.5 min-w-0 text-[15px] leading-relaxed text-[#1E1B3A]">
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

export default function ForParentsPage() {
  const navigate = useNavigate();

  return (
    <main className="bg-white">
      <PageSchema jsonLd={schema} />

      <PageHero
        eyebrow="For Parents"
        title="You choose the tutor."
        titleAccent="We do the finding."
        lead="Everything a parent needs to decide, in one place — how matching works, what we check before anyone reaches your home, how fees are agreed, and who to call."
        chips={[
          { icon: UserCheck, label: 'You pick the tutor' },
          { icon: ShieldCheck, label: 'ID checked & interviewed' },
          { icon: Receipt, label: 'Fee agreed before you start' },
        ]}
        image={{
          src: '/tutoo_assets/photos/for-parents-hero.webp',
          srcSet:
            '/tutoo_assets/photos/for-parents-hero-sm.webp 700w, /tutoo_assets/photos/for-parents-hero.webp 1200w',
          sizes: '(min-width: 1280px) 660px, (min-width: 1024px) 520px, calc(100vw - 3rem)',
          width: 1200,
          height: 800,
          alt: 'A mother sitting at her dining table looking at her phone while her son does homework at the same table behind her',
          /* Describes what she is doing in the picture AND is real product
             behaviour — we send profiles before anyone visits. Not a
             statistic, and not a claim the photo cannot support. */
          chip: { icon: UserCheck, label: 'You see profiles first' },
        }}
        id="parents-heading"
      />

      {/* ── You decide / we handle ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="control-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="Who Decides What"
            title="You keep the decisions"
            lead="The part parents worry about most is being handed a stranger and told this is your tutor. That is not how this works."
            id="control-heading"
          />

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto items-start">
            <ControlCard
              eyebrow="You decide"
              title="What is yours"
              items={YOU_DECIDE}
              accent="#EA580C"
              tint="#FFF1E7"
              icon={Users}
            />
            <ControlCard
              eyebrow="We handle"
              title="What is ours"
              items={WE_HANDLE}
              accent="#7B2FF7"
              tint="#F4EFFE"
              icon={Repeat}
            />
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="parents-how-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="How It Works"
            title="From your first message to the first class"
            lead="Four steps, and nothing is charged until after the third."
            id="parents-how-heading"
          />
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* ── The hub ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="guides-heading">
        <div className={container}>
          <SectionHeading
            eyebrow="Read More"
            title="The answers in full"
            lead="Each of these goes to a page that answers properly, rather than a paragraph that almost does."
            id="guides-heading"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {GUIDES.map((g, i) => (
              <motion.div
                key={g.href}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.42, delay: Math.min(i, 5) * 0.06 }}
                className="min-w-0"
              >
                <Link
                  to={g.href}
                  onClick={() => track('parent_guide_click', { placement: 'for_parents_hub', to: g.href })}
                  className={cx(card, cardHover, 'group h-full flex flex-col p-6 lg:p-7')}
                >
                  <span
                    className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0 mb-5 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: g.tint }}
                  >
                    <g.icon
                      className="w-[22px] h-[22px]"
                      style={{ color: g.accent }}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <p
                    className="text-[12px] font-bold uppercase tracking-[0.09em] mb-1"
                    style={{ color: g.accent }}
                  >
                    {g.eyebrow}
                  </p>
                  <h3 className="text-xl font-bold text-[#1E1B3A] leading-tight mb-2 text-balance">
                    {g.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4B4763] mb-5">{g.text}</p>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-[14.5px] font-bold text-[#6D28D9]">
                    Read more
                    <ArrowRight
                      className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ask a person ── */}
      <section className={cx(section, sectionTinted)} aria-labelledby="ask-heading">
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mx-auto rounded-[26px] bg-white ring-1 ring-[#EFEDF6] shadow-[0_14px_44px_rgba(30,27,58,0.08)] p-7 lg:p-9 text-center"
          >
            <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F4EFFE] items-center justify-center mb-5">
              <HelpCircle className="w-[22px] h-[22px] text-[#6D28D9]" strokeWidth={2} aria-hidden="true" />
            </span>

            <h2 id="ask-heading" className="text-xl lg:text-2xl font-bold text-[#1E1B3A] mb-3 text-balance">
              Would you rather just ask someone?
            </h2>
            <p className="text-[15.5px] leading-relaxed text-[#4B4763] max-w-xl mx-auto mb-7">
              Most parents have one specific question the website does not
              answer. Call and ask it — there is no script and nobody will try
              to sign you up on the call.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+918446146039"
                onClick={() => track('call_click', { placement: 'for_parents_ask' })}
                className="group inline-flex items-center justify-center gap-2.5 px-7 h-13 py-3.5 rounded-xl bg-[#1E1B3A] hover:bg-[#2A2550] text-white font-bold text-[15px] transition-colors"
              >
                <Phone className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                +91 84461 46039
              </a>
              <button
                type="button"
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center justify-center px-7 h-13 py-3.5 rounded-xl bg-white ring-[1.5px] ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A] font-bold text-[15px] transition-all"
              >
                Other ways to reach us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Self-removes until real, consented reviews exist. */}
      <Reviews />

      <FaqAccordion
        items={FAQS}
        eyebrow="FAQs"
        title="Questions parents ask us"
        lead="The ones that come up on almost every first call."
        tone="white"
        id="parents-faq"
      />

      <ConversionCTA
        placement="for_parents_final_cta"
        title="Ready to find the right tutor?"
        lead="Tell us your child's class and subject. The first assessment is free, and there is no obligation after it."
        primaryLabel="Find a Tutor"
        primaryHref="/find-a-tutor"
        secondaryLabel="Book a Free Assessment"
        secondaryHref="/book-free-assessment"
        whatsappMessage="Hi Tutoo, I'm a parent looking for a tutor. Class: __, Subject: __."
      />
    </main>
  );
}
