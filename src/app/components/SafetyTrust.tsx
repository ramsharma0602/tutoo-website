import { ShieldCheck, MapPin, ClipboardCheck, UserCheck, Repeat, Headphones } from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';
import FeatureGrid, { type Feature } from './common/FeatureGrid';

/* ─────────────────────────────────────────────────────────────────────────
   SAFETY

   The only dark section on the homepage — it gives the page a break in rhythm
   and puts weight on the one subject parents worry about most.

   Every item below is a real, working safeguard: OTP session start, ID and
   qualification checks, location tracking during home tuition, attendance
   records, tutor replacement, and phone/WhatsApp support. Do not add anything
   here that Tutoo does not actually do.
───────────────────────────────────────────────────────────────────────── */

const SAFEGUARDS: Feature[] = [
  {
    icon: UserCheck,
    title: 'Tutors Are Checked',
    text: 'ID and qualification documents, plus an interview before the first class.',
  },
  {
    icon: ShieldCheck,
    title: 'Classes Start With an OTP',
    text: 'Every session begins with a one-time code, so you know it actually started.',
  },
  {
    icon: ClipboardCheck,
    title: 'Attendance Is Recorded',
    text: 'Each class is logged, so you can check what happened and when.',
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    text: 'For home tuition, the tutor’s location is tracked during the class.',
  },
  {
    icon: Repeat,
    title: 'Change Tutor Any Time',
    text: 'Not the right fit? Tell us and we arrange a different tutor.',
  },
  {
    icon: Headphones,
    title: 'Someone to Call',
    text: 'Reach our team on phone or WhatsApp whenever you need help.',
  },
];

export function SafetyTrust() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0A1028] overflow-hidden">
      {/* Grid + glows */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/4 w-[38rem] h-[38rem] rounded-full opacity-70"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,247,0.28) 0%, transparent 68%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -bottom-48 right-1/4 w-[34rem] h-[34rem] rounded-full opacity-50"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.20) 0%, transparent 68%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          tone="dark"
          eyebrow="Safety First"
          title={
            <>
              How we keep <span className="text-[#A78BFA]">your child safe</span>
            </>
          }
          lead="Real safeguards on every class — from checking the tutor to confirming the class happened."
        />

        <FeatureGrid items={SAFEGUARDS} columns={3} tone="dark" />
      </div>
    </section>
  );
}
