# AI image prompts — homepage section artwork

Prompts for generating the homepage photography yourself (Midjourney, Nano
Banana, Flux, Ideogram, Firefly, Seedream, whatever you use).

Generated images go in the **same place** as the downloaded ones —
`public/tutoo_assets/photos/` — under the **same filenames**. No code change
is needed; the site picks them up on refresh.

---

## Slot specs — Home Tuition

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/home-tuition.jpg` |
| **Aspect ratio** | **4:3 landscape** — the CSS box is `aspect-[4/3]` |
| **Generate at** | 1600 × 1200 (then it can be saved down to ~1400px wide) |
| **Ship at** | ~1400 × 1050, JPEG quality 80–85, target under 250 KB |
| **Crop behaviour** | `object-cover`, centred — anything outside 4:3 is cut off |

### Composition constraints — read before generating

1. **Generate at 4:3, not 16:9.** A wide image gets centre-cropped and you
   will lose the sides.
2. **Keep faces in the middle band.** The card has rounded 26px corners, so
   the four corners are shaved.
3. **Leave the bottom-left corner quiet.** A white pill that reads
   *"Tutor comes to you"* floats over roughly the bottom-left 260 × 60px. No
   face or key detail there.
4. **Warm, not cold.** This row is the orange one (`#EA580C`). Warm indoor
   daylight ties the photo to the brand colour. The online row next to it is
   the violet one and should stay cooler — that contrast is deliberate.
5. **Two people only.** A tutor and one child. Tutoo sells one-to-one; a
   photo with three kids around a table quietly contradicts the copy.

---

## The prompt

```
Candid documentary photograph of a private home tutor teaching one school
child at a dining table inside an Indian middle-class apartment. The tutor is
a woman in her late twenties in a simple kurta, seated beside a 10-year-old
child in casual home clothes, leaning in and pointing at an open school
notebook on the table. The child is looking at the page, engaged, faintly
smiling. Warm late-afternoon daylight from a window on the left, soft shadows,
lived-in domestic background gently blurred — a bookshelf, a plant, a plain
painted wall. Textbooks, a pencil case and a steel water glass on the table.
Natural skin tones, no studio lighting, no posing for camera. Shot at 35mm,
f/2.0, eye level, shallow depth of field, subjects centred in frame with
headroom above. Photorealistic, warm neutral colour grade, editorial lifestyle
photography.
```

### Negative prompt

```
cartoon, illustration, 3d render, anime, vector art, clipart, cgi, painting,
text, watermark, logo, letters, distorted hands, extra fingers, extra limbs,
deformed face, blurry face, plastic skin, oversaturated, harsh flash,
classroom, blackboard, whiteboard, school uniform, group of children, crowd,
laptop, computer screen, stock-photo smile, direct eye contact with camera,
thumbs up, empty room, cluttered background
```

### Settings

- Aspect ratio **4:3** (Midjourney: `--ar 4:3`)
- Photographic style, realism high
- If your tool has a style-strength control, keep it low — stylisation is
  what makes AI images read as fake

---

## Slot specs — Online Classes

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/online-class.jpg` |
| **Aspect ratio** | **4:3 landscape** — same `aspect-[4/3]` box as above |
| **Generate at** | 1600 × 1200 |
| **Ship at** | ~1400 × 1050, JPEG quality 80–85, under 250 KB |
| **Crop behaviour** | `object-cover`, centred |

### Composition constraints — different from the home row

1. **The screen must show a live human, not a video player.** The floating
   pill on this card reads *"Live, not recorded"*. If the laptop shows a
   play button, a progress bar or a slide deck, the picture argues with the
   badge sitting on top of it. A face in a video-call tile is the whole point.
2. **Over-the-shoulder, three-quarter rear view.** You need to see both the
   child and what is on the screen. A front-on shot of a child staring at a
   laptop shows neither and looks like every other e-learning stock photo.
3. **Cool light, deliberately.** This row is the violet one (`#7B2FF7`). The
   home-tuition row above it is warm orange. Generating both warm collapses
   the contrast that tells a parent these are two different services.
4. **A notebook and a pen must be in frame.** Live tuition means the child is
   working, not watching. This is the single detail that separates the photo
   from a "kid on a screen" image.
5. **Quiet bottom-left.** The white pill floats over roughly the bottom-left
   260 × 60px. No face or key detail there.
6. **One child, one tutor on screen.** One-to-one, same as the copy says.

### The prompt

```
Candid documentary photograph of an Indian school child, about eleven years
old, taking a live one-to-one online tuition class at a study desk in a
bedroom at home. Shot from behind and slightly to the side, over the
shoulder at a three-quarter angle, so both the child and the laptop screen
are visible. On the screen, a friendly adult tutor mid-explanation in a video
call window, clearly a live person talking, not a recorded video. The child
wears simple over-ear headphones and is writing in an open ruled notebook
beside the laptop, pen in hand. Cool soft daylight from a window on the
right, calm tidy room gently blurred behind — a plain wall, a small shelf,
folded clothes. Natural skin tones, no studio lighting, unposed. Shot at
35mm, f/2.0, seated eye level, shallow depth of field, subject centred with
headroom above. Photorealistic, cool neutral colour grade, editorial
lifestyle photography.
```

### Negative prompt

```
cartoon, illustration, 3d render, anime, vector art, clipart, cgi, painting,
text, watermark, logo, letters, gibberish text on screen, distorted hands,
extra fingers, extra limbs, deformed face, blurry face, plastic skin,
oversaturated, harsh flash, neon lighting, dark room, glowing screen glare,
gaming setup, multiple monitors, RGB lights, headset microphone, classroom,
blackboard, school uniform, group of children, crowd, video player controls,
play button, progress bar, slide presentation, empty chair, stock-photo
smile, direct eye contact with camera, thumbs up
```

### Settings

- Aspect ratio **4:3** (Midjourney: `--ar 4:3`)
- Photographic style, realism high, stylisation low
- Generate this one in the **same tool and same settings** as the
  home-tuition image. The two sit in adjacent rows down the page; one AI
  photo next to one stock photo, or two AI photos from different models,
  reads as mismatched even to someone who cannot say why.

## Slot specs — Our Teachers portraits

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/teacher-1.jpg` … `teacher-4.jpg` |
| **Aspect ratio** | **4:5 portrait** — the CSS box is `aspect-[4/5]` |
| **Generate at** | 1000 × 1250 |
| **Ship at** | 800 × 1000, JPEG quality 80–85, under 150 KB each |
| **Crop behaviour** | `object-cover` anchored at `center 22%` |

### Which file goes with which card

The four sample cards are filled in order, so the portrait must match the
name printed under it. Getting this wrong is instantly obvious to a visitor.

| File | Card | Gender |
|---|---|---|
| `teacher-1.jpg` | Priya Deshmukh — M.Sc. Mathematics | **female** |
| `teacher-2.jpg` | Rahul Kulkarni — B.E. Mechanical | **male** |
| `teacher-3.jpg` | Sneha Joshi — M.A. English | **female** |
| `teacher-4.jpg` | Amit Patil — M.Sc. Chemistry | **male** |

> Heads-up: the current `download-photos` script fetches a **male** photo for
> `teacher-1.jpg`, which sits under Priya Deshmukh. If you are replacing these
> with generated portraits, that fixes itself. If you are not, swap
> `teacher-1` and `teacher-3`.

### Composition constraints

1. **Face in the upper third.** The crop is anchored at `center 22%`, so the
   top of the frame is what survives. Chest-up or waist-up with clear
   headroom; a full-body shot loses the face entirely.
2. **Top-left corner stays plain.** A white pill reading "Home & online" or
   "Online" sits over roughly the top-left 130 × 28px.
3. **Plain, softly blurred background.** These four sit in a row. Four busy
   backgrounds turn the row into a collage.
4. **Eye contact is correct here.** Unlike the lifestyle scenes, a teacher
   portrait should look at the camera — a parent is deciding whether they
   trust this person.
5. **Skin texture, not skin smoothing.** Retouched, poreless faces are the
   number-one tell of an AI portrait.

---

### Female teacher prompt

```
Natural, realistic portrait photograph of an Indian woman in her early
thirties who teaches school students, photographed at home. Chest-up
portrait, facing the camera, relaxed shoulders, a calm and warm closed-lip
smile, direct friendly eye contact. She wears a simple cotton kurta in a
plain muted colour, minimal jewellery, hair tied back neatly. Soft diffused
daylight from a large window to one side, gentle shadow on the far cheek.
Plain light-coloured wall behind her, softly out of focus. Real skin texture
with visible pores and fine lines, no retouching, no beauty filter, no makeup
gloss. Everyday South Asian features, ordinary and approachable rather than
model-like. Shot at 85mm, f/2.2, eye level, shallow depth of field, head
positioned in the upper third of the frame with headroom above.
Photorealistic, neutral colour grade, natural documentary portrait.
```

### Male teacher prompt

```
Natural, realistic portrait photograph of an Indian man in his mid thirties
who teaches school students, photographed at home. Chest-up portrait, facing
the camera, relaxed shoulders, a calm and warm closed-lip smile, direct
friendly eye contact. He wears a plain formal shirt in a muted colour, collar
open, neatly groomed short hair and trimmed beard. Soft diffused daylight
from a large window to one side, gentle shadow on the far cheek. Plain
light-coloured wall behind him, softly out of focus. Real skin texture with
visible pores and stubble detail, no retouching, no beauty filter. Everyday
South Asian features, ordinary and approachable rather than model-like. Shot
at 85mm, f/2.2, eye level, shallow depth of field, head positioned in the
upper third of the frame with headroom above. Photorealistic, neutral colour
grade, natural documentary portrait.
```

### Negative prompt (both)

```
cartoon, illustration, 3d render, anime, vector art, cgi, painting, text,
watermark, logo, letters, plastic skin, airbrushed, beauty filter, heavy
makeup, glamour lighting, fashion model, magazine cover, studio backdrop,
harsh flash, neon lighting, oversaturated, distorted face, asymmetrical eyes,
extra fingers, deformed hands, teeth artefacts, blurry, low resolution,
full body, wide shot, crowd, multiple people, classroom, blackboard,
graduation cap, folded arms, thumbs up, stock-photo grin, business suit,
corporate headshot, sunglasses, hat
```

### Making the four look like one set

Hold these **constant** across all four generations, or the row falls apart:

- 85mm, f/2.2, eye level, chest-up framing
- soft window daylight from the side
- plain light wall, same blur strength
- neutral colour grade

Vary **only** these, so they read as four different people:

| Lever | Suggestions |
|---|---|
| Age | late 20s · early 30s · mid 30s · early 40s |
| Clothing colour | muted teal · off-white · soft grey · dusty maroon |
| Hair | tied back · short crop · shoulder length · side parting |
| Wall tint | warm off-white · pale grey · soft beige · light sand |
| Window side | left · right (alternate down the row) |

If your tool supports seeds, keep the same seed and change one lever at a
time. That gets you four people who look photographed on the same afternoon.

### One thing to be clear-eyed about

These portraits sit under real-sounding names as "our expert teachers". A
generated face is nobody, so there is no consent problem — but a parent
reading the card believes they are looking at a person who will come to their
house. Treat these as placeholders with a shelf life, and replace each one
with the real tutor's own consented photo as they come on board: drop it in
`public/tutors/` and set `photo` on their entry in `src/app/data/tutors.ts`.
The card prefers the real photo automatically.

---

## Slot specs — /online-tuition hero

The same treatment as the homepage hero: a **cut-out photograph with a
transparent background**, bleeding off the bottom-right, with a card floating
over it. Not a photo in a box.

| | |
|---|---|
| **Save as** | `public/tutoo_assets/hero/online-hero.webp` (+ `online-hero-sm.webp`) |
| **Format** | **WebP with alpha** — transparent background, not white |
| **Generate at** | 1600 × 1150, then cut out and export |
| **Ship at** | 1400 × 1000 and 860 × 615 (matches the homepage pair exactly) |
| **Weight** | ~200 KB and ~100 KB |
| **Placement** | `absolute bottom-0 right-0`, ~55% width, `hidden lg:block` |

### Read this first — it changes what you generate

The hero currently holds `ClassWindowPanel`, the rendered live-class window
(LIVE dot, timer, tutor tile, the ringed algebra, *Started with OTP*). That
panel is the page's entire argument that this is real teaching and not a
recorded video.

**Do not replace it with the photo. Layer them**, the same way the homepage
hero layers the "We help in" card over the tutor photo:

```
┌──────────────────────────────────────────────────────────┐
│  Online Classes · Anywhere in India                      │
│                                                          │
│  Learn from the right tutor,          ┌──────────┐       │
│  from anywhere.                    ┌──┤  LIVE  ⏱ │       │
│                                    │  │  panel   │  ██   │
│  Live one-to-one classes for       │  └──────────┘ ████  │
│  Class 1–12...                     │      ██████████████ │
│                                    │   ← student cutout, │
│  [ Find a Tutor ] [ Book a Free ]  │     bleeding off ↓  │
└──────────────────────────────────────────────────────────┘
```

The panel shrinks and sits over the photo's left edge. Human + proof, in one
view. A photo alone loses the proof; the panel alone has no human in it.

### Composition constraints — a cut-out is fussier than a normal photo

1. **Subject on the right of frame, facing LEFT.** They should look back into
   the headline, not off the edge of the page.
2. **Plain, evenly lit, light background.** This is the single thing that
   decides whether the cut-out is clean. A busy or dark background against
   dark hair produces a ragged edge that no amount of feathering fixes — this
   already cost several attempts on the homepage image.
3. **Crop at desk level.** The bottom bleeds off the section edge, so nothing
   below the desk matters. Do not generate a full body.
4. **The laptop screen faces AWAY from camera.** Deliberate: it removes the
   one surface where image models write convincing gibberish, and the real
   screen content is already shown by the panel.
5. **Engaged, not passive.** Mid-sentence, hand raised slightly, looking at
   the screen and talking. A child *watching* a laptop is a stock photo about
   screen time; a child *talking to* a laptop is an online class.
6. **Leave headroom and left-side space** — the panel overlaps the upper-left
   of the subject.

### The prompt

```
Candid documentary photograph of an Indian school child, about twelve years
old, sitting at a study desk taking a live one-to-one online tuition class.
Three-quarter view from the front left, the child positioned on the right of
the frame and turned to face left, looking at an open laptop whose screen is
angled away from the camera. The child is mid-sentence, speaking to their
tutor, one hand resting on an open ruled notebook with a pen. Simple everyday
home clothes, over-ear headphones. Cropped at desk level, upper body and desk
only. Lit by soft even daylight with clear separation between the child and
the background. Plain light grey seamless background, completely uncluttered,
no furniture, no wall decoration, no window. Real skin texture, natural hair
detail with clean edges, no motion blur. Shot at 50mm, f/4, seated eye level,
the whole subject in sharp focus. Photorealistic, cool neutral colour grade,
editorial lifestyle photography.
```

### Negative prompt

```
cartoon, illustration, 3d render, anime, vector art, cgi, painting, text,
watermark, logo, letters, gibberish text on screen, visible laptop screen
content, busy background, cluttered room, bookshelf, window, curtains,
posters, dark background, black backdrop, gradient backdrop, shallow depth of
field, bokeh, motion blur, flyaway hair, plastic skin, airbrushed,
oversaturated, harsh flash, neon lighting, distorted hands, extra fingers,
deformed face, full body, standing, group of children, classroom, teacher in
frame, direct eye contact with camera, stock-photo smile, thumbs up
```

Note the two unusual entries: **`bokeh` and `shallow depth of field` are in
the negatives on purpose.** A blurred background is normally flattering, but
it merges hair into the backdrop and makes a clean cut-out impossible. f/4 and
a plain backdrop is what you want here, even though f/2 looks nicer uncut.

### Settings

- Aspect ratio **7:5** (or 4:3) — Midjourney `--ar 7:5`
- Photographic style, realism high, stylisation low
- Generate several. Cut-out quality varies far more between takes than
  overall image quality does, and you are picking for edges, not for looks.

### Turning it into the asset

1. Cut out the background. [remove.bg](https://www.remove.bg/) or Photoshop's
   *Select Subject* both work; the homepage image was done with `rembg` using
   the `isnet-general-use` model, which handled hair better than alpha matting.
2. **Check the edges at 200%** — especially hair, headphone band, and where
   the desk meets the crop. A halo of the old background is the giveaway that
   an image was cut out.
3. Feather the bottom and left edges slightly so the photo dissolves into the
   section instead of ending in a hard line. The homepage image uses a 130px
   alpha ramp on the left and 60px on the right.
4. Export **WebP with alpha** at 1400 × 1000, plus an 860 × 615 copy.
5. Save both into `public/tutoo_assets/hero/`.
6. Tell me when they are in and I will wire the layering — the panel needs to
   shrink and reposition, which is a code change, not a drop-in.

### If you would rather not do a cut-out

Ask for the same scene with `warm domestic background, tidy bedroom, softly
blurred` instead of the plain backdrop, drop the cut-out negatives, and save it
as a normal `.jpg` into `public/tutoo_assets/photos/online-hero.jpg`. It will
sit in a rounded panel like the two homepage section photos. Less striking than
the bleed, but no edge work and no way to get it wrong.

---

## After you generate

1. **Check the hands and the notebook.** Fingers and written text are where
   image models fail. If the hand near the notebook or pen looks wrong,
   regenerate — do not ship it. Nobody consciously notices a bad hand;
   everybody subconsciously distrusts the page.
2. **Check for text.** Any invented lettering on a book spine, a wall poster
   or a laptop screen should be removed or blurred out. Models produce
   convincing-looking gibberish, and on the online-class image the screen is
   exactly where a viewer's eye goes.
3. **On the online image, check the video-call tile.** If it reads as a
   recorded video rather than a live person, it contradicts the "Live, not
   recorded" badge printed over it.
4. **Crop to exactly 4:3** before saving.
5. **Compress.** Over 250 KB and it hurts your mobile load; parents in Pune
   and Kolhapur are largely on phones. [Squoosh](https://squoosh.app/) does
   this in the browser — MozJPEG, quality ~80.
6. Save over the matching filename in `public/tutoo_assets/photos/`, restart
   the dev server, hard-refresh.

---

## One caution on AI images of children

An AI-generated child is nobody, which sidesteps the consent problem a real
child's photo carries — that part is genuinely cleaner.

But the image still needs to look like an ordinary Indian home, not a glossy
advertisement. Parents in Kothrud and Kolhapur can tell the difference between
a photo of a house like theirs and a rendered marketing fantasy, and the
second one makes everything else on the page feel less trustworthy. Judge the
output on "could this be a family we actually teach?" rather than on how
polished it looks. The slightly imperfect, lived-in version wins.

If a generation looks like an advert, it is the wrong one — regenerate.
