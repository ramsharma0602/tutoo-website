import HomeTuitionLayout from './HomeTuitionLayout';
import { getCity } from '../data/locations';

/* /home-tuition/kolhapur — the same page as /home-tuition, narrowed to
   Kolhapur city. Marathi and English medium tutors are both available, which
   the FAQ states explicitly; it is a real differentiator here and invisible
   on /online-tuition. */

export default function KolhapurPage() {
  return <HomeTuitionLayout city={getCity('Kolhapur')} />;
}
