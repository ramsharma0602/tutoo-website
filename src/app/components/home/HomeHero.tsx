import { motion } from 'motion/react';
import {
  MapPin,
  Home,
  Users,
  UserCheck,
  CalendarClock,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { track } from '../../../seo/analytics';
import AssetImage from '../common/AssetImage';
import type { ServiceCity } from '../../data/locations';

/* ─────────────────────────────────────────────────────────────────────────
   /home-tuition HERO

   Same construction as the homepage and /online-tuition heroes — identical
   backdrop stack, eyebrow pill, two-line H1 with the second line in orange,
   four-badge trust row, and a card sitting on the section boundary shifted
   up by half its own height. A parent moving between the two service pages
   should not notice they changed template.

   ── THE PHOTO IS A CUT-OUT, AND THE LAYOUT FOLLOWS THE ASSET ────────────
   This started out as a framed photo in a rounded panel, on the argument that
   home tuition happens in a *room* and the room is part of the product. The
   delivered hero shot is a transparent PNG — 35% of it is fully transparent,
   with a clean one-pixel feather — so that argument no longer applies: there
   is no room in the file to frame. Forcing it into a panel would have put a
   violet rectangle behind the cut-out and cropped the subjects to fill it.

   So it is floated, `object-contain`, over the decorative disc in Backdrop 4,
   with a drop shadow and a soft elliptical ground beneath. Same treatment as
   /online-tuition's hero.

   The two heroes still read differently: online bleeds full-width against the
   right edge of the viewport, this one is contained inside its grid column
   and carries a chip. But the difference is now smaller than it was, and it
   comes from layout rather than from the asset. If you ever want them further
   apart, the lever is a hero photograph *with* a background — not CSS.

   ── GEOGRAPHY IS STATED BEFORE THE FOLD ─────────────────────────────────
   The eyebrow names both cities, and the H1's sub-line repeats it. Home
   tuition covers two places; online covers the country. A parent in Nashik
   should learn that in the first two seconds and be routed to
   /online-tuition, not discover it after filling in a form. That is the
   honest thing and also the higher-converting one — a dead lead costs a
   callback and gives the parent a bad experience.

   ── NO FALLBACK IMAGE ANY MORE ──────────────────────────────────────────
   While home-hero.webp did not exist, this fell back to home-tuition.webp —
   which meant the hero and the First Class section showed the same picture.
   The real file has landed, so the fallback is gone. There is deliberately no
   replacement: a cut-out layout has nowhere sensible to put a framed
   photograph, and a hero that silently swaps in a different image is worse
   than one that shows copy alone for the half-second before it decodes.
───────────────────────────────────────────────────────────────────────── */

/* Two short words each. Three-word labels wrap to a third line in the 87px
   column this grid gives at 390px, which leaves the four badges at different
   heights. Nothing is lost — every phrase appears in full in the card below. */
const TRUST_BADGES = [
  { icon: ShieldCheck, line1: 'Verified', line2: 'Tutors' },
  { icon: Home, line1: 'At Your', line2: 'Home' },
  { icon: CalendarClock, line1: 'Your', line2: 'Timings' },
  { icon: BadgeCheck, line1: 'Free First', line2: 'Assessment' },
];

/* Six items, all real product behaviour. Do not add a claim here Tutoo cannot
   stand behind — this card is directly under the H1 and is read as a promise. */
const WHAT_YOU_GET = [
  { icon: Home, label: 'Tutor Comes to You', color: '#EA580C' },
  { icon: Users, label: 'One-to-One', color: '#7B2FF7' },
  { icon: UserCheck, label: 'You Pick the Tutor', color: '#2563EB' },
  { icon: CalendarClock, label: 'Your Timings', color: '#0D9488' },
  { icon: ShieldCheck, label: 'ID-Verified', color: '#16A34A' },
  { icon: BadgeCheck, label: 'Free First Assessment', color: '#D97706' },
];

const PHOTO_ALT =
  'A home tutor sitting beside a school student at a study table, explaining a problem while the student writes in an open notebook';

interface Props {
  /** Undefined on the umbrella /home-tuition page; set on a city page, which
   *  narrows the eyebrow, the headline's second line, the coverage strip and
   *  every CTA to that one city. */
  city?: ServiceCity;
}

export default function HomeHero({ city }: Props) {
  const navigate = useNavigate();

  const eyebrow = city
    ? `Home Tuition in ${city.label}`
    : 'Home Tuition · Kothrud (Pune) & Kolhapur';

  /* Both lines change on a city page, not just the second one. "A Tutor Who
     Comes / In Kothrud (Pune)" is not English — the verb needs its object. So
     the city variant becomes "A Home Tutor / In Kothrud (Pune)", which reads
     correctly and happens to put the exact search phrase in the H1. */
  const headlineLine1 = city ? 'A Home Tutor' : 'A Tutor Who Comes';
  const headlineLine2 = city ? `In ${city.short}.` : 'To Your Home.';

  const lead = city
    ? `One-to-one tuition at your own table in ${city.short}, for Class 1 to 12 across SSC, CBSE and ICSE — plus JEE and NEET preparation.`
    : 'One-to-one tuition at your own table, for Class 1 to 12 across SSC, CBSE and ICSE — plus JEE and NEET preparation.';

  const findHref = city
    ? `/find-a-tutor?mode=home&city=${encodeURIComponent(city.id)}`
    : '/find-a-tutor?mode=home';

  const bookHref = city
    ? `/book-free-assessment?mode=home&city=${encodeURIComponent(city.id)}&area=${encodeURIComponent(city.label)}`
    : '/book-free-assessment?mode=home';

  const placement = city ? `home_hero_${city.id.toLowerCase()}` : 'home_hero';

  const coverage = ['Class 1 to 12', 'SSC · CBSE · ICSE', city ? city.label : 'Kothrud (Pune) & Kolhapur'];

  return (
    <section className="relative z-10 bg-white" aria-labelledby="home-hero-heading">

      {/* ══════════════ BANNER ══════════════ */}
      <div className="relative overflow-hidden">

        {/* Backdrop 1 — base wash. Warmer than the online hero's: home is the
            orange side of the palette. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(103deg,#FFF3EA_0%,#FDF1FF_22%,#F8F5FF_40%,#FFFFFF_58%,#FFFFFF_100%)]"
          aria-hidden="true"
        />

        {/* Backdrop 2 — soft radial glows */}
        <div
          className="absolute -top-40 -left-32 w-[46rem] h-[46rem] rounded-full opacity-60"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(234,88,12,0.15) 0%, rgba(234,88,12,0.04) 45%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="hidden md:block absolute -bottom-52 left-[18%] w-[40rem] h-[40rem] rounded-full opacity-50"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(123,47,247,0.14) 0%, rgba(123,47,247,0.04) 45%, transparent 70%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Backdrop 3 — fine grid, faded out towards the bottom */}
        <div
          className="absolute inset-0 opacity-[0.30] bg-[linear-gradient(to_right,#1e1b3a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
          aria-hidden="true"
        />

        {/* Backdrop 4 — shapes behind the photo panel */}
        <div
          className="hidden lg:block absolute right-[4%] top-[10%] w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFE6D2_0%,#F0E3FF_58%,#F9F5FF_100%)] opacity-70"
          aria-hidden="true"
        />
        <div
          className="hidden xl:block absolute right-[1.5%] top-[5%] w-[38rem] h-[38rem] rounded-full border border-[#EA580C]/[0.12]"
          aria-hidden="true"
        />
        <div
          className="hidden lg:block absolute top-24 right-6 w-40 h-28 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(#EA580C 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* ── Copy + photo ── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* The photo column is now the larger of the two. The cut-out is 3:2,
              so its height is dictated entirely by its width — the only way to
              make it stand as tall as the copy beside it is to give it more of
              the row. minmax(0,…) on both tracks keeps the default
              `min-width:auto` from sizing a column by its content. */}
          {/* Two ratios, not one. Between lg and xl the copy column needs a
              full half of the row or "A Tutor Who Comes" breaks onto a third
              line; from xl there is room to hand the extra width to the photo,
              which is where it does the most good. minmax(0,…) on both tracks
              stops the default `min-width:auto` sizing a column by its
              content. */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-8 xl:gap-10 items-center pt-32 pb-28 lg:pt-36 lg:pb-36">

            {/* ── Copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              /* z-[1]: the photo column overlaps this one at xl, and the copy
                 must win — both visually and for hit-testing. */
              className="relative z-[1] min-w-0"
            >
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-[#E6E3F0] shadow-[0_2px_10px_rgba(30,27,58,0.05)] mb-6"
              >
                <MapPin className="w-3.5 h-3.5 text-[#6D28D9] shrink-0" />
                <span className="text-[13px] font-semibold text-[#1E1B3A]">{eyebrow}</span>
              </motion.div>

              <h1
                id="home-hero-heading"
                className="max-w-[13ch] lg:max-w-none xl:max-w-[18ch] text-[2.15rem] leading-[1.1] sm:text-[2.6rem] lg:text-[2.5rem] xl:text-[2.95rem] font-bold tracking-[-0.022em] text-[#1E1B3A]"
              >
                {headlineLine1}
                <span className="mt-1 block text-[#EA580C]">{headlineLine2}</span>
              </h1>

              <p className="mt-5 text-lg lg:text-xl leading-relaxed text-[#4B4763] max-w-lg">
                {lead}
              </p>

              <div className="mt-8 grid grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-6 max-w-sm">
                {TRUST_BADGES.map((badge, i) => (
                  <motion.div
                    key={badge.line2}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center text-center min-w-0"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white ring-1 ring-[#EFEBFA] shadow-[0_8px_20px_rgba(30,27,58,0.08)] flex items-center justify-center mb-2.5">
                      <span className="w-9 h-9 rounded-xl bg-[#F4EFFE] flex items-center justify-center">
                        <badge.icon className="w-[18px] h-[18px] text-[#6D28D9]" strokeWidth={2} />
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1E1B3A] leading-tight">
                      {badge.line1}
                      <br />
                      {badge.line2}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Two CTAs, and they mean different things. The old page had one
                  button reading "Find a Home Tutor" that opened the enquiry
                  form — a promise the click did not keep, and the classic CRO
                  leak in both directions. Browse and convert are now separate. */}
              <div className="mt-9">
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => {
                      track('find_tutor_click', { placement });
                      navigate(findHref);
                    }}
                    className="group inline-flex items-center justify-center gap-2.5 px-8 lg:px-5 xl:px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-[17px] lg:text-[15px] xl:text-[17px] whitespace-nowrap shadow-[0_12px_30px_rgba(234,88,12,0.32)] transition-colors"
                  >
                    Find a Home Tutor
                    <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => {
                      track('book_cta_click', { placement });
                      navigate(bookHref);
                    }}
                    className="inline-flex items-center justify-center px-8 lg:px-5 xl:px-8 h-14 rounded-xl bg-white ring-[1.5px] ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A] font-bold text-[17px] lg:text-[15px] xl:text-[17px] whitespace-nowrap transition-all"
                  >
                    Book a Free Assessment
                  </motion.button>
                </div>

                <p className="mt-3.5 text-sm text-[#6E6A85]">
                  Free first assessment · No obligation
                </p>
              </div>
            </motion.div>

            {/* ── Photo — a transparent cut-out, floated ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              /* pointer-events-none: nothing in this column is interactive, and
                 the cut-out's transparent left margin was otherwise swallowing
                 clicks on the right edge of "Book a Free Assessment" from
                 1280px up — a button you can see but cannot press. Same guard
                 OnlineHero puts on its photo. */
              className="relative min-w-0 pointer-events-none"
            >
              {/* Soft ground under the cut-out. A figure with no background
                  otherwise appears to hover with nothing beneath it; this
                  ellipse reads as the shadow the table would cast. */}
              <div
                className="absolute inset-x-[6%] bottom-[2%] h-10 rounded-[50%] opacity-70 blur-xl"
                aria-hidden="true"
                style={{ background: 'radial-gradient(ellipse, rgba(30,27,58,0.22) 0%, transparent 72%)' }}
              />

              {/* The cut-out is 3:2, so at the column's natural width it sat
                  ~110px shorter than the copy beside it and the right half of
                  the hero read as empty. It now bleeds past the column toward
                  the viewport edge on lg+ — the banner is overflow-hidden, so
                  this can never produce a horizontal scrollbar. */}
              <AssetImage
                src="/tutoo_assets/photos/home-hero.webp"
                srcSet="/tutoo_assets/photos/home-hero-sm.webp 700w, /tutoo_assets/photos/home-hero.webp 1200w"
                sizes="(min-width: 1280px) 900px, (min-width: 1024px) 660px, calc(100vw - 3rem)"
                width={1200}
                height={800}
                loading="eager"
                alt={PHOTO_ALT}
                /* No negative x-shift. Pulling the image left made it taller
                   but laid the desk and the books over the secondary CTA — an
                   image on top of a button is a usability bug, not a layout
                   choice. It grows to the right instead and lets the viewport
                   crop the far edge of the notebook, the way the online hero
                   already bleeds. */
                className="relative w-full lg:w-[124%] xl:w-[122%] lg:max-w-none h-auto object-contain drop-shadow-[0_26px_55px_rgba(30,27,58,0.16)]"
              />

              {/* Floating chip — the same treatment the homepage floats over its
                  section artwork. States a fact, not a statistic.
                  Anchored bottom-left over the books, which is the one corner
                  of the cut-out with nothing that matters in it — never over a
                  face, and never over the pen and notebook, which are the two
                  things this photo exists to show. */}
              <div className="absolute bottom-[16%] -left-1 sm:left-2 lg:-left-4 inline-flex items-center gap-2 rounded-full bg-white pl-3 pr-4 py-2 shadow-[0_12px_30px_rgba(30,27,58,0.16)] ring-1 ring-[#EFEDF6]">
                <span className="w-6 h-6 rounded-full bg-[#FFF1E7] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" strokeWidth={2.4} />
                </span>
                <span className="text-[13px] font-bold text-[#1E1B3A] whitespace-nowrap">
                  Tutor comes to you
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════ "WITH EVERY HOME TUTOR" ══════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-[22px] shadow-[0_18px_50px_rgba(30,27,58,0.13)] ring-1 ring-[#EFEDF6] px-5 sm:px-8 py-5"
          >
            {/* ── Up to xl: a swipeable row of pills ──
                   The divided row below needs ~1100px for six items plus the
                   label; at 1024 it pushes past the viewport. */}
            <div className="xl:hidden">
              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6E6A85] mb-3">
                With every home tutor
              </p>

              <div className="relative -mx-5">
                <ul
                  className="flex gap-2 overflow-x-auto snap-x snap-mandatory px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  aria-label="What you get with every home tutor"
                >
                  {WHAT_YOU_GET.map((c) => (
                    <li
                      key={c.label}
                      className="snap-start shrink-0 inline-flex items-center gap-2 rounded-full bg-[#F8F6FF] border border-[#EFEDF6] pl-3 pr-4 py-2"
                    >
                      <c.icon
                        className="w-[18px] h-[18px] shrink-0"
                        style={{ color: c.color }}
                        strokeWidth={2}
                      />
                      <span className="text-[13px] font-semibold text-[#1E1B3A] whitespace-nowrap">
                        {c.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* ── xl and up: divided row ── */}
            <div className="hidden xl:flex xl:items-center gap-6">
              <p className="text-sm font-bold text-[#1E1B3A] shrink-0 border-r border-[#EFEDF6] pr-6">
                With every home tutor
              </p>

              <ul className="flex-1 flex items-start justify-between">
                {WHAT_YOU_GET.map((c, i) => (
                  <li
                    key={c.label}
                    className={`group flex flex-col items-center justify-start text-center gap-1.5 px-3.5 min-h-[3.25rem] ${
                      i > 0 ? 'border-l border-[#F1EFF7]' : ''
                    }`}
                  >
                    <c.icon
                      className="w-[22px] h-[22px] transition-transform duration-200 group-hover:-translate-y-0.5"
                      style={{ color: c.color }}
                      strokeWidth={1.9}
                    />
                    <span className="text-xs font-medium text-[#4B4763] leading-tight whitespace-nowrap">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we cover, in one line. SSC leads: it is the volume board in
                Kothrud and Kolhapur, where online tuition leads with CBSE. */}
            <div className="mt-4 pt-3.5 border-t border-[#F1EFF7]">
              <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-x-4 xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-x-3 text-[13.5px] text-[#4B4763]">
                {coverage.map((point, i) => (
                  <div key={point} className="contents">
                    {i > 0 && (
                      <span
                        className="hidden xl:block w-1.5 h-1.5 rounded-full bg-[#7B2FF7]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="flex items-center gap-2 font-medium xl:gap-0 min-w-0">
                      <span
                        className="xl:hidden w-1.5 h-1.5 rounded-full bg-[#7B2FF7] shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
