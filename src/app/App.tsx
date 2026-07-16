
// src/app/App.tsx

import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LearningSolutions } from "./components/LearningSolutions";
import { ProblemVsSolution } from "./components/ProblemVsSolution";
import { HowItWorks } from "./components/HowItWorks";
import { SafetyTrust } from "./components/SafetyTrust";
import { SecurityTrust } from "./components/SecurityTrust";
import { ForTutors } from "./components/ForTutors";
import { Results } from "./components/Results";
import { SubjectsPrograms } from "./components/SubjectsPrograms";
import { MobileApp } from "./components/MobileApp";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { PageLoadModal } from "./components/PageLoadModal";
import PageProgress from "./components/common/PageProgress";
import TopInfoBar from "./components/common/TopInfoBar";
import { CityAvailabilitySection } from "./components/CityAvailabilitySection";
import RouteSEO from "../seo/RouteSEO";
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
const ForParentsPage = lazy(() => import("./components/ForParentsPage"));
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
        className="w-10 h-10 rounded-full border-[3px] border-[#E2E8F0] border-t-[#16C47F] animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">

      <PageSchema jsonLd={getLocalBusinessSchema()} />
      <PageLoadModal />

      <TopInfoBar />
      <Navbar />

      <Hero />

      <CityAvailabilitySection variant="full" />

      <LearningSolutions />

      <ProblemVsSolution />

      <HowItWorks />

      <SafetyTrust />

      <SecurityTrust />

      <ForTutors />

      <Results />

      <SubjectsPrograms />

      {/* <MobileApp /> */}

      <Testimonials />

      <FAQ />

      <FinalCTA />

      <Footer />

    </div>
  );
}

/* ───────────────────────────────────────────── SCROLL TO TOP ON ROUTE CHANGE ───────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation(); useEffect(() => { /* DISABLE BROWSER SCROLL RESTORE */
    window.history.scrollRestoration = "manual";
    /* ALWAYS START FROM TOP */
    window.scrollTo(0, 0);
  },
    [pathname]); return null;
}

export default function App() {
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

          {/* For Parents */}
          <Route path="/for-parents" element={
            <>
              <TopInfoBar />
              <Navbar />
              <ForParentsPage />
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

        </Routes>
      </Suspense>


    </>
  );
}
