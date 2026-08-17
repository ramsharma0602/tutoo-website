"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  BarChart3,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Bell,
  Target,
  MessageSquare,
  TrendingUp,
  Sparkles,
  ArrowRight,
  BookOpen,
  Star,
  Zap,
} from "lucide-react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function SubjectRing({
  value,
  color,
  trackColor,
  label,
}: {
  value: number;
  color: string;
  trackColor: string;
  label: string;
}) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#FAFAFC] border border-[rgba(30,27,58,0.06)] p-3">
      <div className="relative w-14 h-14">
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="28" cy="28" r={r} fill="none" stroke={trackColor} strokeWidth="4" />
          <circle
            cx="28" cy="28" r={r} fill="none" stroke={color} strokeWidth="4"
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#1E1B3A]">
          {value}%
        </div>
      </div>
      <span className="text-[10px] font-600 text-[#6E6A85] uppercase tracking-wider">{label}</span>
    </div>
  );
}

function BvaBar({
  subject, before, after, gradient, diff,
}: {
  subject: string; before: number; after: number; gradient: string; diff: string;
}) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold text-[#1E1B3A]">{subject}</span>
        <span className="text-xs font-bold text-[#7B2FF7]">{diff}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#94A3B8] w-8 shrink-0">Before</span>
          <div className="flex-1 h-1.5 bg-[rgba(30,27,58,0.07)] rounded-full overflow-hidden">
            <div style={{ width: `${before}%`, height: "100%", background: "rgba(30,27,58,0.18)", borderRadius: 999 }} />
          </div>
          <span className="text-[10px] font-semibold text-[#94A3B8] w-7 text-right">{before}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#94A3B8] w-8 shrink-0">After</span>
          <div className="flex-1 h-1.5 bg-[rgba(30,27,58,0.07)] rounded-full overflow-hidden">
            <div style={{ width: `${after}%`, height: "100%", background: gradient, borderRadius: 999, transition: "width 1.4s cubic-bezier(.16,1,.3,1)" }} />
          </div>
          <span className="text-[10px] font-bold text-[#7B2FF7] w-7 text-right">{after}%</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Export
───────────────────────────────────────────── */
export function ProgressTrackingSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(reportRef, { once: true, margin: "-80px" });

  /* Chart */
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    chartInstance.current?.destroy();

    const grad = ctx.createLinearGradient(0, 0, 0, 130);
    grad.addColorStop(0, "rgba(123,47,247,0.22)");
    grad.addColorStop(1, "rgba(123,47,247,0)");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Score",
            data: [65, 70, 74, 79, 85, 89],
            borderColor: "#7B2FF7",
            backgroundColor: grad,
            borderWidth: 2.5,
            fill: true,
            tension: 0.45,
            pointRadius: 4,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#7B2FF7",
            pointBorderWidth: 2,
            pointHoverRadius: 6,
          },
          {
            label: "Goal",
            data: [72, 75, 78, 82, 87, 90],
            borderColor: "rgba(248,120,8,0.55)",
            borderWidth: 1.5,
            borderDash: [4, 4],
            fill: false,
            tension: 0.45,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(10,16,40,0.88)",
            titleFont: { size: 11, weight: "bold" },
            bodyFont: { size: 12 },
            padding: 10,
            callbacks: { label: (c) => ` ${c.parsed.y}%` },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#94A3B8" }, border: { display: false } },
          y: {
            min: 55, max: 100,
            grid: { color: "rgba(30,27,58,0.05)" },
            ticks: { font: { size: 10 }, color: "#94A3B8", callback: (v) => `${v}%`, stepSize: 15 },
            border: { display: false },
          },
        },
      },
    });
    return () => { chartInstance.current?.destroy(); };
  }, []);

  const features = [
    { icon: BarChart3, label: "Weekly Reports", grad: "from-[#7B2FF7] to-[#7B2FF7]" },
    { icon: TrendingUp, label: "Monthly Summary", grad: "from-[#EA580C] to-[#C2410C]" },
    { icon: CalendarCheck, label: "Attendance Tracking", grad: "from-[#7B2FF7] to-[#7B2FF7]" },
    { icon: BookOpen, label: "Homework Monitor", grad: "from-[#F59E0B] to-[#EF4444]" },
    { icon: ClipboardList, label: "Assessment Results", grad: "from-[#7B2FF7] to-[#7B2FF7]" },
    { icon: MessageSquare, label: "Tutor Feedback", grad: "from-[#7B2FF7] to-[#7B2FF7]" },
    { icon: Target, label: "Goal Tracking", grad: "from-[#7B2FF7] to-[#EC4899]" },
    { icon: Bell, label: "Parent Alerts", grad: "from-[#F59E0B] to-[#7B2FF7]" },
  ];

  const notifs = [
    { color: "#7B2FF7", text: "Homework submitted — Algebra Ch. 7", time: "2m ago" },
    { color: "#7B2FF7", text: "Weekly report is ready to view", time: "1h ago" },
    { color: "#F59E0B", text: "Mock assessment completed — Science", time: "Today" },
  ];

  const reportBars = [
    { label: "Mathematics", value: 89, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
    { label: "English", value: 92, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
    { label: "Science", value: 87, grad: "linear-gradient(90deg,#7B2FF7,#7B2FF7)", color: "#7B2FF7" },
    { label: "Attendance", value: 96, grad: "linear-gradient(90deg,#F59E0B,#7B2FF7)", color: "#D97706" },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#FAFAFC]">

      {/* ── Background glows ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7B2FF7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7B2FF7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7B2FF7]/6 rounded-full blur-3xl" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,27,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,58,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ════════════════════════════════════════
              LEFT — DASHBOARD
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Dashboard card */}
            <div className="relative rounded-[32px] bg-white border border-[rgba(30,27,58,0.07)] shadow-[0_24px_80px_rgba(30,27,58,0.10)] overflow-hidden p-7">

              {/* Top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7]" />

              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center text-white text-sm font-bold shadow-md">
                    AR
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E1B3A]">Arjun Rao</p>
                    <p className="text-xs text-[#6E6A85]">Grade 9 · Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(248,120,8,0.09)] border border-[rgba(248,120,8,0.25)] text-xs font-semibold text-[#059669]">
                  <span className="w-2 h-2 rounded-full bg-[#7B2FF7] animate-pulse" />
                  Live Tracking
                </div>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { val: "89%", label: "Avg Score", change: "↑ +24%", color: "text-[#7B2FF7]" },
                  { val: "96%", label: "Attendance", change: "↑ Consistent", color: "text-[#7B2FF7]" },
                  { val: "38/42", label: "HW Done", change: "↑ 90.4%", color: "text-[#7B2FF7]" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-[#FAFAFC] border border-[rgba(30,27,58,0.06)] p-3 text-center">
                    <p className={`text-xl font-black leading-none mb-1 ${s.color}`}>{s.val}</p>
                    <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">{s.label}</p>
                    <p className="text-[10px] font-bold text-[#7B2FF7] mt-1">{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#1E1B3A]">Academic Growth — 2024–25</span>
                <span className="text-xs text-[#94A3B8]">6-month trend</span>
              </div>
              <div className="relative w-full h-[130px] mb-6">
                <canvas ref={chartRef} role="img" aria-label="Line chart showing academic growth from 65% in January to 89% in June" />
              </div>

              {/* Subject rings */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <SubjectRing value={89} color="#7B2FF7" trackColor="rgba(123,47,247,0.12)" label="Math" />
                <SubjectRing value={92} color="#7B2FF7" trackColor="rgba(248,120,8,0.12)" label="English" />
                <SubjectRing value={87} color="#7B2FF7" trackColor="rgba(123,47,247,0.12)" label="Science" />
                <SubjectRing value={96} color="#F59E0B" trackColor="rgba(245,158,11,0.12)" label="Attend." />
              </div>

              {/* Before vs After */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#1E1B3A]">Before vs After Tutoo</span>
                  <span className="text-[10px] font-bold text-[#059669] bg-[rgba(248,120,8,0.1)] px-2.5 py-1 rounded-full">
                    Avg +28% lift
                  </span>
                </div>
                <BvaBar subject="Mathematics" before={62} after={89} gradient="linear-gradient(90deg,#7B2FF7,#7B2FF7)" diff="↑ +27%" />
                <BvaBar subject="Science" before={58} after={87} gradient="linear-gradient(90deg,#7B2FF7,#7B2FF7)" diff="↑ +29%" />
                <BvaBar subject="English" before={71} after={92} gradient="linear-gradient(90deg,#7B2FF7,#7B2FF7)" diff="↑ +21%" />
              </div>

              {/* Tutor feedback */}
              <div className="rounded-2xl bg-gradient-to-br from-[rgba(123,47,247,0.04)] to-[rgba(248,120,8,0.04)] border border-[rgba(123,47,247,0.10)] p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center text-white text-[10px] font-bold">
                    RK
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1E1B3A]">Rahul Kumar</p>
                    <p className="text-[10px] text-[#6E6A85]">Mathematics Tutor</p>
                  </div>
                </div>
                <p className="text-xs text-[#6E6A85] leading-relaxed italic">
                  "Excellent improvement in algebra problem-solving. Arjun now approaches complex equations with confidence and accuracy."
                </p>
                <div className="flex gap-0.5 mt-2 text-[#F59E0B] text-xs">★★★★★</div>
              </div>

              {/* AI Insight */}
              <div className="rounded-2xl bg-gradient-to-br from-[rgba(123,47,247,0.06)] to-[rgba(123,47,247,0.06)] border border-[rgba(123,47,247,0.18)] p-4 flex gap-3 items-start mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center shadow-md shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#7B2FF7] mb-1">AI Insight</p>
                  <p className="text-xs text-[#6E6A85] leading-relaxed">
                    Arjun improved 27% in Mathematics over 6 weeks — placing him in the top 12% of students at this grade level.
                  </p>
                </div>
              </div>

              {/* Notifications */}
              <div className="flex flex-col gap-2">
                {notifs.map((n, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.12 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-xl border border-[rgba(30,27,58,0.06)] shadow-sm px-4 py-2.5"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: n.color }} />
                    <span className="text-xs font-medium text-[#1E1B3A] flex-1">{n.text}</span>
                    <span className="text-[10px] text-[#94A3B8]">{n.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { label: "✦ Learning Analytics", c: "text-[#059669] bg-[rgba(248,120,8,0.09)] border-[rgba(248,120,8,0.28)]" },
                { label: "↑ Weekly Growth +24%", c: "text-[#7B2FF7] bg-[rgba(123,47,247,0.07)] border-[rgba(123,47,247,0.2)]" },
                { label: "✓ Attendance Verified", c: "text-[#7B2FF7] bg-[rgba(123,47,247,0.07)] border-[rgba(123,47,247,0.2)]" },
              ].map((chip) => (
                <span key={chip.label} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border ${chip.c}`}>
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ════════════════════════════════════════
              RIGHT — CONTENT
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#7B2FF7]/25 shadow-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-[#7B2FF7] animate-pulse shadow-[0_0_6px_rgba(248,120,8,0.7)]" />
              <span className="text-sm font-semibold text-[#059669]">Progress Tracking</span>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0A1028]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stay Informed About
              <br />
              Your{" "}
              <span className="bg-gradient-to-r from-[#7B2FF7] via-[#7B2FF7] to-[#7B2FF7] bg-clip-text text-transparent">
                Child's Progress
              </span>
            </h2>

            {/* Subheading */}
            <p className="mt-6 text-lg leading-8 text-[#6E6A85] max-w-xl">
              Track academic performance, attendance, homework, tutor feedback, and measurable
              improvement through clear, regular learning updates — all in one place.
            </p>

            {/* Report card preview */}
            <div ref={reportRef} className="mt-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-[rgba(30,27,58,0.07)] shadow-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-bold text-[#1E1B3A]">📋 Latest Performance Summary</p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(248,120,8,0.1)] text-[#059669]">
                  June 2025
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {reportBars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#6E6A85] w-24 shrink-0">{bar.label}</span>
                    <div className="flex-1 h-2 bg-[rgba(30,27,58,0.06)] rounded-full overflow-hidden">
                      <div
                        style={{
                          width: isInView ? `${bar.value}%` : "0%",
                          height: "100%",
                          background: bar.grad,
                          borderRadius: 999,
                          transition: "width 1.2s cubic-bezier(.16,1,.3,1)",
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold w-9 text-right" style={{ color: bar.color }}>
                      {bar.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 rounded-2xl bg-[#FAFAFC]/80 backdrop-blur-xl border border-[rgba(30,27,58,0.06)] shadow-sm px-4 py-3.5 hover:shadow-lg hover:border-[rgba(123,47,247,0.2)] transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${f.grad} flex items-center justify-center shadow-md shrink-0`}>
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#1E1B3A]">{f.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-[rgba(30,27,58,0.06)] shadow-xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1E1B3A]" style={{ fontFamily: "var(--font-heading)" }}>
                  AI Learning Analytics
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6A85]">
                  Smart insights & real-time academic progress tracking powered by AI.
                </p>
              </div>
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-[rgba(30,27,58,0.06)] shadow-xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7] flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1E1B3A]" style={{ fontFamily: "var(--font-heading)" }}>
                  Instant Parent Alerts
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6A85]">
                  Get notified instantly for homework, sessions, and assessment results.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <button className="group h-14 px-8 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-semibold shadow-xl shadow-[#EA580C]/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                Explore Parent Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="text-[#7B2FF7] font-semibold hover:text-[#7B2FF7] transition-colors duration-300">
                Book Free Demo
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
