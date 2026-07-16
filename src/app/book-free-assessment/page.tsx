'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import {
  Brain,
  ShieldCheck,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  User,
  Phone,
  Mail,
  School,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import BookAssessmentForm from './BookAssessmentForm';
import { useRef, useState } from 'react';
import StatusModal from '../components/common/StatusModal';
import { CityAvailabilitySection } from '../components/CityAvailabilitySection';

export default function BookAssessmentPage() {

  const trustCards = [
    {
      icon: Brain,
      title: 'AI Learning Analysis',
      description:
        'Identify strengths, weak topics, learning behavior, and academic gaps through intelligent assessment systems.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Expert Tutors',
      description:
        'Matched with trusted tutors based on board, subjects, location, and learning requirements.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Progress Tracking',
      description:
        'Track attendance, homework, reports, and measurable improvement from the parent dashboard.',
    },
  ];

  const stats = [
    '12,000+ Students',
    '3,400+ Verified Tutors',
    '94% Improvement Rate',
    '98% Parent Satisfaction',
  ];

  const subjects = [
    'Mathematics',
    'Science',
    'English',
    'Physics',
    'Chemistry',
    'Biology',
    'Coding',
    'Olympiad',
    'JEE',
    'NEET',
  ];

  const [modalOpen, setModalOpen] =
    useState(false);

  const [modalType, setModalType] =
    useState<'success' | 'error'>(
      'success'
    );

  const [modalTitle, setModalTitle] =
    useState('');

  const [modalMessage, setModalMessage] =
    useState('');

  /* ARTICLE REF */
  const articleRef =
    useRef<HTMLDivElement>(null);

  /* READING PROGRESS */
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
    }
  );

  return (
    <>
    <CityAvailabilitySection variant="compact" />
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 blur-3xl rounded-full" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#16C47F]/20 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#16C47F]" />

              <span className="text-sm font-semibold text-[#16C47F]">
                Free AI-Powered Assessment
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0B1220]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Discover your child’s real{' '}

              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                learning potential.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg leading-8 text-[#64748B] max-w-2xl"
            >
              Get a personalized academic assessment, AI learning analysis,
              and expert tutor recommendations designed specifically for your
              child’s goals and learning style.
            </motion.p>

            {/* Trust Cards */}
            <div className="grid gap-5 mt-12">

              {trustCards.map((card, index) => (

                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-lg p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A]">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#64748B]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-10">

              {stats.map((stat) => (

                <div
                  key={stat}
                  className="px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-md text-sm font-semibold text-[#0F172A]"
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative
            overflow-hidden
            rounded-[40px]
            bg-white/75
            backdrop-blur-2xl
            border
            border-[#E2E8F0]
            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            p-8 lg:p-10"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#16C47F]/5 via-[#2563EB]/5 to-[#7C3AED]/5" />

            <div className="relative z-10">

              {/* Header */}
              <div>

                <p className="text-sm font-semibold text-[#16C47F]">
                  Start Your Assessment
                </p>

                <h3 className="mt-3 text-4xl font-black text-[#0F172A]">
                  Book Free Assessment
                </h3>

                <p className="mt-4 text-[#64748B] leading-7">
                  Complete the form below and our academic advisors will
                  connect with you shortly to understand your child's
                  learning goals and recommend the perfect tutor.
                </p>
              </div>

              {/* Form */}
              <BookAssessmentForm
                setModalOpen={setModalOpen}
                setModalType={setModalType}
                setModalTitle={setModalTitle}
                setModalMessage={setModalMessage}
              />

            </div>
          </motion.div>
        </div>
        {/* Background Glow */}
        <div
          className="
                absolute
                -bottom-20
                left-1/2
                -translate-x-1/2
                w-[600px]
                h-[600px]
                bg-[#7C3AED]/10
                rounded-full
                blur-3xl
                pointer-events-none
                "
        />

        {/* STATUS MODAL */}
        <StatusModal
          open={modalOpen}
          type={modalType}
          title={modalTitle}
          message={modalMessage}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section >
    </>
  );
}

