# Tutoo — Logo-Based Brand & Design System

**Prepared:** August 2026 · **Supersedes** §9 (Design System) of `docs/UX-REDESIGN-PLAN.md`. All UX/IA/roadmap recommendations in that document stand; this document replaces its color direction, because the logo — now the source of truth — is **orange + violet**, not the emerald/blue the site currently ships.

> **No code has been changed.** This is the analysis + proposed direction for your approval (your §24). The measured contrast ratios below are computed, not estimated.

---

## A. Logo Analysis (from the actual PNG pixels)

Assets inspected: `public/tutoo_assets/png/` — `logo_full.png`, `logo_icon.png`, `logo_dark.png`, `app_icon_light.png`, `monogram_dark.png`.

**What the logo is:** a violet "U" vessel holding two figures/leaves (community + growth), wearing an orange graduation cap with tassel (achievement + education), wordmark "Tut**oo**" with the "oo" in the violet gradient. The dark variant sits on a deep navy plate.

### Measured colors

| Element | Range in logo | Representative value | RGB | HSL |
|---|---|---|---|---|
| **Orange (cap)** — gradient | `#F86808` → `#F8A818` | **`#F87808`** (core) | 248, 120, 8 | 28°, 94%, 50% |
| **Violet (U + "oo")** — gradient | `#6038F8` (blue end) → `#8F21F8` (purple end) | **`#7B2FF7`** (midpoint) | 123, 47, 247 | 263°, 93%, 58% |
| **Dark plate** (logo_dark) | `#001028`–`#001030` | **`#0A1028`** | 10, 16, 40 | 226°, 60%, 10% |

Both brand hues sit at ~93–94% saturation — vivid, app-like, modern. That has a direct design consequence: **the interface must stay neutral so these two colors can afford to be loud.** At this saturation, a 60/25/15 white/violet/orange balance reads premium; a 30/40/30 balance reads like a toy.

### Color psychology & assigned roles

- **Orange** — energy, warmth, action, friendliness. **Role: the "do something" color.** CTAs, key highlights, the cap-tassel moments of the UI. 10–15% of any screen.
- **Violet/Indigo** — intelligence, trust, education, imagination (and rare among Indian tutoring competitors — strong differentiation). **Role: the "this is Tutoo" color.** Structure, headings accents, links, icons, active states. 15–25%.
- **Deep navy-ink** — the quiet authority backdrop (footer/dark sections), straight from `logo_dark`.

### Brand-fit verdict on the current site
The site today is emerald `#16C47F` + blue `#2563EB` with purple as a third accent — **the logo's orange appears nowhere in the UI.** Remove the logo and nothing on the page says "Tutoo." This retheme is therefore not a tweak; it's a token-level swap (fortunately `theme.css` makes that mechanically simple — see §I).

---

## B. Brand Color System (design tokens)

### BRAND

| Token | Hex | Notes / measured contrast |
|---|---|---|
| `--color-primary-orange` | **`#EA580C`** | Button fill. White text = **3.56:1** → passes WCAG AA for large/bold text (buttons ≥16 px semibold). Slightly deepened from the logo's `#F87808` (white on raw logo orange = 2.80:1 — fails; the logo can be vivid, UI must be usable). |
| `--color-primary-orange-hover` | `#C2410C` | White text = **5.18:1** (AA normal). |
| `--color-primary-orange-light` | `#FFF1E7` | Tint backgrounds, badges, icon chips. |
| `--color-primary-orange-dark` | `#9A3412` | Orange **text** on white when needed = 5.18:1 via `#C2410C`; use this for small orange text. |
| `--color-brand-orange-vivid` | `#F87808` | Decorative only (illustrations, gradient stop, icon fills ≥3:1 against white for graphics). Never text. |
| `--color-secondary-indigo` | **`#7B2FF7`** | Logo midpoint. White text = **5.85:1** (AA normal ✓) — violet buttons/badges are fully accessible. |
| `--color-secondary-indigo-hover` | `#6D28D9` | White text = **7.10:1**. Also the safest violet for text on white (7.10:1). |
| `--color-secondary-indigo-light` | `#F4EFFE` | Section tints, selected states, icon chips. |
| `--color-secondary-indigo-dark` | `#5B21B6` | Active/pressed; white text = 8.98:1. |
| `--gradient-brand` | `#6038F8 → #8F21F8` | The exact logo-U gradient. Allowed in ≤2 places per page. |
| `--gradient-brand-duo` | `#F87808 → #7B2FF7` | Orange→violet. Reserved for ONE element site-wide (final CTA band or hero wash), at low opacity. |

### NEUTRALS (violet-tinted, so even "gray" belongs to the brand)

| Token | Hex | Use |
|---|---|---|
| `--color-background` | `#FAFAFC` | Page background |
| `--color-surface` / `--color-card` | `#FFFFFF` | Cards, forms, header |
| `--color-surface-tint` | `#F6F3FC` | Alternating sections (replaces gray-50) |
| `--color-text-primary` | `#1E1B3A` | Headings/body — indigo-tinted ink, **15.99:1** on white |
| `--color-text-secondary` | `#4B4763` | Supporting text |
| `--color-text-muted` | `#6E6A85` | Captions, meta — ≥4.5:1 maintained |
| `--color-border` | `#E6E3F0` | Inputs, card borders |
| `--color-divider` | `#EFEDF6` | Hairlines |
| `--color-dark-surface` | `#0A1028` | Footer / dark CTA — the actual logo_dark plate navy; white text = **18.9:1** |

### STATUS

| Token | Hex | Note |
|---|---|---|
| `--color-success` | `#16A34A` | Form success |
| `--color-warning` | `#B45309` | Deliberately **amber-brown, not brand orange** — a warning must never look like a CTA |
| `--color-error` | `#DC2626` | Validation errors |
| `--color-info` | `#6D28D9` | Info states reuse brand violet — no fourth hue needed |

---

## C. Color Usage Rules (the discipline layer)

**The 60–25–15 rule per screen:** ~60–70% neutral (white/tinted surfaces, ink text) · ~15–25% violet (structure, links, icons, accents, dark footer counts here) · ~10–15% orange (CTAs and highlights only).

**Orange is allowed on:** primary CTA buttons ("Get Free Assessment", "Find a Tutor", "Apply Now"), the sticky mobile action, active/selected chips (fill or dot), small highlights (underline strokes, tassel-like accents, one stat or word per section), notification badges. **One orange CTA per viewport** — if two orange elements are visible at once, one of them is wrong.

**Violet is allowed on:** links and text buttons, active nav item + underline, section eyebrow labels ("HOW IT WORKS"), icons (default brand icon color), secondary buttons and outlines, focus rings, selected form controls (checkbox/radio/toggle), progress steps, testimonial quote marks, FAQ expand icons, footer background (dark navy-violet), tint backgrounds.

**Orange is banned from:** body text, long headings, backgrounds of whole sections, borders of neutral inputs, more than one button per view, warning messages.
**Violet is banned from:** body text (headings ink by default; violet only for eyebrows/keywords), full-section saturated backgrounds (tints only), disabled states.

**Neutrals do:** all body text, all card surfaces, all form fields, all long content. When in doubt: neutral.

**The gradient budget:** the logo is itself two gradients, so the UI echoes — it doesn't compete. Exactly one `--gradient-brand` echo (e.g., hero decorative shape OR section-heading keyword) and at most one `--gradient-brand-duo` moment (final CTA band) per page. Buttons: always solid. Text: never gradient (the current emerald→blue gradient-text pattern dies in this retheme).

**The brand-recognition test (your §5):** cover the logo — the page should still read "Tutoo" from: ink-violet headings + violet links/icons + a single confident orange CTA + violet-tinted neutrals + the navy footer. That combination is distinctive in the tutoring space; emerald/blue was not.

---

## D. Typography

Keep the installed pairing — it already fits "modern + friendly + professional," and adding fonts violates your no-overdesign rule:

- **Headings:** Clash Display (h1/h2 only) · **Body & UI:** Inter.

| Style | Size (desktop / mobile) | Weight | Color |
|---|---|---|---|
| H1 | 48–56 / 32–36 | 600 | `--color-text-primary`; **one** keyword may take violet or the brand gradient |
| H2 | 32–36 / 26–28 | 600 | Ink; eyebrow label above it in violet caps 13 px/600/+0.08em |
| H3 | 22–24 / 20 | 600 (Inter) | Ink |
| H4 | 18 / 17 | 600 | Ink |
| Body Large | 18 | 400 | `--color-text-secondary` |
| Body | 16 | 400 | Secondary/ink |
| Body Small | 14 | 400 | Muted |
| Caption | 12–13 | 500 | Muted |
| Button | 15–16 | 600 | Per button spec |
| Navigation | 15 | 500 | Ink; active = `#6D28D9` + 2 px underline |

Rules: ink headings by default (never every heading colored); line-height 1.15 headings / 1.6 body; no `font-black`; no all-gradient headlines.

## E. Buttons

| Variant | Spec | Hover / Active | Used for |
|---|---|---|---|
| **Primary** | `#EA580C` fill, white 600 text ≥16 px, radius 12 px, py 12 px px 24 (16×32 hero) | `#C2410C` / `#9A3412`; no glow shadows — darken only | Get Free Assessment, Find a Tutor, Book a Demo, form submits |
| **Secondary** | `#7B2FF7` fill, white text (5.85:1 ✓) | `#6D28D9` | "Explore Online Classes", Become-a-Tutor CTA — max one per view alongside primary |
| **Outline** | 1.5 px `#7B2FF7` border, `#6D28D9` text, white bg | `#F4EFFE` bg | Tertiary actions, "View all" |
| **Ghost/Link** | `#6D28D9` text, underline on hover | `#5B21B6` | Inline links, nav actions |
| **Disabled** | `#EFEDF6` bg, `#6E6A85` text | — | — |
| **WhatsApp** | Keep WhatsApp green `#25D366` — platform recognition beats brand purity for this one element; icon-led | — | Floating + sticky-bar chat |

Focus (all variants): 2 px ring `#7B2FF7` at 2 px offset. Radius 12 px everywhere (pills retired). Never gradient fills.

## F. Cards

White surface · 1 px `#E6E3F0` border · radius 16 px · shadow `0 1px 2px rgba(30,27,58,.06)` (hover: `0 8px 24px rgba(30,27,58,.10)` + border `#D8D3EA`) · icon chip 40 px, radius 10: violet-light bg + violet icon (orange chip only for the single "featured" card, e.g. Home Tuition) · H3 ink, body secondary · action: text-link violet or one small orange button. **No saturated orange/violet card backgrounds**; the two service cards get a 3 px top border (orange for Home Tuition, violet for Online Classes) as their only differentiator — same layout otherwise (your §11).

## G. Forms (the money component)

Field: white bg · 1 px `#E6E3F0` border · radius 12 px · 48 px height · **visible label above** (13 px/600/ink — placeholder-as-label pattern is retired) · placeholder muted. Focus: border `#7B2FF7` + 3 px ring `rgba(123,47,247,.15)`. Error: border + message `#DC2626` with icon, `aria-describedby`. Success: `#16A34A` check. Selected chips (class/subject/mode): violet-light fill + `#5B21B6` text + violet border; **submit is the only orange element in the form**. Multi-step progress dots: violet active, divider inactive. This styles the requirement-form flow defined in the UX plan (§7): Class/Subject → Home/Online → Location → Timing → Contact.

## H. Iconography & Imagery

**Icons:** Lucide only (already installed; MUI icons removed in the dependency prune). Default `#6D28D9`, 1.75–2 px stroke; muted `#6E6A85` for meta; orange reserved for 1–2 emphasis icons per page; footer icons `white/70`.

**Imagery:** real tutors/students/parents — one-to-one teaching at home and on laptops; warm natural light; consistent treatment: radius 16 px, optional violet-light blob behind subject, small orange accent element (dot grid / tassel-like stroke). No generic Western stock, no 3D-render mascots, no per-image style changes. Until real photos exist, flat two-color illustrations using exactly `#7B2FF7`/`#F87808` on `#F6F3FC`.

---

## I. What this means for the current code (branding problems found)

1. **Zero orange in the UI** — the brand's primary color is absent everywhere except the logo file itself. The emerald→blue gradient identity (`#16C47F→#2563EB`) contradicts the logo on every CTA, badge, link, and chart.
2. Purple exists (`#7C3AED`) but as a *third* accent in tri-color gradients — the opposite of its logo role as the structural brand color.
3. `theme.css` is the single source of truth (good) — the retheme is mostly: remap `--accent`, `--ring`, `--primary`, chart colors, and then hunt the **~200 hardcoded `#16C47F`/`#2563EB` hex values** scattered through components (Navbar CTA, Hero, TopInfoBar, FinalCTA, spinners, etc.) back onto tokens. That hardcoding is the real work — and fixing it is exactly your §21 token rule.
4. Wordmark inconsistency: header/footer render plain text "Tutoo Learning" in navy instead of the actual logo lockup (or at minimum the violet "oo"). Use `logo_full.png`/proper lockup in header and footer.
5. Dark sections use `#0B1220` (a blue-black) — swap to the logo's own `#0A1028` navy so even the footer matches the brand asset.
6. Everything in the previous UX audit still applies (fake stats, popup, mobile CTA, form gaps) — branding polish on top of those problems would be lipstick; Phase 1 of the UX plan stays first.

### Keep / Improve / Simplify / Remove / Add (branding view)

- **Keep:** token architecture, Inter + Clash Display, radius scale, Lucide, logo assets (all variants exist, incl. dark).
- **Improve:** map all hardcoded hexes → tokens; wordmark lockup; focus states to violet ring.
- **Simplify:** one gradient echo + one duo moment per page; two shadow levels; solid buttons.
- **Remove:** emerald entirely; blue `#2563EB` as brand (demote to charts only); tri-color gradients; gradient text; glow shadows; pill buttons.
- **Add:** orange CTA layer; violet link/icon/active layer; violet-tinted neutrals; navy footer from logo_dark; status palette with non-brand-orange warning.

---

## J. Section-by-Section Branding Map (homepage per approved UX structure)

| Section | Background | Heading/accents | Secondary | CTA |
|---|---|---|---|---|
| Header | White, hairline border | Ink nav; active violet | Violet hover | **Orange** "Get Free Assessment" |
| Hero | `#FAFAFC` + one soft violet-light shape (echo of the U) + tiny orange tassel accent | Ink H1, one violet keyword | Violet outline secondary CTA | **Orange** primary + form submit |
| Quick requirement form | White card on hero | Violet focus/selected states | — | **Orange** submit |
| Services (Home/Online) | White | Ink; orange top-border card vs violet top-border card | Violet links | Orange (one), or violet text-links |
| Browse by class | `#F6F3FC` tint | Ink; violet chips | Selected chip violet-fill | Chips navigate — no button |
| How It Works (3 steps) | White | Violet step numerals | Orange accent on step 3 ("start learning") | — |
| Safety & Trust | `#F4EFFE` light violet | Ink + violet icons | One orange highlight stat/word | — |
| Service areas | White | Violet map-pin icons | — | Text link violet |
| Testimonials | `#F6F3FC` | Violet quote marks | Orange stars ★ (one warm accent) | — |
| FAQ | White | Violet expand icons | — | — |
| Final CTA | **`#0A1028` navy** with subtle duo-gradient edge glow | White | `white/80` sub-line | **Orange** button (3.56:1 on navy-adjacent white text ✓; button contrast vs navy bg 2.6:1 → add 1 px white/20 border or use white button with orange text `#C2410C` — final call in implementation) |
| Footer | `#0A1028` | White headings, `white/80` links (≥4.5:1) | Orange hover underline | — |
| Sticky mobile bar | White, top hairline | Call icon violet | WhatsApp green | **Orange** "Book" button |

## K. Responsive & Accessibility (brand-specific)

- Logo: 40–44 px height desktop header, 32–36 px mobile; dark variants on navy footer. Never stretch, recolor, or drop-shadow the logo.
- The orange CTA must be **visible without opening the menu on every breakpoint** (320/375/390/430/tablet/desktop) — header button plus sticky bottom bar on mobile (carried from UX plan P0).
- Measured rules now enforced: white-on-orange only ≥16 px semibold (3.56:1, AA-large); small orange text on white only `#C2410C`+ (5.18:1); violet `#6D28D9` is the workhorse accessible accent (7.10:1 text, 5.85:1 white-on-fill for `#7B2FF7`); muted text floor `#6E6A85`; footer links `white/80` minimum, never `white/30`.
- Focus rings violet everywhere; error states never color-only (icon + message); `prefers-reduced-motion` respected; disabled states neutral (never faded orange, which reads "still clickable").

## L. UX Strategy & Priorities (unchanged, now color-coded)

Journey: **Visitor → Understand (ink headline, 1 s) → Select requirement (violet-guided form) → Request tutor (orange action) → Enquiry (24 h callback + WhatsApp handoff).** Orange marks every forward step; violet marks structure and reassurance; neutrals carry content.

- **P0** — Token swap in `theme.css` + retheme hardcoded CTAs (Navbar, Hero, sticky bar, forms, FinalCTA); orange CTA layer live on all breakpoints; violet focus/link layer; footer → `#0A1028`. (Runs inside UX-plan Phase 1.)
- **P1** — Full hex→token sweep of all components; wordmark lockup; card/chip/icon system; section tints; kill remaining gradients.
- **P2** — Imagery treatment, illustration set, blog/inner-page theming, chart palette (violet/orange series).
- **P3** — Dark-mode pass (tokens already scaffolded), micro-interaction polish, brand guidelines page.

---

## M. Approval checklist (your §24)

Approve/adjust each: **1.** Palette (§B) · **2.** Typography (§D) · **3.** Homepage structure (unchanged from UX plan §7 + color map §J) · **4.** Header (white/ink/violet-active/orange-CTA) · **5.** Hero (neutral bg, ink H1 + violet keyword, orange primary + violet outline secondary) · **6.** CTA style (§E) · **7.** Cards (§F) · **8.** Forms (§G) · **9.** Overall direction: *Simple + Premium + Clean + Branded — violet structure, orange action, neutral canvas.*

**See `brand-style-tile.html` (sent alongside) for a visual preview of all of the above before any code changes.**
