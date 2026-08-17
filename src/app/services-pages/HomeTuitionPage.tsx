import ServiceLandingPage from './ServiceLandingPage';
import type { ServicePageContent } from './ServiceLandingPage';
import PageSchema from '../../seo/PageSchema';

/* /home-tuition — the primary money page for "home tuition in Kothrud /
   Kolhapur" search intent (UX plan §15/§17). */

const content: ServicePageContent = {
  mode: 'home',
  eyebrow: 'Home Tuition · Kothrud (Pune) & Kolhapur',
  h1: 'Want a Tutor',
  h1Keyword: 'at Home?',
  intro:
    'Find tutors who can teach your child at home. One-to-one learning, personal attention, flexible timings, local tutors and subject-specific support — Class 1–12 across CBSE, ICSE and SSC, plus JEE and NEET preparation.',
  ctaLabel: 'Find a Home Tutor',
  whatsappMessage:
    "Hi Tutoo, I'm looking for a home tutor. Class: __, Subject: __, Area: __.",
  benefits: [
    {
      title: 'Verified tutors',
      description: 'Every tutor is ID-verified and interviewed before their first class.',
    },
    {
      title: 'One-to-one attention',
      description: 'Teaching at your child’s pace, focused on their weak areas.',
    },
    {
      title: 'Your schedule',
      description: 'Classes at your home, at times that work for your family.',
    },
    {
      title: 'Progress you can see',
      description: 'Attendance and clear progress updates after classes.',
    },
  ],
  steps: [
    {
      title: 'Tell us what you need',
      description: 'Class, subjects, your area in Kothrud or Kolhapur, and preferred timing — takes under a minute.',
    },
    {
      title: 'We find suitable tutors',
      description: 'We assess your child for free, then shortlist verified tutors near you who fit the requirement.',
    },
    {
      title: 'Choose your tutor',
      description: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
    },
    {
      title: 'Start learning',
      description: 'The tutor teaches at your home on the agreed schedule, with attendance and progress you can check.',
    },
  ],
  extraNote: {
    title: 'About fees',
    body: 'Fees depend on the class, subjects and schedule you choose. We share the exact fee before you commit to anything — no hidden charges, and the assessment itself is free.',
  },
  areas: [],
  areaLinks: [
    { label: 'Home Tuition in Kothrud', href: '/home-tuition/kothrud' },
    { label: 'Home Tuition in Kolhapur', href: '/home-tuition/kolhapur' },
  ],
  faqs: [
    {
      q: 'Which classes and boards do you cover?',
      a: 'Class 1–12 for CBSE, ICSE and SSC (Maharashtra board), plus JEE, NEET and CET preparation. Tell us your exact requirement and we will confirm tutor availability.',
    },
    {
      q: 'How are tutors verified?',
      a: 'Every tutor submits ID and qualification documents and is interviewed before taking their first class. We only send tutors we have verified ourselves.',
    },
    {
      q: 'What if the tutor is not the right fit?',
      a: 'Tell us and we will arrange a replacement tutor. You are never locked in with a tutor who does not suit your child.',
    },
    {
      q: 'Is the first assessment really free?',
      a: 'Yes — the assessment is free and there is no obligation to continue afterwards. It helps us understand where your child stands so we can match the right tutor.',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Tuition',
  serviceType: 'Home tutoring',
  provider: { '@type': 'Organization', name: 'Tutoo' },
  areaServed: ['Kothrud, Pune', 'Kolhapur'],
  description:
    'One-to-one home tuition with verified tutors for Class 1–12 (CBSE, ICSE, SSC) and JEE/NEET preparation in Kothrud (Pune) and Kolhapur.',
};

export default function HomeTuitionPage() {
  return (
    <>
      <PageSchema jsonLd={serviceSchema} />
      <ServiceLandingPage content={content} />
    </>
  );
}
