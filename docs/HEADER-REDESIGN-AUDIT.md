# Tutoo — Header & Navigation Audit + Redesign Proposal

**Prepared:** August 2026 · **No code changed** — this stops at your approval gate (§25).
Audits the current header against your proposed structure, using the real routes and real subject data in the project.

---

## 0. Two blockers you need to decide before anything is built

Your proposed header has six items. **Two of them have no destination in this project**, and one of those was retired *last round with your approval*. Everything else is straightforward.

### Blocker 1 — "Subject" has no pages, and subjects aren't standalone data

There is no `/subjects` route, and no subject page of any kind. Subjects exist only as an **API call that requires a class and a board first**:

```ts
getSubjects(class_id, board_id)   // src/app/book-free-assessment/services/assessmentApi.ts
```

So the backend cannot answer "list all subjects" — it can only answer "subjects for Class 8 CBSE". A "Subject" menu therefore can't be driven by your live data as-is. Three honest options:

| Option | What it means | Cost | My view |
|---|---|---|---|
| **S1. Subject → prefilled enquiry** | Dropdown of 10 real subjects; each opens `/book-free-assessment?subject=Mathematics`. No new pages. | Small | **Recommended now.** Uses the funnel you already have, zero thin pages. |
| **S2. Build `/subjects/[subject]` pages** | 8–10 real landing pages ("Maths tutors in Kothrud"), each with content + FAQ + form. Real long-tail SEO value. | Medium (a full round) | **Recommended later** — this was P3 in the original plan. Worth doing properly, not as menu filler. |
| **S3. Drop "Subject" from the header** | Subjects already appear as a homepage section; link it from the footer. | None | Fine if you'd rather keep the header at 5 items. |

**A "Subject" menu whose links go nowhere is worse than no menu.** Pick S1, S2 or S3.

### Blocker 2 — "For Parent/Student" points at a page we just retired

Last round you approved redirecting `/for-parents` → `/home-tuition`, because it duplicated the home-tuition page for the same audience and competed with it for the same keywords. That redirect is live now.

If "For Parent/Student" goes in the header, it needs a destination:

| Option | What it means | My view |
|---|---|---|
| **P1. Dropdown of existing pages** — How It Works · FAQs · Meet Our Tutors · Contact | No new pages, no reversal of last round's decision | **Recommended** |
| **P2. Restore `/for-parents` as a real page** | Reverses last round; the duplication problem comes back unless the page is rewritten to be genuinely different | Only if you have a distinct story for it |
| **P3. Rename it "Help"** or drop it | Simplest | Acceptable |

---

## A. Current header analysis

**File:** `src/app/components/Navbar.tsx` (270 lines — rebuilt last round from 935; the dead 3-level mega-menu is gone).

| Property | Current value | Your spec | Verdict |
|---|---|---|---|
| Desktop height | **80px** (`h-20`) | 72–84px | ✅ |
| Mobile height | **80px** (same `h-20`) | 60–72px | ⚠️ 8–20px too tall |
| Bar above header | TopInfoBar **46px** (location, phone, email) | — | ⚠️ 126px total before scroll |
| Logo | `logo_icon.png` at **48px** + text lockup, links to `/` | Comfortable, clickable | ✅ |
| Nav font | **15px / weight 500**, Inter | 14–16px / 500 | ✅ |
| Nav gap | **32px** (`gap-8`) | Consistent | ✅ |
| CTA | "Book Free Assessment", orange `#EA580C`, 24×12px padding, `rounded-xl` | Orange, white text, subtle radius | ✅ (label differs — see below) |
| Phone in header | `+91 84461 46039` with divider | — | ⚠️ **duplicates the TopInfoBar phone** |
| Sticky | Yes — `top-11` → `top-0` on scroll, white/90 + blur + soft shadow | Compact, not distracting | ✅ |
| Dropdowns | One (About), opens on hover **and keyboard focus**, real `<button>` trigger | Not hover-only | ✅ |
| Mobile menu | Slide-down, accordion for About, closes on route change, compact CTA always visible in bar | Large targets, CTA visible | ✅ |
| Active state | Violet text + underline on current page | Identifiable | ✅ |

**Current nav:** Home Tuition · Online Classes · Become a Tutor · About ▾ · Contact

---

## B. Existing item review (§6)

| Existing item | Keep in header? | Rename? | Move to footer? | Reason |
|---|---|---|---|---|
| Logo | **Keep** | No | No | Primary brand identifier, correctly sized and linked |
| Home Tuition | **Keep** | → **Home Tutor** | No | Same page, your wording. Route `/home-tuition` unchanged |
| Online Classes | **Keep** | → **Online Tutor** | No | Same page, your wording. Route `/online-tuition` unchanged |
| Become a Tutor | **Keep** | No | No | Already exactly your wording, → `/apply-tutor` |
| About ▾ (About Tutoo, Our Mission, How It Works, Meet Our Tutors) | **Split** | — | Partly | "How It Works" + "Meet Our Tutors" move into *For Parent/Student*; About Tutoo + Our Mission → **footer** (secondary, per your §7) |
| Contact | **Move** | — | **Footer** (already there) + inside For Parent/Student | Secondary by your §7; phone/WhatsApp are already one tap away everywhere |
| Phone number | **Remove from header** | — | Already in TopInfoBar + sticky mobile bar + footer | Duplicate; frees ~175px that the 6-item nav needs |
| CTA "Book Free Assessment" | **Keep** | → **Book a Free Assessment** | No | Your exact wording (adds "a") |
| — | **ADD** | **Find a Tutor** | — | New item → `/tutors` (page exists) |
| — | **ADD** | **Subject** | — | ⚠️ Blocker 1 — no destination yet |
| — | **ADD** | **For Parent/Student** | — | ⚠️ Blocker 2 — needs a destination decision |

---

## C. Will your exact structure fit? (measured, not guessed)

Six items + logo + phone + CTA, at the current 15px/32px-gap spec:

```
logo lockup 240 + nav 822 (labels 630 + gaps 192) + phone 175 + CTA 210 + padding 64  ≈ 1511px
```

- **1920px** ✅ fits
- **1440px** ❌ overflows by ~70px (this is the most common laptop width)
- **1280px** ❌ overflows badly

**Removing the duplicated phone** (it's already in the bar above) → ≈ **1336px**: fits 1440 comfortably, still ~56px over at 1280.
**Plus gap 32→24px and "For Parent/Student" → "For Parents"** → ≈ **1248px**: fits 1280. ✅

So your six items *can* work — but only with the phone out of the header and slightly tighter spacing. Shrinking the font instead is not an option (your §9 forbids it, correctly).

---

## D. Two structures — pick one

### Option A — your exact structure (viable with the fixes above)

```
[LOGO]  Find a Tutor  Online Tutor  Home Tutor  Subject ▾  For Parents ▾  Become a Tutor  [Book a Free Assessment]
```
- Order exactly as you specified
- Phone removed from header (stays in the bar above, sticky mobile bar, footer)
- Gap 24px, "For Parent/Student" shortened to "For Parents" to fit 1280px
- Tablet (768–1024px): collapses to the mobile burger menu

### Option B — my recommendation: 5 items

```
[LOGO]  Find a Tutor ▾  Subjects ▾  For Parents ▾  Become a Tutor  [Book a Free Assessment]

Find a Tutor ▾ →  Home Tutor  ·  Online Tutor  ·  Browse Tutors
```

**Why I'd argue for this:** to a parent, *Find a Tutor*, *Online Tutor* and *Home Tutor* are three doors to one job — "get my child a tutor". Four adjacent items that all mean "tutor" force a decision before the parent has any information to decide with. Grouping the two modes *under* Find a Tutor keeps every page one click away, keeps the header comfortable at 1280px without compromises, and matches the principle in your own §25: *"Do not add more navigation just because there are more pages."*

**Honest counter-argument for Option A:** flat menus are one click faster, and "Home Tutor" / "Online Tutor" as visible words do real SEO and comprehension work for a first-time visitor who doesn't yet know you offer both. If that visibility matters more to you than the tighter header, Option A is a legitimate choice — it just needs the phone removed to fit.

**Small copy note either way:** "Subject" reads better as **"Subjects"** (a menu of many). Not marketing language — just plural.

---

## E. Final navigation (Option A, with blockers resolved as recommended)

```
[LOGO]

Find a Tutor            → /tutors
Online Tutor            → /online-tuition
Home Tutor              → /home-tuition
Subjects ▾              → 10 real subjects → /book-free-assessment?subject=…   (S1)
   Mathematics · Science · English · Physics · Chemistry
   Biology · Hindi & Marathi · Olympiads · JEE · NEET
For Parents ▾                                                                  (P1)
   How It Works         → /how-it-work
   Meet Our Tutors      → /tutors
   FAQs                 → /#faq
   Contact Us           → /contact-us
Become a Tutor          → /apply-tutor

[Book a Free Assessment] → /book-free-assessment
```

Every destination above already exists. Nothing new is invented.

## F. Footer changes (§7/§8)

Moving out of the header: **About Tutoo**, **Our Mission**, **Contact** (Contact stays reachable inside For Parents too).
The footer already carries: For Parents · For Tutors · Company · Popular Classes · Legal, plus logo, description, email, phone and service areas. Only change needed: confirm About Tutoo + Our Mission sit under **Company** (they already do). No footer rebuild required.

## G. Typography, spacing & responsive spec

**Typography** — keep the existing fonts (Inter UI + Clash Display headings):

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Nav item | 15px | 16–17px | 500 |
| Dropdown item | 14px | 16px | 500 |
| CTA | 15px | 15–16px | 600 |
| Logo wordmark | 20px | 18px (mark only under 400px) | 900 |

**Spacing**

| Token | Desktop | Mobile |
|---|---|---|
| Header height | 80px | **68px** (down from 80) |
| Logo mark | 48px | 40px |
| Logo → nav | 40px | — |
| Nav gap | **24px** (from 32) | — |
| Nav → CTA | 24px | — |
| CTA padding | 24×12px, radius 12px | 20×12px |
| Dropdown | 8px offset, 12px padding, radius 16px, 1px `#E6E3F0` border | — |
| Mobile menu row | — | **48px min height**, 16px gap |

**Responsive behaviour**

| Range | Behaviour |
|---|---|
| 1440–1920 | Full 6-item nav + CTA, comfortable |
| 1280–1439 | Full nav, gap 24px |
| 1024–1279 | Burger menu (6 items don't fit honestly below 1280) |
| 768–1023 | Burger; logo mark + wordmark |
| 431–767 | Burger; compact "Free Assessment" CTA stays in the bar |
| 320–430 | Logo mark only under 400px; burger; CTA in bar; sticky bottom bar continues to carry Call · WhatsApp · Book |

**States:** default (ink) · hover (violet) · active (violet + underline) · focus (2px violet ring, 2px offset) · dropdown open on hover **and** keyboard focus · **Esc closes** (to add) · mobile open · scrolled (docks to top, white/90 + blur + soft shadow).

**Mobile CTA — your §13:** you already have **Option A + C running together**: a compact "Free Assessment" button in the header bar *and* a sticky bottom bar (Call · WhatsApp · Book). That's two instances of the same action on screen at once. Recommend **keeping the sticky bottom bar and dropping the compact header button on mobile** — the bottom bar is thumb-reachable and already carries the phone and WhatsApp. That also buys back header space for the logo.

---

## H. What I'd change vs. what I'd leave alone

**KEEP:** logo and its sizing · sticky behaviour · CTA colour/shape · nav font size and weight · active/hover/focus states · mobile menu mechanics · all existing routes.
**RENAME:** Home Tuition → Home Tutor · Online Classes → Online Tutor · CTA → "Book a Free Assessment" · (suggest Subject → Subjects).
**ADD:** Find a Tutor · Subjects ▾ · For Parents ▾ · Esc-to-close on dropdowns.
**REMOVE:** phone from the header (duplicate) · compact mobile CTA (duplicate of sticky bar).
**MOVE TO FOOTER:** About Tutoo · Our Mission · (Contact also stays in For Parents).
**REDUCE:** mobile header 80px → 68px · nav gap 32px → 24px.

---

## Decisions I need before I build

1. **Subject:** S1 (prefilled enquiry links — recommended now), S2 (build real subject pages — a proper round of work), or S3 (drop from header)?
2. **For Parent/Student:** P1 (dropdown of existing pages — recommended), P2 (restore `/for-parents`), or P3 (drop)?
3. **Structure:** Option A (your exact 6 items) or Option B (5 items, modes grouped under Find a Tutor)?
4. **Phone out of the header?** (Recommended — it's duplicated in the bar directly above it.)
5. **Drop the compact mobile CTA** in favour of the sticky bottom bar? (Recommended.)
6. **"Subject" → "Subjects"?**

Tell me 1–6 and I'll implement in one pass, reusing the existing Navbar component and every existing route.
