import HomeTuitionLayout from './HomeTuitionLayout';

/* /home-tuition — the umbrella page for "home tuition" and "home tutor near
   me" search intent. City-specific copy stays thin here so it does not
   cannibalise /home-tuition/kothrud and /home-tuition/kolhapur; instead the
   Where We Teach section links straight to them.

   Everything lives in HomeTuitionLayout, which the two city pages also
   render. See that file for the section order and the reasoning. */

export default function HomeTuitionPage() {
  return <HomeTuitionLayout />;
}
