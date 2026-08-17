/**
 * ─────────────────────────────────────────────────────────────────────────
 *  TESTIMONIALS REGISTRY — REAL QUOTES ONLY
 * ─────────────────────────────────────────────────────────────────────────
 *  These arrays are intentionally EMPTY. While they are empty, no testimonial
 *  section renders anywhere on the site — an absent section is safer and more
 *  trustworthy than an invented one (UX plan §13).
 *
 *  To publish a testimonial, add an entry below. Rules:
 *   1. Real person, real words, written consent to publish.
 *   2. Use first name + last initial if the parent prefers ("Priya S.").
 *   3. `role` in parent language: "Parent of a Class 8 student".
 *   4. `location` should be the real area ("Kothrud, Pune" / "Kolhapur").
 *   5. Only include `rating` if the person actually gave one.
 *   6. NO outcome numbers ("+21% marks") unless you can document them.
 *
 *  Example:
 *    {
 *      name: 'Priya S.',
 *      role: 'Parent of a Class 8 student',
 *      location: 'Kothrud, Pune',
 *      quote: 'The tutor is punctual and my daughter enjoys the classes.',
 *      rating: 5,
 *    },
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating?: number; // 1–5, only if actually given
}

/** Shown on the homepage and the For Parents page. */
export const parentTestimonials: Testimonial[] = [
  // ← add real, consented parent testimonials here
];

/** Shown on the For Tutors page. */
export const tutorTestimonials: Testimonial[] = [
  // ← add real, consented tutor testimonials here
];
