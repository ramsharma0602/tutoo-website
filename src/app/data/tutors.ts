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
}

export const TUTORS: Tutor[] = [
  // ← add real, verified, consenting tutors here
];

/** Distinct subject list for the /tutors filters (derived, stays in sync). */
export function allSubjects(tutors: Tutor[]): string[] {
  return [...new Set(tutors.flatMap((t) => t.subjects))].sort();
}
