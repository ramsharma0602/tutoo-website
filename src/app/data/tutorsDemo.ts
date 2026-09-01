/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  DEMO TUTOR DATA — SAMPLE PROFILES, NOT REAL PEOPLE  ⚠️
 * ─────────────────────────────────────────────────────────────────────────
 *  These twelve tutors are INVENTED. The names, qualifications and photos
 *  are placeholders so the Find a Tutor page can be built, demoed and
 *  reviewed before real tutors have opted in.
 *
 *  Photos: the first four carry the local portraits in
 *  public/tutoo_assets/photos/ (see docs/PHOTO-SOURCES.md). The rest carry
 *  none and render an initials tile, which is honest and looks deliberate.
 *  randomuser.me was removed — a live page should not depend on a
 *  third-party placeholder host, and a stock face under an invented name is
 *  a claim about a person who does not exist.
 *
 *  ── BEFORE GOING LIVE TO PARENTS ────────────────────────────────────────
 *  Set USE_DEMO_TUTORS to false (below). The page then reads only the real,
 *  verified registry in `tutors.ts`, and falls back to the honest
 *  "we match tutors to your requirement" state when that registry is empty.
 *
 *  While USE_DEMO_TUTORS is true the page displays a visible notice telling
 *  visitors these are sample profiles — so no parent can be misled into
 *  enquiring about a tutor who does not exist. /tutor/:slug additionally
 *  emits noindex and withholds Person structured data for these entries.
 *
 *  ── PROFILE FIELDS ARE DELIBERATELY UNEVEN ──────────────────────────────
 *  Only the first three tutors carry education, experience, expertise,
 *  approach, availability, certifications and areasCovered. The other nine
 *  carry none of it ON PURPOSE: a real roster will look exactly like this,
 *  and it is the only way to see that /tutor/:slug hides an empty section
 *  rather than printing a heading with nothing under it. Do not "complete"
 *  the remaining nine — the gaps are the test.
 *
 *  Verification and reviews follow the same rule and cover four states on
 *  purpose: Priya is verified with five reviews (distribution bars show),
 *  Rahul is verified with two (average only, no bars), Sneha is verified
 *  with none (section hidden entirely), and the other nine are unverified
 *  with none (no badge, no section). All four have to look right.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Tutor } from './tutors';

/** Master switch. Set to false before the page is shown to real parents. */
export const USE_DEMO_TUTORS = true;

export const DEMO_TUTORS: Tutor[] = [
  {
    id: 'priya-deshmukh',
    name: 'Priya Deshmukh',
    qualification: 'M.Sc. Mathematics',
    experienceYears: 6,
    subjects: ['Mathematics', 'Science'],
    classes: 'Class 6–10',
    classBands: ['Class 6–8', 'Class 9–10'],
    boards: ['CBSE', 'SSC'],
    mode: 'both',
    city: 'Pune',
    area: 'Kothrud, Pune',
    languages: ['English', 'Marathi', 'Hindi'],
    photo: '/tutoo_assets/photos/teacher-1.webp',
    about:
      'Teaches Maths and Science with a focus on clearing basics before moving to exam questions. Works with students who have fallen behind and need to rebuild confidence. Most of her students come to her a term or two behind, so the first few classes are usually spent finding out exactly where the gap starts rather than following the school syllabus. She sets short weekly practice and marks it before the next class.',
    areasCovered: ['Kothrud', 'Karve Nagar', 'Warje', 'Erandwane'],
    expertise: ['Algebra', 'Geometry', 'Trigonometry', 'Fractions', 'Board exam preparation', 'Building basics'],
    approach: ['One-to-one teaching', 'Concept-based learning', 'Doubt solving', 'Regular practice sessions', 'Weekly progress updates'],
    education: [
      { degree: 'M.Sc. Mathematics', institution: 'Savitribai Phule Pune University', year: '2018' },
      { degree: 'B.Sc. Mathematics', institution: 'Fergusson College, Pune', year: '2016' },
    ],
    experience: [
      {
        role: 'Private tutor',
        from: '2020',
        detail: 'Home and online classes for Class 6 to 10 students across Kothrud and nearby areas.',
        subjects: ['Mathematics', 'Science'],
      },
      {
        role: 'Mathematics teacher',
        organisation: 'Vidya Bhavan School, Pune',
        from: '2018',
        to: '2020',
        detail: 'Taught Class 7 and 8 Mathematics and ran the after-school remedial group.',
      },
    ],
    availability: [
      { day: 'Monday', hours: '4:00 PM – 8:00 PM' },
      { day: 'Tuesday', hours: '4:00 PM – 8:00 PM' },
      { day: 'Thursday', hours: '4:00 PM – 8:00 PM' },
      { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
    ],
    verifiedAt: '2026-03-14',
    reviews: [
      { author: 'Meera K.', role: 'Parent of a Class 9 student', rating: 5, date: '2026-06-20',
        quote: 'She started by finding out what my son had actually missed in Class 7 rather than jumping to the current chapter. His marks moved, but the bigger change is that he stopped saying he is bad at maths.' },
      { author: 'Sandeep R.', role: 'Parent of a Class 10 student', rating: 5, date: '2026-05-11',
        quote: 'Punctual, and she sends a short note after each class saying what was covered. We always know where things stand.' },
      { author: 'Anjali T.', role: 'Parent of a Class 6 student', rating: 4, date: '2026-04-28',
        quote: 'Good with my daughter, who is shy about asking questions. Only issue was rescheduling during exams, which took a few messages to sort out.' },
      { author: 'Ramesh P.', role: 'Parent of a Class 8 student', rating: 5, date: '2026-04-02',
        quote: 'We had tried two tutors before. This is the first one who set weekly practice and actually marked it.' },
      { author: 'Farhan S.', role: 'Class 10 student', rating: 4, date: '2026-03-30',
        quote: 'Explains geometry properly instead of just giving the steps. I can do the sums on my own now.' },
    ],
    addedOn: '2026-07-02',
  },
  {
    id: 'rahul-kulkarni',
    name: 'Rahul Kulkarni',
    qualification: 'B.E. Mechanical',
    experienceYears: 4,
    subjects: ['Physics', 'Mathematics'],
    classes: 'Class 11–12 (Science)',
    classBands: ['Class 11–12'],
    boards: ['CBSE', 'HSC'],
    mode: 'home',
    city: 'Pune',
    area: 'Kothrud, Pune',
    languages: ['English', 'Marathi'],
    photo: '/tutoo_assets/photos/teacher-2.webp',
    about:
      'Prepares Class 11 and 12 Science students for board exams alongside JEE basics. Sets weekly problem sets and reviews them in class.',
    areasCovered: ['Kothrud', 'Bavdhan', 'Warje'],
    expertise: ['Mechanics', 'Thermodynamics', 'Calculus', 'JEE foundation', 'Numerical problem solving'],
    approach: ['One-to-one teaching', 'Regular practice sessions', 'Exam preparation', 'Doubt solving'],
    education: [
      { degree: 'B.E. Mechanical Engineering', institution: 'College of Engineering, Pune', year: '2020' },
    ],
    experience: [
      {
        role: 'Physics and Maths tutor',
        from: '2022',
        detail: 'Home tuition for Class 11 and 12 Science students preparing for HSC and CBSE boards.',
        subjects: ['Physics', 'Mathematics'],
      },
      {
        role: 'Teaching assistant',
        organisation: 'Pathfinder Coaching Classes, Pune',
        from: '2020',
        to: '2022',
      },
    ],
    verifiedAt: '2026-05-02',
    /* Only two — deliberately below DISTRIBUTION_MIN, so this profile shows
       the average and count without the bar chart. One or two opinions
       rendered as a distribution reads as a statistic. */
    reviews: [
      { author: 'Nikhil D.', role: 'Parent of a Class 12 student', rating: 5, date: '2026-06-05',
        quote: 'Sets a problem sheet every week and goes through the wrong answers in the next class. That is what my son needed for physics.' },
      { author: 'Sujata M.', role: 'Parent of a Class 11 student', rating: 4, date: '2026-05-19',
        quote: 'Strong on the subject. Travels to Bavdhan without fuss even on short notice.' },
    ],
    addedOn: '2026-06-18',
  },
  {
    id: 'sneha-joshi',
    name: 'Sneha Joshi',
    qualification: 'M.A. English',
    experienceYears: 8,
    subjects: ['English'],
    classes: 'Class 1–8',
    classBands: ['Class 1–5', 'Class 6–8'],
    boards: ['ICSE'],
    mode: 'online',
    city: 'Online',
    area: 'Online',
    languages: ['English', 'Hindi'],
    photo: '/tutoo_assets/photos/teacher-3.webp',
    about:
      'Helps younger students with reading, grammar and writing. Patient with children who find English difficult at school.',
    expertise: ['Reading comprehension', 'Grammar', 'Creative writing', 'Spoken English', 'Phonics'],
    approach: ['One-to-one teaching', 'Concept-based learning', 'Homework support', 'Personalised lesson plans'],
    education: [
      { degree: 'M.A. English Literature', institution: 'University of Mumbai', year: '2016' },
      { degree: 'B.A. English', institution: 'St. Xavier\'s College, Mumbai', year: '2014' },
    ],
    certifications: [
      { name: 'CELTA', issuer: 'Cambridge Assessment English', year: '2017' },
    ],
    availability: [
      { day: 'Monday', hours: '5:00 PM – 8:00 PM' },
      { day: 'Wednesday', hours: '5:00 PM – 8:00 PM' },
      { day: 'Friday', hours: '5:00 PM – 8:00 PM' },
    ],
    /* Verified but NO reviews — a new tutor who has passed the document
       check and not yet taught anyone. The review section must vanish
       entirely rather than print an empty heading or a zero. */
    verifiedAt: '2026-06-11',
    addedOn: '2026-05-30',
  },
  {
    id: 'amit-patil',
    name: 'Amit Patil',
    qualification: 'M.Sc. Chemistry',
    experienceYears: 5,
    subjects: ['Chemistry', 'Biology'],
    classes: 'Class 9–12',
    classBands: ['Class 9–10', 'Class 11–12'],
    boards: ['CBSE', 'SSC'],
    mode: 'both',
    city: 'Pune',
    area: 'Kothrud, Pune',
    languages: ['English', 'Marathi'],
    photo: '/tutoo_assets/photos/teacher-4.webp',
    about:
      'Covers Chemistry and Biology for senior classes, with plenty of diagram practice and past-paper work before exams.',
    addedOn: '2026-07-11',
  },
  {
    id: 'kavita-shinde',
    name: 'Kavita Shinde',
    qualification: 'M.Com., B.Ed.',
    experienceYears: 9,
    subjects: ['Accounts', 'Economics'],
    classes: 'Class 11–12 (Commerce)',
    classBands: ['Class 11–12'],
    boards: ['HSC'],
    mode: 'home',
    city: 'Kolhapur',
    area: 'Rajarampuri, Kolhapur',
    languages: ['Marathi', 'English'],
    about:
      'Teaches Accounts and Economics to Commerce students, starting from journal entries and building up to full problem sets.',
    addedOn: '2026-04-22',
  },
  {
    id: 'nikhil-jadhav',
    name: 'Nikhil Jadhav',
    qualification: 'M.Sc. Physics',
    experienceYears: 11,
    subjects: ['Physics', 'JEE'],
    classes: 'Class 11–12, JEE',
    classBands: ['Class 11–12', 'JEE / NEET'],
    boards: ['CBSE', 'HSC'],
    mode: 'both',
    city: 'Kolhapur',
    area: 'Shahupuri, Kolhapur',
    languages: ['English', 'Marathi', 'Hindi'],
    about:
      'Over a decade teaching Physics to senior students, including JEE preparation. Focuses on concept clarity before speed.',
    addedOn: '2026-03-14',
  },
  {
    id: 'anjali-gokhale',
    name: 'Anjali Gokhale',
    qualification: 'B.Sc., B.Ed.',
    experienceYears: 3,
    subjects: ['Science', 'Mathematics'],
    classes: 'Class 5–8',
    classBands: ['Class 1–5', 'Class 6–8'],
    boards: ['ICSE'],
    mode: 'home',
    city: 'Pune',
    area: 'Karve Nagar, Pune',
    languages: ['English', 'Marathi'],
    about:
      'Works with middle-school students on Maths and Science, using everyday examples to explain ideas that feel abstract in textbooks.',
    addedOn: '2026-07-28',
  },
  {
    id: 'sameer-bhosale',
    name: 'Sameer Bhosale',
    qualification: 'M.Sc. Mathematics',
    experienceYears: 7,
    subjects: ['Mathematics'],
    classes: 'Class 9–12',
    classBands: ['Class 9–10', 'Class 11–12'],
    boards: ['CBSE', 'ICSE', 'SSC'],
    mode: 'online',
    city: 'Online',
    area: 'Online',
    languages: ['English', 'Hindi'],
    about:
      'Teaches Maths online with a shared whiteboard, working through problems step by step so students can follow the reasoning.',
    addedOn: '2026-06-05',
  },
  {
    id: 'meera-kulkarni',
    name: 'Meera Kulkarni',
    qualification: 'M.A. Marathi',
    experienceYears: 12,
    subjects: ['Hindi & Marathi'],
    classes: 'Class 1–10',
    classBands: ['Class 1–5', 'Class 6–8', 'Class 9–10'],
    boards: ['SSC'],
    mode: 'home',
    city: 'Kolhapur',
    area: 'Tarabai Park, Kolhapur',
    languages: ['Marathi', 'Hindi', 'English'],
    about:
      'Language teacher with twelve years of experience, helping students with grammar, comprehension and writing in Marathi and Hindi.',
    addedOn: '2026-02-19',
  },
  {
    id: 'vikram-pawar',
    name: 'Vikram Pawar',
    qualification: 'M.Sc. Biology',
    experienceYears: 6,
    subjects: ['Biology', 'NEET'],
    classes: 'Class 11–12, NEET',
    classBands: ['Class 11–12', 'JEE / NEET'],
    boards: ['HSC', 'SSC'],
    mode: 'both',
    city: 'Pune',
    area: 'Erandwane, Pune',
    languages: ['English', 'Marathi'],
    about:
      'Teaches Biology for board exams and NEET preparation, with regular diagram practice and topic-wise tests.',
    addedOn: '2026-05-08',
  },
  {
    id: 'pooja-ranade',
    name: 'Pooja Ranade',
    qualification: 'B.Tech. Computer Science',
    experienceYears: 2,
    subjects: ['Mathematics', 'Science'],
    classes: 'Class 6–10',
    classBands: ['Class 6–8', 'Class 9–10'],
    boards: ['ICSE', 'CBSE'],
    mode: 'online',
    city: 'Online',
    area: 'Online',
    languages: ['English', 'Hindi', 'Marathi'],
    about:
      'Recent engineering graduate teaching Maths and Science online. Good with students who prefer a younger tutor they can ask questions freely.',
    addedOn: '2026-08-01',
  },
  {
    id: 'sagar-more',
    name: 'Sagar More',
    qualification: 'M.Sc. Mathematics',
    experienceYears: 14,
    subjects: ['Mathematics', 'JEE'],
    classes: 'Class 11–12, JEE',
    classBands: ['Class 11–12', 'JEE / NEET'],
    boards: ['HSC'],
    mode: 'both',
    city: 'Kolhapur',
    area: 'Kasaba Bawada, Kolhapur',
    languages: ['Marathi', 'English'],
    about:
      'Fourteen years teaching senior Maths, including JEE. Known for breaking long problems into small steps students can repeat on their own.',
    addedOn: '2026-01-30',
  },
];

/* ── Filter option lists, derived from the data above ── */
export const BOARD_OPTIONS = ['CBSE', 'ICSE', 'SSC', 'HSC'];
export const CLASS_BAND_OPTIONS = [
  'Class 1–5',
  'Class 6–8',
  'Class 9–10',
  'Class 11–12',
  'JEE / NEET',
];
export const CITY_OPTIONS = ['Pune', 'Kolhapur'];
export const EXPERIENCE_OPTIONS = [
  { label: '0–2 years', min: 0, max: 2 },
  { label: '3–5 years', min: 3, max: 5 },
  { label: '5–10 years', min: 5, max: 10 },
  { label: '10+ years', min: 10, max: 100 },
];
