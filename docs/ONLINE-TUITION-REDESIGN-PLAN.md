# /online-tuition — Redesign Plan

**Status:** awaiting approval. No code changed yet.
**Audited:** `src/app/services-pages/OnlineTuitionPage.tsx` (97 lines of config) +
`src/app/services-pages/ServiceLandingPage.tsx` (245 lines, the actual UI),
rendered at 1440px and 390px.

---

## 0. The one architectural fact that shapes everything

`/online-tuition` has almost no code of its own. It is a **content object** passed
into `ServiceLandingPage`, which is shared by **four routes**:

```
/home-tuition            ─┐
/home-tuition/kothrud    ─┼─→  ServiceLandingPage.tsx
/home-tuition/kolhapur   ─┤
/online-tuition          ─┘
```

So "redesign this page" has a blast radius. Three options:

| Option | What it means | Verdict |
|---|---|---|
| **A** — rewrite `ServiceLandingPage` | All four pages change at once | ✗ Online and home tuition need genuinely different sections (device setup vs. city coverage). Forcing one template is what produced today's thin page. |
| **B** — give `/online-tuition` a bespoke page | Fast, zero risk to city pages | ✗ Creates a second design system by accident. Next page repeats the work. |
| **C** — build a reusable section kit, compose this page from it | `ServiceLandingPage` untouched; city pages keep working; `/home-tuition` migrates later using the same kit | ✅ **Recommended** |

Option C also gets a head start: the homepage rebuild already produced
`SectionHeading`, `AssetImage`, the `ExpertTeachers` card pattern, the accordion
FAQ pattern, and the `Reviews` carousel. This page reuses them rather than
inventing parallel versions — which is the actual fix for §36 UI Consistency.

---

## 1. Design direction

**Subject:** live one-to-one online tuition for Indian school students, Class 1–12.
**Audience:** a parent in Pune, Kolhapur or a smaller town with no good tuition nearby.
**The page's single job:** answer *"can you teach my child, and is it real teaching?"*

The characteristic artifact of this service is not a laptop. It is **the class
window itself** — a tutor's face in a video tile, a shared page being worked
through, an OTP that proves the class started, a notebook filling up beside the
screen. And the characteristic parent anxiety is not "is it convenient?" — it is
**"is my child actually being taught, or just parked in front of a screen?"**

Every competitor page answers that with four benefit cards. This page answers it
by **showing the class**.

### Signature element — "What a class actually looks like"

One panel, roughly hero-adjacent, that depicts a real session: video tile with the
tutor, the shared working area, the OTP chip, the elapsed timer, the notebook. It
does in one visual what §15, §18 and half of §17 ask four separate sections to do:
live not recorded, one-to-one, attendance you can verify, doubts asked in the moment.

This is the thing the page is remembered by. Everything else stays quiet.

### Constraints I am accepting from the brief

- **No new font.** §4 is explicit. The site is `Plus Jakarta Sans` throughout
  (`--font-heading` and `--font-body` both resolve to it, differentiated by size
  and weight). I will not introduce a display face for this page alone. Typographic
  personality has to come from scale, weight and measure — not a second family.
- **Orange for action, violet for structure.** Already the site's rule. Unchanged.
- **Reuse header, footer, buttons, radii, card style.** Unchanged.

---

## A. Current page audit

| # | Current section | Problem | Verdict | Recommendation |
|---|---|---|---|---|
| 1 | **Hero** — centred text, `max-w-4xl`, eyebrow pill, H1, 4-line intro, 2 buttons, 3 check-chips | No image at all. Narrow centred column reads as a blog post, not a service page. Does not resemble the new homepage hero, so the site looks like two sites. Intro paragraph crams class range, boards, JEE/NEET, timings and tutor quality into one 45-word sentence. | **REPLACE** | Two-column hero: copy left, the signature class-window panel right. Cut the intro to ~20 words; move the class/board detail into the coverage section where it is scannable. |
| 2 | **Benefits** — 4 cards | The section has **no heading at all** — no H2. Four cards, four *identical* `CheckCircle2` icons in identical violet wells. Titles wrap mid-phrase ("Truly one-to-|one"). | **IMPROVE** | Keep all four claims — they are honest and well-written. Give the section an H2, give each card its own icon, fix the wrap. |
| 3 | **How it works** — 4 numbered steps, vertical list | Content is good. Presentation is a plain stacked list in a `max-w-4xl` column — a lot of vertical space for four short lines. | **IMPROVE + MOVE** | Keep the copy verbatim. Restyle to the homepage's `HowItWorks` treatment. Move it **after** the coverage answer — a parent asks "can you teach my child?" before "what is the process?" |
| 4 | **"What you need" + "Where we teach"** — two tinted cards | "Where we teach: *Anywhere in India* / *English & regional-language tutors*" is filler on an online page — the whole point is that geography does not apply. "What you need" is genuinely useful. | **REMOVE** (Where we teach) / **MOVE** (What you need) | Fold "What you need" into the class-window panel as a short device line. Replace the geography card with a real link to `/home-tuition` for parents in Kothrud/Kolhapur who would prefer in-person. |
| 5 | **FAQ** — 4 questions, chevron accordion | Only 4 questions. Styling predates the homepage FAQ (chevron vs orange +/−, no motion, no violet ring on open). | **IMPROVE** | Keep all 4 questions, add 3–4 more that match real functionality. Restyle to the homepage accordion. |
| 6 | **Final CTA** — navy band | Structurally fine and visually the strongest thing on the page. | **KEEP** | Restyle only for consistency with the homepage `FinalCTA`. |
| 7 | — | **No tutor showcase.** `TutorCard` exists and is used on `/find-a-tutor`; this page never shows a single tutor. | **ADD** | §16 — reuse the existing card, 3–4 online-capable tutors. |
| 8 | — | **No classes / boards / subjects.** `BOARD_OPTIONS`, `CLASS_BAND_OPTIONS`, `BOARD_CLASS_DATA` and the subject list all already exist in the project and none are surfaced here. Largest SEO and relevance gap on the page. | **ADD** | §11–13, merged — see judgement call J1. |
| 9 | — | **No trust section.** The homepage has tutor checks, OTP, attendance, tutor replacement. None of it appears on the page where a parent is deciding. | **ADD** | §17, using only the six safeguards that are real. |
| 10 | — | **Zero images in `<main>`.** Verified: `document.querySelectorAll('main img').length === 0`. | **ADD** | Class-window panel + tutor photos. |

### Cross-cutting problems

| Problem | Evidence | Fix |
|---|---|---|
| **CTA label lies about its destination** | Hero button says **"Find an Online Tutor"** but navigates to `/book-free-assessment?mode=online` — a form. Meanwhile `/find-a-tutor` exists and **is never linked from this page** except via the footer. | Split the vocabulary, matching the convention already set on the homepage: **"Find a Tutor"** → `/find-a-tutor` (browse). **"Book a Free Assessment"** → the form. §7 asks for exactly this pair. |
| **Two design systems on one site** | This page: `rounded-2xl`, `border-[#E6E3F0]`, `shadow-[0_1px_2px…]`. New homepage: `rounded-[22px]`, `ring-1 ring-[#EFEDF6]`, `shadow-[0_8px_28px…]`, `SectionHeading`. | Adopt the homepage kit. |
| **Thin heading hierarchy** | 1 × H1, **3 × H2**, 10 content H3s. Two whole sections have no H2. | 7 H2s — see §F. |
| **Poor density** | Desktop 3456px, mobile 5993px for four short sections. | More answered questions per screen, not more scrolling. |
| **Dead-end page** | No internal links out except the footer. | Deep links into `/find-a-tutor` with filters pre-applied. |

---

## B. Final section structure

The brief's §26 lists 16 sections. That would produce a page that repeats itself
four times and directly contradicts §2 ("do not add sections just to make the page
longer") and §27 ("avoid repetitive content"). **11 sections**, in journey order:

```
HEADER  (existing Navbar — "Online Tutor" already marks active)
   │
 1 HERO                    what is this, who is it for, what next
   │                       ← signature class-window panel lives here
 2 WHY ONLINE TUITION      4 benefit cards (existing copy, new icons)
   │
 3 CAN WE TEACH YOUR CHILD classes + boards + subjects, merged   [J1]
   │
 4 HOW IT WORKS            the 4 existing steps, restyled
   │
 5 INSIDE A CLASS          live / one-to-one / OTP / doubts / device  [J2]
   │
 6 OUR TUTORS              existing TutorCard ×4 → /find-a-tutor
   │
 7 HOW WE KEEP IT SAFE     6 real safeguards
   │
 8 FOR PARENTS / STUDENTS  two columns, one section              [J3]
   │
 9 REVIEWS                 existing carousel — gated, see §E
   │
10 FAQ                     7 questions, homepage accordion
   │
11 FINAL CTA               Find a Tutor + Book a Free Assessment
   │
FOOTER  (existing, unchanged)
```

### Three judgement calls where I depart from the brief

**J1 — Classes, Boards and Subjects become one section, not three.**
§11, §12 and §13 ask for three separate sections. Three consecutive chip-grids
answering the same underlying question ("can you teach my child?") is repetition,
and it is what makes competitor pages feel endless. Instead: one section, three
tabs or three stacked rows — **Class → Board → Subject** — where each chip
deep-links into `/find-a-tutor` with that filter applied. Same information, one
third of the scroll, and it *does something* rather than just listing.
→ *If you would rather have three separate sections for SEO reasons, say so and
I will split it — the data and components are identical either way.*

**J2 — §15 ("Why personalized") and §18 ("Learning experience") merge into "Inside a class".**
Both sections describe the same six facts. §15 additionally proposes a
Generic-vs-Tutoo comparison table; I would drop that. It invites a parent to
compare you against an unnamed strawman, and every claim in the "Generic" column
is one you cannot substantiate about anyone else.

**J3 — §19 (Parent benefits) and §20 (Student benefits) become one two-column section.**
Two full-width sections of bulleted benefits back to back is the single most
skippable pattern on a landing page. Side by side, the contrast *is* the design,
and it takes one screen instead of two.

**Dropped entirely:** nothing the brief asked for is lost — every point in §15,
§18, §19, §20 appears somewhere above.

---

## C. Content plan

Wording follows §27: short, plain, parent-legible in seconds. No invented numbers.

### 1. Hero

| | |
|---|---|
| **Eyebrow** | `Online Classes · Anywhere in India` *(kept — it is doing real work)* |
| **H1** | **Learn from the right tutor, from anywhere.** |
| **Sub** | Live one-to-one classes for Class 1–12. Your child's own tutor, on your own schedule. |
| **Primary CTA** | **Find a Tutor** → `/find-a-tutor?mode=online` *(orange)* |
| **Secondary CTA** | **Book a Free Assessment** → `/book-free-assessment?mode=online` *(outline)* |
| **Reassurance row** | Free first assessment · Live, not recorded · No obligation |
| **Visual** | Signature class-window panel |

*Why not "Learn From Anywhere"?* The current H1 sells convenience. Convenience is
not the objection — a parent choosing online tuition has usually already accepted
it. Their objection is quality. "The right tutor" answers the objection; "from
anywhere" keeps the reach. Both fit on one line.

### 2. Why online tuition?

**H2:** Why parents choose online classes
Four cards, **existing copy kept verbatim** (it is accurate and well-written), each
with its own icon:

| Icon | Title | Body |
|---|---|---|
| `Globe` | Learn from anywhere | No travel — live classes at home, in any city in India. |
| `ShieldCheck` | Same verified tutors | Online tutors go through the same verification and interview. |
| `Users` | Truly one-to-one | Live interactive sessions, not recorded videos or batch classes. |
| `Laptop` | Simple setup | A phone or laptop and an internet connection is all you need. |

### 3. Can we teach your child?

**H2:** Can we teach your child?
**Lead:** Pick your class and see the tutors we have for it.

| Row | Chips (from existing data) |
|---|---|
| Class | Class 1–5 · Class 6–8 · Class 9–10 · Class 11–12 · JEE / NEET |
| Board | CBSE · ICSE · SSC · HSC |
| Subject | Mathematics · Science · English · Physics · Chemistry · Biology · Hindi & Marathi · Olympiads |

Every chip → `/find-a-tutor?classBand=…` / `?board=…` / `?subject=…`
**CTA:** Browse all tutors → `/find-a-tutor`
**Not shown:** IB, IGCSE — §12 lists them, Tutoo does not support them.

### 4. How online tuition works

**H2:** How it works — **all four existing steps kept verbatim.** Numbered markers
are justified here: this genuinely is a sequence, and the order carries information.

### 5. Inside a class *(signature)*

**H2:** What a class actually looks like
**Lead:** Not a recorded video. Your child and their tutor, live.

| | |
|---|---|
| Live, not recorded | Your child talks to their tutor in real time and asks questions as they come up. |
| One tutor, one student | No batch. The whole class is about your child's doubts. |
| Every class starts with an OTP | So you know exactly when it began — and attendance is recorded. |
| Work on the same page | The tutor can see and mark the work your child is doing. |
| What you need | A phone, tablet or laptop and an internet connection. We help with setup before the first class. |

### 6. Our tutors

**H2:** Tutors who teach online
**Lead:** Every tutor gives us their ID and qualification documents, and is interviewed before their first class.
Four `TutorCard`s, filtered to `mode === 'online' || 'both'`.
**CTA:** View all tutors → `/find-a-tutor?mode=online`

### 7. How we keep your child safe

**H2:** How we keep your child safe — the six real safeguards from the homepage
`SafetyTrust`: document checks, interview, class OTP, attendance record, tutor
replacement, support line. Dark navy section — the page's only dark band before
the CTA, same as the homepage rhythm.

### 8. For parents / for students

**H2:** What you get out of it

| For parents | For students |
|---|---|
| See when each class starts and ends | Ask questions without waiting your turn |
| Tell us what you need, we shortlist | Go at your own pace |
| Change tutor if the fit is wrong | Get help with the topics you find hard |
| Fee agreed before anything starts | Same tutor every class |

### 9. Reviews — existing `<Reviews />`, unchanged. See §E for the gate.

### 10. FAQ

**H2:** Questions parents ask us — the 4 existing, verbatim, plus:

- How much do online classes cost?
- Can I choose my child's tutor?
- What if my child does not get along with the tutor?
- Which timings are available?

### 11. Final CTA

**H2:** Ready to find the right tutor?
**Sub:** Tell us your child's class and subject. The first assessment is free.
**Buttons:** Find a Tutor *(orange)* · Book a Free Assessment *(white)* · phone link below.

---

## D. UI design

### Layout

| Section | Desktop | Mobile |
|---|---|---|
| 1 Hero | 2-col `lg:grid-cols-2`, copy left, panel right, `max-w-7xl` | stacked, panel below copy |
| 2 Why | 4-col card grid | 1-col |
| 3 Can we teach | 3 labelled rows of chips, `max-w-5xl` | horizontal scroll strips per §32 |
| 4 How it works | 4 cards + connecting line | stacked, line hidden |
| 5 Inside a class | 2-col: panel left, 5 facts right | panel, then facts |
| 6 Tutors | 4-col `TutorCard` | 1-col, or swipe strip |
| 7 Safety | 3×2 glass cards on `#0A1028` | 1-col |
| 8 Parents/students | 2-col, orange vs violet | stacked |
| 9 Reviews | existing carousel, 3 visible | 1 visible, swipe |
| 10 FAQ | `max-w-3xl` accordion | same |
| 11 Final CTA | centred, `max-w-3xl` | same |

### Cards, colour, spacing — all inherited, nothing new

- **Card:** `rounded-[22px]`, `ring-1 ring-[#EFEDF6]`, `shadow-[0_8px_28px_rgba(30,27,58,0.06)]`, hover `-translate-y-1.5` + violet ring. Identical to the homepage.
- **Section rhythm:** `py-16 lg:py-24`, alternating `#FFFFFF` / `#FAFAFC`, one `#0A1028` band at §7.
- **Orange `#EA580C`:** primary CTAs and the parents column only.
- **Violet `#7B2FF7` / `#6D28D9`:** eyebrows, icons, structure, students column.
- **Text:** `#1E1B3A` headings, `#4B4763` body, `#6E6A85` meta.
- **Headings:** existing `SectionHeading` component — eyebrow + H2 + lead, one component for all 7.

### Images

| Slot | Source |
|---|---|
| Hero panel | Composed UI panel — not a photo. See below. |
| Inside-a-class panel | Reuses the same panel component, different state |
| Tutor cards ×4 | Existing `teacher-*.jpg` via `AssetImage`, initials fallback |

**On the class-window panel being UI rather than photography:** a stock photo of a
child at a laptop shows a screen you cannot read, which is exactly the part that
matters. A rendered panel shows the OTP, the timer and the video tile legibly at
390px. It is also the only element on the page that could not be lifted onto a
competitor's site unchanged.

### Motion

One orchestrated moment, not scattered effects: the hero panel assembles on load —
video tile, then OTP chip, then timer — over ~600ms, once. Everything else is the
existing `whileInView` fade-up. `prefers-reduced-motion` disables the sequence.

---

## E. Data requirements

### Already exists — reuse, do not duplicate

| Need | Source | Note |
|---|---|---|
| Class bands | `CLASS_BAND_OPTIONS` — `data/tutorsDemo.ts` | 5 bands |
| Boards | `BOARD_OPTIONS` — `data/tutorsDemo.ts` | CBSE, ICSE, SSC, HSC |
| Subjects | `SUBJECTS` — `components/SubjectsPrograms.tsx` | 8; lift to `data/` so both pages share one list |
| Tutors | `TUTORS` → `DEMO_TUTORS` fallback | Filter `mode !== 'home'` |
| Tutor card | `components/common/TutorCard.tsx` | §16 — reuse, do not restyle |
| Headings | `components/common/SectionHeading.tsx` | |
| Images | `components/common/AssetImage.tsx` | |
| Reviews | `components/Reviews.tsx` | |
| FAQ schema | `seo/schema.ts → getFAQSchema` | |
| Board/class pages | `BOARD_CLASS_DATA` | Real routes exist at `/:board/:category/:className` |

### Needs creating

| File | Why |
|---|---|
| `data/subjects.ts` | One subject list, currently hardcoded inside `SubjectsPrograms` |
| `components/online/ClassWindowPanel.tsx` | The signature element |
| `components/online/CoverageSelector.tsx` | §3 chips → filtered `/find-a-tutor` |
| `components/online/InsideAClass.tsx` | §5 |
| `components/online/AudienceSplit.tsx` | §8 |

### No new APIs needed

§33 asks not to load all tutors for four cards. `TUTORS`/`DEMO_TUTORS` are static
imports, so there is no fetch to optimise — `.filter().slice(0,4)` is the whole cost.
When a real `GET /api/tutors` lands, it should take `?mode=online&limit=4`.

### Two gates you need to decide

1. **`USE_DEMO_TUTORS`** is `true`. The tutor cards will show sample profiles.
2. **`USE_DEMO_REVIEWS`** is `true`. Section 9 will show placeholder reviews.
   Fabricated reviews are a legal exposure in India (Consumer Protection Act
   unfair-trade-practice provisions; BIS IS 19000:2022 is the standard the CCPA
   points to). **My recommendation: omit section 9 from this page entirely until
   real quotes exist** — the page converts fine without it, and this is a second
   page's worth of exposure for no gain. Say the word and I will include it.

---

## F. SEO plan

### Title & meta

Current title is 66 chars and already good. Tightened for the primary keyword:

```
Title:  Online Tuition & Online Tutors for Class 1–12 | Tutoo
Meta:   Live one-to-one online tuition with verified tutors for Class 1–12 —
        CBSE, ICSE, SSC and JEE/NEET. Learn from anywhere in India. Free first
        assessment, no obligation.
```

Title 58 chars · meta 189 chars. Both inside display limits.

### Heading hierarchy — 1 × H1, 7 × H2 (today: 3)

```
H1  Learn from the right tutor, from anywhere.
 H2 Why parents choose online classes
     H3 ×4  benefit titles
 H2 Can we teach your child?
     H3 ×3  Class / Board / Subject
 H2 How it works
     H3 ×4  step titles
 H2 What a class actually looks like
     H3 ×5  fact titles
 H2 Tutors who teach online
     H3 ×4  tutor names
 H2 How we keep your child safe
     H3 ×6  safeguard titles
 H2 What you get out of it
     H3 ×2  For parents / For students
 H2 Questions parents ask us
 H2 Ready to find the right tutor?
```

*(9 H2s counting FAQ and CTA; 7 are content sections.)*

### Structured data

- `Service` — keep, already correct (`areaServed: India`).
- `FAQPage` — regenerate from the expanded 8-question list via `getFAQSchema`.
- **No `AggregateRating`** — nothing to substantiate.

### Internal links — all verified against `App.tsx` routes

| From | To | Exists |
|---|---|---|
| Hero primary | `/find-a-tutor?mode=online` | ✅ |
| Hero secondary | `/book-free-assessment?mode=online` | ✅ |
| Class chips | `/find-a-tutor?classBand=…` | ✅ |
| Board chips | `/find-a-tutor?board=…` | ✅ |
| Subject chips | `/find-a-tutor?subject=…` | ✅ already supported (`page.tsx:71`) |
| "Prefer in person?" | `/home-tuition` | ✅ |
| Kothrud / Kolhapur | `/home-tuition/kothrud`, `/home-tuition/kolhapur` | ✅ |
| Tutors CTA | `/find-a-tutor?mode=online` | ✅ |
| Final CTA | `/book-free-assessment?mode=online` | ✅ |

`/subjects/[subject]` and `/tutors/[tutor]` from §29 **do not exist** and will not
be linked.

### Image alt text

Every tutor card: `"{name}, {qualification}, online tutor"`. The class-window panel
is composed UI with an `aria-label` describing the session, not decorative.

---

## G. Responsive plan

Verified at every width in §30 before handover.

| Width | Behaviour |
|---|---|
| 320–430 | 1-col everywhere. Hero: copy → CTAs → panel. Coverage chips scroll horizontally with an edge fade (§32). FAQ accordion. Tutor cards stack. Panel scales to ~340px wide and stays legible — the constraint that sets its minimum type size. |
| 768–1024 | 2-col benefit and tutor grids. Hero still stacked at 768, 2-col from `lg`. Safety 2-col. |
| 1280–1920 | Full layout. `max-w-7xl` caps line length; hero panel does not exceed 620px so it never dwarfs the copy. |

Checks on every build: `scrollWidth - clientWidth === 0`, zero console errors,
visible keyboard focus, 44×44 minimum touch targets, `prefers-reduced-motion`
honoured, no text below 12px.

---

## H. Implementation plan

Each step builds and renders green before the next.

| # | Step | Touches |
|---|---|---|
| 1 | Lift subjects to `data/subjects.ts`; point `SubjectsPrograms` at it | 2 files |
| 2 | Build `ClassWindowPanel` — the signature element, hardest thing, done first | new |
| 3 | New `OnlineTuitionPage` shell + hero, `ServiceLandingPage` left untouched | 1 new |
| 4 | Sections 2–4 (Why / Coverage / How it works) | 2 new |
| 5 | Section 5 (Inside a class) | 1 new |
| 6 | Section 6 (Tutors) — reuse `TutorCard` | inline |
| 7 | Section 7 (Safety) — extract shared variant from `SafetyTrust` | 1 edit |
| 8 | Section 8 (Parents/students) | 1 new |
| 9 | FAQ + Final CTA | inline |
| 10 | SEO: `pageMeta`, `Service` + `FAQPage` schema | 2 edits |
| 11 | Responsive pass at all 10 widths | — |
| 12 | Accessibility + performance pass | — |
| 13 | Sync to `D:\Tutoo\tutoo-website` | — |

**Not touched:** `ServiceLandingPage.tsx`, `HomeTuitionPage`, `KothrudPage`,
`KolhapurPage`, `Navbar`, `Footer`. `/home-tuition` migration is a separate,
later job using the same kit.

---

## Decisions I need from you

1. **Option C** for architecture — new page composed from a reusable kit, city pages untouched? *(recommended)*
2. **J1** — Classes/Boards/Subjects as **one** section, or three separate ones?
3. **J2** — drop the Generic-vs-Tutoo comparison table?
4. **J3** — parents and students side by side in one section?
5. **Reviews** — omit from this page until real quotes exist? *(recommended)*
6. **H1** — *"Learn from the right tutor, from anywhere."* or keep *"Learn From Anywhere"*?

Approve as-is, or tell me which of these to change, and I will start at step 1.
