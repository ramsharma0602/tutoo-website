/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SUBJECTS, BOARDS AND CLASS BANDS — one list, used everywhere
 * ─────────────────────────────────────────────────────────────────────────
 *  This list was previously hardcoded inside SubjectsPrograms.tsx. It now
 *  lives here because /online-tuition needs the same set, and two copies of
 *  the same list drift apart the first time somebody adds a subject.
 *
 *  RULE: only list what Tutoo can actually staff. A parent who clicks
 *  "Sanskrit" and gets an empty result has been wasted, and told something
 *  untrue in the process. IB and IGCSE are deliberately absent.
 *
 *  Class bands and boards are NOT redefined here — they already live in
 *  data/tutorsDemo.ts as CLASS_BAND_OPTIONS and BOARD_OPTIONS, and are what
 *  the /find-a-tutor filters actually match against. Re-export only.
 * ─────────────────────────────────────────────────────────────────────────
 */
import {
  Shapes,
  Backpack,
  NotebookPen,
  GraduationCap,
  Target,
  Calculator,
  Atom,
  BookOpen,
  FlaskConical,
  Microscope,
  Landmark,
  MessageSquare,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export interface SubjectEntry {
  icon: LucideIcon;
  name: string;
}

export const SUBJECTS: SubjectEntry[] = [
  { icon: Calculator, name: 'Mathematics' },
  { icon: Atom, name: 'Science' },
  { icon: BookOpen, name: 'English' },
  { icon: FlaskConical, name: 'Physics' },
  { icon: Microscope, name: 'Chemistry' },
  { icon: Landmark, name: 'Biology' },
  { icon: MessageSquare, name: 'Hindi & Marathi' },
  { icon: Trophy, name: 'Olympiads' },
];

/**
 * Class bands, with an icon each so they can render as cards rather than as
 * bare chips.
 *
 * ⚠️  `name` must match CLASS_BAND_OPTIONS below EXACTLY — those are the values
 * /find-a-tutor filters against. A typo here produces a card that links to an
 * empty result. The assertion under the array fails the build if they drift.
 */
export const CLASS_BANDS: SubjectEntry[] = [
  { icon: Shapes, name: 'Class 1–5' },
  { icon: Backpack, name: 'Class 6–8' },
  { icon: NotebookPen, name: 'Class 9–10' },
  { icon: GraduationCap, name: 'Class 11–12' },
  { icon: Target, name: 'JEE / NEET' },
];

/**
 * Boards, with the plain-language line a parent needs to recognise theirs.
 *
 * ⚠️  `filter` is which /find-a-tutor parameter the card should set. It exists
 * because of a real bug: "JEE & NEET" was linking to `?board=JEE %26 NEET`, and
 * BOARD_OPTIONS is ['CBSE','ICSE','SSC','HSC'] — no tutor has ever carried
 * "JEE & NEET" in `boards`, so that card could NEVER return a result, on this
 * page or on /online-tuition. JEE/NEET is a class band in this data model, not
 * a board, so the card now sets `class=JEE / NEET` instead. The guard below
 * fails the build if any card points at a value the filters cannot match.
 */
export interface BoardEntry {
  title: string;
  sub: string;
  filter: { key: 'board' | 'class'; value: string };
}

export const BOARDS: BoardEntry[] = [
  { title: 'CBSE', sub: 'Class 1 – 12', filter: { key: 'board', value: 'CBSE' } },
  { title: 'ICSE', sub: 'Class 1 – 12', filter: { key: 'board', value: 'ICSE' } },
  { title: 'SSC', sub: 'Maharashtra Board', filter: { key: 'board', value: 'SSC' } },
  { title: 'JEE & NEET', sub: 'Entrance Prep', filter: { key: 'class', value: 'JEE / NEET' } },
];

/* The canonical filter values live with the tutor data, because that is what
   /find-a-tutor matches against. Re-exported so a page needs one import. */
export { CLASS_BAND_OPTIONS, BOARD_OPTIONS } from './tutorsDemo';

/* Build-time guards: every card label above must be a value the /find-a-tutor
   filters actually match, or the card links somewhere that returns nothing. */
import { CLASS_BAND_OPTIONS as _OPTS, BOARD_OPTIONS as _BOARDS } from './tutorsDemo';

const _mismatch = CLASS_BANDS.map((c) => c.name).filter((n) => !_OPTS.includes(n));
if (_mismatch.length) {
  throw new Error(
    `CLASS_BANDS labels not in CLASS_BAND_OPTIONS: ${_mismatch.join(', ')}`
  );
}

const _badBoards = BOARDS.filter((b) =>
  b.filter.key === 'board' ? !_BOARDS.includes(b.filter.value) : !_OPTS.includes(b.filter.value)
).map((b) => `${b.title} → ${b.filter.key}=${b.filter.value}`);
if (_badBoards.length) {
  throw new Error(
    `BOARDS cards point at values no filter can match: ${_badBoards.join(', ')}`
  );
}
