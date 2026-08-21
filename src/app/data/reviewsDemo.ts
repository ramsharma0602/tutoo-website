/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  DEMO REVIEWS — INVENTED, NOT REAL PARENTS  ⚠️
 * ─────────────────────────────────────────────────────────────────────────
 *  Every review below is written copy. The names, the areas and the star
 *  ratings are placeholders, so the Reviews section can be designed and
 *  signed off before real families have sent anything in.
 *
 *  ── READ THIS BEFORE THE SITE IS LIVE TO PARENTS ────────────────────────
 *  Published reviews are not the same as the sample tutor profiles. In India
 *  a fabricated consumer review on a business website is a legal exposure,
 *  not just a trust problem: it falls under the Consumer Protection Act's
 *  unfair-trade-practice provisions, and BIS IS 19000:2022 (Online Consumer
 *  Reviews) is the standard the CCPA points to. Reviews are the one place on
 *  this site where placeholder content should not survive to launch.
 *
 *  So: set USE_DEMO_REVIEWS to false below, and add real, consented quotes
 *  to `testimonials.ts` instead. When both are empty the Reviews section
 *  removes itself from the page — an absent section is safer than an
 *  invented one.
 *
 *  ── ALSO DELIBERATE ─────────────────────────────────────────────────────
 *  These ratings are NOT emitted as AggregateRating structured data, so no
 *  invented star average can ever reach Google's search results.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Testimonial } from './testimonials';

/** Master switch. Set to false before real parents see this page. */
export const USE_DEMO_REVIEWS = true;

export const DEMO_REVIEWS: Testimonial[] = [
  {
    name: 'Anjali M.',
    role: 'Parent of a Class 9 student',
    location: 'Kothrud, Pune',
    quote:
      'We wanted someone who could come home in the evening. Tutoo understood what we needed on the first call and the tutor started the same week.',
    rating: 5,
  },
  {
    name: 'Rahul P.',
    role: 'Parent of a Class 7 student',
    location: 'Kolhapur',
    quote:
      'My son was quiet in a big class and would not ask anything. One to one at home he actually asks questions now, which is what we were hoping for.',
    rating: 5,
  },
  {
    name: 'Sneha K.',
    role: 'Parent of a Class 12 student',
    location: 'Kothrud, Pune',
    quote:
      'The fee was told to us clearly before we agreed to anything. No surprises later, which I appreciated.',
    rating: 4,
  },
  {
    name: 'Imran S.',
    role: 'Parent of a Class 10 student',
    location: 'Online, from Nashik',
    quote:
      'There is no good tuition near us, so online was the only option. The classes are live and my daughter can ask doubts as they come up.',
    rating: 5,
  },
  {
    name: 'Meera J.',
    role: 'Parent of a Class 5 student',
    location: 'Kolhapur',
    quote:
      'I get to see when the class starts and ends. For a young child at home, knowing that matters to me more than anything else.',
    rating: 5,
  },
  {
    name: 'Vikram D.',
    role: 'Parent of a Class 11 student',
    location: 'Kothrud, Pune',
    quote:
      'The first tutor was not the right fit for Physics and they changed him without any argument. That is the part I did not expect.',
    rating: 4,
  },
];
