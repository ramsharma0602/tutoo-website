import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'For Parents': ['Find a Tutor', 'Find My Tutor', 'Home Tuition', 'Online Classes', 'Tuition in Kothrud', 'Tuition in Kolhapur', 'How It Works'],
    'For Tutors': ['Become a Tutor', 'For Tutors', 'Careers'],
    Company: ['About Us', 'Our Mission', 'Team', 'Blog', 'Contact Us'],
    'Popular Classes': ['CBSE Class 10', 'CBSE Class 12 Science', 'ICSE Class 10', 'SSC Class 10', 'JEE Prep', 'NEET Prep'],
    Legal: ['Privacy Policy', 'Terms of Service']
  };

  // Every footer link maps to a real in-app route — no "#" placeholders (UX plan P0).
  const linkRoutes: Record<string, string> = {
    'Home Tuition': '/home-tuition',
    'Online Classes': '/online-tuition',
    'Find a Tutor': '/find-a-tutor',
    'Find My Tutor': '/book-free-assessment',
    'Tuition in Kothrud': '/home-tuition/kothrud',
    'Tuition in Kolhapur': '/home-tuition/kolhapur',
    'How It Works': '/how-it-work',
    'Study Material': '/study-material',
    'Become a Tutor': '/apply-tutor',
    'For Tutors': '/for-tutors',
    Careers: '/careers',
    'About Us': '/about-tutoo',
    'Our Mission': '/our-mission',
    Team: '/team',
    Blog: '/blogs',
    'Contact Us': '/contact-us',
    'CBSE Class 10': '/cbse-board/secondary/class-10',
    'CBSE Class 12 Science': '/cbse-board/senior-secondary/class-12-science',
    'ICSE Class 10': '/icse-board/secondary/class-10',
    'SSC Class 10': '/ssc/secondary/class-10',
    'JEE Prep': '/competitive-exams/entrance-exams/jee',
    'NEET Prep': '/competitive-exams/entrance-exams/neet',
    'Privacy Policy': '/privacy-policy',
    'Terms of Service': '/terms-of-service',
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0A1028] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Same logo + name lockup as the header (Navbar), with colors
                adapted for the dark footer background */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-6 select-none"
              aria-label="Tutoo Learning — Home"
            >
              {/* Logo Image */}
              <img
                src="/tutoo_assets/png/logo_icon.png"
                alt="Tutoo Logo"
                className="h-14 w-auto object-contain"
              />

              {/* Brand Name */}
              <span className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white">
                  Tutoo Learning
                </span>

                <span className="text-[12px] uppercase tracking-[0.25em] text-gray-400 font-semibold mt-1">
                  Home & Online Tuition
                </span>
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Verified home tutors and one-to-one online classes for Class 1–12,
              JEE &amp; NEET — serving families in Kothrud (Pune) and Kolhapur.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@tutoolearning.com" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@tutoolearning.com</span>
              </a>
              <a href="tel:+918446146039" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 8446146039</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Kothrud (Pune) &amp; Kolhapur, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const route = linkRoutes[link];
                  return (
                    <li key={link}>
                      {route ? (
                        <Link
                          to={route}
                          className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>



        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tutoo. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-violet-500 hover:to-violet-600 transition-all duration-300 border border-white/10 hover:border-transparent"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-violet-400 rounded-full" />
                <span>Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-violet-400 rounded-full" />
                <span>Home &amp; Online Tuition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
