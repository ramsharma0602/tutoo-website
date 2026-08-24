import { motion } from 'motion/react';
import { cx, card } from './ui';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';

/* Shared testimonial section (replaces three near-identical marquee clones).
   Renders NOTHING when the list is empty — testimonials only appear once real,
   consented quotes are added to src/app/data/testimonials.ts (UX plan §13).
   Initials avatars instead of stock photos; static grid instead of marquee. */

interface TestimonialsGridProps {
  items: Testimonial[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function TestimonialsGrid({
  items,
  eyebrow = 'Testimonials',
  title,
  subtitle,
}: TestimonialsGridProps) {
  if (!items.length) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#F6F3FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#6D28D9] mb-2">
            {eyebrow}
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1E1B3A] mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#6E6A85] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className={cx(card, 'p-6')}
            >
              <Quote className="w-6 h-6 text-[#7B2FF7] mb-4" aria-hidden="true" />

              {typeof t.rating === 'number' && t.rating > 0 && (
                <div
                  className="flex gap-1 mb-3"
                  aria-label={`Rated ${t.rating} out of 5`}
                >
                  {Array.from({ length: Math.min(t.rating, 5) }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              )}

              <blockquote className="text-[15px] text-[#4B4763] leading-7 mb-5">
                “{t.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-[#EFEDF6]">
                <span
                  aria-hidden="true"
                  className="w-11 h-11 rounded-xl bg-[#F4EFFE] text-[#6D28D9] font-bold text-sm flex items-center justify-center flex-shrink-0"
                >
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-bold text-[#1E1B3A] text-sm">{t.name}</span>
                  <span className="block text-xs text-[#6E6A85]">
                    {t.role} · {t.location}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
