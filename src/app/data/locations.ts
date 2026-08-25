/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SERVICE CITIES — where a tutor can physically come to your home
 * ─────────────────────────────────────────────────────────────────────────
 *  These values already existed in three places, in three vocabularies:
 *
 *    KothrudPage.tsx / KolhapurPage.tsx   'Kothrud, Pune'   (display)
 *    CityAvailabilitySection.tsx          'Kothrud, Pune'   (display)
 *    tutorsDemo.ts CITY_OPTIONS           'Pune'            (the filter value)
 *    BookAssessmentForm city select       'Kothrud (Pune)'  (form value)
 *
 *  Three names for one concept is how a deep link ends up returning nothing.
 *  This file is now the single source: `id` is the ONLY string that reaches a
 *  filter, everything else is a label.
 *
 *  ── RULE ────────────────────────────────────────────────────────────────
 *  Nothing here is invented. Every area string below is copied verbatim from
 *  the city pages that already shipped. Do not add a city until a tutor in
 *  the registry actually carries that `city` value — the guard at the foot of
 *  this file fails the build if you try.
 *
 *  `areas` is DISPLAY ONLY. /find-a-tutor has no area filter — it matches on
 *  `city` exactly (find-a-tutor/page.tsx) and only free-text `q` touches
 *  `t.area`. Rendering areas as links would be a promise the first tap
 *  breaks, so they render as plain chips.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { CITY_OPTIONS } from './tutorsDemo';

export interface ServiceCity {
  /** The filter value. MUST be a member of CITY_OPTIONS. */
  id: string;
  /** Full display name — headings, cards, schema. */
  label: string;
  /** Compact display name — chips, form options, tight columns. */
  short: string;
  /** One line a parent can recognise their own situation in. */
  blurb: string;
  /** Neighbourhoods, display only. Verbatim from the city pages. */
  areas: string[];
  /** The honest caveat that goes under the chips. */
  areasNote: string;
  /** The dedicated city landing page. */
  pageHref: string;
  accent: string;
  tint: string;
}

export const SERVICE_CITIES: ServiceCity[] = [
  {
    id: 'Pune',
    label: 'Kothrud, Pune',
    short: 'Kothrud (Pune)',
    blurb: 'Kothrud is our home base, so tutor availability here is strongest.',
    areas: ['Kothrud', 'Karve Nagar', 'Erandwane', 'Warje', 'Bavdhan', 'Ideal Colony'],
    areasNote: 'Nearby Pune West areas are usually covered too — tell us your exact area and we will confirm.',
    pageHref: '/home-tuition/kothrud',
    accent: '#EA580C',
    tint: '#FFF1E7',
  },
  {
    id: 'Kolhapur',
    label: 'Kolhapur',
    short: 'Kolhapur',
    blurb: 'Tutors across Kolhapur city, in Marathi and English medium.',
    areas: ['Rajarampuri', 'Shahupuri', 'Tarabai Park', 'Kasaba Bawada', 'Ruikar Colony'],
    areasNote: 'Most areas of Kolhapur city are covered — tell us your exact area and we will confirm.',
    pageHref: '/home-tuition/kolhapur',
    accent: '#7B2FF7',
    tint: '#F4EFFE',
  },
];

/** Look a city up by its filter id. */
export function getCity(id: string): ServiceCity | undefined {
  return SERVICE_CITIES.find((c) => c.id === id);
}

/* Build-time guard — same pattern as data/subjects.ts. A city whose id is not
   a real filter value produces a card that links to an empty result page. */
const _bad = SERVICE_CITIES.map((c) => c.id).filter((id) => !CITY_OPTIONS.includes(id));
if (_bad.length) {
  throw new Error(`SERVICE_CITIES ids not in CITY_OPTIONS: ${_bad.join(', ')}`);
}
