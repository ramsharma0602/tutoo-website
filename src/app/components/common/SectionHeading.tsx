import { motion } from 'motion/react';

/* ─────────────────────────────────────────────────────────────────────────
   SECTION HEADING

   One heading component for every homepage section, so the eyebrow, title and
   lead line are always the same size, colour and rhythm. If a section needs a
   different heading, change it here rather than hand-rolling a new one — that
   is how the page drifted out of alignment before.

   `tone="dark"` flips the colours for sections on the navy background.
───────────────────────────────────────────────────────────────────────── */

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const dark = tone === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={[
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        'mb-10 lg:mb-14',
        className,
      ].join(' ')}
    >
      {eyebrow && (
        <p
          className={`text-[13px] font-bold tracking-[0.09em] uppercase mb-3 ${
            dark ? 'text-[#A78BFA]' : 'text-[#6D28D9]'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-[1.75rem] sm:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] ${
          dark ? 'text-white' : 'text-[#1E1B3A]'
        }`}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-[#4B4763]'
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
