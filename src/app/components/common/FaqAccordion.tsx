import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { cx, section, sectionTinted } from './ui';
import PageSchema from '../../../seo/PageSchema';
import { getFAQSchema } from '../../../seo/schema';

/* ─────────────────────────────────────────────────────────────────────────
   FAQ ACCORDION — one accordion for every page

   The homepage and /online-tuition each had their own copy of this markup
   and its open/close state, and they had already drifted: one used a chevron
   and no motion, the other an orange +/− with a height transition. Same
   component now; only the questions differ.

   Emits FAQPage structured data from whatever questions it is given, so a
   page can never ship an accordion whose schema says something else.
   Pass `schema={false}` if the page already emits its own.
───────────────────────────────────────────────────────────────────────── */

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  /** Emit FAQPage JSON-LD. Off when the page emits its own. */
  schema?: boolean;
  /** Tinted band or plain white. Alternate with the section above. */
  tone?: 'tinted' | 'white';
  id?: string;
}

export default function FaqAccordion({
  items,
  eyebrow = 'FAQs',
  title = 'Questions parents ask us',
  lead,
  schema = true,
  tone = 'tinted',
  id = 'faq',
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section
      id={id}
      className={cx(
        'relative overflow-hidden',
        section,
        tone === 'tinted' ? sectionTinted : 'bg-white border-t border-[#F1EFF7]'
      )}
    >
      {schema && (
        <PageSchema
          jsonLd={getFAQSchema(items.map((f) => ({ question: f.q, answer: f.a })))}
        />
      )}

      {tone === 'tinted' && (
        <div
          className="hidden lg:block absolute -top-32 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-50"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(123,47,247,0.12) 0%, transparent 68%)',
            filter: 'blur(24px)',
          }}
        />
      )}

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className={cx(
                  'rounded-2xl bg-white overflow-hidden transition-all duration-300',
                  isOpen
                    ? 'ring-2 ring-[#7B2FF7]/35 shadow-[0_14px_36px_rgba(30,27,58,0.10)]'
                    : 'ring-1 ring-[#EFEDF6] shadow-[0_4px_16px_rgba(30,27,58,0.04)] hover:ring-[#7B2FF7]/25'
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-base font-semibold text-[#1E1B3A] leading-snug">
                    {f.q}
                  </span>
                  <span
                    className={cx(
                      'w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0',
                      isOpen ? 'bg-[#EA580C]' : 'bg-[#F4EFFE]'
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" aria-hidden="true" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#6D28D9]" aria-hidden="true" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1">
                        <p className="text-[15px] leading-relaxed text-[#4B4763]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
