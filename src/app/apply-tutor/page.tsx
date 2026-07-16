import { motion } from "motion/react";

import {
  Sparkles,
  BookOpen,
  Clock3,
  Laptop2,
  Wallet,
  GraduationCap,
  Headphones,
  Users,
  Star,
  CheckCircle2,
  Upload,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import TutorApplicationForm from "./TutorApplicationForm";
import StatusModal from "../components/common/StatusModal";
import { CityAvailabilitySection } from "../components/CityAvailabilitySection";
import { useState } from "react";

export function ApplyTutorSection() {

  const [modalOpen, setModalOpen] = useState(false);

  const [modalType, setModalType] = useState<
    'success' | 'error'
  >('success');

  const [modalTitle, setModalTitle] = useState('');

  const [modalMessage, setModalMessage] = useState('');

  const benefits = [
    {
      icon: BookOpen,
      title: "Teach Your Favorite Subjects",
      description:
        "Choose the subjects and classes you love teaching.",

      gradient:
        "from-[#16C47F] to-[#2563EB]",
    },

    {
      icon: Clock3,
      title: "Flexible Schedule",
      description:
        "Teach part-time or full-time based on your availability.",

      gradient:
        "from-[#2563EB] to-[#7C3AED]",
    },

    {
      icon: Laptop2,
      title: "Online & Home Tuition",
      description:
        "Offer classes online, at students’ homes, or both.",

      gradient:
        "from-[#7C3AED] to-[#16C47F]",
    },

    {
      icon: Wallet,
      title: "Attractive Earnings",
      description:
        "Earn based on your expertise and teaching hours.",

      gradient:
        "from-[#16C47F] to-[#2563EB]",
    },

    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Access training programs and teaching resources.",

      gradient:
        "from-[#2563EB] to-[#16C47F]",
    },

    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Our team helps you manage students and schedules.",

      gradient:
        "from-[#7C3AED] to-[#2563EB]",
    },
  ];

  return (
    <>
    <CityAvailabilitySection variant="compact" />
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,196,127,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          {/* ---------------------------------------------------------------- */}
          {/* LEFT SIDE                                                        */}
          {/* ---------------------------------------------------------------- */}

          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-[#16C47F]/20 backdrop-blur-xl shadow-sm">

              <Sparkles className="w-4 h-4 text-[#16C47F]" />

              <span className="text-sm font-semibold text-[#16C47F]">
                🚀 JOIN TUTOO AS A TUTOR
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mt-8 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0F172A]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Turn Your Knowledge Into a{" "}

              <span className="bg-gradient-to-r from-[#16C47F] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                Rewarding Teaching Career
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-2xl">
              Join Tutoo’s growing network of verified tutors and connect
              with students across India. Whether you prefer home tuition,
              online teaching, or both — we help you grow professionally and
              financially.
            </p>

            {/* ---------------------------------------------------------------- */}
            {/* BENEFITS GRID                                                     */}
            {/* ---------------------------------------------------------------- */}

            <div className="grid md:grid-cols-2 gap-6 mt-14">

              {benefits.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-[#E2E8F0]
                    p-7
                    shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                    hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
                    transition-all
                    duration-500
                    "
                  >

                    {/* Hover Glow */}
                    <div
                      className={`
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      bg-gradient-to-br
                      ${item.gradient}
                      `}
                      style={{
                        mixBlendMode: "soft-light",
                      }}
                    />

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${item.gradient} p-[1px] shadow-lg`}>

                      <div className="w-full h-full rounded-[23px] bg-white flex items-center justify-center">

                        <Icon className="w-7 h-7 text-[#0F172A]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 relative z-10">

                      <h3 className="text-xl font-black text-[#0F172A]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[#64748B] leading-7 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* STATS                                                             */}
            {/* ---------------------------------------------------------------- */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

              {[
                {
                  value: "1200+",
                  label: "Active Tutors",
                },

                {
                  value: "5000+",
                  label: "Students Learning",
                },

                {
                  value: "25+",
                  label: "Subjects Covered",
                },

                {
                  value: "4.8★",
                  label: "Tutor Satisfaction",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                  rounded-[28px]
                  bg-white/80
                  border
                  border-[#E2E8F0]
                  backdrop-blur-xl
                  p-6
                  shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                  "
                >

                  <h4 className="text-3xl font-black text-[#0F172A]">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-[#64748B]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* WHO CAN APPLY                                                     */}
            {/* ---------------------------------------------------------------- */}

            <div className="mt-14 flex flex-wrap gap-4">

              {[
                "School Teachers",
                "College Professors",
                "Subject Experts",
                "Competitive Exam Trainers",
                "Language Trainers",
                "Freelancers",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/80
                  border
                  border-[#E2E8F0]
                  shadow-sm
                  "
                >

                  <CheckCircle2 className="w-4 h-4 text-[#16C47F]" />

                  <span className="text-sm font-medium text-[#0F172A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Strip */}
            <div className="mt-12 rounded-[28px] bg-white/70 backdrop-blur-xl border border-[#E2E8F0] px-6 py-5 shadow-sm">

              <p className="text-sm font-medium text-[#64748B] flex flex-wrap items-center gap-3">

                <ShieldCheck className="w-5 h-5 text-[#16C47F]" />

                No registration fees • Transparent process • Verified student leads
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* RIGHT FORM                                                        */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-white/75
            backdrop-blur-2xl
            border
            border-[#E2E8F0]
            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            p-8 lg:p-10
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#16C47F]/5 via-[#2563EB]/5 to-[#7C3AED]/5" />

            <div className="relative z-10">

              {/* Header */}
              <div>

                <p className="text-sm font-semibold text-[#16C47F]">
                  Start Your Application
                </p>

                <h3 className="mt-3 text-4xl font-black text-[#0F172A]">
                  Apply as Tutor
                </h3>

                <p className="mt-4 text-[#64748B] leading-7">
                  Complete the form below and our recruitment team will
                  contact you shortly.
                </p>
              </div>

              <div className="relative z-10">

                <TutorApplicationForm
                  setModalOpen={setModalOpen}
                  setModalType={setModalType}
                  setModalTitle={setModalTitle}
                  setModalMessage={setModalMessage}
                />

              </div>


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