import { motion } from 'motion/react';
import { Home, Monitor, Check, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { cx, card, section, container, buttonPrimary, buttonSecondary, buttonMd } from '../common/ui';
import { track } from '../../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   HOME OR ONLINE?

   Catches two visitors: the one who landed on the wrong page, and the one
   who has not decided yet. Both are currently lost silently.

   ── WHY THIS IS A PAIR, NOT A COMPARISON TABLE ──────────────────────────
   The obvious build is a tick matrix. It is the wrong build twice over:

   1. A matrix asks the reader to score one option against the other, and the
      loser is a service Tutoo also sells. Winning this section by making
      online tuition look worse costs you the sale you would otherwise make
      to the parent in Nashik.
   2. Every "generic online tuition" claim we could put in a losing column is
      one we cannot substantiate about anyone else.

   So: two cards, equal weight, equal styling, factual differences only. The
   only asymmetry is the CTA — orange here, because this is the home page.

   The corresponding section on /online-tuition points back here. Two pages
   that hand visitors to each other read as one product; two pages that each
   pretend to be the only option read as two landing pages.
───────────────────────────────────────────────────────────────────────── */

const OPTIONS = [
  {
    id: 'home',
    icon: Home,
    eyebrow: 'You are here',
    title: 'Home tuition',
    accent: '#EA580C',
    tint: '#FFF1E7',
    points: [
      'The tutor travels to your home',
      'Face to face, at your own table',
      'Kothrud (Pune) and Kolhapur',
      'Timings arranged around your family',
    ],
  },
  {
    id: 'online',
    icon: Monitor,
    eyebrow: 'Also available',
    title: 'Online classes',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    points: [
      'Live one-to-one over video',
      'From any city in India',
      'The same verified tutors',
      'No travel for anyone',
    ],
  },
];

export default function HomeOrOnline() {
  const navigate = useNavigate();

  return (
    <section className={cx(section, 'bg-white')} aria-labelledby="home-or-online-heading">
      <div className={container}>

        <SectionHeading
          eyebrow="Home or Online"
          title="Home or online?"
          lead="Both are one-to-one, with the same tutors and the same free first assessment. The difference is who travels."
          id="home-or-online-heading"
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto items-stretch">
          {OPTIONS.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={cx(
                card,
                'relative overflow-hidden min-w-0 flex flex-col p-6 lg:p-7',
                'hover:shadow-[0_18px_44px_rgba(30,27,58,0.10)] hover:-translate-y-1 transition-all duration-300'
              )}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: o.accent }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3.5 mb-5">
                <span
                  className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0"
                  style={{ background: o.tint }}
                >
                  <o.icon
                    className="w-[22px] h-[22px]"
                    style={{ color: o.accent }}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <div className="min-w-0">
                  <p
                    className="text-[12px] font-bold uppercase tracking-[0.09em] mb-0.5"
                    style={{ color: o.accent }}
                  >
                    {o.eyebrow}
                  </p>
                  <h3 className="text-xl font-bold text-[#1E1B3A] leading-tight">{o.title}</h3>
                </div>
              </div>

              <ul className="space-y-3 mb-7">
                {o.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 min-w-0 text-[15px] leading-relaxed text-[#1E1B3A]"
                  >
                    <span
                      className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: o.tint }}
                      aria-hidden="true"
                    >
                      <Check className="w-3 h-3" style={{ color: o.accent }} strokeWidth={3} />
                    </span>
                    <span className="min-w-0">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {o.id === 'home' ? (
                  <button
                    type="button"
                    onClick={() => {
                      track('find_tutor_click', { placement: 'home_or_online' });
                      navigate('/find-a-tutor?mode=home');
                    }}
                    className={cx(buttonPrimary, buttonMd, 'w-full')}
                  >
                    Find a Home Tutor
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link to="/online-tuition" className={cx(buttonSecondary, buttonMd, 'w-full')}>
                    See online tuition
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
