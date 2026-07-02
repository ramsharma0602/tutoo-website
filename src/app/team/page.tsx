"use client";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Users,
  Sparkles,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  GraduationCap,
  TrendingUp,
  HeadphonesIcon,
  Palette,
  Rocket,
  CheckCircle2,
  MapPin,
  Briefcase,
  Clock3,
} from "lucide-react";

const MotionLink = motion(Link);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STATS = [
  { val: "40+", label: "Team Members", icon: Users, grad: "from-[#16C47F] to-[#2563EB]" },
  { val: "6+", label: "Years Avg. Experience", icon: Briefcase, grad: "from-[#2563EB] to-[#7C3AED]" },
  { val: "5", label: "Cities", icon: MapPin, grad: "from-[#7C3AED] to-[#F59E0B]" },
  { val: "5", label: "Departments", icon: Rocket, grad: "from-[#F59E0B] to-[#16C47F]" },
];

const LEADERSHIP = [
  {
    role: "Founder & CEO",
    initials: "CEO",
    blurb: "Sets the vision and drives Tutoo's mission to make quality tutoring accessible to every student.",
    from: "#16C47F",
    to: "#2563EB",
  },
  {
    role: "Co-Founder & CTO",
    initials: "CTO",
    blurb: "Leads engineering and product, building the AI-matching technology that powers the platform.",
    from: "#2563EB",
    to: "#7C3AED",
  },
  {
    role: "Head of Academics",
    initials: "HOA",
    blurb: "Owns curriculum quality and tutor vetting, making sure every session meets a high academic bar.",
    from: "#7C3AED",
    to: "#F59E0B",
  },
  {
    role: "Head of Growth",
    initials: "HOG",
    blurb: "Drives how families and tutors discover Tutoo, and shapes the brand's voice in every city we serve.",
    from: "#F59E0B",
    to: "#16C47F",
  },
];

const DEPARTMENTS = [
  {
    icon: Code2,
    title: "Engineering",
    desc: "Builds and scales the platform — web, mobile, and the AI matching engine behind every tutor pairing.",
    from: "#16C47F",
    to: "#2563EB",
  },
  {
    icon: GraduationCap,
    title: "Academics",
    desc: "Vets tutors, curates learning material, and ensures teaching quality stays consistently high.",
    from: "#2563EB",
    to: "#7C3AED",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    desc: "Tells Tutoo's story and connects families and tutors to the platform across every channel.",
    from: "#7C3AED",
    to: "#F59E0B",
  },
  {
    icon: HeadphonesIcon,
    title: "Operations & Support",
    desc: "Keeps every session running smoothly and is the first point of contact for parents and tutors.",
    from: "#F59E0B",
    to: "#16C47F",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Shapes the product experience end to end — from onboarding flows to the Tutoo brand itself.",
    from: "#16C47F",
    to: "#7C3AED",
  },
];

const CULTURE_CHIPS = [
  { label: "Student-Centric", color: "#16C47F" },
  { label: "Move Fast", color: "#2563EB" },
  { label: "Own Your Work", color: "#7C3AED" },
  { label: "Radical Transparency", color: "#F59E0B" },
  { label: "Always Learning", color: "#16C47F" },
];

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function TeamHero() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, rgba(22,196,127,0.07) 50%, transparent 72%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-10 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13), transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[450px] h-[380px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(22,196,127,0.13), transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8 mx-auto
                     bg-white/80 backdrop-blur-xl border border-[#16C47F]/30
                     shadow-[0_0_28px_rgba(22,196,127,0.18)]"
        >
          <Users className="w-4 h-4 text-[#16C47F]" />
          <span
            className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet The Team
          </span>
          <Sparkles className="w-4 h-4 text-[#16C47F]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0F172A] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The People Behind{" "}
          <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            Tutoo
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="text-lg leading-8 text-[#64748B] max-w-2xl mx-auto mb-10"
        >
          A small, focused team of educators, engineers, and operators working together
          to make verified, AI-matched tutoring accessible to every student.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MotionLink
            to="/careers"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group h-14 px-9 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                       text-white font-bold shadow-xl shadow-[#16C47F]/22
                       flex items-center gap-2.5 transition-all duration-300"
          >
            <Briefcase className="w-5 h-5" />
            We're Hiring
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </MotionLink>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.34 }}
          className="mt-20 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 24px 80px rgba(11,18,32,0.28)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-3 py-10 px-6 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className={`text-3xl font-black bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-sm font-semibold text-white/45">{s.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LEADERSHIP
───────────────────────────────────────────── */

function LeadershipSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-black tracking-widest uppercase text-[#16C47F] mb-4">
            Leadership
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#0F172A]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Leading the{" "}
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((person, i) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-[28px] overflow-hidden bg-white
                         border border-[#E2E8F0] p-7 text-center
                         shadow-[0_4px_24px_rgba(15,23,42,0.06)]
                         hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]
                         transition-all duration-500"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg mb-5"
                style={{ background: `linear-gradient(135deg, ${person.from}, ${person.to})` }}
              >
                <span
                  className="text-white text-lg font-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {person.initials}
                </span>
              </div>

              <h3 className="text-lg font-black text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {person.role}
              </h3>
              <p className="text-sm leading-6 text-[#64748B] mb-6">{person.blurb}</p>

              {/* Social row */}
              <div className="flex items-center justify-center gap-3">
                {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                  <span
                    key={idx}
                    className="w-9 h-9 rounded-full flex items-center justify-center
                               bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B]"
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                ))}
              </div>

              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[28px]"
                style={{ background: `linear-gradient(90deg, ${person.from}, ${person.to})` }}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[#94A3B8] mt-10">
          Leadership profiles shown are placeholders — swap in real names, photos, and links anytime.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DEPARTMENTS
───────────────────────────────────────────── */

function DepartmentsSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#F8FAFC]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-black tracking-widest uppercase text-[#2563EB] mb-4">
            Our Departments
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#0F172A]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            One Team, Five Crafts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden
                           bg-white/85 backdrop-blur-xl border border-[rgba(15,23,42,0.07)]
                           shadow-lg hover:shadow-2xl transition-all duration-400 p-8"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${dept.from}0E, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6"
                    style={{ background: `linear-gradient(135deg, ${dept.from}, ${dept.to})` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {dept.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#64748B]">{dept.desc}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${dept.from}, ${dept.to})` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CULTURE + JOIN US CTA
───────────────────────────────────────────── */

function CultureAndCTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Culture chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {CULTURE_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-white border border-[rgba(15,23,42,0.08)]
                         shadow-sm text-sm font-bold text-[#0F172A]"
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: chip.color }} />
              {chip.label}
            </span>
          ))}
        </motion.div>

        {/* Dark closing banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
            boxShadow: "0 32px 100px rgba(11,18,32,0.28)",
          }}
        >
          <div className="absolute top-0 left-0 w-96 h-64 bg-[#16C47F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-60 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 py-16 px-10 lg:px-20 text-center">
            <p className="text-[#16C47F] text-xs font-black tracking-widest uppercase mb-6">
              ✦ Join Us ✦
            </p>

            <h3
              className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Want to be part of{" "}
              <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                this team?
              </span>
            </h3>

            <p className="text-white/50 text-lg leading-9 max-w-2xl mx-auto mb-10">
              We're always looking for people who care about education as much as we do.
              Check out our open roles.
            </p>

            <MotionLink
              to="/careers"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                         text-white font-bold shadow-[0_8px_32px_rgba(22,196,127,0.35)]
                         items-center gap-2 transition-all duration-300"
            >
              <Clock3 className="w-5 h-5" />
              View Open Roles
              <ArrowRight className="w-5 h-5" />
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <TeamHero />
      <LeadershipSection />
      <DepartmentsSection />
      <CultureAndCTASection />
    </div>
  );
}
