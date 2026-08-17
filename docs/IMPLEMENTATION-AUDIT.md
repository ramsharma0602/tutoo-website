# Tutoo — Implementation Audit, Content Review & Next-Round Plan

**Prepared:** August 2026 · Audits the live codebase against `docs/UX-REDESIGN-PLAN.md` + `docs/BRAND-DESIGN-SYSTEM.md`
**No code has been changed.** This document ends at a decision gate (§30 of your brief).

**How to read this:** the four implemented phases fixed the homepage, the funnel, the branding, and the honesty layer — and the audit confirms those hold up. The remaining problems cluster in four places the phases never fully reached: **(1) unverified product claims in the Safety section, (2) the tutor journey's entry point, (3) the two big forms, (4) the inner pages (For Parents / For Tutors / About / Mission / How-it-work deep pages) that still carry Figma-era content.** This audit is deliberately hardest on my own implementation.

---

## 1. Implementation Audit (plan vs. reality)

| UX Requirement | Planned | Status | Quality / Issue | Recommendation |
|---|---|---|---|---|
| Navigation (5-item, task-based) | §6 | **Partially Implemented** | 5 items exist, phone persistent, mobile CTA visible. **But the approved nav included "Become a Tutor" — it was dropped** (tutors now reach entry only via footer + a strip above the footer). Mega-menu still 3-level hover (keyboard-inaccessible). | Swap "Boards & Classes" out of the header for "Become a Tutor"; boards move to an on-page section + footer (the plan wanted this anyway). Rebuild dropdowns on Radix `NavigationMenu` (installed, unused). |
| Homepage (9 sections) | §7 | **Implemented** | Matches approved wireframe; 42% shorter; honest trust points. | Minor copy polish only (§17 below). |
| Hero | §7 | **Implemented / Needs copy decision** | Tutoring-first H1, mini requirement form, no fake dashboard. **Open question: primary CTA says "Book Free Assessment" — parents arrive wanting to *find a tutor*.** | See §8 headline/CTA options below — recommend "Find a Tutor" as the label, assessment stays the mechanism. |
| CTA system | §12 | **Implemented** | One orange CTA per view, consistent label, 5 touchpoints, sticky mobile bar, analytics events. | Rename per CTA table (§9) if the "Find a Tutor" direction is approved. |
| Tutor discovery | §7 | **Implemented** | Requirement-form model + honest /tutors page + data-driven showcase. | Populate `tutors.ts` when real tutors consent. |
| Home tuition page | §15 | **Implemented** | /home-tuition + Kothrud/Kolhapur city pages, prefilled CTAs, FAQ schema. | Verify the area lists against real coverage (already flagged). |
| Online classes page | §15 | **Implemented** | /online-tuition with honest setup note. | Confirm which video tool you use and name it. |
| Tutor registration | §15 | **Not Reviewed → Needs Improvement** | /apply-tutor works, but the 35KB form was never audited: placeholder-as-label ("Select Qualification"), no progressive steps, page copy not in tutor voice. | Round 2 below. |
| Forms (assessment) | §G | **Partially Implemented** | New fields (mode/city/area/timing) have proper labels & chips; prefill works. **But the original fields still use placeholder-as-label ("First Name \*"), and "Subject Need Help In" is broken English.** Single long form; progressive steps not built. | Add visible labels; reword; optionally split into 2 steps (details → contact). |
| Trust elements | §13 | **Incorrectly Implemented (risk)** | Fabricated *numbers* are gone. **But SafetyTrust still claims six product features: "OTP Session Verification", "Location Tracking", "Parent Monitoring", "AI Safety Alerts"…** — if these don't all exist in the product today, this is the same honesty problem in feature form. Headline "Safety & Trust Built Into Every Feature" is platform language. | **You must confirm which features are real.** Rewrite the section around the verification *process* (true today) + only real features. |
| Testimonials | §13 | **Implemented** | Real-data-driven, absent until populated, consent rules documented. | Add real quotes. |
| FAQ | §5/§15 | **Partially Implemented** | Stats chips fixed; accordion works. **But the questions are platform-era ("What is OTP session verification?", "Can parents track live sessions?") — not the objections parents actually have (fees, tutor change, demo, start time).** | Rewrite 6–8 Q&As (§17). |
| Mobile UX | §11 | **Implemented** | Sticky bar, visible header CTA, 48px targets, safe-area padding. | Mobile mega-menu accordion still 4 taps deep — solved by the nav change above. |
| Accessibility | §18 | **Partially Implemented** | Focus rings, reduced-motion, labels in new components, aria-pressed chips. **Open: hover-only desktop dropdowns; placeholder-as-label on old form fields; some `text-white/30`-era contrast on inner pages.** | Rounds 1–2 below. |
| Content | §16 | **Partially Implemented** | Homepage + service pages are parent-voice. **Inner pages (For Parents, For Tutors, About, Mission, How-it-work deep sections, book-page intro "Discover your child's real potential", Contact) still carry Figma-era corporate/AI copy** — only fabricated stats and "AI-powered" labels were spot-patched. | Round 3 content pass (§17). |
| Duplicate pages | §15 | **Not Implemented** | /for-parents still overlaps /home-tuition (plan said merge/redirect). /how-it-work deep pages still tell a 7-step AI-platform story that contradicts the homepage's 3 steps. Mission = 7 heavy sections. | Round 3: merge/trim/redirect. |

---

## 2. Top 10 Problems (ranked)

**P0 — Must fix**

1. **Unverified feature claims in Safety & Trust.** "AI Safety Alerts", "Location Tracking", "Parent Monitoring", "OTP Session Verification" are product-feature promises. Every one that isn't live in the product today is a fabricated claim wearing a feature costume — and safety is the one place a parent will remember being misled. *Action: you confirm what's real; the section is rewritten around the true verification process.*
2. **Tutors have no entry point in the header.** Audience C's journey starts in the footer. The approved nav had "Become a Tutor"; the implementation dropped it in favour of "Boards & Classes". *Action: header becomes Home Tuition · Online Classes · Become a Tutor · About · Contact; boards move to the on-page section + footer matrix.*
3. **Primary CTA wording vs. parent intent.** Every parent-facing CTA says "Book Free Assessment". The parent's mental goal is "find a tutor"; "assessment" is *your* process word and adds a step in their head ("what assessment? will my child be tested?"). *Recommended: primary CTA "Find a Tutor" → same form; the form's own heading explains "start with a free assessment". This revisits your earlier choice — reasoning in §8 below; your call.*
4. **Assessment form is half-humanised.** New fields are good; the original six still use placeholder-as-label ("First Name \*") — labels vanish on typing, an accessibility and usability failure — and "Subject Need Help In" is not English a parent trusts. *Action: visible labels + rewording; optional 2-step split.*

**P1 — High priority**

5. **Homepage FAQ answers questions nobody asked.** Parents ask: What does it cost? Can I change the tutor? When can classes start? What is the free assessment? Is my child safe? The current set leads with OTP mechanics. *Action: rewrite Q&A set (§17).*
6. **/book-free-assessment page copy is still platform-era.** "Discover your child's real potential." + analysis-flavoured benefit cards around the form. *Action: retitle to the task ("Find the right tutor — start with a free assessment") + 3 plain reassurances.*
7. **Mega-menu accessibility.** 3-level hover chain, no keyboard path. *Action: Radix NavigationMenu single-panel "Boards & Classes" (moves to homepage section per P0-2).*
8. **Tutor application form & page never audited.** Placeholder labels, no steps, no tutor-voice reassurance (earnings cadence, verification steps, time-to-first-student). *Action: Round 2.*
9. **Inner-page bloat & contradiction.** /for-parents duplicates /home-tuition; /how-it-work deep pages narrate the abandoned 7-step AI pipeline; Mission/About are 7–8 heavy Figma sections each. *Action: redirect /for-parents → /home-tuition; trim /how-it-work to the 3-step story; compress About+Mission.*
10. **Microcopy stragglers (P2).** "Subjects & Programs — Comprehensive coverage across academic subjects and skill development programs" (jargon); TopInfoBar "Live Support" chip (is support actually live?); city section "check back often"; ForTutors strip is fine but its "Learn more" is vague. *Action: sweep (§17).*

---

## 3. UX Scores (1–10, honest)

| Area | Score | Reason |
|---|---:|---|
| First Impression | 8 | Clean brand hero, instant clarity, form above fold |
| Clarity | 8 | Homepage answers what/who/how in one screen; inner pages dilute it |
| Navigation | 6.5 | 5 items ✓, but tutor entry missing and mega-menu is hostile |
| Parent UX | 7.5 | Strong funnel; form's first half + FAQ hold it back |
| Student UX | 6 | No student-voice anywhere; site speaks only to parents (acceptable if parents are the buyer — but say so deliberately) |
| Tutor UX | 5 | No header entry; unaudited long form; weakest journey |
| Content | 6.5 | Homepage 8, inner pages 5 |
| CTA | 7.5 | Consistent, single-orange, tracked; label choice pending |
| Trust | 7 | Honest numbers ✓; SafetyTrust feature claims unverified; no real testimonials/tutors yet |
| Forms | 6 | New half excellent, old half placeholder-labels |
| Mobile UX | 8 | Sticky bar + visible CTA + drawer-ready patterns |
| Accessibility | 5.5 | Good new components; hover menus + old labels + inner-page contrast |
| Branding | 9 | Logo-derived system applied consistently, measured contrast |
| Visual Consistency | 7.5 | Homepage/service pages coherent; inner pages still Figma-flavoured |
| Conversion Potential | 7.5 | Funnel is short and instrumented; CTA language + form polish are the remaining friction |
| **Overall** | **7 / 10** | Front door is strong; the house behind it needs the same treatment |

---

## 4. §8 — Hero headline & CTA options

Current: **"Trusted home tutors & online classes for Class 1–12"** + primary "Book Free Assessment".

| # | Headline | Verdict |
|---|---|---|
| 1 | **Find the right tutor for your child — at home or online** | **Recommended.** Names the user's goal as the action; both audiences and both modes in one line. |
| 2 | Trusted home tutors & online classes for Class 1–12 (current) | Good; describes *us*, not *their goal*. Keep "Class 1–12" in the sub instead. |
| 3 | The right tutor, at your home or online | Punchy; loses "child/find" |
| 4 | Home tuition and online classes with verified tutors | Flat, category-page tone |
| 5 | Help your child learn better — with a tutor who fits | Warm; vaguer on the offer |

Recommended hero set:
- **H1:** Find the right tutor for your child — <violet>at home or online</violet>
- **Sub:** Verified tutors for Class 1–12, JEE & NEET. Tell us what your child needs — the first assessment is free, and we call you back within 24 hours.
- **Primary CTA:** **Find a Tutor** · **Secondary CTA:** **Become a Tutor** (violet outline — restores the tutor journey to the first screen)
- Mini-form card title: "Find your tutor" · sub: "Starts with a free assessment — takes under a minute."
- "How Tutoo Works" moves to a text link under the CTAs.

Why revisit your assessment-first choice: the *offer* (free assessment → match) is unchanged; only the **label** changes to the words in the parent's head. "Find a Tutor" buttons leading to a form titled "start with a free assessment" gets both: intent-matched click, honest process.

## §9 — CTA wording table

| Location | Current | Recommended |
|---|---|---|
| Header + sticky bar + hero primary | Book Free Assessment | **Find a Tutor** |
| Hero secondary | How Tutoo Works | **Become a Tutor** (How-it-works → text link) |
| Hero mini-form submit | Continue → | **Find My Tutor →** |
| Assessment form submit | Book Free Assessment | **Get My Free Assessment** |
| Service pages | Find a Home Tutor / Start Online Classes | Keep ✓ |
| HowItWorks section button | Book Free Assessment | Find a Tutor |
| FinalCTA | Book Free Assessment | Find a Tutor |
| Tutor strip | Become a Tutor / Learn more | Become a Tutor / **See how teaching works** |
| Tutor cards | Request this tutor | Keep ✓ |
| LearningSolutions links | Find a home tutor → / Start online → | Keep ✓ |

---

## 5. §17 — Section-by-section content (homepage + funnel)

```text
SECTION: Hero
CURRENT:  "Trusted home tutors & online classes for Class 1–12" / CTA "Book Free Assessment"
PROBLEM:  Describes the service, not the visitor's goal; CTA uses internal process language.
RECOMMENDED: See §8 set above.
WHY: The button says exactly what the parent came to do.

SECTION: Services (LearningSolutions)
CURRENT:  "Two ways to learn with Tutoo" — cards good.
PROBLEM:  None significant. "Also available" chips fine.
RECOMMENDED: Keep. Card links keep.

SECTION: How It Works
CURRENT:  3 steps ✓ "From requirement to first class in three simple steps"
RECOMMENDED: Keep; retitle sub: "Three steps from 'we need a tutor' to the first class."  (optional)

SECTION: Safety & Trust  ⚠ P0
CURRENT:  "Safety & Trust — Built Into Every Feature" + 6 feature cards incl. "AI Safety Alerts", "Location Tracking".
PROBLEM:  Platform framing + unverified product-feature claims.
RECOMMENDED (pending your confirmation of real features):
  H2: "How we keep your child safe"
  Cards (only what is true): "Every tutor is ID-verified" · "Interviewed before their first class" ·
  "You approve the tutor after the free assessment" · "Easy tutor replacement" ·
  "Attendance you can see" · [+ OTP card ONLY if the product does it]
WHY: Process claims you can keep are stronger than feature claims you can't.

SECTION: Subjects & Programs
CURRENT:  "Comprehensive coverage across academic subjects and skill development programs"
RECOMMENDED: "All boards, all major subjects" / sub: "CBSE, ICSE and SSC from Class 1–12 — plus JEE, NEET and CET prep."

SECTION: FAQ  ⚠ P1
CURRENT:  Leads with OTP/monitoring mechanics.
RECOMMENDED question set:
  1. How much does tuition cost? → honest fee-before-commit answer
  2. What happens in the free assessment?
  3. How quickly can classes start?
  4. What if the tutor isn't the right fit?
  5. How do you verify tutors?
  6. Do you teach both at home and online?
  7. Which classes and boards do you cover?
  8. How do I pay? (if answerable today; else omit)

SECTION: Final CTA
CURRENT:  "Ready to find the right tutor for your child?" ✓
RECOMMENDED: Keep; button → "Find a Tutor".

SECTION: /book-free-assessment page  ⚠ P1
CURRENT:  "Discover your child's real potential." + analysis-flavoured cards.
RECOMMENDED: H1 "Find the right tutor for your child" · sub "Start with a free assessment — tell us what you need
and we'll call you within 24 hours." · Cards: "Tell us once — we do the matching" / "Verified tutors only" /
"Free, no obligation".

SECTION: Assessment form  ⚠ P0
CURRENT:  placeholder-as-label; "Subject Need Help In"; "Tuition Mode *".
RECOMMENDED labels: "Student's first name / last name" · "Parent's mobile number" · "Email" ·
"Board" · "Class" · "School (optional)" · "How would you like to learn?" (At home / Online) ·
"Which subjects need help?" · "When would you prefer classes? (optional)" · "Area or pincode".
Errors: keep specific ("Please enter a valid 10-digit mobile number" ✓ already good).

SECTION: Tutor strip
CURRENT:  "Are you a tutor? Teach students near you, get weekly payouts and ready-made lesson plans." ✓
RECOMMENDED: Keep (verify "weekly payouts" + "lesson plans" are true commitments).

SECTION: TopInfoBar
CURRENT:  "Live Support" pulsing chip.
PROBLEM:  Claim — is support live right now?
RECOMMENDED: Replace with "Mon–Sat, 9am–8pm" (real hours) or remove chip.
```

## §27 — Final content table (condensed)

| Location | Current | Recommended |
|---|---|---|
| Hero H1 | Trusted home tutors & online classes for Class 1–12 | Find the right tutor for your child — at home or online |
| Main CTA | Book Free Assessment | Find a Tutor |
| Home Tuition card | Learn comfortably at home… ✓ | keep |
| Online Classes card | Learn from experienced tutors… ✓ | keep |
| Become Tutor | (footer/strip only) | header item + hero secondary CTA |
| How It Works | ✓ | keep |
| Safety section | "Built Into Every Feature" + 6 features | "How we keep your child safe" + verified-true cards |
| Subjects heading | Comprehensive coverage across… | All boards, all major subjects |
| Testimonials | (absent until real) ✓ | keep pattern |
| FAQ | OTP/monitoring questions | fees / assessment / start-time / replacement / verification set |
| Final CTA | ✓ headline; CTA label | Find a Tutor |
| Footer | ✓ | keep |

---

## 6. §18 — Content style guide (the 10 rules, adopted)

1. Everyday English — if a Class-6 parent pauses on a word, replace it. 2. One idea per sentence; sentences under ~16 words. 3. Talk to "you/your child", never "users/students can". 4. Active voice. 5. Banned words: *ecosystem, leverage, comprehensive, solutions, seamless, cutting-edge, empower, personalized learning journey, OS/platform* (in parent-facing copy). 6. One idea per section; the heading states it. 7. CTAs name the action's outcome ("Find a Tutor", not "Get Started"). 8. No superlatives without proof. 9. **Never invent numbers, ratings, features, or guarantees** (already enforced — keep it that way). 10. Warm > clever: "We'll call you back within 24 hours" beats any slogan.

## 7. §10–12 — Journeys (current vs. gaps)

- **Parent:** Visit → understand (✓ 1 screen) → mini-form (✓) → full form (⚠ label issues, single long page) → submit → 24-h callback (✓) → WhatsApp handoff (✓). *Gap: form polish only.*
- **Student:** rides the parent journey; no student-address anywhere. *Decision needed: if students (esp. Class 11–12/JEE) self-serve, add one student-voiced line in hero sub or online-tuition page; otherwise consciously accept parent-only voice.*
- **Tutor:** Visit → **must scroll to footer** (⚠) → /for-tutors (heavy) → /apply-tutor (⚠ unaudited form) → submit → ? (no expectation set: "we review in X days"). *Gaps: entry point, form, post-submit expectations.*

## 8. §29 — Implementation plan (awaiting your approval)

**Round 1 — Critical (P0):** SafetyTrust rewrite *(after you confirm real features)* · header swap "Boards & Classes"→"Become a Tutor" (+ boards to footer matrix; Radix panel later) · CTA relabel per table *(if approved)* · assessment-form labels + "Which subjects need help?" + book-page copy.
**Round 2 — Tutor journey (P1):** /apply-tutor page + form humanisation (labels, tutor-voice copy, post-submit expectations) · hero secondary CTA "Become a Tutor" · tutor-strip verify claims.
**Round 3 — Inner pages (P1):** FAQ rewrite · /for-parents → redirect to /home-tuition · /how-it-work trimmed to 3-step story · About/Mission compression · microcopy sweep (Subjects heading, Live Support chip, etc.).
**Round 4 — Polish (P2):** Radix NavigationMenu migration · inner-page contrast pass · student-voice line (if wanted) · empty/error state review on remaining forms.

---

## 9. STOP — Decisions needed before any code changes

1. **Safety features — which of these actually exist in the product today?** OTP session start / location tracking / parent monitoring dashboard / attendance verification / AI safety alerts. (Everything unconfirmed comes off the homepage.)
2. **Primary CTA: switch "Book Free Assessment" → "Find a Tutor"?** (My recommendation: yes — reasoning in §8.)
3. **Header: replace "Boards & Classes" with "Become a Tutor"?** (My recommendation: yes.)
4. **Students: parent-only voice, or add student-facing lines?**
5. **Tutor strip claims: are "weekly payouts" and "ready-made lesson plans" real commitments?**
6. Approve Rounds 1–4 scope (or reorder).
