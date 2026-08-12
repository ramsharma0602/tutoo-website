# Tutoo — UX Audit & Redesign Plan

**Prepared:** August 2026 · **Scope:** tutoolearning.com (Vite + React SPA in `tutoo-website/`)
**Direction confirmed by you:** Full reposition to simple tutoring · Free assessment → tutor match as the offer · Requirement-form-only discovery for MVP · Form + WhatsApp + Phone as enquiry channels.

> **No code has been modified.** This document is the analysis and proposal for your approval (per your Step 11).

---

## 0. Executive Summary

Your current site is visually ambitious but strategically misaligned. It sells an **"AI-Powered Learning Operating System"** to parents who — by your own definition — just want **a trustworthy tutor for their child, at home or online, in Kothrud or Kolhapur**. Almost every major UX problem on the site flows from that one mismatch: the platform story demands dashboards, 7-step processes, dual security sections, and big statistics, and the site fabricates all of it (12,000+ students, 3,400+ tutors, 94% improvement, 500+ partner schools, "ISO Certified").

Three findings that shape everything below:

1. **The trust problem is bigger than the layout problem.** For a two-city service, invented national-scale numbers are the single largest conversion risk. A parent in Kothrud can't verify "12,000 students" — but they *can* sense it, and one WhatsApp group conversation destroys it. Honest, small, local trust signals convert better for a local service.
2. **The enquiry funnel has a hole in the middle.** The assessment form (your only conversion path) never asks **where the student lives** or **home vs online** — the two facts a home-tuition business needs before it can do anything. Meanwhile the homepage CTA is invisible on mobile (it's hidden inside the hamburger menu) and a popup interrupts every first visit.
3. **LearningPotato is a useful reference for *principles*, not a model to imitate.** Honest note: their site is itself content-heavy, with 8 top-level menu items, 42+ subpages, a carousel hero, and — ironically — placeholder "0+" statistics. What they get right is *clarity of offer* ("home tuition in Pune"), *human contact up front* (phone/WhatsApp visible always), and *plain parent language*. Those are the things worth learning. Their navigation depth and text walls are things to avoid.

**Recommended direction:** Clean · Warm · Local · Trustworthy · Parent-first. One offer ("verified home & online tutors"), one primary action ("Book a Free Assessment"), one honest trust story (verification process, real tutor qualifications, real local presence).

---

## STEP 1 — Reference Analysis: LearningPotato.com

### 1.1 Navigation

| Observation | Detail |
|---|---|
| Top-level items | 8 (Classes, Class-10th, Class-12th, Offline, Online, NIOS, Other, Blog) |
| Sub-pages | 42+ via dropdowns (Class 1–12, board × subject combos, languages) |
| Persistent CTAs | "Book a Demo" + "Register as Tutor" (WhatsApp deep link) in a sticky header |
| Contact | Phone number and email visible in the header at all times; location badge ("Balewadi, Pune") |
| Mobile | Standard collapsing menu |

**What makes it easy for a new visitor:** the *offer* is unambiguous within one second — home tuition, in Pune, for school students, and there is always a phone number and a "Book a Demo" button in view. A parent never has to figure out *how* to make contact.

**What makes it difficult:** the menu is an SEO sitemap wearing a navigation costume. Eight top-level items and 40+ destinations create decision paralysis; almost all of that depth exists for Google, not for the visitor. **Do not copy this.** Their SEO pages are right to exist — but they belong in the footer, in on-page "browse by class/subject" sections, and in internal links, not in the primary nav.

### 1.2 Homepage, section by section

| Section | Purpose | UX principle | Adopt for Tutoo? |
|---|---|---|---|
| Hero (carousel, "home tuition in Pune…", "Get In Touch") | State the offer + locality | Message-market match; local specificity | **Adapt** — steal the *plain local language*, not the carousel. Carousels dilute the message and hurt LCP; use one static headline. |
| 6 benefit tiles ("Learn from Home", "Free Demo Class"…) | Answer "why you" in scannable chunks | Chunking; icon + short label | **Adopt** — but 4–6 max, one line each, honest claims only. |
| "Why choose" 6 boxes | Reinforce differentiators | Repetition of value prop | **Merge** — one benefits section is enough; two is padding. |
| Statistics ("0+" Students/Tutors/Hours) | Social proof | Numbers as trust | **Learn from their mistake** — they shipped placeholder zeros. Show numbers only when real; otherwise use qualitative proof. |
| Demo-class highlights | Reduce risk of first step | Risk reversal | **Adopt** — your free assessment plays this role; spell out what the parent gets and that it costs nothing. |
| Testimonials (named students/parents, class mentioned) | Peer proof | Specific, attributable social proof | **Adopt** — real names + class + area beat invented "+21% grade improvement" badges. |
| Featured tutor profiles (name, M.Sc Physics, etc.) | Make tutors tangible | Concreteness builds trust | **Adopt later (Phase 4 showcase)** — consistent with your requirement-form-only MVP; even 3–4 real profiles with quals will help. |
| Long SEO copy blocks + FAQ | Rank for local queries; handle objections | SEO + objection handling | **Adapt** — keep FAQ prominent; move long-form copy to dedicated landing pages (`/home-tuition`, city pages), not the homepage. |
| Footer (addresses, city links, Book a Demo box) | Local legitimacy + SEO linking | NAP consistency | **Adopt** — real footer links, real service areas, one repeated CTA. |

### 1.3 The transferable principles (used throughout this plan)

1. **One offer, stated in parent language, within one screen.**
2. **Human contact is always one tap away** (phone/WhatsApp visible without scrolling).
3. **Local specificity beats scale claims** for a local service.
4. **The demo/assessment is the product's front door** — everything funnels there.
5. **SEO breadth lives in pages and footers, not in the header.**
6. **Concrete details (tutor qualifications, named testimonials) outperform abstract promises.**

---

## STEP 2 — Current Website Review

### 2.1 Stack & structure (inspected, not assumed)

- **Tech:** Vite 6 · React 18 · TypeScript · Tailwind CSS v4 · shadcn/Radix UI kit (~45 components in `components/ui/`) · Formik + Yup · `motion` (Framer Motion) · react-router 7 · react-helmet-async SEO layer (`src/seo/` — genuinely well built) · axios services hitting a real backend (`getBoards`, `getClasses`, subjects, `submitAssessment`).
- **Also installed:** MUI (`@mui/material`, `@mui/icons-material`, emotion), **three** carousel libraries (embla, react-slick, swiper), react-dnd, recharts + chart.js, canvas-confetti. This is Figma-export dependency bloat — audit and prune (Phase 2).
- **Routes:** `/` · `/book-free-assessment` · `/apply-tutor` · `/for-parents` · `/for-tutors` · `/blogs`, `/blog/:slug` · `/:board/:category/:className` (catch-all board/class pages) · `/study-material` · `/our-mission` · `/about-tutoo` · `/how-it-work` · `/contact-us` · `/careers` · `/team` · legal pages.
- **Design tokens:** `theme.css` has a real token system (good bones): `#0B1220` navy, `#16C47F` emerald, `#2563EB` blue, `#7C3AED` purple, Inter body + Clash Display headings, radius 1rem.
- **Status:** clearly pre-production — footer links to `#`, `whatsapp: ""` TODO in `seo.config.ts`, `guidelines/` and Figma import artifacts present.

### 2.2 Homepage as shipped (13 sections)

TopInfoBar → Navbar → Hero (platform pitch + fake dashboard) → CityAvailability → LearningSolutions (6 offerings incl. "Skill Development", "Coding & AI") → ProblemVsSolution → HowItWorks (**7 steps**) → SafetyTrust → SecurityTrust (**a second, overlapping trust section**) → ForTutors → Results (fake stats) → SubjectsPrograms → Testimonials → FAQ → FinalCTA → Footer. Plus a **PageLoadModal popup at 1.2 s** on every visit.

### 2.3 Major problems found (evidence in code)

**Strategy / trust**
- Fabricated statistics in at least 6 components: `Hero.tsx`, `Results.tsx`, `PartnerSchools.tsx` ("500+ Partner Schools"), `FinalCTA.tsx` ("94% Success Rate", "24/7 Support"), `FAQ.tsx`, `ForTutors.tsx` ("4.8★"), `PageLoadModal.tsx`. Footer claims "ISO Certified". `Testimonials.tsx` attaches invented precision ("+21% Grade Improvement") to quotes.
- "We **guarantee** learning outcomes" (hero H1) — a legally risky claim you almost certainly don't want in writing.
- Positioning ("India's First Learning Operating System") speaks investor, not parent — you've confirmed the reposition.

**Conversion flow**
- `BookAssessmentForm.tsx` collects name, mobile, email, board, class, school, subjects — **no city/area, no home-vs-online preference, no timing**. The core routing data for a tuition business is never captured.
- **Mobile users never see a CTA without opening the hamburger** — the "Book Free Assessment" button is `hidden lg:block` in `Navbar.tsx`. No sticky mobile CTA, no floating WhatsApp/call.
- Dead CTAs: hero "Explore Platform" (no handler), HowItWorks "Start Your Journey Today" (no handler), LearningSolutions "Learn more" (not links), footer "About Us" → `#`.
- `PageLoadModal` interrupts at 1.2 s — before the parent has read the headline. Your own brief says: no aggressive popups. Its inner form is also vestigial (fields defined, none rendered; "submit" navigates away).
- WhatsApp is absent site-wide despite being a confirmed priority channel.

**Navigation**
- "Boards & Classes" is a **3-level hover-chained dropdown** (board → category → class) — hover chains are error-prone on desktop (diagonal-movement dismissal), invisible to keyboard users, and 4 taps deep on mobile.
- Phone/email live in the TopInfoBar, which is pushed out once you scroll (Navbar re-docks to `top-0`), so contact info disappears exactly when intent forms. (`TopInfoBar` also has contradictory `fixed relative` classes.)
- Nav labels are org-chart language ("About Program", "For Parents") rather than task language ("Home Tuition", "Online Classes").

**Content & hierarchy**
- Two near-duplicate trust sections (`SafetyTrust`, `SecurityTrust`) — same claims, different skins.
- 7-step How It Works — parents will not read seven steps; LearningPotato-style clarity needs 3.
- `ForTutors` mid-homepage splits the audience in the middle of the parent journey.
- `LearningSolutions` advertises six offerings (incl. Skill Development, Coding & AI, Olympiad) — for an MVP, this widens the promise beyond what matching can deliver and dilutes the two real services.

**Actual rendering bug**
- `HowItWorks.tsx` (and similar patterns) builds Tailwind classes dynamically: `from-${step.color}-400`. **Tailwind v4 cannot generate runtime-composed class names** — those gradients/shadows silently don't render. Fix by mapping to full literal class strings.

**Accessibility**
- Hover-only dropdowns unusable by keyboard; no focus management.
- Placeholder-as-label form inputs (`placeholder="First Name *"`, no `<label>`).
- Low-contrast text on dark surfaces (`text-white/30`, `/50`) fails WCAG AA.
- Motion on nearly every element with no `prefers-reduced-motion` handling.
- Semantics mostly fine (nav/section/h1 present); `aria-expanded` on the burger is a good start.

**Performance UX**
- Route-level code-splitting is already done (good). But: MUI + Radix duplication, 3 carousel libs, charts libs, confetti; two webfonts (fontshare + Google); animation on ~every section; popup JS on first paint. The dark-navy FinalCTA/footer + gradient-heavy sections also cost paint time on low-end Android — your actual audience's hardware.

---

## STEP 3 — Comparison

| Dimension | LearningPotato | Tutoo today | Who wins & why |
|---|---|---|---|
| Clarity of offer | "Home tuition in Pune" — instant | "Learning Operating System" — abstract | LP. Parents shop for tutors, not platforms. |
| Contact availability | Phone/WhatsApp/demo always visible | Phone hidden after scroll; no WhatsApp; CTA hidden on mobile | LP, decisively. |
| Honesty of proof | Placeholder "0+" (sloppy but not deceptive) | Invented large numbers (deceptive) | LP. Yours is the worse failure mode. |
| Visual design | Dated, functional | Modern, polished | **Tutoo** — keep this advantage; it needs discipline, not replacement. |
| Navigation | Overloaded (SEO in the header) | Overloaded differently (3-level hover menus) | Neither. Both need task-based, shallow nav. |
| Enquiry capture | Demo booking + phone | Assessment form missing location/mode | LP functionally, Tutoo structurally (your form+backend exist; they need 3 more fields). |
| Tech foundation | WordPress-era | Modern, token-based, code-split, real SEO layer | **Tutoo** — the redesign is mostly *removal and rewiring*, not rebuilding. |

---

## STEP 4 — UX Audit

Severity: Critical / High / Medium / Low · Priority: P0 (blocks conversion) → P3

| Area | Current problem | Severity | Recommendation | Priority |
|---|---|---|---|---|
| Trust | Fabricated stats & certifications in 6+ components; "guarantee" claim | **Critical** | Remove or replace with real/placeholder `[N]` values; qualitative trust instead | **P0** |
| Enquiry flow | Assessment form lacks city/area, home-vs-online, timing | **Critical** | Add 3 fields (or step) to existing Formik form | **P0** |
| Mobile UX | No CTA visible on mobile without opening menu; no sticky action bar | **Critical** | Sticky bottom bar: Call · WhatsApp · Book Assessment | **P0** |
| CTA | Popup at 1.2 s; dead buttons ("Explore Platform", "Start Your Journey") | High | Delete popup (or exit-intent only, one/session); wire or remove dead CTAs | **P0** |
| Navigation | 3-level hover mega-menu; contact info scrolls away; org-chart labels | High | 5-item task-based nav (see §6); classes/boards become an on-page browse section + footer links | **P0/P1** |
| Hero | Platform pitch, fake dashboard, no path for "I need a tutor" | High | Rewrite around offer + mini requirement form (see §7) | **P0** |
| Homepage | 13 sections, duplicated trust, ForTutors mid-flow, 7-step process | High | Cut to ~9 sections; merge trust; 3-step process; tutor strip near footer | **P1** |
| Forms | Placeholder-as-label; no visible labels/errors association | High | Real `<label>`s, inline errors (Formik already supports) | **P1** |
| Bug | Dynamic Tailwind classes never render (HowItWorks, Results) | High | Literal class maps | **P0** (it's broken now) |
| Content hierarchy | Six advertised offerings vs two real services; jargon ("Learning Plan Activation") | Medium | Two services + "also available" chips; parent-language rewrite | **P1** |
| Accessibility | Hover-only menus, contrast failures, no reduced-motion | Medium–High | Radix `NavigationMenu` (already installed), contrast pass, `motion-safe` | **P1/P2** |
| Performance UX | Dep bloat (MUI + 3 carousels), animation density, popup JS upfront | Medium | Prune deps; animate only hero + section-entry; cap at fade/slide | **P2** |
| SEO | No `/home-tuition` `/online-tuition` landing pages; SPA-only rendering; catch-all `/:board/:category/:className` route shadows future URLs | Medium | Add service + city landing pages; prerender (see §16); namespace class pages under `/classes/…` | **P2** |
| Footer | `#` links, "ISO Certified" badge, Bangalore address vs Pune/Kolhapur service areas | Medium | Real links only; drop unverifiable badges; align NAP with `seo.config.ts` | **P1** |

---

## STEP 5 — Keep / Improve / Simplify / Remove / Move

**Keep (genuinely good):**
- The design-token system, shadcn/Radix kit, Formik+Yup patterns, `SearchableSelect`, `StatusModal`, route code-splitting, and the entire `src/seo/` layer (config, JSON-LD, per-route meta) — this is better SEO plumbing than most agency builds.
- Brand palette (navy/emerald/blue) and Clash Display + Inter pairing — with discipline rules (§9).
- `CityAvailabilitySection` concept ("starting right where you are") — honest and local; simplify its visuals.
- The assessment-first funnel and its working backend.

**Improve:**
- Hero (offer + form), assessment form (3 new fields), nav (flatten), How It Works (7→3), FAQ (keep, retarget questions to parents' real objections: pricing, tutor change, safety, demo).

**Simplify:**
- One trust section (merge SafetyTrust + SecurityTrust into "How we keep your child safe": verified tutors, OTP session start, attendance visibility, parent updates — claims only if the product really does them).
- LearningSolutions → two service cards (Home Tuition, Online Classes) + one "Also: JEE/NEET, Olympiad" chip row.
- Gradients: tri-color gradient text/buttons/badges everywhere → solid emerald primary buttons, navy text.

**Remove:**
- PageLoadModal (P0). All fabricated numbers/badges (P0). "Guarantee" (P0). ProblemVsSolution section (its job is done by a good hero + benefits). PartnerSchools (fake). Dead "Explore Platform" button. Purple as a third brand color.

**Move:**
- ForTutors → short strip above the footer + full `/become-a-tutor` page (rename `/apply-tutor`).
- Boards & Classes mega-menu → on-page "Browse by class" section + footer link matrix (SEO value preserved; nav decluttered).
- Long explanatory content (mission, how-it-work deep pages) → keep as secondary pages under About; out of primary nav.

---

## STEP 6 — Information Architecture (recommended sitemap)

```text
Home (/)
│
├── Home Tuition            /home-tuition            [MVP — new landing page]
├── Online Classes          /online-tuition          [MVP — new landing page]
├── Book Free Assessment    /book-free-assessment    [MVP — exists; becomes "Request a Tutor" flow]
├── Become a Tutor          /become-a-tutor          [MVP — rename /apply-tutor, 301 old path]
│
├── Classes & Boards        /classes                 [P2 browser page]
│   └── /classes/[board]/[class]                     [P2 — migrate /:board/:category/:className]
├── Subjects                /subjects/[subject]      [P3]
├── Locations               /locations/kothrud, /locations/kolhapur   [P2 — local SEO]
│
├── About                   /about-tutoo             [MVP, trimmed; mission/team/careers under it]
├── Contact                 /contact-us              [MVP]
├── FAQ                     (section on Home + Contact; standalone page P3)
├── Blog                    /blogs                   [keep; P2 content engine]
├── Study Material          /study-material          [P3 — currently near-empty data files]
└── Legal                   /privacy-policy, /terms-of-service [MVP]
```

**Header nav (5 items + CTA):** Home Tuition · Online Classes · Become a Tutor · About · Contact — plus the **Book Free Assessment** button (visible on mobile too). Everything else reaches users through on-page sections, the footer, and search engines.

**MVP pages:** Home, Home Tuition, Online Classes, Book Free Assessment, Become a Tutor, About, Contact, Legal. **Later:** Locations (P2), Classes/Subjects browsers (P2/P3), Study Material (P3), dashboards (Phase 4).

---

## STEP 7 — Homepage & Hero

### Recommended homepage (9 sections, answers the 8 parent questions in order)

```text
HEADER      Logo · Home Tuition · Online Classes · Become a Tutor · About · Contact · [Book Free Assessment]
            (mobile: logo + burger + always-visible CTA icon-button)

HERO        H1: "Trusted home tutors & online classes for Class 1–12"
            Sub: "Tell us what your child needs. We assess for free and match a
                  verified tutor — in Kothrud, Kolhapur, or online anywhere."
            [Mini requirement form: Class ▾ · Subject ▾ · Home/Online toggle · Area (if home) · → Get Free Assessment]
            Secondary: "or WhatsApp us →"
            Trust strip (honest): Verified tutors · Free assessment · No advance payment*  (*only if true)

SERVICES    Two cards: Home Tuition | Online Classes  (each: 1 line + "How it works" link + CTA)

BROWSE BY CLASS   Class 1–5 · 6–8 · 9–10 · 11–12 · JEE/NEET/CET  (chips → class pages later; MVP: prefill the form)

HOW IT WORKS (3 steps)
            1. Tell us your requirement  → 2. Free assessment & tutor match  → 3. Start classes, track progress

SAFETY & TRUST (single merged section)
            Tutor verification process · OTP session start · attendance & progress visibility · [real quals of sample tutors when available]

SERVICE AREAS   Kothrud (Pune) · Kolhapur · "Online — anywhere in India"

TESTIMONIALS    Only real, consented quotes (name, class, area). If none yet: omit the section — an absent section is safer than an invented one.

FAQ         6–8 parent objections: cost/fees, changing tutors, tutor verification, demo/assessment details, boards covered, online setup

FINAL CTA   "Ready to find the right tutor?" → Book Free Assessment · WhatsApp · Call

FOOTER      Real links only · NAP consistent with seo.config (Pune/Kolhapur, not Bangalore) · class/board link matrix (SEO) · legal
BECOME-A-TUTOR STRIP sits just above the footer (one line + link)

MOBILE ONLY Sticky bottom bar: [Call] [WhatsApp] [Book Free Assessment]
```

### Hero rules
- One H1, ~40–56 px desktop / 32–36 px mobile (current 72 px is a poster, not a webpage).
- The mini form **is** the hero visual on mobile; on desktop, right column = photo of a tutor + student (real when possible) — not a fake analytics dashboard. Warmth converts parents; dashboards convert VCs.
- Resolving your positioning + offer choice: the *identity* is "we find you a verified tutor"; the *mechanism* is "we start with a free assessment". So the CTA reads **"Get Free Assessment"** but the headline never mentions AI or platforms.

### Tutor discovery / requirement flow (Find a Tutor)

MVP = **collect the requirement, then human contact** (you confirmed; also the right call: with a small real tutor pool, browsable profiles would expose thinness, create stale-profile maintenance, and invite tutor-parent disintermediation).

Recommended flow — extend the existing `/book-free-assessment` Formik form into steps:

```text
Step 1  Class ▾ + Board ▾ + Subjects (multi)          [existing fields, existing API]
Step 2  Mode: ⌂ Home tuition | 🖥 Online              [NEW]
Step 3  If home: City ▾ (Kothrud/Kolhapur) + Area/Pincode   [NEW]
Step 4  Preferred days/time (optional, chips)          [NEW, optional — don't force]
Step 5  Parent name + mobile (+ email optional) → Submit
        Success: "We'll call you within 24 hours" + WhatsApp deep link ("or chat now")
```

One question per screen on mobile, progress dots, back button, ≤60 seconds to complete. Hero mini-form submits Class/Subject/Mode/Area and lands on Step 4/5 prefilled — never make the parent re-enter anything.

---

## STEP 8 / §9 — Design System

Principle: **keep the Tutoo identity, remove the noise.** This is a discipline pass, not a rebrand. (Original palette — nothing borrowed from LearningPotato.)

### Colors

| Token | Hex | Use |
|---|---|---|
| Primary | `#16C47F` | Primary buttons, key links, success accents (existing brand green) |
| Primary-hover | `#0FA968` | Hover/active |
| Ink / brand dark | `#0B1220` | Headings, footer bg |
| Secondary | `#2563EB` | Links, secondary buttons, info accents |
| Accent (warm) | `#F59E0B` | Sparingly: badges, ratings, highlights |
| Background | `#F8FAFC` | Page |
| Surface | `#FFFFFF` | Cards, forms |
| Text | `#0F172A` | Body |
| Muted text | `#64748B` | Secondary text (never below `#64748B` on white) |
| Border | `#E2E8F0` | Inputs, dividers |
| Success | `#16A34A` | Form success |
| Error | `#DC2626` | Validation |
| Warning | `#D97706` | Notices |

**Rules:** retire purple `#7C3AED` from UI (keep for charts only). Gradient allowance: **one** brand gradient (emerald→blue), used in at most two places per page (hero background wash, final CTA). Buttons are solid, never gradient. Gradient text: nowhere.

### Typography
- **Headings:** Clash Display (already loaded) — h1/h2 only. h3-down uses Inter SemiBold.
- **Body:** Inter. Base 16 px, line-height 1.6 body / 1.15 headings.
- Scale (desktop / mobile): h1 48–56 / 32–36 · h2 32–36 / 26–28 · h3 22–24 / 20 · body 16–18 · small 14. Weights: 400 body, 600 UI/labels, 700 headings (drop `font-black`).

### Spacing (8-pt scale)
Page container `max-w-7xl`, px 16/24 (mobile/desktop) · Section padding py 64 mobile / 96 desktop (current 128 makes pages feel emptier and longer) · Card padding 24 · Form field gap 16–20, group gap 32 · Button padding 12×24 (16×32 for hero CTA).

### Radius
Inputs & buttons 12 px (`rounded-xl`) · Cards 16 px (`rounded-2xl`) · Modals/sheets 20 px. Retire pill buttons and `rounded-3xl` cards for consistency (`--radius` token already supports this).

### Shadows
Two levels only: `card: 0 1px 2px rgba(15,23,42,.06)` and `raised/hover: 0 8px 24px rgba(15,23,42,.10)`. Remove colored glow shadows (`shadow-emerald-500/30`) and blur-orb decorations except one soft wash in the hero.

---

## §10 — Component System

**Reusable (shared, most already exist in `components/ui/`):**
- Layout: `Header`, `Footer`, `Container`, `Section` (new — standardizes py/heading pattern so section spacing stops being ad-hoc)
- Nav: `DesktopNav`, `MobileMenu` (rebuild on the installed Radix `navigation-menu` for keyboard support)
- Conversion: `RequirementForm` (the multi-step core — the *one* form component, embedded in hero [compact], `/book-free-assessment` [full], service pages [prefilled]), `StickyMobileCTA` (new), `WhatsAppButton` (new), `CallButton`, `StatusModal` (exists)
- Forms: `Input`, `Select`, `SearchableSelect` (exists), `ChipGroup` (new: class/subject/day chips), `StepProgress`
- Content: `ServiceCard`, `ClassChip`, `TestimonialCard`, `FAQAccordion` (exists as accordion), `TrustItem`, `SectionHeading`
- SEO: existing `RouteSEO`/`PageSchema` untouched

**Page-specific (don't abstract prematurely):** hero visual, safety-section illustration, city cards, become-a-tutor sections, blog/study-material components. **Delete:** `PageLoadModal`, `ProblemVsSolution`, `PartnerSchools`, one of the two trust sections, `ParentDashboard` mock (fold a *single* honest progress-visual into the trust section only if the product ships it).

---

## §11 — Mobile-First UX

Checklist against 320 / 375 / 390 / 430 / tablet / desktop:

- **320–390:** h1 ≤ 36 px; hero form full-width, 48 px min touch targets; select controls use the existing `SearchableSelect` in a bottom `Drawer` (vaul is installed) rather than tiny dropdowns; trust strip wraps to 2×2.
- **Sticky bottom bar** (the highest-ROI mobile change): Call · WhatsApp · Book Free Assessment. Hide while the keyboard is open and on the form page itself.
- Nav: burger + *visible* compact CTA in the bar; menu items ≥ 48 px rows; no nested accordions deeper than 2 levels.
- Cards: single column below 640; class chips scroll horizontally with edge-fade.
- Images: real photos `loading="lazy"`, explicit width/height (CLS), WebP/AVIF.
- Forms: `inputMode="numeric"` for mobile number, autocomplete attributes, error text below field (not toast-only).
- Test tablet mega-hover replacements — Radix menus degrade to tap correctly.

---

## §12 — Conversion Optimization

- **Primary conversion:** requirement submission (via assessment flow). Wording: **"Get Free Assessment"** on buttons (verb-first, benefit-bearing); "Book Free Assessment" acceptable — pick one and use it *everywhere* (currently fine; consistency matters more than the exact verb).
- **CTA placement:** header (always, incl. mobile) · hero form · after How It Works · final CTA · sticky mobile bar. That's 5 touchpoints — enough. Remove per-section CTA buttons beyond these (current page has ~8 with inconsistent labels: "Start Your Journey Today", "Explore Platform"…).
- **Secondary:** WhatsApp (floating button desktop bottom-right; slot in mobile sticky bar; prefilled message: "Hi Tutoo, I'm looking for a tutor for Class __, Subject __ in __") and Call (tel: link in header area + sticky bar).
- **No popups.** If leadgen pressure demands one later: exit-intent, desktop-only, once per session, after 40%+ scroll — and measure before keeping.
- **Form placement:** requirement form above the fold (hero) + full page. Every service/class/location page embeds the same `RequirementForm` prefilled — one component, one funnel, clean analytics.
- Add GA4/Clarity IDs (fields already exist in `seo.config.ts`) and define events: `hero_form_start`, `requirement_submitted`, `whatsapp_click`, `call_click`. You cannot CRO what you don't measure.

## §13 — Trust & Credibility (the honest version)

Replace invented scale with verifiable substance:

- **Process proof:** "Every tutor is ID-verified and interviewed before their first class" — describe the actual steps; parents trust transparent process over big numbers.
- **People proof:** tutor qualifications ("M.Sc. Mathematics, 6 yrs experience") — even 3–4 real examples (Phase 4 showcase) outweigh "3,400+ tutors".
- **Local proof:** "Serving families across Kothrud & Kolhapur" + real areas covered.
- **Risk reversal:** free assessment, no obligation; tutor replacement promise *if you honor one*; clear fee explanation.
- **Numbers:** only real ones, as placeholders until provided — `[Number of verified tutors]`, `[Students enrolled]`, `[Areas covered]`. Small real numbers ("40+ verified tutors in Kothrud") are *more* believable locally than big vague ones.
- **Safety section:** keep OTP/attendance/monitoring claims **only for features that actually exist** in your product today; everything else moves to a roadmap-free "coming soon"-less silence.
- Drop: "ISO Certified", "500+ Partner Schools", "24/7 Support" (unless staffed 24/7), "+21% Grade Improvement" testimonial badges, "guarantee".

---

## §15 — Page-by-Page Recommendations

| Page | Target user / Goal | Main CTA | Key sections & changes | SEO / Mobile notes |
|---|---|---|---|---|
| **Home** | Parent → enquiry | Get Free Assessment | Structure in §7 | Title: "Home Tutors & Online Classes in Kothrud, Pune & Kolhapur \| Tutoo"; H1 matches offer; LocalBusiness schema (exists) |
| **/home-tuition** (new) | Parent wanting at-home tutor | Get Free Assessment (prefilled mode=home) | What it is → how matching works → safety → areas → fees explainer → FAQ → form | Primary money page for "home tuition in kothrud/kolhapur" queries; breadcrumbs |
| **/online-tuition** (new) | Parent/student, incl. outside two cities | Get Free Assessment (mode=online) | How online classes run (tool: Zoom/Meet — state it), tech needs, demo, FAQ | Targets "online tuition class X"; national reach |
| **/book-free-assessment** | Warm parent | Submit requirement | Multi-step form (§7); add mode/city/area/timing; success → WhatsApp handoff; remove marketing clutter around form | `noindex` optional; keep fast, zero distraction, no footer-nav temptation is fine to keep |
| **/become-a-tutor** (rename /apply-tutor) | Tutors | Apply Now | Existing `TutorApplicationForm` is solid; page copy: earnings clarity, requirements, process timeline; kill fake "4.8★/98%" stats | Targets "home tutor jobs pune/kolhapur"; 301 from /apply-tutor |
| **/for-parents** | Overlaps home & /home-tuition | — | **Merge** its distinct content (safety verification detail, resources) into /home-tuition and About; keep route as redirect. Don't maintain three pages telling parents the same thing | Avoids keyword cannibalization |
| **/about-tutoo** | Trust-checkers | soft CTA | Trim to: who we are, why we started, verification process, team (real people). Mission/how-it-work deep pages fold in or link from here | E-E-A-T signals; real founders help conversion in local services |
| **/contact-us** | Anyone | Call/WhatsApp/form | Phone, WhatsApp, email, hours, service areas; short form; FAQ | ContactPage schema |
| **Board/Class pages** (`/:board/:category/:className`) | SEO entrants | Prefilled form | Keep — genuinely valuable; move under `/classes/…` (P2), add breadcrumbs, embed `RequirementForm` prefilled with board+class | These become your long-tail engine |
| **/blogs, /study-material** | SEO/nurture | soft CTA | Blogs fine (P2 cadence). Study-material data files are empty — hide the route until real content exists (thin pages hurt) | — |
| **FAQ** | Objection handling | CTA after answers | On-page sections now; standalone page P3 with FAQPage schema | Voice-search-friendly Q&A |

## §16 — Content Strategy (samples)

Voice: warm, plain, specific; grade-8 reading level; "your child", "you"; zero jargon (no "learning outcomes activation", "operating system", "ecosystem").

- **Hero:** "Trusted home tutors & online classes for Class 1–12" / "Tell us what your child needs. We assess for free and match a verified tutor — at your home in Kothrud or Kolhapur, or online anywhere." / **Get Free Assessment**
- **Home tuition card:** "A verified tutor at your home" / "One-to-one attention, on your schedule, with progress you can see." / **Find a Home Tutor**
- **Online card:** "Live one-to-one online classes" / "The same verified tutors, from anywhere — all you need is a phone or laptop." / **Start Online**
- **How it works:** "Tell us your requirement" → "Free assessment & tutor match" → "Start classes & track progress" (one sentence under each)
- **Safety:** "How we keep your child safe" / verification, OTP start, attendance visibility — described factually.
- **Final CTA:** "Ready to find the right tutor?" / "Free assessment. No obligation. We'll call you within 24 hours." / **Get Free Assessment** · WhatsApp · Call

## §17 — SEO Structure

- **URLs:** `/home-tuition` · `/online-tuition` · `/home-tuition/kothrud`, `/home-tuition/kolhapur` (P2) · `/classes/cbse/class-10` (P2 migration with 301s from current pattern) · `/subjects/mathematics` (P3) · `/become-a-tutor`.
- **Titles/H1s:** intent-matched, e.g. "Home Tuition in Kothrud, Pune — Verified Tutors for Class 1–12 | Tutoo"; one H1/page; H2s = the section questions parents ask.
- **Schema:** LocalBusiness (exists — fix NAP: Bangalore footer address contradicts Pune/Kolhapur config), FAQPage on FAQ sections, BreadcrumbList on class/location pages, Service schema on the two service pages.
- **Internal linking:** footer class/board matrix; service pages ↔ location pages ↔ class pages; blog posts → service pages.
- **The structural issue to decide early:** this is a client-rendered SPA — bots that don't execute JS see an empty shell, and `react-helmet-async` only helps when JS runs. For a lead-gen local site, add **prerendering/SSG for the ~10 marketing routes** (e.g., `vite-plugin-prerender` or migrating marketing pages to static generation) in Phase 3. Also generate `sitemap.xml` + `robots.txt` (config comments already anticipate this).
- No keyword stuffing: one intent per page; the LearningPotato-style 5-subsection keyword essay stays off the homepage.

## §18 — Accessibility (actionable)

1. Rebuild dropdowns on Radix `NavigationMenu` → keyboard + `aria-expanded` for free.
2. Real `<label>`s on all form fields; `aria-describedby` for errors; error text + color (not color alone).
3. Contrast pass: nothing lighter than `#64748B` on white; on navy, minimum `text-white/80`; fix `text-white/30` footer/modal text.
4. Focus-visible rings site-wide (`--ring` token exists — apply it).
5. `motion-safe:`/`prefers-reduced-motion` guard on all `motion` components (wrap once in a shared `MotionSection`).
6. Alt text policy: real descriptions for tutor/student photos; decorative orbs `aria-hidden`.
7. Sticky mobile bar: 48 px targets, `aria-label`s on icon buttons.
8. One `<h1>` per page; heading levels sequential (currently fine on home; verify inner pages).

## §19 — Performance UX

- Delete `PageLoadModal` (JS + interaction cost on first paint).
- Dependency prune: confirm and remove MUI/emotion if only shadcn is actually used; keep **one** carousel (embla — already the shadcn default); drop react-slick + swiper, react-dnd, chart.js *or* recharts, canvas-confetti.
- Animation budget: hero entrance + one fade-up per section, 200–300 ms, transform/opacity only; kill infinite loops (ping/pulse orbs, marquee testimonials on mobile).
- Fonts: `font-display: swap`, preload the two files actually used, subset Clash Display to weights used.
- Real photos (when added): AVIF/WebP ≤ 120 KB hero, lazy elsewhere, explicit dimensions.
- Keep route-splitting; consider `React.lazy` for below-fold home sections only if TBT demands it; measure with Lighthouse on a mid-range Android profile before/after Phase 1–2.

---

## §20 — What We Should Learn From LearningPotato

| LearningPotato approach | UX principle | How Tutoo adapts it | Expected benefit |
|---|---|---|---|
| "Home tuition in Pune" said instantly | Message–market match | H1 names the service, classes, and cities — never "platform" | Parents self-qualify in seconds; lower bounce |
| Phone/WhatsApp always in view | Zero-friction human contact | Contact in header + floating WhatsApp + sticky mobile bar | Captures low-digital-comfort parents who won't fill forms |
| "Book a Demo" as the single repeated action | One primary CTA | "Get Free Assessment" everywhere, 5 consistent touchpoints | No CTA competition; clearer funnel analytics |
| Free demo as risk reversal | Reduce cost of first step | Assessment framed as free, no-obligation, 24-h callback | More first submissions |
| Named tutors with degrees | Concrete > abstract trust | Verification process detail now; real tutor showcase Phase 4 | Trust without fabricating scale |
| Named local testimonials | Attributable social proof | Real quotes with name/class/area, or omit | Credibility that survives scrutiny |
| Class/city SEO pages | Long-tail local SEO | Keep board/class pages + add location/service pages — linked from footer/sections, **not** header | Organic growth without nav clutter |
| *(Anti-pattern)* 8-item, 42-page nav | Don't ship your sitemap as your menu | 5-item task nav | Less decision paralysis |
| *(Anti-pattern)* carousel hero, "0+" stats, text walls | Static clarity; honest proof; scannability | One headline; real-or-placeholder numbers; copy on inner pages | Faster comprehension, faster LCP |

---

## §21 — Final Recommended Design

**Design direction:** Clean · Warm · Local · Trustworthy · Parent-first (modern polish retained, platform theater removed).

**UX strategy in 8 points:**
1. One offer, one primary CTA, repeated consistently — everything funnels to the requirement/assessment form.
2. The hero *is* the funnel: mini requirement form above the fold.
3. Human channels (call/WhatsApp) one tap away at all times, especially mobile.
4. Truth as a design constraint: no number, badge, or feature claim the business can't back today.
5. Task-based 5-item navigation; SEO breadth lives in pages and the footer.
6. One trust story told once, concretely (verification, safety, visibility).
7. Mobile-first: sticky action bar, drawer-based selects, 60-second form.
8. Reuse the existing token/component/SEO infrastructure — this is a refactor + content rewrite, not a rebuild.

*(Homepage wireframe: §7.)*

---

## STEP 10 / §22 — Prioritized Roadmap

### Phase 1 — Critical UX (P0) — directly affects conversion; ~1–2 weeks of work
1. Remove fabricated stats/badges/"guarantee" site-wide (replace with honest copy or `[placeholder]`).
2. Delete `PageLoadModal`.
3. Hero rewrite: new H1/sub/CTAs + mini requirement form; remove fake dashboard + dead "Explore Platform".
4. Extend assessment form: mode (home/online), city + area/pincode, optional timing; success screen → WhatsApp handoff.
5. Mobile: visible header CTA + sticky bottom bar (Call · WhatsApp · Book).
6. WhatsApp integration (number into `seo.config.ts`, floating button, prefilled deep links).
7. Fix dead CTAs; fix dynamic-Tailwind class bug (HowItWorks/Results).
8. Nav flatten to 5 items; contact info persistent.

### Phase 2 — UI & structure (P1)
Homepage cut 13→9 sections (merge trust, ForTutors→strip, remove ProblemVsSolution/PartnerSchools) · How It Works 7→3 · design-system discipline pass (gradients, buttons, radius, shadows, type scale) · form labels + a11y quick wins · footer real links + NAP fix · dependency prune · real photography.

### Phase 3 — Content & SEO (P1/P2)
`/home-tuition` + `/online-tuition` landing pages · location pages (Kothrud, Kolhapur) · prerender marketing routes + sitemap/robots · class-page migration to `/classes/…` with 301s + breadcrumbs · FAQ/Service schema · analytics events (GA4 + Clarity) · blog cadence · parent-voice copy rewrite of About/Contact.

### Phase 4 — Advanced features (P2/P3, post-validation)
Real-tutor showcase section → public tutor profiles → search/filters · parent accounts/dashboard (only once sessions/progress data actually flows) · tutor dashboard · online-class scheduling integration · payments · additional cities.

**MVP = Phases 1–3.** Phase 4 items each require operational reality (enough tutors, real session data) before they add trust instead of subtracting it.

---

## §23 — Development ground rules (accepted)

Work within the existing stack (Vite/React/TS/Tailwind v4/shadcn/Formik); reuse `components/ui/*`, `SearchableSelect`, `StatusModal`, the SEO layer, and the assessment API; no new heavy dependencies (net-negative dependency count after the prune); tokens in `theme.css` remain the single styling source; responsive + accessible by default; no LearningPotato assets, colors, copy, or layouts — principles only.

---

*Next step: your approval (or edits) on — homepage structure (§7), nav (§6), design-system rules (§9), and the Phase 1 list (§22). Implementation starts only after that sign-off.*
