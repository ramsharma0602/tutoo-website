/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SHARED SURFACE AND CONTROL TOKENS
 * ─────────────────────────────────────────────────────────────────────────
 *  An audit of the site found twelve different card recipes and eight
 *  different primary-button recipes — `rounded-2xl border border-[#E6E3F0]`
 *  in the older pages, `rounded-[22px] ring-1 ring-[#EFEDF6]` in the newer
 *  ones, and several one-offs in between. Two rounding radii and two border
 *  treatments on one page is what made /online-tuition read as a different
 *  site from the homepage.
 *
 *  These are the canonical strings. Compose them with `cx()` and add only
 *  layout classes (padding, grid position) at the call site.
 *
 *  RULE: if you find yourself writing a new `rounded-… ring-…` combination,
 *  add a token here instead. A one-off is how the drift started.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Join class strings, dropping falsy values. */
export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

/* ── Surfaces ─────────────────────────────────────────────────────────── */

/** The standard white card. Everything on a tinted section sits on this. */
export const card =
  'bg-white rounded-[22px] ring-1 ring-[#EFEDF6] shadow-[0_8px_28px_rgba(30,27,58,0.06)]';

/** Adds the lift + violet ring on hover. Use for cards that are clickable
 *  or that contain the page's next action. Never on a purely static card —
 *  a lift that leads nowhere reads as a broken link. */
export const cardHover =
  'hover:shadow-[0_20px_46px_rgba(30,27,58,0.12)] hover:-translate-y-1.5 hover:ring-[#7B2FF7]/25 transition-all duration-300';

/** Larger panel — the coverage selector, the hero boundary card. */
export const panel =
  'bg-white rounded-[26px] ring-1 ring-[#EFEDF6] shadow-[0_14px_44px_rgba(30,27,58,0.08)]';

/** Glass card for the dark navy safety bands. */
export const cardOnDark =
  'rounded-[22px] bg-white/[0.055] ring-1 ring-white/10 backdrop-blur hover:bg-white/[0.085] transition-colors duration-300';

/* ── Section rhythm ───────────────────────────────────────────────────── */

export const section = 'py-16 lg:py-24';
export const container = 'max-w-7xl mx-auto px-6 lg:px-8';
/** Tinted section — alternate with plain `bg-white` down the page. */
export const sectionTinted = 'bg-[#FAFAFC] border-y border-[#F1EFF7]';

/* ── Controls ─────────────────────────────────────────────────────────── */

/* No `whitespace-nowrap` here on purpose: baking it into the base made every
   long-labelled button unshrinkable, and "Book a Free Assessment" pushed 31px
   past a 320px viewport. Add it at the call site when the label is short and
   you know there is room. */
const buttonBase =
  'group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-colors';

/** Orange. The page's single most important action. One per view. */
export const buttonPrimary = cx(
  buttonBase,
  'bg-gradient-to-r from-[#F2660F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C]',
  'text-white shadow-[0_12px_30px_rgba(234,88,12,0.28)]'
);

/** White with a ring. The alternative route — never competing with primary. */
export const buttonSecondary = cx(
  buttonBase,
  'bg-white ring-[1.5px] ring-[#E6E3F0] hover:ring-[#7B2FF7]/50 text-[#1E1B3A]'
);

/** Navy. Navigational rather than converting — "browse all", "view all". */
export const buttonDark = cx(
  buttonBase,
  'bg-[#1E1B3A] hover:bg-[#2A2550] text-white'
);

/* Sizes, kept separate so any button can be any size. */
export const buttonLg = 'px-8 h-14 text-[17px]';
export const buttonMd = 'px-7 h-13 py-3.5 text-[15px]';
export const buttonSm = 'px-5 h-11 text-[14px]';

/* ── Text ─────────────────────────────────────────────────────────────── */

export const ink = {
  heading: 'text-[#1E1B3A]',
  body: 'text-[#4B4763]',
  meta: 'text-[#6E6A85]',
  violet: 'text-[#6D28D9]',
  orange: 'text-[#EA580C]',
};
