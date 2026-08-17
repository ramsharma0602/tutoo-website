# Tutoo Website Booklet — Gap Analysis & Implementation Plan

**Source:** `Tutoo_Complete_Website_Booklet.docx` (18 pages + core positioning + brand language)
**Audited against:** `D:\Tutoo\tutoo-website` as it stands today
**Status:** analysis only — no code written. Decisions needed before Phase 1.

---

## 1. What this document actually is

Read carefully, the booklet is **not a copy refresh**. It is a repositioning brief. It changes three
things at the same time:

| | Website today | Booklet |
|---|---|---|
| **Business model** | Matching agency — "tell us what you need, we assess and match" | Marketplace — "search, compare, connect, choose" |
| **Geography** | Kothrud (Pune) + Kolhapur, heavy local SEO | No geography mentioned at all |
| **Scope** | Class 1–12 school subjects + JEE/NEET | + College, languages, coding, AI, robotics, music, dance, art, public speaking, personality development |

Each of those is a real business decision, not a wording choice. Section 3 lists them as blocking
questions. **Everything else in the booklet is straightforward to build**, and about half is already live.

---

## 2. Page-by-page audit

**Legend:** ✅ Done · 🟡 Partial · 🔴 Not built · ⛔ Blocked by a rule you set

### Core positioning

| Booklet item | Status | Reality on the site |
|---|---|---|
| Main customer = parents & students | ✅ | Parent-first since the Phase 1–4 redesign |
| Tagline "Find the Right Tutor. Learn Better." | 🔴 | Hero currently reads "…for Class 1–12". Tagline appears nowhere |
| Journey: Search → Compare → Connect → Learn | 🟡 | `/find-a-tutor` now does Search + Compare. **Connect** (talk to the tutor) does not exist — every path funnels to the assessment form |
| Tutors as a secondary journey | ✅ | `/apply-tutor` live; ForTutors demoted to a strip above the footer |

### Pages 1–18

| # | Booklet page | Status | Notes |
|---|---|---|---|
| 1 | **Home** | 🟡 | Page structure is done (9 sections). Hero copy, tagline and the 4-step "How Tutoo Works" all differ. Booklet's primary CTA is `[Find a Tutor]`; the site's is "Book a Free Assessment" — see D-4 |
| 2 | **Find a Tutor** | 🟡 | Built last week. Class ✅ Subject ✅ Board ✅ Location ✅ Online/Offline ✅. **Budget** ⛔ (D-3). The eight "Looking For" categories (School / College / JEE / NEET / Language / Coding / Music / Skill) 🔴 do not exist |
| 3 | **Online Tutor** | ✅ | `/online-tuition` live with equivalent bullets. Copy needs simplifying to booklet voice — small job |
| 4 | **Offline / Home Tutor** | ✅ | `/home-tuition` live, plus two city pages the booklet doesn't ask for |
| 5 | **School Tutors** | 🟡 | 48 board-class pages exist for CBSE / ICSE / SSC. **No hub page.** IB, IGCSE, "State Boards" are *claimed* on the homepage but have zero backing pages. Nursery–UKG missing (site starts at Class 1) |
| 6 | **Competitive Exams** | 🟡 | Only 3 entries exist (JEE, NEET, +1). MHT-CET, CUET 🔴. Olympiads exists as a subject only. No hub page |
| 7 | **Languages** | 🔴 | Nothing. English / Hindi / Marathi exist only as *school subjects*. French, German, Spanish, Sanskrit absent. Adult learners absent entirely |
| 8 | **Skills** | 🔴 | Nothing. Coding appears once in an assessment-form dropdown. AI, robotics, music, dance, art, public speaking, personality development absent |
| 9 | **Why Tutoo?** | 🟡 | 5 of the 6 points are covered across `SafetyTrust` + `LearningSolutions`, but scattered. No single "Why Tutoo" block with these six exact lines |
| 10 | **For Parents** | 🟡 | `/for-parents` was **deliberately retired** to a redirect (it cannibalised `/home-tuition` keywords). Booklet wants it back — see D-5. All six requested fields already exist in the assessment form |
| 11 | **For Students** | 🔴 | No student-facing page anywhere. This is also the open "student voice" question from the earlier content review |
| 12 | **Tutor Profile** | 🔴 | Not built (was Stage 2 of the Find a Tutor plan). Data model already carries name, qualification, experience, classes, boards, mode, city/area, about, subjects. Missing: **Availability** (not in the model), **⭐ Rating** ⛔ (D-2) |
| 13 | **Book a Tutor** | 🟡 | `/book-free-assessment` covers 9 of 12 fields. Missing: **Parent Name** as its own field 🔴, **"Any specific requirement?"** free text 🔴, **Budget** ⛔ (D-3). Booklet also renames the page — see D-4 |
| 14 | **How It Works** | 🟡 | `/how-it-work` exists but with 3 steps, not the booklet's 5. Step 3 "Talk — connect with suitable tutors" is a **product change**, not copy (D-1) |
| 15 | **About Us** | 🟡 | `/about-tutoo` and `/our-mission` both exist and are far longer and more corporate than the booklet's six lines |
| 16 | **Become a Tutor** | 🟡 | `/apply-tutor` collects subject, qualification, experience, city, mode. **Availability** 🔴 missing |
| 17 | **FAQ** | 🟡 | 8 live questions (fees, safety, tracking) vs the booklet's 7 (find, online, home, classes, boards, choose, request). Only ~2 overlap. Worth noting: the booklet's answers are honestly hedged — "depending on tutor availability" — which is the right instinct |
| 18 | **Contact Us** | ✅ | `/contact-us` live; Call / WhatsApp / Email reachable from every page |

### Brand language ("Avoid" list)

This is the most useful part of the booklet, and the site **fails it today** — not on the pages we
rewrote, but on the ones we never touched:

| Banned phrase | Where it still appears |
|---|---|
| "AI-powered" / "AI Powered" | `legalPolicyData.ts`, `how-it-work` (two sections), `seo.config.ts` keywords, 2 blog files |
| "ecosystem" | `our-mission` (×6), `about-tutoo` |
| "unlock your full potential" | `our-mission`, `about-tutoo` (×3), `for-tutors`, blogs |
| "seamless(ly)" | `MobileApp.tsx`, `for-tutors`, `our-mission` |
| "empowered" | `about-tutoo` |

**Two of these are worse than jargon — they are claims that contradict decisions you already made:**

1. `legalPolicyData.ts` line 254 — the Terms of Service currently states Tutoo *"facilitates the
   discovery, matching, scheduling, **and payment** of tutoring sessions."* You instructed that nothing
   payment-related stays on the website. This is the one place it survived, and it is the legally
   binding page.
2. `for-tutors/WhyBecomeTutooSection.tsx` — *"improve ratings"*. There is no rating system.
3. `how-it-work` tags the assessment step **"AI Powered"**. You confirmed the only real platform
   features are OTP session verification, attendance tracking and location tracking.

These three should be fixed regardless of what you decide about the repositioning.

---

## 3. Decisions I need from you before Phase 1

### D-1 — Marketplace or matching agency? *(the big one)*

The booklet's journey is **Search → Compare → Connect → Learn**, with the parent talking to tutors
and picking one. The site's journey is **Tell us → Free assessment → We match → Start**.

These are different products, not different wordings:

- The booklet's model requires real tutor profiles, published availability, and a way for a parent to
  reach a tutor. Right now the real tutor registry has **zero** entries and the page runs on 12
  sample profiles.
- Publishing "compare tutors and choose" while the shortlist is thin is worse than not offering it —
  parents bounce when a search returns three results.

**My recommendation:** keep the matching model as the *spine* and layer browsing on top. Adopt the
booklet's language ("Find the Right Tutor", "Tell us what you need") because it matches how parents
search, but keep the free assessment as the conversion step and treat "Connect / Talk to the tutor"
as something you switch on once you have real supply. That gets you the booklet's voice without
promising a marketplace you can't yet fill.

### D-2 — ⭐ Rating on the tutor profile

The booklet's tutor profile shows a star rating. You have no review system and you have told me
repeatedly not to invent ratings. **This cannot ship as written.** Options:

- (a) Drop it. Use "8 years experience" and "M.Sc., B.Ed." as the credibility signals instead. *(my recommendation for now)*
- (b) Build real reviews later — requires collecting consented parent feedback after classes, which is a
  CRM feature, not a website feature.

### D-3 — Budget field

The booklet asks for Budget on both Find a Tutor and Book a Tutor. You instructed: *"we cannot keep
this thing related to payment."*

There is a real distinction worth considering: a **budget range collected privately as a matching
input** is not the same as advertising fees or tutor payouts publicly. It never appears on a page; it
helps your team match. But it is your rule, so tell me which you want:

- (a) No budget field anywhere. *(literal reading of your instruction)*
- (b) Budget as a private matching input in the enquiry form only, never displayed. *(what I'd suggest)*

### D-4 — Primary CTA wording

Booklet says `[Find a Tutor]` / `[Find My Tutor]` and renames page 13 to "Book a Tutor". You
previously chose to **keep "Book Free Assessment"**.

Trade-off: "Find a Tutor" matches what parents type into Google; "Book Free Assessment" is the
stronger offer and converts better once they're on the page. **My recommendation:** use "Find a
Tutor" for navigation and discovery entry points, keep "Book Free Assessment" as the form's submit
and the sticky mobile CTA. They are not in conflict if you split them by role.

### D-5 — Bring back `/for-parents`?

It was retired because it duplicated `/home-tuition` for the same audience and split the keywords.
The booklet wants it back. **My recommendation:** keep the redirect and satisfy the booklet's
"For Parents" content inside `/home-tuition`, which already ranks for the intent. Reopening it
re-creates the cannibalisation the audit removed.

### D-6 — How much of the new scope is real?

The booklet promises tutors for college, IB, IGCSE, Nursery, French, German, Spanish, Sanskrit,
coding, AI, robotics, music, dance, art, public speaking and personality development.

**Blunt question: for how many of these can you actually produce a tutor next week?**

We spent several rounds removing invented statistics, fake testimonials and unverifiable features. A
category page for "Robotics Tutors" with no robotics tutor is the same mistake at a larger scale — and
it's worse, because a parent enquires, waits, and gets nothing.

**My recommendation:** a category earns a landing page only when you can name at least one tutor who
can teach it. Everything else goes in a single "Tell us what you're looking for" free-text field on
the enquiry form. You'll learn the real demand from what people type, then build the pages that
demand justifies.

---

## 4. Proposed plan

Sequenced so the honest, cheap, high-value work lands first and the expensive strategic work waits
for your answers above.

### Phase A — Brand language cleanup *(no decisions needed, ~half a day)*

Apply the booklet's Avoid/Use-Instead list to the pages we never audited.

1. Remove "and payment" from the Terms of Service; remove "AI-powered platform" from the same clause
2. Remove the "AI Powered" tags from `/how-it-work`
3. Remove "improve ratings" from the For Tutors page
4. Strip "ecosystem", "unlock your full potential", "seamless", "empowered" from `/our-mission`,
   `/about-tutoo`, `/for-tutors`, `MobileApp`
5. Drop "AI-powered tutoring" from the SEO keyword list
6. Rewrite `/about-tutoo` and `/our-mission` down to the booklet's plain six lines

*This is pure removal of claims you can't stand behind. I'd do it whatever you decide elsewhere.*

### Phase B — Copy alignment *(needs D-1 and D-4)*

7. Hero: booklet tagline + supporting line
8. Homepage "How Tutoo Works" → the booklet's 4 steps
9. `/how-it-work` → the booklet's 5 steps
10. `/online-tuition` and `/home-tuition` intros in booklet voice
11. New "Why Tutoo?" section with the six exact points
12. FAQ rewritten to the booklet's 7 questions, keeping the honest hedging

### Phase C — Enquiry form completion *(needs D-3)*

13. Add **Parent Name** as its own field
14. Add **"Any specific requirement?"** free text — this is also the pressure valve for D-6
15. Add **Availability** to the tutor application form
16. Budget field, if you pick D-3(b)

### Phase D — Tutor profile + enquiry *(needs D-1, D-2)*

17. `/tutors/:slug` profile page — everything the booklet lists except Rating
18. Add `availability` to the tutor data model
19. Real "Request This Tutor" enquiry modal, posting to the CRM
20. Admin notification email — **server-side only**, no credentials in frontend code

### Phase E — New categories *(needs D-6; scope depends entirely on your answer)*

21. "Looking For" category filter on Find a Tutor
22. Hub pages for School Tutors and Competitive Exams — these two are *safe*, the tutors exist
23. Languages and Skills pages — **only for categories where you have a real tutor**

---

## 5. Honest summary

- **Already done:** roughly 45% — the page skeleton, both service pages, contact, apply-tutor, the
  filter set on Find a Tutor, and the parent-first positioning
- **Copy-only work:** roughly 30% — real work, but no new decisions and no new promises
- **Genuinely new build:** roughly 25% — tutor profile, enquiry flow, category pages
- **Cannot ship as written:** ratings (no review system), budget (your payment rule), and any category
  where no tutor exists

The single most valuable thing in this booklet is the **Avoid list**. It gives us an objective test
for every sentence on the site, and the site currently fails it in about ten files — including the
Terms of Service, which still says Tutoo handles payment.
