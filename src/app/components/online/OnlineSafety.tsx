import { motion } from 'motion/react';
import { UserCheck, ShieldCheck, ClipboardCheck, UserX, Repeat, Headphones } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   HOW WE KEEP YOUR CHILD SAFE — online

   NOT a shared component with the homepage's SafetyTrust, deliberately. Five
   of the six safeguards are identical, but the homepage lists "the tutor's
   location is tracked during the class", which is a home-tuition control and
   means nothing online. Parameterising one component to drop a card would
   hide that difference; two lists make it obvious which safeguards apply to
   which service, and stops a home-only claim leaking onto this page.

   The visual treatment IS shared — same dark band, same glass cards, same
   place in the page rhythm — so the two pages still read as one product.

   Every item is real. Do not add anything here Tutoo does not actually do.
───────────────────────────────────────────────────────────────────────── */

const SAFEGUARDS = [
  {
    icon: UserCheck,
    title: 'Tutors are checked',
    text: 'ID and qualification documents, plus an interview before the first class.',
  },
  {
    icon: ShieldCheck,
    title: 'Classes start with an OTP',
    text: 'Every session begins with a one-time code, so you know it actually started.',
  },
  {
    icon: ClipboardCheck,
    title: 'Attendance is recorded',
    text: 'Each class is logged, so you can check what happened and when.',
  },
  {
    icon: UserX,
    title: 'Nobody else joins',
    text: 'Every online class is one-to-one. No other students are in the room.',
  },
  {
    icon: Repeat,
    title: 'Change tutor any time',
    text: 'Not the right fit? Tell us and we arrange a different tutor.',
  },
  {
    icon: Headphones,
    title: 'Someone to call',
    text: 'Reach our team on phone or WhatsApp whenever you need help.',
  },
];

export default function OnlineSafety() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0A1028] overflow-hidden">
      {/* masked grid + two glows — same treatment as the homepage safety band */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 72%)',
        }}
      />
      <div
        className="absolute -top-28 left-[12%] w-[30rem] h-[30rem] rounded-full"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(123,47,247,0.30) 0%, transparent 68%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute -bottom-32 right-[8%] w-[26rem] h-[26rem] rounded-full"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.20) 0%, transparent 68%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          tone="dark"
          eyebrow="Safety"
          title="How we keep your child safe"
          lead="Six things we do on every online class — not promises, controls."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SAFEGUARDS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="rounded-[22px] bg-white/[0.055] ring-1 ring-white/10 backdrop-blur p-6 hover:bg-white/[0.085] transition-colors duration-300"
            >
              <span className="inline-flex w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/15 items-center justify-center mb-5">
                <s.icon className="w-[22px] h-[22px] text-[#C4B5FD]" strokeWidth={2} aria-hidden="true" />
              </span>

              <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/65">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
