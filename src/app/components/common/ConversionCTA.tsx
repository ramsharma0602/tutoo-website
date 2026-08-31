import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whatsappLink, WhatsAppIcon } from './FloatingWhatsApp';
import { cx, section, buttonPrimary, buttonSecondary, buttonLg } from './ui';
import { track } from '../../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   CLOSING CTA — one closing section for every page

   The homepage and /online-tuition each carried their own copy: same navy
   glow, same button pair, same phone link, written twice. Only the words and
   the destinations ever differed, so those are the props.

   Offers all three channels a parent might prefer — the form, WhatsApp, and
   a phone call — because the one they will not use is the one you did not
   offer.

   `placement` goes into analytics so the two pages stay distinguishable in
   the funnel.
───────────────────────────────────────────────────────────────────────── */

interface Props {
  title: string;
  lead: string;
  /** Orange. Where the primary action goes. */
  primaryLabel: string;
  primaryHref: string;
  /** White. Optional — omit for a single-action close. */
  secondaryLabel?: string;
  secondaryHref?: string;
  whatsappMessage: string;
  /** Analytics label, e.g. "home_final_cta". */
  placement: string;
  /** Small reassurance points under the buttons. */
  points?: string[];
  /** Anything extra — an off-ramp link, a note. Rendered last. */
  footnote?: ReactNode;
}

const PHONE = '+918446146039';
const PHONE_DISPLAY = '+91 84461 46039';

export default function ConversionCTA({
  title,
  lead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  whatsappMessage,
  placement,
  points,
  footnote,
}: Props) {
  return (
    <section
      aria-labelledby={`cta-${placement}`}
      className={cx(
        'relative overflow-hidden bg-[#FAFAFC] border-t border-[#F1EFF7]',
        section
      )}
    >
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
          <h2
            id={`cta-${placement}`}
            className="text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1E1B3A]"
          >
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4B4763]">{lead}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* ── LINKS, NOT BUTTONS ────────────────────────────────────
                These were <button onClick={navigate}>. They worked when
                clicked and failed at everything else a link does: no href
                for a crawler to follow, so the site's most important
                internal link — every page's closing CTA — was invisible to
                search engines; no middle-click or ctrl-click to open in a
                new tab; nothing to copy from the context menu; and the wrong
                element role announced to a screen reader, which is told
                "button" and then finds the page has changed under it.

                <Link> gives a real anchor and still routes client-side, so
                nothing about the navigation behaviour changes.

                The track() calls were also swapped: the PRIMARY button —
                "Book a Free Assessment" on most pages — was firing
                find_tutor_click, and the secondary was firing
                book_cta_click. Every page using this component was
                reporting its assessment bookings as tutor searches. Fixed
                here rather than in the analytics, because the component is
                what is wrong. */}
            <Link
              to={primaryHref}
              onClick={() => track('book_cta_click', { placement })}
              className={cx(buttonPrimary, buttonLg, 'w-full sm:w-auto')}
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {secondaryLabel && secondaryHref && (
              <Link
                to={secondaryHref}
                onClick={() => track('find_tutor_click', { placement })}
                className={cx(buttonSecondary, buttonLg, 'w-full sm:w-auto')}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3">
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { placement })}
              className="inline-flex items-center gap-2 py-1 text-[15px] font-semibold text-[#1E1B3A] hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp us
            </a>

            <a
              href={`tel:${PHONE}`}
              onClick={() => track('call_click', { placement })}
              className="inline-flex items-center gap-2 py-1 text-[15px] font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {points && points.length > 0 && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {points.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-2 text-sm font-medium text-[#4B4763]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7]" aria-hidden="true" />
                  {p}
                </span>
              ))}
            </div>
          )}

          {footnote && <div className="mt-8">{footnote}</div>}
        </motion.div>
      </div>
    </section>
  );
}
