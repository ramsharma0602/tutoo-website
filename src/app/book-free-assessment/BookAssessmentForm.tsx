
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Formik } from 'formik';

import {
    User,
    Phone,
    Mail,
    School,
    GraduationCap,
    BookOpen,
    ArrowRight,
    CheckCircle2,
    Home,
    Monitor,
    MapPin,
    Clock,
    Wallet,
} from 'lucide-react';

import { whatsappLink } from '../components/common/FloatingWhatsApp';
import { track } from '../../seo/analytics';

import { assessmentValidation } from './validation/assessmentValidation';

import { submitAssessment, getBoards, getClasses } from './services/assessmentApi';
import { Button } from '../components/ui/button';
import SearchableSelect from '../components/ui/searchable-select';
import SubjectFetcher from './SubjectFetcher';
import { SERVICE_CITIES } from '../data/locations';
import type { AssessmentSubject } from './SubjectFetcher';

/* Budget ranges are a private matching hint only. They are deliberately broad
   and are never rendered anywhere a visitor or tutor can see them — the site
   advertises no fees. */
/* One vocabulary for two systems. `id` is what /find-a-tutor filters on;
   `short` is what this form stores and shows the parent. */
const CITY_SELECT_OPTIONS = [
    ...SERVICE_CITIES.map((c) => ({ label: c.short, value: c.short })),
    { label: 'Other', value: 'Other' },
];

const CITY_LABELS: Record<string, string> = SERVICE_CITIES.reduce(
    (acc, c) => ({ ...acc, [c.id]: c.short, [c.short]: c.short, [c.label]: c.short }),
    { Other: 'Other' } as Record<string, string>
);

const BUDGET_OPTIONS = [
    { value: '', label: 'Prefer not to say' },
    { value: 'under-2000', label: 'Under ₹2,000 / month' },
    { value: '2000-4000', label: '₹2,000 – ₹4,000 / month' },
    { value: '4000-6000', label: '₹4,000 – ₹6,000 / month' },
    { value: '6000-10000', label: '₹6,000 – ₹10,000 / month' },
    { value: 'above-10000', label: 'Above ₹10,000 / month' },
    { value: 'not-sure', label: 'Not sure yet' },
];

interface BookAssessmentFormProps {

    setModalOpen: (
        value: boolean
    ) => void;

    setModalType: (
        value: 'success' | 'error'
    ) => void;

    setModalTitle: (
        value: string
    ) => void;

    setModalMessage: (
        value: string
    ) => void;
}

interface Board {
    id: number;
    name: string;
}

interface ClassOption {
    id: number;
    name: string;
}

export default function BookAssessmentForm({

    setModalOpen,
    setModalType,
    setModalTitle,
    setModalMessage,

}: BookAssessmentFormProps) {

    const formikRef = useRef<any>(null);

    /* Prefill from the hero mini-form (?class=&mode=&area=) — UX plan §7:
       the parent never re-enters what they already told us. */
    const [searchParams] = useSearchParams();
    const preModeParam = searchParams.get('mode');
    const preMode =
        preModeParam === 'online' ? 'online' : preModeParam === 'home' ? 'home' : '';
    const preArea = searchParams.get('area') ?? '';
    /* ?city= arrives as the FILTER value ('Pune' | 'Kolhapur') because that is
       what /find-a-tutor matches on, while this select stores its own display
       label ('Kothrud (Pune)'). Mapping through data/locations.ts is what makes
       a visitor from /home-tuition/kothrud arrive with the city already chosen.
       Before this, `area` was prefilled and `city` was left empty AND required —
       the worst of both. CITY_LABELS is keyed by id, short label and long label
       so an already-correct value passes through untouched. */
    const preCityParam = searchParams.get('city') ?? '';
    const preCity =
        CITY_LABELS[preCityParam] ?? (preCityParam ? 'Other' : '');
    const preClass = searchParams.get('class') ?? '';
    /* From the header's Subjects menu (?subject=Mathematics). Subjects are
       only fetched once a board + class are chosen, so we hold the requested
       subject and auto-select its chip as soon as it appears. */
    const preSubject = searchParams.get('subject') ?? '';

    const [loading, setLoading] =
        useState(false);

    const [boards, setBoards] = useState<Board[]>([]);
    const [classes, setClasses] = useState<ClassOption[]>([]);
    const [subjects, setSubjects] = useState<AssessmentSubject[]>([]);

    const [loadingBoards, setLoadingBoards] = useState(false);
    const [loadingClasses, setLoadingClasses] = useState(false);
    const [loadingSubjects, setLoadingSubjects] = useState(false);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                setLoadingBoards(true);
                const response = await getBoards();
                setBoards(response);
            } catch (error) {
                console.error('Failed to load boards:', error);
            } finally {
                setLoadingBoards(false);
            }
        };

        fetchBoards();
    }, []);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                setLoadingClasses(true);
                const response = await getClasses();
                setClasses(response);

                // Apply the hero's class prefill once real class names are known
                if (preClass && formikRef.current) {
                    const match = response.find(
                        (c: ClassOption) =>
                            c.name.toLowerCase() === preClass.toLowerCase()
                    );
                    if (match) {
                        formikRef.current.setFieldValue('classId', String(match.id));
                        formikRef.current.setFieldValue('class_name', match.name);
                    }
                }
            } catch (error) {
                console.error('Failed to load classes:', error);
            } finally {
                setLoadingClasses(false);
            }
        };

        fetchClasses();
    }, []);

    /* Auto-select the subject requested from the header menu, once the
       board + class have loaded the real subject list. */
    useEffect(() => {
        if (!preSubject || !subjects.length || !formikRef.current) return;
        const match = subjects.find(
            (s) => s.name.toLowerCase() === preSubject.toLowerCase()
        );
        if (!match) return;
        const current: string[] = formikRef.current.values.subjects ?? [];
        if (current.includes(match.name)) return;
        formikRef.current.setFieldValue('subjects', [...current, match.name]);
        formikRef.current.setFieldValue('subject_ids', [
            ...(formikRef.current.values.subject_ids ?? []),
            match.id,
        ]);
    }, [subjects, preSubject]);

    return (

        <Formik

            innerRef={formikRef}

            initialValues={{
                first_name: '',
                last_name: '',
                parent_name: '',
                mobile: '',
                budget: '',
                requirement_note: '',
                email: '',
                board: '',
                boardId: '',
                class_name: '',
                classId: '',
                school_name: '',
                mode: preMode,
                city: preCity,
                area: preArea,
                preferred_timing: [] as string[],
                subjects: [] as string[],
                subject_ids: [] as number[],
            }}

            validationSchema={
                assessmentValidation
            }

            onSubmit={async (values, { resetForm }) => {
                // PREVENT DOUBLE SUBMIT
                if (loading) return;
                try {

                    setLoading(true);

                    // boardId/classId only exist to drive the dropdowns — the
                    // backend still expects board/class_name as plain name
                    // strings (tracked separately), plus the real FK ids
                    // (board_id, category_id, subject_ids) so it can store
                    // them directly on student_profiles.
                    const { boardId, classId, ...rest } = values;

                    // NOTE (Phase 1): mode, city, area and preferred_timing are
                    // new requirement fields — make sure the backend stores (or
                    // at minimum ignores) them.
                    // NOTE (Phase 3): parent_name, budget and requirement_note
                    // added. `budget` is an internal matching hint only — it must
                    // never be surfaced on a public page or in a tutor-facing view.
                    const payload = {
                        ...rest,
                        preferred_timing: values.preferred_timing.join(', '),
                        board_id: boardId ? Number(boardId) : null,
                        category_id: classId ? Number(classId) : null,
                    };
                    await submitAssessment(payload);

                    track('requirement_submitted', {
                        mode: values.mode,
                        city: values.city || undefined,
                        board: values.board || undefined,
                        class_name: values.class_name || undefined,
                    });

                    setModalType('success');

                    setModalTitle(
                        'We have your details'
                    );

                    setModalMessage(
                        'Thanks for telling us what your child needs. We will call you within 24 hours to arrange the free assessment and suggest a tutor.'
                    );

                    setModalOpen(true);

                    resetForm();

                } catch (error: any) {

                    console.error(error);

                    setModalType('error');

                    setModalTitle(
                        'We could not send your details'
                    );

                    setModalMessage(
                        error?.response?.data?.message ||
                        'Something went wrong at our end. Please try again in a few minutes, or call us on +91 84461 46039.'
                    );

                    setModalOpen(true);

                } finally {

                    setLoading(false);
                }
            }}
        >

            {({

                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,

            }) => (

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5"
                >


                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Student First Name */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Student's first name *</label>

                            <div className="relative">

                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="e.g. Aarav"
                                    value={values.first_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`
                                    w-full
                                    h-14
                                    rounded-2xl
                                    border
                                    border-[rgba(30,27,58,0.08)]
                                    bg-white/80
                                    pl-12
                                    pr-4
                                    text-base
                                    outline-none
                                    focus:border-[#7B2FF7]
                                    focus:ring-4
                                    focus:ring-[#7B2FF7]/10
                                    transition-all
                                ${errors.first_name &&
                                            touched.first_name
                                            ? 'border-red-400 focus-within:ring-red-100'
                                            : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                        }
                            `}
                                />
                            </div>

                            {errors.first_name &&
                                touched.first_name && (

                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.first_name}
                                    </p>
                                )}
                        </div>

                        {/* Student Last Name */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Student's last name *</label>

                            <div className="relative">

                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="e.g. Sharma"
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`
                                    w-full
                                    h-14
                                    rounded-2xl
                                    border
                                    border-[rgba(30,27,58,0.08)]
                                    bg-white/80
                                    pl-12
                                    pr-4
                                    text-base
                                    outline-none
                                    focus:border-[#7B2FF7]
                                    focus:ring-4
                                    focus:ring-[#7B2FF7]/10
                                    transition-all
                                ${errors.last_name &&
                                            touched.last_name
                                            ? 'border-red-400 focus-within:ring-red-100'
                                            : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                        }
                            `}
                                />
                            </div>

                            {errors.last_name &&
                                touched.last_name && (

                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.last_name}
                                    </p>
                                )}
                        </div>
                    </div>

                    {/* Parent's name — booklet page 13. We call this person, so
                        we should know who we are asking for. */}
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Parent&apos;s name *</label>

                        <div className="relative">

                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                            <input
                                type="text"
                                name="parent_name"
                                placeholder="e.g. Priya Sharma"
                                value={values.parent_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`
                                w-full
                                h-14
                                rounded-2xl
                                border
                                bg-white/80
                                pl-12
                                pr-4
                                text-base
                                outline-none
                                focus:border-[#7B2FF7]
                                focus:ring-4
                                focus:ring-[#7B2FF7]/10
                                transition-all
                                ${errors.parent_name && touched.parent_name
                                        ? 'border-red-400 focus-within:ring-red-100'
                                        : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                    }
                            `}
                            />
                        </div>

                        {errors.parent_name && touched.parent_name && (
                            <p className="mt-2 text-sm text-red-500 font-medium">
                                {errors.parent_name}
                            </p>
                        )}
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Parent's mobile number *</label>

                        <div className="relative">

                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                            <input
                                type="text"
                                name="mobile"
                                placeholder="10-digit mobile number"
                                value={values.mobile}

                                onChange={(e) => {

                                    // ONLY NUMBERS
                                    const value = e.target.value.replace(/\D/g, '');

                                    // LIMIT 10 DIGITS
                                    if (value.length <= 10) {

                                        setFieldValue(
                                            'mobile',
                                            value
                                        );
                                    }
                                }}

                                onBlur={handleBlur}

                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={10}

                                className={`
                                    w-full h-14 rounded-2xl border border-[rgba(30,27,58,0.08)] bg-white/80 pl-12 pr-4 text-base outline-none focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10 transition-al
                                        ${errors.mobile &&
                                        touched.mobile

                                        ? `
          border-red-400
          bg-red-50/40
          focus:ring-4
          focus:ring-red-100
          `

                                        : `
          border-[#E6E3F0]
          hover:border-[#7B2FF7]/30
          focus:border-[#7B2FF7]
          focus:ring-4
          focus:ring-[#7B2FF7]/10
          `
                                    }
      `}
                            />


                        </div>

                        {/* ERROR */}
                        {errors.mobile && touched.mobile && (<p className="mt-2 text-sm text-red-500 font-medium"> {errors.mobile} </p>)}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Email *</label>

                        <div className="relative">

                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`
                                w-full
                                h-14
                                rounded-2xl
                                border
                                border-[rgba(30,27,58,0.08)]
                                bg-white/80
                                pl-12
                                pr-4
                                text-base
                                outline-none
                                focus:border-[#7B2FF7]
                                focus:ring-4
                                focus:ring-[#7B2FF7]/10
                                transition-all
                                ${errors.email &&
                                        touched.email
                                        ? 'border-red-400 focus-within:ring-red-100'
                                        : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                    }
                                `}
                            />
                        </div>

                        {errors.email &&
                            touched.email && (

                                <p className="mt-2 text-sm text-red-500 font-medium">
                                    {errors.email}
                                </p>
                            )}
                    </div>

                    {/* Board + Class */}
                    {/* Board + Class */}
                    <div className="grid md:grid-cols-2 gap-5">

                        {/* ---------------------------------------------------------------- */}
                        {/* BOARD                                                            */}
                        {/* ---------------------------------------------------------------- */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Board *</label>

                            <SearchableSelect
                                options={boards.map((b) => ({
                                    label: b.name,
                                    value: String(b.id),
                                }))}
                                value={values.boardId}
                                onChange={(selectedId, option) => {
                                    setFieldValue('boardId', selectedId);
                                    setFieldValue('board', option.label);

                                    // Board changed — class + subjects no longer apply
                                    setFieldValue('classId', '');
                                    setFieldValue('class_name', '');
                                    setFieldValue('subjects', []);
                                    setFieldValue('subject_ids', []);
                                }}
                                onBlur={() => {
                                    setFieldTouched('boardId', true);
                                    setFieldTouched('board', true);
                                }}
                                placeholder="Select Board"
                                searchPlaceholder="Search boards..."
                                loading={loadingBoards}
                                loadingText="Loading boards..."
                                error={Boolean(errors.board && touched.board)}
                                icon={<School className="w-5 h-5" />}
                            />

                            {/* Error */}
                            {errors.board &&
                                touched.board && (

                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.board}
                                    </p>
                                )}
                        </div>

                        {/* ---------------------------------------------------------------- */}
                        {/* CLASS                                                            */}
                        {/* ---------------------------------------------------------------- */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">Class *</label>

                            <SearchableSelect
                                options={classes.map((c) => ({
                                    label: c.name,
                                    value: String(c.id),
                                }))}
                                value={values.classId}
                                onChange={(selectedId, option) => {
                                    setFieldValue('classId', selectedId);
                                    setFieldValue('class_name', option.label);

                                    // Class changed — subjects no longer apply
                                    setFieldValue('subjects', []);
                                    setFieldValue('subject_ids', []);
                                }}
                                onBlur={() => {
                                    setFieldTouched('classId', true);
                                    setFieldTouched('class_name', true);
                                }}
                                placeholder="Select Class"
                                searchPlaceholder="Search classes..."
                                loading={loadingClasses}
                                loadingText="Loading classes..."
                                error={Boolean(errors.class_name && touched.class_name)}
                                icon={<GraduationCap className="w-5 h-5" />}
                            />

                            {/* Error */}
                            {errors.class_name &&
                                touched.class_name && (

                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.class_name}
                                    </p>
                                )}
                        </div>
                    </div>

                    {/* School */}
                    <div>
                        <label className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">School <span className="font-normal text-[#6E6A85]">(optional)</span></label>

                        <div className="relative">

                            <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />

                            <input
                                type="text"
                                name="school_name"
                                placeholder="e.g. City International School"
                                value={values.school_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`

                w-full
                h-14
                rounded-2xl
                border
                border-[rgba(30,27,58,0.08)]
                bg-white/80
                pl-12
                pr-4
                text-base
                outline-none
                focus:border-[#7B2FF7]
                focus:ring-4
                focus:ring-[#7B2FF7]/10
                transition-all
                ${errors.school_name && touched.school_name
                                        ? 'border-red-400 focus-within:ring-red-100'
                                        : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                    }
                `}
                            />
                        </div>
                    </div>

                    {/* ── Tuition mode / location / timing (Phase 1 — UX plan §7) ── */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Home className="w-5 h-5 text-[#6E6A85]" />
                            <span className="text-sm font-semibold text-[#1E1B3A]">
                                How would you like to learn? *
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { key: 'home', label: 'Home Tuition', icon: Home },
                                { key: 'online', label: 'Online Classes', icon: Monitor },
                            ].map((opt) => (
                                <button
                                    key={opt.key}
                                    type="button"
                                    aria-pressed={values.mode === opt.key}
                                    onClick={() => {
                                        setFieldValue('mode', opt.key);
                                        setFieldTouched('mode', true, false);
                                    }}
                                    className={`flex items-center justify-center gap-2 h-14 rounded-2xl border text-sm font-semibold transition-all ${values.mode === opt.key
                                        ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                                        : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
                                        }`}
                                >
                                    <opt.icon className="w-4 h-4" />
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        {errors.mode && touched.mode && (
                            <p className="mt-2 text-sm text-red-500 font-medium">
                                {errors.mode}
                            </p>
                        )}
                    </div>

                    {/* City + Area — only relevant for home tuition */}
                    {values.mode === 'home' && (
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <SearchableSelect
                                    /* Built from SERVICE_CITIES so this form can
                                       never drift out of step with the pages
                                       that link into it. */
                                    options={CITY_SELECT_OPTIONS}
                                    value={values.city}
                                    onChange={(selected) => setFieldValue('city', selected)}
                                    onBlur={() => setFieldTouched('city', true)}
                                    placeholder="Select City"
                                    searchPlaceholder="Search city..."
                                    error={Boolean(errors.city && touched.city)}
                                    icon={<MapPin className="w-5 h-5" />}
                                />

                                {errors.city && touched.city && (
                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.city}
                                    </p>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A85]" />
                                    <input
                                        type="text"
                                        name="area"
                                        placeholder="Area / Pincode *"
                                        value={values.area}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full h-14 rounded-2xl border bg-white/80 pl-12 pr-4 text-base outline-none focus:border-[#7B2FF7] focus:ring-4 focus:ring-[#7B2FF7]/10 transition-all ${errors.area && touched.area
                                            ? 'border-red-400 focus-within:ring-red-100'
                                            : 'border-[#E6E3F0]'
                                            }`}
                                    />
                                </div>

                                {errors.area && touched.area && (
                                    <p className="mt-2 text-sm text-red-500 font-medium">
                                        {errors.area}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Preferred timing — optional, never a blocker */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-[#6E6A85]" />
                            <span className="text-sm font-semibold text-[#1E1B3A]">
                                Preferred Timing{' '}
                                <span className="font-normal text-[#6E6A85]">(optional)</span>
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {['Morning', 'Afternoon', 'Evening', 'Weekends'].map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    aria-pressed={values.preferred_timing.includes(slot)}
                                    onClick={() =>
                                        setFieldValue(
                                            'preferred_timing',
                                            values.preferred_timing.includes(slot)
                                                ? values.preferred_timing.filter((s) => s !== slot)
                                                : [...values.preferred_timing, slot]
                                        )
                                    }
                                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${values.preferred_timing.includes(slot)
                                        ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                                        : 'bg-white border-[rgba(30,27,58,0.08)] hover:border-[#7B2FF7] hover:text-[#7B2FF7]'
                                        }`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Fetches subjects mapped to the selected board + class combo */}
                    <SubjectFetcher
                        setSubjects={setSubjects}
                        setLoadingSubjects={setLoadingSubjects}
                    />

                    {/* Subjects */}
                    <div>

                        <div className="flex items-center gap-2 mb-4">

                            <BookOpen className="w-5 h-5 text-[#6E6A85]" />

                            <span className="text-sm font-semibold text-[#1E1B3A]">
                                Which subjects need help? *
                            </span>
                        </div>

                        {preSubject && (!values.boardId || !values.classId) && (
                            <p className="text-sm text-[#6D28D9] bg-[#F4EFFE] border border-[#7B2FF7]/20 rounded-xl px-4 py-3 mb-3">
                                You asked about <strong>{preSubject}</strong> — choose the
                                board and class above and we&apos;ll tick it for you.
                            </p>
                        )}

                        {(!values.boardId || !values.classId) && (
                            <p className="text-sm text-[#94A3B8] mb-2">
                                Select a board and class first to see available subjects.
                            </p>
                        )}

                        {values.boardId && values.classId && loadingSubjects && (
                            <p className="text-sm text-[#94A3B8] mb-2">
                                Loading subjects...
                            </p>
                        )}

                        {values.boardId && values.classId && !loadingSubjects && subjects.length === 0 && (
                            <p className="text-sm text-[#94A3B8] mb-2">
                                No subjects found for this board and class.
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3">

                            {subjects.map((subject) => (

                                <button
                                    key={subject.id}
                                    type="button"

                                    onClick={() => {

                                        if (
                                            values.subjects.includes(subject.name)
                                        ) {

                                            setFieldValue(
                                                'subjects',
                                                values.subjects.filter(
                                                    (s) => s !== subject.name
                                                )
                                            );

                                            setFieldValue(
                                                'subject_ids',
                                                values.subject_ids.filter(
                                                    (id) => id !== subject.id
                                                )
                                            );

                                        } else {

                                            setFieldValue(
                                                'subjects',
                                                [
                                                    ...values.subjects,
                                                    subject.name,
                                                ]
                                            );

                                            setFieldValue(
                                                'subject_ids',
                                                [
                                                    ...values.subject_ids,
                                                    subject.id,
                                                ]
                                            );
                                        }
                                    }}

                                    className={`
                  px-4
                  py-2
                  rounded-full
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${values.subjects.includes(subject.name)

                                            ? `
                    bg-gradient-to-r
                    from-[#7B2FF7]
                    to-[#7B2FF7]
                    text-white
                    border-transparent
                    shadow-lg
                    `

                                            : `
                    bg-white
                    border-[rgba(30,27,58,0.08)]
                    hover:border-[#7B2FF7]
                    hover:text-[#7B2FF7]
                    `
                                        }
                  `}
                                >
                                    {subject.name}
                                </button>
                            ))}
                        </div>

                        {errors.subjects &&
                            touched.subjects && (

                                <p className="mt-3 text-sm text-red-500 font-medium">
                                    {errors.subjects as string}
                                </p>
                            )}
                    </div>

                    {/* Budget — optional, private. Booklet page 13 asks for it;
                        it is a matching hint for our team only. It is never shown
                        on a public page and we advertise no fees anywhere. */}
                    <div>
                        <label htmlFor="budget" className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">
                            Monthly budget <span className="font-normal text-[#6E6A85]">(optional)</span>
                        </label>

                        <SearchableSelect
                            id="budget"
                            searchable={false}
                            options={BUDGET_OPTIONS}
                            value={values.budget}
                            onChange={(v) => setFieldValue('budget', v)}
                            onBlur={() => setFieldTouched('budget', true)}
                            placeholder="Prefer not to say"
                            icon={<Wallet className="w-5 h-5" />}
                        />

                        <p className="mt-2 text-xs text-[#6E6A85]">
                            Only our team sees this. It helps us suggest tutors that fit —
                            we will confirm the exact fee with you before any class.
                        </p>
                    </div>

                    {/* Anything specific — booklet page 13. Also where parents tell
                        us about subjects or needs we do not list yet. */}
                    <div>
                        <label htmlFor="requirement_note" className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5">
                            Anything specific we should know? <span className="font-normal text-[#6E6A85]">(optional)</span>
                        </label>

                        <textarea
                            id="requirement_note"
                            name="requirement_note"
                            rows={4}
                            maxLength={500}
                            placeholder="e.g. She is struggling with Algebra before her term exam, or we need a female tutor, or classes only on weekends."
                            value={values.requirement_note}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`
                            w-full
                            rounded-2xl
                            border
                            bg-white/80
                            px-4
                            py-3.5
                            text-base
                            leading-relaxed
                            outline-none
                            resize-y
                            focus:border-[#7B2FF7]
                            focus:ring-4
                            focus:ring-[#7B2FF7]/10
                            transition-all
                            ${errors.requirement_note && touched.requirement_note
                                    ? 'border-red-400'
                                    : 'border-[#E6E3F0]'
                                }
                        `}
                        />

                        <div className="mt-2 flex items-center justify-between gap-3">
                            {errors.requirement_note && touched.requirement_note ? (
                                <p className="text-sm text-red-500 font-medium">
                                    {errors.requirement_note}
                                </p>
                            ) : (
                                <span />
                            )}
                            <span className="text-xs text-[#6E6A85] shrink-0">
                                {values.requirement_note.length}/500
                            </span>
                        </div>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="
            group
            w-full
            h-14
            rounded-2xl
            bg-[#EA580C]
            hover:bg-[#C2410C]
            text-white
            font-semibold
            shadow-xl
            shadow-[#EA580C]/20
            hover:scale-[1.02]
            transition-all
            duration-300
            flex
            items-center
            justify-center
            gap-2
            disabled:opacity-50
            "
                    >

                        {loading
                            ? 'Submitting...'
                            : 'Find My Tutor'}

                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>

                    {/* WhatsApp handoff — a primary enquiry channel (UX plan §12) */}
                    <a
                        href={whatsappLink("Hi Tutoo, I'd like to book a free assessment for my child.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm font-semibold text-[#15803D] hover:underline"
                    >
                        Prefer WhatsApp? Chat with us instead →
                    </a>

                    {/* Trust Chips */}
                    <div className="flex flex-wrap gap-3 pt-2">

                        {[
                            'No hidden charges',
                            'Free expert consultation',
                            'Verified tutors',
                        ].map((chip) => (

                            <div
                                key={chip}
                                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/70
                border
                border-white
                shadow-sm
                "
                            >

                                <CheckCircle2 className="w-4 h-4 text-[#7B2FF7]" />

                                <span className="text-xs font-medium text-[#6E6A85]">
                                    {chip}
                                </span>
                            </div>
                        ))}
                    </div>

                </form>
            )}
        </Formik>
    );
}
