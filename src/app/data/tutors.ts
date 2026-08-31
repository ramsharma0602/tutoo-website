/**
 * ─────────────────────────────────────────────────────────────────────────
 *  TUTOR REGISTRY — REAL, VERIFIED TUTORS ONLY (Phase 4 — UX plan §13/§22)
 * ─────────────────────────────────────────────────────────────────────────
 *  This array is intentionally EMPTY. While it is empty:
 *    • the homepage "Meet our tutors" showcase does not render at all
 *    • /tutors shows an honest "we match tutors to your requirement" page
 *      instead of a fake directory
 *
 *  Add a tutor ONLY when all of these are true:
 *   1. They are verified (ID + qualification documents checked, interviewed).
 *   2. They have consented in writing to a public profile.
 *   3. Every field below is accurate — especially qualification & experience.
 *
 *  Photos: put consented photos in public/tutors/ (e.g. /tutors/priya.jpg)
 *  and reference them in `photo`. Leave `photo` out to show an initials
 *  avatar — that is perfectly fine and better than a stock image.
 *
 *  Example:
 *    {
 *      id: 'priya-s',
 *      name: 'Priya S.',
 *      qualification: 'M.Sc. Mathematics',
 *      experienceYears: 6,
 *      subjects: ['Mathematics', 'Science'],
 *      classes: 'Class 6–10',
 *      mode: 'both',
 *      area: 'Kothrud, Pune',
 *      languages: ['English', 'Marathi', 'Hindi'],
 *      // photo: '/tutors/priya.jpg',
 *    },
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Tutor {
  /** URL-safe unique id, also used as the profile slug */
  id: string;
  name: string;
  qualification: string;
  experienceYears: number;
  subjects: string[];
  /** Human-readable range, e.g. "Class 6–10" or "Class 11–12 (Science)" */
  classes: string;
  mode: 'home' | 'online' | 'both';
  /** Real teaching area, e.g. "Kothrud, Pune" / "Kolhapur" / "Online" */
  area: string;
  languages?: string[];
  photo?: string;

  /* ── Optional fields used by the Find a Tutor filters ── */
  /** Boards taught, e.g. ['CBSE', 'SSC'] */
  boards?: string[];
  /** City for the location filter, e.g. 'Pune' | 'Kolhapur' */
  city?: string;
  /** Class bands this tutor covers, for the class filter */
  classBands?: string[];
  /** 2-3 plain sentences for the profile */
  about?: string;
  /** Newest-first ordering (ISO date) */
  addedOn?: string;

  /* ── Profile-page fields (/tutor/:slug) ──────────────────────────────
     Every one is OPTIONAL and every section hides itself when its field is
     missing. That is deliberate: a real tutor who has given us a degree and
     nothing else must produce a correct, complete-looking page, not a
     skeleton full of empty headings. It also means adding these needs no
     migration and breaks nothing that exists.

     What is NOT here, and should not be added: rating, reviewCount,
     reviews, studentsTaught, verified. The site has deliberately never
     carried them (see ExpertTeachers.tsx). Adding the field is what creates
     the pressure to fill it. */

  /** Degrees, newest first. */
  education?: EducationItem[];
  /** Teaching history, newest first. */
  experience?: ExperienceItem[];
  /** Topic-level strengths — finer than `subjects`. "Trigonometry", not "Maths". */
  expertise?: string[];
  /** How they teach. Pick from TEACHING_APPROACHES, never free text — a
   *  fixed vocabulary keeps this scannable and stops it becoming a bio. */
  approach?: string[];
  /** Weekly availability. Shown as-is; no booking logic behind it yet. */
  availability?: AvailabilitySlot[];
  certifications?: CertificationItem[];
  /** Localities inside `city` this tutor will travel to. Home tutors only.
   *  NEVER a house number or street — this is a service area, not an address. */
  areasCovered?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  /** Completion year. Omit if the tutor did not give one. */
  year?: string;
  detail?: string;
}

export interface ExperienceItem {
  role: string;
  /** Omit for independent private tutoring. */
  organisation?: string;
  /** e.g. "2019" */
  from: string;
  /** Omit when this is the current role — renders as "Present". */
  to?: string;
  detail?: string;
  subjects?: string[];
}

export interface AvailabilitySlot {
  /** 'Monday' … 'Sunday' */
  day: string;
  /** e.g. "4:00 PM – 8:00 PM" */
  hours: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
}

/** The fixed vocabulary for `approach`. Add to this list rather than
 *  writing a one-off string on a tutor, so the chips stay consistent
 *  across every profile. */
export const TEACHING_APPROACHES = [
  'One-to-one teaching',
  'Concept-based learning',
  'Doubt solving',
  'Regular practice sessions',
  'Exam preparation',
  'Personalised lesson plans',
  'Homework support',
  'Weekly progress updates',
] as const;

export const TUTORS: Tutor[] = [
  // ← add real, verified, consenting tutors here
];

/** Distinct subject list for the /tutors filters (derived, stays in sync). */
export function allSubjects(tutors: Tutor[]): string[] {
  return [...new Set(tutors.flatMap((t) => t.subjects))].sort();
}
