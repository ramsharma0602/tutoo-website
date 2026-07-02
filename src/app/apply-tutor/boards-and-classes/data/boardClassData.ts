// ─────────────────────────────────────────────────────────────────────────────
//  boardClassData.ts  —  Single source of truth for all Board × Class pages
//  URL pattern: /board-and-classes/:slug   e.g. /board-and-classes/cbse-class-9
// ─────────────────────────────────────────────────────────────────────────────

export type Category = "primary" | "secondary" | "senior" | "competitive";

export interface FAQ { question: string; answer: string; }

export interface BoardClassEntry {
  board: string;           // "CBSE" | "ICSE" | "SSC" | "IGCSE" …
  classLabel: string;      // "Class 1" … "Class 12"
  classNum: number;        // 1 – 12  (used for category logic)
  category: Category;
  subjects: { label: string; icon: string; color: string; bg: string }[];
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;      // optional Unsplash URL
  faq: FAQ[];
}

// ── Subject icon/color palette helper ────────────────────────────────────────
const SUB = {
  Maths: { icon: "📐", color: "#2563EB", bg: "rgba(37,99,235,0.09)" },
  English: { icon: "📖", color: "#16C47F", bg: "rgba(22,196,127,0.09)" },
  Science: { icon: "🔬", color: "#7C3AED", bg: "rgba(124,58,237,0.09)" },
  Hindi: { icon: "🇮🇳", color: "#F59E0B", bg: "rgba(245,158,11,0.09)" },
  EVS: { icon: "🌿", color: "#16C47F", bg: "rgba(22,196,127,0.09)" },
  GK: { icon: "🌍", color: "#2563EB", bg: "rgba(37,99,235,0.09)" },
  SocialScience: { icon: "🏛️", color: "#F59E0B", bg: "rgba(245,158,11,0.09)" },
  Sanskrit: { icon: "📜", color: "#7C3AED", bg: "rgba(124,58,237,0.09)" },
  Computer: { icon: "💻", color: "#2563EB", bg: "rgba(37,99,235,0.09)" },
  Physics: { icon: "⚛️", color: "#7C3AED", bg: "rgba(124,58,237,0.09)" },
  Chemistry: { icon: "🧪", color: "#EF4444", bg: "rgba(239,68,68,0.09)" },
  Biology: { icon: "🧬", color: "#16C47F", bg: "rgba(22,196,127,0.09)" },
  Accounts: { icon: "📊", color: "#F59E0B", bg: "rgba(245,158,11,0.09)" },
  BusinessStudies: { icon: "💼", color: "#2563EB", bg: "rgba(37,99,235,0.09)" },
  Economics: { icon: "📈", color: "#16C47F", bg: "rgba(22,196,127,0.09)" },
  Maths2: { icon: "∑", color: "#2563EB", bg: "rgba(37,99,235,0.09)" },
  History: { icon: "🏺", color: "#F59E0B", bg: "rgba(245,158,11,0.09)" },
  Geography: { icon: "🗺️", color: "#16C47F", bg: "rgba(22,196,127,0.09)" },
  Civics: { icon: "⚖️", color: "#7C3AED", bg: "rgba(124,58,237,0.09)" },

  /* NEW ARTS SUBJECTS */
  PoliticalScience: {
    icon: "🏛️",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.09)",
  },

  Psychology: {
    icon: "🧠",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.09)",
  },

  Sociology: {
    icon: "👥",
    color: "#16C47F",
    bg: "rgba(22,196,127,0.09)",
  },
};
const sub = (label: string, key: keyof typeof SUB) => ({ label, ...SUB[key] });

// ── FAQ helpers ───────────────────────────────────────────────────────────────
const commonFAQs = (board: string, cls: string): FAQ[] => [
  {
    question: `Do you provide home tutors for ${board} ${cls} students?`,
    answer: `Yes. UberTutor offers verified home tutors for ${board} ${cls} across all major cities and towns in India. We match your child with tutors based on location, schedule, and learning needs.`,
  },
  {
    question: `Can tutors help with ${board} ${cls} exam preparation?`,
    answer: `Absolutely. Our tutors are trained in the ${board} curriculum and design targeted revision plans, practice papers, and mock tests to prepare students thoroughly for assessments.`,
  },
  {
    question: "How do I book a free demo session?",
    answer: "Click 'Book Free Assessment' on this page, fill in your child's details, and we will connect you with a shortlisted tutor within 24 hours for a free demo class.",
  },
  {
    question: "Are online classes available?",
    answer: `Yes — all ${board} ${cls} subjects are available for online tuition via live video sessions with interactive digital whiteboards, recorded playback, and homework tracking.`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  MASTER DATA MAP
// ─────────────────────────────────────────────────────────────────────────────
export const BOARD_CLASS_DATA: Record<string, BoardClassEntry> = {

  // ── CBSE PRIMARY ────────────────────────────────────────────────────────────
  "cbse-board-class-1": {
    board: "CBSE", classLabel: "Class 1", classNum: 1, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("EVS", "EVS"), sub("Hindi", "Hindi"), sub("General Knowledge", "GK")],
    metaTitle: "CBSE Class 1 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 1 home tutors and online tuition with personalised learning support for young learners.",
    faq: [{ question: "What subjects are covered in CBSE Class 1 tuition?", answer: "Our tutors cover Mathematics, English, EVS, Hindi, and General Knowledge — building a strong early foundation." }, ...commonFAQs("CBSE", "Class 1")],
  },
  "cbse-board-class-2": {
    board: "CBSE", classLabel: "Class 2", classNum: 2, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("EVS", "EVS"), sub("Hindi", "Hindi"), sub("General Knowledge", "GK")],
    metaTitle: "CBSE Class 2 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Find experienced CBSE Class 2 tutors for personalised home and online tuition.",
    faq: commonFAQs("CBSE", "Class 2"),
  },
  "cbse-board-class-3": {
    board: "CBSE", classLabel: "Class 3", classNum: 3, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("EVS", "EVS"), sub("Hindi", "Hindi"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 3 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Top CBSE Class 3 tutors for concept-based personalised learning support.",
    faq: commonFAQs("CBSE", "Class 3"),
  },
  "cbse-board-class-4": {
    board: "CBSE", classLabel: "Class 4", classNum: 4, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("EVS", "EVS"), sub("Hindi", "Hindi"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 4 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 4 home & online tuition with activity-based learning.",
    faq: commonFAQs("CBSE", "Class 4"),
  },
  "cbse-board-class-5": {
    board: "CBSE", classLabel: "Class 5", classNum: 5, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("Science", "Science"), sub("Hindi", "Hindi"), sub("Social Studies", "SocialScience")],
    metaTitle: "CBSE Class 5 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Verified CBSE Class 5 tutors for strong subject foundations before middle school.",
    faq: commonFAQs("CBSE", "Class 5"),
  },

  // ── CBSE SECONDARY ──────────────────────────────────────────────────────────
  "cbse-board-class-6": {
    board: "CBSE", classLabel: "Class 6", classNum: 6, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Science", "Science"), sub("English", "English"), sub("Hindi", "Hindi"), sub("Social Science", "SocialScience"), sub("Sanskrit", "Sanskrit")],
    metaTitle: "CBSE Class 6 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 6 tutors covering Maths, Science, English, Hindi, and Social Science.",
    faq: [{ question: "Is CBSE Class 6 a critical year for students?", answer: "Yes — Class 6 marks the transition to middle school where conceptual difficulty increases significantly. Early tuition support builds the confidence needed for higher classes." }, ...commonFAQs("CBSE", "Class 6")],
  },
  "cbse-board-class-7": {
    board: "CBSE", classLabel: "Class 7", classNum: 7, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Science", "Science"), sub("English", "English"), sub("Hindi", "Hindi"), sub("Social Science", "SocialScience"), sub("Sanskrit", "Sanskrit")],
    metaTitle: "CBSE Class 7 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Personalised CBSE Class 7 tuition for Maths, Science, Social Science, and languages.",
    faq: commonFAQs("CBSE", "Class 7"),
  },
  "cbse-board-class-8": {
    board: "CBSE", classLabel: "Class 8", classNum: 8, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Science", "Science"), sub("English", "English"), sub("Hindi", "Hindi"), sub("Social Science", "SocialScience"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 8 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 8 home and online tutors for board exam foundation preparation.",
    faq: commonFAQs("CBSE", "Class 8"),
  },
  "cbse-board-class-9": {
    board: "CBSE", classLabel: "Class 9", classNum: 9, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Science", "Science"), sub("English", "English"), sub("Hindi", "Hindi"), sub("Social Science", "SocialScience"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 9 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Top CBSE Class 9 tutors for Maths, Science, English, and Social Science — board exam preparation starts here.",
    faq: [{ question: "Why is CBSE Class 9 important for board exam preparation?", answer: "Class 9 introduces the full CBSE board curriculum. Strong performance in Class 9 directly impacts Class 10 boards, making early concept clarity essential." }, ...commonFAQs("CBSE", "Class 9")],
  },
  "cbse-board-class-10": {
    board: "CBSE", classLabel: "Class 10", classNum: 10, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Science", "Science"), sub("English", "English"), sub("Hindi", "Hindi"), sub("Social Science", "SocialScience"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 10 Board Exam Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 10 board exam tutors for Maths, Science, English, and Social Science with full exam preparation support.",
    faq: [{ question: "Do tutors provide CBSE Class 10 board exam revision support?", answer: "Yes. Our Class 10 tutors specialise in board exam patterns, provide past paper practice, chapter-wise revision, and mock test evaluation." }, ...commonFAQs("CBSE", "Class 10")],
  },

  // ── CBSE SENIOR SECONDARY ───────────────────────────────────────────────────
  "cbse-board-class-11-science": {
    board: "CBSE", classLabel: "Class 11 Science", classNum: 11, category: "senior",
    subjects: [sub("Physics", "Physics"), sub("Chemistry", "Chemistry"), sub("Biology / Maths", "Biology"), sub("English", "English"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 11 Science Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 11 Science tutors for Physics, Chemistry, Biology, and Maths with JEE/NEET foundation support.",
    faq: [{ question: "Do your tutors prepare students for JEE/NEET along with Class 11?", answer: "Yes — many of our Class 11 Science tutors are trained to align board preparation with JEE/NEET foundation requirements." }, ...commonFAQs("CBSE", "Class 11 Science")],
  },
  "cbse-board-class-11-commerce": {
    board: "CBSE", classLabel: "Class 11 Commerce", classNum: 11, category: "senior",
    subjects: [sub("Accountancy", "Accounts"), sub("Business Studies", "BusinessStudies"), sub("Economics", "Economics"), sub("Mathematics", "Maths"), sub("English", "English")],
    metaTitle: "CBSE Class 11 Commerce Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Top CBSE Class 11 Commerce tutors for Accounts, Business Studies, Economics, and Maths.",
    faq: commonFAQs("CBSE", "Class 11 Commerce"),
  },
  "cbse-board-class-12-science": {
    board: "CBSE", classLabel: "Class 12 Science", classNum: 12, category: "senior",
    subjects: [sub("Physics", "Physics"), sub("Chemistry", "Chemistry"), sub("Biology / Maths", "Biology"), sub("English", "English"), sub("Computer Science", "Computer")],
    metaTitle: "CBSE Class 12 Science Board Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert CBSE Class 12 Science board tutors for Physics, Chemistry, Biology, Maths — highest board scores guaranteed.",
    faq: [{ question: "Can your tutors help with CBSE Class 12 Science board exam preparation?", answer: "Yes. Our Class 12 Science tutors focus on CBSE board patterns, NCERT mastery, and provide full chapter-wise question bank practice." }, ...commonFAQs("CBSE", "Class 12 Science")],
  },
  "cbse-board-class-12-commerce": {
    board: "CBSE", classLabel: "Class 12 Commerce", classNum: 12, category: "senior",
    subjects: [sub("Accountancy", "Accounts"), sub("Business Studies", "BusinessStudies"), sub("Economics", "Economics"), sub("Mathematics", "Maths2"), sub("English", "English")],
    metaTitle: "CBSE Class 12 Commerce Board Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Top CBSE Class 12 Commerce tutors for Accounts, Business Studies, Economics, and Maths.",
    faq: commonFAQs("CBSE", "Class 12 Commerce"),
  },
  "cbse-board-class-11-arts": {
    board: "CBSE",
    classLabel: "Class 11 Arts",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("Economics", "Economics"),
      sub("English", "English"),
    ],

    metaTitle:
      "CBSE Class 11 Arts Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert CBSE Class 11 Arts tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English. Personalized home and online tuition for academic excellence.",

    faq: [
      {
        question:
          "Do you provide tutors for all CBSE Class 11 Arts subjects?",

        answer:
          "Yes. UberTutor provides expert tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English.",
      },

      {
        question:
          "Can students choose individual subjects for tuition?",

        answer:
          "Absolutely. Students can enroll for one subject or multiple Arts stream subjects based on their academic needs.",
      },

      ...commonFAQs("CBSE", "Class 11 Arts"),
    ],
  },
  "cbse-board-class-12-arts": {
    board: "CBSE",
    classLabel: "Class 12 Arts",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("Economics", "Economics"),
      sub("English", "English"),
    ],

    metaTitle:
      "CBSE Class 12 Arts Board Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert CBSE Class 12 Arts board exam tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English. Score higher with personalized board exam preparation.",

    faq: [
      {
        question:
          "Can your tutors help with CBSE Class 12 Arts board exam preparation?",

        answer:
          "Yes. Our tutors provide complete board exam preparation including NCERT mastery, sample papers, previous year questions, answer-writing practice, and revision plans.",
      },

      {
        question:
          "Do you provide subject-specific tutors for Class 12 Arts?",

        answer:
          "Yes. Students can choose dedicated tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English.",
      },

      ...commonFAQs("CBSE", "Class 12 Arts"),
    ],
  },

  // ── ICSE ────────────────────────────────────────────────────────────────────
  "icse-board-class-1": {
    board: "ICSE", classLabel: "Class 1", classNum: 1, category: "primary",
    subjects: [sub("Mathematics", "Maths"), sub("English", "English"), sub("Environmental Studies", "EVS"), sub("Hindi", "Hindi"), sub("General Knowledge", "GK")],
    metaTitle: "ICSE Class 1 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert ICSE Class 1 home tutors and online tuition — activity-based learning for young students.",
    faq: commonFAQs("ICSE", "Class 1"),
  },
  "icse-board-class-2": {
    board: "ICSE",
    classLabel: "Class 2",
    classNum: 2,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Environmental Studies", "EVS"),
      sub("Hindi", "Hindi"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle: "ICSE Class 2 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 2 home tutors and online tuition classes for Mathematics, English, EVS, Hindi, and General Knowledge.",

    faq: commonFAQs("ICSE", "Class 2"),
  },
  "icse-board-class-3": {
    board: "ICSE",
    classLabel: "Class 3",
    classNum: 3,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Environmental Studies", "EVS"),
      sub("Hindi", "Hindi"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle: "ICSE Class 3 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 3 tuition with personalized home and online tutoring for strong academic foundations.",

    faq: commonFAQs("ICSE", "Class 3"),
  },
  "icse-board-class-4": {
    board: "ICSE",
    classLabel: "Class 4",
    classNum: 4,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Environmental Studies", "EVS"),
      sub("Hindi", "Hindi"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle: "ICSE Class 4 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "ICSE Class 4 home tuition and online tutoring by experienced teachers for better academic performance.",

    faq: commonFAQs("ICSE", "Class 4"),
  },
  "icse-board-class-5": {
    board: "ICSE",
    classLabel: "Class 5",
    classNum: 5,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Environmental Studies", "EVS"),
      sub("Hindi", "Hindi"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle: "ICSE Class 5 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 5 tutors providing home and online tuition for comprehensive subject support.",

    faq: commonFAQs("ICSE", "Class 5"),
  },
  "icse-board-class-6": {
    board: "ICSE",
    classLabel: "Class 6",
    classNum: 6,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Biology", "Biology"),
      sub("History", "History"),
      sub("Geography", "Geography"),
      sub("English", "English"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle: "ICSE Class 6 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 6 tutors for Mathematics, Science, History, Geography, English, and Computer Science.",

    faq: commonFAQs("ICSE", "Class 6"),
  },
  "icse-board-class-7": {
    board: "ICSE",
    classLabel: "Class 7",
    classNum: 7,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Biology", "Biology"),
      sub("History", "History"),
      sub("Geography", "Geography"),
      sub("English", "English"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle: "ICSE Class 7 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Personalized ICSE Class 7 home tuition and online tutoring for better concept clarity and exam readiness.",

    faq: commonFAQs("ICSE", "Class 7"),
  },
  "icse-board-class-8": {
    board: "ICSE",
    classLabel: "Class 8",
    classNum: 8,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Biology", "Biology"),
      sub("History", "History"),
      sub("Geography", "Geography"),
      sub("English", "English"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle: "ICSE Class 8 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 8 tutors for Mathematics, Science, History, Geography, English, and Computer Science.",

    faq: commonFAQs("ICSE", "Class 8"),
  },
  "icse-board-class-9": {
    board: "ICSE", classLabel: "Class 9", classNum: 9, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Physics", "Physics"), sub("Chemistry", "Chemistry"), sub("Biology", "Biology"), sub("English", "English"), sub("History & Civics", "History"), sub("Geography", "Geography")],
    metaTitle: "ICSE Class 9 Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Top ICSE Class 9 tutors for Maths, Science, English, History, and Geography.",
    faq: [{ question: "How is ICSE Class 9 different from CBSE?", answer: "ICSE has a broader curriculum with greater depth in English, History, and Geography. Our tutors are specifically trained in ICSE question patterns and marking schemes." }, ...commonFAQs("ICSE", "Class 9")],
  },
  "icse-board-class-10": {
    board: "ICSE", classLabel: "Class 10", classNum: 10, category: "secondary",
    subjects: [sub("Mathematics", "Maths"), sub("Physics", "Physics"), sub("Chemistry", "Chemistry"), sub("Biology", "Biology"), sub("English", "English"), sub("History & Civics", "History"), sub("Geography", "Geography")],
    metaTitle: "ICSE Class 10 Board Tuition | Home & Online Tutors | UberTutor",
    metaDescription: "Expert ICSE Class 10 board tutors for Maths, Science, English, History, and Geography.",
    faq: commonFAQs("ICSE", "Class 10"),
  },

  // --- ICSE SENIOR SECONDARY ---------------------------------------------------------------
  "icse-board-class-11-science": {
    board: "ICSE",
    classLabel: "Class 11 Science",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
      sub("Biology", "Biology"),
      sub("Computer Science", "Computer"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 11 Science Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 11 Science tutors for Physics, Chemistry, Mathematics, Biology, Computer Science, and English.",

    faq: commonFAQs("ICSE", "Class 11 Science"),
  },

  "icse-board-class-12-science": {
    board: "ICSE",
    classLabel: "Class 12 Science",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
      sub("Biology", "Biology"),
      sub("Computer Science", "Computer"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 12 Science Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 12 Science tutors for board exam preparation in Physics, Chemistry, Mathematics, Biology, and Computer Science.",

    faq: [
      {
        question:
          "Can tutors help with ICSE Class 12 board exam preparation?",

        answer:
          "Yes. Our tutors provide chapter-wise preparation, previous year papers, mock tests, and board exam strategies.",
      },

      ...commonFAQs("ICSE", "Class 12 Science"),
    ],
  },

  "icse-board-class-11-commerce": {
    board: "ICSE",
    classLabel: "Class 11 Commerce",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("Accountancy", "Accounts"),
      sub("Economics", "Economics"),
      sub("Commerce", "BusinessStudies"),
      sub("Mathematics", "Maths"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 11 Commerce Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 11 Commerce tutors for Accountancy, Economics, Commerce, Mathematics, and English.",

    faq: commonFAQs("ICSE", "Class 11 Commerce"),
  },

  "icse-board-class-12-commerce": {
    board: "ICSE",
    classLabel: "Class 12 Commerce",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("Accountancy", "Accounts"),
      sub("Economics", "Economics"),
      sub("Commerce", "BusinessStudies"),
      sub("Mathematics", "Maths"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 12 Commerce Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 12 Commerce tutors for board exam preparation in Accountancy, Economics, Commerce, Mathematics, and English.",

    faq: [
      {
        question:
          "Do tutors help with ICSE Commerce board exams?",

        answer:
          "Yes. Tutors provide complete board exam preparation, sample papers, accountancy practice, and economics guidance.",
      },

      ...commonFAQs("ICSE", "Class 12 Commerce"),
    ],
  },

  "icse-board-class-11-arts": {
    board: "ICSE",
    classLabel: "Class 11 Arts",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 11 Arts Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 11 Arts tutors for History, Political Science, Geography, Psychology, Sociology, and English.",

    faq: commonFAQs("ICSE", "Class 11 Arts"),
  },

  "icse-board-class-12-arts": {
    board: "ICSE",
    classLabel: "Class 12 Arts",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("English", "English"),
    ],

    metaTitle:
      "ICSE Class 12 Arts Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert ICSE Class 12 Arts tutors for History, Political Science, Geography, Psychology, Sociology, and English board exam preparation.",

    faq: [
      {
        question:
          "Can tutors help with ICSE Class 12 Arts board preparation?",

        answer:
          "Yes. Our tutors provide board-oriented preparation, answer-writing practice, revision plans, and mock tests.",
      },

      ...commonFAQs("ICSE", "Class 12 Arts"),
    ],
  },

  // ── SSC ─────────────────────────────────────────────────────────────────────
  "ssc-class-1": {
    board: "SSC",
    classLabel: "Class 1",
    classNum: 1,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Environmental Studies", "EVS"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle:
      "SSC Class 1 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 1 home tutors and online tuition for Mathematics, English, Marathi, EVS, and General Knowledge.",

    faq: commonFAQs("SSC", "Class 1"),
  },
  "ssc-class-2": {
    board: "SSC",
    classLabel: "Class 2",
    classNum: 2,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Environmental Studies", "EVS"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle:
      "SSC Class 2 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 2 tuition classes with experienced home and online tutors.",

    faq: commonFAQs("SSC", "Class 2"),
  },
  "ssc-class-3": {
    board: "SSC",
    classLabel: "Class 3",
    classNum: 3,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Environmental Studies", "EVS"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle:
      "SSC Class 3 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 3 home tuition and online tutoring for Mathematics, English, Marathi, EVS, and General Knowledge. Personalized learning support from experienced tutors.",

    faq: commonFAQs("SSC", "Class 3"),
  },
  "ssc-class-4": {
    board: "SSC",
    classLabel: "Class 4",
    classNum: 4,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Environmental Studies", "EVS"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle:
      "SSC Class 4 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Professional SSC Class 4 tutors for home and online tuition. Improve Mathematics, English, Marathi, EVS, and overall academic performance.",

    faq: commonFAQs("SSC", "Class 4"),
  },
  "ssc-class-5": {
    board: "SSC",
    classLabel: "Class 5",
    classNum: 5,
    category: "primary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Environmental Studies", "EVS"),
      sub("General Knowledge", "GK"),
    ],

    metaTitle:
      "SSC Class 5 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 5 tuition classes with qualified home tutors and online tutors for Mathematics, English, Marathi, EVS, and General Knowledge.",

    faq: commonFAQs("SSC", "Class 5"),
  },
  "ssc-class-6": {
    board: "SSC",
    classLabel: "Class 6",
    classNum: 6,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Science", "Science"),
      sub("Social Science", "SocialScience"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Hindi", "Hindi"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle:
      "SSC Class 6 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Best SSC Class 6 tutors for Mathematics, Science, Social Science, English, Marathi, Hindi, and Computer Science. Home and online tuition available.",

    faq: commonFAQs("SSC", "Class 6"),
  },
  "ssc-class-7": {
    board: "SSC",
    classLabel: "Class 7",
    classNum: 7,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Science", "Science"),
      sub("Social Science", "SocialScience"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Hindi", "Hindi"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle:
      "SSC Class 7 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Experienced SSC Class 7 home tutors and online tutors for Mathematics, Science, Social Science, English, Marathi, Hindi, and Computer Science.",

    faq: commonFAQs("SSC", "Class 7"),
  },
  "ssc-class-8": {
    board: "SSC",
    classLabel: "Class 8",
    classNum: 8,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Science", "Science"),
      sub("Social Science", "SocialScience"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Hindi", "Hindi"),
      sub("Computer Science", "Computer"),
    ],

    metaTitle:
      "SSC Class 8 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 8 tuition for Mathematics, Science, Social Science, English, Marathi, Hindi, and Computer Science with personalized learning plans.",

    faq: commonFAQs("SSC", "Class 8"),
  },
  "ssc-class-9": {
    board: "SSC",
    classLabel: "Class 9",
    classNum: 9,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Science & Technology", "Science"),
      sub("History", "History"),
      sub("Geography", "Geography"),
      sub("Economics", "Economics"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Hindi", "Hindi"),
      sub("Information Technology", "Computer"),
    ],

    metaTitle:
      "SSC Class 9 Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 9 tutors for Mathematics, Science, History, Geography, Economics, English, Marathi, and IT.",

    faq: commonFAQs("SSC", "Class 9"),
  },
  "ssc-class-10": {
    board: "SSC",
    classLabel: "Class 10",
    classNum: 10,
    category: "secondary",

    subjects: [
      sub("Mathematics", "Maths"),
      sub("Science & Technology", "Science"),
      sub("History", "History"),
      sub("Geography", "Geography"),
      sub("Economics", "Economics"),
      sub("English", "English"),
      sub("Marathi", "Hindi"),
      sub("Hindi", "Hindi"),
      sub("Information Technology", "Computer"),
    ],

    metaTitle:
      "SSC Class 10 Board Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 10 board exam tutors for Mathematics, Science, English, Marathi, History, Geography, Economics, and IT.",

    faq: [
      {
        question:
          "Can tutors help with SSC Class 10 board exam preparation?",

        answer:
          "Yes. Our SSC Class 10 tutors provide chapter-wise preparation, board paper practice, mock tests, and revision strategies.",
      },

      ...commonFAQs("SSC", "Class 10"),
    ],
  },

  // ── SSC ────────────────────────────────────────────────────────────────────
  "ssc-class-11-science": {
    board: "SSC",
    classLabel: "Class 11 Science",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
      sub("Biology", "Biology"),
      sub("Computer Science", "Computer"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 11 Science Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 11 Science tutors for Physics, Chemistry, Mathematics, Biology, Computer Science, and English. Personalized home and online tuition.",

    faq: commonFAQs("SSC", "Class 11 Science"),
  },
  "ssc-class-12-science": {
    board: "SSC",
    classLabel: "Class 12 Science",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
      sub("Biology", "Biology"),
      sub("Computer Science", "Computer"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 12 Science Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 12 Science board exam tutors for Physics, Chemistry, Mathematics, Biology, and Computer Science.",

    faq: commonFAQs("SSC", "Class 12 Science"),
  },
  "ssc-class-11-commerce": {
    board: "SSC",
    classLabel: "Class 11 Commerce",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("Accountancy", "Accounts"),
      sub("Economics", "Economics"),
      sub("Business Studies", "BusinessStudies"),
      sub("Mathematics", "Maths"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 11 Commerce Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 11 Commerce tutors for Accountancy, Economics, Business Studies, Mathematics, and English.",

    faq: commonFAQs("SSC", "Class 11 Commerce"),
  },
  "ssc-class-12-commerce": {
    board: "SSC",
    classLabel: "Class 12 Commerce",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("Accountancy", "Accounts"),
      sub("Economics", "Economics"),
      sub("Business Studies", "BusinessStudies"),
      sub("Mathematics", "Maths"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 12 Commerce Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 12 Commerce board exam tutors for Accountancy, Economics, Business Studies, Mathematics, and English.",

    faq: commonFAQs("SSC", "Class 12 Commerce"),
  },
  "ssc-class-11-arts": {
    board: "SSC",
    classLabel: "Class 11 Arts",
    classNum: 11,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("Economics", "Economics"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 11 Arts Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 11 Arts tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English.",

    faq: commonFAQs("SSC", "Class 11 Arts"),
  },
  "ssc-class-12-arts": {
    board: "SSC",
    classLabel: "Class 12 Arts",
    classNum: 12,
    category: "senior",

    subjects: [
      sub("History", "History"),
      sub("Political Science", "PoliticalScience"),
      sub("Geography", "Geography"),
      sub("Psychology", "Psychology"),
      sub("Sociology", "Sociology"),
      sub("Economics", "Economics"),
      sub("English", "English"),
    ],

    metaTitle:
      "SSC Class 12 Arts Tuition | Home & Online Tutors | UberTutor",

    metaDescription:
      "Expert SSC Class 12 Arts board exam tutors for History, Political Science, Geography, Psychology, Sociology, Economics, and English.",

    faq: commonFAQs("SSC", "Class 12 Arts"),
  },

  // ── Competitive Exams ────────────────────────────────────────────────────────────────────
  "competitive-exams-jee": {
    board: "Competitive Exams",
    classLabel: "JEE Preparation",
    classNum: 0,
    category: "competitive",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
    ],

    metaTitle:
      "JEE Coaching & Home Tutors | Online JEE Preparation | UberTutor",

    metaDescription:
      "Expert JEE tutors for Physics, Chemistry, and Mathematics. Personalized home tuition and online coaching for JEE Main and JEE Advanced preparation.",

    faq: [
      {
        question: "Do you provide JEE Main and JEE Advanced preparation?",
        answer:
          "Yes, our expert tutors provide complete preparation for both JEE Main and JEE Advanced examinations.",
      },
      {
        question: "Can I take tuition for only Physics or Mathematics?",
        answer:
          "Yes, students can choose individual subjects or complete JEE preparation packages.",
      },
      ...commonFAQs("Competitive Exams", "JEE Preparation"),
    ],
  },
  "competitive-exams-neet": {
    board: "Competitive Exams",
    classLabel: "NEET Preparation",
    classNum: 0,
    category: "competitive",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Biology", "Biology"),
    ],

    metaTitle:
      "NEET Coaching & Home Tutors | Online NEET Preparation | UberTutor",

    metaDescription:
      "Expert NEET tutors for Physics, Chemistry, and Biology. Personalized home tuition and online coaching for medical entrance exam preparation.",

    faq: [
      {
        question: "Do you provide NEET-focused Biology coaching?",
        answer:
          "Yes, our tutors provide in-depth Biology preparation along with Physics and Chemistry for NEET.",
      },
      {
        question: "Do you provide mock tests and previous year paper practice?",
        answer:
          "Yes, students receive mock tests, chapter-wise assessments, and previous year NEET question practice.",
      },
      ...commonFAQs("Competitive Exams", "NEET Preparation"),
    ],
  },
  "competitive-exams-cet": {
    board: "Competitive Exams",
    classLabel: "CET Preparation",
    classNum: 0,
    category: "competitive",

    subjects: [
      sub("Physics", "Physics"),
      sub("Chemistry", "Chemistry"),
      sub("Mathematics", "Maths"),
      sub("Biology", "Biology"),
    ],

    metaTitle:
      "CET Coaching & Home Tutors | Online CET Preparation | UberTutor",

    metaDescription:
      "Expert CET tutors for Physics, Chemistry, Mathematics, and Biology. Personalized home tuition and online coaching for state-level CET exams.",

    faq: [
      {
        question: "Do you provide preparation for MHT-CET?",
        answer:
          "Yes, our tutors provide complete preparation for MHT-CET and other state-level CET examinations.",
      },
      {
        question: "Are online CET classes available?",
        answer:
          "Yes, UberTutor offers both home tuition and live online CET coaching.",
      },
      ...commonFAQs("Competitive Exams", "CET Preparation"),
    ],
  },

};

// ── Category-level learning outcomes ─────────────────────────────────────────
export const LEARNING_OUTCOMES: Record<Category, { icon: string; text: string }[]> = {
  primary: [
    { icon: "🏗️", text: "Strong foundation building across all core subjects" },
    { icon: "📝", text: "Reading, writing, and communication skills" },
    { icon: "🔢", text: "Foundational Mathematics and logical thinking" },
    { icon: "🧩", text: "Creative problem-solving and critical thinking" },
    { icon: "💪", text: "Improved academic confidence and self-esteem" },
    { icon: "📈", text: "Consistent improvement in school performance" },
  ],
  secondary: [
    { icon: "🎯", text: "Deep concept clarity in all major subjects" },
    { icon: "📋", text: "Structured exam preparation and revision plans" },
    { icon: "🏆", text: "Subject mastery through personalised teaching" },
    { icon: "⏱️", text: "Effective time management for board exams" },
    { icon: "🧮", text: "Advanced problem-solving and analytical skills" },
    { icon: "📊", text: "Measurable improvement in academic scores" },
  ],
  senior: [
    { icon: "📚", text: "Board exam mastery and full syllabus coverage" },
    { icon: "🔬", text: "Advanced subject understanding and applications" },
    { icon: "🧪", text: "Practical concepts for science and commerce streams" },
    { icon: "🏅", text: "Competitive exam readiness (JEE/NEET/CA Foundation)" },
    { icon: "💡", text: "Critical analytical and conceptual problem-solving" },
    { icon: "🌟", text: "Academic excellence for college admissions" },
  ],
  competitive: [
    {
      icon: "🎯",
      text: "Targeted preparation for JEE, NEET, CET, and entrance exams",
    },
    {
      icon: "📚",
      text: "Complete syllabus coverage with structured study plans",
    },
    {
      icon: "⚡",
      text: "Speed, accuracy, and exam temperament development",
    },
    {
      icon: "📝",
      text: "Regular mock tests, PYQs, and performance analysis",
    },
    {
      icon: "🧠",
      text: "Advanced problem-solving and analytical thinking skills",
    },
    {
      icon: "🏆",
      text: "Improved rank potential and competitive exam confidence",
    },
  ],
};

// ── Process steps (shared) ───────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  { num: "01", title: "Submit Requirement", desc: "Tell us your child's board, class, subjects, and preferred schedule.", color: "#2563EB", glow: "rgba(37,99,235,0.3)" },
  { num: "02", title: "Get Tutor Recommendations", desc: "We match your child with verified, experience-tested tutors within 24 hours.", color: "#16C47F", glow: "rgba(22,196,127,0.3)" },
  { num: "03", title: "Attend Free Demo", desc: "Your child attends a free demo session with the recommended tutor.", color: "#7C3AED", glow: "rgba(124,58,237,0.3)" },
  { num: "04", title: "Choose Your Tutor", desc: "Approve the tutor you are comfortable with — or we find a new match.", color: "#F59E0B", glow: "rgba(245,158,11,0.3)" },
  { num: "05", title: "Start Learning", desc: "Regular sessions begin with a personalised study plan and progress tracking.", color: "#16C47F", glow: "rgba(22,196,127,0.3)" },
  { num: "06", title: "Track Progress", desc: "Access real-time reports, attendance logs, and tutor feedback on your dashboard.", color: "#2563EB", glow: "rgba(37,99,235,0.3)" },
];

// ── Why UberTutor (shared) ───────────────────────────────────────────────────
export const WHY_FEATURES = [
  { icon: "✅", title: "Verified Tutors", desc: "Every tutor passes background checks, document verification, and expert interviews.", grad: "from-[#16C47F] to-[#2563EB]" },
  { icon: "🎯", title: "Personalised Learning", desc: "Custom study plans tailored to your child's pace, goals, and learning style.", grad: "from-[#2563EB] to-[#7C3AED]" },
  { icon: "🏠", title: "Home & Online Classes", desc: "Flexible learning modes — at your home or via live video sessions.", grad: "from-[#7C3AED] to-[#2563EB]" },
  { icon: "📊", title: "Progress Tracking", desc: "Real-time dashboards show homework, attendance, and academic improvement.", grad: "from-[#F59E0B] to-[#EF4444]" },
  { icon: "⏰", title: "Flexible Timings", desc: "Morning, evening, or weekend sessions — fully around your schedule.", grad: "from-[#16C47F] to-[#7C3AED]" },
  { icon: "🎁", title: "Free Demo Session", desc: "Try before you commit — every student gets a free first session.", grad: "from-[#2563EB] to-[#16C47F]" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  URL HELPERS
//  Route pattern:  /:board/:category/:className
//  e.g.            /cbse/primary/class-1
//                  /cbse/secondary/class-9
//                  /icse/secondary/class-10
//                  /cbse/senior/class-11-science
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build the full URL path for a slug.
 * Use this anywhere you need a <Link> or navigate() call.
 *
 * slugToPath("cbse-class-9")         → "/cbse/secondary/class-9"
 * slugToPath("cbse-class-11-science")→ "/cbse/senior/class-11-science"
 */
export function slugToPath(slug: string): string {
  const entry = BOARD_CLASS_DATA[slug];
  if (!entry) return "/board-and-classes";
  const board = entry.board.toLowerCase();              // "cbse"
  const category = entry.category;                         // "primary" | "secondary" | "senior"
  // className = everything after "{board}-"
  const className = slug.replace(`${board}-`, "");         // "class-9"
  return `/${board}/${category}/${className}`;
}

/**
 * Build a slug from the three URL params React Router gives you.
 * Use this in BoardClassPage (already wired via usePageSlug hook).
 *
 * pathToSlug("cbse", "secondary", "class-9") → "cbse-class-9"
 */
export function pathToSlug(board: string, _category: string, className: string): string {
  return `${board.toLowerCase()}-${className.toLowerCase()}`;
}

/**
 * Get all valid URL paths — useful for static site generation.
 */
export function getAllPaths(): { board: string; category: string; className: string }[] {
  return Object.keys(BOARD_CLASS_DATA).map((slug) => {
    const entry = BOARD_CLASS_DATA[slug];
    const board = entry.board.toLowerCase();
    const category = entry.category;
    const className = slug.replace(`${board}-`, "");
    return { board, category, className };
  });
}