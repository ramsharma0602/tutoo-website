import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  MapPin,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { whatsappLink, WhatsAppIcon } from '../components/common/FloatingWhatsApp';
import { track } from '../../seo/analytics';
import PageSchema from '../../seo/PageSchema';
import { getFAQSchema } from '../../seo/schema';

/* Phase 3 (UX plan §15/§17): shared layout for the two service landing pages —
   /home-tuition and /online-tuition. One intent per page, requirement CTA
   prefilled with the right mode, honest copy, page-specific FAQ. */

export interface ServicePageContent {
  mode: 'home' | 'online';
  eyebrow: string;
  h1: string;
  h1Keyword: string; // rendered in violet inside the H1
  intro: string;
  ctaLabel: string;
  benefits: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  extraNote: { title: string; body: string };
  areas: string[];
  /** Optional note under the area chips (e.g. coverage caveat) */
  areasNote?: string;
  /** Optional linked chips (e.g. city pages) rendered after the plain areas */
  areaLinks?: { label: string; href: string }[];
  /** Extra query appended to the book CTA, e.g. "area=Kothrud" */
  bookQuery?: string;
  faqs: { q: string; a: string }[];
  whatsappMessage: string;
}

export default function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  const navigate = useNavigate();
  const bookUrl = `/book-free-assessment?mode=${content.mode}${content.bookQuery ? `&${content.bookQuery}` : ''}`;

  return (
    <main className="bg-[#FAFAFC] pt-36 lg:pt-40">
      <PageSchema
        jsonLd={getFAQSchema(content.faqs.map((f) => ({ question: f.q, answer: f.a })))}
      />
      {/* ── Hero ── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E6E3F0] rounded-full mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-[#6D28D9]" />
            <span className="text-sm font-medium text-[#1E1B3A]">{content.eyebrow}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B3A] mb-5 leading-[1.15]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {content.h1} <span className="text-[#6D28D9]">{content.h1Keyword}</span>
          </h1>

          <p className="text-lg text-[#4B4763] max-w-2xl mx-auto mb-8 leading-relaxed">
            {content.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate(bookUrl)}
              className="px-8 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl font-semibold transition-colors text-lg"
            >
              {content.ctaLabel}
            </button>
            <a
              href={whatsappLink(content.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { placement: `service_${content.mode}` })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-[1.5px] border-[#E6E3F0] text-[#1E1B3A] rounded-xl font-semibold hover:border-[#25D366] transition-colors text-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> WhatsApp us
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {['Free assessment', 'Verified tutors', 'No obligation'].map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium text-[#1E1B3A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> {p}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── What you get ── */}
      <section className="bg-white py-14 lg:py-20 border-y border-[#EFEDF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#E6E3F0] shadow-[0_1px_2px_rgba(30,27,58,0.06)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4EFFE] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <h3 className="font-bold text-[#1E1B3A] mb-2">{b.title}</h3>
                <p className="text-sm text-[#6E6A85] leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl lg:text-3xl font-bold text-[#1E1B3A] text-center mb-10"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How it works
          </h2>
          <ol className="space-y-6">
            {content.steps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E6E3F0]">
                <span className="w-9 h-9 rounded-full bg-[#7B2FF7] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#1E1B3A] mb-1">{s.title}</h3>
                  <p className="text-[15px] text-[#4B4763]">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Honest note (fees / setup) + areas ── */}
      <section className="pb-14 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#FFF1E7] border border-[#EA580C]/20 rounded-2xl p-6">
            <h3 className="font-bold text-[#1E1B3A] mb-2">{content.extraNote.title}</h3>
            <p className="text-[15px] text-[#4B4763] leading-relaxed">{content.extraNote.body}</p>
          </div>
          <div className="bg-[#F4EFFE] border border-[#7B2FF7]/20 rounded-2xl p-6">
            <h3 className="font-bold text-[#1E1B3A] mb-3">Where we teach</h3>
            <div className="flex flex-wrap gap-2">
              {content.areas.map((a) => (
                <span key={a} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E3F0] text-sm font-medium text-[#4B4763]">
                  {a}
                </span>
              ))}
              {content.areaLinks?.map((a) => (
                <RouterLink
                  key={a.href}
                  to={a.href}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#7B2FF7]/40 text-sm font-semibold text-[#6D28D9] hover:bg-[#F4EFFE] transition-colors"
                >
                  {a.label} →
                </RouterLink>
              ))}
            </div>
            {content.areasNote && (
              <p className="text-xs text-[#6E6A85] mt-3">{content.areasNote}</p>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-14 lg:py-20 border-t border-[#EFEDF6]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl lg:text-3xl font-bold text-[#1E1B3A] text-center mb-10"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Common questions
          </h2>
          <div className="space-y-3">
            {content.faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#0A1028] py-14 lg:py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl lg:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-8">
            Free assessment · No obligation · We call back within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate(bookUrl)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl font-semibold transition-colors"
            >
              {content.ctaLabel} <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+918446146039"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 84461 46039
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E6E3F0] rounded-xl bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-[#1E1B3A] text-[15px]">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#6D28D9] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="px-5 pb-4 text-[15px] text-[#4B4763] leading-relaxed">{a}</p>
      )}
    </div>
  );
}
