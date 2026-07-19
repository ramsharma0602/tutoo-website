import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Team', 'Careers', 'Blog'],
    // Parents: ['How It Works', 'Pricing', 'Success Stories', 'Parent Dashboard', 'FAQ', 'Contact Support'],
    // Tutors: ['Become a Tutor', 'Tutor Requirements', 'Tutor Training', 'Benefits', 'Tutor Dashboard', 'Resources'],
    // Programs: ['Home Tuition', 'Online Learning', 'JEE/NEET', 'Olympiads', 'Coding & AI', 'All Programs'],
    Legal: ['Privacy Policy', 'Terms of Service']
  };

  // Maps footer link labels to real in-app routes. Links not listed here
  // stay as plain "#" placeholders until those pages exist.
  const linkRoutes: Record<string, string> = {
    Blog: '/blogs',
    Careers: '/careers',
    Team: '/team',
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
    <footer className="bg-[#0B1220] text-white pt-20 pb-10">
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
                <span className="text-xl font-black tracking-tight text-white">
                  Tutoo Learning
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mt-1">
                  Smart Learning Platform
                </span>
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              India's First AI-Powered Learning Operating System. Transforming education through technology, verified tutors, and measurable outcomes.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@tutoolearning.com" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@tutoolearning.com</span>
              </a>
              <a href="tel:+918446146039" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 8446146039</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
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
                          className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
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
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-600 transition-all duration-300 border border-white/10 hover:border-transparent"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Data Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
