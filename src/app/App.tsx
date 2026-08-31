
// src/app/App.tsx

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LearningSolutions } from "./components/LearningSolutions";
import { HowItWorks } from "./components/HowItWorks";
import { WhyTutoo } from "./components/WhyTutoo";
import { SafetyTrust } from "./components/SafetyTrust";
import { ForTutors } from "./components/ForTutors";
import { SubjectsPrograms } from "./components/SubjectsPrograms";
import { ExpertTeachers } from "./components/ExpertTeachers";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import PageProgress from "./components/common/PageProgress";
import TopInfoBar from "./components/common/TopInfoBar";
import StickyMobileCTA from "./components/common/StickyMobileCTA";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import { CityAvailabilitySection } from "./components/CityAvailabilitySection";
import RouteSEO from "../seo/RouteSEO";
import { initAnalytics } from "../seo/analytics";
import PageSchema from "../seo/PageSchema";
import { getLocalBusinessSchema } from "../seo/schema";

/* ─────────────────────────────────────────────────────────────────────────
   ROUTE-LEVEL CODE SPLITTING
   Every route below the home page is loaded on demand via React.lazy, so the
   initial JS bundle only contains what's needed to render "/". This is the
   single biggest lever for reducing first-load JS and improving Lighthouse
   Performance / Core Web Vitals (LCP, TBT) on an SPA like this one.
───────────────────────────────────────────────────────────────────────── */
const BookAssessmentPage = lazy(() => import("./book-free-assessment/page"));
const HomeTuitionPage = lazy(() => import("./services-pages/HomeTuitionPage"));
const FindATutorPage = lazy(() => import("./find-a-tutor/page"));
const KothrudPage = lazy(() => import("./services-pages/KothrudPage"));
const KolhapurPage = lazy(() => import("./services-pages/KolhapurPage"));
const OnlineTuitionPage = lazy(() => import("./services-pages/OnlineTuitionPage"));
const ForTutorsPage = lazy(() => import("./components/ForTutorsPage"));
const ApplyTutorSection = lazy(() =>
  import("./apply-tutor/page").then((m) => ({ default: m.ApplyTutorSection }))
);
const BlogsPage = lazy(() => import("./components/Blogs"));
const BlogDetailPage = lazy(() =>
  import("./blogs/BlogDetailPage").then((m) => ({ default: m.BlogDetailPage }))
);
const BoardClassPage = lazy(() =>
  import("./apply-tutor/boards-and-classes/pages/BoardClassPage").then((m) => ({
    default: m.BoardClassPage,
  }))
);
const TutorProfilePage = lazy(() => import("./tutor-profile/TutorProfilePage"));
const NotFoundPage = lazy(() => import("./components/common/NotFoundPage"));
const OurMission = lazy(() => import("./about-program/our-mission/page"));
const HowITWork = lazy(() => import("./about-program/how-it-work/page"));
const ContactUs = lazy(() => import("./about-program/contact-us/page"));
const StudyMaterialsPage = lazy(() => import("./resources/study-material/StudyMaterialsPage"));

/* The parents' guide and the two pages it hubs into. /for-parents is a
   rebuild — the old component and its seven sections were deleted, not
   revived; see parents/ForParentsPage.tsx for what was in them. */
const ForParentsPage = lazy(() => import("./parents/ForParentsPage"));
const SafetyPage = lazy(() => import("./parents/SafetyPage"));
const FeesPage = lazy(() => import("./parents/FeesPage"));
const AboutTutoo = lazy(() => import("./about-program/about-tutoo/page"));
const CareersPage = lazy(() => import("./careers/page"));
const TeamPage = lazy(() => import("./team/page"));
const PrivacyPolicyPage = lazy(() => import("./legal/privacy-policy/page"));
const TermsOfServicePage = lazy(() => import("./legal/terms-of-service/page"));

/* ───────────────────────────────────────────── ROUTE LOADING FALLBACK ───────────────────────────────────────────── */
function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-[3px] border-[#E6E3F0] border-t-[#7B2FF7] animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

function HomePage() {
  return (
    /* <main>, not <div>: the homepage had no main landmark, so screen-reader
       users had no "skip to content" target and every other page on the site
       did. */
    <main className="min-h-screen bg-[#FAFAFC] overflow-x-hidden">

      <PageSchema jsonLd={getLocalBusinessSchema()} />

      <TopInfoBar />
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────────
          Homepage order follows the question a parent asks next:
            what is this → how does it work → home or online → what subjects
            → why you → is it safe → do you cover my area → who teaches my
            child → what do other parents say → questions → act
          Sections alternate white / tinted so the page has a visible rhythm.
      ───────────────────────────────────────────────────────────────────── */}
      <Hero />

      <HowItWorks />

      <LearningSolutions />

      <SubjectsPrograms />

      {/* Booklet page 9 — the six reasons, in the booklet's own words */}
      <WhyTutoo />

      <SafetyTrust />

      <CityAvailabilitySection variant="full" />

      {/* Prefers real tutors from data/tutors.ts; falls back to the sample set
          while USE_DEMO_TUTORS is true. Renders nothing once that is false and
          the real registry is still empty. */}
      <ExpertTeachers />

      {/* ⚠️ Falls back to placeholder reviews while USE_DEMO_REVIEWS is true.
          Invented reviews are a legal exposure in India — turn that switch off
          before launch. See data/reviewsDemo.ts. */}
      <Reviews />

      <FAQ />

      <FinalCTA />

      <ForTutors />

      <Footer />

    </main>
  );
}

/* ───────────────────────────────────────────── SCROLL TO TOP ON ROUTE CHANGE ───────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    /* Anchor links such as /#faq must scroll to the section, not the top.
       The target may be lazily rendered, so retry briefly before giving up. */
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const findAndScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (tries++ < 20) window.setTimeout(findAndScroll, 100);
      };
      findAndScroll();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // Loads GA4/Clarity only when IDs exist in seo.config.ts (no-op until then)
  useEffect(() => { initAnalytics(); }, []);

  return (
    <>
      {/* GLOBAL PAGE PROGRESS */}
      <PageProgress />
      {/* GLOBAL SCROLL RESET */}
      <ScrollToTop />
      {/* GLOBAL PER-ROUTE SEO (title/meta/canonical/OG/JSON-LD) */}
      <RouteSEO />
      <Suspense fallback={<RouteFallback />}>
        <Routes>



          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Local SEO city pages (UX plan §17) */}
          <Route path="/home-tuition/kothrud" element={
            <>
              <TopInfoBar />
              <Navbar />
              <KothrudPage />
              <Footer />
            </>}
          />
          <Route path="/home-tuition/kolhapur" element={
            <>
              <TopInfoBar />
              <Navbar />
              <KolhapurPage />
              <Footer />
            </>}
          />

          {/* Service landing pages (Phase 3 — UX plan §15) */}
          <Route path="/home-tuition" element={
            <>
              <TopInfoBar />
              <Navbar />
              <HomeTuitionPage />
              <Footer />
            </>}
          />
          <Route path="/online-tuition" element={
            <>
              <TopInfoBar />
              <Navbar />
              <OnlineTuitionPage />
              <Footer />
            </>}
          />

          {/* Find a Tutor — browse + filter verified tutors */}
          <Route path="/find-a-tutor" element={
            <>
              <TopInfoBar />
              <Navbar />
              <FindATutorPage />
              <Footer />
            </>}
          />
          {/* Old URL kept working — one page, one canonical URL */}
          <Route path="/tutors" element={<Navigate to="/find-a-tutor" replace />} />

          {/* Book Assessment */}
          <Route path="/book-free-assessment" element={
            <>
              <TopInfoBar />
              <Navbar />
              <BookAssessmentPage />
              <Footer />
            </>}
          />

          {/* Apply as Tutor */}
          <Route path="/apply-tutor" element={
            <>
              <TopInfoBar />
              <Navbar />
              <ApplyTutorSection />
              <Footer />
            </>
          } />

          {/* ── For Parents ──
              The old page at this URL duplicated /home-tuition and, worse,
              carried invented ratings, tutor and student counts, a fake parent
              dashboard and fabricated outcome claims. It was deleted. This is
              a new page: a hub that answers parent questions and links out,
              rather than a third page selling the same two services. */}
          <Route path="/for-parents" element={
            <>
              <TopInfoBar />
              <Navbar />
              <ForParentsPage />
              <Footer />
            </>
          } />

          <Route path="/safety" element={
            <>
              <TopInfoBar />
              <Navbar />
              <SafetyPage />
              <Footer />
            </>
          } />

          <Route path="/fees" element={
            <>
              <TopInfoBar />
              <Navbar />
              <FeesPage />
              <Footer />
            </>
          } />

          {/* For Tutors */}
          <Route path="/for-tutors" element={
            <>
              <TopInfoBar />
              <Navbar />
              <ForTutorsPage />
              <Footer />
            </>
          } />

          {/* Blogs */}
          <Route path="/blogs" element={
            <>
              <TopInfoBar />
              <Navbar />
              <BlogsPage />
              <Footer />
            </>
          } />

          {/* Blog Detail Page */}
          <Route path="/blog/:slug" element={
            <>
              <TopInfoBar />
              <Navbar />
              <BlogDetailPage />
              <Footer />
            </>
          } />


          <Route
            path="/:board/:category/:className"
            element={
              <>
                <TopInfoBar />
                <Navbar />
                <BoardClassPage />
                <Footer />
              </>
            }
          />

          <Route path="/study-material" element={
            <>
              <TopInfoBar />
              <Navbar />
              <StudyMaterialsPage />
              <Footer />
            </>
          } />

          <Route path="/our-mission" element={
            <>
              <TopInfoBar />
              <Navbar />
              <OurMission />
              <Footer />
            </>
          } />

          <Route path="/about-tutoo" element={
            <>
              <TopInfoBar />
              <Navbar />
              <AboutTutoo />
              <Footer />
            </>
          } />



          <Route path="/how-it-work" element={
            <>
              <TopInfoBar />
              <Navbar />
              <HowITWork />
              <Footer />
            </>
          } />

          <Route path="/contact-us" element={
            <>
              <TopInfoBar />
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          } />

          <Route path="/careers" element={
            <>
              <TopInfoBar />
              <Navbar />
              <CareersPage />
              <Footer />
            </>
          } />

          <Route path="/team" element={
            <>
              <TopInfoBar />
              <Navbar />
              <TeamPage />
              <Footer />
            </>
          } />

          <Route path="/privacy-policy" element={
            <>
              <TopInfoBar />
              <Navbar />
              <PrivacyPolicyPage />
              <Footer />
            </>
          } />

          <Route path="/terms-of-service" element={
            <>
              <TopInfoBar />
              <Navbar />
              <TermsOfServicePage />
              <Footer />
            </>
          } />

          {/* ── TUTOR PROFILE ─────────────────────────────────────────────
              One component for every tutor. Two segments, so it never
              collides with the greedy /:board/:category/:className route
              below, which swallows any unmatched three-segment path.

              Singular "/tutor/" on purpose: "/tutors" already exists above
              as a redirect to /find-a-tutor. */}
          <Route path="/tutor/:slug" element={
            <>
              <TopInfoBar />
              <Navbar />
              <TutorProfilePage />
              <Footer />
            </>
          } />

          {/* ── CATCH-ALL ─────────────────────────────────────────────────
              This did not exist. Any unmatched one- or two-segment URL
              rendered NOTHING — a blank white page with no navbar, no
              footer and no way back — while RouteSEO still emitted an
              indexable canonical carrying the homepage's title and
              description. Every typo'd link and every stale inbound URL
              landed there.

              Must stay last: <Routes> picks the best match, but keeping it
              here also makes the intent obvious to the next reader. */}
          <Route path="*" element={
            <>
              <TopInfoBar />
              <Navbar />
              <NotFoundPage />
              <Footer />
            </>
          } />

        </Routes>
      </Suspense>

      {/* GLOBAL CONVERSION LAYER — Phase 1: always-reachable enquiry channels */}
      <FloatingWhatsApp />
      <StickyMobileCTA />

    </>
  );
}
