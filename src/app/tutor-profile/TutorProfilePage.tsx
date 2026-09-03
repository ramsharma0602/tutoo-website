import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Phone, SearchX, UserSearch } from 'lucide-react';

import PageSchema from '../../seo/PageSchema';
import { seoConfig } from '../../seo/seo.config';
import TutorCard from '../components/common/TutorCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { whatsappLink, WhatsAppIcon } from '../components/common/FloatingWhatsApp';
import {
  cx,
  card,
  panel,
  section,
  sectionTinted,
  container,
  buttonPrimary,
  buttonSecondary,
  buttonLg,
  buttonMd,
} from '../components/common/ui';
import { getTutorBySlug, getSimilarTutors, isDemoTutor, isVerified } from '../data/tutorLookup';
import { ratingSummary, type Tutor } from '../data/tutors';
import TutorProfileHero from './TutorProfileHero';
import {
  About,
  Availability,
  Certifications,
  ChipSection,
  Education,
  Experience,
  LanguagesSpoken,
  QuickInfo,
  TeachingLocation,
  TeachingOptions,
  TutorReviews,
} from './sections';

/* ─────────────────────────────────────────────────────────────────────────
   /tutor/:slug — ONE page for every tutor

   There is no RahulProfilePage. This component renders whichever tutor the
   slug resolves to, and composes itself from the fields that tutor has.

   ── DATA COMES FROM ONE FUNCTION ────────────────────────────────────────
   getTutorBySlug() in data/tutorLookup.ts. That is deliberate: when
   GET /api/tutors/slug/:slug lands, only that function changes and nothing
   in this file or in sections.tsx is touched. Today it reads the local
   array; the loading state below already exists for the day it does not.

   ── DEMO TUTORS RENDER, BUT CANNOT BE INDEXED ───────────────────────────
   The registry in tutors.ts is empty, so every tutor here is currently one
   of the twelve invented ones. They render — otherwise this page could not
   be reviewed — but three things are withheld for them:

     1. A visible sample-profile notice above the fold.
     2. robots noindex, nofollow (set in seo/RouteSEO.tsx).
     3. NO Person structured data. Telling Google that an invented person
        teaches Mathematics in Kothrud is a different order of claim from
        showing a sample card, and it is not reversible once crawled.

   All three switch off by themselves the moment a real tutor is added to
   TUTORS. No flag to remember.

   ── VERIFICATION AND REVIEWS ARE NOW REAL CONCEPTS ──────────────────────
   These were originally out of scope because nothing backed them. Reading
   the CRM database (tut_db) changed that:

     · tutor_profiles carries status, verified_at, verify_note, plus
       aadhaar_card, pan_card, address_proof and degree_certificates. So
       "verified" is a dated fact an admin records after checking documents
       — exactly what /safety already describes — not a trust sticker.

     · reviews is keyed on BOTH student_id and tutor_id, with rating and
       comment. So a review genuinely belongs to one tutor, unlike the
       site-wide Testimonial type, which has no tutor reference at all and
       must never be borrowed to fill a named person's page.

   Both are therefore built, and both are gated on data: no verifiedAt means
   no badge, no reviews means no review section. Every table in tut_db is
   currently EMPTY (0 tutors, 0 reviews), so today these render only from
   the demo entries, inside the sample-profile notice and behind noindex.

   ── STILL DELIBERATELY ABSENT ───────────────────────────────────────────
   A write-a-review form, and achievements. Reviews must come from a student
   who actually studied with the tutor, and the CRM enforces that through
   student_id — there is no authentication anywhere in this frontend, so it
   cannot establish who is writing. Achievements ("100+ students taught")
   remain the invented-statistic pattern removed from three other pages.
───────────────────────────────────────────────────────────────────────── */

/* ── Enquiry card — the page's primary action ─────────────────────────── */
function EnquiryCard({ tutor, dense = false }: { tutor: Tutor; dense?: boolean }) {
  /* The tutor travels in the query string so /book-free-assessment can
     pre-select and display them. The parent never types the name.
     `mode` is kept for backward compatibility with the existing form. */
  const enquiryHref =
    `/book-free-assessment?tutor=${encodeURIComponent(tutor.id)}` +
    `&mode=${tutor.mode === 'online' ? 'online' : 'home'}`;

  return (
    <div className={cx(panel, 'p-5 lg:p-6')}>
      <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-[#6D28D9]">
        Interested in this tutor?
      </p>
      <p className="mt-2 text-[17px] font-bold text-[#1E1B3A] leading-snug">{tutor.name}</p>
      <p className="text-[14px] text-[#6E6A85]">
        {tutor.qualification} · {tutor.experienceYears} years
      </p>

      <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#4B4763]">
        Tell us what you are looking for and our team will help you connect with
        this tutor. The first assessment is free.
      </p>

      <Link
        to={enquiryHref}
        className={cx(buttonPrimary, dense ? buttonMd : buttonLg, 'mt-5 w-full')}
      >
        Enquire about this tutor
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>

      <Link
        to="/book-free-assessment"
        className={cx(buttonSecondary, dense ? buttonMd : buttonLg, 'mt-2.5 w-full')}
      >
        Book a free assessment
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <a
          href={whatsappLink(
            `Hi Tutoo, I'd like to enquire about ${tutor.name} (${tutor.subjects.join(', ')}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1E1B3A] hover:text-[#25D366] transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          href="tel:+918446146039"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call us
        </a>
      </div>
    </div>
  );
}

/* ── Not found ───────────────────────────────────────────────────────── */
function TutorNotFound() {
  return (
    <main className="bg-white">
      <section className={cx(section, 'pt-36 lg:pt-40')} aria-labelledby="nf-heading">
        <div className={cx(container, 'text-center')}>
          <span
            className="inline-flex w-16 h-16 rounded-2xl bg-[#F4EFFE] items-center justify-center mb-6"
            aria-hidden="true"
          >
            <SearchX className="w-8 h-8 text-[#6D28D9]" strokeWidth={1.8} />
          </span>
          <h1
            id="nf-heading"
            className="text-[2rem] lg:text-[2.6rem] font-bold tracking-[-0.02em] text-[#1E1B3A] leading-tight"
          >
            Tutor not found
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-[17px] leading-relaxed text-[#4B4763]">
            The tutor profile you are looking for is unavailable. They may no
            longer be taking students, or the link may be out of date.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link to="/find-a-tutor" className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}>
              Find another tutor
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link to="/book-free-assessment" className={cx(buttonSecondary, buttonLg, 'w-full sm:w-auto')}>
              Book a free assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Loading ─────────────────────────────────────────────────────────── */
function ProfileSkeleton() {
  return (
    <main className="bg-white" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading tutor profile</span>
      <div className={cx(container, 'pt-36 lg:pt-40 pb-16')}>
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-7 lg:gap-10">
          <div className="w-40 sm:w-48 lg:w-full aspect-[4/5] rounded-[26px] bg-[#F1EFF7] animate-pulse" />
          <div className="min-w-0 space-y-4">
            <div className="h-10 w-2/3 rounded-xl bg-[#F1EFF7] animate-pulse" />
            <div className="h-5 w-1/3 rounded-lg bg-[#F1EFF7] animate-pulse" />
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 w-36 rounded-full bg-[#F1EFF7] animate-pulse" />
              ))}
            </div>
            <div className="h-24 w-full rounded-2xl bg-[#F1EFF7] animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ── The page ────────────────────────────────────────────────────────── */
export default function TutorProfilePage() {
  const { slug } = useParams<{ slug: string }>();

  /* A brief resolving pass. Reading a local array is synchronous, but this
     is the seam the API will arrive at, and building the page around an
     always-instant result is how you end up with no loading state later. */
  const [resolving, setResolving] = useState(true);
  const [tutor, setTutor] = useState<Tutor | undefined>(undefined);

  useEffect(() => {
    setResolving(true);
    const found = getTutorBySlug(slug);
    setTutor(found);
    setResolving(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (resolving) return <ProfileSkeleton />;
  if (!tutor) return <TutorNotFound />;

  const demo = isDemoTutor(tutor);

  /* ── AN UNVERIFIED REAL TUTOR HAS NO PUBLIC PAGE ────────────────────
     Hiding applicants from the listing is only half the job: without this
     their profile is still reachable by anyone with the URL, and
     crawlable the moment a link exists. Someone who has applied and not
     yet passed the document check is an applicant, and their name,
     photo, area and qualifications are not ours to publish.

     Demo tutors are exempt so the UI stays reviewable — they are already
     noindexed and carry the sample-profile notice, so nothing about an
     invented person reaches search or misleads a parent. Delete the
     `!demo &&` to close that too. */
  if (!demo && !isVerified(tutor)) return <TutorNotFound />;
  const similar = getSimilarTutors(tutor, 3);

  /* ── STRUCTURED DATA ────────────────────────────────────────────────
     Person ONLY for a real tutor. See the header note.

     AggregateRating is attached ONLY when BOTH are true: the tutor is real
     (not one of the invented twelve) AND they have actual review rows. This
     is the first AggregateRating the site has ever emitted, and the bar for
     it is deliberately high — a star average in a search result is the most
     consequential number a tutoring site can publish, and inventing one is
     the specific exposure flagged under the Consumer Protection Act and BIS
     IS 19000:2022 in data/reviewsDemo.ts.

     ratingSummary() recomputes from the rows every render, so the number
     Google is told can never drift from the reviews on the page. */
  const summary = demo ? null : ratingSummary(tutor.reviews);

  const schema = demo
    ? null
    : {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: tutor.name,
        jobTitle: `${tutor.subjects[0] ?? 'Private'} Tutor`,
        description: tutor.about,
        knowsAbout: tutor.subjects,
        knowsLanguage: tutor.languages,
        image: tutor.photo ? `${seoConfig.siteUrl}${tutor.photo}` : undefined,
        url: `${seoConfig.siteUrl}/tutor/${tutor.id}`,
        worksFor: { '@type': 'Organization', name: 'Tutoo', url: seoConfig.siteUrl },
        ...(tutor.city && !/^online$/i.test(tutor.city)
          ? { areaServed: { '@type': 'City', name: tutor.city } }
          : {}),
        ...(summary
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: summary.average,
                reviewCount: summary.count,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
      };

  return (
    <main className="bg-white">
      {schema && <PageSchema jsonLd={schema} />}

      <TutorProfileHero tutor={tutor} isDemo={demo} />

      {/* ── Body + sticky enquiry ─────────────────────────────────────
          The rail is sticky only within this grid, so it releases before
          Similar Tutors instead of floating beside a section it has
          nothing to do with. */}
      <div className={cx(container, 'py-10 lg:py-12')}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
          <div className="min-w-0">
            <h2 className="sr-only">Profile summary</h2>
            <QuickInfo tutor={tutor} />
          </div>

          <aside className="min-w-0 lg:sticky lg:top-28" aria-label="Enquire about this tutor">
            <EnquiryCard tutor={tutor} dense />
          </aside>
        </div>
      </div>

      {/* Sections. Each returns null when the tutor has no data for it, so
          the page length is a function of how complete the profile is. */}
      <About tutor={tutor} />

      <ChipSection
        id="subjects"
        eyebrow="What they teach"
        title="Subjects"
        items={tutor.subjects}
        hrefFor={(s) => `/find-a-tutor?subject=${encodeURIComponent(s)}`}
        tinted
      />

      <ChipSection
        id="classes"
        eyebrow="Who they teach"
        title="Classes"
        items={tutor.classBands}
        hrefFor={(c) => `/find-a-tutor?class=${encodeURIComponent(c)}`}
      />

      <ChipSection
        id="boards"
        eyebrow="Curriculum"
        title="Boards"
        items={tutor.boards}
        hrefFor={(b) => `/find-a-tutor?board=${encodeURIComponent(b)}`}
        accent="orange"
        tinted
      />

      <Education items={tutor.education} />
      <Experience items={tutor.experience} />

      <ChipSection
        id="expertise"
        eyebrow="Strengths"
        title="Areas of expertise"
        items={tutor.expertise}
        tinted
      />

      <ChipSection
        id="approach"
        eyebrow="How they teach"
        title="Teaching approach"
        items={tutor.approach}
        accent="orange"
      />

      <TeachingOptions tutor={tutor} />
      <TeachingLocation tutor={tutor} />
      <Availability items={tutor.availability} />
      <Certifications items={tutor.certifications} />
      <LanguagesSpoken items={tutor.languages} />

      {/* ── Reviews ───────────────────────────────────────────────────
          Last of the tutor's own sections, immediately before the page
          starts offering alternatives. The reading order that produces is
          the one a parent actually follows: here is the person, here is
          what they teach and how, here is what other families said about
          them — and only then, here are others you could consider.

          Placing it above Similar Tutors also means the last thing read
          about THIS tutor is somebody else's words rather than ours.

          Renders nothing when the tutor has no reviews. */}
      <TutorReviews tutor={tutor} />

      {/* ── Similar tutors — the same card, not a variant ── */}
      {similar.length > 0 && (
        <section className={cx(section, sectionTinted)} aria-labelledby="similar-heading">
          <div className={container}>
            <SectionHeading
              eyebrow="Also worth a look"
              title="Similar tutors"
              lead={`Other tutors who teach ${tutor.subjects[0]}${
                tutor.city && !/^online$/i.test(tutor.city) ? ` around ${tutor.city}` : ''
              }.`}
              id="similar-heading"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {similar.map((t, i) => (
                <TutorCard key={t.id} tutor={t} index={i} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/find-a-tutor" className={cx(buttonSecondary, buttonMd)}>
                View all tutors
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Closing enquiry ── */}
      <section className={cx(section, 'bg-white')} aria-labelledby="enquire-heading">
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span
              className="inline-flex w-14 h-14 rounded-2xl bg-[#FFF1E7] items-center justify-center mb-5"
              aria-hidden="true"
            >
              <MessageSquare className="w-7 h-7 text-[#EA580C]" strokeWidth={1.8} />
            </span>
            <h2
              id="enquire-heading"
              className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]"
            >
              Interested in {tutor.name.split(/\s+/)[0]}?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4B4763]">
              Tell us what you are looking for and our team will help you connect
              with this tutor. You do not need to fill in their name — we already
              know which profile you are on.
            </p>
          </motion.div>

          <div className="mt-8 max-w-md mx-auto">
            <EnquiryCard tutor={tutor} />
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA ─────────────────────────────────────────
          Desktop keeps the sticky rail; below lg the rail is gone, so the
          primary action needs to stay reachable without scrolling back. */}
      <div className="lg:hidden sticky bottom-0 z-30 border-t border-[#EFEDF6] bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-6px_24px_rgba(30,27,58,0.08)]">
        <Link
          to={`/book-free-assessment?tutor=${encodeURIComponent(tutor.id)}&mode=${
            tutor.mode === 'online' ? 'online' : 'home'
          }`}
          className={cx(buttonPrimary, 'w-full h-12 text-[15px]')}
        >
          <UserSearch className="w-4 h-4" aria-hidden="true" />
          Enquire about {tutor.name.split(/\s+/)[0]}
        </Link>
      </div>
    </main>
  );
}
