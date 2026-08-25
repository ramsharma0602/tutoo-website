import { motion } from 'motion/react';
import { Home, Monitor, Check, ArrowRight, MapPin, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';
import AssetImage from './common/AssetImage';

/* ─────────────────────────────────────────────────────────────────────────
   HOME OR ONLINE — the two things Tutoo actually does.

   Two alternating rows: artwork on one side, the facts on the other.

   ── ARTWORK ─────────────────────────────────────────────────────────────
   Real photography only. Run `scripts/download-photos.ps1` once to pull the
   files into public/tutoo_assets/photos/; docs/PHOTO-SOURCES.md lists the
   source, photographer and licence for each. Until then the panel shows a
   soft brand-tinted placeholder — never a broken-image icon.

   Every bullet here is a plain fact about the service. No outcome promises.
───────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: Home,
    mode: 'home',
    eyebrow: 'At Your Home',
    title: 'Home Tuition',
    text: 'A verified tutor comes to your home and teaches your child one to one, at your own table.',
    points: [
      'The tutor travels to you',
      'One-to-one, undivided attention',
      'Timings that suit your family',
      'Kothrud (Pune) & Kolhapur',
    ],
    cta: 'Find a Home Tutor',
    accent: '#EA580C',
    tint: '#FFF1E7',
    glow: 'rgba(234,88,12,0.16)',
    photo: '/tutoo_assets/photos/home-tuition.webp',
    alt: 'A tutor teaching a student at a study table at home',
    badgeIcon: MapPin,
    badge: 'Tutor comes to you',
  },
  {
    icon: Monitor,
    mode: 'online',
    eyebrow: 'From Anywhere',
    title: 'Online Classes',
    text: 'The same verified tutors, teaching live over video — so distance stops being the problem.',
    points: [
      'Live one-to-one classes',
      'Anywhere in India',
      'Just a phone or a laptop',
      'Easy to reschedule',
    ],
    cta: 'Find an Online Tutor',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
    glow: 'rgba(123,47,247,0.16)',
    photo: '/tutoo_assets/photos/online-class.webp',
    alt: 'A student taking a live one-to-one online class on a laptop',
    badgeIcon: Wifi,
    badge: 'Live, not recorded',
  },
];

export function LearningSolutions() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Two Ways to Learn"
          title="At home, or online — your choice"
          lead="Both come with the same verified tutors and the same free first assessment."
        />

        <div className="space-y-14 lg:space-y-20">
          {SERVICES.map((s, i) => {
            /* Second row mirrors the first so the eye zig-zags down the page */
            const flip = i % 2 === 1;

            return (
              <div
                key={s.title}
                /* gap-11 on mobile, not gap-8 — the floating chip hangs 16px
                   below the artwork panel and needs clearance from the copy */
                className="grid lg:grid-cols-2 gap-11 lg:gap-14 items-center"
              >
                {/* ── ARTWORK ── */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className={`relative ${flip ? 'lg:order-2' : ''}`}
                >
                  {/* soft glow behind the panel */}
                  <div
                    className="absolute -inset-6 rounded-[40px] blur-2xl"
                    aria-hidden="true"
                    style={{ background: `radial-gradient(ellipse, ${s.glow} 0%, transparent 70%)` }}
                  />

                  {/* Fixed 4:3 box, so the panel holds its space whether the
                      photo has loaded, is still loading, or is missing — no
                      layout shift either way. */}
                  <div
                    className="relative aspect-[4/3] rounded-[26px] ring-1 ring-[#EFEDF6] shadow-[0_18px_50px_rgba(30,27,58,0.10)] overflow-hidden"
                    style={{ background: s.tint }}
                  >
                    <AssetImage
                      src={s.photo}
                      alt={s.alt}
                      width={1400}
                      height={1050}
                      className="w-full h-full object-cover block"
                      fallback={
                        <div
                          className="w-full h-full"
                          aria-hidden="true"
                          style={{
                            background: `linear-gradient(135deg, ${s.tint} 0%, #FFFFFF 55%, ${s.tint} 100%)`,
                          }}
                        />
                      }
                    />
                  </div>

                  {/* floating fact chip — a real detail, not a statistic */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="absolute -bottom-4 left-6 sm:left-8 inline-flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-2.5 shadow-[0_10px_28px_rgba(30,27,58,0.14)] ring-1 ring-[#F1EFF7]"
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: s.tint }}
                    >
                      <s.badgeIcon className="w-3.5 h-3.5" style={{ color: s.accent }} strokeWidth={2.4} />
                    </span>
                    <span className="text-[13px] font-bold text-[#1E1B3A]">{s.badge}</span>
                  </motion.div>
                </motion.div>

                {/* ── COPY ── */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={flip ? 'lg:order-1' : ''}
                >
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5"
                    style={{ background: s.tint }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: s.accent }} strokeWidth={2.4} />
                    <span
                      className="text-[12px] font-bold uppercase tracking-[0.09em]"
                      style={{ color: s.accent }}
                    >
                      {s.eyebrow}
                    </span>
                  </span>

                  <h3 className="text-2xl lg:text-[2rem] font-bold text-[#1E1B3A] leading-[1.18] tracking-[-0.02em] mb-3">
                    {s.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#4B4763] mb-6 max-w-lg">
                    {s.text}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 max-w-lg">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[15px] text-[#1E1B3A]">
                        <span
                          className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                          style={{ background: s.tint }}
                        >
                          <Check className="w-3 h-3" style={{ color: s.accent }} strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => navigate(`/book-free-assessment?mode=${s.mode}`)}
                    className="group inline-flex items-center gap-2.5 px-7 h-13 py-3.5 rounded-xl text-white font-bold text-[15px] shadow-[0_12px_28px_rgba(30,27,58,0.16)] hover:brightness-110 transition-all"
                    style={{ background: s.accent }}
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
