import FaqAccordion, { type FaqItem } from './common/FaqAccordion';

/* ⚠️  These are typed as FaqItem on purpose. This array used to use
   `question`/`answer` keys while FaqAccordion reads `q`/`a`, so every row on
   the homepage rendered blank — and the FAQPage JSON-LD emitted ten Question
   objects with no name and no answer. Nothing failed loudly: `vite build`
   does not typecheck, and the repo's tsconfig cannot run `tsc` as-is. The
   annotation is what makes the next such mistake a compile error.

   The booklet's seven questions first, in the booklet's order and voice —
   short sentences, plain words, and its habit of saying "depending on tutor
   availability" instead of over-promising. Three questions parents actually
   ask us (fees, vetting, proof a class happened) are kept after those. */
const faqs: FaqItem[] = [
  {
    q: 'How do I find a tutor?',
    a:
      'Tell us your class, subject, location and whether you want home or online classes. We shortlist suitable tutors and share them with you.',
  },
  {
    q: 'Can I find an online tutor?',
    a:
      'Yes. We arrange one-to-one online classes, and they are available anywhere in India.',
  },
  {
    q: 'Can I find a home tutor?',
    a:
      'Yes, in Kothrud (Pune) and Kolhapur, depending on tutor availability in your area.',
  },
  {
    q: 'Which classes do you cover?',
    a:
      'Class 1 to Class 12, plus JEE, NEET and MHT-CET preparation.',
  },
  {
    q: 'Which boards do you cover?',
    a:
      'CBSE, ICSE and SSC (Maharashtra board), depending on tutor availability for your class and subject.',
  },
  {
    q: 'Can I choose my tutor?',
    a:
      'Yes. We share the profiles of the tutors who fit your requirement, and you choose the one you want.',
  },
  {
    q: 'Can I request a specific tutor?',
    a:
      'Yes, if that tutor is available for your class, subject and timing. Tell us who you have in mind and we will check.',
  },
  {
    q: 'How much does tuition cost?',
    a:
      'It depends on the class, subjects and how often you want classes. We tell you the exact fee before you commit to anything — there are no hidden charges, and the first assessment is free.',
  },
  {
    q: 'How do you check your tutors?',
    a:
      'Every tutor gives us their ID and qualification documents, and we interview them before they take their first class. We only send tutors we have checked ourselves.',
  },
  {
    q: 'How do I know the class actually happened?',
    a:
      'Each class starts with an OTP, so you know exactly when it begins. Attendance is recorded for every session, and for home tuition the tutor’s location is tracked during the class.',
  },
];


export function FAQ() {
  /* Markup, state, motion and FAQPage schema all live in the shared
     accordion. /online-tuition renders the same component with its own
     questions — the two used to be separate copies that had already drifted
     apart (chevron vs +/−, motion vs none). */
  return (
    <FaqAccordion
      items={faqs}
      eyebrow="FAQs"
      title="Questions parents ask us"
      lead="Finding a tutor, classes, boards and fees — answered plainly."
    />
  );
}
