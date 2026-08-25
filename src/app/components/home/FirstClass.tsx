import { motion } from 'motion/react';
import { UserCheck, Armchair, Users, ClipboardList, RefreshCw, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import AssetImage from '../common/AssetImage';
import { cx, section, container } from '../common/ui';

/* ─────────────────────────────────────────────────────────────────────────
   WHAT THE FIRST CLASS LOOKS LIKE

   /online-tuition answers "what is a class actually like" with a photograph
   of a child on a video call. The equivalent question here is a different
   one, and it is the question parents actually ask on the phone: *what
   happens the first time this person arrives at my door?*

   So this section is about the visit, not the teaching. Where the tutor
   sits, who is expected to be home, what the first hour is spent on, and
   what happens if it does not work out. None of it is about pedagogy and all
   of it is about letting a stranger into your house.

   ── EVERY LINE MUST BE REAL ─────────────────────────────────────────────
   These five facts describe operational behaviour, not intentions. If any of
   them stops being true, delete the line — do not soften it. A parent will
   measure the first visit against this list.

   ── LAYOUT ──────────────────────────────────────────────────────────────
   Photo left, facts right. AudienceSplit later on the same page is photo
   right, facts left. The page alternates rather than repeating a row.
───────────────────────────────────────────────────────────────────────── */

const FACTS = [
  {
    icon: UserCheck,
    title: 'You know who is coming',
    text: 'We share the tutor’s name, qualification and experience with you before the first class — nobody arrives unannounced.',
  },
  {
    icon: Armchair,
    title: 'You pick the spot',
    text: 'The dining table, a study desk, wherever your child already works. The tutor fits into your home, not the other way round.',
  },
  {
    icon: Users,
    title: 'Someone is home',
    text: 'We ask that an adult is at home during classes, particularly for younger children. It is a condition, not a suggestion.',
  },
  {
    icon: ClipboardList,
    title: 'The first class is about your child',
    text: 'Where they actually are, what they find hard, and how they like to work — before anyone opens a syllabus.',
  },
  {
    icon: RefreshCw,
    title: 'You can change your mind',
    text: 'If the fit is not right, tell us and we arrange a different tutor. You are never locked in with someone who does not suit your child.',
  },
];

export default function FirstClass() {
  return (
    <section
      className={cx('relative overflow-hidden', section, 'bg-[#FAFAFC] border-y border-[#F1EFF7]')}
      aria-labelledby="first-class-heading"
    >
      <div
        className="hidden lg:block absolute -bottom-32 -left-20 w-[32rem] h-[32rem] rounded-full opacity-60"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.10) 0%, transparent 68%)',
          filter: 'blur(30px)',
        }}
      />

      <div className={cx('relative', container)}>

        <SectionHeading
          eyebrow="The First Class"
          title="What the first class looks like"
          lead="The part parents ask about most — what actually happens when the tutor arrives."
          id="first-class-heading"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="min-w-0"
          >
            <div className="relative rounded-[26px] overflow-hidden ring-1 ring-[#EFEDF6] shadow-[0_18px_50px_rgba(30,27,58,0.10)] bg-[#F4EFFE] aspect-[4/3]">
              <AssetImage
                src="/tutoo_assets/photos/home-tuition.webp"
                srcSet="/tutoo_assets/photos/home-tuition-sm.webp 660w, /tutoo_assets/photos/home-tuition.webp 1100w"
                sizes="(min-width: 1024px) 592px, calc(100vw - 3rem)"
                width={1100}
                height={825}
                alt="A tutor sitting beside a school student at the dining table at home, working through an open notebook together"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-black/[0.06]"
                aria-hidden="true"
              />
            </div>

            <p className="mt-4 flex items-start gap-2.5 text-[14px] text-[#6E6A85] leading-relaxed max-w-md">
              <Home
                className="w-[18px] h-[18px] text-[#6D28D9] shrink-0 mt-[2px]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>
                At your own table, with the books your child already uses —
                nothing to set up and nothing to buy.
              </span>
            </p>
          </motion.div>

          <ul className="min-w-0 space-y-5">
            {FACTS.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-white ring-1 ring-[#EFEDF6] shadow-[0_4px_14px_rgba(30,27,58,0.05)] flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-[#6D28D9]" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold text-[#1E1B3A] leading-tight mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4B4763]">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
