"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  BoardClassBrowser.tsx
//  Interactive board/class selector — renders inline or can route to pages.
//  Drop this on your /board-and-classes listing page.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { BOARD_CLASS_DATA, slugToPath, type Category } from "../data/boardClassData";

// ── Build navigation tree from data ──────────────────────────────────────────
type BoardMeta = { board: string; classes: { slug: string; label: string; classNum: number; category: Category }[] };

function buildTree(): BoardMeta[] {
  const map: Record<string, BoardMeta> = {};
  Object.entries(BOARD_CLASS_DATA).forEach(([slug, entry]) => {
    if (!map[entry.board]) map[entry.board] = { board: entry.board, classes: [] };
    map[entry.board].classes.push({ slug, label: entry.classLabel, classNum: entry.classNum, category: entry.category });
  });
  Object.values(map).forEach((b) => b.classes.sort((a, c) => a.classNum - c.classNum));
  return Object.values(map);
}

const BOARDS = buildTree();

const BOARD_COLORS: Record<string, { color: string; bg: string; border: string; grad: string }> = {
  CBSE:  { color: "#2563EB", bg: "rgba(37,99,235,0.09)",  border: "rgba(37,99,235,0.2)",  grad: "from-[#2563EB] to-[#7C3AED]" },
  ICSE:  { color: "#16C47F", bg: "rgba(22,196,127,0.09)", border: "rgba(22,196,127,0.2)", grad: "from-[#16C47F] to-[#2563EB]" },
  SSC:   { color: "#F59E0B", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.2)", grad: "from-[#F59E0B] to-[#EF4444]" },
  IGCSE: { color: "#7C3AED", bg: "rgba(124,58,237,0.09)", border: "rgba(124,58,237,0.2)", grad: "from-[#7C3AED] to-[#2563EB]" },
};

const CAT_LABEL: Record<Category, string> = {
  primary: "Primary (1–5)",
  secondary: "Secondary (6–10)",
  senior: "Senior (11–12)",
};

// ─────────────────────────────────────────────────────────────────────────────
export function BoardClassBrowser() {
  const navigate = useNavigate();
  const [selectedBoard, setSelectedBoard] = useState<string>(BOARDS[0].board);

  const boardData = BOARDS.find((b) => b.board === selectedBoard)!;
  const bc = BOARD_COLORS[selectedBoard] ?? BOARD_COLORS["CBSE"];

  const grouped = boardData.classes.reduce((acc, cls) => {
    if (!acc[cls.category]) acc[cls.category] = [];
    acc[cls.category].push(cls);
    return acc;
  }, {} as Record<Category, typeof boardData.classes>);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      {/* ── Header ── */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1), transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{ background: "rgba(22,196,127,0.08)", borderColor: "rgba(22,196,127,0.25)", backdropFilter: "blur(10px)" }}>
              <BookOpen className="w-4 h-4 text-[#16C47F]" />
              <span className="text-sm font-bold text-[#059669]">Board & Classes</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0B1220] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}>
              Find Tuition for{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#16C47F] bg-clip-text text-transparent">
                Your Board & Class
              </span>
            </h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Select your board and class to explore personalised tuition options, subjects, and tutor recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Board selector tabs ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {BOARDS.map((b) => {
            const c = BOARD_COLORS[b.board] ?? BOARD_COLORS["CBSE"];
            const isActive = selectedBoard === b.board;
            return (
              <motion.button key={b.board}
                onClick={() => setSelectedBoard(b.board)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-2xl text-sm font-bold border transition-all duration-250"
                style={isActive
                  ? { background: `linear-gradient(135deg, ${c.color}, #2563EB)`, color: "#fff", border: "1px solid transparent", boxShadow: `0 4px 20px ${c.color}40` }
                  : { background: "rgba(255,255,255,0.85)", color: "#0F172A", borderColor: "rgba(15,23,42,0.09)", backdropFilter: "blur(8px)" }}
              >
                {b.board} Board
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Class grid by category ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div key={selectedBoard}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}>
            {(["primary", "secondary", "senior"] as Category[]).map((cat) => {
              const classes = grouped[cat];
              if (!classes || classes.length === 0) return null;
              return (
                <div key={cat} className="mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-base font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-heading)" }}>
                      {CAT_LABEL[cat]}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[rgba(15,23,42,0.1)] to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {classes.map((cls, i) => (
                      <motion.button key={cls.slug}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      onClick={() => navigate(slugToPath(cls.slug))}
                        whileHover={{ y: -3, boxShadow: `0 10px 28px ${bc.color}22` }}
                        whileTap={{ scale: 0.97 }}
                        className="group rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer"
                        style={{ background: "rgba(255,255,255,0.88)", borderColor: "rgba(15,23,42,0.07)", backdropFilter: "blur(10px)", boxShadow: "0 2px 10px rgba(15,23,42,0.04)" }}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bc.grad} flex items-center justify-center mb-3 shadow-md text-white text-xs font-black`}>
                          {cls.classNum}
                        </div>
                        <p className="text-sm font-bold text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors duration-250"
                          style={{ fontFamily: "var(--font-heading)" }}>
                          {cls.label}
                        </p>
                        <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">{selectedBoard}</p>
                        <div className="flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:text-[#16C47F] transition-colors duration-250">
                          View <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-4 rounded-3xl p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0B1220, #111827)" }}>
          <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(22,196,127,0.15), transparent 60%)" }} />
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />
          <div className="relative z-10">
            <p className="text-xl font-black text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Can't find your board or class?
            </p>
            <p className="text-[#94A3B8] text-sm mb-5">We cover all boards including State Boards, IGCSE, IB, and more.</p>
            <button className="group h-12 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-bold text-sm shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 mx-auto">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}