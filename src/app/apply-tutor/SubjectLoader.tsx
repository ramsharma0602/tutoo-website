import { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';

import { getSubjects } from './services/tutorApplicationService';
import type { Subject } from './TutorApplicationForm';

/* ─────────────────────────────────────────────────────────────────────────
   SUBJECT LOADER — now for MANY boards and MANY classes

   The API is GET api/get-subject?category_id=&board_id= : one board, one
   class, one request. Boards and classes are multi-select now, so the list a
   tutor sees is the UNION of the subjects available across every board x
   class pair they ticked.

   ── WHY THE UNION AND NOT THE INTERSECTION ──────────────────────────────
   A tutor ticking CBSE + SSC and Class 8 + Class 10 is telling us the set
   they can cover, not that every subject must exist in all four pairings.
   Intersecting would silently hide a subject that exists for CBSE Class 10
   but not SSC Class 8, and the tutor would have no way to understand why.

   ── STALE RESPONSES ─────────────────────────────────────────────────────
   Several requests are in flight at once and they do not come back in order.
   Each run takes a ticket; when the responses land, a run that is no longer
   the newest throws its results away. Without that, un-ticking a board can
   leave you looking at the subject list from before you un-ticked it.

   ── SELECTIONS ARE PRUNED, NOT CLEARED ──────────────────────────────────
   The old version did setFieldValue('subjectId','') on every board/class
   change, so touching a board wiped the subject. Here, subjects that are
   still available stay ticked and only the ones that genuinely disappeared
   are dropped — losing five ticks because you added a sixth board is the
   kind of thing that makes someone abandon the form.
───────────────────────────────────────────────────────────────────────── */

interface FormValues {
  boardIds: number[];
  classIds: number[];
  subjectIds: number[];
}

interface SubjectLoaderProps {
  setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
  setLoadingSubjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubjectLoader({ setSubjects, setLoadingSubjects }: SubjectLoaderProps) {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const runId = useRef(0);

  /* Join the ids rather than depending on the arrays themselves: Formik hands
     back a new array identity on every keystroke elsewhere in the form, which
     would otherwise refire this effect — and the fetches — constantly. */
  const boardKey = values.boardIds.join(',');
  const classKey = values.classIds.join(',');

  useEffect(() => {
    const boardIds = boardKey ? boardKey.split(',').map(Number) : [];
    const classIds = classKey ? classKey.split(',').map(Number) : [];

    const ticket = ++runId.current;

    if (!boardIds.length || !classIds.length) {
      setSubjects([]);
      setLoadingSubjects(false);
      /* Nothing can be chosen, so nothing may stay chosen. */
      setFieldValue('subjectIds', []);
      return;
    }

    const load = async () => {
      setLoadingSubjects(true);
      try {
        const pairs = boardIds.flatMap((b) => classIds.map((c) => ({ b, c })));

        const results = await Promise.all(
          pairs.map(({ b, c }) =>
            getSubjects(c, b).catch((error) => {
              /* One failing pair must not blank the whole list — the other
                 pairs are still perfectly usable. */
              console.error(`Failed to fetch subjects for board ${b}, class ${c}:`, error);
              return [] as any[];
            })
          )
        );

        if (ticket !== runId.current) return;

        const byId = new Map<number, Subject>();
        for (const list of results) {
          for (const item of list) {
            const id = item?.subject?.id;
            const name = item?.subject?.name;
            if (typeof id === 'number' && name) byId.set(id, { id, name });
          }
        }

        const merged = [...byId.values()].sort((a, b) => a.name.localeCompare(b.name));
        setSubjects(merged);

        /* Keep whatever is still offered; drop only what vanished. */
        const stillAvailable = values.subjectIds.filter((id) => byId.has(id));
        if (stillAvailable.length !== values.subjectIds.length) {
          setFieldValue('subjectIds', stillAvailable);
        }
      } finally {
        if (ticket === runId.current) setLoadingSubjects(false);
      }
    };

    load();
    // values.subjectIds is read but deliberately not a dependency: including
    // it would refire the fetch every time a subject is ticked.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardKey, classKey, setFieldValue, setSubjects, setLoadingSubjects]);

  return null;
}
