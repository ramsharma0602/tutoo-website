# Tutoo — Typography Audit & Proposed System

**Prepared:** August 2026 · **No code changed** — this stops at your approval gate (§26).
Every number below was counted from the actual source, not estimated.

> **One thing to know first:** I fetched **https://tutoolearning.com/** and it still returns the old title *"Tutoo – AI-Powered Learning Platform"*. **The live site has not been deployed with any of the last several rounds of work.** So the live site shows the pre-redesign typography, not what's in your repo today. This audit is against the **current code**, which is what you'll actually deploy.

---

## 1. Current font analysis

| | Detail |
|---|---|
| **Families** | **2** — `Inter` (body) + `Clash Display` (headings) |
| **Sources** | **2 different CDNs** — Google Fonts + Fontshare |
| **How loaded** | Two chained CSS `@import`s inside `src/styles/fonts.css` |
| **Inter weights** | 300, 400, 500, 600, 700 (5 files) |
| **Clash Display weights** | **600, 700 only** (2 files) |
| **Base size** | 16px (`--font-size`) — correct |
| **Tokens** | `--font-heading`, `--font-body` in `theme.css`; `h1–h4` base rules map to Tailwind's `--text-*` |

### Weights actually used in components

| Class | Weight | Count |
|---|---:|---:|
| `font-black` | **900** | **334** ← most used weight on the site |
| `font-bold` | 700 | 315 |
| `font-semibold` | 600 | 277 |
| `font-medium` | 500 | 102 |
| `font-normal` | 400 | 6 |

---

## 2. Current typography problems (evidence-based)

**P1 — Headings are faux-bolded by the browser.** `Clash Display` is loaded at **600 and 700 only**, but `font-black` (**900**) is used 334 times, and **58 files apply `font-black` to a `--font-heading` element**. The browser has no 900 weight to use, so it *synthesises* one by algorithmically smearing the 700 outlines. That's why headings can look slightly heavy, uneven, and different between Chrome/Safari. This is a genuine rendering defect, not a taste issue — and it's the single biggest visual win available.

**P2 — 36 distinct font sizes.** Including arbitrary one-offs: `text-[8px]`, `text-[9px]`, `text-[10px]`, `text-[11px]`, `text-[12px]`, `text-[13px]`, `text-[15px]`, `text-[16px]`, `text-[40px]`, `text-[58px]`, `text-[60px]`, `text-[62px]`, `text-[64px]`, `text-[88px]`. A design system should have ~12.

**P3 — 88 instances of text at 10px or smaller** (including 8px and 9px). Unreadable for a 45-year-old parent, and below every accessibility guideline.

**P4 — A font that is referenced but never loaded.** `'General Sans'` appears in **37 inline fallback chains** across 11 files. It is **not in `fonts.css`** and never has been. Those fallbacks silently do nothing.

**P5 — 226 inline `fontFamily` declarations across 69 files, written 8 different ways** — `var(--font-heading)`, `var(--font-heading, 'Clash Display', sans-serif)`, `var(--font-heading,'General Sans',sans-serif)`, `"Inter,sans-serif"`, and five more variants. This is exactly the "inline font styles" problem in your §20.

**P6 — A wasted font file.** `Inter` loads weight **300**, and `font-light`/`font-thin` appear **zero times** in the codebase.

**P7 — Render-blocking font loading.** Fonts come from `@import` *inside a CSS file*. The browser must download and parse `index.css` before it even discovers the font URLs — so your three `<link rel="preconnect">` tags in `index.html` fire too late to help much. Two CDNs, discovered serially.

**P8 — A live bug in your main form: iOS zooms when a parent taps an input.** Form fields use `text-sm` (**14px**). iOS Safari force-zooms the viewport whenever a focused input is below **16px**. The assessment form has **27** such fields and the tutor form **18**. Every mobile parent starting your primary conversion form gets a jarring zoom.

**P9 — A token contradiction.** `--font-weight-medium` is **600** in `:root` but **500** in `.dark`, so base `h1–h4` change weight between themes.

**P10 — 10+ line-height values**, including `leading-[1.05]`, `[1.06]`, `[1.08]`, `[1.85]`.

---

## 3–5. Recommended font, and why

### Recommendation: **Plus Jakarta Sans** — one family for the entire site

I evaluated all five you listed against your actual audience (parents 30–50 on mid-range Android, students, tutors) and brand:

| Font | Verdict |
|---|---|
| **Plus Jakarta Sans** | **Recommended.** Humanist-geometric: enough warmth and character to carry headings *without a second display font*, while staying highly legible at 15–16px body. Its slightly rounded, open forms sit naturally beside a friendly orange + violet identity. Variable font on Google Fonts. |
| **Inter** | Best-in-class small-size legibility and already loaded — **the zero-risk option (Option B below)**. But it's visually neutral: dropping Clash Display without replacing its personality leaves headings a bit plain, and it's the most ubiquitous UI font on the web (your §5 warns against "too generic"). |
| **Manrope** | Good, but semi-condensed with thinner strokes — weaker on low-DPI Android at body sizes. |
| **DM Sans** | Lovely at display sizes, but `I`/`l`/`1` are hard to tell apart — poor for phone numbers, "Class 11", fees. |
| **Nunito Sans** | Rounded terminals read as school-age/playful — risks the "too childish" failure in your §5. |

**Why one family instead of two:** Clash Display exists solely for headings, costs a second CDN and a second DNS/TLS handshake, and is the direct cause of P1. Plus Jakarta Sans at 700 does the heading job with real outlines, so the site gains consistency *and* loses a network dependency. That satisfies your §4 preference for a single family.

**Option B (zero-risk):** keep **Inter**, delete Clash Display, cap weights at 700. Fewer visual changes, same fix for P1/P7. Choose this if you'd rather not touch the heading look at all.

**Footnote:** neither font ships Devanagari. You mention Marathi-medium tutors and "Hindi & Marathi" as a subject — if you ever render Devanagari text, add `Noto Sans Devanagari` to the stack. Not needed today.

---

## 6–8. The typography system

Fluid scale using `clamp()` — one token per level, mobile and desktop handled automatically (your §8).

| Level | Size (mobile → desktop) | Weight | Line-height | Used for |
|---|---|---|---|---|
| **Display** | 40 → 56px | 700 | 1.08 | Rare — big landing statements |
| **H1** | 32 → 48px | 700 | 1.12 | Page titles, hero |
| **H2** | 26 → 36px | 700 | 1.15 | Section headings |
| **H3** | 20 → 28px | 600 | 1.25 | Sub-sections, card groups |
| **H4** | 18 → 20px | 600 | 1.3 | Card titles |
| **Body Large** | 17 → 18px | 400 | 1.6 | Hero sub, intros |
| **Body** | 16px | 400 | 1.6 | Default text |
| **Body Small** | 14px | 400 | 1.55 | Card descriptions, meta |
| **Caption** | **13px (hard floor)** | 500 | 1.45 | Timestamps, fine print |
| **Navigation** | 15px desktop / 16px mobile | 500 | 1.3 | Header nav |
| **Button** | 15 → 16px | 600 | 1.3 | All buttons |
| **Label** | 14px | 600 | 1.4 | Form labels |
| **Input** | **16px (never lower)** | 400 | 1.4 | All form fields |

**12 levels replacing 36 sizes. 13px is an absolute floor** — every `text-[8px]`, `[9px]`, `[10px]`, `[11px]`, `[12px]` gets promoted (fixes P3).

**Weights: 400 / 500 / 600 / 700 only.** All 334 `font-black` become 700 (fixes P1). Per your §9, nothing at 800/900.

---

## 9–13. Per-area specification

**Header** (already matches your §11): nav 15px/500 desktop, 16px/500 mobile · CTA 15px/600 · dropdown items 14px/500 · logo wordmark 18px/700 (currently `font-black` — drops to 700).

**Hero:** H1 32→48px/700/1.12; the violet keyword keeps the same weight (colour carries emphasis, not weight). Sub-headline Body Large 17→18px/400/1.6, capped at ~60 characters per line. *Your current hero headline is already plain and parent-friendly — I'm not proposing a rewrite (§12).*

**Buttons:** 15→16px/600/1.3, uniform across primary, secondary, outline and text buttons.

**Forms (the important one):** Label 14px/600 · **Input 16px/400 — this is what kills the iOS zoom bug (P8)** · Placeholder 16px/400 muted · Helper 13px · Error 13px/500. Inputs must never go below 16px, no matter how the design looks on desktop.

**Cards** (tutor / subject / service / testimonial): Title 18px/600 · Meta 14px/500 muted · Description 14px/400/1.55 · Action 15px/600. One bold element per card — currently several cards bold everything, flattening the hierarchy (§18).

**Footer:** Column heading 15px/600 · Link 14px/400 (hover 500) · Description 15px/400/1.6 · Copyright 13px/400. Nothing smaller than 13px.

---

## 14. Font-loading plan

1. **Delete both `@import`s** from `fonts.css`; load one `<link>` in `index.html` `<head>` so the preconnects you already have actually do their job (fixes P7).
2. **One variable font file** — `Plus Jakarta Sans` wght 400–700 — instead of 7 static weight files across 2 CDNs.
3. **Drop Fontshare entirely** (removes a DNS lookup + TLS handshake) and remove its preconnect.
4. `display=swap` (already correct).
5. Optional: `<link rel="preload">` the font file for faster first paint.
6. Delete the dead `'General Sans'` references (P4) and Inter 300 (P6).

**Net: 2 CDNs / 7 font files → 1 CDN / 1 variable file.**

## 15. Accessibility

13px floor site-wide · body line-height 1.6 · **16px inputs** (also a WCAG 1.4.4 reflow concern, not just iOS) · sizes in `rem` so browser zoom and OS text-size settings work · heading hierarchy stays semantic (no `h3` styled as `h1`) · no meaning conveyed by weight alone. Colour contrast is unchanged — the brand palette already passed in the earlier round.

## 16. Implementation plan (on approval)

**Step 1 — Tokens:** typography variables in `theme.css` (`--text-h1`, `--leading-body`, …); fix the `--font-weight-medium` 600/500 contradiction (P9).
**Step 2 — Loading:** swap `@import` → `<link>`, single variable font, drop Fontshare.
**Step 3 — Global sweep:** `font-black` → `font-bold` (334) · sub-13px sizes promoted (88) · the 14 arbitrary `text-[Npx]` values mapped onto the scale · 226 inline `fontFamily` declarations removed in favour of the inherited family.
**Step 4 — Components:** header, hero, buttons, **forms (16px inputs)**, cards, footer.
**Step 5 — Verify:** build + screenshot at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920, checking heading wrap, card balance, form comfort and that no text overflows.

Estimated: ~700 edits across ~90 files, nearly all mechanical and scriptable.

---

## Decisions needed before I implement

1. **Font: Plus Jakarta Sans (recommended, single family)** — or **Option B: Inter only** (zero visual risk on body text)?
2. **Confirm `font-black` → `font-bold` everywhere** (334 instances). This is the fix for faux-bold; headings will look *cleaner and more even*, but slightly less heavy than today.
3. **Confirm the 13px floor** — 88 pieces of tiny text get bigger. A few dense layouts (badges, chart labels) will grow slightly.
4. **Confirm 16px form inputs** — fixes the iOS zoom bug; inputs look a touch larger on desktop.

Say "go" plus your font choice and I'll implement and verify in one pass.
