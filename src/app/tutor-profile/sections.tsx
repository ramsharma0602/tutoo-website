import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Home,
  Monitor,
  Laptop,
  Languages,
  CalendarClock,
  BadgeCheck,
  Sparkles,
  ChevronDown,
  AlertTriangle,
  Star,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

import { ratingSummary } from '../data/tutors';
import type {
  Tutor,
  EducationItem,
  ExperienceItem,
  AvailabilitySlot,
  CertificationItem,
} from '../data/tutors';
import { cx, card, section, sectionTinted, container } from '../components/common/ui';

/* ─────────────────────────────────────────────────────────────────────────
   TUTOR PROFILE — SECTION PARTS

   Every export here returns `null` when it has no data. That is the whole
   contract: TutorProfilePage renders all of them unconditionally, and the
   page composes itself from whatever the tutor actually has. A tutor with a
   degree and nothing else produces a short, complete page rather than a
   long one full of empty headings.

   Two components cover eight of the brief's sections, because subjects,
   classes, boards and expertise are the same thing with different data, and
   education and experience are the same timeline with different labels.
───────────────────────────────────────────────────────────────────────── */

/* ── A section shell, so every band on the page shares one rhythm ──────── */
export function Band({
  id,
  title,
  eyebrow,
  tinted,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  tinted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      /* scroll-mt-28 so a #reviews-style anchor lands the heading below the
         fixed navbar rather than behind it. Every band carries an id, so
         any of them can be linked to. */
      className={cx('py-10 lg:py-14 scroll-mt-28', tinted ? sectionTinted : 'bg-white')}
      aria-labelledby={`${id}-heading`}
    >
      <div className={container}>
        {eyebrow && (
          <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-2">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-heading`}
          className="text-[1.4rem] lg:text-[1.7rem] font-bold tracking-[-0.015em] text-[#1E1B3A] leading-tight mb-6"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

/* ── Sample-profile notice ───────────────────────────────────────────────
   The notice tutorsDemo.ts has promised since it was written and which was
   never built. Deliberately loud: it sits above the fold, uses the warning
   colour, and names the consequence rather than hedging. */
export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="note"
      className={cx(
        'flex items-start gap-3 rounded-2xl bg-[#FEF6E3] ring-1 ring-[#F5D98B] px-4 py-3.5',
        compact ? '' : 'mb-6'
      )}
    >
      <AlertTriangle
        className="w-5 h-5 text-[#A16207] shrink-0 mt-0.5"
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <p className="text-[14.5px] leading-relaxed text-[#7A4E06] min-w-0">
        <strong className="font-bold">This is a sample profile.</strong> We are
        still building our public tutor listings, so this person is an example
        of what a profile will look like — not a tutor you can book.{' '}
        <Link to="/book-free-assessment" className="font-bold underline">
          Tell us what you need
        </Link>{' '}
        and we will match you with a real, checked tutor.
      </p>
    </div>
  );
}

/* ── Quick info grid ─────────────────────────────────────────────────── */
export function QuickInfo({ tutor }: { tutor: Tutor }) {
  const modeLabel =
    tutor.mode === 'both'
      ? 'Home & online'
      : tutor.mode === 'home'
        ? 'Home tuition'
        : 'Online';

  const items: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Briefcase, label: 'Experience', value: `${tutor.experienceYears} years` },
    { icon: GraduationCap, label: 'Qualification', value: tutor.qualification },
    { icon: Laptop, label: 'Teaching mode', value: modeLabel },
    { icon: BadgeCheck, label: 'Classes', value: tutor.classes },
  ];

  if (tutor.boards?.length) {
    items.push({ icon: Sparkles, label: 'Boards', value: tutor.boards.join(', ') });
  }
  items.push({
    icon: MapPin,
    label: tutor.mode === 'online' ? 'Teaches' : 'Based in',
    value: /^online$/i.test(tutor.area) ? 'Anywhere in India' : tutor.area,
  });

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
      {items.map((it) => (
        <li key={it.label} className={cx(card, 'min-w-0 p-4')}>
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.07em] text-[#6E6A85]">
            <it.icon className="w-3.5 h-3.5 text-[#7B2FF7] shrink-0" strokeWidth={2.2} aria-hidden="true" />
            {it.label}
          </span>
          <p className="mt-1.5 text-[15px] font-bold text-[#1E1B3A] leading-snug break-words">
            {it.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ── About, with read-more only when it earns one ────────────────────── */
const ABOUT_CLAMP = 320;

export function About({ tutor }: { tutor: Tutor }) {
  const [open, setOpen] = useState(false);
  const text = tutor.about?.trim();
  if (!text) return null;

  const long = text.length > ABOUT_CLAMP;
  /* Cut on a word boundary, not mid-word — a truncation that splits a word
     reads as a rendering bug rather than a deliberate fold. */
  const shown = !long || open ? text : text.slice(0, text.lastIndexOf(' ', ABOUT_CLAMP)) + '…';

  const first = tutor.name.split(/\s+/)[0];

  return (
    <Band id="about" eyebrow="About" title={`About ${first}`}>
      <p className="max-w-3xl text-[16.5px] leading-relaxed text-[#4B4763]">{shown}</p>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#6D28D9] hover:underline"
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown
            className={cx('w-4 h-4 transition-transform', open && 'rotate-180')}
            aria-hidden="true"
          />
        </button>
      )}
    </Band>
  );
}

/* ── Chip section — subjects, classes, boards, expertise, approach ────── */
export function ChipSection({
  id,
  title,
  eyebrow,
  items,
  tinted,
  hrefFor,
  accent = 'violet',
}: {
  id: string;
  title: string;
  eyebrow?: string;
  items?: string[];
  tinted?: boolean;
  /** Makes each chip a link — used to send subjects back into the filters. */
  hrefFor?: (item: string) => string;
  accent?: 'violet' | 'orange';
}) {
  if (!items?.length) return null;

  const tone =
    accent === 'orange'
      ? 'bg-[#FFF1E7] text-[#C2410C] ring-[#FBD9C2]'
      : 'bg-[#F4EFFE] text-[#5B21B6] ring-[#E2D6FB]';

  return (
    <Band id={id} title={title} eyebrow={eyebrow} tinted={tinted}>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className="min-w-0">
            {hrefFor ? (
              <Link
                to={hrefFor(item)}
                className={cx(
                  'inline-block rounded-full ring-1 px-4 py-2 text-[14.5px] font-semibold transition-colors hover:ring-[#7B2FF7]',
                  tone
                )}
              >
                {item}
              </Link>
            ) : (
              <span
                className={cx('inline-block rounded-full ring-1 px-4 py-2 text-[14.5px] font-semibold', tone)}
              >
                {item}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* ── Timeline — one component, education and experience ──────────────── */
interface TimelineEntry {
  title: string;
  meta?: string;
  period?: string;
  detail?: string;
  tags?: string[];
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative max-w-3xl">
      {entries.map((e, i) => {
        const last = i === entries.length - 1;
        return (
          <motion.li
            key={`${e.title}-${i}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative pl-10 pb-7 last:pb-0"
          >
            {/* The spine stops at the last node instead of running past it */}
            {!last && (
              <span
                className="absolute left-[11px] top-6 bottom-0 w-px bg-[#E2DCF3]"
                aria-hidden="true"
              />
            )}
            <span
              className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white ring-2 ring-[#DDD6EE] flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="w-2 h-2 rounded-full bg-[#7B2FF7]" />
            </span>

            <h3 className="text-[16.5px] font-bold text-[#1E1B3A] leading-snug">{e.title}</h3>
            {e.meta && <p className="mt-0.5 text-[14.5px] font-semibold text-[#6D28D9]">{e.meta}</p>}
            {e.period && (
              <p className="mt-0.5 text-[13.5px] font-medium text-[#6E6A85] tabular-nums">{e.period}</p>
            )}
            {e.detail && (
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B4763]">{e.detail}</p>
            )}
            {e.tags?.length ? (
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[12.5px] font-semibold text-[#4B4763] bg-[#F7F5FC] ring-1 ring-[#EFEDF6] rounded-full px-2.5 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        );
      })}
    </ol>
  );
}

export function Education({ items }: { items?: EducationItem[] }) {
  if (!items?.length) return null;
  return (
    <Band id="education" eyebrow="Qualifications" title="Education" tinted>
      <Timeline
        entries={items.map((e) => ({
          title: e.degree,
          meta: e.institution,
          period: e.year,
          detail: e.detail,
        }))}
      />
    </Band>
  );
}

export function Experience({ items }: { items?: ExperienceItem[] }) {
  if (!items?.length) return null;
  return (
    <Band id="experience" eyebrow="Track record" title="Teaching experience">
      <Timeline
        entries={items.map((e) => ({
          title: e.role,
          meta: e.organisation,
          /* An omitted `to` means this is the current role. Printing "2022 –"
             looks like missing data; "Present" is the actual meaning. */
          period: `${e.from} – ${e.to ?? 'Present'}`,
          detail: e.detail,
          tags: e.subjects,
        }))}
      />
    </Band>
  );
}

export function Certifications({ items }: { items?: CertificationItem[] }) {
  if (!items?.length) return null;
  return (
    <Band id="certifications" eyebrow="Verified by others" title="Certifications" tinted>
      <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {items.map((c) => (
          <li key={c.name} className={cx(card, 'min-w-0 p-5 flex items-start gap-3.5')}>
            <span
              className="inline-flex w-10 h-10 rounded-xl bg-[#E9F8EF] items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <BadgeCheck className="w-5 h-5 text-[#16A34A]" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[15.5px] font-bold text-[#1E1B3A] leading-snug">{c.name}</p>
              <p className="mt-0.5 text-[14px] text-[#4B4763]">{c.issuer}</p>
              {c.year && <p className="mt-0.5 text-[13.5px] text-[#6E6A85] tabular-nums">{c.year}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* ── Teaching options ────────────────────────────────────────────────── */
export function TeachingOptions({ tutor }: { tutor: Tutor }) {
  const home = tutor.mode === 'home' || tutor.mode === 'both';
  const online = tutor.mode === 'online' || tutor.mode === 'both';

  const options = [
    home && {
      icon: Home,
      title: 'Home tuition',
      text: `Travels to students${tutor.city && !/^online$/i.test(tutor.city) ? ` in ${tutor.city}` : ''}, at the times you agree.`,
      accent: '#EA580C',
      tint: '#FFF1E7',
    },
    online && {
      icon: Monitor,
      title: 'Online classes',
      text: 'Teaches over video, so your location does not limit who can teach your child.',
      accent: '#7B2FF7',
      tint: '#F4EFFE',
    },
  ].filter(Boolean) as { icon: LucideIcon; title: string; text: string; accent: string; tint: string }[];

  return (
    <Band id="modes" eyebrow="How classes happen" title="Teaching options">
      <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {options.map((o) => (
          <li key={o.title} className={cx(card, 'min-w-0 p-5')}>
            <span
              className="inline-flex w-11 h-11 rounded-2xl items-center justify-center mb-3.5"
              style={{ background: o.tint }}
              aria-hidden="true"
            >
              <o.icon className="w-5 h-5" style={{ color: o.accent }} strokeWidth={2} />
            </span>
            <p className="text-[16px] font-bold text-[#1E1B3A]">{o.title}</p>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#4B4763]">{o.text}</p>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* ── Where they teach ────────────────────────────────────────────────── */
export function TeachingLocation({ tutor }: { tutor: Tutor }) {
  const isOnlineOnly = tutor.mode === 'online';
  if (isOnlineOnly && !tutor.areasCovered?.length) return null;

  return (
    <Band id="location" eyebrow="Where" title="Teaching location" tinted>
      <div className="max-w-3xl">
        {tutor.city && !/^online$/i.test(tutor.city) && (
          <p className="text-[16px] text-[#1E1B3A]">
            <span className="font-bold">City:</span> {tutor.city}
          </p>
        )}

        {tutor.areasCovered?.length ? (
          <>
            <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.07em] text-[#6E6A85]">
              Areas covered
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {tutor.areasCovered.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-[#EFEDF6] px-3.5 py-1.5 text-[14px] font-semibold text-[#1E1B3A]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {/* Stated, not just omitted. A parent scanning for an address should
            find the reason there isn't one, not wonder. */}
        <p className="mt-5 text-[14px] leading-relaxed text-[#6E6A85]">
          We show the city and the areas a tutor travels to. We never publish a
          tutor's home address.
        </p>
      </div>
    </Band>
  );
}

/* ── Availability ────────────────────────────────────────────────────── */
export function Availability({ items }: { items?: AvailabilitySlot[] }) {
  if (!items?.length) return null;
  return (
    <Band id="availability" eyebrow="When" title="Usual availability">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
        {items.map((a) => (
          <li
            key={a.day}
            className={cx(card, 'min-w-0 p-4 flex items-center justify-between gap-3')}
          >
            <span className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1E1B3A] min-w-0">
              <CalendarClock className="w-4 h-4 text-[#7B2FF7] shrink-0" strokeWidth={2.2} aria-hidden="true" />
              {a.day}
            </span>
            <span className="text-[14px] font-semibold text-[#4B4763] tabular-nums shrink-0">
              {a.hours}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[14px] text-[#6E6A85] max-w-2xl">
        These are the hours this tutor usually teaches. The exact timetable is
        agreed with your family once you are matched.
      </p>
    </Band>
  );
}

/* ── Languages ───────────────────────────────────────────────────────── */
export function LanguagesSpoken({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <Band id="languages" eyebrow="Communication" title="Languages" tinted>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((l) => (
          <li
            key={l}
            className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#EFEDF6] px-4 py-2 text-[14.5px] font-semibold text-[#1E1B3A]"
          >
            <Languages className="w-4 h-4 text-[#6D28D9] shrink-0" strokeWidth={2.2} aria-hidden="true" />
            {l}
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   VERIFIED BADGE
   ═══════════════════════════════════════════════════════════════════════
   Shown only when tutor.verifiedAt is set, which mirrors
   tut_db.tutor_profiles.verified_at — a timestamp an admin writes after
   checking Aadhaar, PAN, address proof and degree certificates on that same
   row. A real, dated, disputable fact, not a trust sticker.

   ── WHY IT SAYS WHAT IT CHECKS ──────────────────────────────────────────
   "Verified" alone invites a parent to assume the strongest thing it could
   mean — a police check. /safety states plainly that we do not run those,
   and /how-it-work had a "Background Checked" claim removed for
   contradicting it. So the badge carries its own definition. A badge that
   explains itself cannot be read as promising more than it does.

   ── WHY IT IS A LINK ────────────────────────────────────────────────────
   The whole plaque is the target, not just the words at the end. A parent
   who doubts a trust badge will press the badge itself; making only a
   four-word link tappable inside it fails that instinct, and on mobile it
   is a 40px target inside a 260px element.

   Absent verifiedAt → nothing renders. There is no "unverified" state.
   ══════════════════════════════════════════════════════════════════════ */

/** The seal. A filled disc with a white tick reads as a stamp; an outline
 *  icon reads as one more feature bullet. */
function VerifiedSeal({ className = '' }: { className?: string }) {
  return (
    <span
      className={cx(
        'relative inline-flex items-center justify-center rounded-full shrink-0',
        'bg-gradient-to-br from-[#22C55E] to-[#15803D]',
        'shadow-[0_2px_8px_rgba(21,128,61,0.35)]',
        className
      )}
      aria-hidden="true"
    >
      <Check className="w-1/2 h-1/2 text-white" strokeWidth={3.5} />
    </span>
  );
}

export function VerifiedBadge({
  verifiedAt,
  size = 'md',
}: {
  verifiedAt?: string;
  size?: 'sm' | 'md';
}) {
  if (!verifiedAt) return null;

  const when = (() => {
    const d = new Date(verifiedAt);
    return Number.isNaN(d.getTime())
      ? null
      : d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  })();

  /* Card variant. No date, no definition — there is no room, and the full
     answer is one tap away on the profile the card links to. */
  if (size === 'sm') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F8EF] ring-1 ring-[#A7E0BD] pl-1 pr-2.5 py-[3px] shrink-0">
        <VerifiedSeal className="w-4 h-4" />
        <span className="text-[11.5px] font-bold text-[#15803D] tracking-[0.01em]">Verified</span>
      </span>
    );
  }

  return (
    <Link
      to="/safety"
      className={cx(
        'group inline-flex items-start gap-3 rounded-2xl max-w-md',
        'bg-gradient-to-br from-[#F0FBF4] to-[#E4F6EB] ring-1 ring-[#A7E0BD]',
        'px-4 py-3 transition-all duration-200',
        'hover:ring-[#15803D]/45 hover:shadow-[0_6px_20px_rgba(21,128,61,0.14)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D]'
      )}
    >
      <VerifiedSeal className="w-7 h-7 mt-0.5" />

      <span className="min-w-0">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-[15px] font-bold text-[#14532D] leading-tight">
            Verified tutor
          </span>
          {when && (
            <span className="text-[12px] font-semibold text-[#2F6B45] tabular-nums">
              since {when}
            </span>
          )}
        </span>

        <span className="mt-1 block text-[12.5px] leading-snug text-[#2F6B45]">
          Identity and qualification documents checked, and interviewed.
        </span>

        <span className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-bold text-[#15803D]">
          See exactly what we check
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   REVIEWS
   ═══════════════════════════════════════════════════════════════════════
   Reads tutor.reviews, mirroring tut_db.reviews — keyed on tutor_id, so
   unlike the site-wide testimonials these genuinely belong to this person.

   Two things this deliberately does NOT do:

   · It never falls back to data/testimonials.ts or DEMO_REVIEWS. Those
     carry no tutor reference, so borrowing one would attribute a stranger's
     words to a named individual. No reviews → no section.

   · The distribution bars need enough rows to mean anything. Two reviews
     drawn as a bar chart read as a statistic; they are two opinions. Below
     DISTRIBUTION_MIN only the average and count show.

   ── WHY IT SCROLLS ──────────────────────────────────────────────────────
   A tutor with thirty reviews would otherwise push every section below it
   ten screens down. A horizontal track keeps the section a fixed height
   however many reviews arrive, and the partially visible next card is what
   tells a reader there are more — which a grid that simply ends does not.

   Three things a scroller has to get right and usually does not:
     · The track is focusable and labelled (tabIndex + role="region"), so a
       keyboard user can scroll it with arrow keys. A scrollable region that
       cannot be reached by keyboard is a WCAG failure, not a nicety.
     · The arrows disable at each end rather than sitting live and doing
       nothing, and they are hidden entirely when everything already fits.
     · Scrolling honours prefers-reduced-motion.

   The average is computed from the rows every render (ratingSummary), never
   stored, so the number and the reviews under it cannot drift apart.
   ══════════════════════════════════════════════════════════════════════ */
const DISTRIBUTION_MIN = 4;

function Stars({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className={cx('inline-flex items-center gap-0.5', className)} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cx('w-4 h-4', i <= Math.round(value) ? 'text-[#F59E0B]' : 'text-[#DDD6EE]')}
          fill={i <= Math.round(value) ? '#F59E0B' : 'none'}
          strokeWidth={1.8}
        />
      ))}
    </span>
  );
}

export function TutorReviews({ tutor }: { tutor: Tutor }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [scrollable, setScrollable] = useState(false);

  const summary = ratingSummary(tutor.reviews);
  const reviews = tutor.reviews ?? [];

  /* Measured from the DOM, not hardcoded — the card width changes at every
     breakpoint, so a fixed step would overshoot on mobile and undershoot on
     desktop. */
  const step = useCallback(() => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    return first.offsetWidth + gap;
  }, []);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 4);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync, reviews.length]);

  const nudge = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
  };

  if (!summary || !reviews.length) return null;

  const first = tutor.name.split(/\s+/)[0];

  return (
    <Band
      id="reviews"
      eyebrow="From students and parents"
      title={`What people say about ${first}`}
      tinted
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
        {/* ── Summary ── */}
        <div className={cx(card, 'p-5 lg:p-6 w-full lg:max-w-xl')}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-7">
            <div className="shrink-0">
              <p className="text-[2.6rem] font-bold leading-none text-[#1E1B3A] tabular-nums">
                {summary.average.toFixed(1)}
              </p>
              <Stars value={summary.average} className="mt-2" />
              <p className="mt-1.5 text-[13.5px] text-[#6E6A85]">
                {summary.count} {summary.count === 1 ? 'review' : 'reviews'}
              </p>
              <p className="sr-only">
                Average rating {summary.average} out of 5, from {summary.count}{' '}
                {summary.count === 1 ? 'review' : 'reviews'}.
              </p>
            </div>

            {summary.count >= DISTRIBUTION_MIN && (
              <ul className="flex-1 min-w-0 space-y-1.5" aria-hidden="true">
                {summary.counts.map(({ star, count }) => (
                  <li key={star} className="flex items-center gap-2.5 text-[13px]">
                    <span className="w-8 shrink-0 text-[#6E6A85] tabular-nums">{star} ★</span>
                    <span className="flex-1 h-2 rounded-full bg-[#EFEDF6] overflow-hidden">
                      <span
                        className="block h-full rounded-full bg-[#F59E0B]"
                        style={{ width: `${(count / summary.count) * 100}%` }}
                      />
                    </span>
                    <span className="w-6 shrink-0 text-right text-[#6E6A85] tabular-nums">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ── Arrows. Hidden entirely when everything already fits, because
              two permanently dead buttons are worse than none. ── */}
        {scrollable && (
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => nudge(-1)}
              disabled={atStart}
              aria-label="Previous reviews"
              className={cx(
                'w-11 h-11 rounded-full bg-white ring-1 ring-[#E6E3F0] inline-flex items-center justify-center',
                'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7]',
                atStart
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:ring-[#7B2FF7] hover:shadow-[0_6px_18px_rgba(30,27,58,0.10)]'
              )}
            >
              <ChevronLeft className="w-5 h-5 text-[#1E1B3A]" strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              disabled={atEnd}
              aria-label="More reviews"
              className={cx(
                'w-11 h-11 rounded-full bg-white ring-1 ring-[#E6E3F0] inline-flex items-center justify-center',
                'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7]',
                atEnd
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:ring-[#7B2FF7] hover:shadow-[0_6px_18px_rgba(30,27,58,0.10)]'
              )}
            >
              <ChevronRight className="w-5 h-5 text-[#1E1B3A]" strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* ── The track ────────────────────────────────────────────────
          overflow-hidden on THIS wrapper is load-bearing, not tidiness.
          The <ul> below is a proper scroll container — 350px wide with
          1559px of content, clipping correctly — and yet without this the
          document itself grew to 1300px at a 390px viewport and the whole
          page could be dragged sideways on a phone. An ancestor's
          scrollWidth still accounts for the scroller's laid-out content, so
          something above it has to clip. components/Reviews.tsx solves the
          same problem by putting overflow-hidden on its <section>; doing it
          here keeps it scoped to the one section that needs it, rather than
          clipping every Band on the page. */}
      <div className="relative overflow-hidden">
        <ul
          ref={trackRef}
          /* tabIndex + role + label: a scrollable region must be reachable
             and operable by keyboard. Without these a keyboard user simply
             cannot see past the third review. */
          tabIndex={0}
          role="region"
          aria-label={`Reviews for ${tutor.name}. Use the arrow keys to scroll.`}
          className={cx(
            'flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3',
            'scroll-smooth motion-reduce:scroll-auto',
            '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
            /* ring-inset, not ring-offset: the wrapper clips, so an offset
               ring would be cut off exactly where it matters. */
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7B2FF7] rounded-2xl'
          )}
        >
          {reviews.map((r, i) => (
            <li
              key={`${r.author}-${i}`}
              /* basis under 100% on every breakpoint so the next card always
                 peeks — that sliver is the only thing telling a reader the
                 row continues. */
              className={cx(
                card,
                'snap-start shrink-0 basis-[86%] sm:basis-[47%] lg:basis-[31.5%]',
                'min-w-0 p-5 flex flex-col'
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Stars value={r.rating} />
                <span className="sr-only">{r.rating} out of 5</span>
                {r.date && (
                  <span className="text-[12.5px] text-[#6E6A85] tabular-nums shrink-0">
                    {new Date(r.date).toLocaleDateString('en-IN', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                )}
              </div>

              <blockquote className="mt-3 mb-auto text-[15px] leading-relaxed text-[#4B4763]">
                {r.quote}
              </blockquote>

              <figcaption className="mt-4 pt-3.5 border-t border-[#F4F2FA]">
                <p className="text-[14.5px] font-bold text-[#1E1B3A]">{r.author}</p>
                {r.role && <p className="text-[13px] text-[#6E6A85]">{r.role}</p>}
              </figcaption>
            </li>
          ))}
        </ul>

        {/* Fade at the right edge, purely to reinforce that the row runs on.
            pointer-events-none so it never eats a click on the card under it,
            and it lifts at the end rather than lying about more content. */}
        {scrollable && !atEnd && (
          <div
            className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FAFAFC] to-transparent"
            aria-hidden="true"
          />
        )}
      </div>

      {scrollable && (
        <p className="mt-3 text-[13px] text-[#6E6A85] sm:hidden">Swipe to see more reviews →</p>
      )}
    </Band>
  );
}
