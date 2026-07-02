import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const menuItems = [
    {
      title: 'For Parents',
      href: '/for-parents',
    },

    {
      title: 'For Tutors',
      href: '/for-tutors',
    },

    {
      title: 'Boards & Classes',
      megaMenu: true,
    },

    {
      title: 'About Program',
      subMenu: [
        {
          title: 'About Tutoo',
          href: '/about-tutoo'
        },
        {
          title: 'Our Mission',
          href: '/our-mission',
        },

        {
          title: 'How It Works',
          href: '/how-it-work',
        },
        {
          title: 'Contact Us',
          href: '/contact-us',
        },
      ],
    },

    {
      title: 'Resources',

      subMenu: [
        {
          title: 'Blogs',
          href: '/blogs',
        },

        {
          title: 'Study Material',
          href: '/study-material',
        },
      ],
    },
  ];


  const boardData = [

    /* ─────────────────────────────────────────────
       CBSE BOARD
    ───────────────────────────────────────────── */

    {
      board: 'CBSE Board',
      icon: '📘',

      categories: [

        {
          category: 'Primary School',

          classes: [
            'Class 1',
            'Class 2',
            'Class 3',
            'Class 4',
            'Class 5',
          ],
        },

        {
          category: 'Middle School',

          classes: [
            'Class 6',
            'Class 7',
            'Class 8',
          ],
        },

        {
          category: 'Secondary',

          classes: [
            'Class 9',
            'Class 10',
          ],
        },

        {
          category: 'Senior Secondary',

          classes: [
            'Class 11 Science',
            'Class 11 Commerce',
            'Class 11 Arts',
            'Class 12 Science',
            'Class 12 Commerce',
            'Class 12 Arts',
          ],
        },
      ],
    },

    /* ─────────────────────────────────────────────
       ICSE BOARD
    ───────────────────────────────────────────── */

    {
      board: 'ICSE Board',
      icon: '🏫',

      categories: [

        {
          category: 'Primary School',

          classes: [
            'Class 1',
            'Class 2',
            'Class 3',
            'Class 4',
            'Class 5',
          ],
        },

        {
          category: 'Middle School',

          classes: [
            'Class 6',
            'Class 7',
            'Class 8',
          ],
        },

        {
          category: 'Secondary',

          classes: [
            'Class 9',
            'Class 10',
          ],
        },

        {
          category: 'Senior Secondary',

          classes: [
            'Class 11 Science',
            'Class 11 Commerce',
            'Class 11 Arts',
            'Class 12 Science',
            'Class 12 Commerce',
            'Class 12 Arts',
          ],
        },
      ],
    },

    /* ─────────────────────────────────────────────
       MAHARASHTRA BOARD
    ───────────────────────────────────────────── */

    {
      board: 'SSC',
      icon: '📚',

      categories: [

        {
          category: 'Primary School',

          classes: [
            'Class 1',
            'Class 2',
            'Class 3',
            'Class 4',
            'Class 5',
          ],
        },

        {
          category: 'Middle School',

          classes: [
            'Class 6',
            'Class 7',
            'Class 8',
          ],
        },

        {
          category: 'Secondary',

          classes: [
            'Class 9',
            'Class 10',
          ],
        },

        {
          category: 'Senior Secondary',

          classes: [
            'Class 11 Science',
            'Class 11 Commerce',
            'Class 11 Arts',
            'Class 12 Science',
            'Class 12 Commerce',
            'Class 12 Arts',
          ],
        },
      ],
    },

    /* ─────────────────────────────────────────────
       COMPETITIVE EXAMS
    ───────────────────────────────────────────── */

    {
      board: 'Competitive Exams',
      icon: '🎯',

      categories: [

        {
          category: 'Entrance Exams',

          classes: [
            'JEE',
            'NEET',
            'CET',
          ],
        },
      ],
    },

    /* ─────────────────────────────────────────────
       SKILL-BASED LEARNING
    ───────────────────────────────────────────── */

    // {
    //   board: 'Skill-Based Learning',
    //   icon: '💻',

    //   categories: [

    //     {
    //       category: 'Professional Skills',

    //       classes: [
    //         'Coding',
    //         'Spoken English',
    //         'Vedic Maths',
    //       ],
    //     },
    //   ],
    // },
  ];


  const [activeBoard, setActiveBoard] = useState(boardData[0]);
  // const [activeClass, setActiveClass] = useState(
  //   boardData[0].classes[0]
  // );
  const [openBoard, setOpenBoard] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const createSlug = (text: any) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
      fixed
      left-0
      right-0
      z-50
      transition-all
      duration-500
      ease-out

      ${isScrolled
          ? `
          top-0
          bg-white/80
          backdrop-blur-2xl
          border-b
          border-black/5
          shadow-[0_10px_40px_rgba(15,23,42,0.06)]
          `
          : `
          top-11
          bg-transparent
          `
        }
      `}

    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="
            flex
            items-center
            gap-3
            cursor-pointer
            select-none
            "
          >

            {/* Logo Image */}
            <div className="relative">

              <img
                src="/images/web-icon.png"
                alt="Tutoo Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* Brand Name */}
            <div className="flex flex-col leading-none">

              <span
                className="text-2xl font-black tracking-tight text-[#0B1220]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Tutoo
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#64748B] font-semibold mt-1">
                Smart Learning Platform
              </span>
            </div>
          </div>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            {menuItems.map((item, index) => (

              <div
                key={index}
                className="relative group"
              >

                {/* Main Menu Item */}
                <a
                  href={item.href || '#'}
                  className="flex items-center gap-1 text-[15px] font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors duration-200 py-8"
                >
                  {item.title}

                  {(item.megaMenu || item.subMenu) && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {/* -------------------------------------------------------------------------- */}
                {/*                        BOARDS & CLASSES DROPDOWN                           */}
                {/* -------------------------------------------------------------------------- */}

                {item.megaMenu && (

                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                    <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-3">

                      {boardData.map((board) => (

                        <div
                          key={board.board}
                          className="relative group/submenu"
                        >

                          {/* Board */}
                          <button className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-200">

                            <div className="flex items-center gap-3">
                              {/* <span className="text-lg">
                                {board.icon}
                              </span> */}

                              <span>
                                {board.board}
                              </span>
                            </div>

                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          {/* Classes Dropdown */}
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">

                            <div className="w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-3">

                              {board.categories.map((cls) => (

                                <div
                                  key={cls.category}
                                  className="relative group/classmenu"
                                >

                                  {/* Class */}
                                  <button className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-200">

                                    <span>
                                      {cls.category}
                                    </span>

                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </button>

                                  {/* Subjects */}
                                  <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/classmenu:opacity-100 group-hover/classmenu:visible transition-all duration-200">

                                    <div className="w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 max-h-[420px] overflow-y-auto">

                                      {cls.classes.map((classes) => (

                                        <a
                                          key={classes}
                                          href={`/${createSlug(board.board)}/${createSlug(
                                            cls.category
                                          )}/${createSlug(classes)}`}
                                          className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                                        >
                                          {classes}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------------------- */}
                {/*                              SIMPLE SUBMENU                                */}
                {/* -------------------------------------------------------------------------- */}

                {item.subMenu && (

                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                    <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 overflow-hidden">

                      {item.subMenu.map((subItem) => (

                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors duration-200"
                        >

                          {/* Icon */}
                          {/* <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-lg">
                            {subItem.icon}
                          </div> */}

                          {/* Content */}
                          <div className="flex-1">

                            <p className="text-sm font-semibold text-slate-800">
                              {subItem.title}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-auto">
            <button
              onClick={() => navigate('/book-free-assessment')}
              className="px-6 py-3 bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 font-medium">
              Book Free Assessment
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="
              lg:hidden
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
            "
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0F172A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0F172A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="
      lg:hidden
      bg-white
      border-t
      border-slate-100
      shadow-xl
      max-h-[85vh]
      overflow-y-auto
    "
        >

          <div className="p-5">

            {menuItems.map((item) => (

              <div
                key={item.title}
                className="border-b border-slate-100"
              >

                {/* NORMAL LINK */}
                {!item.megaMenu && !item.subMenu && (

                  <a
                    href={item.href}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="
                flex
                items-center
                justify-between
                py-4
                text-[15px]
                font-semibold
                text-[#0F172A]
              "
                  >
                    {item.title}
                  </a>
                )}

                {/* SUBMENU */}
                {item.subMenu && (

                  <>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.title
                            ? null
                            : item.title
                        )
                      }
                      className="
                  w-full
                  flex
                  items-center
                  justify-between
                  py-4
                  text-[15px]
                  font-semibold
                  text-[#0F172A]
                "
                    >
                      {item.title}

                      <ChevronDown
                        className={`
                    w-4 h-4
                    transition-transform
                    duration-300
                    ${openMobileDropdown === item.title
                            ? "rotate-180"
                            : ""
                          }
                  `}
                      />
                    </button>

                    {openMobileDropdown === item.title && (

                      <div className="pb-3 pl-4">

                        {item.subMenu.map((subItem) => (

                          <a
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() =>
                              setIsMobileMenuOpen(false)
                            }
                            className="
                        flex
                        items-center
                        py-3
                        text-sm
                        text-slate-600
                      "
                          >
                            {subItem.title}
                          </a>
                        ))}

                      </div>
                    )}
                  </>
                )}

                {/* BOARDS & CLASSES */}
                {item.megaMenu && (

                  <>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.title
                            ? null
                            : item.title
                        )
                      }
                      className="
                  w-full
                  flex
                  items-center
                  justify-between
                  py-4
                  text-[15px]
                  font-semibold
                  text-[#0F172A]
                "
                    >
                      {item.title}

                      <ChevronDown
                        className={`
                    w-4 h-4
                    transition-transform
                    duration-300
                    ${openMobileDropdown === item.title
                            ? "rotate-180"
                            : ""
                          }
                  `}
                      />
                    </button>

                    {openMobileDropdown === item.title && (

                      <div className="pb-4">

                        {boardData.map((board) => (

                          <div
                            key={board.board}
                            className="
                        mb-3
                        rounded-2xl
                        border
                        border-slate-200
                        overflow-hidden
                      "
                          >

                            {/* BOARD */}
                            <button
                              onClick={() =>
                                setOpenBoard(
                                  openBoard === board.board
                                    ? null
                                    : board.board
                                )
                              }
                              className="
                          w-full
                          flex
                          items-center
                          justify-between
                          p-4
                          bg-slate-50
                        "
                            >
                              <span className="font-semibold">
                                {board.board}
                              </span>

                              <ChevronDown
                                className={`
                            w-4 h-4
                            transition-transform
                            ${openBoard === board.board
                                    ? "rotate-180"
                                    : ""
                                  }
                          `}
                              />
                            </button>

                            {/* CATEGORIES */}
                            {openBoard === board.board && (

                              <div className="bg-white">

                                {board.categories.map((category) => {

                                  const categoryKey =
                                    `${board.board}-${category.category}`;

                                  return (

                                    <div
                                      key={category.category}
                                      className="border-t border-slate-100"
                                    >

                                      <button
                                        onClick={() =>
                                          setOpenCategory(
                                            openCategory === categoryKey
                                              ? null
                                              : categoryKey
                                          )
                                        }
                                        className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                  "
                                      >
                                        <span className="text-sm">
                                          {category.category}
                                        </span>

                                        <ChevronRight
                                          className={`
                                      w-4 h-4
                                      transition-transform
                                      ${openCategory === categoryKey
                                              ? "rotate-90"
                                              : ""
                                            }
                                    `}
                                        />
                                      </button>

                                      {openCategory === categoryKey && (

                                        <div className="px-4 pb-3">

                                          {category.classes.map((cls) => (

                                            <a
                                              key={cls}
                                              href={`/${createSlug(board.board)}/${createSlug(category.category)}/${createSlug(cls)}`}
                                              onClick={() =>
                                                setIsMobileMenuOpen(false)
                                              }
                                              className="
                                          flex
                                          items-center
                                          justify-between
                                          py-2
                                          text-sm
                                          text-slate-600
                                        "
                                            >
                                              {cls}

                                              <ArrowRight className="w-3 h-3" />
                                            </a>
                                          ))}

                                        </div>
                                      )}

                                    </div>
                                  );
                                })}

                              </div>
                            )}

                          </div>
                        ))}

                      </div>
                    )}
                  </>
                )}

              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => {
                navigate("/book-free-assessment");
                setIsMobileMenuOpen(false);
              }}
              className="
          mt-5
          w-full
          py-4
          rounded-2xl
          text-white
          font-semibold
          bg-gradient-to-r
          from-[#16C47F]
          to-[#2563EB]
        "
            >
              Book Free Assessment
            </button>

          </div>

        </motion.div>
      )}
    </motion.nav>
  );
}
