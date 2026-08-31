import { useState } from 'react';
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
  type LucideIcon,
} from 'lucide-react';

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
      className={cx('py-10 lg:py-14', tinted ? sectionTinted : 'bg-white')}
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
