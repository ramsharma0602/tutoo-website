import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { cx, card, cardOnDark } from './ui';

/* ─────────────────────────────────────────────────────────────────────────
   FEATURE GRID — icon, title, one line

   The same three-part card was hand-written in WhyTutoo, SafetyTrust,
   OnlineSafety and the online page's benefits row, with four slightly
   different paddings and three different icon-well sizes between them.

   `tone="dark"` renders the glass variant used on the navy safety bands.
   Nothing else changes between them, which is the point.
───────────────────────────────────────────────────────────────────────── */

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Props {
  items: Feature[];
  /** Columns at lg. Mobile is always 1, sm always 2. */
  columns?: 3 | 4;
  tone?: 'light' | 'dark';
  className?: string;
}

export default function FeatureGrid({
  items,
  columns = 4,
  tone = 'light',
  className = '',
}: Props) {
  const dark = tone === 'dark';

  return (
    <div
      className={cx(
        'grid sm:grid-cols-2 gap-5 lg:gap-6',
        columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
        className
      )}
    >
      {items.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: (i % columns) * 0.08 }}
          className={cx(
            'h-full min-w-0 p-6 lg:p-7',
            dark ? cardOnDark : card
          )}
        >
          <span
            className={cx(
              'inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-5',
              dark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-[#F4EFFE]'
            )}
          >
            <f.icon
              className={cx('w-[22px] h-[22px]', dark ? 'text-[#C4B5FD]' : 'text-[#6D28D9]')}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>

          {/* text-balance stops short titles breaking mid-phrase */}
          <h3
            className={cx(
              'text-[17px] font-bold mb-2 text-balance',
              dark ? 'text-white' : 'text-[#1E1B3A]'
            )}
          >
            {f.title}
          </h3>

          <p
            className={cx(
              'text-[15px] leading-relaxed',
              dark ? 'text-white/65' : 'text-[#4B4763]'
            )}
          >
            {f.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
