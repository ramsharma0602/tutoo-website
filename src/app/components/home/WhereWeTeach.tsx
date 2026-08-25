import { motion } from 'motion/react';
import { MapPin, ArrowRight, Globe, Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { cx, card, section, sectionTinted, container, buttonPrimary, buttonSecondary, buttonMd } from '../common/ui';
import { SERVICE_CITIES } from '../../data/locations';
import { track } from '../../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   FIND A HOME TUTOR NEAR YOU — the section this page owns

   /online-tuition has no equivalent and cannot have one: online serves the
   whole country, home tuition serves two places. Geography is the single
   biggest practical difference between the two services, so it gets a
   section rather than a footnote.

   ── WHY THREE CARDS AND NOT A CITY → AREA → PINCODE SELECTOR ────────────
   The obvious build is a chain of dropdowns. It is the wrong build here:

     · There are two cities. CITY_OPTIONS is ['Pune', 'Kolhapur'].
     · /find-a-tutor has NO area filter — it matches `city` exactly. Only the
       free-text `q` ever touches `t.area`.
     · There is no pincode data anywhere in the project.

   So a four-step selector would be four interactions to reach a two-option
   answer, and two of those steps would need data we would have to invent.
   Three cards is one glance, and every card lands on a real result.

   ── THE AREA CHIPS ARE NOT LINKS, ON PURPOSE ────────────────────────────
   They are the real neighbourhoods from the city pages, and they are there
   because a parent recognises "Karve Nagar" faster than they recognise
   "Pune". But nothing filters on them, so they must not look tappable — a
   link that returns nothing is worse than plain text.

   ── THE THIRD CARD IS THE HONEST ONE ────────────────────────────────────
   A parent in Nashik should find out in ten seconds that we cannot send a
   tutor to their house, and be handed the thing that does work for them.
   That is better for them and better for you than a lead you have to decline.
───────────────────────────────────────────────────────────────────────── */

interface Props {
  /** On a city page, pass that city's id to mark it as the current one. */
  highlight?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
}

export default function WhereWeTeach({
  highlight,
  eyebrow = 'Where We Teach',
  title = 'Find a home tutor near you',
  lead = 'We send tutors to homes in two cities. Tell us where you are and we will match you with tutors who teach nearby.',
}: Props) {
  const navigate = useNavigate();

  return (
    <section className={cx('relative', section, sectionTinted)} aria-labelledby="where-heading">
      <div className={container}>

        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} id="where-heading" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">

          {SERVICE_CITIES.map((c, i) => {
            const current = highlight === c.id;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={cx(
                  card,
                  'relative overflow-hidden min-w-0 flex flex-col p-6 lg:p-7',
                  'hover:shadow-[0_20px_46px_rgba(30,27,58,0.12)] hover:-translate-y-1 transition-all duration-300',
                  current && 'ring-2'
                )}
                style={current ? { boxShadow: `0 0 0 2px ${c.accent}33` } : undefined}
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: c.accent }}
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3.5 mb-4">
                  <span
                    className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0"
                    style={{ background: c.tint }}
                  >
                    <MapPin
                      className="w-[22px] h-[22px]"
                      style={{ color: c.accent }}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-[#1E1B3A] leading-tight text-balance">
                      {c.label}
                    </h3>
                    {current && (
                      <p
                        className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.07em]"
                        style={{ color: c.accent }}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                        You are here
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-[#4B4763] mb-5">{c.blurb}</p>

                <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6E6A85] mb-2.5">
                  Areas we cover
                </p>

                {/* Plain chips. Not links — see the header comment. */}
                <ul className="flex flex-wrap gap-1.5 mb-3">
                  {c.areas.map((a) => (
                    <li
                      key={a}
                      className="min-w-0 rounded-full bg-[#FAFAFC] ring-1 ring-[#EFEDF6] px-3 py-1 text-[13px] font-medium text-[#4B4763]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                <p className="text-[13px] leading-relaxed text-[#6E6A85] mb-6">{c.areasNote}</p>

                {/* mt-auto: the buttons sit on the same line across all three
                    cards however many area chips each one wraps to. */}
                <div className="mt-auto flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      track('find_tutor_click', { placement: `home_city_${c.id.toLowerCase()}` });
                      navigate(`/find-a-tutor?mode=home&city=${encodeURIComponent(c.id)}`);
                    }}
                    aria-label={`Find home tutors in ${c.label}`}
                    className={cx(buttonPrimary, buttonMd, 'w-full')}
                  >
                    Find tutors here
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {!current && (
                    <Link
                      to={c.pageHref}
                      className="inline-flex items-center justify-center gap-1.5 py-2 text-[14px] font-bold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
                    >
                      Home tuition in {c.short}
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* ── The off-ramp ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="relative overflow-hidden min-w-0 flex flex-col rounded-[22px] bg-[#1E1B3A] p-6 lg:p-7 shadow-[0_14px_44px_rgba(30,27,58,0.22)] md:col-span-2 lg:col-span-1"
          >
            <div
              className="absolute -top-16 -right-10 w-56 h-56 rounded-full opacity-40"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(circle, rgba(123,47,247,0.55) 0%, transparent 68%)',
                filter: 'blur(18px)',
              }}
            />

            <div className="relative flex items-center gap-3.5 mb-4">
              <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0 bg-white/10 ring-1 ring-white/15">
                <Globe className="w-[22px] h-[22px] text-[#C4B5FD]" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-white leading-tight text-balance min-w-0">
                Somewhere else?
              </h3>
            </div>

            <p className="relative text-[15px] leading-relaxed text-white/75 mb-6">
              Home tuition is Kothrud and Kolhapur for now. If you are anywhere
              else in India, live one-to-one online classes work exactly the
              same way — the same verified tutors, the same free first
              assessment.
            </p>

            <div className="relative mt-auto">
              <Link
                to="/online-tuition"
                onClick={() => track('find_tutor_click', { placement: 'home_city_online' })}
                className={cx(buttonSecondary, buttonMd, 'w-full')}
              >
                See online tuition
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
