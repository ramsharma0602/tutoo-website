"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  BoardClassPage.tsx
//
//  Route:  /:board/:category/:className
//  e.g.    /cbse/primary/class-1
//          /icse/secondary/class-9
//          /ssc/secondary/class-10
//          /cbse/senior/class-11-science
//
//  The three URL params are normalised into a data-map slug:
//    board      → lowercase  ("cbse", "icse", "ssc")
//    className  → as-is      ("class-1", "class-9", "class-11-science")
//    category   → ignored for slug (used only for breadcrumb display)
//  Final slug  → `${board}-${className}`  →  "cbse-class-9"
//
//  Usage in App Router:
//    <Route path="/:board/:category/:className" element={<BoardClassPage />} />
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useParams } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Star,
} from "lucide-react";

import {
  BOARD_CLASS_DATA,
  LEARNING_OUTCOMES,
  HOW_IT_WORKS,
  WHY_FEATURES,
  slugToPath,
  type BoardClassEntry,
} from "../data/boardClassData";
import PageSchema from "../../../../seo/PageSchema";
import { getFAQSchema, getCourseSchema } from "../../../../seo/schema";

// ─── Build slug from URL params ───────────────────────────────────────────────
//  Route params:  { board: "cbse", category: "secondary", className: "class-9" }
//  Slug result:   "cbse-class-9"
function usePageSlug(propSlug?: string): string {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams<{ board: string; category: string; className: string }>();

  if (propSlug) return propSlug;                                    // explicit prop takes priority
  if (params.board && params.className) {
    return `${params.board.toLowerCase()}-${params.className.toLowerCase()}`;
  }
  return "";
}

// ─── Props (all optional — component self-reads params via useParams) ─────────
interface Props {
  /** Override the auto-detected slug (useful for browser-internal navigation). */
  slug?: string;
  onNavigate?: (slug: string) => void;
}

// ─── 404 fallback ────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-6">
      <div className="text-6xl mb-6">📚</div>
      <h1 className="text-4xl font-black text-[#0B1220] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        Page Not Found
      </h1>
      <p className="text-[#64748B] max-w-md mb-8">
        We couldn't find tuition data for this board/class combination. Please check the URL or browse available classes.
      </p>
      <a href="/board-and-classes" className="h-12 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold flex items-center gap-2 shadow-lg">
        Browse All Classes <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      viewport={{ once: true }}
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderColor: open ? "rgba(37,99,235,0.25)" : "rgba(15,23,42,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: open ? "0 4px 24px rgba(37,99,235,0.08)" : "0 2px 8px rgba(15,23,42,0.04)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="text-base font-semibold text-[#0F172A] leading-snug">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-5 h-5 text-[#64748B] shrink-0" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-[#64748B]">{a}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function BoardClassPage({ slug: propSlug, onNavigate }: Props) {
  const slug = usePageSlug(propSlug);
  const data: BoardClassEntry | undefined = BOARD_CLASS_DATA[slug];

  if (!data) return <NotFound />;


  const { board, classLabel, category, subjects, faq, metaTitle, metaDescription } = data;
  const outcomes = LEARNING_OUTCOMES[category];
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineVisible = useInView(timelineRef, { once: true, margin: "-60px" });

  const categoryLabel =
    category === "primary" ? "Primary School" :
    category === "secondary" ? "Secondary School" :
    "Senior Secondary";

  const categoryAccent =
    category === "primary" ? "#16C47F" :
    category === "secondary" ? "#2563EB" :
    "#7C3AED";

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      {faq.length > 0 && <PageSchema jsonLd={getFAQSchema(faq)} />}
      <PageSchema
        jsonLd={getCourseSchema({
          name: `${board} ${classLabel} Home & Online Tuition`,
          description: metaDescription,
          path: slugToPath(slug),
        })}
      />

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-35 pb-20">
        {/* BG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30"
            style={{ background: `radial-gradient(ellipse, ${categoryAccent}18, transparent 70%)`, filter: "blur(70px)" }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
          {[...Array(10)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: 2, height: 2, background: i % 2 === 0 ? "#16C47F" : "#2563EB", left: `${(i * 17 + 5) % 95}%`, top: `${(i * 11 + 4) % 80}%`, opacity: 0.35 }}
              animate={{ y: [0, -14, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.45 }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
                style={{ background: `${categoryAccent}12`, borderColor: `${categoryAccent}30`, backdropFilter: "blur(10px)" }}>
                <BookOpen className="w-4 h-4" style={{ color: categoryAccent }} />
                <span className="text-sm font-bold" style={{ color: categoryAccent }}>{board} · {categoryLabel}</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0B1220] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}>
                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">{board}</span>
                {" "}{classLabel}
                <br />Tuition
              </h1>

              <p className="text-lg font-semibold text-[#0F172A] mb-3">
                Expert Home & Online Tutors for {board} {classLabel} Students
              </p>
              <p className="text-base leading-8 text-[#64748B] mb-8 max-w-lg">
                Personalised learning support, concept-based teaching, homework assistance, and exam preparation for {board} {classLabel} students.
              </p>

              {/* Subject chips preview */}
              <div className="flex flex-wrap gap-2 mb-10">
                {subjects.slice(0, 5).map((s) => (
                  <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                    style={{ color: s.color, background: s.bg, borderColor: `${s.color}30` }}>
                    <span>{s.icon}</span>{s.label}
                  </span>
                ))}
                {subjects.length > 5 && (
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(15,23,42,0.1)] text-[#64748B] bg-white">
                    +{subjects.length - 5} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold shadow-xl shadow-[#16C47F]/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                  Book Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="h-14 px-8 rounded-2xl border font-semibold text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(15,23,42,0.12)", backdropFilter: "blur(10px)" }}>
                  Find Tutors
                </button>
              </div>
            </motion.div>

            {/* Right — floating dashboard UI */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative hidden lg:block">

              {/* Main card */}
              <div className="rounded-[28px] border overflow-hidden"
                style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 24px 80px rgba(15,23,42,0.10)" }}>
                <div className="h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />
                <div className="p-7">
                  {/* Profile row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">S</div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">Student Dashboard</p>
                        <p className="text-xs text-[#64748B]">{board} · {classLabel}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#16C47F]"
                      style={{ background: "rgba(22,196,127,0.09)", border: "1px solid rgba(22,196,127,0.22)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse" />Active
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { v: "89%", l: "Score", c: "#2563EB" },
                      { v: "96%", l: "Attend.", c: "#16C47F" },
                      { v: "A+", l: "Grade", c: "#7C3AED" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-xl p-3 text-center" style={{ background: "#F8FAFC", border: "1px solid rgba(15,23,42,0.06)" }}>
                        <p className="text-lg font-black mb-0.5" style={{ color: s.c }}>{s.v}</p>
                        <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">{s.l}</p>
                      </div>
                    ))}
                  </div>
                  {/* Subjects list */}
                  <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">Subjects Enrolled</p>
                  <div className="flex flex-col gap-2">
                    {subjects.slice(0, 4).map((s) => (
                      <div key={s.label} className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                        style={{ background: s.bg, border: `1px solid ${s.color}22` }}>
                        <div className="flex items-center gap-2">
                          <span>{s.icon}</span>
                          <span className="text-sm font-semibold text-[#0F172A]">{s.label}</span>
                        </div>
                        <span className="text-xs font-bold" style={{ color: s.color }}>Active</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating AI chip */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(12px)" }}>
                <Sparkles className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-xs font-bold text-[#0F172A]">AI Personalised Plan</span>
              </motion.div>

              {/* Floating verified chip */}
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(22,196,127,0.22)", backdropFilter: "blur(12px)" }}>
                <ShieldCheck className="w-4 h-4 text-[#16C47F]" />
                <span className="text-xs font-bold text-[#0F172A]">Verified Tutor Matched</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — SUBJECTS
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.12), transparent 70%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Subjects Covered in{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                {board} {classLabel} Tuition
              </span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-xl mx-auto">
              Personalised tuition available for all core subjects in the {board} {classLabel} curriculum.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {subjects.map((sub, i) => (
              <motion.div key={sub.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: `0 12px 32px ${sub.color}25` }}
                className="group rounded-3xl border p-6 text-center cursor-default transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}
              >
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-md"
                  style={{ background: sub.bg, border: `1px solid ${sub.color}25` }}>
                  {sub.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] leading-snug">{sub.label}</h3>
                <div className="mt-3 h-0.5 w-8 mx-auto rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ background: `linear-gradient(90deg, ${sub.color}, #2563EB)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — WHY TUTOO
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#0B1220" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.2), transparent 70%)", filter: "blur(70px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(70px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.25)" }}>
              <Star className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-semibold text-[#16C47F]">Why Tutoo</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              The Smarter Way to{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">Learn</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-xl mx-auto">
              Everything a modern student needs — in one trusted platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(22,196,127,0.12)" }}
                className="rounded-3xl border p-6 cursor-default transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
              >
                <div className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${f.grad} flex items-center justify-center text-xl mb-5 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — LEARNING OUTCOMES
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[450px] h-[350px] rounded-full opacity-15"
            style={{ background: `radial-gradient(circle, ${categoryAccent}18, transparent 70%)`, filter: "blur(60px)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              What Students Will{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">Achieve</span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-xl mx-auto">
              Measurable outcomes for every {board} {classLabel} student on Tutoo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <motion.div key={o.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 rounded-2xl border px-5 py-4 hover:shadow-lg hover:border-[rgba(37,99,235,0.18)] transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(10px)", boxShadow: "0 2px 12px rgba(15,23,42,0.04)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center text-lg shadow-md shrink-0">
                  {o.icon}
                </div>
                <div className="flex items-center flex-1 pt-1">
                  <p className="text-sm font-semibold text-[#0F172A] leading-snug">{o.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              How Our{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">Tuition Works</span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-xl mx-auto">Six simple steps from requirement to results.</p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Connector line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] hidden md:block"
              style={{ background: "rgba(15,23,42,0.06)" }}>
              <motion.div className="w-full origin-top rounded-full"
                style={{ background: "linear-gradient(to bottom, #16C47F, #2563EB, #7C3AED)" }}
                initial={{ scaleY: 0 }}
                animate={timelineVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} />
            </div>

            <div className="flex flex-col gap-5">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group flex gap-5 items-start"
                >
                  <div className="relative z-10 shrink-0">
                    <motion.div className="absolute inset-0 rounded-full"
                      animate={{ boxShadow: [`0 0 0 0px ${step.glow}`, `0 0 0 8px transparent`] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }} />
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black border transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${step.color}12`, borderColor: `${step.color}35`, color: step.color, boxShadow: `0 0 16px ${step.glow}` }}>
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border p-5 transition-all duration-300 group-hover:border-[rgba(37,99,235,0.2)] group-hover:shadow-lg"
                    style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(10px)", boxShadow: "0 2px 12px rgba(15,23,42,0.04)" }}>
                    <h3 className="text-base font-bold text-[#0B1220] mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#64748B]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12), transparent 70%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.question} a={item.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7 — SEO CONTENT BLOCK
      ══════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl border p-10"
            style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(15,23,42,0.08)", backdropFilter: "blur(16px)", boxShadow: "0 8px 40px rgba(15,23,42,0.07)" }}>
            <div className="h-[3px] rounded-full bg-gradient-to-r from-[#16C47F] to-[#2563EB] mb-8" />
            <h2 className="text-3xl font-black text-[#0B1220] tracking-tight mb-7" style={{ fontFamily: "var(--font-heading)" }}>
              About {board} {classLabel} Tuition
            </h2>
            <div className="flex flex-col gap-5 text-[#334155] text-base leading-8">
              <p>{board} {classLabel} is an important stage in a student's academic journey. Our expert tutors help students build strong conceptual understanding, improve confidence, and achieve better academic results through personalised learning designed specifically for the {board} curriculum.</p>
              <p>Tutoo provides both home tuition and online tuition for {board} {classLabel} students. Our experienced tutors follow the latest {board} curriculum and modern teaching methodologies to make learning engaging, effective, and measurable.</p>
              <p>Whether your child requires support in {subjects.slice(0, 3).map(s => s.label).join(", ")}, or overall academic development, our tutors create customised learning plans based on each student's individual needs and learning pace.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["#" + board.toLowerCase(), "#" + classLabel.replace(" ", "").toLowerCase(), "#hometuition", "#onlinetuition", "#personalizedlearning"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563EB]"
                  style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 8 — CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden mx-6 lg:mx-auto max-w-7xl rounded-[32px] mb-20"
        style={{ background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)" }}>
        <div className="absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(22,196,127,0.2), transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />
        </div>

        <div className="relative z-10 py-20 px-8 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{ background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.25)" }}>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-semibold text-[#16C47F]">Start Today — Free Assessment</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-white mb-5"
              style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Help Your Child{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">Excel?</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-8">
              Book a Free Academic Assessment and get personalised {board} {classLabel} tutor recommendations.
            </p>
            <div className="flex justify-center mb-8">
              <button className="group h-14 px-10 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold shadow-xl shadow-[#16C47F]/25 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2 text-base">
                Book Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["✓ Free Assessment", "✓ Verified Tutors", "✓ Home & Online Tuition"].map((c) => (
                <span key={c} className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full border"
                  style={{ color: "#16C47F", background: "rgba(22,196,127,0.1)", borderColor: "rgba(22,196,127,0.22)" }}>{c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
