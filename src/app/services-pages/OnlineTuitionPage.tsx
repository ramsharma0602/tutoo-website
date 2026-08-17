import ServiceLandingPage from './ServiceLandingPage';
import type { ServicePageContent } from './ServiceLandingPage';
import PageSchema from '../../seo/PageSchema';

/* /online-tuition — service page for one-to-one online classes; reaches
   students beyond the two home-tuition cities (UX plan §15/§17). */

const content: ServicePageContent = {
  mode: 'online',
  eyebrow: 'Online Classes · Anywhere in India',
  h1: 'Learn From',
  h1Keyword: 'Anywhere',
  intro:
    'Get one-to-one online classes from the comfort of your home. Live classes, personal attention, flexible timings, qualified tutors and regular learning support — Class 1–12 across CBSE, ICSE and SSC, plus JEE and NEET preparation.',
  ctaLabel: 'Find an Online Tutor',
  whatsappMessage:
    "Hi Tutoo, I'm interested in online classes. Class: __, Subject: __.",
  benefits: [
    {
      title: 'Learn from anywhere',
      description: 'No travel — live classes at home, in any city in India.',
    },
    {
      title: 'Same verified tutors',
      description: 'Online tutors go through the same verification and interview.',
    },
    {
      title: 'Truly one-to-one',
      description: 'Live interactive sessions, not recorded videos or batch classes.',
    },
    {
      title: 'Simple setup',
      description: 'A phone or laptop and an internet connection is all you need.',
    },
  ],
  steps: [
    {
      title: 'Tell us what you need',
      description: 'Class, subjects and preferred timing — takes under a minute.',
    },
    {
      title: 'We find suitable tutors',
      description: 'We assess your child for free over a video call, then shortlist verified tutors who fit.',
    },
    {
      title: 'Choose your tutor',
      description: 'We share the tutor profiles with you. You pick the one who feels right for your child.',
    },
    {
      title: 'Start learning',
      description: 'One-to-one video classes on the agreed schedule, with attendance and progress you can check.',
    },
  ],
  extraNote: {
    title: 'What you need',
    body: 'A phone, tablet or laptop with a stable internet connection. Classes happen live over video call — we help you with the setup before the first session, and the assessment is free.',
  },
  areas: ['Anywhere in India', 'English & regional-language tutors'],
  faqs: [
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
      q: 'Can we switch between online and home tuition later?',
      a: 'Yes — if you are in Kothrud (Pune) or Kolhapur, you can switch to home tuition whenever you like. Just tell us and we will arrange it.',
    },
  ],
};

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

export default function OnlineTuitionPage() {
  return (
    <>
      <PageSchema jsonLd={serviceSchema} />
      <ServiceLandingPage content={content} />
    </>
  );
}
