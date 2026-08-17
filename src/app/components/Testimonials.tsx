import TestimonialsGrid from './common/TestimonialsGrid';
import { parentTestimonials } from '../data/testimonials';

/* Honest testimonials (UX plan §13): renders only when real, consented quotes
   exist in src/app/data/testimonials.ts. Until then this section is absent —
   which is safer than invented people with stock photos. */

export function Testimonials() {
  return (
    <TestimonialsGrid
      items={parentTestimonials}
      eyebrow="Testimonials"
      title="What parents say about Tutoo"
      subtitle="Real experiences from families in Kothrud and Kolhapur"
    />
  );
}
