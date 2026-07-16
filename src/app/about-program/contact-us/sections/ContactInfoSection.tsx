"use client";

import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  Zap,
} from "lucide-react";

// ─────────────────────────────────────────────
// WHATSAPP SVG ICON
// ─────────────────────────────────────────────
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// CARD DATA
// ─────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    id: "phone",
    icon: Phone,
    badge: "📞",
    title: "Call Us",
    main: "+91 8446146039",
    sub: "Mon – Sat · 8:00 AM – 8:00 PM",
    tag: "Fastest response",
    tagIcon: Zap,
    from: "#16C47F",
    to: "#2563EB",
    glow: "rgba(22,196,127,0.22)",
    bg: "rgba(22,196,127,0.06)",
    chipColor: "#16C47F",
    action: "tel:+ 8446146039",
    cta: "Call Now",
    delay: 0.08,
    extraLine: null,
  },
  {
    id: "email",
    icon: Mail,
    badge: "✉️",
    title: "Email Us",
    main: "info@tutoolearning.com",
    sub: "Response within 24 hours",
    tag: "Always monitored",
    tagIcon: CheckCircle2,
    from: "#2563EB",
    to: "#7C3AED",
    glow: "rgba(37,99,235,0.22)",
    bg: "rgba(37,99,235,0.06)",
    chipColor: "#2563EB",
    action: "mailto:info@tutoolearning.com",
    cta: "Send Email",
    delay: 0.16,
    extraLine: null,
  },
  {
    id: "address",
    icon: MapPin,
    badge: "📍",
    title: "Office Address",
    main: "Pune, Maharashtra",
    sub: "Serving Students Across India",
    tag: "Pan-India reach",
    tagIcon: CheckCircle2,
    from: "#7C3AED",
    to: "#2563EB",
    glow: "rgba(124,58,237,0.22)",
    bg: "rgba(124,58,237,0.06)",
    chipColor: "#7C3AED",
    action: "https://maps.google.com/?q=Pune+Maharashtra",
    cta: "Get Directions",
    delay: 0.24,
    extraLine: "50+ Cities Covered",
  },
  {
    id: "whatsapp",
    icon: null,   // custom
    badge: "💬",
    title: "WhatsApp Support",
    main: "+91 8446146039",
    sub: "Quick Assistance Available",
    tag: "Instant replies",
    tagIcon: Zap,
    from: "#16C47F",
    to: "#2563EB",
    glow: "rgba(22,196,127,0.22)",
    bg: "rgba(22,196,127,0.06)",
    chipColor: "#16C47F",
    action: "https://wa.me/919876543210",
    cta: "Chat on WhatsApp",
    delay: 0.32,
    extraLine: null,
  },
];

// ─────────────────────────────────────────────
// SINGLE CARD
// ─────────────────────────────────────────────
function ContactCard({ card }: { card: typeof CONTACT_CARDS[0] }) {
  const Icon = card.icon;
  const TagIcon = card.tagIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: card.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-3xl bg-white overflow-hidden
                 border border-[rgba(15,23,42,0.07)]
                 shadow-[0_4px_24px_rgba(15,23,42,0.07)]
                 hover:shadow-[0_24px_64px_rgba(15,23,42,0.12)]
                 transition-all duration-500 cursor-default
                 flex flex-col p-8"
    >
      {/* Mesh bg on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(ellipse 90% 55% at 50% 0%, ${card.bg}, transparent 70%)` }}
      />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
        style={{
          background:
            "linear-gradient(108deg, transparent 36%, rgba(255,255,255,0.44) 50%, transparent 64%)",
        }}
      />

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `0 0 0 1.5px ${card.from}30, 0 0 40px ${card.glow}` }}
      />

      {/* Top gradient stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }}
      />

      <div className="relative z-10 flex flex-col h-full">

        {/* Icon container */}
        <div className="relative mb-7 self-start">
          {/* Glow halo */}
          <div
            className="absolute -inset-3 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle, ${card.from}40, transparent 70%)` }}
          />
          <motion.div
            whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.12 }}
            transition={{ duration: 0.5 }}
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ background: `linear-gradient(135deg, ${card.from}, ${card.to})` }}
          >
            {card.id === "whatsapp" ? (
              <WhatsAppIcon className="w-8 h-8 text-white" />
            ) : (
              Icon && <Icon className="w-8 h-8 text-white" />
            )}
          </motion.div>
        </div>

        {/* Title */}
        <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: card.from }}>
          {card.title}
        </p>

        {/* Main info */}
        <p
          className="text-xl font-black text-[#0F172A] mb-2 leading-tight break-all"
          style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
        >
          {card.main}
        </p>

        {/* Sub line */}
        <p className="text-sm text-[#64748B] leading-6 mb-1">{card.sub}</p>

        {/* Extra line */}
        {card.extraLine && (
          <p className="text-xs font-bold mb-1" style={{ color: card.from }}>{card.extraLine}</p>
        )}

        {/* Status chip */}
        <div className="mt-auto pt-5">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-black mb-5"
            style={{ color: card.chipColor, background: `${card.from}0E`, borderColor: `${card.from}25` }}
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: card.from }}
            />
            <TagIcon className="w-3 h-3" />
            {card.tag}
          </div>

          {/* CTA link */}
          <a
            href={card.action}
            target={card.id === "address" || card.id === "whatsapp" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold transition-all duration-300 group/cta"
            style={{ color: card.from }}
          >
            <span className="group-hover/cta:underline">{card.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${card.from}, ${card.to})` }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────
export function ContactInfoSection() {
  return (
    <section
      className="relative overflow-hidden py-28 bg-[#F8FAFC]"
      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full blur-[120px] opacity-[0.11]"
          style={{ background: "radial-gradient(circle, #16C47F, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[110px] opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full blur-[90px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #0B1220 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Very subtle diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16C47F" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#bgLine)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#bgLine)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-white/80 backdrop-blur-xl
                         border border-[#16C47F]/30
                         shadow-[0_0_24px_rgba(22,196,127,0.18)]"
            >
              <Phone className="w-4 h-4 text-[#16C47F]" />
              <span
                className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
              >
                Contact Information
              </span>
              <Sparkles className="w-4 h-4 text-[#16C47F]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight text-[#0B1220] mb-6"
            style={{ fontFamily: "var(--font-heading, 'Clash Display', 'General Sans', sans-serif)" }}
          >
            Multiple Ways to{" "}
            <span
              className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent
                         drop-shadow-[0_0_36px_rgba(22,196,127,0.22)]"
            >
              Reach Us
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-lg leading-8 text-[#64748B]"
          >
            Choose the most convenient way to connect with our team. We're here to support
            students, parents, tutors, and institutions every step of the way.
          </motion.p>
        </div>

        {/* ── 4-CARD GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>

        {/* ── AVAILABILITY BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(135deg, #16C47F44, #2563EB44, #7C3AED44) border-box",
            border: "1.5px solid transparent",
            boxShadow: "0 12px 48px rgba(22,196,127,0.08), 0 4px 16px rgba(37,99,235,0.06)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#16C47F]/05 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-28 bg-[#2563EB]/05 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-8">
            {/* Left */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shadow-lg flex-shrink-0">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <p
                  className="text-xl font-black text-[#0F172A] mb-1"
                  style={{ fontFamily: "var(--font-heading, 'General Sans', sans-serif)" }}
                >
                  We Respond Within{" "}
                  <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
                    4 Hours
                  </span>
                </p>
                <p className="text-sm text-[#64748B]">
                  Monday to Saturday · 8:00 AM to 8:00 PM IST
                </p>
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { text: "Students",    c: "#16C47F" },
                { text: "Parents",     c: "#2563EB" },
                { text: "Tutors",      c: "#7C3AED" },
                { text: "Institutions", c: "#F59E0B" },
              ].map((chip) => (
                <motion.span
                  key={chip.text}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="inline-flex items-center gap-1.5 text-xs font-black px-4 py-2 rounded-full border transition-all duration-300"
                  style={{ color: chip.c, background: `${chip.c}0E`, borderColor: `${chip.c}28` }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: chip.c }}
                  />
                  {chip.text}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 h-12 px-8 rounded-2xl bg-gradient-to-r from-[#16C47F] to-[#2563EB]
                         text-white font-bold shadow-lg shadow-[#16C47F]/20
                         flex items-center gap-2 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              Contact Us Now
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}