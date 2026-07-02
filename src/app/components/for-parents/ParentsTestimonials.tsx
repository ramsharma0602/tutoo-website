'use client';

import { motion } from 'motion/react';
import {
  Star,
  Quote,
  TrendingUp,
  Award,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    location: 'Mumbai',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeXMI_b4PySoA2D5ZjrNKwWq6XakDTVX9eg&s',
    rating: 5,
    text:
      "Tutoo transformed my daughter’s academic performance. The AI-powered insights helped us identify weak areas early.",
    improvement: '+21% Grade Improvement',
    gradient: 'from-emerald-500 to-green-400',
    badge: 'bg-emerald-50 text-emerald-700',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent of JEE Aspirant',
    location: 'Delhi',
    image:
      'https://img.magnific.com/premium-photo/smiling-young-male-student-with-books-backpack_53876-1262992.jpg',
    rating: 5,
    text:
      'The real-time monitoring and analytics gave us complete peace of mind. My son secured AIR 247 in JEE Advanced.',
    improvement: 'JEE AIR 247',
    gradient: 'from-blue-500 to-cyan-400',
    badge: 'bg-blue-50 text-blue-700',
  },
  {
    name: 'Anjali Desai',
    role: 'Parent of Class 8 Student',
    location: 'Bangalore',
    image:
      'https://img.freepik.com/premium-photo/indian-teenage-girl-student-going-school-college_950042-19.jpg',
    rating: 5,
    text:
      'The dashboard is incredibly intuitive. We can track every session and communicate directly with tutors.',
    improvement: '98% Attendance',
    gradient: 'from-purple-500 to-fuchsia-400',
    badge: 'bg-purple-50 text-purple-700',
  },
  {
    name: 'Vikram Singh',
    role: 'Parent of Class 12 Student',
    location: 'Pune',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Z5w39JMiW_sJJ1FFKJDRhcBm9d_z7aTRDg&s',
    rating: 5,
    text:
      'From tutor verification to personalized learning plans, everything feels world-class and professional.',
    improvement: '+32% Overall Growth',
    gradient: 'from-orange-500 to-amber-400',
    badge: 'bg-orange-50 text-orange-700',
  },
];

export function ParentsTestimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Trusted by Families
            </span>
          </div>

          <h2
            className="text-4xl lg:text-6xl font-bold text-[#0B1220] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Parents Who Saw 
            <br />
            <span className="bg-gradient-to-r from-[#16C47F] to-[#2563EB] bg-clip-text text-transparent">
              The Difference
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            
            Real experiences from parents whose children achieved remarkable
            academic growth through Tutoo.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...testimonials, ...testimonials].map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-[350px] max-w-[350px] bg-white/80 backdrop-blur-xl rounded-3xl p-7 border border-white shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Gradient Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${testimonial.gradient}`}
                    />

                    {/* Quote */}
                    <div className="absolute top-5 right-5">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-slate-700 leading-7 mb-6 text-[15px]">
                      {testimonial.text}
                    </p>

                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7 ${testimonial.badge}`}
                    >
                      <TrendingUp className="w-4 h-4" />
                      {testimonial.improvement}
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-2xl object-cover shadow-md"
                      />

                      <div>
                        <h4 className="font-bold text-[#0B1220]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-slate-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white font-semibold text-lg shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300">
            Watch Video Testimonials
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}