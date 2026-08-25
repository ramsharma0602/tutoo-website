import { motion } from 'motion/react';
import {
  Home,
  UserCheck,
  Clock,
  HeartHandshake,
  FileText,
  Search,
  Users,
  Backpack,
  BookOpenCheck,
  ArrowRight,
  Monitor,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

import PageSchema from '../../seo/PageSchema';
import { track } from '../../seo/analytics';
import { SectionHeading } from '../components/common/SectionHeading';
import FeatureGrid, { type Feature } from '../components/common/FeatureGrid';
import ProcessSteps, { type ProcessStep } from '../components/common/ProcessSteps';
import FaqAccordion, { type FaqItem } from '../components/common/FaqAccordion';
import ConversionCTA from '../components/common/ConversionCTA';
import CoverageSelector from '../components/common/CoverageSelector';
import AudienceSplit, { type AudienceColumn } from '../components/common/AudienceSplit';
import { cx, section, container, buttonPrimary, buttonLg } from '../components/common/ui';

import HomeHero from '../components/home/HomeHero';
import WhereWeTeach from '../components/home/WhereWeTeach';
import FirstClass from '../components/home/FirstClass';
import HomeTutors from '../components/home/HomeTutors';
import HomeSafety from '../components/home/HomeSafety';
import HomeOrOnline from '../components/home/HomeOrOnline';
import { Reviews } from '../components/Reviews';
import { BOARDS } from '../data/subjects';
import type { ServiceCity } from '../data/locations';
import { seoConfig } from '../../seo/seo.config';

/* ─────────────────────────────────────────────────────────────────────────
   HOME TUITION — the shared layout behind three routes

     /home-tuition            (city undefined — the umbrella page)
     /home-tuition/kothrud    (city = Pune)
     /home-tuition/kolhapur   (city = Kolhapur)

   ── WHY ONE LAYOUT AND NOT THREE PAGES ──────────────────────────────────
   These three routes previously shared ServiceLandingPage, a template built
   before the shared component kit existed. Rebuilding only /home-tuition
   would have left a parent clicking "Home tuition in Kothrud" and walking
   from the new design straight into the old one — the exact seam that makes
   a site feel like a stack of landing pages rather than a product.

   So the sections take a `city` and narrow themselves. The umbrella page
   sells the service; a city page sells the service *here*, with the same
   components, the same tokens and the same order.

   ── SECTION ORDER = THE ORDER A PARENT ASKS ─────────────────────────────
     what is this → is it worth it → can you teach my child → can you come to
     me → how does it work → what is the first visit like → who are these
     people → can I trust them in my house → what do I get → am I on the
     right page → what do others say → questions → act

   Two of those beats have no equivalent on /online-tuition and cannot have
   one: "can you come to me" (online serves the whole country) and "can I
   trust them in my house" (nobody enters a house for an online class). They
   are what stop this page being a find-and-replace of that one.

   ── HONESTY RULES IN FORCE ──────────────────────────────────────────────
   No invented statistics, no ratings, no verification badges, nothing about
   payment. Every safety line describes something that actually happens. The
   tutor showcase and the reviews carousel both remove themselves rather than
   invent content when their real registries are empty.
───────────────────────────────────────────────────────────────────────── */

/* Four different icons, not four identical ticks. The old page used
   CheckCircle2 on all four cards — icons that do not differentiate are
   decoration, and decoration slows scanning. */
const BENEFITS: Feature[] = [
  {
    icon: Home,
    title: 'The tutor travels, not your child',
    text: 'No evening commute, no waiting outside a coaching class in the dark.',
  },
  {
    icon: UserCheck,
    title: 'One-to-one, at your own table',
    text: 'The whole hour belongs to your child. No batch, no waiting your turn.',
  },
  {
    icon: Clock,
    title: 'Timings that suit your family',
    text: 'Classes are arranged around school, meals and everything else in the week.',
  },
  {
    icon: HeartHandshake,
    title: 'You are there',
    text: 'You can see how a class goes without having to ask your child how it went.',
  },
];

const STEPS: ProcessStep[] = [
  {
    icon: FileText,
    title: 'Tell us what you need',
    text: 'Class, subjects, your area and the timings that suit you — under a minute.',
  },
  {
    icon: Search,
    title: 'We assess, then shortlist',
    text: 'A free assessment shows us where your child stands. We shortlist verified tutors who teach near you.',
  },
  {
    icon: UserCheck,
    title: 'You choose the tutor',
    text: 'We share the profiles. You pick the person you want in your home — we never assign one.',
  },
  {
    icon: BookOpenCheck,
    title: 'Classes start at your table',
    text: 'On the schedule you agreed, with progress you can see for yourself.',
  },
];

/* SSC first. In Kothrud and Kolhapur it is the volume board; /online-tuition
   leads with CBSE because it serves a national audience. Same four boards,
   different order — the order is the localisation. */
const HOME_BOARDS = [
  BOARDS.find((b) => b.title === 'SSC')!,
  BOARDS.find((b) => b.title === 'CBSE')!,
  BOARDS.find((b) => b.title === 'ICSE')!,
  BOARDS.find((b) => b.title === 'JEE & NEET')!,
];

const HOME_AUDIENCE: AudienceColumn[] = [
  {
    icon: Users,
    eyebrow: 'For Parents',
    title: 'You stay in the loop',
    accent: '#EA580C',
    tint: '#FFF1E7',
    points: [
      'You see the tutor’s profile before the first class',
      'Tell us what you need — we shortlist, you choose',
      'Change tutor if the fit is not right',
      'Fee agreed before anything starts',
    ],
  },
  {
    icon: Backpack,
    eyebrow: 'For Students',
    title: 'You get room to ask',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    points: [
      'Ask the moment you are stuck, not at the end',
      'Go at your own pace, not the class average',
      'Get help with the topics you actually find hard',
      'The same tutor every class',
    ],
  },
];

/* Ten questions. The four from the previous page are kept verbatim — they
   were accurate and plainly written. The six additions are the ones parents
   ask on the phone; nothing here is a question the product cannot answer. */
function faqsFor(city?: ServiceCity): FaqItem[] {
  const areasLine = city
    ? `${city.areas.slice(0, -1).join(', ')} and ${city.areas[city.areas.length - 1]}. ${city.areasNote}`
    : 'Kothrud and the nearby Pune West areas — Karve Nagar, Erandwane, Warje, Bavdhan and Ideal Colony — and across Kolhapur city, including Rajarampuri, Shahupuri, Tarabai Park, Kasaba Bawada and Ruikar Colony. Tell us your exact area and we will confirm tutor availability.';

  return [
    {
      q: 'What is home tuition, exactly?',
      a: 'A tutor travels to your home and teaches your child one to one, at your own table, on a schedule you agree together. There is no batch and no travel for your child.',
    },
    {
      q: 'Which areas do you cover?',
      a: areasLine,
    },
    {
      q: 'Which classes and boards do you cover?',
      a: 'Class 1–12 for SSC (Maharashtra board), CBSE and ICSE, plus JEE, NEET and CET preparation. Tell us your exact requirement and we will confirm tutor availability.',
    },
    {
      q: 'How are tutors verified?',
      a: 'Every tutor submits ID and qualification documents and is interviewed before taking their first class. We only send tutors we have verified ourselves.',
    },
    {
      q: 'Can I choose the tutor?',
      a: 'Yes. We share the profiles of the tutors who fit your requirement — name, qualification, experience and subjects — and you choose the one you want. We never assign a tutor to you.',
    },
    {
      q: 'What if the tutor is not the right fit?',
      a: 'Tell us and we will arrange a replacement tutor. You are never locked in with a tutor who does not suit your child.',
    },
    {
      q: 'Which timings are available?',
      a: 'Classes are arranged around your family. Tell us the days and times that suit you and we shortlist tutors who are free then — most families choose after school or in the evening.',
    },
    {
      q: 'Do you have tutors who teach in Marathi?',
      a: 'Yes. Both Marathi and English medium tutors are available, and you can tell us which you prefer when you enquire.',
    },
    {
      q: 'Is the first assessment really free?',
      a: 'Yes — the assessment is free and there is no obligation to continue afterwards. It helps us understand where your child stands so we can match the right tutor.',
    },
    {
      q: 'How much does home tuition cost?',
      a: 'It depends on the class, the subjects and how often you want classes. We tell you the exact fee before you commit to anything — there are no hidden charges, and the assessment is free.',
    },
  ];
}

/* ── Benefits ─────────────────────────────────────────────────────────── */
function WhyHomeTuition({ city }: { city?: ServiceCity }) {
  return (
    <section className={cx(section, 'bg-white')} aria-labelledby="why-home-heading">
      <div className={container}>
        <SectionHeading
          eyebrow="Why Home Tuition"
          title="Why parents choose home tuition"
          lead={
            city
              ? `No travel, no batch, no waiting your turn — a tutor comes to your home in ${city.short}.`
              : 'No travel, no batch, no waiting your turn — the tutor comes to you.'
          }
          id="why-home-heading"
        />
        <FeatureGrid items={BENEFITS} columns={4} />
      </div>
    </section>
  );
}

/* ── How it works ─────────────────────────────────────────────────────── */
function HowHomeTuitionWorks({ city }: { city?: ServiceCity }) {
  const navigate = useNavigate();
  const bookHref = `/book-free-assessment?mode=home${
    city ? `&city=${encodeURIComponent(city.id)}&area=${encodeURIComponent(city.label)}` : ''
  }`;

  return (
    <section className={cx('relative', section, 'bg-white')} aria-labelledby="how-home-heading">
      <div className={container}>
        <SectionHeading
          eyebrow="How It Works"
          title="How home tuition works"
          lead="Four steps, and the first one takes under a minute."
          id="how-home-heading"
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
              track('book_cta_click', { placement: 'home_how_it_works' });
              navigate(bookHref);
            }}
            className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}
          >
            Book a Free Assessment
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
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
export default function HomeTuitionLayout({ city }: { city?: ServiceCity }) {
  const findHref = `/find-a-tutor?mode=home${city ? `&city=${encodeURIComponent(city.id)}` : ''}`;
  const bookHref = `/book-free-assessment?mode=home${
    city ? `&city=${encodeURIComponent(city.id)}&area=${encodeURIComponent(city.label)}` : ''
  }`;

  /* areaServed carries real coordinates from seo.config rather than a bare
     string, so the Service entity is tied to the same two places the
     LocalBusiness schema names. */
  const places = seoConfig.citiesServed
    .filter((c) => !city || (city.id === 'Pune' ? c.name === 'Kothrud' : c.name === city.id))
    .map((c) => ({
      '@type': 'Place',
      name: `${c.name}, ${c.region}`,
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
    }));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: city ? `Home Tuition in ${city.label}` : 'Home Tuition',
    serviceType: 'Home tutoring',
    provider: { '@type': 'Organization', name: 'Tutoo' },
    areaServed: places,
    description: city
      ? `One-to-one home tuition with verified tutors in ${city.label} for Class 1–12 (SSC, CBSE, ICSE) and JEE/NEET preparation.`
      : 'One-to-one home tuition with verified tutors for Class 1–12 (SSC, CBSE, ICSE) and JEE/NEET preparation in Kothrud (Pune) and Kolhapur.',
  };

  return (
    /* No top padding: HomeHero carries pt-32 / lg:pt-36 on its own copy block,
       clearing the fixed Navbar exactly as the homepage hero does. */
    <main className="bg-white">
      {/* BreadcrumbList is emitted once, site-wide, by RouteSEO — a second
          one here would be a duplicate and a structured-data error. */}
      <PageSchema jsonLd={serviceSchema} />

      <HomeHero city={city} />
      <WhyHomeTuition city={city} />

      <CoverageSelector
        mode="home"
        boards={HOME_BOARDS}
        lead={
          city
            ? `Class 1 to 12 across the three boards we cover in ${city.short}, plus entrance-exam preparation.`
            : 'Class 1 to 12 across the three boards we cover, plus entrance-exam preparation.'
        }
      />

      <WhereWeTeach
        highlight={city?.id}
        title={city ? 'Where else we teach' : 'Find a home tutor near you'}
        lead={
          city
            ? 'Tutors travel to homes in two cities. If you are outside them, online classes work from anywhere in India.'
            : 'We send tutors to homes in two cities. Tell us where you are and we will match you with tutors who teach nearby.'
        }
      />

      <HowHomeTuitionWorks city={city} />
      <FirstClass />

      <HomeTutors
        city={city?.id}
        title={city ? `Tutors who teach in ${city.short}` : 'Tutors who teach at home'}
      />

      <HomeSafety />

      {/* No photograph on this one, deliberately — see the AudienceSplit props. */}
      <AudienceSplit
        columns={HOME_AUDIENCE}
        lead="The same tuition, from two sides."
      />

      <HomeOrOnline />
      <Reviews />

      {/* FAQPage structured data is emitted by the accordion itself, from the
          questions it is actually rendering — so the schema can never claim
          something the page does not show. */}
      <FaqAccordion
        items={faqsFor(city)}
        title="Questions parents ask us"
        lead="Tutors, areas, timings and fees — answered plainly."
        tone="white"
      />

      <ConversionCTA
        placement={city ? `home_final_cta_${city.id.toLowerCase()}` : 'home_final_cta'}
        title="Ready to find the right tutor?"
        lead={
          city
            ? `Tell us your child's class, subject and area in ${city.short}. The first assessment is free, and there is no obligation after it.`
            : "Tell us your child's class, subject and area. The first assessment is free, and there is no obligation after it."
        }
        primaryLabel="Find a Home Tutor"
        primaryHref={findHref}
        secondaryLabel="Book a Free Assessment"
        secondaryHref={bookHref}
        whatsappMessage={
          city
            ? `Hi Tutoo, I'm looking for a home tutor in ${city.short}. Class: __, Subject: __, Area: __.`
            : "Hi Tutoo, I'm looking for a home tutor. Class: __, Subject: __, Area: __."
        }
        footnote={
          /* The honest off-ramp, mirroring the one /online-tuition already
             carries pointing here. Home tuition is two cities; a parent
             anywhere else should leave with something that works rather than
             with a form we cannot fulfil. */
          <p className="text-[15px] text-[#6E6A85]">
            <Monitor className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#6D28D9]" aria-hidden="true" />
            Not in Kothrud or Kolhapur?{' '}
            <Link to="/online-tuition" className="font-semibold text-[#6D28D9] hover:underline">
              See online tuition
            </Link>
          </p>
        }
      />
    </main>
  );
}
