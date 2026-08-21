import { motion } from 'motion/react';
import { MapPin, Laptop, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';

/* ─────────────────────────────────────────────────────────────────────────
   WHERE WE TEACH

   Two real home-tuition cities, plus online everywhere. Add a city here only
   when tutors are actually available there — this block is the page's answer
   to "can you come to my area?", and a wrong answer wastes a parent's time.

   `variant="full"` is the homepage block. `variant="compact"` is a slim strip
   for use inside other pages.
───────────────────────────────────────────────────────────────────────── */

const CITIES = [
  {
    name: 'Kothrud, Pune',
    text: 'Home tutors across Kothrud and nearby Pune West areas.',
    href: '/home-tuition/kothrud',
    accent: '#EA580C',
    tint: '#FFF1E7',
  },
  {
    name: 'Kolhapur',
    text: 'Home tutors across Kolhapur city and surrounding areas.',
    href: '/home-tuition/kolhapur',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
  },
];

interface Props {
  variant?: 'full' | 'compact';
}

export function CityAvailabilitySection({ variant = 'full' }: Props) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] text-[#4B4763]">
        <span className="inline-flex items-center gap-2 font-medium">
          <MapPin className="w-4 h-4 text-[#6D28D9]" /> Kothrud (Pune)
        </span>
        <span className="inline-flex items-center gap-2 font-medium">
          <MapPin className="w-4 h-4 text-[#6D28D9]" /> Kolhapur
        </span>
        <span className="inline-flex items-center gap-2 font-medium">
          <Laptop className="w-4 h-4 text-[#6D28D9]" /> Online anywhere in India
        </span>
      </div>
    );
  }

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          eyebrow="Where We Teach"
          title="Home tutors in your city"
          lead="We send tutors to homes in two cities today — and teach online everywhere else."
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {CITIES.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_16px_40px_rgba(30,27,58,0.10)] hover:-translate-y-1 transition-all duration-300 p-6 lg:p-7"
            >
              <span
                className="inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-5"
                style={{ background: city.tint }}
              >
                <MapPin className="w-[22px] h-[22px]" style={{ color: city.accent }} strokeWidth={2} />
              </span>

              <h3 className="text-[17px] font-bold text-[#1E1B3A] mb-2">{city.name}</h3>
              <p className="text-[15px] leading-relaxed text-[#4B4763] mb-5">{city.text}</p>

              <Link
                to={city.href}
                className="inline-flex items-center gap-2 text-[15px] font-bold transition-colors"
                style={{ color: city.accent }}
              >
                See tutors here
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* Online card — visually distinct so it does not read as a third city */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="group rounded-[22px] bg-[#0A1028] p-6 lg:p-7 text-white shadow-[0_14px_38px_rgba(10,16,40,0.22)] hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="inline-flex w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/15 items-center justify-center mb-5">
              <Laptop className="w-[22px] h-[22px] text-[#C4B5FD]" strokeWidth={2} />
            </span>

            <h3 className="text-[17px] font-bold mb-2">Online — anywhere in India</h3>
            <p className="text-[15px] leading-relaxed text-white/65 mb-5">
              Not in Pune or Kolhapur? Live one-to-one online classes work from any city.
            </p>

            <Link
              to="/online-tuition"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#C4B5FD] hover:text-white transition-colors"
            >
              See online classes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
