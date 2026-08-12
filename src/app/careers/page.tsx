"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  Sparkles,
  ArrowRight,
  HeartPulse,
  Clock3,
  GraduationCap,
  Trophy,
  Users,
  Rocket,
  MapPin,
  Building2,
  Mail,
  CheckCircle2,
  Globe2,
  Star,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STATS = [
  { val: "40+", label: "Team Members", icon: Users, grad: "from-[#EA580C] to-[#C2410C]" },
  { val: "6", label: "Open Roles", icon: Briefcase, grad: "from-[#7B2FF7] to-[#7B2FF7]" },
  { val: "100%", label: "Remote Friendly", icon: Globe2, grad: "from-[#7B2FF7] to-[#F59E0B]" },
  { val: "4.7★", label: "Employee Rating", icon: Star, grad: "from-[#F59E0B] to-[#7B2FF7]" },
];

const PERKS = [
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    desc: "Comprehensive health coverage for you and your family, plus wellness leave when you need it.",
    from: "#7B2FF7",
    to: "#7B2FF7",
  },
  {
    icon: Clock3,
    title: "Flexible Work",
    desc: "Remote-friendly roles with flexible hours built around how you actually work best.",
    from: "#7B2FF7",
    to: "#7B2FF7",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    desc: "An annual budget for courses, books, and conferences to keep growing your craft.",
    from: "#7B2FF7",
    to: "#7B2FF7",
  },
  {
    icon: Trophy,
    title: "Performance Bonuses",
    desc: "Real ownership and rewards tied to the impact you create, not just tenure.",
    from: "#F59E0B",
    to: "#7B2FF7",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "A small, sharp team that ships fast, gives honest feedback, and celebrates wins together.",
    from: "#7B2FF7",
    to: "#7B2FF7",
  },
  {
    icon: Rocket,
    title: "Meaningful Impact",
    desc: "Work that directly shapes how thousands of students learn and grow — every release matters.",
    from: "#7B2FF7",
    to: "#7B2FF7",
  },
];

const OPEN_ROLES = [
  {
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    color: "#7B2FF7",
  },
  {
    title: "Backend Engineer (Node.js)",
    dept: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    color: "#7B2FF7",
  },
  {
    title: "Academic Content Curator",
    dept: "Academics",
    location: "Remote",
    type: "Full-time",
    color: "#7B2FF7",
  },
  {
    title: "Growth Marketing Manager",
    dept: "Marketing",
    location: "Bangalore",
    type: "Full-time",
    color: "#F59E0B",
  },
  {
    title: "Customer Success Associate",
    dept: "Operations",
    location: "Bangalore",
    type: "Full-time",
    color: "#7B2FF7",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Remote",
    type: "Contract",
    color: "#7B2FF7",
  },
];

const CULTURE_CHIPS = [
  { label: "Student-Centric", color: "#7B2FF7" },
  { label: "Move Fast", color: "#7B2FF7" },
  { label: "Own Your Work", color: "#7B2FF7" },
  { label: "Radical Transparency", color: "#F59E0B" },
  { label: "Always Learning", color: "#7B2FF7" },
];

const CAREERS_EMAIL = "info@tutoolearning.com";

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function CareersHero() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#FAFAFC]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(123,47,247,0.10) 0%, rgba(248,120,8,0.07) 50%, transparent 72%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-10 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(123,47,247,0.13), transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[450px] h-[380px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(248,120,8,0.13), transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8 mx-auto
                     bg-white/80 backdrop-blur-xl border border-[#7B2FF7]/30
                     shadow-[0_0_28px_rgba(248,120,8,0.18)]"
        >
          <Briefcase className="w-4 h-4 text-[#7B2FF7]" />
          <span
            className="text-sm font-black tracking-widest uppercase text-[#7B2FF7]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We're Hiring
          </span>
          <Sparkles className="w-4 h-4 text-[#7B2FF7]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#1E1B3A] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Build the Future of{" "}
          <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
            Education
          </span>{" "}
          With Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="text-lg leading-8 text-[#6E6A85] max-w-2xl mx-auto mb-10"
        >
          We're a small, fast-moving team on a mission to give every student access to
          verified, AI-matched tutors. If you care about doing meaningful work with real
          impact, we'd love to hear from you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#open-roles"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group h-14 px-9 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C]
                       text-white font-bold shadow-xl shadow-[#EA580C]/22
                       flex items-center gap-2.5 transition-all duration-300"
          >
            View Open Roles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href={`mailto:${CAREERS_EMAIL}`}
            whileHover={{ scale: 1.04, backgroundColor: "rgba(123,47,247,0.07)" }}
            whileTap={{ scale: 0.97 }}
            className="group h-14 px-9 rounded-2xl bg-white/70 backdrop-blur-xl
                       border border-[#7B2FF7]/25 text-[#7B2FF7] font-bold
                       flex items-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Send Your Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.34 }}
          className="mt-20 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0A1028 0%, #111827 55%, #0A1028 100%)",
            boxShadow: "0 24px 80px rgba(10,16,40,0.28)",
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
   PERKS
───────────────────────────────────────────── */

function PerksSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-black tracking-widest uppercase text-[#7B2FF7] mb-4">
            Why Join Tutoo
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#1E1B3A]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Perks That Actually{" "}
            <span className="text-[#6D28D9]">
              Matter
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-[28px] overflow-hidden bg-white
                           border border-[#E6E3F0] p-8
                           shadow-[0_4px_24px_rgba(30,27,58,0.06)]
                           hover:shadow-[0_20px_60px_rgba(30,27,58,0.1)]
                           transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6"
                  style={{ background: `linear-gradient(135deg, ${perk.from}, ${perk.to})` }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#1E1B3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {perk.title}
                </h3>
                <p className="text-sm leading-7 text-[#6E6A85]">{perk.desc}</p>

                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[28px]"
                  style={{ background: `linear-gradient(90deg, ${perk.from}, ${perk.to})` }}
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
   OPEN ROLES
───────────────────────────────────────────── */

function OpenRolesSection() {
  return (
    <section id="open-roles" className="relative overflow-hidden py-28 bg-[#FAFAFC] scroll-mt-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-black tracking-widest uppercase text-[#7B2FF7] mb-4">
            Open Positions
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#1E1B3A]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Your Role
          </h2>
        </div>

        <div className="space-y-4">
          {OPEN_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-5
                         rounded-[24px] bg-white/85 backdrop-blur-xl border border-[#E6E3F0]
                         p-6 md:p-7 shadow-[0_8px_30px_rgba(30,27,58,0.05)]
                         hover:shadow-[0_20px_50px_rgba(30,27,58,0.1)] transition-all duration-400"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: `${role.color}15` }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: role.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1E1B3A]" style={{ fontFamily: "var(--font-heading)" }}>
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-[#6E6A85]">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {role.dept}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold"
                      style={{ color: role.color, background: `${role.color}12` }}
                    >
                      {role.type}
                    </span>
                  </div>
                </div>
              </div>

              <motion.a
                href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl
                           bg-[#1E1B3A] text-white font-bold text-sm
                           group-hover:bg-gradient-to-r group-hover:from-[#7B2FF7] group-hover:to-[#7B2FF7]
                           transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CULTURE + FINAL CTA
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
                         bg-white border border-[rgba(30,27,58,0.08)]
                         shadow-sm text-sm font-bold text-[#1E1B3A]"
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
            background: "linear-gradient(135deg, #0A1028 0%, #111827 55%, #0A1028 100%)",
            boxShadow: "0 32px 100px rgba(10,16,40,0.28)",
          }}
        >
          <div className="absolute top-0 left-0 w-96 h-64 bg-[#7B2FF7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-60 bg-[#7B2FF7]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 py-16 px-10 lg:px-20 text-center">
            <p className="text-[#7B2FF7] text-xs font-black tracking-widest uppercase mb-6">
              ✦ Don't See Your Role? ✦
            </p>

            <h3
              className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We're always looking for{" "}
              <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
                great people.
              </span>
            </h3>

            <p className="text-white/50 text-lg leading-9 max-w-2xl mx-auto mb-10">
              Send us your resume and tell us how you'd like to contribute — we review every
              application personally.
            </p>

            <motion.a
              href={`mailto:${CAREERS_EMAIL}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-14 px-10 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C]
                         text-white font-bold shadow-[0_8px_32px_rgba(248,120,8,0.35)]
                         items-center gap-2 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {CAREERS_EMAIL}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] overflow-x-hidden">
      <CareersHero />
      <PerksSection />
      <OpenRolesSection />
      <CultureAndCTASection />
    </div>
  );
}
