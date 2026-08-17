import ServiceLandingPage from './ServiceLandingPage';
import type { ServicePageContent } from './ServiceLandingPage';
import PageSchema from '../../seo/PageSchema';

/* /home-tuition/kothrud — local SEO page for "home tuition in Kothrud"
   search intent (UX plan §17). Localized content, not a doorway clone. */

const content: ServicePageContent = {
  mode: 'home',
  eyebrow: 'Home Tuition in Kothrud, Pune',
  h1: 'Home tuition in',
  h1Keyword: 'Kothrud, Pune',
  intro:
    'Verified tutors who teach at your home in Kothrud and the surrounding Pune West neighbourhoods — one-to-one, for Class 1–12 across CBSE, ICSE and SSC, plus JEE/NEET preparation. Kothrud is our home base, so tutor availability here is strongest.',
  ctaLabel: 'Find a Tutor in Kothrud',
  whatsappMessage:
    "Hi Tutoo, I'm looking for a home tutor in Kothrud. Class: __, Subject: __, Area: __.",
  bookQuery: 'area=Kothrud%2C%20Pune',
  benefits: [
    {
      title: 'Tutors near you',
      description: 'Matched from tutors who live in or near Kothrud — shorter travel, reliable timings.',
    },
    {
      title: 'Verified, in person',
      description: 'Every tutor is ID-verified and interviewed before their first class.',
    },
    {
      title: 'All major boards',
      description: 'CBSE, ICSE and SSC — plus JEE, NEET and CET preparation.',
    },
    {
      title: 'Progress you can see',
      description: 'Attendance and clear progress updates after classes.',
    },
  ],
  steps: [
    {
      title: 'Tell us your requirement',
      description: 'Class, subjects, your area in or around Kothrud, and preferred timing.',
    },
    {
      title: 'Free assessment & tutor match',
      description: 'We assess your child for free and match a verified tutor near your home.',
    },
    {
      title: 'Start classes at home',
      description: 'The tutor comes to you on the agreed schedule, with progress updates for parents.',
    },
  ],
  extraNote: {
    title: 'About fees',
    body: 'Fees depend on the class, subjects and schedule you choose. We share the exact fee before you commit — no hidden charges, and the assessment is free.',
  },
  areas: ['Kothrud', 'Karve Nagar', 'Erandwane', 'Warje', 'Bavdhan', 'Ideal Colony'],
  areasNote:
    'Nearby Pune West areas are usually covered too — mention your exact area when you enquire and we will confirm tutor availability.',
  areaLinks: [{ label: 'Also in Kolhapur', href: '/home-tuition/kolhapur' }],
  faqs: [
    {
      q: 'How quickly can a tutor start in Kothrud?',
      a: 'Kothrud is our primary service area, so matching is usually fastest here. Tell us your requirement and we will call you back within 24 hours with next steps.',
    },
    {
      q: 'Do tutors come from the same area?',
      a: 'We prioritise tutors who live in or near Kothrud so travel is short and timings stay reliable.',
    },
    {
      q: 'Which boards and classes do you cover in Kothrud?',
      a: 'Class 1–12 for CBSE, ICSE and SSC, plus JEE, NEET and CET preparation.',
    },
    {
      q: 'Is the assessment really free?',
      a: 'Yes — free and with no obligation to continue. It helps us understand your child before matching a tutor.',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Tuition in Kothrud',
  serviceType: 'Home tutoring',
  provider: { '@type': 'Organization', name: 'Tutoo' },
  areaServed: { '@type': 'Place', name: 'Kothrud, Pune, Maharashtra' },
  description:
    'One-to-one home tuition with verified tutors in Kothrud and surrounding Pune West areas for Class 1–12 (CBSE, ICSE, SSC) and JEE/NEET preparation.',
};

export default function KothrudPage() {
  return (
    <>
      <PageSchema jsonLd={serviceSchema} />
      <ServiceLandingPage content={content} />
    </>
  );
}
