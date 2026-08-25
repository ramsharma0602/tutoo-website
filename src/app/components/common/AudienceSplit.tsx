import { motion } from 'motion/react';
import { Check, Users, Backpack, type LucideIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import AssetImage from './AssetImage';
import { cx, card, section, container } from './ui';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT YOU GET OUT OF IT — parents and students, side by side

   Two stacked bullet lists back to back is the most skippable pattern on a
   landing page; side by side, the contrast between the two audiences IS the
   design, and it takes one screen instead of two.

   Colour follows the site rule: orange is the parent/action side, violet is
   the student/structure side.

   Every line must be something Tutoo actually does. No outcome promises, no
   marks improvement, no rankings.

   ── ONE COMPONENT, TWO PAGES ────────────────────────────────────────────
   /online-tuition and /home-tuition both end on this beat, so both use this
   section with their own words and their own photograph. It used to live in
   components/online/; it belongs to neither page now.

   ── WHY THE PHOTO IS ON THE RIGHT ───────────────────────────────────────
   Both pages carry a photo-left / list-right section earlier on. Putting this
   one photo-left too would make the page read as the same row twice.
   Mirroring it is what makes a long page feel composed instead of repetitive.

   ── IF THE FILE IS MISSING ──────────────────────────────────────────────
   The panel is navy, not the usual violet well, because the caption sits in
   white on top of it. So an absent or still-decoding image looks deliberate
   rather than broken, and nothing below moves.
───────────────────────────────────────────────────────────────────────── */

export interface AudienceColumn {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  accent: string;
  tint: string;
  points: string[];
}

export interface AudiencePhoto {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  /** Bold line over the scrim. Copy, never a claim about the picture. */
  captionTitle: string;
  captionSub: string;
}

interface Props {
  eyebrow?: string;
  title?: string;
  lead?: string;
  columns?: AudienceColumn[];
  /** Omit to render the two cards side by side with no image. /home-tuition
   *  uses that variant: it already carries a hero photograph, a first-class
   *  photograph and four tutor portraits, and the only stock we have that
   *  would fit here is a laptop scene — which would quietly contradict a page
   *  about a tutor at your dining table. A wrong photo is worse than none. */
  photo?: AudiencePhoto;
  id?: string;
}

/** The online-tuition wording, kept as the default so that page is unchanged. */
export const ONLINE_AUDIENCE: AudienceColumn[] = [
  {
    icon: Users,
    eyebrow: 'For Parents',
    title: 'You stay in the loop',
    accent: '#EA580C',
    tint: '#FFF1E7',
    points: [
      'See when each class starts and ends',
      'Tell us what you need — we shortlist the tutors',
      'Change tutor if the fit is not right',
      'Fee agreed before anything starts',
    ],
  },
  {
    icon: Backpack,
    eyebrow: 'For Students',
    title: 'You get room to ask',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    points: [
      'Ask questions without waiting your turn',
      'Go at your own pace, not the class average',
      'Get help with the topics you find hard',
      'The same tutor every class',
    ],
  },
];

export default function AudienceSplit({
  eyebrow = 'Parents & Students',
  title = 'What you get out of it',
  lead = 'The same class, from two sides.',
  columns = ONLINE_AUDIENCE,
  photo,
  id = 'audience-heading',
}: Props) {
  return (
    <section className={cx(section, 'bg-white')} aria-labelledby={id}>
      <div className={container}>

        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} id={id} />

        {/* min-w-0 on both columns: without it a grid track is sized by its
            child's min-content and the row can push past 320px. */}
        <div
          className={cx(
            'grid gap-6 lg:gap-8 mx-auto',
            photo ? 'lg:grid-cols-[1.02fr_0.98fr] max-w-6xl' : 'max-w-4xl'
          )}
        >

          {/* ── The two audience cards ── */}
          <div
            className={cx(
              'order-2 lg:order-1 min-w-0 grid gap-5 lg:gap-6',
              photo ? 'sm:grid-cols-2 lg:grid-cols-1' : 'md:grid-cols-2'
            )}
          >
            {columns.map((c, i) => (
              <motion.div
                key={c.eyebrow}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={cx(
                  card,
                  'group relative overflow-hidden min-w-0 p-6 lg:p-7',
                  'hover:shadow-[0_18px_44px_rgba(30,27,58,0.10)] hover:-translate-y-1 transition-all duration-300'
                )}
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: c.accent }}
                  aria-hidden="true"
                />

                {/* Icon and label on one line: stacked they pushed the four
                    points below the fold of the card at lg, where the card is
                    half as wide as a full-width one. */}
                <div className="flex items-center gap-3.5 mb-5">
                  <span
                    className="inline-flex w-12 h-12 rounded-2xl items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: c.tint }}
                  >
                    <c.icon
                      className="w-[22px] h-[22px]"
                      style={{ color: c.accent }}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <p
                      className="text-[12px] font-bold uppercase tracking-[0.09em] mb-0.5"
                      style={{ color: c.accent }}
                    >
                      {c.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold text-[#1E1B3A] leading-tight text-balance">
                      {c.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 min-w-0 text-[15px] leading-relaxed text-[#1E1B3A]"
                    >
                      <span
                        className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                        style={{ background: c.tint }}
                        aria-hidden="true"
                      >
                        <Check className="w-3 h-3" style={{ color: c.accent }} strokeWidth={3} />
                      </span>
                      <span className="min-w-0">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ── The photo ── */}
          {photo && (
          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="order-1 lg:order-2 min-w-0 m-0"
          >
            <div className="relative h-full rounded-[26px] overflow-hidden ring-1 ring-[#EFEDF6] shadow-[0_18px_50px_rgba(30,27,58,0.10)] bg-[#2A2550] aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
              <AssetImage
                src={photo.src}
                srcSet={photo.srcSet}
                sizes={photo.sizes}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover"
                objectPosition={photo.objectPosition}
              />

              {/* Scrim: dark enough at the foot for white text to clear AA, and
                  fully transparent by 55% so it never dulls the faces. */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1E1B3A]/78 via-[#1E1B3A]/12 to-transparent"
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <p className="text-[19px] lg:text-[21px] font-bold text-white leading-snug text-balance">
                  {photo.captionTitle}
                </p>
                <p className="mt-1.5 text-[14px] text-white/80 leading-relaxed">
                  {photo.captionSub}
                </p>
              </figcaption>

              <div
                className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-black/[0.06]"
                aria-hidden="true"
              />
            </div>
          </motion.figure>
          )}
        </div>
      </div>
    </section>
  );
}
