# Find a Tutor — Architecture Analysis & Build Plan

**Prepared:** August 2026 · **No code changed** — stops at your approval gate (§44).

---

## 0. The blocker, up front

**This repository contains no backend.** It is a Vite + React SPA. Every API call goes to a **separate CRM system** at `https://crm.tutoolearning.com/`, which is not in this repo and which I have no access to.

That means these parts of your brief **cannot be built here** — they must be built by whoever owns the CRM:

| Your section | What it needs | Where it must be built |
|---|---|---|
| §22 Enquiry API | Controller, service, DTO, validation | **CRM** |
| §23 Enquiry data | Table/columns | **CRM** |
| §24 Enquiry status | Lifecycle field | **CRM** |
| §25 Admin email | Mailer + template | **CRM** |
| §26 API security | Rate limiting, sanitisation | **CRM** |
| §39 Database | Tutor + enquiry entities | **CRM** |

I can specify the exact contract for all of it (§H, §I, §J below) so your CRM developer can implement it directly. **I will not write a fake backend inside the frontend.**

### The second blocker: there is no tutor data source

Every endpoint referenced anywhere in this codebase:

| Endpoint | Method | Purpose |
|---|---|---|
| `api/student-enquiry` | POST | Assessment enquiry (working — used by the form today) |
| `api/become-tutor/store` | POST | Tutor application, multipart (working) |
| `api/get-boards` | GET | Boards |
| `api/get-categories` | GET | Classes |
| `api/get-subject?category_id&board_id` | GET | Subjects for a class+board |

**Tutor applications go *in*. Nothing comes *out*.** There is no endpoint that returns a list of tutors — so a Find a Tutor page currently has nothing to display. (I tried to probe the CRM to confirm, but this sandbox can't reach that host, so treat this as "not referenced in the code" rather than proven absent — **your CRM developer should confirm whether an approved-tutor listing endpoint exists**.)

---

## A. Current architecture

| Layer | What exists |
|---|---|
| Framework | Vite 6 · React 18 · TypeScript · React Router 7 |
| Styling | Tailwind v4 + design tokens in `theme.css` (orange `#EA580C` / violet `#7B2FF7` / navy `#0A1028`) |
| Typography | Plus Jakarta Sans, 12-level scale, 400/500/600/700 |
| Forms | Formik + Yup, `SearchableSelect`, `StatusModal` (success/error), visible labels, 16px inputs |
| Data fetching | axios in per-feature `services/*.ts` files |
| SEO | `pageMeta.ts` registry + `RouteSEO` + `PageSchema` (JSON-LD) |
| Auth | **None** — the site is fully public. Good: your §40 says don't require login to enquire. |
| Email | **None in frontend** (correctly — §26) |

## B. Existing tutor assets — reuse, don't rebuild

Built two rounds ago and directly reusable:

- **`/tutors`** — a working page with subject + mode filters, honest empty state, and CTA into the enquiry funnel.
- **`TutorCard.tsx`** — brand-spec card: photo *or* initials avatar (§14 handled), verified badge, qualification, experience, subjects, classes, area, mode, orange CTA.
- **`src/app/data/tutors.ts`** — typed `Tutor` registry with documented rules (verified + written consent only). **Currently empty by design**, so nothing fake renders.
- **`TutorShowcase.tsx`** — homepage strip, renders only when real tutors exist.

**Route recommendation (your §2 and §20):** **reuse `/tutors`**, don't create `/find-a-tutor`. It already exists, is in the sitemap, has SEO meta, and your header's "Find a Tutor" already points at it. Two URLs for one page would split SEO and duplicate maintenance. If you prefer the `/find-a-tutor` wording for search, I'd add it as a **301 redirect to `/tutors`**, not a second page.

## C. Find a Tutor — page structure

```
Header (existing)
────────────────────────────────────────────────────
H1   Find the right tutor for your child
Sub  Browse verified tutors by class, board, subject and location —
     or tell us what you need and we'll match one for you.
────────────────────────────────────────────────────
[ 🔍 Search by name, subject or area ]        [Sort ▾]

Active filters:  CBSE ×   Class 10 ×   Online ×      [Clear all]
────────────────────────────────────────────────────
DESKTOP                          │  24 tutors
┌──────────────┬─────────────────┴────────────────┐
│ FILTERS      │  [Tutor] [Tutor] [Tutor]         │
│ Board        │  [Tutor] [Tutor] [Tutor]         │
│ Class        │  [Tutor] [Tutor] [Tutor]         │
│ Subject      │                                   │
│ Mode         │            [ Load more ]          │
│ Location     │                                   │
│ Experience   │                                   │
└──────────────┴───────────────────────────────────┘

MOBILE:  [Filters]  [Sort]   → full-screen sheet
                              with Apply / Clear all
────────────────────────────────────────────────────
Still not sure? → "Tell us what you need and we'll match a tutor"
                  (orange CTA into the existing assessment funnel)
────────────────────────────────────────────────────
Footer (existing)
```

The bottom band matters: with a small tutor pool, many searches will return few results. That band means **no search is ever a dead end** — it routes to the funnel that already works.

## D. Filter plan

| Filter | Include? | Source | Why |
|---|---|---|---|
| **Search** (name / subject / area) | ✅ | client | One box, three intents — fewer controls |
| **Board** | ✅ | `api/get-boards` (live) | Parents think in boards |
| **Class** | ✅ | `api/get-categories` (live) | The single most common qualifier |
| **Subject** | ✅ | tutor records | The reason they're here |
| **Teaching mode** | ✅ | tutor records | Home vs Online is your core split |
| **Location** (city / area) | ✅ *shown only when mode ≠ Online* | tutor records | Irrelevant for online — hiding it removes a dead control |
| **Experience** (0–2 / 3–5 / 5–10 / 10+) | ✅ | tutor records | Real data you hold |
| **Gender** | ⚠️ **Not as a public filter** | — | See below |
| **Rating / sort by rating** | ❌ | — | **You collect no ratings.** Your §12 mock shows "⭐ 4.8" but your §40 forbids inventing them. No stars anywhere. |

**On gender (§6):** I'd argue against a public gender filter but *for* a preference field. Some Indian families genuinely prefer a female tutor for a teenage daughter — that's a legitimate need, not a bias to design away. But a public filter that lets anyone sort people by gender reads badly and, with a small pool, fragments results to zero. **Recommendation: capture "Tutor gender preference (optional)" inside the enquiry form**, where your team can honour it during matching. Same operational outcome, none of the marketplace ugliness.

**Sort options (§10), limited to data you hold:** Recommended (default) · Experience: high→low · Experience: low→high · Recently added. **No rating sort.**

## E. Tutor card

Already built and brand-correct. Contents: avatar (photo or initials) · name · verified badge (only when true) · qualification + years · subjects (chips) · classes · area + mode · **[View Profile]** + **[Enquire]** (orange).

**Not adding:** rating stars (no data), student counts (no data), long bios (belongs on the profile). Your §13 is right that the card's job is only "is this tutor worth opening?".

## F. Tutor profile — `/tutors/:slug`

Photo · Name · Verified · Subject line → Experience · Qualification · Mode · Location · Languages → **About** (2–3 plain sentences) → **Teaches**: subjects / classes / boards → **How they teach** → **Availability** → sticky **[Enquire About This Tutor]** → "Not the right fit? Tell us what you need" link.
SEO: unique title/description per tutor, `Person` + `Service` JSON-LD, `noindex` until at least ~5 real profiles exist (thin pages hurt).
**No reviews section until reviews actually exist.**

## G. Enquiry flow

```
Tutor card / profile → [Enquire]
        ↓  modal opens (page stays behind — your §20)
   "Enquire about Priya S. — M.Sc. Mathematics · 6 yrs"
        ↓
   Student's class* · Subject(s)* · How would you like to learn?* (At home / Online)
   Area or pincode* (only if At home) · When would you prefer classes? (optional)
   Your name* · Phone* · Email · Anything else? (optional)
        ↓  [Send Enquiry]
   Success → "Thank you! We've received your enquiry about Priya S.
              Our team will call you within 24 hours."  + WhatsApp fallback
   Error   → "We couldn't send your enquiry right now. Please try again,
              or call us on +91 84461 46039."
```

Labels use your §21 wording (already the standard in the existing form). No login required. 9 fields, 6 required.

## H. API design

### H1. Tutor listing — **needs to be built in the CRM**

```http
GET /api/tutors?board=CBSE&category=Class%2010&subject=Mathematics
                &mode=home&city=Kothrud&min_experience=3&sort=experience_desc
                &page=1&per_page=12
```
```jsonc
{ "data": [ {
      "id": 12, "slug": "priya-s", "name": "Priya S.",
      "photo_url": null, "qualification": "M.Sc. Mathematics",
      "experience_years": 6, "subjects": ["Mathematics","Science"],
      "classes": "Class 6-10", "boards": ["CBSE","SSC"],
      "mode": "both", "city": "Pune", "area": "Kothrud",
      "languages": ["English","Marathi"], "is_verified": true,
      "about": "…", "created_at": "2026-07-01"
  } ],
  "meta": { "total": 24, "page": 1, "per_page": 12, "last_page": 2 } }
```
**Must return only approved + verified + consented-to-publish tutors.** Never expose phone, email, address or documents.

### H2. Tutor enquiry — two options

**Option 1 (recommended for launch — zero CRM work):** reuse the **already-working** `POST api/student-enquiry`, adding `tutor_id`, `tutor_name` and `source: "find-a-tutor"`. Enquiries land in the CRM inbox your team already watches, and admin email keeps working if it already does. Ships immediately.

**Option 2 (cleaner, needs CRM work):** dedicated `POST api/tutor-enquiry` with its own table, status lifecycle and email template.

**My recommendation: ship Option 1 now, migrate to Option 2 when the CRM team has capacity.** Waiting on backend work to launch a page you can launch today is the wrong trade.

Validation (server-side, §26): name 2–80 · phone `^[6-9]\d{9}$` · email RFC + optional · class/board/subject against your own tables · mode ∈ {home, online} · area required when mode=home · message ≤ 1000, HTML-stripped · rate limit ~5/hour/IP · honeypot field · never echo internals in errors.

## I. Email flow

CRM-side only. On enquiry create → queued mail to admin: subject **"New tutor enquiry — {tutor_name}"**, body per your §25 template, reply-to set to the parent's email so admin can reply directly. **Enquiry goes to admin only, never to the tutor** (your §25). Failure to send must not fail the API response — queue and retry.

## J. Database (CRM-side)

Likely already exists from `become-tutor/store`: a tutor/application table. **Reuse it** (§39) — add only what's missing: `slug`, `is_published`, `is_verified`, `consent_to_publish`, `about`, `languages`, `display_photo_url`. New table `tutor_enquiries` with the §23 fields + `status` enum (new / contacted / in_progress / converted / closed) defaulting to `new`.

## K. Responsive

**Desktop ≥1280:** 260px filter sidebar + 3-col grid (4-col at 1920). **Tablet 768–1279:** filters collapse to a "Filters" button + 2-col grid. **Mobile <768:** search full width, `[Filters] [Sort]` row, 1-col cards, filters open a full-screen sheet with sticky **Apply** / **Clear all**, 48px targets, one-handed.
Skeleton cards matching the real card while loading (§30). URL reflects filters (§32) so back-button and sharing work.

## L. Implementation plan

**Stage 1 — frontend, buildable today (no CRM dependency).** Upgrade `/tutors` into the full page: search, all filters, sort, active-filter chips, URL state, mobile filter sheet, skeletons, no-results state, load-more. Behind a `tutorsApi.ts` interface that reads the local registry now and switches to `GET /api/tutors` with a one-line change.
**Stage 2 — tutor profile** `/tutors/:slug` + SEO + schema.
**Stage 3 — enquiry modal** + validation + success/error states, posting via Option 1 (`api/student-enquiry` + tutor fields).
**Stage 4 — CRM work (your backend developer):** `GET /api/tutors`, then optionally the dedicated enquiry endpoint + email + status lifecycle.
**Stage 5 — flip the switch:** change one function in `tutorsApi.ts` from registry to HTTP. No component changes.
**Stage 6 — verify:** 9 breakpoints, keyboard, screen reader, skeletons, empty states.

**A note on scale (§31/§38):** you're in two cities with an empty tutor registry. Server-side filtering and pagination for "thousands of tutors" is premature — **client-side filtering with load-more is correct until you pass ~200 tutors**, and the API contract above supports server-side params from day one, so nothing needs rewriting later.

---

## Decisions needed before I build

1. **Route:** reuse **`/tutors`** (recommended) or create `/find-a-tutor` with a redirect from `/tutors`?
2. **Enquiry endpoint:** **Option 1** — reuse the working `api/student-enquiry` with tutor fields (recommended, ships now) — or wait for a dedicated endpoint?
3. **Gender:** exclude as a public filter and capture it as an optional preference in the enquiry form (recommended)?
4. **Does a tutor listing endpoint already exist in the CRM?** If yes, send me the URL + a sample response and I'll wire directly to it instead of the local registry.
5. **Confirm: no ratings anywhere** (no stars on cards, no rating sort) until you actually collect them.

Say "go" plus answers and I'll build Stages 1–3 and verify across all breakpoints.

---

### One outstanding item from last round

Your desktop disconnected before I could write the typography files to disk. **`typo-changes.tgz` is still sitting in the chat above** — extract it over `D:\Tutoo\tutoo-website\`, or tell me your desktop is back and I'll write those 90 files directly.
