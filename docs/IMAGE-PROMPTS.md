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

## Slot specs — "Inside a Class" section image

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/inside-a-class.jpg` |
| **Aspect ratio** | **4:3 landscape** — same as the two homepage section photos |
| **Generate at** | 1600 × 1200 |
| **Ship at** | ~1400 × 1050, JPEG quality 80–85, under 250 KB |
| **Sits** | right-hand column of the section; the five facts move to the left |
| **Crop behaviour** | `object-cover` in a rounded panel — a normal photo, not a cut-out |

### The one rule that decides this shot

**It must not repeat the hero.** The hero already shows a girl at a laptop,
seen three-quarter from the front. Another photo of a child facing a laptop
is the same picture twice, twenty seconds apart, and the page starts to feel
padded.

So this one is shot **over her shoulder, from behind** — the class as *she*
sees it. Same subject, opposite camera. The hero says *"a real child is being
taught"*; this says *"and here is what the class actually is."* That is the
section's heading, literally.

### Composition constraints

1. **Over-the-shoulder, from behind and slightly above.** Her head and
   shoulder occupy the near foreground, **softly out of focus**. The laptop
   screen is the sharp subject.
2. **The screen shows a person, not a document.** A friendly adult tutor
   mid-explanation in a video-call tile. Faces are what image models render
   convincingly; UI labels, slide decks and worksheets come out as gibberish
   and this screen is exactly where the eye lands.
3. **No readable text anywhere.** No toolbar labels, no participant names, no
   writing on the notebook page. Slight blur on the notebook is fine and
   realistic — a page of invented squiggles is not.
4. **An open notebook and a pen in frame**, beside the laptop. This is the
   "work on the same page" fact made visible, and it is what separates a class
   from a video call.
5. **Warm, ordinary room.** Slightly blurred home background. This is the one
   photo on the page allowed to feel domestic rather than cool — it sits in a
   tinted band between two white sections and can afford the warmth.
6. **Leave the left third quieter.** The section's soft orange glow sits
   bottom-left behind this panel; a busy left edge fights it.

### The prompt

```
Candid documentary photograph taken over the shoulder of an Indian school
child, about eleven years old, sitting at a desk during a live one-to-one
online tuition class. The camera is behind her and slightly above, so the
back of her head and one shoulder fill the lower left of the frame, softly
out of focus. The open laptop in front of her is the sharp subject: its
screen shows a friendly adult tutor mid-explanation in a video call, clearly
a live person speaking, filling most of the screen. An open ruled notebook
and a pen lie on the desk beside the laptop. Warm domestic room gently
blurred behind — a plain wall, soft daylight from a window. Natural colours,
real skin texture, unposed, no studio lighting. Shot at 35mm, f/2.8, seated
height, shallow depth of field on the foreground with the screen in focus.
Photorealistic, warm neutral colour grade, editorial lifestyle photography.
```

### Negative prompt

```
cartoon, illustration, 3d render, anime, vector art, cgi, painting, text,
watermark, logo, letters, words on screen, gibberish text, readable writing,
handwriting, slide presentation, spreadsheet, document on screen, toolbar,
participant names, video call buttons, play button, progress bar, multiple
faces on screen, grid of participants, classroom, blackboard, group of
children, second child, adult in the room, front view, face to camera, direct
eye contact, stock-photo smile, thumbs up, plastic skin, oversaturated, harsh
flash, neon lighting, dark room, screen glare, distorted hands, extra fingers,
cluttered desk, gaming setup, multiple monitors
```

Two entries earn their place there: **`grid of participants`** and
**`multiple faces on screen`**. A model's default idea of a video call is a
Zoom grid, and a grid of tiles is precisely what this page spends three
sections promising your classes are *not*.

### Settings

- Aspect ratio **4:3** — Midjourney `--ar 4:3`
- Photographic style, realism high, stylisation low
- **Generate at least six.** The screen is the whole shot and it is the part
  most likely to come out wrong — you are selecting for "does the tutor on
  that screen look like a real person on a real call", not for the prettiest
  overall frame.

### Before you ship it

- **Zoom to 200% on the screen.** Any invented lettering, any second face, any
  toolbar — regenerate. This is the failure mode for this specific image.
- Check the hands on the keyboard and around the pen.
- Crop to exactly 4:3, compress under 250 KB, save to
  `public/tutoo_assets/photos/inside-a-class.jpg`, and send it to me — I will
  wire the layout swap so the facts move left and the photo takes the right.

### What happens to the class-window panel

Today that column holds `ClassWindowPanel` — the rendered LIVE dot, timer,
OTP bar and ringed algebra. It is the last place on the page that shows the
OTP and the attendance record, and it is the only element here that could not
be lifted onto a competitor's site unchanged.

The photo replaces it in that column. **Two ways to keep the proof:**

- **Overlay** — float a small white chip on the photo's lower-left reading
  *"Started with OTP · Attendance recorded"*, the way the homepage floats
  "Tutor comes to you" over its section artwork. Costs nothing, keeps the
  claim visible, matches an established pattern on the site.
- **Drop it** — the same facts are still in the list beside the photo as
  words. Cleaner, but the page loses its one non-generic visual.

I would take the overlay. Tell me which when you send the image.

---

## Slot specs — "Parents & Students" section image

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/parents-students.png` (I convert to `.webp`) |
| **Aspect ratio** | **4:5 portrait** — the only portrait photo on the page |
| **Generate at** | 1200 × 1500 |
| **Sits** | right-hand column, full height beside the two stacked audience cards |
| **Crop behaviour** | `object-cover`, `object-position: center 35%`, dark scrim over the bottom third |

### The one rule that decides this shot

**Both people must be in the frame, and the parent must not be teaching.**

Every other photo on this site shows one child, or a child and a tutor. This
is the only one that shows a parent and a child together — which is the whole
reason the section exists. "The same class, from two sides" needs two people
in the picture or the heading is doing all the work alone.

But the parent is *not* running the class. If she is leaning in, pointing at
the screen or holding the pen, the photo says "you will have to sit with them
every evening" — the exact objection online tuition has to answer. She is
**nearby and relaxed**, glancing over while he works. Present, not needed.

### Composition constraints

1. **Portrait orientation, 4:5.** Taller than it is wide. Both people fit
   comfortably in the upper two-thirds — the bottom third gets a dark scrim
   with a caption over it, so keep faces well clear of the lower edge.
2. **A mother and her son, around 11–13**, side by side at a dining table or
   study table in an ordinary Indian home. He is at the open laptop with a
   notebook in front of him; she sits beside him, **turned slightly toward
   him**, a cup of tea or a phone resting in her hands.
3. **He is engaged with the screen, not with her.** His attention goes to the
   laptop. Hers goes to him. That gap between the two gazes is the shot.
4. **Warm, unforced expressions.** A small natural smile from her at most. No
   posed grinning at the camera, no thumbs up, no high-five. Nobody is looking
   at the lens.
5. **The laptop screen is angled away** or shows only a soft, indistinct
   video-call tile. Do not attempt a readable interface — the eye goes there
   and gibberish UI is what makes a page feel fake.
6. **No readable text anywhere.** No writing on the notebook, no lettering on
   book spines, no wall calendar with invented dates.
7. **Ordinary home, softly lit.** Evening or late-afternoon window light.
   Lived-in: a bookshelf, a plant, a wall a real family painted. Not a studio,
   not a showroom kitchen, not a stock-photo white sofa.
8. **Natural Indian features and clothing.** Everyday home clothes — a kurta,
   a plain top. Not festive wear, not styled for a shoot.

### The prompt

> A candid documentary-style photograph of an Indian mother sitting beside her
> 12-year-old son at a wooden dining table in an ordinary middle-class home in
> India. The boy is working at an open laptop with a school notebook and pen in
> front of him, absorbed in what is on the screen. His mother sits close beside
> him, turned slightly toward him, holding a cup of tea, watching him work with
> a calm, warm expression — she is not helping him and not pointing at the
> screen. Neither of them is looking at the camera. Soft warm late-afternoon
> light from a window on the left. Lived-in home background, softly out of
> focus: a bookshelf, a potted plant, a painted wall. Natural Indian features,
> everyday home clothing. Vertical portrait composition, 4:5 aspect ratio, both
> figures in the upper two-thirds of the frame with clear space at the bottom.
> Shot on a 50mm lens at f/2.0, shallow depth of field, natural colour, realistic
> photograph. No text, no lettering, no readable screen interface, no logos.

**Negative prompt:** *cartoon, illustration, 3d render, cgi, anime, stock photo
smiles, looking at camera, thumbs up, pointing at screen, mother typing,
classroom, whiteboard, text, watermark, logo, readable screen, studio lighting,
white background, luxury interior*

### What to check before sending it

- **Her hands and the cup.** Hands holding objects are the single most common
  failure. If the cup or her fingers look wrong, regenerate.
- **His hands on the keyboard**, and the pen if one is visible.
- **The gap between the gazes.** If she is looking at the screen rather than at
  him, the photo has quietly become "parent supervises class" — regenerate.
- **The bottom third.** If either face sits low in the frame, the caption scrim
  will cut across it. Faces high, table and hands low.
- Send it as-is at full size — **do not compress it yourself.** I convert to
  `parents-students.webp` (1100 × 1375) plus a 720 px small version, the same
  pipeline as the Inside a Class photo.

**Until the file lands**, that column renders as a plain navy panel with the
caption on it. It looks deliberate rather than broken, so there is no rush.

---

## Slot specs — /home-tuition hero

| | |
|---|---|
| **Save as** | `public/tutoo_assets/photos/home-hero.png` (I convert to `.webp`) |
| **Aspect ratio** | **4:3 landscape** |
| **Generate at** | 1600 × 1200 |
| **Sits** | right-hand column of the hero, in a rounded framed panel |
| **Crop behaviour** | `object-cover` inside `aspect-[4/3]` — a framed photo, **not** a cut-out |

### Why this one is urgent

The page is live and complete, but the hero currently falls back to
`home-tuition.png` — **the same photograph the First Class section uses
further down.** So a visitor sees one picture twice on one page. It looks
deliberate rather than broken, and nothing is misleading, but it is the
weakest thing about the page and one file drop fixes it.

### The one rule that decides this shot

**It must not repeat the First Class photo.** That one is a close, warm,
two-person shot at a dining table, shot from the front. This one is the
*establishing* shot: wider, more of the room, taken slightly from the side.
Same family, same house, different moment — the way a photographer would
cover a scene rather than take the same frame twice.

The hero is also the only image on the page that has to work behind a
floating white chip in its lower-left corner ("The tutor travels, not your
child"), so keep that area simple.

### Composition constraints

1. **Wider than the First Class shot.** You can see the room: a window, a
   wall, part of a bookshelf or a cupboard. The room is the product on this
   page — that is why the photo is framed rather than cut out.
2. **A tutor and one school student at a table.** The tutor is an adult in
   their late twenties or thirties, seated beside — not opposite — the child.
   Beside means *helping*; opposite means *examining*.
3. **The child is doing the work.** Pen in the child's hand, open notebook and
   a textbook on the table. The tutor is watching and explaining, not writing.
   This is the whole "one-to-one at your own table" promise in one frame.
4. **No laptop, no tablet, no screen of any kind.** This is the page that is
   explicitly *not* online. A device in this photo contradicts the headline.
5. **Shot from the side, three-quarter.** Neither face is square to the camera
   and nobody is looking at the lens.
6. **Lower-left third kept simple** — floor, table edge or plain wall. A white
   chip with text sits there.
7. **No readable text anywhere.** No writing on the notebook, no lettering on
   book spines, no wall calendar.
8. **Warm daytime or early-evening light** through a window. An ordinary
   Indian middle-class home, lived in, not styled.
9. **Natural Indian features and everyday clothing.** The tutor is dressed as
   someone who travelled to work — a plain shirt or kurta, a bag or folder
   visible on a chair is a nice touch. Not formal, not festive.

### The prompt

> A candid documentary-style photograph inside an ordinary middle-class Indian
> home. A young Indian tutor in their early thirties sits beside a school
> student of about eleven at a wooden dining table, teaching one to one. The
> child holds a pen and is writing in an open school notebook; a textbook lies
> open beside it. The tutor leans in slightly, watching the child's work and
> explaining something with one hand, not writing. There is no laptop, tablet
> or screen anywhere in the frame. Shot from the side at a three-quarter
> angle; neither person looks at the camera. Warm late-afternoon light from a
> window on the left. The room is visible around them — a painted wall, a
> bookshelf, a plant, a cloth bag on a chair. Wide, horizontal 4:3 composition
> with the two figures grouped to the right of centre and simple, uncluttered
> space in the lower-left third. Shot on a 35mm lens at f/2.5, natural colour,
> realistic photograph. No text, no lettering, no logos, no screens.

**Negative prompt:** *laptop, tablet, computer, phone, screen, monitor,
classroom, whiteboard, blackboard, cartoon, illustration, 3d render, cgi,
looking at camera, thumbs up, posed smile, stock photo, text, watermark,
logo, studio lighting, white background, luxury interior*

### What to check before sending it

- **Both pairs of hands**, and the pen. Hands holding objects are where image
  models fail most often.
- **No screen anywhere**, including reflections and background shelves.
- **Is it clearly a different moment from the First Class photo?** If it reads
  as the same frame recropped, regenerate wider.
- **Is the lower-left third quiet?** A busy corner there fights the chip.
- Send it at full size — **do not compress it yourself.** I convert to
  `home-hero.webp` (1200 × 900) plus a 700px small version, the same pipeline
  as the last two.

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
