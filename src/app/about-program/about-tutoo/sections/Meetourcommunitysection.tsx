"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  GraduationCap,
  Heart,
  Users,
  Sparkles,
  Star,
  BookOpen,
  TrendingUp,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  BarChart3,
  Shield,
  Brain,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const COMMUNITY = [
  {
    id: "students",
    emoji: "🎓",
    icon: GraduationCap,
    title: "Students",
    subtitle: "Learn with Confidence",
    desc: "Personalized academic support, expert guidance, structured learning plans, and continuous progress tracking designed to help every student unlock their full academic potential.",
    from: "#16C47F",
    to: "#2563EB",
    light: "rgba(22,196,127,0.08)",
    glow: "rgba(22,196,127,0.30)",
    hoverChip: "📚 Personalized Learning",
    chipColor: "#16C47F",
    stats: [
      { val: "5,000+", label: "Students" },
      { val: "95%",    label: "Satisfaction" },
    ],
    features: ["Adaptive Learning Plans", "Expert Guidance", "Progress Tracking"],
    image: "https://media.kidsacademy.mobi/files/Blog%20Pictures%20/6_Ideas_for_Study_Space/shutterstock_414638803.jpg",
    delay: 0.1,
  },
  {
    id: "parents",
    emoji: "👨‍👩‍👧",
    icon: Heart,
    title: "Parents",
    subtitle: "Stay Informed",
    desc: "Complete visibility into attendance, performance, learning progress, and tutor interactions through a transparent and deeply supportive educational experience.",
    from: "#2563EB",
    to: "#7C3AED",
    light: "rgba(37,99,235,0.08)",
    glow: "rgba(37,99,235,0.30)",
    hoverChip: "📈 Progress Visibility",
    chipColor: "#2563EB",
    stats: [
      { val: "4.8★",  label: "Parent Rating" },
      { val: "100%",  label: "Transparency" },
    ],
    features: ["Real-Time Reports", "Attendance Tracking", "Tutor Insights"],
    image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/role-of-parents-in-students-life.jpg",
    delay: 0.2,
  },
  {
    id: "tutors",
    emoji: "👨‍🏫",
    icon: Users,
    title: "Tutors",
    subtitle: "Grow Your Career",
    desc: "Access quality teaching opportunities, professional development resources, flexible scheduling, and a growing network of students seeking excellent academic guidance.",
    from: "#7C3AED",
    to: "#16C47F",
    light: "rgba(124,58,237,0.08)",
    glow: "rgba(124,58,237,0.30)",
    hoverChip: "🚀 Teaching Opportunities",
    chipColor: "#7C3AED",
    stats: [
      { val: "1,200+", label: "Tutors" },
      { val: "50+",    label: "Cities" },
    ],
    features: ["Flexible Schedule", "Student Network", "Career Growth"],
    image: "https://img.magnific.com/free-photo/young-mother-working-from-home-with-daughter_329181-18974.jpg?semt=ais_hybrid&w=740&q=80",
    delay: 0.3,
  },
];

const MICRO_CHIPS = [
  { text: "Personalized Learning", color: "#16C47F" },
  { text: "Trusted Platform",      color: "#2563EB" },
  { text: "Verified Tutors",       color: "#7C3AED" },
  { text: "Parent Transparency",   color: "#F59E0B" },
  { text: "Student Success",       color: "#16C47F" },
  { text: "Career Growth",         color: "#2563EB" },
];

// ─────────────────────────────────────────────
// ECOSYSTEM VISUAL — connection hub
// ─────────────────────────────────────────────

function EcosystemHub() {
  const nodes = [
    { label: "Students", emoji: "🎓", angle: -90, color: "#16C47F", r: 120 },
    { label: "Parents",  emoji: "👨‍👩‍👧", angle:  30, color: "#2563EB", r: 120 },
    { label: "Tutors",   emoji: "👨‍🏫", angle: 150, color: "#7C3AED", r: 120 },
  ];

  return (
    <div className="relative w-full flex items-center justify-center py-8 select-none">
      <div className="relative w-[340px] h-[340px] flex items-center justify-center">

        {/* Outer spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[320px] h-[320px] rounded-full"
          style={{ border: "1.5px dashed rgba(22,196,127,0.2)" }}
        />
        {/* Middle ring */}
        <div className="absolute w-[240px] h-[240px] rounded-full"
          style={{ border: "1px solid rgba(37,99,235,0.12)" }} />

        {/* SVG connector lines */}
        <svg className="absolute w-[320px] h-[320px]" viewBox="0 0 320 320">
          <defs>
            {nodes.map((n, i) => (
              <linearGradient key={i} id={`hubGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16C47F" stopOpacity="0.6" />
                <stop offset="100%" stopColor={n.color} stopOpacity="0.5" />
              </linearGradient>
            ))}
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Connector lines */}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 160 + n.r * Math.cos(rad);
            const y = 160 + n.r * Math.sin(rad);
            return (
              <motion.line key={i}
                x1={160} y1={160} x2={x} y2={y}
                stroke={`url(#hubGrad${i})`}
                strokeWidth="1.8"
                strokeDasharray="6 4"
                strokeLinecap="round"
                filter="url(#lineGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
              />
            );
          })}

          {/* Travelling dots on lines */}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 160 + n.r * Math.cos(rad);
            const y = 160 + n.r * Math.sin(rad);
            return (
              <motion.circle key={`dot-${i}`}
                r="4" fill={n.color}
                filter="url(#lineGlow)"
                animate={{ cx: [160, x, 160], cy: [160, y, 160], opacity: [0, 1, 0] }}
                transition={{ duration: 2.8, delay: 1 + i * 0.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
              />
            );
          })}
        </svg>

        {/* Centre core */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.45, delay: 0.2 }}
          className="relative z-10 w-[88px] h-[88px] rounded-2xl flex flex-col items-center justify-center
                     shadow-[0_0_48px_rgba(22,196,127,0.55)]"
          style={{
            background: "linear-gradient(135deg, #16C47F, #2563EB, #7C3AED)",
            animation: "communityPulse 3s ease-in-out infinite",
          }}
        >
          <Globe className="w-7 h-7 text-white" />
          <p className="text-[8px] font-black text-white tracking-widest mt-0.5">UBERTUTOR</p>
        </motion.div>

        {/* Orbit nodes */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = n.r * Math.cos(rad);
          const y = n.r * Math.sin(rad);
          return (
            <motion.div key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.14, type: "spring", bounce: 0.38 }}
              animate={{ y: [0, i % 2 === 0 ? -8 : 7, 0] }}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px - 36px)`,
                top: `calc(50% + ${y}px - 36px)`,
                animationDuration: `${3.5 + i * 0.5}s`,
                 border: `2px solid ${n.color}28`
              }}
              whileHover={{ scale: 1.18 }}
              className="w-[72px] h-[72px] rounded-2xl bg-white/90 backdrop-blur-xl
                         flex flex-col items-center justify-center gap-1 shadow-xl cursor-default
                         transition-transform duration-300"
            >
              <span className="text-2xl leading-none">{n.emoji}</span>
              <p className="text-[8px] font-black tracking-wide" style={{ color: n.color }}>
                {n.label.toUpperCase()}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// COMMUNITY CARD
// ─────────────────────────────────────────────

function CommunityCard({ member }: { member: typeof COMMUNITY[0] }) {
  const Icon = member.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: member.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -14, scale: 1.025 }}
      className="group relative rounded-[28px] bg-white overflow-hidden flex flex-col
                 border border-[rgba(15,23,42,0.07)]
                 shadow-[0_6px_32px_rgba(15,23,42,0.08)]
                 hover:shadow-[0_28px_72px_rgba(15,23,42,0.14)]
                 transition-all duration-500 cursor-default"
    >
      {/* Top gradient stripe */}
      <div className="h-[3px]"
        style={{ background: `linear-gradient(90deg, ${member.from}, ${member.to})` }} />

      {/* Image section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={member.image}
          alt={member.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-[#0B1220]/20 to-transparent" />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${member.from}20, transparent 60%)` }} />

        {/* Floating hover chip */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          whileHover={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-black text-white
                     bg-white/15 backdrop-blur-xl border border-white/25
                     opacity-0 group-hover:opacity-100 transition-all duration-400"
        >
          {member.hoverChip}
        </motion.div>

        {/* Bottom image label */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/60 text-[10px] font-black tracking-widest uppercase mb-1">
                {member.subtitle}
              </p>
              <h3 className="text-white text-2xl font-black leading-tight"
                style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                {member.emoji} {member.title}
              </h3>
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${member.from}, ${member.to})` }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="relative p-7 flex flex-col flex-1">
        {/* Mesh bg on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse 90% 55% at 50% 0%, ${member.light}, transparent 70%)` }} />

        {/* Glow border on hover */}
        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ boxShadow: `0 0 0 1.5px ${member.from}30, 0 0 40px ${member.glow}` }} />

        {/* Shine sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
          style={{ background: "linear-gradient(108deg, transparent 36%, rgba(255,255,255,0.44) 50%, transparent 64%)" }}
        />

        <div className="relative z-10 flex flex-col flex-1">
          {/* Description */}
          <p className="text-sm leading-7 text-[#64748B] mb-6 flex-1">{member.desc}</p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {member.stats.map((s) => (
              <div key={s.label} className="text-center p-3 rounded-2xl"
                style={{ background: `${member.from}08`, border: `1px solid ${member.from}18` }}>
                <p className="text-xl font-black leading-none mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${member.from}, ${member.to})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-heading,'Clash Display',sans-serif)",
                  }}>
                  {s.val}
                </p>
                <p className="text-[10px] font-bold text-[#64748B]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <div className="space-y-2 mb-7">
            {member.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: member.delay + 0.1 + i * 0.07 }}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: member.from }} />
                <span className="text-sm font-semibold text-[#0F172A]">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-5 border-t border-[rgba(15,23,42,0.07)]">
            <motion.a
              href="#"
              className="group/cta flex items-center gap-2 text-sm font-black transition-all duration-300"
              style={{ color: member.from }}
              whileHover={{ x: 4 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
              {/* Gradient underline */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover/cta:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${member.from}, ${member.to})` }} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-[28px] transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${member.from}, ${member.to})` }} />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────

export function MeetOurCommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-white"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <p className="text-[180px] lg:text-[260px] font-black text-center leading-none whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, rgba(22,196,127,0.03), rgba(37,99,235,0.03))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-heading,'Clash Display',sans-serif)",
              filter: "blur(1.5px)",
            }}>
            COMMUNITY
          </p>
        </div>

        <motion.div
          className="absolute -top-56 -left-56 w-[720px] h-[720px] rounded-full blur-[130px] opacity-[0.10]"
          style={{  y: bgY, background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
        <div className="absolute -bottom-44 -right-44 w-[660px] h-[660px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full blur-[90px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

        {/* Floating particles */}
        {[
          { x: 6,  y: 12, c: "#16C47F", s: 5, d: 0    },
          { x: 92, y: 18, c: "#2563EB", s: 7, d: 0.6  },
          { x: 14, y: 65, c: "#7C3AED", s: 4, d: 1.2  },
          { x: 86, y: 70, c: "#16C47F", s: 6, d: 0.4  },
          { x: 50, y: 4,  c: "#2563EB", s: 5, d: 0.9  },
          { x: 78, y: 90, c: "#7C3AED", s: 4, d: 1.5  },
        ].map((d, i) => (
          <motion.div key={i}
            animate={{ y: [0, -12, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 3.5 + d.d, repeat: Infinity, ease: "easeInOut", delay: d.d }}
            className="absolute rounded-full"
            style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.s, height: d.s, background: d.c }}
          />
        ))}

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-white/90 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_28px_rgba(22,196,127,0.18)]"
            >
              <Star className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                Our Community
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="text-5xl lg:text-[62px] font-black leading-[1.05] tracking-tight text-[#0B1220] mb-6"
            style={{ fontFamily: "var(--font-heading,'Clash Display','General Sans',sans-serif)" }}
          >
            One Platform.{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                             drop-shadow-[0_0_36px_rgba(22,196,127,0.22)]">
              Three Success Stories.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-lg leading-8 text-[#64748B]"
          >
            UberTutor brings together students, parents, and tutors through a connected learning
            ecosystem built on trust, technology, and measurable outcomes.
          </motion.p>
        </div>

        {/* ── ECOSYSTEM HUB ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <EcosystemHub />
        </motion.div>

        {/* ── MICRO CHIPS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {MICRO_CHIPS.map((chip, i) => (
            <motion.span
              key={chip.text}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[rgba(15,23,42,0.08)] shadow-sm hover:shadow-md
                         text-xs font-bold text-[#0F172A] transition-all duration-300 cursor-default"
            >
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: chip.color }} />
              {chip.text}
            </motion.span>
          ))}
        </motion.div>

        {/* ── 3 COMMUNITY CARDS ── */}
        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {COMMUNITY.map((member) => (
            <CommunityCard key={member.id} member={member} />
          ))}
        </div>


      </div>

      <style>{`
        @keyframes communityPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,196,127,0.3), 0 0 48px rgba(22,196,127,0.55); }
          50%      { box-shadow: 0 0 0 18px rgba(22,196,127,0), 0 0 48px rgba(22,196,127,0.55); }
        }
      `}</style>
    </section>
  );
}