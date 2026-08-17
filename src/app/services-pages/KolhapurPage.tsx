import ServiceLandingPage from './ServiceLandingPage';
import type { ServicePageContent } from './ServiceLandingPage';
import PageSchema from '../../seo/PageSchema';

/* /home-tuition/kolhapur — local SEO page for "home tuition in Kolhapur"
   search intent (UX plan §17). Localized content, not a doorway clone. */

const content: ServicePageContent = {
  mode: 'home',
  eyebrow: 'Home Tuition in Kolhapur',
  h1: 'Home tuition in',
  h1Keyword: 'Kolhapur',
  intro:
    'Verified tutors who teach at your home across Kolhapur city — one-to-one, for Class 1–12 across CBSE, ICSE and SSC, plus JEE/NEET preparation. Marathi and English-medium tutors available.',
  ctaLabel: 'Find a Tutor in Kolhapur',
  whatsappMessage:
    "Hi Tutoo, I'm looking for a home tutor in Kolhapur. Class: __, Subject: __, Area: __.",
  bookQuery: 'area=Kolhapur',
  benefits: [
    {
      title: 'City-wide coverage',
      description: 'Verified tutors available for home sessions across Kolhapur.',
    },
    {
      title: 'Verified, in person',
      description: 'Every tutor is ID-verified and interviewed before their first class.',
    },
    {
      title: 'SSC & CBSE strength',
      description: 'Strong coverage of the Maharashtra board alongside CBSE and ICSE.',
    },
    {
      title: 'Progress you can see',
      description: 'Attendance and clear progress updates after classes.',
    },
  ],
  steps: [
    {
      title: 'Tell us your requirement',
      description: 'Class, subjects, your area in Kolhapur, and preferred timing.',
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
  areas: ['Rajarampuri', 'Shahupuri', 'Tarabai Park', 'Kasaba Bawada', 'Ruikar Colony'],
  areasNote:
    'Most areas of Kolhapur city are covered — mention your exact area when you enquire and we will confirm tutor availability.',
  areaLinks: [{ label: 'Also in Kothrud, Pune', href: '/home-tuition/kothrud' }],
  faqs: [
    {
      q: 'Do you have Marathi-medium tutors in Kolhapur?',
      a: 'Yes — we have tutors comfortable teaching in Marathi, English, and Hindi. Tell us your preference when you enquire.',
    },
    {
      q: 'Which areas of Kolhapur do you cover?',
      a: 'Most areas of the city. Share your exact area or pincode in the enquiry and we will confirm tutor availability before anything else.',
    },
    {
      q: 'Which boards and classes do you cover in Kolhapur?',
      a: 'Class 1–12 for SSC (Maharashtra board), CBSE and ICSE, plus JEE, NEET and CET preparation.',
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
  name: 'Home Tuition in Kolhapur',
  serviceType: 'Home tutoring',
  provider: { '@type': 'Organization', name: 'Tutoo' },
  areaServed: { '@type': 'Place', name: 'Kolhapur, Maharashtra' },
  description:
    'One-to-one home tuition with verified tutors across Kolhapur for Class 1–12 (SSC, CBSE, ICSE) and JEE/NEET preparation.',
};

export default function KolhapurPage() {
  return (
    <>
      <PageSchema jsonLd={serviceSchema} />
      <ServiceLandingPage content={content} />
    </>
  );
}
