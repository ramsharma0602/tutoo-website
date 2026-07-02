import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck, Lock, MapPin, Clock, CheckCircle2, User
} from 'lucide-react';

const securityCards = [
  {
    icon: ShieldCheck,
    title: 'Background Verified Tutors',
    description:
      'Police verification, address proof, identity checks, and academic validation completed before onboarding.',
    accent: 'from-[#16C47F] to-emerald-400',
    glow: 'rgba(22,196,127,0.12)',
    border: 'rgba(22,196,127,0.2)',
  },
  {
    icon: Lock,
    title: 'OTP Session Activation',
    description:
      'Sessions only begin after secure parent OTP verification — no code, no session.',
    accent: 'from-[#2563EB] to-sky-400',
    glow: 'rgba(37,99,235,0.12)',
    border: 'rgba(37,99,235,0.2)',
  },
  {
    icon: MapPin,
    title: 'Real-Time Location Tracking',
    description:
      'Track tutor arrival, live session activity, and departure status directly from the parent dashboard.',
    accent: 'from-[#7C3AED] to-violet-400',
    glow: 'rgba(124,58,237,0.12)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Clock,
    title: 'Session Time Logging',
    description:
      'Every minute of every session is timestamped, monitored, and securely stored for complete transparency.',
    accent: 'from-[#F59E0B] to-amber-300',
    glow: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.2)',
  },
];

const otpDigits = ['4', '5', '8', '9', '2', '1'];

export function SecurityTrust() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Mesh gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#16C47F]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-[#2563EB]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C3AED]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#16C47F]/30 text-[#16C47F] text-xs font-bold uppercase tracking-widest mb-5 shadow-sm shadow-[#16C47F]/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            Safety First
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0F172A] mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Security You Can{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
              style={{ filter: 'drop-shadow(0 0 24px rgba(37,99,235,0.25))' }}
            >
              Trust With Your Child
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Multiple security and verification layers ensure only the right tutors enter your home — every single time.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Security feature cards */}
          <div className="space-y-4">
            {securityCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group relative flex gap-5 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: card.border,
                  boxShadow: `0 4px 24px ${card.glow}`,
                }}
              >
                {/* Hover glow fill */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${card.glow} 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-5 h-5 text-white" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#0B1220] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{card.description}</p>
                </div>

                {/* Right arrow hint */}
                <div className="relative z-10 ml-auto flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <CheckCircle2 className="w-4 h-4" style={{ color: card.accent.includes('16C47F') ? '#16C47F' : card.accent.includes('2563EB') ? '#2563EB' : card.accent.includes('7C3AED') ? '#7C3AED' : '#F59E0B' }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Session verification dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Outer glow border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#16C47F]/40 via-[#2563EB]/30 to-[#7C3AED]/30 blur-sm" />

            <div className="relative rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-[#2563EB]/10 overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#16C47F] via-[#2563EB] to-[#7C3AED]" />

              <div className="p-7">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#16C47F]/20 to-[#2563EB]/20 flex items-center justify-center border border-[#16C47F]/20">
                      <ShieldCheck className="w-4.5 h-4.5 text-[#16C47F]" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A] text-sm">Session Verification</p>
                      <p className="text-xs text-[#64748B]">Secure OTP Authentication</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    Live
                  </span>
                </div>

                {/* Tutor profile card */}
                <div className="mb-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 p-4 flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src="https://img.magnific.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="Rahul Kumar"
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                    />

                    {/* Online Status */}
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#16C47F] border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[#0F172A] text-sm">Rahul Kumar</p>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#16C47F]/10 text-[#16C47F] text-xs font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-0.5">Mathematics Tutor • Grade 8</p>
                  </div>
                  <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium">
                    Active
                  </span>
                </div>

                {/* OTP input */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-[#64748B] mb-3 text-center uppercase tracking-widest">
                    Enter 6-Digit Verification Code
                  </p>
                  <div className="flex gap-2 justify-center">
                    {otpDigits.map((digit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                        className="w-10 h-12 rounded-xl border-2 border-[#2563EB]/30 bg-[#F8FAFC] flex items-center justify-center font-bold text-[#0F172A] text-lg shadow-sm"
                        style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
                      >
                        {digit}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Session details */}
                <div className="mb-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 divide-y divide-gray-100 overflow-hidden">
                  {[
                    {
                      label: 'Session Time',
                      value: '4:00 PM – 5:30 PM',
                      valueClass: 'text-[#0F172A]',
                    },
                    {
                      label: 'Tutor Location',
                      value: 'Arrived Successfully',
                      valueClass: 'text-[#16C47F] font-semibold',
                    },
                    {
                      label: 'Attendance',
                      value: 'Verified ✓',
                      valueClass: 'text-[#16C47F] font-semibold',
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between px-4 py-3">
                      <span className="text-xs text-[#64748B]">{row.label}</span>
                      <span className={`text-xs ${row.valueClass}`}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setConfirmed(true)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-lg ${confirmed
                      ? 'bg-[#16C47F] shadow-[#16C47F]/30'
                      : 'bg-gradient-to-r from-[#16C47F] to-[#2563EB] shadow-[#16C47F]/25 hover:shadow-[#16C47F]/50'
                    }`}
                >
                  {confirmed ? '✓ Session Started Successfully' : 'Confirm & Start Session'}
                </motion.button>

                {/* Subtle footer note */}
                <p className="text-center text-xs text-[#64748B] mt-3">
                  Parent will receive instant notification via app & SMS
                </p>
              </div>

              {/* Bottom ambient glow */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#16C47F]/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
