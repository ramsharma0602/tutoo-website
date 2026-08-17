import TestimonialsGrid from '../common/TestimonialsGrid';
import { parentTestimonials } from '../../data/testimonials';

/* Honest testimonials (UX plan §13): renders only when real, consented quotes
   exist in src/app/data/testimonials.ts. */

export function ParentsTestimonials() {
  return (
    <TestimonialsGrid
      items={parentTestimonials}
      eyebrow="Parent voices"
      title="What parents say about Tutoo"
      subtitle="Real experiences from families in Kothrud and Kolhapur"
    />
  );
}

export default ParentsTestimonials;
