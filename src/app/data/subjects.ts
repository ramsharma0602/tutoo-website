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
