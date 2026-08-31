import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import {
  cx,
  card,
  section,
  container,
  buttonPrimary,
  buttonSecondary,
  buttonLg,
} from './ui';

/* ─────────────────────────────────────────────────────────────────────────
   404 — the page that was missing

   <Routes> had no path="*" until now. An unmatched one- or two-segment URL
   rendered null: a blank white page, no navbar, no footer, no message, no
   way back — while RouteSEO went on emitting an indexable canonical for it
   carrying the homepage's title. Every mistyped link, every stale inbound
   URL and every renamed page landed there silently.

   Unmatched three-segment paths were separately swallowed by the greedy
   /:board/:category/:className route, whose own not-found state links to
   /board-and-classes — a route that does not exist, so the recovery link
   led straight back into the blank page. That is fixed by this route
   existing at all.

   This page is a signpost, not an apology. Somebody arrived wanting
   something; the useful thing is the four places they probably meant.
───────────────────────────────────────────────────────────────────────── */

const DESTINATIONS = [
  { title: 'Find a tutor', text: 'Browse tutors by subject, class, board and area.', href: '/find-a-tutor' },
  { title: 'Home tuition', text: 'A tutor at your table in Kothrud (Pune) or Kolhapur.', href: '/home-tuition' },
  { title: 'Online tuition', text: 'One-to-one classes anywhere in India.', href: '/online-tuition' },
  { title: 'How it works', text: 'The five stages from your first message to the first class.', href: '/how-it-work' },
];

export default function NotFoundPage() {
  return (
    <main className="bg-white">
      <section className={cx(section, 'pt-36 lg:pt-40')} aria-labelledby="notfound-heading">
        <div className={container}>
          <div className="max-w-2xl mx-auto text-center">
            <span
              className="inline-flex w-16 h-16 rounded-2xl bg-[#F4EFFE] items-center justify-center mb-6"
              aria-hidden="true"
            >
              <Compass className="w-8 h-8 text-[#6D28D9]" strokeWidth={1.8} />
            </span>

            <p className="text-[13px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-3">
              Page not found
            </p>

            <h1
              id="notfound-heading"
              className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold tracking-[-0.022em] text-[#1E1B3A] leading-[1.1]"
            >
              We could not find that page
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#4B4763]">
              The link may be out of date, or the address may have a typo in it.
              Here is where most people are heading.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link to="/find-a-tutor" className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}>
                Find a tutor
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link to="/" className={cx(buttonSecondary, buttonLg, 'w-full sm:w-auto')}>
                Go to the homepage
              </Link>
            </div>
          </div>

          <ul className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {DESTINATIONS.map((d) => (
              <li key={d.href} className="min-w-0">
                <Link
                  to={d.href}
                  className={cx(
                    card,
                    'group block h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:ring-[#7B2FF7]/25'
                  )}
                >
                  <p className="inline-flex items-center gap-1.5 text-[16px] font-bold text-[#1E1B3A]">
                    {d.title}
                    <ArrowRight
                      className="w-4 h-4 text-[#6D28D9] transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#4B4763]">{d.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
