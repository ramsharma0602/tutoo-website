"use client";

import { motion } from "motion/react";
import {
    Shield,
    Sparkles,
    Calendar,
    List,
    CheckCircle2,
    Info,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
} from "lucide-react";
import type { LegalBlock, LegalPolicy } from "../data/legalPolicyData";

/* ─────────────────────────────────────────────
   CONTENT BLOCK RENDERER
   Purely data-driven: add a new LegalBlock type in
   legalPolicyData.ts and a matching case here, and
   every policy page picks it up automatically.
───────────────────────────────────────────── */
function RenderBlock({ block, index }: { block: LegalBlock; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
        >
            {block.type === "paragraph" && (
                <p className="text-base leading-[1.9] text-[#334155] mb-5">{block.text}</p>
            )}

            {block.type === "list" && (
                <ul className="mb-6 flex flex-col gap-3">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#16C47F] to-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-base leading-relaxed text-[#334155]">{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {block.type === "numbered" && (
                <div className="mb-6 flex flex-col gap-4">
                    {block.items.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-xs font-black shadow-md">
                                {i + 1}
                            </div>
                            <p className="text-base leading-relaxed text-[#334155] pt-0.5">{item}</p>
                        </div>
                    ))}
                </div>
            )}

            {block.type === "note" && (
                <div
                    className="my-6 rounded-2xl p-5 flex gap-3.5"
                    style={{
                        background: "rgba(37,99,235,0.06)",
                        border: "1px solid rgba(37,99,235,0.18)",
                    }}
                >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shrink-0 shadow-md">
                        <Info className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#0F172A] font-medium">{block.text}</p>
                </div>
            )}
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
   Renders any LegalPolicy object. Privacy Policy
   and Terms of Service both use this same component
   — only the data passed in differs.
───────────────────────────────────────────── */
export default function LegalPolicyPage({ policy }: { policy: LegalPolicy }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
            {/* ── HERO ── */}
            <section className="relative overflow-hidden py-24 bg-[#F8FAFC]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full opacity-25"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, rgba(22,196,127,0.07) 50%, transparent 72%)",
                            filter: "blur(60px)",
                        }}
                    />
                    <div
                        className="absolute top-10 -right-32 w-[420px] h-[420px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13), transparent 70%)", filter: "blur(70px)" }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8 mx-auto
                                   bg-white/80 backdrop-blur-xl border border-[#16C47F]/30
                                   shadow-[0_0_28px_rgba(22,196,127,0.18)]"
                    >
                        <Shield className="w-4 h-4 text-[#16C47F]" />
                        <span
                            className="text-sm font-black tracking-widest uppercase text-[#16C47F]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {policy.badgeLabel}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#16C47F]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0F172A] mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {policy.title.split(policy.highlight)[0]}
                        <span className="bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            {policy.highlight}
                        </span>
                        {policy.title.split(policy.highlight)[1]}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-lg leading-8 text-[#64748B] max-w-2xl mx-auto mb-8"
                    >
                        {policy.intro}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.22 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-sm font-semibold text-[#64748B]"
                    >
                        <Calendar className="w-4 h-4 text-[#2563EB]" />
                        Last updated: {policy.lastUpdated}
                    </motion.div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="relative py-4 lg:py-10 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[280px_1fr] gap-14">
                        {/* TOC — desktop sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-28">
                                <p className="text-xs font-black tracking-widest uppercase text-[#94A3B8] mb-4 flex items-center gap-2">
                                    <List className="w-3.5 h-3.5" />
                                    On This Page
                                </p>
                                <nav className="flex flex-col gap-1 border-l-2 border-[#E2E8F0] pl-4">
                                    {policy.sections.map((s) => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className="text-sm text-[#64748B] hover:text-[#16C47F] py-1.5 transition-colors duration-200 leading-snug"
                                        >
                                            {s.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Sections */}
                        <div className="max-w-3xl">
                            {policy.sections.map((section, sIdx) => (
                                <motion.div
                                    key={section.id}
                                    id={section.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="scroll-mt-28 pb-10 mb-10 border-b border-[#F1F5F9] last:border-0"
                                >
                                    <h2
                                        className="text-2xl font-black text-[#0B1220] mb-5 tracking-tight"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {section.title}
                                    </h2>

                                    {section.body.map((block, bIdx) => (
                                        <RenderBlock key={bIdx} block={block} index={bIdx} />
                                    ))}

                                    {/* Contact details on the final section */}
                                    {sIdx === policy.sections.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="mt-6 rounded-3xl overflow-hidden"
                                            style={{
                                                background: "linear-gradient(135deg, #0B1220 0%, #111827 55%, #0B1220 100%)",
                                                boxShadow: "0 20px 60px rgba(11,18,32,0.24)",
                                            }}
                                        >
                                            <div className="p-8 grid sm:grid-cols-3 gap-6">
                                                {(
                                                    [
                                                        { icon: Mail, label: "Email", value: "privacy@tutoolearning.com", href: "mailto:privacy@tutoolearning.com" },
                                                        { icon: Phone, label: "Phone", value: "+91 123 456 7890", href: "tel:+911234567890" },
                                                        { icon: MapPin, label: "Address", value: "Bangalore, Karnataka, India", href: null },
                                                    ] as const
                                                ).map((item) => {
                                                    const Icon = item.icon;
                                                    const inner = (
                                                        <>
                                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                                                                <Icon className="w-4.5 h-4.5 text-[#16C47F]" />
                                                            </div>
                                                            <div>
                                                                <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">
                                                                    {item.label}
                                                                </p>
                                                                <p className="text-sm font-semibold text-white flex items-center gap-1">
                                                                    {item.value}
                                                                    {item.href && (
                                                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </>
                                                    );

                                                    return item.href ? (
                                                        <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                                                            {inner}
                                                        </a>
                                                    ) : (
                                                        <div key={item.label} className="flex items-start gap-3 group">
                                                            {inner}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
