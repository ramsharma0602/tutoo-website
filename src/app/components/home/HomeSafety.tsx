import { motion } from 'motion/react';
import { UserCheck, MessagesSquare, IdCard, Users, Repeat, Phone } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import FeatureGrid, { type Feature } from '../common/FeatureGrid';
import { track } from '../../../seo/analytics';

/* ─────────────────────────────────────────────────────────────────────────
   BEFORE A TUTOR COMES TO YOUR HOME — the trust engine of this page

   ── WHY THIS SECTION EXISTS AND HAS NO ONLINE EQUIVALENT ────────────────
   Online tuition's safety section answers "who else can see my child". This
   one answers a harder question: *a stranger is going to walk into my house.
   Who is he, and what do you actually know about him?*

   That is the question that decides this sale. Everything above it — the
   photograph, the tutor cards, the process — exists to earn the attention
   this section then has to repay. It is placed after the tutor faces on
   purpose: "ID-verified" is an abstraction until you have seen the people it
   describes.

   The dark band is the site's established signal for "this is the serious
   part" (SafetyTrust on the homepage, OnlineSafety on /online-tuition). It
   also gives the page its one strong visual break in eleven light sections.

   ── EVERY LINE IS AN OPERATIONAL CLAIM ──────────────────────────────────
   These are not intentions or marketing. Each one is something that happens
   every time, confirmed before this page shipped. If any of them ever stops
   being true, delete the card — do not soften the wording. A parent will
   hold you to this list, and rightly.

   Two safeguards from the homepage are deliberately absent: OTP start and
   attendance logging are online-class controls. Claiming them for a class at
   a dining table would be a small, checkable lie.
───────────────────────────────────────────────────────────────────────── */

const SAFEGUARDS: Feature[] = [
  {
    icon: IdCard,
    title: 'We check identity',
    text: 'Government ID and qualification documents are collected and checked before a tutor is ever listed.',
  },
  {
    icon: MessagesSquare,
    title: 'We meet every tutor',
    text: 'An interview before their first class. We do not forward a profile we have not met in person.',
  },
  {
    icon: UserCheck,
    title: 'You see the profile first',
    text: 'Name, qualification, experience and subjects — before anyone is at your door.',
  },
  {
    icon: Users,
    title: 'An adult should be home',
    text: 'We ask that a parent or adult is at home during classes, particularly for younger children.',
  },
  {
    icon: Repeat,
    title: 'You choose, and you can change',
    text: 'We shortlist; the decision is yours. If the fit is wrong, tell us and we arrange someone else.',
  },
  {
    icon: Phone,
    title: 'One number, always',
    text: 'If a tutor does not arrive, or anything at all feels off, call us. A person picks up.',
  },
];

const PHONE = '+918446146039';
const PHONE_DISPLAY = '+91 84461 46039';

export default function HomeSafety() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-[#0A1028] overflow-hidden"
      aria-labelledby="home-safety-heading"
    >
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
          eyebrow="Safety & Verification"
          title="Before a tutor comes to your home"
          lead="What we check, and what you can expect on the day. Not promises — controls."
          id="home-safety-heading"
        />

        <FeatureGrid items={SAFEGUARDS} columns={3} tone="dark" />

        {/* The phone number IS the CTA here. A parent who is still uneasy after
            reading six cards wants a person, not a form. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <a
            href={`tel:${PHONE}`}
            onClick={() => track('call_click', { placement: 'home_safety' })}
            className="group inline-flex items-center justify-center gap-2.5 px-7 h-13 py-3.5 rounded-xl bg-white/10 ring-1 ring-white/20 hover:bg-white/[0.16] text-white font-bold text-[15px] transition-colors"
          >
            <Phone className="w-[18px] h-[18px] shrink-0" strokeWidth={2.2} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 text-[14px] text-white/60">
            Questions about a tutor before you decide? Ask us directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
