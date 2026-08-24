import FaqAccordion from './common/FaqAccordion';

/* The booklet's seven questions first, in the booklet's order and voice —
   short sentences, plain words, and its habit of saying "depending on tutor
   availability" instead of over-promising. Three questions parents actually
   ask us (fees, vetting, proof a class happened) are kept after those. */
const faqs = [
  {
    question: 'How do I find a tutor?',
    answer:
      'Tell us your class, subject, location and whether you want home or online classes. We shortlist suitable tutors and share them with you.',
  },
  {
    question: 'Can I find an online tutor?',
    answer:
      'Yes. We arrange one-to-one online classes, and they are available anywhere in India.',
  },
  {
    question: 'Can I find a home tutor?',
    answer:
      'Yes, in Kothrud (Pune) and Kolhapur, depending on tutor availability in your area.',
  },
  {
    question: 'Which classes do you cover?',
    answer:
      'Class 1 to Class 12, plus JEE, NEET and MHT-CET preparation.',
  },
  {
    question: 'Which boards do you cover?',
    answer:
      'CBSE, ICSE and SSC (Maharashtra board), depending on tutor availability for your class and subject.',
  },
  {
    question: 'Can I choose my tutor?',
    answer:
      'Yes. We share the profiles of the tutors who fit your requirement, and you choose the one you want.',
  },
  {
    question: 'Can I request a specific tutor?',
    answer:
      'Yes, if that tutor is available for your class, subject and timing. Tell us who you have in mind and we will check.',
  },
  {
    question: 'How much does tuition cost?',
    answer:
      'It depends on the class, subjects and how often you want classes. We tell you the exact fee before you commit to anything — there are no hidden charges, and the first assessment is free.',
  },
  {
    question: 'How do you check your tutors?',
    answer:
      'Every tutor gives us their ID and qualification documents, and we interview them before they take their first class. We only send tutors we have checked ourselves.',
  },
  {
    question: 'How do I know the class actually happened?',
    answer:
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
