import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import AssetImage from './AssetImage';
import { cx, container } from './ui';

/* ─────────────────────────────────────────────────────────────────────────
   PAGE HERO — the compact opener for content pages

   /home-tuition and /online-tuition have big photographic heroes because they
   are selling a service. The pages behind the For Parents menu are not
   selling; they are answering. A parent arrives at /safety with one question
   already formed, and a half-screen of stock photography before the answer is
   a tax on someone who is already worried.

   So: eyebrow, headline, one lead line, optional trust chips. No CTA — that
   belongs at the end, after the page has earned it.

   Same backdrop stack and the same type scale as the service heroes, so it
   still reads as the same site.

   ── THE IMAGE IS OPTIONAL, AND MOST PAGES SHOULD NOT PASS ONE ───────────
   /for-parents passes one because it is the top of the parent journey: an
   audience landing page, arrived at from a menu, where a picture sets the
   scene before any argument starts.

   /safety and /fees deliberately do not. Someone opens those with a worry
   already formed — "who is coming into my house", "what will this cost" — and
   half a screen of photography between the question and the answer is a tax
   on an anxious reader. Do not add one to be consistent; the inconsistency is
   the point.

   ── THE IMAGE IS A CUT-OUT, NOT A FRAMED PHOTO ──────────────────────────
   Same treatment as the two service heroes: object-contain, drop shadow, a
   soft elliptical ground beneath, floated over a decorative disc. Passing a
   rectangular photo with its own background would look wrong here — it would
   need a panel, and a panel next to four lines of text reads as a card, not a
   hero.
───────────────────────────────────────────────────────────────────────── */

export interface HeroChip {
  icon: LucideIcon;
  label: string;
}

export interface HeroImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  /** Small white pill floated over the lower-left of the cut-out. State a
   *  fact about the product, never a statistic and never a claim about the
   *  picture itself. */
  chip?: { icon: LucideIcon; label: string };
}

interface Props {
  eyebrow: string;
  /** Rendered before the orange span. */
  title: string;
  /** The orange half of the headline. Omit for a single-colour title. */
  titleAccent?: string;
  lead: string;
  chips?: HeroChip[];
  /** Omit for a text-only hero — see the note above before adding one. */
  image?: HeroImage;
  id?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  lead,
  chips,
  image,
  id = 'page-hero-heading',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby={id}>
      <div
        className="absolute inset-0 bg-[linear-gradient(103deg,#FFF3EA_0%,#FDF1FF_26%,#F8F5FF_46%,#FFFFFF_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-44 -left-28 w-[42rem] h-[42rem] rounded-full opacity-55"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(123,47,247,0.16) 0%, rgba(123,47,247,0.04) 46%, transparent 70%)',
          filter: 'blur(22px)',
        }}
      />
      <div
        className="hidden md:block absolute -bottom-40 right-[6%] w-[34rem] h-[34rem] rounded-full opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(234,88,12,0.13) 0%, rgba(234,88,12,0.03) 46%, transparent 70%)',
          filter: 'blur(26px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,#1e1b3a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e1b3a0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      {/* Something for the cut-out to sit against. Without it a figure with no
          background floats on a flat wash and reads as a sticker. */}
      {image && (
        <>
          <div
            className="hidden lg:block absolute right-[3%] top-[14%] w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_32%_26%,#FFE6D2_0%,#EFE2FF_58%,#F9F5FF_100%)] opacity-70"
            aria-hidden="true"
          />
          <div
            className="hidden xl:block absolute right-[0.5%] top-[9%] w-[36rem] h-[36rem] rounded-full border border-[#EA580C]/[0.12]"
            aria-hidden="true"
          />
          <div
            className="hidden lg:block absolute top-28 right-6 w-36 h-24 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(#EA580C 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
            }}
          />
        </>
      )}

      <div className={cx('relative', container)}>
        <div
          className={cx(
            'pt-32 pb-16 lg:pt-36 lg:pb-20',
            image &&
              /* 1.05fr, not more. Past this the copy column drops under
                 ~560px and the h1 breaks from two lines to three at every
                 desktop width — measured, not guessed. The photo gets its
                 size from the bleed below instead, which costs the headline
                 nothing. */
              'grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-10 lg:gap-8 xl:gap-10 items-center'
          )}
        >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          /* z-[1]: the cut-out overlaps this column at xl and the copy must
             win, visually and for hit-testing. */
          className={cx('relative z-[1] min-w-0', image ? '' : 'max-w-3xl')}
        >
          <p className="text-[13px] font-bold uppercase tracking-[0.09em] text-[#6D28D9] mb-4">
            {eyebrow}
          </p>

          <h1
            id={id}
            className="text-[2.15rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3rem] font-bold tracking-[-0.022em] text-[#1E1B3A] text-balance"
          >
            {title}
            {titleAccent && <span className="text-[#EA580C]"> {titleAccent}</span>}
          </h1>

          <p className="mt-5 text-lg lg:text-xl leading-relaxed text-[#4B4763] max-w-2xl">
            {lead}
          </p>

          {chips && chips.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.35 }}
                  className="inline-flex items-center gap-2 min-w-0 rounded-full bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] pl-3 pr-4 py-2"
                >
                  <c.icon className="w-4 h-4 text-[#6D28D9] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-[#1E1B3A]">{c.label}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* ── The cut-out ── */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            /* pointer-events-none: nothing here is interactive, and a cut-out's
               transparent margin otherwise swallows clicks on whatever it
               overlaps. */
            className="relative min-w-0 pointer-events-none"
          >
            <div
              className="absolute inset-x-[8%] bottom-[3%] h-9 rounded-[50%] opacity-70 blur-xl"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse, rgba(30,27,58,0.20) 0%, transparent 72%)' }}
            />

            <AssetImage
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              width={image.width}
              height={image.height}
              loading="eager"
              alt={image.alt}
              /* ── SIZE: BLEED BOTH WAYS, ONLY AS FAR AS THERE IS ROOM ─────
                 This section is overflow-hidden, so width past the
                 container's outer margin is not "bigger" — it is sliced off
                 flat, which is exactly what went wrong the first time. The
                 margin is not constant, so neither is the bleed:

                   viewport    container side margin + px   room at the right
                   1024-1279   0 + 32px                     32px
                   1280-1439   0 + 32px                     32px
                   1440-1535   80 + 32px                   112px
                   1536+      128+ + 32px                  160px+

                 Rightward bleed always leaves >=16px of clearance.

                 Leftward there is far more room than the numbers above
                 suggest, because it is not the container's margin being spent
                 — it is the column gap plus the copy column's own ragged
                 right edge. The cut-out's left ~8% is nearly all transparent,
                 so pulling it left enlarges the figure without covering a
                 word. Safe because the copy column already carries z-[1] and
                 this whole column is pointer-events-none.

                 Below lg: full-bleed to the screen edges. -mx-6 exactly
                 cancels the container's px-6, so the image spans the viewport
                 and cannot overflow it.

                 If the container width, its padding, or the gap changes,
                 every number here is wrong and the photo starts clipping.
                 Re-measure; do not eyeball it. */
              className="relative -mx-6 w-[calc(100%+3rem)] lg:-ml-6 lg:w-[calc(100%+2.5rem)] xl:-ml-10 xl:w-[calc(100%+3.5rem)] wide:w-[calc(100%+7.5rem)] 2xl:w-[calc(100%+10rem)] lg:mr-0 max-w-none h-auto object-contain drop-shadow-[0_24px_50px_rgba(30,27,58,0.15)]"
            />

            {image.chip && (
              <div className="absolute bottom-[14%] -left-1 sm:left-2 lg:-left-4 inline-flex items-center gap-2 rounded-full bg-white pl-3 pr-4 py-2 shadow-[0_12px_30px_rgba(30,27,58,0.16)] ring-1 ring-[#EFEDF6]">
                <span className="w-6 h-6 rounded-full bg-[#FFF1E7] flex items-center justify-center shrink-0">
                  <image.chip.icon className="w-3.5 h-3.5 text-[#EA580C]" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <span className="text-[13px] font-bold text-[#1E1B3A] whitespace-nowrap">
                  {image.chip.label}
                </span>
              </div>
            )}
          </motion.div>
        )}
        </div>
      </div>
    </section>
  );
}
