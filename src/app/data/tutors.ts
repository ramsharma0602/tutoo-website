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

  /* ── VERIFICATION ────────────────────────────────────────────────────
     Mirrors tut_db.tutor_profiles.verified_at. Set ONLY when an admin has
     actually completed the check — the CRM records that as a status plus a
     verified_at timestamp, backed by aadhaar_card, pan_card, address_proof
     and degree_certificates on the same row.

     A date, not a boolean, on purpose. "verified: true" is a sticker that
     nobody can date or dispute; a timestamp says when it happened and can
     be re-checked. It is also exactly what the database stores, so the API
     swap is a rename and nothing else.

     ISO date, e.g. '2026-03-14'. Absent = not verified = no badge. */
  verifiedAt?: string;

  /* ── REVIEWS ─────────────────────────────────────────────────────────
     Mirrors tut_db.reviews, which is properly modelled per tutor:
     student_id, tutor_id, rating, comment, created_at.

     Only reviews left by a student who actually studied with THIS tutor
     belong here. The site-wide testimonials in data/testimonials.ts are a
     different thing and must never be reused as a tutor's own reviews —
     they carry no tutor reference at all. */
  reviews?: TutorReview[];
}

export interface TutorReview {
  /** Display name of the student or parent who left it. First name plus an
   *  initial is enough; never a full contact identity. */
  author: string;
  /** e.g. 'Parent of a Class 9 student'. */
  role?: string;
  /** 1-5, as stored in reviews.rating. */
  rating: number;
  /** reviews.comment. */
  quote: string;
  /** reviews.created_at, ISO date. */
  date?: string;
}

/** Average and count, computed — never stored, so it cannot drift from the
 *  rows it claims to summarise. Returns null when there is nothing to
 *  average, which is what keeps the summary and the schema off the page. */
export function ratingSummary(reviews?: TutorReview[]) {
  if (!reviews?.length) return null;
  const valid = reviews.filter((r) => r.rating >= 1 && r.rating <= 5);
  if (!valid.length) return null;

  const total = valid.reduce((sum, r) => sum + r.rating, 0);
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: valid.filter((r) => r.rating === star).length,
  }));

  return {
    average: Math.round((total / valid.length) * 10) / 10,
    count: valid.length,
    counts,
  };
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
