import { useMemo, useState } from 'react';
import { Check, Search, X } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   CHECKBOX MULTI-SELECT

   Boards, classes and subjects were three single-choice dropdowns, so a tutor
   who teaches Maths and Science, to Class 8 and Class 10, across CBSE and SSC
   could tell us about exactly one of each. They are checkbox groups now: a box
   in front of every name, and the tutor ticks the set they can cover.

   ── WHY A REAL <input type="checkbox">, NOT A STYLED DIV ────────────────
   A div with role="checkbox" has to reimplement focus, space-to-toggle, the
   label association and the group semantics, and usually gets at least one
   of them wrong. A real input inside a real <label> gets all of it free:
   clicking the text toggles the box, space works, the accessible name is the
   subject name, and the browser announces "checked"/"not checked" without
   help. The box is visually restyled with peer-* classes; the input itself
   is only visually hidden (sr-only), never display:none, which would take it
   out of the tab order.

   ── WHY A FILTER BOX ONLY PAST A THRESHOLD ──────────────────────────────
   Four boards need no search field; forty subjects do. A search box over a
   handful of options is clutter that pushes the options themselves below the
   fold, so it appears only when the list is long enough to be hard to scan.

   ── SELECTION SURVIVES FILTERING ────────────────────────────────────────
   The filter narrows what is DISPLAYED, never what is selected. Typing in
   the box after ticking three subjects must not silently drop the two that
   no longer match — that is the bug this component exists to not have, and
   it is why the chosen count and the clear-all sit outside the filtered list.
───────────────────────────────────────────────────────────────────────── */

export interface CheckOption {
  id: number;
  name: string;
}

interface Props {
  legend: string;
  options: CheckOption[];
  /** Selected ids. Kept as numbers so payload building needs no casting. */
  value: number[];
  onChange: (next: number[]) => void;
  onBlur?: () => void;
  name: string;
  error?: string;
  touched?: boolean;
  loading?: boolean;
  /** Shown when there are no options to choose from yet. */
  emptyHint?: string;
  /** Show the filter box once the list is at least this long. */
  searchFrom?: number;
  columns?: 2 | 3;
}

export default function CheckboxGroup({
  legend,
  options,
  value,
  onChange,
  onBlur,
  name,
  error,
  touched,
  loading = false,
  emptyHint = 'Nothing to choose from yet.',
  searchFrom = 8,
  columns = 2,
}: Props) {
  const [query, setQuery] = useState('');

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.name.toLowerCase().includes(q));
  }, [options, query]);

  const showSearch = options.length >= searchFrom;
  const invalid = Boolean(touched && error);
  const errorId = `${name}-error`;

  const toggle = (id: number) => {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
    onBlur?.();
  };

  return (
    <fieldset className="border-0 p-0 m-0 min-w-0">
      <legend className="flex flex-wrap items-baseline gap-x-2 text-sm font-semibold text-[#1E1B3A] mb-2 p-0">
        <span>
          {legend} <span aria-hidden="true">*</span>
          <span className="sr-only">(required, choose one or more)</span>
        </span>
        {value.length > 0 && (
          <span className="text-[12.5px] font-bold text-[#6D28D9]">
            {value.length} selected
          </span>
        )}
      </legend>

      <div
        className={`rounded-2xl border bg-white transition-all duration-200 ${
          invalid ? 'border-red-400' : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-4 focus-within:ring-violet-100'
        }`}
      >
        {showSearch && (
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#F1EFF7]">
            <Search className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Filter ${legend.toLowerCase()}…`}
              aria-label={`Filter ${legend.toLowerCase()}`}
              className="w-full min-w-0 bg-transparent outline-none text-[14px] text-[#1E1B3A] placeholder:text-[#94A3B8]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear filter"
                className="shrink-0 rounded-full p-1 hover:bg-[#F4F2FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7]"
              >
                <X className="w-3.5 h-3.5 text-[#6E6A85]" aria-hidden="true" />
              </button>
            )}
          </div>
        )}

        <div className="max-h-64 overflow-y-auto p-2">
          {loading ? (
            <p className="px-2 py-3 text-[14px] text-[#6E6A85]">Loading…</p>
          ) : options.length === 0 ? (
            <p className="px-2 py-3 text-[14px] text-[#6E6A85]">{emptyHint}</p>
          ) : shown.length === 0 ? (
            <p className="px-2 py-3 text-[14px] text-[#6E6A85]">
              Nothing matches “{query}”. Your {value.length} selection
              {value.length === 1 ? '' : 's'} {value.length === 1 ? 'is' : 'are'} still saved.
            </p>
          ) : (
            <ul className={`grid gap-0.5 ${columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {shown.map((o) => {
                const checked = value.includes(o.id);
                return (
                  <li key={o.id} className="min-w-0">
                    <label
                      className={`group flex items-center gap-2.5 rounded-xl px-2.5 py-2 cursor-pointer transition-colors ${
                        checked ? 'bg-[#F4EFFE]' : 'hover:bg-[#FAFAFC]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        name={name}
                        value={o.id}
                        checked={checked}
                        onChange={() => toggle(o.id)}
                        aria-invalid={invalid || undefined}
                        aria-describedby={invalid ? errorId : undefined}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`w-[18px] h-[18px] rounded-[6px] border-2 shrink-0 flex items-center justify-center transition-all
                          peer-focus-visible:ring-2 peer-focus-visible:ring-[#7B2FF7] peer-focus-visible:ring-offset-2
                          ${checked ? 'bg-[#7B2FF7] border-[#7B2FF7]' : 'bg-white border-[#CBD5E1] group-hover:border-[#7B2FF7]'}`}
                      >
                        {checked && <Check className="w-3 h-3 text-white" strokeWidth={3.5} />}
                      </span>
                      <span
                        className={`text-[14.5px] leading-snug min-w-0 ${
                          checked ? 'font-semibold text-[#1E1B3A]' : 'text-[#4B4763]'
                        }`}
                      >
                        {o.name}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {value.length > 0 && (
          <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-[#F1EFF7]">
            <span className="text-[12.5px] text-[#6E6A85]">
              {value.length} of {options.length} selected
            </span>
            <button
              type="button"
              onClick={() => {
                onChange([]);
                onBlur?.();
              }}
              className="text-[12.5px] font-bold text-[#6D28D9] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FF7] rounded"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {invalid && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-600 font-medium">
          {error}
        </p>
      )}
    </fieldset>
  );
}
