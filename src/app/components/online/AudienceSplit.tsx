import { motion } from 'motion/react';
import { Check, Users, Backpack } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import AssetImage from '../common/AssetImage';
import { cx, card, section, container } from '../common/ui';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT YOU GET OUT OF IT — parents and students, side by side

   The brief had these as two full-width sections (§19, §20). Two stacked
   bullet lists back to back is the most skippable pattern on a landing page;
   side by side, the contrast between the two audiences IS the design, and it
   takes one screen instead of two.

   Colour follows the site rule: orange is the parent/action side, violet is
   the student/structure side.

   Every line is something Tutoo actually does. No outcome promises, no marks
   improvement, no rankings.

   ── WHY THE PHOTO IS ON THE RIGHT ───────────────────────────────────────
   "Inside a Class" three sections above is photo-left / list-right. Putting
   this one photo-left too would make the page read as the same row twice.
   Mirroring it — cards left, photo right — is what makes a long page feel
   composed instead of repetitive.

   The photo also has to earn the space: it is the only image on the page
   showing a parent and a child in the same frame, which is the entire point
   of a section called "the same class, from two sides". A second picture of
   a child alone at a laptop would have added nothing the page does not
   already show twice.

   ── IF THE FILE IS MISSING ──────────────────────────────────────────────
   The panel falls back to the violet well rather than a broken-image icon,
   and the two cards keep their full width on their own. Nothing below moves.
───────────────────────────────────────────────────────────────────────── */

const COLUMNS = [
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

export default function AudienceSplit() {
  return (
    <section className={cx(section, 'bg-white')}>
      <div className={container}>

        <SectionHeading
          eyebrow="Parents & Students"
          title="What you get out of it"
          lead="The same class, from two sides."
        />

        {/* items-stretch (grid default) + h-full on the panel: the photo grows
            to the height of the two stacked cards instead of being pinned to a
            fixed aspect, so the row has no dead space at any width. */}
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-6 lg:gap-8 max-w-6xl mx-auto">

          {/* ── The two audience cards ── */}
          <div className="order-2 lg:order-1 min-w-0 grid sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6">
            {COLUMNS.map((c, i) => (
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
                    now half as wide as it used to be. */}
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
          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="order-1 lg:order-2 min-w-0 m-0"
          >
            {/* Navy, not the usual violet well: the caption below sits in white
                on top of this box, so the empty state has to be dark enough to
                read against on its own — while the file is still missing, and
                in the moment before it decodes. */}
            <div className="relative h-full rounded-[26px] overflow-hidden ring-1 ring-[#EFEDF6] shadow-[0_18px_50px_rgba(30,27,58,0.10)] bg-[#2A2550] aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
              <AssetImage
                src="/tutoo_assets/photos/parents-students.webp"
                srcSet="/tutoo_assets/photos/parents-students-sm.webp 720w, /tutoo_assets/photos/parents-students.webp 1100w"
                sizes="(min-width: 1024px) 560px, calc(100vw - 3rem)"
                width={1100}
                height={1375}
                alt="A mother sits beside her son at the dining table, looking on while he works through a problem with his tutor on the laptop."
                className="absolute inset-0 w-full h-full object-cover"
                objectPosition="center 35%"
              />

              {/* Scrim: dark enough at the foot for white text to clear AA, and
                  fully transparent by 55% so it never dulls the faces. */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1E1B3A]/78 via-[#1E1B3A]/12 to-transparent"
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <p className="text-[19px] lg:text-[21px] font-bold text-white leading-snug text-balance">
                  One class. Two people it has to work for.
                </p>
                <p className="mt-1.5 text-[14px] text-white/80 leading-relaxed">
                  You can see how it is going. Your child can ask anything.
                </p>
              </figcaption>

              <div
                className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-black/[0.06]"
                aria-hidden="true"
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
