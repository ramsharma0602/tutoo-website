import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { whatsappLink, WhatsAppIcon } from './common/FloatingWhatsApp';
import { track } from '../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   CLOSING CTA — the last chance to convert, so it offers all three channels
   a parent might prefer: the form, WhatsApp, or a phone call.
───────────────────────────────────────────────────────────────────────── */

const POINTS = ['Free first assessment', 'No obligation', 'We call back within 24 hours'];

export function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-t border-[#F1EFF7] overflow-hidden">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[30rem] opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(123,47,247,0.14) 0%, rgba(234,88,12,0.06) 45%, transparent 72%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]">
            Ready to find the right tutor?
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4B4763]">
            Tell us your child&apos;s class, subject and area. We assess for free,
            shortlist verified tutors, and share their profiles with you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                track('book_cta_click', { placement: 'final_cta' });
                navigate('/book-free-assessment');
              }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-lg shadow-[0_12px_30px_rgba(234,88,12,0.28)] transition-colors"
            >
              Find My Tutor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappLink(
                "Hi Tutoo, I'm looking for a tutor. Class: __, Subject: __, Area: __."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { placement: 'final_cta' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-xl bg-white ring-1 ring-[#E6E3F0] hover:ring-[#25D366] text-[#1E1B3A] font-bold text-lg transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>

          <a
            href="tel:+918446146039"
            onClick={() => track('call_click', { placement: 'final_cta' })}
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Prefer to talk? Call +91 84461 46039
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {POINTS.map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium text-[#4B4763]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7]" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
