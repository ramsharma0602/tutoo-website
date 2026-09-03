import { TUTORS, type Tutor } from './tutors';
import { DEMO_TUTORS, USE_DEMO_TUTORS } from './tutorsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   TUTOR LOOKUP — the single place anything reads tutor data

   ── WHY THIS FILE EXISTS ────────────────────────────────────────────────
   Six components each contained their own copy of the same fallback ladder:

       const source = TUTORS.length ? TUTORS : USE_DEMO_TUTORS ? DEMO_TUTORS : []

   Six copies of one rule is six places to forget to change it. More
   importantly, when GET /api/tutors lands, this is the ONLY file that has
   to change — every component asks this module, not an array. Swap the
   bodies here for fetches and nothing above needs touching.

   ── THE DEMO QUESTION IS ANSWERED HERE, ONCE ────────────────────────────
   `isDemoTutor()` is what the profile page uses to decide three things: to
   show the sample-profile notice, to emit noindex, and to withhold Person
   structured data. Keeping that judgement in one function means a profile
   cannot accidentally present an invented person as a real one because a
   component forgot to check.
───────────────────────────────────────────────────────────────────────── */

/** Every tutor in the active source, verified or not. Use this only when
 *  you genuinely need the unfiltered set — resolving a slug, counting the
 *  roster. For anything a parent sees, use getVerifiedTutors(). */
export function getTutors(): Tutor[] {
  if (TUTORS.length) return TUTORS;
  return USE_DEMO_TUTORS ? DEMO_TUTORS : [];
}

/* ── VERIFICATION IS THE PUBLIC/PRIVATE LINE ─────────────────────────────
   A tutor with no verifiedAt has not been through the document check. In
   the CRM that is someone sitting in tutor_enquiries, or a tutor_profiles
   row still at status 'draft' — an APPLICANT, not a tutor. Applicants must
   never appear in a public listing: a parent seeing them would reasonably
   assume they had been checked, which is the same false implication the
   "Background Checked" claim was removed from /how-it-work for making.

   So every browsing surface reads getVerifiedTutors(), not getTutors():
   /find-a-tutor, the homepage showcase, the home and online tutor strips,
   and the Similar Tutors rail. One rule, one function, no surface that can
   forget it. */
export function isVerified(tutor: Tutor): boolean {
  return Boolean(tutor.verifiedAt);
}

/** What a parent is allowed to browse. */
export function getVerifiedTutors(): Tutor[] {
  return getTutors().filter(isVerified);
}

/** True while the list being served is the invented one. Drives the notice,
 *  the noindex and the absence of Person schema. */
export function isShowingDemoTutors(): boolean {
  return TUTORS.length === 0 && USE_DEMO_TUTORS;
}

/** True when THIS tutor is an invented one. Same answer as the above today,
 *  but correct on the day the registry holds a mix. */
export function isDemoTutor(tutor: Tutor): boolean {
  if (TUTORS.some((t) => t.id === tutor.id)) return false;
  return DEMO_TUTORS.some((t) => t.id === tutor.id);
}

/** The profile page's data source. `id` doubles as the slug — that is what
 *  tutors.ts:36 has always said it was for. Returns undefined for an unknown
 *  slug so the caller can render Not Found rather than crash. */
export function getTutorBySlug(slug: string | undefined): Tutor | undefined {
  if (!slug) return undefined;
  const wanted = slug.trim().toLowerCase();
  return getTutors().find((t) => t.id.toLowerCase() === wanted);
}

export function tutorProfilePath(tutor: Tutor): string {
  return `/tutor/${tutor.id}`;
}

/* ── Similar tutors ──────────────────────────────────────────────────────
   Scored rather than filtered. A hard filter on subject AND city AND mode
   returns nothing on a small roster, and an empty "You may also like" is
   worse than a loose one. Shared subject is weighted highest because it is
   the reason a parent is on this page at all. */
export function getSimilarTutors(tutor: Tutor, limit = 3): Tutor[] {
  const subjects = new Set(tutor.subjects);

  /* Verified only — a rail headed "Similar tutors" is a recommendation, and
     recommending an unchecked applicant is worse than recommending nobody. */
  return getVerifiedTutors()
    .filter((t) => t.id !== tutor.id)
    .map((t) => {
      let score = 0;
      score += t.subjects.filter((s) => subjects.has(s)).length * 4;
      if (t.city && t.city === tutor.city) score += 3;
      if (t.mode === tutor.mode || t.mode === 'both' || tutor.mode === 'both') score += 2;
      if (t.boards?.some((b) => tutor.boards?.includes(b))) score += 1;
      if (t.classBands?.some((c) => tutor.classBands?.includes(c))) score += 1;
      return { t, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.t.experienceYears - a.t.experienceYears)
    .slice(0, limit)
    .map((x) => x.t);
}

/** Every publicly listable profile URL, for the sitemap. Verified only —
 *  an unverified tutor has no public page to submit. */
export function allTutorSlugs(): string[] {
  return getVerifiedTutors().map((t) => t.id);
}
