import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────────────────
   PRIMARY NAVIGATION (approved header redesign)

     Find a Tutor · Online Tutor · Home Tutor · Subjects ▾ ·
     For Parent ▾ · For Student ▾ · Become a Tutor · [Book a Free Assessment]

     Label rule (booklet voice): "Find a Tutor" always means the browse page
     at /find-a-tutor. The header CTA reads "Book a Free Assessment" and
     /book-free-assessment. Same words as the booklet, no ambiguity.

   Decisions baked in:
   • Subjects (option S1) — no /subjects pages exist and the API only returns
     subjects for a given class+board, so each subject deep-links into the
     enquiry form prefilled (?subject=…) instead of a page that would be thin.
   • For Parent/Student (option P1) — points only at pages that already exist.
     /for-parents stays retired (it redirects to /home-tuition).
   • The phone number was removed from this bar: it is already shown in the
     TopInfoBar directly above, in the sticky mobile bar, and in the footer.
     Removing the duplicate is what makes six items fit at 1280–1440px.
   • Desktop nav appears at xl (1280px+). Below that the burger menu is used —
     six items cannot fit honestly at 1024–1279 without shrinking the type.

   Accessibility: dropdowns open on hover AND keyboard focus, triggers are real
   buttons with aria-expanded, Escape closes any open menu.
───────────────────────────────────────────────────────────────────────── */

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href?: string;
  subMenu?: SubMenuItem[];
}

/** Real subjects taught (mirrors the homepage Subjects section). */
const SUBJECTS = [
  'Mathematics',
  'Science',
  'English',
  'Physics',
  'Chemistry',
  'Biology',
  'Hindi & Marathi',
  'Olympiads',
  'JEE',
  'NEET',
];

const MENU_ITEMS: MenuItem[] = [
  { title: 'Find a Tutor', href: '/find-a-tutor' },
  { title: 'Online Tutor', href: '/online-tuition' },
  { title: 'Home Tutor', href: '/home-tuition' },
  {
    title: 'Subjects',
    subMenu: SUBJECTS.map((s) => ({
      title: s,
      href: `/book-free-assessment?subject=${encodeURIComponent(s)}`,
    })),
  },
  {
    title: 'For Parent',
    subMenu: [
      { title: 'How It Works', href: '/how-it-work' },
      { title: 'Meet Our Tutors', href: '/find-a-tutor' },
      { title: 'FAQs', href: '/#faq' },
      { title: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'For Student',
    subMenu: [
      { title: 'Find a Tutor', href: '/find-a-tutor' },
      { title: 'Study Material', href: '/study-material' },
      { title: 'How It Works', href: '/how-it-work' },
      { title: 'Contact Us', href: '/contact-us' },
    ],
  },
  { title: 'Become a Tutor', href: '/apply-tutor' },
];

export function Navbar() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    setOpenDesktopMenu(null);
  }, [pathname]);

  // Escape closes any open menu and returns focus to the header
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openDesktopMenu || isMobileMenuOpen) {
        setOpenDesktopMenu(null);
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
        (document.activeElement as HTMLElement | null)?.blur();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openDesktopMenu, isMobileMenuOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;

    const [beforeHash, hashId] = href.split('#');
    const path = beforeHash.split('?')[0];

    /* Anchor links such as "/#faq" resolve to the "/" path, which used to make
       every menu containing one light up on the home page. An anchor counts as
       active only when that section is the one actually open. */
    if (hashId) {
      const base = !path || path === '/' ? '/' : path;
      return pathname === base && hash === `#${hashId}`;
    }

    if (!path || path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      aria-label="Main navigation"
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-0 bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-[0_10px_40px_rgba(30,27,58,0.06)]'
          : 'top-11 bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* 68px mobile / 80px desktop */}
        <div className="flex items-center justify-between h-[68px] xl:h-20 gap-4">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 select-none flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] focus-visible:ring-offset-2"
            aria-label="Tutoo Learning — Home"
          >
            <img
              src="/tutoo_assets/png/logo_icon.png"
              alt=""
              className="h-10 xl:h-12 w-auto object-contain"
            />
            {/* Wordmark hides on very small screens, and again between 1280 and
                1535px where seven nav items plus the CTA need the room. It
                returns at 2xl. The logo icon always stays. */}
            <span className="hidden sm:flex xl:hidden 2xl:flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-[#1E1B3A]">
                Tutoo Learning
              </span>
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#6E6A85] font-semibold mt-1">
                Home &amp; Online Tuition
              </span>
            </span>
          </Link>

          {/* ── Desktop nav (1280px+) ── */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.subMenu && setOpenDesktopMenu(item.title)}
                onMouseLeave={() => item.subMenu && setOpenDesktopMenu(null)}
              >
                {item.subMenu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDesktopMenu === item.title}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDesktopMenu(
                          openDesktopMenu === item.title ? null : item.title
                        )
                      }
                      className={`flex items-center gap-1 text-[15px] font-medium py-[27px] whitespace-nowrap transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] focus-visible:ring-offset-2 ${
                        item.subMenu.some((s) => isActive(s.href))
                          ? 'text-[#6D28D9]'
                          : 'text-[#1E1B3A] hover:text-[#6D28D9]'
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDesktopMenu === item.title ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Opens on hover, click, or keyboard focus */}
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 ${
                        openDesktopMenu === item.title
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible'
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl shadow-[0_8px_24px_rgba(30,27,58,0.10)] border border-[#E6E3F0] p-2 ${
                          item.title === 'Subjects'
                            ? 'w-[420px] grid grid-cols-2 gap-0.5'
                            : 'w-60'
                        }`}
                      >
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] ${
                              isActive(subItem.href) && item.title !== 'Subjects'
                                ? 'text-[#6D28D9] bg-[#F4EFFE]'
                                : 'text-[#4B4763] hover:bg-[#F6F3FC] hover:text-[#6D28D9]'
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    /* py-[27px] + 2px border = exactly the 80px header height,
                       so the active underline sits on the header's bottom edge
                       instead of floating below it. */
                    className={`block text-[15px] font-medium py-[27px] whitespace-nowrap transition-colors border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] focus-visible:ring-offset-2 ${
                      isActive(item.href)
                        ? 'text-[#6D28D9] border-[#7B2FF7]'
                        : 'text-[#1E1B3A] border-transparent hover:text-[#6D28D9]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* ── Primary CTA (desktop) ── */}
          <div className="hidden xl:block flex-shrink-0">
            <button
              type="button"
              onClick={() => navigate('/book-free-assessment')}
              className="px-5 2xl:px-6 py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl transition-colors duration-200 font-semibold text-[15px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] focus-visible:ring-offset-2"
            >
              Book a Free Assessment
            </button>
          </div>

          {/* ── Mobile / tablet: burger only.
                The CTA lives in the sticky bottom bar so there is exactly one
                primary action on screen at a time. ── */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className="xl:hidden w-12 h-12 flex items-center justify-center rounded-xl border border-[#E6E3F0] bg-white flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] focus-visible:ring-offset-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1E1B3A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1E1B3A]" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="xl:hidden bg-white border-t border-[#EFEDF6] shadow-xl max-h-[78vh] overflow-y-auto"
        >
          <div className="p-5">
            {MENU_ITEMS.map((item) => (
              <div key={item.title} className="border-b border-[#EFEDF6]">
                {item.subMenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.title ? null : item.title
                        )
                      }
                      aria-expanded={openMobileDropdown === item.title}
                      className="w-full min-h-[48px] flex items-center justify-between py-3 text-[16px] font-semibold text-[#1E1B3A]"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openMobileDropdown === item.title ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {openMobileDropdown === item.title && (
                      <div
                        className={`pb-3 ${
                          item.title === 'Subjects' ? 'grid grid-cols-2 gap-x-3' : 'pl-3'
                        }`}
                      >
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="flex items-center min-h-[44px] py-2 text-[15px] text-[#4B4763]"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="flex items-center min-h-[48px] py-3 text-[16px] font-semibold text-[#1E1B3A]"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                navigate('/book-free-assessment');
                setIsMobileMenuOpen(false);
              }}
              className="mt-5 w-full min-h-[52px] rounded-xl text-white font-semibold text-[16px] bg-[#EA580C] active:bg-[#C2410C]"
            >
              Book a Free Assessment
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
