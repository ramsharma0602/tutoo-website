import TestimonialsGrid from '../common/TestimonialsGrid';
import { tutorTestimonials } from '../../data/testimonials';

/* Honest testimonials (UX plan §13): renders only when real, consented quotes
   exist in src/app/data/testimonials.ts. */

export function TutorsTestimonials() {
  return (
    <TestimonialsGrid
      items={tutorTestimonials}
      eyebrow="Tutor voices"
      title="What tutors say about Tutoo"
      subtitle="Real experiences from tutors teaching with Tutoo"
    />
  );
}

export default TutorsTestimonials;
