import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Search, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TutorCard from '../components/common/TutorCard';
import { TUTORS, allSubjects, type Tutor } from '../data/tutors';
import { whatsappLink, WhatsAppIcon } from '../components/common/FloatingWhatsApp';

/* Phase 4 (UX plan §15): /tutors — browse verified tutors with simple
   client-side filters. While the registry is empty this renders an HONEST
   matching pitch instead of a fake/empty directory. */

type ModeFilter = 'all' | 'home' | 'online';

export default function TutorsPage() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState<string>('all');
  const [mode, setMode] = useState<ModeFilter>('all');

  const subjects = useMemo(() => allSubjects(TUTORS), []);

  const filtered = useMemo(
    () =>
      TUTORS.filter((t: Tutor) => {
        const okSubject = subject === 'all' || t.subjects.includes(subject);
        const okMode = mode === 'all' || t.mode === mode || t.mode === 'both';
        return okSubject && okMode;
      }),
    [subject, mode]
  );

  return (
    <main className="bg-[#FAFAFC] pt-36 lg:pt-40 min-h-[70vh]">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#6D28D9] mb-2">
            Verified Tutors
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold text-[#1E1B3A] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our tutors
          </h1>
          <p className="text-lg text-[#6E6A85] max-w-2xl mx-auto">
            Every tutor is ID-verified and interviewed before their first class
          </p>
        </motion.div>

        {TUTORS.length === 0 ? (
          /* ── Honest empty state: no fake directory ── */
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#E6E3F0] shadow-[0_1px_2px_rgba(30,27,58,0.06)] p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#F4EFFE] flex items-center justify-center mx-auto mb-5">
              <UserCheck className="w-6 h-6 text-[#6D28D9]" />
            </div>
            <h2 className="text-xl font-bold text-[#1E1B3A] mb-3">
              We match tutors to your requirement
            </h2>
            <p className="text-[15px] text-[#4B4763] leading-relaxed mb-3">
              Rather than asking you to search through profiles, we start from
              what your child needs — class, subjects, home or online, and your
              area — and match a verified tutor who fits.
            </p>
            <p className="text-sm text-[#6E6A85] mb-7">
              Public tutor profiles are coming soon as more of our tutors opt in.
            </p>
            <button
              type="button"
              onClick={() => navigate('/book-free-assessment')}
              className="w-full h-12 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold transition-colors mb-3"
            >
              Tell us your requirement
            </button>
            <a
              href={whatsappLink("Hi Tutoo, I'm looking for a tutor. Class: __, Subject: __, Area: __.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#15803D] hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4" /> or WhatsApp us
            </a>
          </div>
        ) : (
          <>
            {/* ── Filters ── */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 text-sm text-[#6E6A85]">
                <Search className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Filter tutors</span>
              </div>
              <select
                aria-label="Filter by subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-11 rounded-xl border border-[#E6E3F0] bg-white px-4 text-sm text-[#1E1B3A] outline-none focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10"
              >
                <option value="all">All subjects</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="flex gap-2" role="group" aria-label="Filter by mode">
                {([
                  ['all', 'All'],
                  ['home', 'Home tuition'],
                  ['online', 'Online'],
                ] as [ModeFilter, string][]).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={mode === value}
                    onClick={() => setMode(value)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                      mode === value
                        ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                        : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Grid ── */}
            {filtered.length ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((t) => (
                  <TutorCard key={t.id} tutor={t} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#4B4763] mb-4">
                  No tutors match these filters yet — but we can still find one for you.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/book-free-assessment')}
                  className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold transition-colors"
                >
                  Tell us your requirement
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
