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

/** Boards, with the plain-language line a parent needs to recognise theirs. */
export const BOARDS: { title: string; sub: string }[] = [
  { title: 'CBSE', sub: 'Class 1 – 12' },
  { title: 'ICSE', sub: 'Class 1 – 12' },
  { title: 'SSC', sub: 'Maharashtra Board' },
  { title: 'JEE & NEET', sub: 'Entrance Prep' },
];

/* The canonical filter values live with the tutor data, because that is what
   /find-a-tutor matches against. Re-exported so a page needs one import. */
export { CLASS_BAND_OPTIONS, BOARD_OPTIONS } from './tutorsDemo';

/* Build-time guard: the card labels above and the filter values must be the
   same strings, or a card links somewhere that returns nothing. */
import { CLASS_BAND_OPTIONS as _OPTS } from './tutorsDemo';
const _mismatch = CLASS_BANDS.map((c) => c.name).filter((n) => !_OPTS.includes(n));
if (_mismatch.length) {
  throw new Error(
    `CLASS_BANDS labels not in CLASS_BAND_OPTIONS: ${_mismatch.join(', ')}`
  );
}
