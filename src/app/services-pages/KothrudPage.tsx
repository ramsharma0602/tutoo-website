import HomeTuitionLayout from './HomeTuitionLayout';
import { getCity } from '../data/locations';

/* /home-tuition/kothrud — the same page as /home-tuition, narrowed to one
   city: the hero, the coverage lead, the tutor showcase, every CTA and the
   Service + Breadcrumb schema all take Kothrud. Kothrud is Tutoo's home base,
   so tutor availability here is strongest.

   It renders from the same components as /home-tuition rather than from a
   separate template. A parent who clicks through from that page should not
   be able to tell they changed page type. */

export default function KothrudPage() {
  return <HomeTuitionLayout city={getCity('Pune')} />;
}
