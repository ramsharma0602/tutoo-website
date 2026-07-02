"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Users,
  Calendar,
  Home,
  Monitor,
  GraduationCap,
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  User,
  Phone,
  Mail,
  ChevronDown,
  Send,
  Shield,
  Star,
  Zap,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const ASSISTS = [
  { icon: Users,        text: "Finding the Right Tutor"       },
  { icon: Calendar,     text: "Booking Free Assessments"      },
  { icon: Home,         text: "Home Tuition Queries"          },
  { icon: Monitor,      text: "Online Tuition Support"        },
  { icon: GraduationCap, text: "Tutor Registration"           },
  { icon: Handshake,    text: "Partnership Opportunities"     },
];

const WHO_OPTIONS = [
  { value: "parent",  label: "Parent",  emoji: "👨‍👩‍👧" },
  { value: "student", label: "Student", emoji: "🎓" },
  { value: "tutor",   label: "Tutor",   emoji: "👨‍🏫" },
  { value: "school",  label: "School",  emoji: "🏫" },
  { value: "partner", label: "Partner", emoji: "🤝" },
];

const INQUIRY_TYPES = [
  { value: "find-tutor",   label: "Find a Tutor",     icon: Users,          color: "#16C47F" },
  { value: "assessment",   label: "Book Assessment",  icon: Calendar,       color: "#2563EB" },
  { value: "apply-tutor",  label: "Apply as Tutor",   icon: GraduationCap,  color: "#7C3AED" },
  { value: "partnership",  label: "Partnership",      icon: Handshake,      color: "#F59E0B" },
  { value: "general",      label: "General Inquiry",  icon: MessageSquare,  color: "#16C47F" },
];

// ─────────────────────────────────────────────
// FORM FIELD — styled input wrapper
// ─────────────────────────────────────────────
function FormField({
  label,
  required,
  children,
  delay = 0,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <label className="text-xs font-black tracking-wide text-[#0F172A] uppercase flex items-center gap-1">
        {label}
        {required && <span className="text-[#EF4444] text-sm leading-none">*</span>}
      </label>
      {children}
    </motion.div>
  );
}

const inputClass =
  "w-full h-12 px-4 rounded-2xl bg-white border border-[rgba(15,23,42,0.10)] text-[#0F172A] text-sm font-semibold placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/12 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]";

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export function GetInTouchSection() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", who: "", inquiry: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="relative overflow-hidden py-28 bg-white"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #16C47F, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full blur-[110px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-7"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-white border border-[#16C47F]/30
                         shadow-[0_0_22px_rgba(22,196,127,0.16)]"
            >
              <MessageSquare className="w-4 h-4 text-[#16C47F]" />
              <span className="text-xs font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                Get in Touch
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black leading-[1.07] tracking-tight text-[#0B1220] mb-5"
            style={{ fontFamily: "var(--font-heading,'Clash Display','General Sans',sans-serif)" }}
          >
            Let's Find the Perfect{" "}
            <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                             drop-shadow-[0_0_30px_rgba(22,196,127,0.22)]">
              Solution for You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base leading-8 text-[#64748B]"
          >
            Fill in the form and our team will get back to you within 4 hours with a personalised recommendation.
          </motion.p>
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[42%_58%] gap-12 items-start">

          {/* ════ LEFT — INFO ════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72 }}
          >
            {/* Heading */}
            <h3
              className="text-3xl lg:text-4xl font-black text-[#0B1220] mb-3 leading-tight"
              style={{ fontFamily: "var(--font-heading,'Clash Display','General Sans',sans-serif)" }}
            >
              How Can We{" "}
              <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                Help?
              </span>
            </h3>
            <p className="text-base text-[#64748B] leading-7 mb-9">
              Our dedicated team is ready to support you across every aspect of your educational journey.
            </p>

            {/* Assist list */}
            <div className="space-y-3 mb-10">
              <p className="text-xs font-black tracking-widest uppercase text-[#64748B] mb-4">
                Our team can assist you with:
              </p>
              {ASSISTS.map((item, i) => {
                const Icon = item.icon;
                const colors = ["#16C47F","#2563EB","#7C3AED","#F59E0B","#16C47F","#2563EB"];
                const c = colors[i];
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.07 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl
                               bg-[#F8FAFC] border border-[rgba(15,23,42,0.06)]
                               hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: `${c}15` }}>
                      <Icon className="w-4 h-4" style={{ color: c }} />
                    </div>
                    <span className="text-sm font-bold text-[#0F172A]">{item.text}</span>
                    <CheckCircle2 className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: c }} />
                  </motion.div>
                );
              })}
            </div>

            {/* Trust mini cards */}
            <div className="space-y-3">
              {[
                { icon: Shield, text: "Your information is 100% secure and private.",          c: "#16C47F" },
                { icon: Zap,    text: "We respond to every inquiry within 4 working hours.",    c: "#2563EB" },
                { icon: Star,   text: "Trusted by 5,000+ students and families across India.", c: "#7C3AED" },
              ].map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl"
                    style={{ background: `${t.c}08`, border: `1px solid ${t.c}20` }}>
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: t.c }} />
                    <p className="text-xs leading-6 text-[#64748B] font-semibold">{t.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ════ RIGHT — FORM ════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.1 }}
          >
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="rounded-3xl p-12 text-center"
                style={{
                  background: "linear-gradient(white,white) padding-box, linear-gradient(135deg,#16C47F,#2563EB,#7C3AED) border-box",
                  border: "1.5px solid transparent",
                  boxShadow: "0 24px 80px rgba(22,196,127,0.12)",
                }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB]
                                flex items-center justify-center shadow-xl mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-3"
                  style={{ fontFamily: "var(--font-heading,'General Sans',sans-serif)" }}>
                  Message Sent! 🎉
                </h3>
                <p className="text-[#64748B] leading-7 mb-8">
                  Thanks for reaching out. Our team will get back to you within 4 hours with a personalised response.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",who:"",inquiry:"",message:"" }); }}
                  className="h-12 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                             text-white font-bold shadow-lg text-sm transition-all duration-300 hover:scale-105"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              /* ── FORM CARD ── */
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(white,white) padding-box, linear-gradient(135deg,#16C47F22,#2563EB22,#7C3AED22) border-box",
                  border: "1.5px solid transparent",
                  boxShadow: "0 16px 64px rgba(15,23,42,0.08)",
                }}
              >
                {/* Top gradient stripe */}
                <div className="h-[3px] bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

                <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-6">

                  {/* Row 1: Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Full Name" required delay={0.1}>
                      <div className={`relative flex items-center ${focused === "name" ? "ring-2 ring-[#2563EB]/12 rounded-2xl" : ""}`}>
                        <User className="absolute left-3.5 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          required
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </FormField>

                    <FormField label="Mobile Number" required delay={0.15}>
                      <div className="relative flex items-center">
                        <Phone className="absolute left-3.5 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          required
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </FormField>
                  </div>

                  {/* Email */}
                  <FormField label="Email Address" required delay={0.2}>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 w-4 h-4 text-[#94A3B8]" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        required
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </FormField>

                  {/* I Am A */}
                  <FormField label="I Am A" required delay={0.25}>
                    <div className="relative">
                      <select
                        value={form.who}
                        required
                        onChange={(e) => setForm({ ...form, who: e.target.value })}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>Select your role</option>
                        {WHO_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.emoji} {o.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                  </FormField>

                  {/* Inquiry Type — pill selector */}
                  <FormField label="Inquiry Type" required delay={0.3}>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((t) => {
                        const Icon = t.icon;
                        const active = form.inquiry === t.value;
                        return (
                          <motion.button
                            key={t.value}
                            type="button"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setForm({ ...form, inquiry: t.value })}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-black transition-all duration-300"
                            style={{
                              color:       active ? "#fff"      : t.color,
                              background:  active ? `linear-gradient(135deg, ${t.color}, ${t.color}cc)` : `${t.color}10`,
                              borderColor: active ? t.color     : `${t.color}30`,
                              boxShadow:   active ? `0 4px 14px ${t.color}35` : "none",
                            }}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {t.label}
                          </motion.button>
                        );
                      })}
                    </div>
                  </FormField>

                  {/* Message */}
                  <FormField label="Message" delay={0.35}>
                    <textarea
                      rows={4}
                      placeholder="How can we help you? Share any details about your requirement..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[rgba(15,23,42,0.10)]
                                 text-[#0F172A] text-sm font-semibold placeholder:text-[#94A3B8]
                                 outline-none resize-none transition-all duration-300
                                 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/12
                                 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]"
                    />
                  </FormField>

                  {/* Submit */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.42 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group w-full h-14 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                                 text-white font-bold text-base shadow-xl shadow-[#16C47F]/22
                                 flex items-center justify-center gap-3 transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>

                    <p className="text-center text-xs text-[#94A3B8] mt-4 font-medium">
                      🔒 Your information is secure. We respond within{" "}
                      <span className="text-[#16C47F] font-bold">4 hours.</span>
                    </p>
                  </motion.div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}