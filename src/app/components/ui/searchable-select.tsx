import {
    useCallback,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type ReactNode,
} from 'react';

import { Check, ChevronDown, Loader2, Search, SearchX } from 'lucide-react';

import { cn } from './utils';

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface SearchableSelectOption {
    label: string;
    value: string;
}

export interface SearchableSelectProps {
    /** Options as { label, value } pairs */
    options: SearchableSelectOption[];
    /** Currently selected value ('' = nothing selected) */
    value: string;
    /** Called with the new value + full option when the user selects one */
    onChange: (value: string, option: SearchableSelectOption) => void;
    /** Called when the dropdown closes (useful for Formik `setFieldTouched`) */
    onBlur?: () => void;
    /** Placeholder shown in the trigger when nothing is selected */
    placeholder?: string;
    /** Placeholder for the search input */
    searchPlaceholder?: string;
    /** Disable the whole control */
    disabled?: boolean;
    /** Show a loading state (spinner + text) */
    loading?: boolean;
    /** Render error styling (red border/ring) */
    error?: boolean;
    /** Optional icon rendered on the left side of the trigger */
    icon?: ReactNode;
    /** id applied to the trigger button (for <label htmlFor>) */
    id?: string;
    /** Extra classes for the trigger (e.g. 'h-16' to override height) */
    className?: string;
    /** Message when the search yields nothing */
    noResultsText?: string;
    /** Message while options are loading */
    loadingText?: string;
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function SearchableSelect({
    options,
    value,
    onChange,
    onBlur,
    placeholder = 'Select an option',
    searchPlaceholder = 'Type to search...',
    disabled = false,
    loading = false,
    error = false,
    icon,
    id,
    className,
    noResultsText = 'No results found',
    loadingText = 'Loading...',
}: SearchableSelectProps) {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [highlighted, setHighlighted] = useState(0);

    const rootRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const listboxId = useId();

    const selected = useMemo(
        () => options.find((o) => o.value === value),
        [options, value]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return options;
        return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, query]);

    /* ------------------------------ OPEN / CLOSE ------------------------------ */

    const close = useCallback(() => {
        setOpen(false);
        setQuery('');
        onBlur?.();
    }, [onBlur]);

    const toggle = () => {
        if (disabled) return;
        if (open) {
            close();
        } else {
            setOpen(true);
            // Highlight the currently selected option when reopening
            const idx = options.findIndex((o) => o.value === value);
            setHighlighted(idx >= 0 ? idx : 0);
        }
    };

    // Close when clicking outside
    useEffect(() => {
        if (!open) return;

        const handler = (e: MouseEvent | TouchEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [open, close]);

    // Autofocus the search input when opening
    useEffect(() => {
        if (open) searchRef.current?.focus();
    }, [open]);

    // Reset highlight when the filter changes
    useEffect(() => {
        setHighlighted(0);
    }, [query]);

    // Keep the highlighted option scrolled into view
    useEffect(() => {
        if (!open) return;
        const el = listRef.current?.querySelector<HTMLElement>(
            `[data-index="${highlighted}"]`
        );
        el?.scrollIntoView({ block: 'nearest' });
    }, [highlighted, open]);

    /* -------------------------------- SELECT ---------------------------------- */

    const select = (option: SearchableSelectOption) => {
        onChange(option.value, option);
        close();
    };

    /* ------------------------------- KEYBOARD ---------------------------------- */

    const onTriggerKeyDown = (e: KeyboardEvent) => {
        if (disabled) return;
        if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key) && !open) {
            e.preventDefault();
            toggle();
        } else if (e.key === 'Escape' && open) {
            e.preventDefault();
            close();
        }
    };

    const onSearchKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
                break;

            case 'ArrowUp':
                e.preventDefault();
                setHighlighted((h) => Math.max(h - 1, 0));
                break;

            case 'Enter':
                e.preventDefault();
                if (filtered[highlighted]) select(filtered[highlighted]);
                break;

            case 'Escape':
                e.preventDefault();
                close();
                break;

            case 'Tab':
                close();
                break;
        }
    };

    /* -------------------------------- RENDER ----------------------------------- */

    return (

        <div ref={rootRef} className="relative w-full">

            {/* Trigger */}
            <button
                type="button"
                id={id}
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-controls={listboxId}
                disabled={disabled}
                onClick={toggle}
                onKeyDown={onTriggerKeyDown}
                className={cn(
                    `
                    relative
                    flex
                    h-14
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    bg-white/90
                    backdrop-blur-xl
                    px-5
                    text-left
                    text-sm
                    font-medium
                    shadow-sm
                    outline-none
                    transition-all
                    duration-300
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                    disabled:text-slate-400
                    `,
                    error
                        ? 'border-red-400 bg-red-50/40 focus:ring-4 focus:ring-red-100'
                        : 'border-[#E2E8F0] hover:border-[#2563EB]/30 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10',
                    className
                )}
            >

                {icon && (
                    <span className="shrink-0 text-[#64748B]">
                        {icon}
                    </span>
                )}

                <span
                    className={cn(
                        'flex-1 truncate',
                        selected ? 'text-[#0F172A]' : 'text-[#94A3B8]'
                    )}
                >
                    {loading ? loadingText : selected?.label || placeholder}
                </span>

                {loading ? (
                    <Loader2 className="h-5 w-5 shrink-0 animate-spin text-[#64748B]" />
                ) : (
                    <ChevronDown
                        className={cn(
                            'h-5 w-5 shrink-0 text-[#64748B] transition-transform duration-300',
                            open && 'rotate-180'
                        )}
                    />
                )}
            </button>

            {/* Panel */}
            {open && (

                <div
                    className="
                    absolute
                    z-50
                    mt-2
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E2E8F0]
                    bg-white
                    shadow-[0_20px_60px_rgba(15,23,42,0.15)]
                    animate-in
                    fade-in-0
                    zoom-in-95
                    slide-in-from-top-2
                    duration-200
                    "
                >

                    {/* Search */}
                    <div className="relative border-b border-[#F1F5F9] p-2">

                        <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />

                        <input
                            ref={searchRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={onSearchKeyDown}
                            placeholder={searchPlaceholder}
                            role="searchbox"
                            aria-autocomplete="list"
                            aria-controls={listboxId}
                            aria-activedescendant={
                                filtered[highlighted]
                                    ? `${listboxId}-option-${highlighted}`
                                    : undefined
                            }
                            className="
                            h-10
                            w-full
                            rounded-xl
                            bg-[#F8FAFC]
                            pl-10
                            pr-4
                            text-sm
                            text-[#0F172A]
                            placeholder:text-[#94A3B8]
                            outline-none
                            transition-all
                            focus:bg-white
                            focus:ring-2
                            focus:ring-[#2563EB]/20
                            "
                        />
                    </div>

                    {/* Options */}
                    <ul
                        ref={listRef}
                        id={listboxId}
                        role="listbox"
                        aria-label={placeholder}
                        className="max-h-60 overflow-y-auto overscroll-contain p-2"
                    >

                        {filtered.length === 0 && (

                            <li className="flex flex-col items-center gap-2 px-4 py-8 text-center">

                                <SearchX className="h-6 w-6 text-[#CBD5E1]" />

                                <span className="text-sm font-medium text-[#94A3B8]">
                                    {noResultsText}
                                </span>
                            </li>
                        )}

                        {filtered.map((option, index) => {

                            const isSelected = option.value === value;
                            const isHighlighted = index === highlighted;

                            return (

                                <li
                                    key={option.value}
                                    id={`${listboxId}-option-${index}`}
                                    data-index={index}
                                    role="option"
                                    aria-selected={isSelected}
                                    onMouseEnter={() => setHighlighted(index)}
                                    onClick={() => select(option)}
                                    className={cn(
                                        `
                                        flex
                                        cursor-pointer
                                        items-center
                                        justify-between
                                        gap-3
                                        rounded-xl
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        transition-colors
                                        duration-150
                                        `,
                                        isSelected
                                            ? 'bg-gradient-to-r from-[#16C47F]/10 to-[#2563EB]/10 text-[#2563EB]'
                                            : isHighlighted
                                                ? 'bg-[#F1F5F9] text-[#0F172A]'
                                                : 'text-[#334155]'
                                    )}
                                >

                                    <span className="truncate">
                                        {option.label}
                                    </span>

                                    {isSelected && (
                                        <Check className="h-4 w-4 shrink-0 text-[#16C47F]" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
