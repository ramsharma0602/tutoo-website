
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
import { TutorShowcase } from "./components/TutorShowcase";
import { Testimonials } from "./components/Testimonials";
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
const OurMission = lazy(() => import("./about-program/our-mission/page"));
const HowITWork = lazy(() => import("./about-program/how-it-work/page"));
const ContactUs = lazy(() => import("./about-program/contact-us/page"));
const StudyMaterialsPage = lazy(() => import("./resources/study-material/StudyMaterialsPage"));
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
    <div className="min-h-screen bg-[#FAFAFC] overflow-x-hidden">

      <PageSchema jsonLd={getLocalBusinessSchema()} />

      <TopInfoBar />
      <Navbar />

      <Hero />

      <CityAvailabilitySection variant="full" />

      {/* Phase 2 (UX plan §7): 9-section homepage.
          ProblemVsSolution removed; SafetyTrust + SecurityTrust merged (one
          trust section); ForTutors demoted to a strip above the footer. */}
      <LearningSolutions />

      <HowItWorks />

      {/* Booklet page 9 — the six reasons, in the booklet's own words */}
      <WhyTutoo />

      <SafetyTrust />

      {/* Renders only when real verified tutors exist in data/tutors.ts */}
      <TutorShowcase />

      <SubjectsPrograms />

      <Testimonials />

      <FAQ />

      <FinalCTA />

      <ForTutors />

      <Footer />

    </div>
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

          {/* /for-parents duplicated /home-tuition for the same audience and
              cannibalised its keywords (audit P1-9). Redirect keeps old links
              and any indexed URL working. To restore the page, swap this back
              for the ForParentsPage element — the component is untouched. */}
          <Route path="/for-parents" element={<Navigate to="/home-tuition" replace />} />

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

        </Routes>
      </Suspense>

      {/* GLOBAL CONVERSION LAYER — Phase 1: always-reachable enquiry channels */}
      <FloatingWhatsApp />
      <StickyMobileCTA />

    </>
  );
}
