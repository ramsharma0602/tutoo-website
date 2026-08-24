import ConversionCTA from './common/ConversionCTA';

/* The homepage close. Everything visual lives in the shared ConversionCTA —
   /online-tuition renders the same component with different words. */

export function FinalCTA() {
  return (
    <ConversionCTA
      placement="home_final_cta"
      title="Ready to find the right tutor?"
      lead="Tell us your child's class, subject and area. We assess for free, shortlist verified tutors, and share their profiles with you."
      primaryLabel="Find a Tutor"
      primaryHref="/find-a-tutor"
      secondaryLabel="Book a Free Assessment"
      secondaryHref="/book-free-assessment"
      whatsappMessage="Hi Tutoo, I'm looking for a tutor. Class: __, Subject: __, Area: __."
      points={['Free first assessment', 'No obligation', 'We call back within 24 hours']}
    />
  );
}
