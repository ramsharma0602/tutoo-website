import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { DemoNotice } from '../tutor-profile/sections';
import {
  Search,
  SlidersHorizontal,
  X,
  UserCheck,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TutorCard from '../components/common/TutorCard';
import SearchableSelect from '../components/ui/searchable-select';
import { TUTORS } from '../data/tutors';
import type { Tutor } from '../data/tutors';
import {
  DEMO_TUTORS,
  USE_DEMO_TUTORS,
  BOARD_OPTIONS,
  CLASS_BAND_OPTIONS,
  CITY_OPTIONS,
  EXPERIENCE_OPTIONS,
} from '../data/tutorsDemo';
import { whatsappLink, WhatsAppIcon } from '../components/common/FloatingWhatsApp';
import { track } from '../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   FIND A TUTOR

   Layout follows the same visual language as the service landing pages:
   centred hero → white toolbar band → results section → closing CTA band.
   Cards, radii, borders and the violet/orange split all come from the brand
   design system, so this page reads as part of the same site.

   Every dropdown uses SearchableSelect — the same control the enquiry and
   tutor-application forms use — instead of a native <select>.

   Filtering is client-side on purpose: with a two-city tutor pool this is
   faster and simpler than server round-trips. The filter state lives in the
   URL, so searches are shareable and the browser back button works.
───────────────────────────────────────────────────────────────────────── */

const PER_PAGE = 9;
const isDemo = USE_DEMO_TUTORS && TUTORS.length === 0;
const SOURCE: Tutor[] = TUTORS.length ? TUTORS : isDemo ? DEMO_TUTORS : [];

type Mode = '' | 'home' | 'online';
type SortKey = 'recommended' | 'exp_desc' | 'exp_asc' | 'newest';

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'exp_desc', label: 'Experience: high to low' },
  { value: 'exp_asc', label: 'Experience: low to high' },
  { value: 'newest', label: 'Recently added' },
];

/** Prepends the "no filter" choice so a filter can be cleared from inside the dropdown. */
const withAny = (anyLabel: string, values: string[]) => [
  { value: '', label: anyLabel },
  ...values.map((v) => ({ value: v, label: v })),
];

export default function FindATutorPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  // ── Filter state, read from and written to the URL ──
  const q = params.get('q') ?? '';
  const board = params.get('board') ?? '';
  const classBand = params.get('class') ?? '';
  const subject = params.get('subject') ?? '';
  const mode = (params.get('mode') ?? '') as Mode;
  const city = params.get('city') ?? '';
  const experience = params.get('experience') ?? '';
  const sort = (params.get('sort') ?? 'recommended') as SortKey;

  const [visible, setVisible] = useState(PER_PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Brief skeleton pass so the grid never flashes empty
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
    setVisible(PER_PAGE);
  };

  const clearAll = () => {
    setParams(new URLSearchParams(), { replace: true });
    setVisible(PER_PAGE);
  };

  const subjects = useMemo(
    () => [...new Set(SOURCE.flatMap((t) => t.subjects))].sort(),
    []
  );

  // ── Filtering ──
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const expBand = EXPERIENCE_OPTIONS.find((e) => e.label === experience);

    const list = SOURCE.filter((t) => {
      if (needle) {
        const hay = [t.name, ...t.subjects, t.area, t.qualification]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      if (board && !(t.boards ?? []).includes(board)) return false;
      if (classBand && !(t.classBands ?? []).includes(classBand)) return false;
      if (subject && !t.subjects.includes(subject)) return false;
      if (mode && t.mode !== mode && t.mode !== 'both') return false;
      // City only applies to tutors who teach in person
      if (city && mode !== 'online' && t.city !== city) return false;
      if (expBand && (t.experienceYears < expBand.min || t.experienceYears > expBand.max))
        return false;
      return true;
    });

    switch (sort) {
      case 'exp_desc':
        return [...list].sort((a, b) => b.experienceYears - a.experienceYears);
      case 'exp_asc':
        return [...list].sort((a, b) => a.experienceYears - b.experienceYears);
      case 'newest':
        return [...list].sort((a, b) => (b.addedOn ?? '').localeCompare(a.addedOn ?? ''));
      default:
        return list;
    }
  }, [q, board, classBand, subject, mode, city, experience, sort]);

  const activeChips = [
    board && { key: 'board', label: board },
    classBand && { key: 'class', label: classBand },
    subject && { key: 'subject', label: subject },
    mode && { key: 'mode', label: mode === 'home' ? 'At home' : 'Online' },
    city && mode !== 'online' && { key: 'city', label: city },
    experience && { key: 'experience', label: experience },
  ].filter(Boolean) as { key: string; label: string }[];

  /* ── No tutors at all (real registry empty, demo off) ── */
  if (!SOURCE.length) {
    return (
      <main className="bg-[#FAFAFC] pt-36 lg:pt-40 min-h-[70vh]">
        <div className="max-w-xl mx-auto px-6 pb-20 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#F4EFFE] flex items-center justify-center mx-auto mb-5">
            <UserCheck className="w-6 h-6 text-[#6D28D9]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E1B3A] mb-4 leading-[1.15]">
            We match tutors to <span className="text-[#6D28D9]">your requirement</span>
          </h1>
          <p className="text-lg text-[#4B4763] leading-relaxed mb-8">
            Rather than asking you to search through profiles, we start from what
            your child needs — class, subjects, home or online, and your area —
            and match a verified tutor who fits.
          </p>
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-lg transition-colors"
          >
            Tell us what you need
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FAFAFC] pt-36 lg:pt-40">

      {/* ── SAMPLE-PROFILE NOTICE ─────────────────────────────────────
          tutorsDemo.ts has promised since it was written that "while
          USE_DEMO_TUTORS is true the page displays a visible notice telling
          visitors these are sample profiles". It never did. `isDemo` was
          computed and used only to pick the array, while the page rendered
          a "Verified Tutors" badge directly above twelve invented people.

          It goes ABOVE the hero, not below the grid, because a notice a
          parent reaches after browsing has already failed. */}
      {isDemo && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-8">
          <DemoNotice compact />
        </div>
      )}

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-10 lg:pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* The "Verified Tutors" badge is withheld while the listing is
              sample data — it is the single most misleading element that can
              sit above an invented person. */}
          {!isDemo && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E6E3F0] rounded-full mb-6 shadow-sm">
              <UserCheck className="w-4 h-4 text-[#6D28D9]" />
              <span className="text-sm font-medium text-[#1E1B3A]">Verified Tutors</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B3A] mb-5 leading-[1.15]">
            Find the right tutor for{' '}
            <span className="text-[#6D28D9] whitespace-nowrap">your child</span>
          </h1>

          <p className="text-lg text-[#4B4763] max-w-2xl mx-auto leading-relaxed">
            Browse tutors by class, board, subject and area across Kothrud (Pune)
            and Kolhapur — or tell us what you need and we&apos;ll match one for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7">
            {(isDemo
              ? ['Free assessment', 'No obligation']
              : ['Free assessment', 'Verified tutors', 'No obligation']
            ).map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium text-[#1E1B3A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> {p}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ──────────────────── SEARCH + FILTER BAND ──────────────────── */}
      <section className="bg-white border-y border-[#EFEDF6] py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Search + mobile filter toggle */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85] pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={q}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search by name, subject or area"
                aria-label="Search tutors"
                className="w-full h-14 rounded-2xl border border-[#E6E3F0] bg-white/90 shadow-sm pl-14 pr-4 text-base font-medium text-[#1E1B3A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 hover:border-[#7B2FF7]/30 focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10"
              />
            </div>

            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              className="lg:hidden h-14 px-5 rounded-2xl border border-[#E6E3F0] bg-white shadow-sm font-semibold text-[15px] text-[#1E1B3A] inline-flex items-center justify-center gap-2 shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#6D28D9]" />
              Filters
              {activeChips.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#7B2FF7] text-white text-xs font-bold flex items-center justify-center">
                  {activeChips.length}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 text-[#6E6A85] transition-transform duration-300 ${filtersOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Filter dropdowns — same control the enquiry forms use */}
          <div
            className={`${filtersOpen ? 'grid' : 'hidden'} lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mt-4`}
          >
            <Field label="Board" htmlFor="f-board">
              <SearchableSelect
                id="f-board"
                searchable={false}
                options={withAny('Any board', BOARD_OPTIONS)}
                value={board}
                onChange={(v) => setParam('board', v)}
                placeholder="Any board"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>

            <Field label="Class" htmlFor="f-class">
              <SearchableSelect
                id="f-class"
                searchable={false}
                options={withAny('Any class', CLASS_BAND_OPTIONS)}
                value={classBand}
                onChange={(v) => setParam('class', v)}
                placeholder="Any class"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>

            <Field label="Subject" htmlFor="f-subject">
              <SearchableSelect
                id="f-subject"
                options={withAny('Any subject', subjects)}
                value={subject}
                onChange={(v) => setParam('subject', v)}
                placeholder="Any subject"
                searchPlaceholder="Search subjects…"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>

            <Field label="Mode" htmlFor="f-mode">
              <SearchableSelect
                id="f-mode"
                searchable={false}
                options={[
                  { value: '', label: 'Any mode' },
                  { value: 'home', label: 'At home' },
                  { value: 'online', label: 'Online' },
                ]}
                value={mode}
                onChange={(v) => setParam('mode', v)}
                placeholder="Any mode"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>

            <Field label="City" htmlFor="f-city">
              <SearchableSelect
                id="f-city"
                searchable={false}
                disabled={mode === 'online'}
                options={withAny('Any city', CITY_OPTIONS)}
                value={mode === 'online' ? '' : city}
                onChange={(v) => setParam('city', v)}
                placeholder={mode === 'online' ? 'Not needed online' : 'Any city'}
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>

            <Field label="Experience" htmlFor="f-exp">
              <SearchableSelect
                id="f-exp"
                searchable={false}
                options={withAny('Any', EXPERIENCE_OPTIONS.map((e) => e.label))}
                value={experience}
                onChange={(v) => setParam('experience', v)}
                placeholder="Any"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </Field>
          </div>

          {/* Active filter chips */}
          {activeChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {activeChips.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setParam(c.key, '')}
                  className="inline-flex items-center gap-1.5 pl-3 pr-2.5 py-1.5 rounded-full bg-[#F4EFFE] border border-[#7B2FF7]/30 text-sm font-medium text-[#5B21B6] hover:bg-[#EDE4FD] transition-colors"
                >
                  {c.label}
                  <X className="w-3.5 h-3.5" aria-label={`Remove ${c.label} filter`} />
                </button>
              ))}
              <button
                type="button"
                onClick={clearAll}
                className="text-sm font-semibold text-[#6D28D9] hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────── RESULTS ───────────────────────── */}
      <section className="py-10 lg:py-14" aria-labelledby="results-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* The page went h1 → h3 at every width: the <h1> is the page
              title and the next heading is a tutor's name inside TutorCard,
              which is an h3. A screen-reader user moving by heading dropped
              two levels with nothing explaining what the list is. Visually
              hidden because the count line right below already says it on
              screen — this is for the heading outline, not the design. */}
          <h2 id="results-heading" className="sr-only">
            Tutors matching your search
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <p className="text-[15px] font-medium text-[#4B4763]" aria-live="polite">
              {loading
                ? 'Loading tutors…'
                : `${results.length} ${results.length === 1 ? 'tutor' : 'tutors'} available`}
            </p>

            <div className="w-full sm:w-64">
              <SearchableSelect
                id="f-sort"
                searchable={false}
                options={SORT_OPTIONS}
                value={sort}
                onChange={(v) => setParam('sort', v)}
                placeholder="Sort"
                className="h-12 px-4 rounded-xl text-[15px]"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : results.length ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.slice(0, visible).map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.04 }}
                    className="h-full"
                  >
                    <TutorCard tutor={t} index={i} />
                  </motion.div>
                ))}
              </div>

              {visible < results.length && (
                <div className="text-center mt-10">
                  <button
                    type="button"
                    onClick={() => {
                      setVisible((v) => v + PER_PAGE);
                      track('tutors_load_more', { shown: visible + PER_PAGE });
                    }}
                    className="px-8 py-4 rounded-xl border-[1.5px] border-[#7B2FF7] text-[#6D28D9] font-semibold hover:bg-[#F4EFFE] transition-colors"
                  >
                    Load more tutors
                  </button>
                </div>
              )}
            </>
          ) : (
            /* ── No results ── */
            <div className="bg-white rounded-2xl border border-[#E6E3F0] shadow-[0_1px_2px_rgba(30,27,58,0.06)] p-8 lg:p-12 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFFE] flex items-center justify-center mx-auto mb-5">
                <Search className="w-6 h-6 text-[#6D28D9]" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1E1B3A] mb-3">
                We couldn&apos;t find a matching tutor
              </h2>
              <p className="text-[#4B4763] leading-relaxed mb-7">
                Try another subject, class or area — or switch to online classes,
                which are available anywhere in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={clearAll}
                  className="px-6 py-3.5 rounded-xl border-[1.5px] border-[#7B2FF7] text-[#6D28D9] font-semibold hover:bg-[#F4EFFE] transition-colors"
                >
                  Clear filters
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/book-free-assessment')}
                  className="px-6 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold transition-colors"
                >
                  Tell us what you need
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────── CLOSING CTA — never a dead end ───────────────── */}
      <section className="bg-white border-t border-[#EFEDF6] py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1E1B3A] mb-4">
            Not sure which tutor is right?
          </h2>
          <p className="text-lg text-[#4B4763] leading-relaxed mb-8">
            Tell us your child&apos;s class, subjects and area. We assess for free
            and match a verified tutor — usually within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => {
                track('book_cta_click', { placement: 'find_a_tutor' });
                navigate('/book-free-assessment');
              }}
              className="px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-lg transition-colors"
            >
              Find My Tutor
            </button>
            <a
              href={whatsappLink("Hi Tutoo, I'm looking for a tutor. Class: __, Subject: __, Area: __.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { placement: 'find_a_tutor' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-[1.5px] border-[#E6E3F0] font-semibold text-[#1E1B3A] hover:border-[#25D366] transition-colors text-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Small building blocks ── */

function Field({
  label, htmlFor, children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E6E3F0] animate-pulse">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-[#EFEDF6] flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#EFEDF6] rounded w-2/3" />
          <div className="h-3 bg-[#EFEDF6] rounded w-1/2" />
          <div className="h-3 bg-[#EFEDF6] rounded w-1/3" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-20 bg-[#EFEDF6] rounded-full" />
        <div className="h-6 w-16 bg-[#EFEDF6] rounded-full" />
      </div>
      <div className="h-11 bg-[#EFEDF6] rounded-xl" />
    </div>
  );
}
