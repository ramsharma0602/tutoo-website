/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  DEMO TUTOR DATA — SAMPLE PROFILES, NOT REAL PEOPLE  ⚠️
 * ─────────────────────────────────────────────────────────────────────────
 *  These twelve tutors are INVENTED. The names, qualifications and photos
 *  are placeholders so the Find a Tutor page can be built, demoed and
 *  reviewed before real tutors have opted in.
 *
 *  Photos come from randomuser.me, a free service intended for placeholder
 *  use. They are NOT photos of your tutors.
 *
 *  ── BEFORE GOING LIVE TO PARENTS ────────────────────────────────────────
 *  Set USE_DEMO_TUTORS to false (below). The page then reads only the real,
 *  verified registry in `tutors.ts`, and falls back to the honest
 *  "we match tutors to your requirement" state when that registry is empty.
 *
 *  While USE_DEMO_TUTORS is true the page displays a visible notice telling
 *  visitors these are sample profiles — so no parent can be misled into
 *  enquiring about a tutor who does not exist.
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
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    about:
      'Teaches Maths and Science with a focus on clearing basics before moving to exam questions. Works with students who have fallen behind and need to rebuild confidence.',
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
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    about:
      'Prepares Class 11 and 12 Science students for board exams alongside JEE basics. Sets weekly problem sets and reviews them in class.',
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
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    about:
      'Helps younger students with reading, grammar and writing. Patient with children who find English difficult at school.',
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
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
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
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
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
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
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
    photo: 'https://randomuser.me/api/portraits/women/90.jpg',
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
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
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
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
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
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
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
    photo: 'https://randomuser.me/api/portraits/women/33.jpg',
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
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
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
