import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ChevronDown,
  Menu,
  X,
  Route,
  ShieldCheck,
  Receipt,
  HelpCircle,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SUBJECTS, BOARDS } from '../data/subjects';

/* ─────────────────────────────────────────────────────────────────────────
   PRIMARY NAVIGATION (approved header redesign)

     Find a Tutor · Online Tutor · Home Tutor · Subjects ▾ ·
     For Parents ▾ · For Tutors ▾ · [Book a Free Assessment]

     Label rule (booklet voice): "Find a Tutor" always means the browse page
     at /find-a-tutor. The header CTA reads "Book a Free Assessment" and
     /book-free-assessment. Same words as the booklet, no ambiguity.

   Decisions baked in:
   • Subjects (option S1) — no /subjects pages exist and the API only returns
     subjects for a given class+board, so each subject deep-links into the
     enquiry form prefilled (?subject=…) instead of a page that would be thin.
   • For Parents — one audience menu, not two. It is a rich menu: a featured
     card for /for-parents, then six links that each carry an icon and a line
     of description, because a bare list of four words gives a parent no reason
     to prefer one over another. /for-parents, /safety and /fees are real pages
     built for this menu; /for-parents is a rebuild, not the retired page.
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
  /** Shown under the title in a rich or grouped dropdown. */
  desc?: string;
  icon?: LucideIcon;
}

/** One labelled column inside a mega-menu. */
interface MenuGroup {
  label: string;
  items: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href?: string;
  /** A flat list — rendered as a single column. */
  subMenu?: SubMenuItem[];
  /** Labelled columns, side by side. Used by Subjects, where a flat list of
   *  ten items mixed school subjects with entrance exams and gave the reader
   *  no way to tell which was which. */
  groups?: MenuGroup[];
  /** The card at the head of a rich dropdown — the menu's own landing page.
   *  Without it, "For Parents ▾" is a label that leads nowhere. */
  featured?: { title: string; desc: string; href: string };
}

/* Subjects and boards come from data/subjects.ts — the same lists the
   /find-a-tutor filters match against, and the same ones the homepage and both
   service pages render. The header used to keep its own copy, which had
   already drifted: it listed "JEE" and "NEET" as subjects, but no tutor
   carries either as a subject (JEE/NEET is a class band), so both links were
   dead ends waiting to happen. */

const MENU_ITEMS: MenuItem[] = [
  { title: 'Find a Tutor', href: '/find-a-tutor' },
  { title: 'Online Tutor', href: '/online-tuition' },
  { title: 'Home Tutor', href: '/home-tuition' },
  {
    /* ── SUBJECTS ─────────────────────────────────────────────────────────
       Two labelled columns, side by side: what you teach, and which board or
       exam you teach it for. Previously one 420px box held ten identical text
       links in two unlabelled columns — the reader could not tell that the
       last two were exams rather than subjects.

       Every link now goes to /find-a-tutor, not the enquiry form. When this
       menu was built the subject filter was unused, so a subject could only
       prefill a form; CoverageSelector proved the filter works, and "Subjects"
       in a header means "show me tutors for this", not "fill in a form". */
    title: 'Subjects',
    groups: [
      {
        label: 'Subjects',
        items: SUBJECTS.map((sub) => ({
          title: sub.name,
          href: `/find-a-tutor?subject=${encodeURIComponent(sub.name)}`,
          icon: sub.icon,
        })),
      },
      {
        label: 'Boards & exams',
        items: BOARDS.map((b) => ({
          title: b.title,
          href: `/find-a-tutor?${b.filter.key}=${encodeURIComponent(b.filter.value)}`,
          desc: b.sub,
        })),
      },
    ],
  },
  {
    /* ── FOR PARENTS ──────────────────────────────────────────────────────
       This replaces two menus. "For Parent" and "For Student" previously
       shared three of their four entries — How It Works, Contact Us and
       Find a Tutor — and all three were already reachable from the top level,
       so between them the two dropdowns added exactly one new destination
       (Study Material). Two audience menus that are 75% the same list are not
       navigation; they are the sitemap, printed twice.

       Tutoo's buyer is the parent: the student neither chooses the tutor nor
       agrees the fee. So there is one audience menu, and every entry in it is
       somewhere the top-level nav does not already go. Study Material lives
       in the footer, where a resource link belongs. */
    title: 'For Parents',
    featured: {
      title: 'Parents’ guide',
      desc: 'What you decide, what we handle, and everything in one place.',
      href: '/for-parents',
    },
    subMenu: [
      {
        title: 'How It Works',
        href: '/how-it-work',
        desc: 'First message to first class',
        icon: Route,
      },
      {
        title: 'Safety & Verification',
        href: '/safety',
        desc: 'What we check before a tutor arrives',
        icon: ShieldCheck,
      },
      {
        title: 'FAQs',
        href: '/#faq',
        desc: 'The questions we are asked most',
        icon: HelpCircle,
      },
    ],
  },
  {
    /* ── FOR TUTORS ───────────────────────────────────────────────────────
       This was a single top-level "Become a Tutor" link straight to the
       application form, which meant /for-tutors — a whole page explaining why
       a tutor would work with Tutoo, what the training is and what support
       exists — was reachable only from the footer. A tutor deciding whether
       to apply needs to read before they fill in a form.

       So the menu leads with the page and keeps the application one click
       away. Item count stays the same in the header. */
    title: 'For Tutors',
    featured: {
      title: 'Teach with Tutoo',
      desc: 'How teaching with us works, and the support behind it.',
      href: '/for-tutors',
    },
    subMenu: [
      {
        title: 'Become a Tutor',
        href: '/apply-tutor',
        desc: 'Apply in a few minutes',
        icon: GraduationCap,
      },
      {
        title: 'Careers at Tutoo',
        href: '/careers',
        desc: 'Roles on our own team',
        icon: Briefcase,
      },
    ],
  },
];

/** A menu item opens a dropdown if it carries either shape. */
function hasMenu(item: MenuItem) {
  return Boolean(item.subMenu?.length || item.groups?.length);
}

/** Every destination inside a menu, for the trigger's active state. */
function menuHrefs(item: MenuItem): string[] {
  return [
    ...(item.featured ? [item.featured.href] : []),
    ...(item.subMenu ?? []).map((s) => s.href),
    ...(item.groups ?? []).flatMap((g) => g.items.map((i) => i.href)),
  ];
}

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
                onMouseEnter={() => hasMenu(item) && setOpenDesktopMenu(item.title)}
                onMouseLeave={() => hasMenu(item) && setOpenDesktopMenu(null)}
              >
                {hasMenu(item) ? (
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
                        menuHrefs(item).some((h) => isActive(h))
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
                        className={`bg-white rounded-2xl shadow-[0_18px_50px_rgba(30,27,58,0.14)] border border-[#E6E3F0] p-3 ${
                          item.groups ? 'w-[660px]' : item.featured ? 'w-[360px]' : 'w-60'
                        }`}
                      >
                        {/* ── Grouped columns (Subjects) ── */}
                        {item.groups && (
                          <div className="grid grid-cols-[1.4fr_1fr] gap-3">
                            {item.groups.map((group, gi) => (
                              <div
                                key={group.label}
                                className={gi > 0 ? 'pl-3 border-l border-[#F1EFF7]' : ''}
                              >
                                <p className="px-2 pb-2 text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#6D28D9]">
                                  {group.label}
                                </p>

                                <div className={gi === 0 ? 'grid grid-cols-2 gap-0.5' : 'space-y-0.5'}>
                                  {group.items.map((sub) => (
                                    <Link
                                      key={sub.title}
                                      to={sub.href}
                                      className="flex items-center gap-2.5 min-w-0 rounded-xl px-2.5 py-2 transition-colors hover:bg-[#F6F3FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7]"
                                    >
                                      {sub.icon && (
                                        <span className="w-7 h-7 rounded-lg bg-[#F4EFFE] flex items-center justify-center shrink-0">
                                          <sub.icon
                                            className="w-[15px] h-[15px] text-[#6D28D9]"
                                            strokeWidth={2}
                                            aria-hidden="true"
                                          />
                                        </span>
                                      )}
                                      <span className="min-w-0">
                                        <span className="block text-[13.5px] font-semibold text-[#1E1B3A] leading-tight">
                                          {sub.title}
                                        </span>
                                        {sub.desc && (
                                          <span className="block text-[12px] text-[#6E6A85] leading-snug">
                                            {sub.desc}
                                          </span>
                                        )}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* ── Featured card: the menu's own page ──
                            A dropdown whose trigger is not itself a link needs
                            somewhere to send the person who clicked the label
                            rather than an item. */}
                        {item.featured && (
                          <Link
                            to={item.featured.href}
                            className={`block rounded-xl p-4 mb-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] ${
                              isActive(item.featured.href)
                                ? 'bg-[#F4EFFE]'
                                : 'bg-[#FAFAFC] hover:bg-[#F4EFFE]'
                            }`}
                          >
                            <span className="flex items-center gap-1.5 text-[15px] font-bold text-[#1E1B3A]">
                              {item.featured.title}
                              <ChevronDown
                                className="w-4 h-4 -rotate-90 text-[#6D28D9]"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-relaxed text-[#6E6A85]">
                              {item.featured.desc}
                            </span>
                          </Link>
                        )}

                        {/* ── Flat list ── */}
                        {item.subMenu && (
                          <div className="space-y-0.5">
                            {item.subMenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className={`block rounded-xl px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] ${
                                  isActive(subItem.href)
                                    ? 'text-[#6D28D9] bg-[#F4EFFE]'
                                    : 'text-[#4B4763] hover:bg-[#F6F3FC] hover:text-[#6D28D9]'
                                }`}
                              >
                                {subItem.icon ? (
                                  <span className="flex items-start gap-2.5 min-w-0">
                                    <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#F4EFFE] flex items-center justify-center shrink-0">
                                      <subItem.icon
                                        className="w-[17px] h-[17px] text-[#6D28D9]"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block text-sm font-semibold text-[#1E1B3A] leading-tight">
                                        {subItem.title}
                                      </span>
                                      {subItem.desc && (
                                        <span className="mt-0.5 block text-[12.5px] leading-snug text-[#6E6A85]">
                                          {subItem.desc}
                                        </span>
                                      )}
                                    </span>
                                  </span>
                                ) : (
                                  <span className="text-sm font-medium">{subItem.title}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
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
                {hasMenu(item) ? (
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
                      <div className="pb-3 pl-3">
                        {/* The featured page first, styled as the primary
                            choice — same job as the card on desktop. */}
                        {item.featured && (
                          <Link
                            to={item.featured.href}
                            className="flex items-center justify-between gap-2 min-h-[48px] py-2.5 px-3 mb-2 rounded-xl bg-[#F4EFFE] text-[15px] font-bold text-[#1E1B3A]"
                          >
                            {item.featured.title}
                            <ChevronDown
                              className="w-4 h-4 -rotate-90 text-[#6D28D9] shrink-0"
                              aria-hidden="true"
                            />
                          </Link>
                        )}

                        {/* Grouped columns stack into labelled blocks on a
                            phone — two columns of eight subjects each at 375px
                            gives a 90px column, which is not a menu. */}
                        {item.groups?.map((group) => (
                          <div key={group.label} className="mb-2 last:mb-0">
                            <p className="pt-2 pb-1 text-[11.5px] font-bold uppercase tracking-[0.09em] text-[#6D28D9]">
                              {group.label}
                            </p>
                            <div className="grid grid-cols-2 gap-x-3">
                              {group.items.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.href}
                                  className="flex items-center gap-2 min-h-[44px] py-2 min-w-0 text-[14.5px] text-[#4B4763]"
                                >
                                  {sub.icon && (
                                    <span className="w-7 h-7 rounded-lg bg-[#F4EFFE] flex items-center justify-center shrink-0">
                                      <sub.icon
                                        className="w-4 h-4 text-[#6D28D9]"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                      />
                                    </span>
                                  )}
                                  <span className="min-w-0 break-words">{sub.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {item.subMenu?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="flex items-center gap-2.5 min-h-[44px] py-2 text-[15px] text-[#4B4763]"
                          >
                            {subItem.icon && (
                              <span className="w-7 h-7 rounded-lg bg-[#F4EFFE] flex items-center justify-center shrink-0">
                                <subItem.icon
                                  className="w-4 h-4 text-[#6D28D9]"
                                  strokeWidth={2}
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                            <span className="min-w-0">{subItem.title}</span>
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
