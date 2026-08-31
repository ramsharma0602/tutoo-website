import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { cx, card } from './ui';

/* ─────────────────────────────────────────────────────────────────────────
   PROCESS STEPS — the numbered "how it works" row

   One component for the homepage and /online-tuition, which each had their
   own copy with different number treatments and different connecting lines.

   ── WHY THE NUMBER MOVED OUT OF THE CARD ────────────────────────────────
   Both versions used to print the step number as a ghosted watermark inside
   the card. It read as decoration, not sequence — you had to hunt for the
   order in a row of four identical boxes.

   Now the number is a solid node sitting ON the connecting line above its
   card, which is the thing that makes a row of cards read as a process at a
   glance. The line is the spine; the cards hang off it.

   Below lg there is no room for that, so the number becomes a "Step 2" pill
   in the card header beside the icon, and the cards simply stack in order.

   ── THE LAST STEP IS ORANGE ─────────────────────────────────────────────
   Violet is structure everywhere on this site; orange is the thing you want.
   The final node is the outcome — the class actually starting — so it takes
   the orange. It also gives the eye a destination to travel toward, which a
   row of four identical violet nodes does not.
───────────────────────────────────────────────────────────────────────── */

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Props {
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessSteps({ steps, className = '' }: Props) {
  /* ── FOUR OR FIVE ACROSS, DERIVED — NOT A PROP ─────────────────────────
     /how-it-work has five stages; every other caller has four. Rather than
     make every call site declare its column count, take it from the data.

     The spine's inset must follow: it has to start and stop at the centre of
     the first and last node, which is half a column in from each edge —
     12.5% of the row for four columns, 10% for five. Hardcoding 12.5% and
     then rendering five cards leaves the line dangling past both end nodes.
     Both values are written out in full because Tailwind scans source text
     for class names and cannot see an interpolated string. */
  const five = steps.length >= 5;

  return (
    <div className={cx('relative', className)}>
      {/* The spine. Sits at the vertical centre of the nodes (top-6 = 24px,
          node is 48px tall), and fades out at both ends so it never appears
          to run off the section. */}
      <div
        className={cx(
          'hidden lg:block absolute top-6 h-[2px] bg-gradient-to-r from-transparent via-[#DDD6EE] to-transparent',
          five ? 'left-[10%] right-[10%]' : 'left-[12.5%] right-[12.5%]'
        )}
        aria-hidden="true"
      />

      <ol
        className={cx(
          'relative grid sm:grid-cols-2 gap-5 lg:gap-6',
          five ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
        )}
      >
        {steps.map((s, i) => {
          const isLast = i === steps.length - 1;

          return (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group relative min-w-0 lg:pt-[4.5rem]"
            >
              {/* ── NODE (lg+) — sits on the spine ── */}
              <span
                className={cx(
                  'hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full',
                  'items-center justify-center text-[16px] font-bold bg-white ring-2',
                  'transition-all duration-300 group-hover:scale-110',
                  isLast
                    ? 'ring-[#EA580C] text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white shadow-[0_6px_18px_rgba(234,88,12,0.20)]'
                    : 'ring-[#DDD6EE] text-[#6D28D9] group-hover:ring-[#7B2FF7] group-hover:bg-[#7B2FF7] group-hover:text-white shadow-[0_6px_18px_rgba(30,27,58,0.08)]'
                )}
                aria-hidden="true"
              >
                {i + 1}
              </span>

              <div
                className={cx(
                  card,
                  'h-full p-6 lg:p-7',
                  'hover:shadow-[0_18px_44px_rgba(30,27,58,0.10)] hover:-translate-y-1 transition-all duration-300',
                  isLast ? 'hover:ring-[#EA580C]/30' : 'hover:ring-[#7B2FF7]/25'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={cx(
                      'w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300',
                      isLast ? 'bg-[#FFF1E7]' : 'bg-[#F4EFFE]'
                    )}
                  >
                    <s.icon
                      className={cx('w-[22px] h-[22px]', isLast ? 'text-[#EA580C]' : 'text-[#6D28D9]')}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  {/* Below lg the node is hidden, so the order lives here */}
                  <span
                    className={cx(
                      'lg:hidden inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-bold',
                      isLast ? 'bg-[#FFF1E7] text-[#EA580C]' : 'bg-[#F4EFFE] text-[#6D28D9]'
                    )}
                  >
                    Step {i + 1}
                  </span>
                </div>

                {/* text-balance stops a three-word title breaking mid-phrase */}
                <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2 text-balance">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4B4763]">{s.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
