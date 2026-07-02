
// src/app/App.tsx

import { Routes, Route, useLocation } from "react-router-dom";

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
import BookAssessmentPage from "./book-free-assessment/page"
import ForParentsPage from "./components/ForParentsPage";
import ForTutorsPage from "./components/ForTutorsPage";
import { ApplyTutorSection } from "./apply-tutor/page";
import BlogsPage from "./components/Blogs";
import { BlogDetailPage } from "./blogs/BlogDetailPage";
import PageProgress from "./components/common/PageProgress";
import { useEffect } from "react";
import TopInfoBar from "./components/common/TopInfoBar";
import { BoardClassPage } from "./apply-tutor/boards-and-classes/pages/BoardClassPage";
import OurMission from "./about-program/our-mission/page";
import HowITWork from "./about-program/how-it-work/page";
import ContactUs from "./about-program/contact-us/page";
import StudyMaterialsPage from "./resources/study-material/StudyMaterialsPage";
import AboutTutoo from "./about-program/about-tutoo/page";
import CareersPage from "./careers/page";
import TeamPage from "./team/page";
import PrivacyPolicyPage from "./legal/privacy-policy/page";
import TermsOfServicePage from "./legal/terms-of-service/page";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">

      <PageLoadModal />

      <TopInfoBar />
      <Navbar />

      <Hero />

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


    </>
  );
}
