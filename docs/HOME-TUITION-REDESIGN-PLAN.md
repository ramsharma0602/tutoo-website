# /home-tuition — Redesign Plan

**Status: APPROVED AND BUILT.** All three home-tuition routes now render from
`HomeTuitionLayout`; `ServiceLandingPage.tsx` is retired.

Decisions taken (§0): **0.5** ID + documents + interview — confirmed
operational, so the safety section is written on it · **0.6** option (b), the
city pages were rebuilt too · **0.8** header, mobile bar and footer all now say
"Book a Free Assessment" · **0.10** a new hero photograph is being generated;
the hero falls back to `home-tuition.webp` until it lands.
Everything else follows the recommendation in its section.

Two bugs found during the build and fixed beyond the original scope: the
"JEE & NEET" board card could never return a result (it filtered on a board
value no tutor carries — this was live on `/online-tuition` too), and every
page was emitting two `BreadcrumbList` blocks.

This is written against the actual repository, not against the brief's
assumptions. Where the two disagree, the repository wins and I say so.

Read §0 first. Nine of those decisions change what gets built.

---

## §0 — Decisions I need from you before I build

The brief asks for several things this codebase cannot currently deliver
honestly. Building them anyway would produce links that return nothing and
claims we cannot stand behind. Each item below is a real fork.

### 0.1 · IB and IGCSE — I will not list them

Brief §12 asks for IB and IGCSE. `BOARD_OPTIONS` is
`['CBSE', 'ICSE', 'SSC', 'HSC']` (`data/tutorsDemo.ts:243`) and no tutor in
the registry carries IB or IGCSE. A parent who clicks "IGCSE" would land on an
empty result page — we would have advertised a service and then failed at the
first click.

**Proposed:** CBSE, ICSE, SSC, plus JEE/NEET preparation. Same four as
`/online-tuition`. **Tell me if Tutoo actually staffs IB/IGCSE** and I will add
them to the data model, not just to the page.

### 0.2 · Individual "Class 1 … Class 12" links would all return zero

Brief §11 asks for twelve class entries. `/find-a-tutor` filters on
`t.classBands` with an **exact string match** (`find-a-tutor/page.tsx:120`),
and the only valid values are the five bands in `CLASS_BAND_OPTIONS`:
`Class 1–5`, `Class 6–8`, `Class 9–10`, `Class 11–12`, `JEE / NEET`.

`?class=Class 7` matches nothing. Twelve cards, twelve dead ends.

**Proposed:** the five bands, exactly as `/online-tuition` uses them. The
twelve-class long-tail is already served properly by the
`/:board/:category/:className` pages (`boardClassData.ts`), which is where
that SEO belongs — not duplicated here.

### 0.3 · There is no `/subjects` route and no tutor profile page

Brief §31 asks for links to `/subjects` and `/tutors/[tutor]`. Neither exists.
`/tutors` is a `<Navigate>` to `/find-a-tutor` (`App.tsx:231`), and
`TutorCard` has no profile link — its CTA goes to the enquiry form
(`TutorCard.tsx:145–149`).

**Proposed:** "View all home tutors" → `/find-a-tutor?mode=home`. No profile
links until `/tutors/:slug` exists. I can build that page as a separate piece
of work — say the word, but it is not part of this one.

### 0.4 · The City → Area → Pincode selector is over-built for two cities

Brief §14/§34 asks for City → Area → Pincode → Class → Subject. The reality:

- Two cities. `CITY_OPTIONS = ['Pune', 'Kolhapur']` (`tutorsDemo.ts:251`).
- Areas exist as **display chips only** on the two city pages — six for
  Kothrud, five for Kolhapur (`KothrudPage.tsx:55`, `KolhapurPage.tsx:55`).
  Nothing filters on them.
- **No pincode data exists anywhere.** The only two mentions are a form
  placeholder and a validation message.

A four-step selector over two options is friction pretending to be
sophistication, and the area/pincode steps would need data we would have to
invent.

**Proposed:** a two-card city chooser (Kothrud · Kolhapur) plus a third
"not in either city" card that routes to `/online-tuition`, each card
deep-linking `/find-a-tutor?mode=home&city=Pune|Kolhapur`. Area stays where it
belongs — a free-text field in the enquiry form, because that is the only
place it is actually used.

### 0.5 · "Verified tutors" is the load-bearing claim on this page — is it true?

Home tuition means **a stranger enters your house**. That is the single
difference from online tuition that matters emotionally, and the whole page
leans on the verification claim to answer it.

The site currently states, in several places, that every tutor is
"ID-verified and interviewed before their first class"
(`HomeTuitionPage.tsx:21`).

**I need you to confirm that is literally what happens today** — documents
collected, identity checked, interview conducted. If it is aspirational rather
than operational, I will write the section around what you *do* do
("we meet every tutor before we send them") and we fix the copy site-wide.
This is the one sentence on the site I would least like to be wrong.

### 0.6 · The city pages will look wrong the moment this page ships

`/home-tuition`, `/home-tuition/kothrud` and `/home-tuition/kolhapur` all
render through `ServiceLandingPage.tsx`. If I rebuild only `/home-tuition`,
the two city pages remain on the old visual system — flat cards,
`border border-[#E6E3F0]`, a `#0A1028` CTA band — and a parent clicking
"Home Tuition in Kothrud" walks from the new page into the old one.

**Two options:**

- **(a) Page only.** Rebuild `/home-tuition`. City pages stay as they are.
  Faster; leaves a visible seam one click away.
- **(b) Page + city pages (recommended).** Build the new sections so they take
  city props, then render Kothrud and Kolhapur from the same components with
  city-specific copy. `ServiceLandingPage.tsx` is deleted. Roughly 40% more
  work; it is what makes the site read as one product.

### 0.7 · The primary CTA currently lies about where it goes

`ctaLabel: 'Find a Home Tutor'` navigates to `/book-free-assessment`
(`ServiceLandingPage.tsx:42, 70`). A button that says *find a tutor* and opens
a form is the classic CRO leak: the visitor who wanted to browse bounces, and
the visitor who wanted to enquire is confused by the label.

**Proposed:** "Find a Home Tutor" → `/find-a-tutor?mode=home` (browse).
"Book a Free Assessment" → `/book-free-assessment?mode=home` (convert).
Two intents, two buttons, honest labels. See §H.

### 0.8 · Three names for the same CTA, site-wide

- Header: **"Book a Free Consultation"** (`Navbar.tsx:277, 370`)
- Mobile sticky bar: **"Find My Tutor"** (`StickyMobileCTA.tsx:50`)
- Pages: **"Find a Tutor"** / **"Book a Free Assessment"**

The header button routes to `/book-free-assessment`, so "Consultation" is
wrong on its own terms. Brief §29 asks for exactly one vocabulary.
**Proposed:** header and sticky bar both become **"Book a Free Assessment"**.
Two files, five minutes, and every page gets more consistent. Confirm and I
will include it.

### 0.9 · A real bug in the city-page → form handoff

`/home-tuition/kothrud` sends `?area=Kothrud%2C%20Pune`
(`KothrudPage.tsx:18`). `BookAssessmentForm` reads `area` (`:93`) but leaves
`city` empty (`:192`) — and the city select's options are
`Kothrud (Pune) / Kolhapur / Other`, which the area string does not match
anyway. A parent arriving from the Kothrud page gets a half-filled form with a
required empty dropdown.

Three vocabularies for one concept currently exist: `'Pune' | 'Kolhapur'`
(tutor data), `'Kothrud (Pune)' | 'Kolhapur' | 'Other'` (form),
`'Kothrud, Pune'` (display). **Proposed:** fix as part of this work — one
canonical pair, `city` prefilled from the URL.

### 0.10 · The hero photograph

`public/tutoo_assets/photos/home-tuition.png` is already exactly the right
scene — a woman teaching a boy at a dining table, books open, warm Indian
home. Brief §6 says reuse an existing asset if suitable.

The catch: it is on the homepage right now
(`LearningSolutions.tsx:38`). Reusing it means a visitor sees the same
photograph twice within one click.

**Options:** (a) reuse it — free, instant, slight repetition; (b) I write you
a prompt for a new hero shot in the established style, as with the last three.
**I would take (b)** and keep `home-tuition.png` where it is: the hero is the
one image on the page that has to feel specific.

---

## §A — Audit: the current `/home-tuition`

**File:** `services-pages/HomeTuitionPage.tsx` (101 lines) → renders
`ServiceLandingPage.tsx` (219 lines) with a content object.

### What it does today

| Section | Implementation | Verdict |
|---|---|---|
| Hero | Centred text, pill eyebrow, no image at all | **REBUILD** |
| Benefits ×4 | Four cards, **identical tick icon on all four** | **REBUILD** |
| How it works ×4 | Vertical numbered list, no icons | **REBUILD** |
| "About fees" + "Where we teach" | Two tinted boxes side by side | **RESTRUCTURE** |
| FAQ ×4 | Already the shared `FaqAccordion` | **KEEP** |
| Final CTA | `#0A1028` band, orange button + phone | **REBUILD** |

### Concrete defects

1. **No photograph anywhere on the page.** The page selling *a person coming
   into your home* shows no people. `/online-tuition` has four images.
2. **Old visual system.** `rounded-2xl border border-[#E6E3F0]` and
   `shadow-[0_1px_2px]` against the shared kit's
   `rounded-[22px] ring-1 ring-[#EFEDF6]` and `shadow-[0_8px_28px]`. Two
   rounding radii, two border treatments — this is precisely the drift the
   `components/common/ui.ts` audit was created to end.
3. **`#0A1028` final CTA** — a navy that appears nowhere else since the
   `ConversionCTA` consolidation.
4. **Four identical icons.** Every benefit card uses `CheckCircle2`. Icons
   that do not differentiate are decoration, and decoration slows scanning.
5. **No tutor cards.** The page never shows a tutor, so "verified tutors"
   stays an abstraction.
6. **No class / board / subject entry points.** A parent cannot start from
   "my son is in Class 9, SSC, Maths" — the exact way they think.
7. **`areas: []`.** The "Where we teach" panel renders an empty chip row plus
   two links. On the page where location matters most.
8. **Primary CTA mislabelled** (§0.7).
9. **No breadcrumb, no `speakable`, no `LocalBusiness` linkage** beyond the
   `Service` schema.
10. **Structurally identical to `/online-tuition`'s predecessor** — which is
    why the two pages currently read as the same page with words swapped.

### What is genuinely good and stays

- The copy is honest. No guaranteed marks, no invented statistics, no fake
  ratings. Every benefit line describes something Tutoo does.
- The fee note ("we share the exact fee before you commit") is a strong,
  unusual piece of trust copy. **Keep it, verbatim.**
- FAQ answers are plain and short.
- `mode=home` already flows into the enquiry form correctly.

---

## §B — `/online-tuition` vs `/home-tuition`

### As built today

| | `/online-tuition` | `/home-tuition` |
|---|---|---|
| Architecture | 8 bespoke components + shared kit | 1 shared template |
| Images | 4 (hero, class, tutors, parents) | **0** |
| Design tokens | `common/ui.ts` throughout | Legacy inline classes |
| Tutor cards | Yes, 4, shared `TutorCard` | No |
| Class/board/subject | `CoverageSelector`, deep-linked | None |
| Process | `ProcessSteps` — node-on-spine | Plain `<ol>` |
| Safety | `OnlineSafety`, 6 points | None |
| Audience split | `AudienceSplit`, photo + 2 cards | None |
| Reviews | `<Reviews />` | None |
| FAQ | 8 questions | 4 questions |
| Closing | `ConversionCTA` | Bespoke navy band |

### The positioning pair (what each page must own)

| Axis | Online Tuition | Home Tuition |
|---|---|---|
| Promise | Learn from anywhere | A tutor comes to you |
| Geography | Anywhere in India | Kothrud (Pune) & Kolhapur **only** |
| Proof object | The live class window | The person at your door |
| Core anxiety | *Will my child actually engage on a screen?* | *Who is this stranger in my house?* |
| Trust section | "Nobody else joins the class" | Verification, ID, first-class protocol |
| Logistics question | Device and connection | Travel, timing, who is home |
| Failure mode | Bad connection | Tutor does not turn up |
| Primary CTA | Find a Tutor | Find a Home Tutor |
| Honest off-ramp | *In Pune/Kolhapur? Consider home tuition* | *Not in our two cities? Go online* |

**The single most important line in this table is the anxiety row.** Online's
safety section answers *who else can see my child*. Home's must answer *who is
walking through my front door, and what do you actually know about them*.
That section has no online equivalent, and it is what stops this page reading
as find-and-replace.

---

## §C — What gets reused (unchanged)

Reused as-is, no new variants:

| Component | Use here |
|---|---|
| `common/ui.ts` | Every surface, button and ink colour |
| `SectionHeading` | Every section header |
| `FeatureGrid` | "Why home tuition" (4 items) |
| `ProcessSteps` | "How home tuition works" (4 steps) |
| `TutorCard` | Home tutor showcase — **the same card as `/find-a-tutor`** |
| `FaqAccordion` | FAQ + its `FAQPage` JSON-LD |
| `ConversionCTA` | Closing section |
| `Reviews` | Testimonials — self-removes when empty |
| `AssetImage` | Every photograph, with `srcSet`/`sizes` |
| `Navbar` / `Footer` / `StickyMobileCTA` / `FloatingWhatsApp` | Untouched |
| `PageSchema` / `RouteSEO` / `pageMeta` | Existing SEO pipeline |

Reused data, no new lists:

`data/subjects.ts` (`SUBJECTS` ×8, `CLASS_BANDS` ×5, `BOARDS` ×4) ·
`data/tutorsDemo.ts` (`CITY_OPTIONS`, `BOARD_OPTIONS`, `CLASS_BAND_OPTIONS`) ·
`data/tutors.ts` (`Tutor`) · `CityAvailabilitySection`'s `CITIES` (lifted to
`data/locations.ts`, see §J).

**Removed:** `ServiceLandingPage.tsx` — if you choose option (b) in §0.6.

---

## §D — What must be different from `/online-tuition`

Not different for the sake of it. Different because home tuition is a
different transaction.

1. **Geography is a gate, not a footnote.** Online serves all of India; home
   serves two places. The page must say so **above the fold** and route
   everyone else to `/online-tuition` inside ten seconds. This is both the
   honest thing and the higher-converting thing — a dead lead from Nashik
   costs you a callback and gives the parent a bad experience.
2. **A safety section that is about a person in your house.** Six specific
   points: what we check, what we do before the first class, who is expected
   to be home, what happens if the tutor does not arrive, how to change
   tutors, how to reach us. No online-tuition point survives unedited.
3. **The hero has a photograph of a real teaching moment at a table.** Online's
   hero is a cut-out with a device. Home's is a room.
4. **"What the first class looks like"** replaces "Inside a class" — the
   anxiety is about the visit, not the software.
5. **No device/setup content.** Delete the entire mental model.
6. **Timing and travel appear explicitly**, because they are the two
   objections a parent raises on the phone.
7. **Boards lead with SSC.** In Kothrud and Kolhapur, SSC is the volume board.
   Online leads with CBSE, which suits a national audience.
8. **Marathi is mentioned.** `KolhapurPage.tsx:13` already says
   "Marathi and English-medium tutors available" — that belongs on the parent
   page too, and it is invisible on `/online-tuition`.

---

## §E — Final section structure

Thirteen sections, not the brief's eighteen. Merges made and why:

| Brief sections | Merged into | Reason |
|---|---|---|
| §8 Quick benefits + §9 Why home tuition + "Why personalized learning" | **Why Home Tuition** | Three names for one argument. Three sections of the same idea reads as padding. |
| §11 Classes + §12 Boards + §13 Subjects | **What We Cover** | Exactly the merge `CoverageSelector` already makes on `/online-tuition`. Three sections of pills is three chances to scroll past. |
| §20 Parents + §21 Students | **Parents & Students** | The contrast *is* the design — side by side, one screen instead of two. |
| §19 Trust + §22 What to look for in a tutor | **Safety & Verification** | Both answer *can I trust this person*. |
| §10 "For every learner" | **dropped** | It restates the class/board/subject grid immediately after it. |

Final order — the order a parent actually asks:

```
HEADER
 1  HERO ................. what is this, where, what next
 2  WHY HOME TUITION ..... is it worth it
 3  WHAT WE COVER ........ can you teach my child
 4  WHERE WE TEACH ....... can you come to me          ← page's unique section
 5  HOW IT WORKS ......... what happens, in what order
 6  THE FIRST CLASS ...... what will it actually be like
 7  MEET OUR HOME TUTORS . who are these people
 8  SAFETY & VERIFICATION  can I trust them in my house ← the trust engine
 9  PARENTS & STUDENTS ... what do I get out of it
10  HOME OR ONLINE ....... am I on the right page
11  REVIEWS .............. what do others say (self-removing)
12  FAQ .................. the rest of my questions
13  FINAL CTA ............ act
FOOTER
```

Sections 4 and 8 are the two that `/online-tuition` cannot have. Everything
else is the same skeleton with different content — which is the point.

---

## §F + §G — Section specifications

Format: **Purpose · Heading · Supporting text · UI pattern · CTA · Data.**

---

### 1 · Hero

- **Purpose** — In five seconds: a tutor comes to your home; here, in these
  two cities; here is how to start.
- **Heading (H1)** — `A tutor who comes` + orange `to your home.`
  Short, concrete, no jargon. The brief's "Personalized Learning, Right at
  Home" is three abstract nouns; this is a picture.
- **Supporting** — "One-to-one tuition at your own table, for Class 1–12
  across CBSE, ICSE and SSC — plus JEE and NEET preparation. In Kothrud
  (Pune) and Kolhapur."
- **Eyebrow pill** — `MapPin` + "Home Tuition · Kothrud (Pune) & Kolhapur".
  Geography stated before the fold, per §D.1.
- **UI** — `OnlineHero`'s structure, rebuilt: layered backdrop, eyebrow,
  two-tone H1, lead, two CTAs, four trust badges, photograph right (framed
  4:3 panel, *not* a cut-out — this is the deliberate visual difference from
  `/online-tuition`), and a boundary card straddling the section edge
  (`-translate-y-1/2`) carrying six "what you get" items.
- **Trust badges ×4** — `Verified / Tutors` · `One-to-one / At home` ·
  `Your / Timings` · `Free / First Assessment`. Two short words each — three
  words wrap to three lines in an 87px column at 390px.
- **CTA** — Primary `Find a Home Tutor` → `/find-a-tutor?mode=home`.
  Secondary `Book a Free Assessment` → `/book-free-assessment?mode=home`.
- **Data** — none. Static copy.

---

### 2 · Why Home Tuition

- **Purpose** — The four reasons a parent picks home over online or a coaching
  class, in one screen.
- **Heading** — "Why parents choose home tuition"
- **Supporting** — "No travel, no batch, no waiting your turn — the tutor
  comes to you."
- **UI** — `FeatureGrid` with `columns={4}`. Four **different** icons
  (`Home`, `UserCheck`, `Clock`, `HeartHandshake`), fixing the identical-tick
  defect.
- **Content**
  - **The tutor travels, not your child** — No evening commute, no waiting
    outside a coaching class.
  - **One-to-one, at your own table** — The whole hour is your child's. No
    batch, no waiting your turn.
  - **Timings that suit your family** — Classes are scheduled around school,
    meals and everything else.
  - **You are there** — You can see how a class goes without asking your child
    how it went.
- **CTA** — none. Reading section.
- **Data** — none.

---

### 3 · What We Cover

- **Purpose** — Let a parent start from the thing they actually know: class,
  board, subject.
- **Heading** — "Can we teach your child?"
- **Supporting** — "Class 1 to 12 across the three boards we cover, plus
  entrance-exam preparation."
- **UI** — `CoverageSelector` generalised to take a `mode` prop. Three groups
  — Classes (5), Subjects (8), Boards (4 in a panel) — icon-in-violet-well
  cards, identical to the homepage's "What we teach".
- **Board order** — **SSC first**, then CBSE, ICSE, JEE & NEET (§D.7).
- **CTA** — every card deep-links
  `/find-a-tutor?mode=home&{class|board|subject}=…`. Panel footer:
  "Browse all home tutors" → `/find-a-tutor?mode=home`.
- **Data** — `SUBJECTS`, `CLASS_BANDS`, `BOARDS` from `data/subjects.ts`. The
  existing build-time guard already fails the build if a card label drifts
  from a filter value.

---

### 4 · Where We Teach — *the section this page owns*

- **Purpose** — Answer *can you come to me* immediately, and route everyone
  else to `/online-tuition` before they fill in a form we cannot serve.
- **Heading** — "Find a home tutor near you"
- **Supporting** — "We send tutors to homes in two cities. Tell us where you
  are and we will match you with tutors who teach nearby."
- **UI** — Three cards in a row (stack on mobile):
  - **Kothrud, Pune** — orange accent. Area chips: Kothrud · Karve Nagar ·
    Erandwane · Warje · Bavdhan · Ideal Colony. Note: "Nearby Pune West areas
    are usually covered too." → `/find-a-tutor?mode=home&city=Pune`
    plus a secondary link to `/home-tuition/kothrud`.
  - **Kolhapur** — violet accent. Area chips: Rajarampuri · Shahupuri ·
    Tarabai Park · Kasaba Bawada · Ruikar Colony. →
    `/find-a-tutor?mode=home&city=Kolhapur` plus `/home-tuition/kolhapur`.
  - **Somewhere else?** — dark navy card, `cardOnDark`. "Home tuition is
    Kothrud and Kolhapur for now. Live one-to-one online classes work from any
    city in India." → `/online-tuition`.
- **Why this shape and not the brief's dropdown chain** — see §0.4. Three
  cards is one glance; four dropdowns over two real options is four
  interactions to reach the same place, and two of them would need invented
  data.
- **Area chips are display-only and labelled as such** — they are not links,
  because no area filter exists. Making them look clickable would be a lie
  the first tap exposes.
- **CTA** — as above. This is the **first place `?city=` is used anywhere on
  the site** — the filter exists and nothing links to it today.
- **Data** — new `data/locations.ts`, lifted from the values already in
  `KothrudPage`, `KolhapurPage` and `CityAvailabilitySection`. Zero invented
  values (§J).

---

### 5 · How Home Tuition Works

- **Purpose** — Remove process uncertainty. Four steps, one minute to start.
- **Heading** — "How home tuition works"
- **Supporting** — "Four steps, and the first one takes under a minute."
- **UI** — `ProcessSteps`, unchanged: number as a node on the connecting
  spine at `lg`, "Step 2" pill in the card below that, last step in orange.
- **Steps**
  1. **Tell us what you need** — Class, subjects, your area and the timings
     that suit you.
  2. **We assess, then shortlist** — A free assessment tells us where your
     child stands. We shortlist verified tutors who teach near you.
  3. **You choose the tutor** — We share profiles. You pick the person you
     want in your home.
  4. **Classes start at your table** — On your agreed schedule, with
     attendance and progress you can check.
- **CTA** — `Book a Free Assessment` → `/book-free-assessment?mode=home`,
  with "Free first assessment · No obligation" beneath.
- **Data** — none.

---

### 6 · The First Class

- **Purpose** — Answer the unspoken question: *what actually happens the first
  time this person arrives?* This is `/online-tuition`'s "Inside a Class",
  rebuilt around a visit instead of software.
- **Heading** — "What the first class looks like"
- **Supporting** — "The part parents ask about most — what happens when the
  tutor arrives."
- **UI** — Photo left in a rounded panel, five facts right — mirroring
  `InsideAClass`, and mirrored again by §9 (photo right). The page alternates
  rather than repeating.
- **Facts ×5** *(all subject to §0.5 confirmation)*
  - **You know who is coming** — We share the tutor's name and profile before
    the first class.
  - **You pick the spot** — The dining table, a study desk, wherever your
    child already works.
  - **Someone is home** — We ask that an adult is at home during classes,
    especially for younger children.
  - **The first class is about your child, not the syllabus** — Where they
    are, what they find hard, how they like to work.
  - **You can change your mind** — If the fit is not right, tell us and we
    arrange a different tutor.
- **CTA** — none.
- **Data** — one new photograph (see §0.10 / §N).

---

### 7 · Meet Our Home Tutors

- **Purpose** — Make "verified tutors" concrete by showing four of them.
- **Heading** — "Meet some of our home tutors"
- **Supporting** — "Tutors who teach at homes in Kothrud and Kolhapur."
- **UI** — `TutorCard` ×4 in a grid — **the same component as
  `/find-a-tutor`**, per brief §18. No variant, no second card design.
- **Selection** — `SOURCE.filter(t => t.mode === 'home' || t.mode === 'both').slice(0, 4)`.
  Mirrors `OnlineTutors.tsx:32–35`, including the demo-data fallback.
- **Demo notice** — while `USE_DEMO_TUTORS` is `true`, the existing sample
  profiles notice renders above the grid. Non-negotiable.
- **CTA** — "View all home tutors" → `/find-a-tutor?mode=home`.
- **Data** — `TUTORS` first, `DEMO_TUTORS` as fallback. Client-side slice;
  there is no tutors API to over-fetch from (§J).

---

### 8 · Safety & Verification — *the trust engine*

- **Purpose** — Answer the question that decides this sale: *who is this
  person and what do you know about them?*
- **Heading** — "Before a tutor comes to your home"
- **Supporting** — "What we check, and what you can expect on the day."
- **UI** — Dark navy band, `cardOnDark` glass cards, six items in a
  `FeatureGrid tone="dark"`. The dark band is the site's existing signal for
  "this is the serious bit" (`SafetyTrust`, `OnlineSafety`), and it visually
  separates this page's most important section from the ten light ones.
- **Six points** *(final wording depends on §0.5)*
  - **We check identity** — Government ID and qualification documents before
    a tutor is listed.
  - **We meet every tutor** — An interview before their first class. We do not
    forward profiles we have not met.
  - **You see the profile first** — Name, qualification, experience and
    subjects, before anyone is at your door.
  - **You choose** — We shortlist; the decision is yours. No tutor is assigned
    to you.
  - **We ask an adult to be home** — Particularly for younger children.
  - **One number, always** — If a tutor does not arrive or something feels
    off, call us: +91 84461 46039.
- **CTA** — the phone number is the CTA. `tel:` link, `≥ 44px` target.
- **Data** — none. **Every line must be confirmed true before it ships.**

---

### 9 · Parents & Students

- **Purpose** — The same arrangement from two sides.
- **Heading** — "What you get out of it"
- **Supporting** — "The same class, from two sides."
- **UI** — `AudienceSplit` generalised with a content prop: two stacked cards
  left, one photograph right with a caption over a scrim. Mirrors §6.
- **For Parents** — See when each class happens · Tell us what you need, we
  shortlist · Change tutor if the fit is not right · Fee agreed before
  anything starts.
- **For Students** — Ask questions the moment you are stuck · Go at your own
  pace · Get help with the topics you find hard · The same tutor every class.
- **CTA** — none.
- **Data** — reuses `parents-students.webp`, already in the project. No new
  asset.

---

### 10 · Home or Online?

- **Purpose** — Catch the wrong-page visitor and the undecided one. Brief §17,
  built as a pair rather than a competition.
- **Heading** — "Home or online?"
- **Supporting** — "Both are one-to-one, with the same tutors. The difference
  is who travels."
- **UI** — Two cards, deliberately equal weight. No comparison table, no tick
  matrix — a matrix invites a parent to score us against an unnamed rival, and
  every claim in the "them" column would be one we cannot substantiate.
- **Home tuition** — Tutor comes to your home · Face to face at your table ·
  Kothrud (Pune) and Kolhapur · → `Find a Home Tutor`
- **Online classes** — Live one-to-one over video · From any city in India ·
  Same verified tutors · → `See online tuition` (`/online-tuition`)
- **CTA** — one per card, as above.
- **Data** — none.

---

### 11 · Reviews

- **Purpose** — Social proof, **only if real**.
- **UI** — `<Reviews />` unchanged: auto-advancing scroll-snap carousel, 40×28
  dot targets, self-removes when `parentTestimonials` is empty and
  `USE_DEMO_REVIEWS` is `false`.
- **Position — deliberately after Safety, not before.** A parent who has not
  yet been told what verification means does not know what the review is
  praising.
- **Data** — `parentTestimonials` (real, empty) → `DEMO_REVIEWS` (flagged).
  **No `AggregateRating` is emitted, by design.** See §0 of
  `reviewsDemo.ts` for the Consumer Protection Act / BIS IS 19000:2022
  exposure — this is the one placeholder that must not survive launch.

---

### 12 · FAQ

- **Purpose** — Answer what the page did not, and win the FAQ rich result.
- **Heading** — "Questions parents ask us"
- **Supporting** — "Tutors, areas, timings and fees — answered plainly."
- **UI** — `FaqAccordion`, `tone="white"`, emitting `FAQPage` JSON-LD from the
  questions it actually renders.
- **Ten questions** (four existing, verbatim, + six from the brief that the
  product can genuinely answer):
  1. What is home tuition, exactly?
  2. Which areas do you cover?
  3. Which classes and boards do you cover?
  4. *(existing)* How are tutors verified?
  5. Can I choose the tutor?
  6. *(existing)* What if the tutor is not the right fit?
  7. Which timings are available?
  8. Do you teach in Marathi?
  9. *(existing)* Is the first assessment really free?
  10. How much does home tuition cost?
- **Dropped from the brief's list** — "Can I request a specific tutor?"
  (duplicate of #5) and "How can I enquire about a tutor?" (the answer is the
  button next to it).
- **CTA** — none inside; §13 follows immediately.

---

### 13 · Final CTA

- **Purpose** — Convert.
- **Heading** — "Ready to find the right tutor?"
- **Supporting** — "Tell us your child's class, subject and area. The first
  assessment is free, and there is no obligation after it."
- **UI** — `ConversionCTA`, unchanged.
- **CTA** — Primary `Find a Home Tutor` → `/find-a-tutor?mode=home`.
  Secondary `Book a Free Assessment` → `/book-free-assessment?mode=home`.
  WhatsApp: *"Hi Tutoo, I'm looking for a home tutor. Class: __, Subject: __,
  Area: __."*
- **Footnote off-ramp** — "Not in Kothrud or Kolhapur? See online tuition" →
  `/online-tuition`. The mirror of the footnote `/online-tuition` already
  carries pointing here.

---

## §H — CTA strategy

**Two actions. Two labels. Everywhere.**

| Intent | Label | Destination |
|---|---|---|
| Browse | **Find a Home Tutor** | `/find-a-tutor?mode=home` |
| Convert | **Book a Free Assessment** | `/book-free-assessment?mode=home` |

Supporting labels, used once each and never competing: "Browse all home
tutors", "View all home tutors", "See online tuition", the phone number.

Placement — five conversion points, escalating:

| Position | Primary | Secondary |
|---|---|---|
| Hero | Find a Home Tutor | Book a Free Assessment |
| After How It Works | Book a Free Assessment | — |
| Tutor showcase | View all home tutors | — |
| Safety band | Phone number | — |
| Final CTA | Find a Home Tutor | Book a Free Assessment |

Plus the persistent `StickyMobileCTA` and `FloatingWhatsApp`, untouched.

**Analytics** — every CTA fires `track()` with a distinct `placement`:
`home_hero`, `home_how_it_works`, `home_tutors`, `home_safety_call`,
`home_final_cta`, `home_city_{pune|kolhapur}`. Note `seo.config.ts:98,104`
still has empty GA4 and Clarity IDs, so nothing is recorded yet — the events
are wired and inert until you add them.

---

## §I — Location and tutor-discovery strategy

### The funnel

```
Hero (geography stated)
   → §4 city card  →  /find-a-tutor?mode=home&city=Pune
   → §3 coverage   →  /find-a-tutor?mode=home&class=Class 9–10
   → §7 tutor card →  /book-free-assessment?mode=home
   → §13 CTA       →  either
```

### What already works and is simply unused

`/find-a-tutor` reads `mode`, `city`, `class`, `board`, `subject`, `q`,
`experience`, `sort` and writes them back to the URL. `city` is exact-matched
against `Tutor.city` and correctly disabled when `mode=online`
(`find-a-tutor/page.tsx:122, 304–314`).

**No page anywhere links to `?city=`.** The filter has existed the whole time
with nothing pointing at it. §4 is the first consumer.

### What does not exist and will not be faked

- **Area/locality filtering.** Areas are display strings. Free-text `q` does
  search `t.area`, so `?q=Rajarampuri` incidentally works — but I will not
  build the UI on an accident. Area is collected in the enquiry form, which is
  where a human reads it.
- **Pincode.** No data. Stays a form placeholder.
- **Distance / "near me" / geolocation.** No coordinates on tutors.
  `seo.config.ts:74–89` has city-level lat/lng for schema only.

### Vocabulary fix (§0.9)

One canonical pair — `'Pune'` and `'Kolhapur'` — matching `CITY_OPTIONS`,
with `'Kothrud (Pune)'` kept only as the *display label* for Pune. The
assessment form gains `city` prefill from the URL, so
`/home-tuition/kothrud` → "Find a Home Tutor" → enquiry arrives with city and
area already filled.

---

## §J — Data and API requirements

### Nothing new is fetched. There is no tutors API.

Confirmed: **zero `fetch()` calls in `src/`.** All HTTP is axios, in two
service files, against `https://crm.tutoolearning.com/`:

| Endpoint | Method | Used by |
|---|---|---|
| `api/student-enquiry` | POST | Assessment form |
| `api/become-tutor/store` | POST | Tutor application |
| `api/get-boards` | GET | Both forms |
| `api/get-categories` | GET | Both forms |
| `api/get-subject?category_id=&board_id=` | GET | Both forms |

**There is no tutors endpoint.** `TUTORS` is a static empty array;
`DEMO_TUTORS` is twelve invented profiles behind `USE_DEMO_TUTORS`. So brief
§35's "do not fetch hundreds of tutors" is already satisfied — the showcase is
a `.slice(0, 4)` over an in-memory array with no network cost at all.

### One new data file

`src/app/data/locations.ts` — consolidating values that already exist in three
places:

```ts
export interface ServiceCity {
  id: 'Pune' | 'Kolhapur';   // must equal CITY_OPTIONS — build-guarded
  label: string;             // 'Kothrud, Pune'
  short: string;             // 'Kothrud (Pune)'
  blurb: string;
  areas: string[];           // display only
  areasNote: string;
  pageHref: string;          // '/home-tuition/kothrud'
}
```

Sourced verbatim from `KothrudPage.tsx:55–57`, `KolhapurPage.tsx:55–57` and
`CityAvailabilitySection.tsx:17–32`. **No invented areas, no new cities.** A
build-time guard — the same pattern as `data/subjects.ts:81–87` — throws if an
`id` drifts from `CITY_OPTIONS`, so a card can never link to an empty result.

### CRM-side, for later (not blocking)

- `GET /api/tutors?mode=home&city=Pune&limit=4` — would let the showcase and
  `/find-a-tutor` read real tutors.
- Confirm `student-enquiry` persists `mode`, `city`, `area`,
  `preferred_timing`, `parent_name`, `budget`, `requirement_note` — the
  comment at `BookAssessmentForm.tsx:217–219` says this was never verified.

---

## §K — SEO strategy

### Intent map

| Intent | Target page |
|---|---|
| home tuition / home tutor / home tutors near me | **`/home-tuition`** |
| home tuition Kothrud / home tutor Pune | `/home-tuition/kothrud` |
| home tuition Kolhapur | `/home-tuition/kolhapur` |
| CBSE class 9 tuition | `/:board/:category/:className` |
| online tuition | `/online-tuition` |

The page competes for the **generic + city-pair** head term. It must not
cannibalise the two city pages, so city-specific copy stays thin here and the
city pages are linked prominently from §4.

### Metadata

`pageMeta.ts["/home-tuition"]` is already good and needs one change — the
title omits the highest-volume phrase, "home tutor":

- **Title (proposed, 58 chars):**
  `Home Tuition & Home Tutors in Kothrud, Pune & Kolhapur`
- **Description (unchanged, 156 chars):** already covers service, classes,
  boards, cities, free assessment.
- **Keywords:** add `home tutors near me`, `home tuition near me`,
  `Marathi medium tutor`.

### Heading hierarchy

One `<h1>` — the hero. Twelve `<h2>` — one per section, emitted by
`SectionHeading`. `<h3>` for card titles, FAQ questions and step titles.
`FeatureGrid` and `ProcessSteps` already render `<h3>`; `TutorCard` renders
`<h3>` for the tutor name. **No heading level is skipped.**

### Structured data

| Type | Source | Note |
|---|---|---|
| `Service` | `PageSchema` on the page | Extend `areaServed` with `GeoCoordinates` from `seo.config.ts:74–89` |
| `FAQPage` | `FaqAccordion`, `schema` on | Emitted from rendered questions only |
| `BreadcrumbList` | **new** | Home › Home Tuition |
| `LocalBusiness` | already global, `schema.ts:69–81` | Leave alone |
| `AggregateRating` | **never** | Deliberate. No invented star average reaches Google. |

Exactly one `FAQPage` block on the page — the current `/home-tuition` emits it
via `PageSchema` **and** passes `schema={false}` to the accordion; the new page
inverts that so the schema always matches what is on screen.

### Internal links out

`/find-a-tutor?mode=home` (×5) · `/home-tuition/kothrud` · `/home-tuition/kolhapur` ·
`/online-tuition` (×2) · `/book-free-assessment?mode=home` (×2).
Descriptive anchors throughout — no "click here", no "learn more" as the whole
link text.

### Images

Every `<img>` gets descriptive alt text naming what is happening, not the
keyword. `AssetImage` already carries `width`/`height` so CLS stays at zero.

### Prerender

`scripts/prerender.mjs:34–35` already lists the city routes; `/home-tuition`
is there too. No change.

---

## §L — Responsive plan

Ten widths, swept with `overflow-x-hidden` **disabled** so nothing can hide —
this is how the `min-width: auto` grid bug and the `whitespace-nowrap` button
bug were both caught on `/online-tuition`.

| Width | Behaviour |
|---|---|
| 320 | Single column. Hero photo stacked under copy. Trust badges 2×2. City cards stacked. Tutor cards 1-up. **Known trap:** grid items need `min-w-0`, or a child's min-content widens the track past the viewport. |
| 375 / 390 / 430 | As above. Badge labels two short words max. |
| 768 | Coverage 3-up. City cards stacked (three side by side is too tight for area chips). Tutor cards 2-up. Photos switch 4:5 → 4:3. |
| 820 | Same, wider gutters. |
| 1024 | Hero goes two-column. Coverage 5-up. City cards 3-up. Tutor cards 2-up. `ProcessSteps` spine appears. |
| 1280 | Tutor cards 4-up. Full layout. |
| 1440 / 1920 | `max-w-7xl` container caps; the page centres. |

Verified at every width: `document.scrollWidth === clientWidth` · no text below
12px · no tap target below 24×24 (WCAG 2.5.8) · no console errors · every
image resolves and picks the right `srcSet` candidate.

**Mobile hero, explicitly** (brief §33): eyebrow → H1 → one-line lead → two
full-width stacked buttons → photo → badges. Nothing else above the fold.

---

## §M — Accessibility plan

- **Landmarks** — `<main>` wraps the page; each section is `<section>` with an
  `aria-labelledby` pointing at its `<h2>`.
- **Headings** — one `<h1>`, no skipped levels (§K).
- **Contrast** — every pair checked at AA. The two to watch: white on the
  navy safety band (`#1E1B3A` → 15.8:1, fine) and the caption over the §9
  photo scrim, which needs `from-[#1E1B3A]/78` at the foot to clear 4.5:1.
- **Targets** — every interactive element ≥ 44×44 on touch, ≥ 24×24 minimum
  (WCAG 2.5.8). Inline text links are exempt. Carousel dots keep the 40×28
  hit area with an 8px visual dot.
- **Keyboard** — full tab order; visible focus ring on every control;
  accordion is `<button>`-driven with `aria-expanded` (already correct in
  `FaqAccordion`); city cards are real `<button>`/`<Link>` elements, not
  clickable `<div>`s.
- **Motion** — every `motion` component respects `useReducedMotion`. The
  Reviews carousel stops auto-advancing under `prefers-reduced-motion` and on
  hover/focus.
- **Images** — descriptive `alt`; decorative layers `aria-hidden="true"`.
- **Screen-reader wording** — city card labels read
  "Find home tutors in Kothrud, Pune", not "Kothrud".
- **Forms** — none on this page; it links to the form.

---

## §N — Performance plan

### The finding that matters most

**Every photograph on the site is being served as a raw PNG.**

| File | Size |
|---|---|
| `home-tuition.png` | 2.11 MB |
| `online-class.png` | 1.93 MB |
| `teacher-1…4.png` | 1.83–2.03 MB each |
| `parents-students.png` | 1.94 MB |
| `inside-a-class.png` | 1.81 MB |

The homepage alone ships `home-tuition.png` + `online-class.png` ≈ **4 MB**,
and any page with four tutor cards ships **~7.8 MB** more. Most of your Pune
and Kolhapur traffic is on phones, on mobile data.

The two files already converted show the ratio: `inside-a-class` 1.81 MB → 59 KB;
`parents-students` 1.94 MB → 82 KB. **That is a ~30× reduction.**

**Proposed, as part of this work:** convert all six remaining PNGs to WebP with
`-sm` variants, point the code at them, keep the PNGs as masters. Two-line
change in `LearningSolutions.tsx`, four in `tutorsDemo.ts`. This will do more
for your Core Web Vitals than every other item on this list combined.

### Page-level

- Hero image `loading="eager"` + `fetchpriority="high"`; everything below
  `loading="lazy"`.
- `srcSet` + honest `sizes` on every photo (the `sizes` value must match the
  rendered CSS width — a wrong one makes the browser fetch the wrong
  candidate).
- `width`/`height` on every image; aspect-ratio boxes so CLS = 0.
- No new dependencies. `motion`, `lucide-react` and the shared kit are already
  in the bundle.
- Icons imported individually from `lucide-react` (tree-shaken) — never
  `import * as`.
- Zero network requests added.
- The page is already `lazy()`-loaded and code-split by route (`App.tsx:38`).

### Bundle note (existing, not caused by this work)

`dist/assets/index-*.js` is **504 KB** (153 KB gzipped) and trips Vite's
chunk-size warning. Worth a `manualChunks` pass later; out of scope here.

---

## §O — Implementation plan

### Step 0 — Reconcile the two working copies *(do first)*

My container copy and your disk have diverged: **32 files differ in content
and 3 exist only on your machine** (`AIAssessmentSection.tsx`,
`TutorShowcase.tsx`, `common/TeacherAvatar.tsx`). The differences are benign —
mostly your `.jpg` → `.png` photo-path edits — and none touch
`/home-tuition`, `/online-tuition` or the shared kit. I have already pulled
the three that matter. **Before I write code I will re-sync the rest from your
disk**, so I cannot overwrite your edits.

### Phase 1 — Foundations

1. `data/locations.ts` + build-time guard against `CITY_OPTIONS`.
2. Generalise `CoverageSelector` with a `mode` prop (`'home' | 'online'`);
   `/online-tuition` keeps its current behaviour exactly.
3. Generalise `AudienceSplit` with a content prop; same guarantee.
4. Convert the six PNGs to WebP; repoint `LearningSolutions.tsx` and
   `tutorsDemo.ts` (§N).

### Phase 2 — New components (`components/home/`)

`HomeHero` · `WhereWeTeach` · `FirstClass` · `HomeTutors` · `HomeSafety` ·
`HomeOrOnline`. Six files, each on the shared kit, each with a header comment
explaining why it exists — the same convention as `components/online/`.

### Phase 3 — Compose the page

Rewrite `services-pages/HomeTuitionPage.tsx` to compose the thirteen sections
directly, the way `OnlineTuitionPage.tsx` does. Add `BreadcrumbList` schema.
Update `pageMeta.ts`.

### Phase 4 — City pages *(only if you choose §0.6 option b)*

Render `/home-tuition/kothrud` and `/home-tuition/kolhapur` from the same
components with city props. Delete `ServiceLandingPage.tsx`.

### Phase 5 — Fixes agreed in §0

- `?city=` prefill in `BookAssessmentForm` (§0.9).
- Header + sticky-bar CTA wording (§0.8), if approved.

### Phase 6 — Verification *(every item, before I hand it back)*

- Build clean; no TypeScript errors introduced.
- Sweep 320 / 375 / 390 / 430 / 768 / 820 / 1024 / 1280 / 1440 / 1920 with
  `overflow-x-hidden` disabled — assert `scrollWidth === clientWidth`.
- **Exercise every deep link and record the result count.** A card that links
  to zero tutors is a bug, not a design detail.
- Keyboard-only pass end to end.
- Contrast check on the navy band and every photo caption.
- Console clean at every width.
- Structured data through the Rich Results test: exactly one `FAQPage`, one
  `Service`, one `BreadcrumbList`, **no `AggregateRating`**.
- Screenshots at mobile / tablet / desktop, sent to you.

### Before this page goes live to parents

- [ ] `USE_DEMO_TUTORS = false` (`tutorsDemo.ts:29`)
- [ ] `USE_DEMO_REVIEWS = false` (`reviewsDemo.ts:30`) — **the legal one**
- [ ] Every §8 safety line confirmed true (§0.5)
- [ ] GA4 + Clarity IDs added (`seo.config.ts:98, 104`)

---

## What I need from you

1. **§0.1–§0.10** — the ten decisions. §0.5 (verification claim) and §0.6
   (city pages in scope or not) are the two that change the most.
2. **Approve or amend §E**, the thirteen-section structure.
3. **§0.10** — reuse `home-tuition.png` for the hero, or shall I write you a
   prompt for a new one?

Nothing gets built until you say so.
