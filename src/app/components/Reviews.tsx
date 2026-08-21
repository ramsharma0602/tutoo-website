import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './common/SectionHeading';
import { parentTestimonials, type Testimonial } from '../data/testimonials';
import { DEMO_REVIEWS, USE_DEMO_REVIEWS } from '../data/reviewsDemo';

/* ─────────────────────────────────────────────────────────────────────────
   REVIEWS — an auto-advancing carousel that is still a real scroller

   The track is a native horizontally scrolling flex row with CSS scroll
   snapping, NOT a transform-based slider. That matters: swipe on a phone,
   trackpad scroll, and keyboard tabbing all work for free and behave the way
   the OS expects. The autoplay timer simply calls scrollTo on the same
   element, so manual and automatic movement can never disagree about where
   the track is.

   Autoplay pauses on hover, on touch, and whenever focus enters the track —
   otherwise it would yank a card away from someone mid-sentence, or from a
   keyboard user tabbing through. It does not run at all for visitors who ask
   for reduced motion.

   ── DATA ────────────────────────────────────────────────────────────────
   Real, consented quotes in `data/testimonials.ts` are always preferred.
   While that list is empty this falls back to `DEMO_REVIEWS`, which is
   invented placeholder copy behind the `USE_DEMO_REVIEWS` switch.

   ⚠️  Fabricated reviews are a legal exposure in India, not just a trust
   problem — see the header of `data/reviewsDemo.ts`. Turn that switch off
   before launch. With both lists empty this section removes itself.

   No AggregateRating structured data is emitted here on purpose, so no star
   average from placeholder content can ever reach search results.
───────────────────────────────────────────────────────────────────────── */

const AUTOPLAY_MS = 4500;

/* Rotating tints so adjacent cards never look the same */
const TINTS = [
  { bg: '#F4EFFE', fg: '#6D28D9' },
  { bg: '#FFF1E7', fg: '#EA580C' },
  { bg: '#E9F3FF', fg: '#2563EB' },
  { bg: '#EAF7EF', fg: '#0F9D58' },
  { bg: '#FDF0F6', fg: '#DB2777' },
  { bg: '#F1EEFB', fg: '#5B21B6' },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

/** True when the visitor has asked their OS to reduce motion. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function Reviews() {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reviews: Testimonial[] = parentTestimonials.length
    ? parentTestimonials
    : USE_DEMO_REVIEWS
      ? DEMO_REVIEWS
      : [];

  /* One card plus one gap — measured from the DOM rather than hard-coded,
     because the card width changes at every breakpoint. */
  const stepSize = useCallback(() => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    return first.offsetWidth + gap;
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const el = trackRef.current;
      const step = stepSize();
      if (!el || !step) return;
      const limit = el.scrollWidth - el.clientWidth;
      el.scrollTo({
        left: Math.max(0, Math.min(i * step, limit)),
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    },
    [stepSize, reduceMotion]
  );

  /* Step from `index`, not from a fresh scrollLeft read. scrollLeft is
     mid-flight during a smooth scroll, so reading it here could skip a card;
     `index` only updates once the track has settled. Both wrap around. */
  const next = useCallback(() => {
    goTo(index >= maxIndex ? 0 : index + 1);
  }, [goTo, index, maxIndex]);

  const prev = useCallback(() => {
    goTo(index <= 0 ? maxIndex : index - 1);
  }, [goTo, index, maxIndex]);

  /* How many distinct scroll positions exist at this breakpoint. Three cards
     are visible on desktop, so six reviews give four stops — not six. Dots
     are drawn from this, otherwise the last dots would never activate. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const step = stepSize();
      setMaxIndex(step ? Math.max(0, Math.round((el.scrollWidth - el.clientWidth) / step)) : 0);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stepSize, reviews.length]);

  /* Keep the dots in step with wherever the track actually is, including
     after a manual swipe. rAF-throttled — scroll fires a lot. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const step = stepSize();
        if (step) setIndex(Math.round(el.scrollLeft / step));
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [stepSize]);

  /* Autoplay. Off entirely for reduced-motion, and whenever the visitor is
     interacting with the track. */
  useEffect(() => {
    if (paused || reduceMotion || reviews.length < 2) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, next, reviews.length]);

  /* Stop the timer while the tab is hidden, so a backgrounded page does not
     come back having silently scrolled to the end. */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  if (!reviews.length) return null;

  const arrowClass =
    'w-11 h-11 rounded-full bg-white ring-1 ring-[#E6E3F0] shadow-[0_6px_18px_rgba(30,27,58,0.10)] flex items-center justify-center text-[#1E1B3A] hover:ring-[#7B2FF7]/40 hover:text-[#6D28D9] transition-colors';

  return (
    <section className="relative py-16 lg:py-24 bg-[#FAFAFC] border-y border-[#F1EFF7] overflow-hidden">
      <Quote
        className="hidden lg:block absolute top-16 left-[6%] w-56 h-56 text-[#7B2FF7] opacity-[0.05] rotate-180"
        strokeWidth={1}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 right-[4%] w-[32rem] h-[32rem] rounded-full opacity-60"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.10) 0%, transparent 68%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reviews"
            title="What families say about Tutoo"
            lead="Parents in Kothrud, Kolhapur and online — in their own words."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="What families say about Tutoo"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          {/* ── TRACK ──
              Native scroller: swipe, trackpad and keyboard all work as the OS
              intends. px matches the page gutter so the first card lines up
              with the heading above it. */}
          <div
            ref={trackRef}
            /* scroll-pl matches px, so a snapped card lands ON the gutter
               rather than being pulled flush to the container edge */
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-8 scroll-pl-6 lg:scroll-pl-8 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r, i) => {
              const tint = TINTS[i % TINTS.length];

              return (
                <figure
                  key={`${r.name}-${i}`}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${reviews.length}`}
                  className="group snap-start shrink-0 basis-[86%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-16px)] flex flex-col bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)] hover:shadow-[0_20px_46px_rgba(30,27,58,0.12)] hover:ring-[#7B2FF7]/25 transition-all duration-300 p-6 lg:p-7"
                >
                  <Quote
                    className="w-7 h-7 mb-4 rotate-180 shrink-0"
                    style={{ color: tint.fg }}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  {/* Stars render only when that parent actually gave a rating */}
                  {typeof r.rating === 'number' && (
                    <div className="flex items-center gap-0.5 mb-3" aria-label={`${r.rating} out of 5`}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s < r.rating! ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#E3DFF2]'
                          }`}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  )}

                  <blockquote className="text-[15px] leading-relaxed text-[#4B4763] flex-1">
                    {r.quote}
                  </blockquote>

                  <figcaption className="mt-6 pt-5 border-t border-[#F4F2FA] flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0"
                      style={{ background: tint.bg, color: tint.fg }}
                      aria-hidden="true"
                    >
                      {initials(r.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold text-[#1E1B3A]">
                        {r.name}
                      </span>
                      <span className="block text-[13px] leading-snug text-[#6E6A85]">
                        {r.role} · {r.location}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* ── CONTROLS ──
              Dots always; arrows only where there is gutter room for them. */}
          <div className="mt-6 flex items-center justify-center gap-5 px-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className={`hidden sm:flex ${arrowClass}`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => {
                const active = i === Math.min(index, maxIndex);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={active}
                    /* py-4 gives the dot a 40px tall hit area without making
                       the dot itself bigger — an 8px tap target fails on a
                       phone even though it looks right on a desktop. */
                    className="group/dot py-4 px-2.5 flex items-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        active
                          ? 'w-7 bg-[#7B2FF7]'
                          : 'w-2 bg-[#DDD6EE] group-hover/dot:bg-[#BFB3E8]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className={`hidden sm:flex ${arrowClass}`}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
            </button>
          </div>
        </motion.div>

        <div className="mt-8 lg:mt-10 text-center px-6">
          <button
            type="button"
            onClick={() => navigate('/book-free-assessment')}
            /* py-2: a bare text button measured 270x20, under the WCAG 2.5.8 24px minimum */
            className="group inline-flex items-center gap-2.5 py-2 text-[15px] font-bold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
          >
            Start with a free assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
