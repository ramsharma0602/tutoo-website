# Homepage photography — sources and licence

Every image on the homepage is a **photograph**. There are no illustrations
or cartoon graphics anywhere on the page.

All files below are published under the
[Pexels License](https://www.pexels.com/license/) — free for commercial use,
no attribution required and no permission needed. Credit is appreciated but
not mandatory, which is why there is no visible credit line on the page.

> **Do not hot-link `images.pexels.com` from the live site.** The download
> step below copies the files into `public/tutoo_assets/photos/` so they are
> served from tutoolearning.com. A page-critical image sitting on someone
> else's CDN is an outage waiting to happen, and Pexels' guidelines
> discourage it.

---

## Get the photos

From anywhere in the project:

**Windows / PowerShell**

```powershell
powershell -ExecutionPolicy Bypass -File scripts\download-photos.ps1
```

**macOS / Linux / Git Bash**

```bash
bash scripts/download-photos.sh
```

Six files land in `public/tutoo_assets/photos/`. Re-running overwrites, so
that is also how you refresh them.

---

## Section artwork

Landscape, downloaded at 1400px wide, cropped by CSS to a 4:3 panel.

| File | Used by | Photo page | Photographer |
|---|---|---|---|
| `home-tuition.jpg` | `LearningSolutions.tsx` — "Home Tuition" row | [An adult tutoring a child at home](https://www.pexels.com/photo/a-teacher-teaching-a-boy-7079148/) | Kampus Production |
| `online-class.jpg` | `LearningSolutions.tsx` — "Online Classes" row | [Child attends an online class via video call](https://www.pexels.com/photo/a-girl-sitting-at-the-table-8055487/) | Annushka Ahuja |

## Teacher card portraits

Downloaded at 800×1000, cropped by CSS to a 4:5 card with the focal point at
22% from the top so faces stay in frame.

| File | Photo page | Photographer |
|---|---|---|
| `teacher-1.jpg` | Priya Deshmukh — M.Sc. Mathematics | **female** | [Educator at a maths blackboard](https://www.pexels.com/photo/woman-in-brown-suit-jacket-standing-5212321/) |
| `teacher-2.jpg` | Rahul Kulkarni — B.E. Mechanical | **male** | [Educator at a chalkboard](https://www.pexels.com/photo/a-man-in-a-classroom-36781271/) |
| `teacher-3.jpg` | Sneha Joshi — M.A. English | **female** | [Teacher at a whiteboard](https://www.pexels.com/photo/smiling-woman-in-button-up-shirt-8423062/) |
| `teacher-4.jpg` | Amit Patil — M.Sc. Chemistry | **male** | [Portrait of a man in eyeglasses](https://www.pexels.com/photo/man-in-eyeglasses-19186834/) |

**These are photographs of models, not of your tutors.** They are attached to
the sample tutor entries in `data/tutorsDemo.ts`, which is why
`USE_DEMO_TUTORS` must be `false` before real parents see the site.

When a real tutor sends a real photo and consents to it being published, put
it in `public/tutors/` and set `photo` on their entry in `data/tutors.ts`.
The card prefers a real tutor's own photo over any of these automatically.

---

## Alternates, if you want to swap one out

Download over the existing filename — no code change needed.

| Subject | Photo page | Photographer |
|---|---|---|
| Tutor and child at home, notebook | [A woman looking at the kid writing](https://www.pexels.com/photo/a-woman-looking-at-the-kid-writing-6986430/) | Kampus Production |
| Girl on a video call with her tutor | [Ethnic girl having video chat with teacher](https://www.pexels.com/photo/ethnic-girl-having-video-chat-with-teacher-online-on-laptop-5905709/) | Katerina Holmes |
| Two Indian children in school uniform | [Two girls in school uniforms at a desk](https://www.pexels.com/photo/two-girls-in-school-uniforms-sitting-at-a-desk-18012459/) | — |
| One-to-one teacher and student | [Teacher with a student in a classroom](https://www.pexels.com/photo/teacher-with-a-student-in-a-classroom-18870246/) | — |
| Indian boy writing in a notebook | [Smiling boy sitting with notebook](https://www.pexels.com/photo/smiling-boy-sitting-with-notebook-20556417/) | — |
| Teacher in a saree reading | [Woman in saree and glasses reading a book](https://www.pexels.com/photo/brunette-woman-in-blue-and-purple-ornamented-saree-reading-a-book-17612005/) | — |
| Male teacher at a whiteboard | [Teacher teaching mathematics in a classroom](https://www.pexels.com/photo/teacher-teaching-mathematics-in-a-classroom-18870255/) | — |

Browse for more: [Pexels — tutoring](https://www.pexels.com/search/tutoring/) ·
[Pexels — indian teacher](https://www.pexels.com/search/indian%20teacher/) ·
[Unsplash — @freestocks](https://unsplash.com/@freestocks) ·
[Freestock](https://www.freestock.com/)

To use an **Unsplash** photo instead, the direct URL pattern is
`https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1400&q=80`,
where `<id>` is the trailing part of the photo page URL. Add it to the
download script the same way as the Pexels entries.

---

## What happens before you download

Nothing breaks. `AssetImage` (`src/app/components/common/AssetImage.tsx`)
requests the photo and, on a 404, renders the fallback the call site gave it:

- section panels → a soft brand-tinted gradient
- teacher cards → the teacher's initials on a tinted tile

Both look deliberate. A parent never sees a broken-image icon.
