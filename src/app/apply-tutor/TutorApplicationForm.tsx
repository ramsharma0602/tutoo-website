import { useEffect, useState } from 'react';

import { Formik } from 'formik';

import {
    Upload,
    ArrowRight,
    ShieldCheck,
    Check,
} from 'lucide-react';

import { Button } from '../components/ui/button';
import SearchableSelect from '../components/ui/searchable-select';

import { tutorApplicationValidation } from './validation/tutorApplicationValidation'

import { submitTutorApplication, getBoards, getClasses } from './services/tutorApplicationService';
import SubjectLoader from './SubjectLoader';

interface TutorApplicationFormProps {
    /* One callback instead of four setters. The page owned four pieces of
       state (open / type / title / message) that were only ever set together,
       from exactly two places in this file — so three of them could drift out
       of sync with the fourth and nothing would catch it. */
    onStatus: (
        type: 'success' | 'error',
        title: string,
        message: string
    ) => void;
}

export interface Subject {
    id: number;
    name: string;
}
interface Board {
    id: number;
    name: string;
}

interface Class {
    id: number;
    name: string;
}

export default function TutorApplicationForm({
    onStatus,
}: TutorApplicationFormProps) {

    const [loading, setLoading] = useState(false);
    const teachingModes = [
        'Home Tuition',
        'Online Tuition',
        'Both',
    ];

    /* Booklet page 16 asks tutors for their availability. Days and slots are
       kept coarse on purpose — the exact timetable is agreed with the family. */
    const availabilityDays = [
        'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
    ];

    const availabilitySlots = [
        'Morning (6am – 12pm)',
        'Afternoon (12pm – 4pm)',
        'Evening (4pm – 8pm)',
        'Night (8pm – 10pm)',
    ];

    const toggleInArray = (list: string[], value: string) =>
        list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

    const [boards, setBoards] = useState<Board[]>([]);
    const [classes, setClasses] = useState<Class[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);

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
                console.error("Failed to load boards:", error);
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
            } catch (error) {
                console.error("Failed to load classes:", error);
            } finally {
                setLoadingClasses(false);
            }
        };

        fetchClasses();
    }, []);

    const qualificationOptions = [
        'Graduate',
        'Post Graduate',
        'B.Ed',
        'M.Ed',
        'PhD',
    ].map((q) => ({ label: q, value: q }));

    const experienceOptions = [
        'Fresher',
        '1–2 Years',
        '3–5 Years',
        '5–10 Years',
        '10+ Years',
    ].map((e) => ({ label: e, value: e }));

    return (

        <>
            <Formik
                initialValues={{
                    fullName: '',
                    mobile: '',
                    email: '',
                    city: '',
                    qualification: '',
                    experience: '',
                    boardId: "",
                    classId: "",
                    subjectId: "",
                    teachingMode: '',
                    availableDays: [] as string[],
                    availableSlots: [] as string[],
                    about: '',
                    resume: null,
                }}

                validationSchema={tutorApplicationValidation}

                onSubmit={async (values, { resetForm }) => {

                    try {

                        setLoading(true);

                        const formData = new FormData();

                        /* -------------------------------------------------------------------------- */
                        /*                               APPEND VALUES                                */
                        /* -------------------------------------------------------------------------- */

                        formData.append('full_name', values.fullName);
                        formData.append('mobile', values.mobile);
                        formData.append('email', values.email);
                        formData.append('city', values.city);
                        formData.append('qualification', values.qualification);
                        formData.append('experience', values.experience);
                        formData.append('teaching_mode', values.teachingMode);
                        // Phase 3: availability (booklet page 16). Sent as comma
                        // separated strings — confirm the backend stores them.
                        formData.append('available_days', values.availableDays.join(', '));
                        formData.append('available_slots', values.availableSlots.join(', '));
                        formData.append('about', values.about);
                        formData.append('subject_id', values.subjectId);
                        formData.append('board_id', values.boardId);
                        formData.append('class_id', values.classId);


                        /* -------------------------------------------------------------------------- */
                        /*                               FILE APPEND                                  */
                        /* -------------------------------------------------------------------------- */

                        if (values.resume) {

                            formData.append(
                                'resume',
                                values.resume
                            );
                        }

                        /* -------------------------------------------------------------------------- */
                        /*                                 API CALL                                   */
                        /* -------------------------------------------------------------------------- */

                        await submitTutorApplication(formData);

                        /* -------------------------------------------------------------------------- */
                        /*                              SUCCESS MODAL                                 */
                        /* -------------------------------------------------------------------------- */

                        onStatus(
                            'success',
                            'Application received',
                            'Thanks for applying to teach with Tutoo. We read every application and will call or WhatsApp you about the next step — usually a short interview and a document check.'
                        );

                        resetForm();

                    } catch (error: any) {

                        console.error(error);

                        onStatus(
                            'error',
                            'We could not send your application',
                            error?.response?.data?.message ||
                            'Something went wrong at our end. Please try again in a few minutes, or WhatsApp us and we will take your details directly.'
                        );

                    } finally {

                        setLoading(false);
                    }
                }}
            >


                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    setFieldTouched,
                    setFieldError,
                    setTouched,
                    validateForm,
                    submitForm,
                }) => (
                    <>
                        <SubjectLoader
                            setSubjects={setSubjects}
                            setLoadingSubjects={setLoadingSubjects}
                        />
                        <form
                            noValidate
                            /* ── WHY THIS IS NOT JUST onSubmit={handleSubmit} ──
                               Pressing Submit on an untouched form did NOTHING.
                               Not a message, not an error, not a scroll — the
                               button appeared dead. Errors render on
                               `errors[x] && touched[x]`, and submitting was not
                               marking the untouched fields, so every error was
                               computed and none was displayed. On an application
                               page that is the worst failure there is: the
                               applicant concludes the site is broken and leaves,
                               and nothing reaches the CRM to tell you it
                               happened.

                               So: validate first, mark everything that failed as
                               touched so it renders, then move focus to the first
                               offending field. The focus move matters as much as
                               the errors — this form is long, and several fields
                               sit below the fold from the button. */
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const found = await validateForm();
                                const keys = Object.keys(found);

                                if (keys.length === 0) {
                                    submitForm();
                                    return;
                                }

                                setTouched(
                                    keys.reduce(
                                        (acc, k) => ({ ...acc, [k]: true }),
                                        {} as Record<string, boolean>
                                    ),
                                    false
                                );

                                const first = keys[0];
                                const el =
                                    document.getElementById(first) ||
                                    document.querySelector<HTMLElement>(`[name="${first}"]`);

                                if (el) {
                                    el.scrollIntoView({ block: 'center', behavior: 'smooth' });
                                    /* The resume input is opacity-0, so focusing it
                                       silently would strand a sighted keyboard user.
                                       Its wrapper carries focus-within styling, which
                                       makes the dashed box light up. */
                                    if (typeof el.focus === 'function') el.focus({ preventScroll: true });
                                }
                            }}
                            className="mt-10 space-y-5"
                        >

                            {/* Inputs */}
                            {[
                                {
                                    name: 'fullName',
                                    label: 'Your full name *',
                                    placeholder: 'e.g. Priya Sharma',
                                    type: 'text',
                                },

                                {
                                    name: 'mobile',
                                    label: 'Mobile number *',
                                    placeholder: '10-digit mobile number',
                                    type: 'tel',
                                },

                                {
                                    name: 'email',
                                    label: 'Email *',
                                    placeholder: 'you@example.com',
                                    type: 'email',
                                },

                                {
                                    name: 'city',
                                    label: 'Which city do you teach in? *',
                                    placeholder: 'e.g. Kothrud, Pune',
                                    type: 'text',
                                },
                            ].map((field) => (

                                <div key={field.name}>

                                    <label
                                        htmlFor={field.name}
                                        className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5 px-1"
                                    >
                                        {field.label}
                                    </label>

                                    <div
                                        className={`
                h-16
                rounded-2xl
                bg-white
                border
                px-5
                flex
                items-center
                shadow-sm
                transition-all
                duration-300
                focus-within:ring-4
                ${errors[field.name as keyof typeof errors] &&
                                                touched[field.name as keyof typeof touched]
                                                ? 'border-red-400 focus-within:ring-red-100'
                                                : 'border-[#E6E3F0] focus-within:border-[#7B2FF7] focus-within:ring-violet-100'
                                            }
                `}
                                    >

                                        <input
                                            id={field.name}
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={(values as any)[field.name]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            inputMode={field.name === 'mobile' ? 'numeric' : undefined}
                                            autoComplete={
                                                field.name === 'fullName' ? 'name'
                                                    : field.name === 'mobile' ? 'tel'
                                                        : field.name === 'email' ? 'email'
                                                            : field.name === 'city' ? 'address-level2'
                                                                : undefined
                                            }
                                            /* Without these two, a screen-reader user who tabs
                                               into an invalid field hears nothing at all — the
                                               error <p> below was visually adjacent and
                                               programmatically unrelated. */
                                            aria-invalid={
                                                Boolean(
                                                    errors[field.name as keyof typeof errors] &&
                                                    touched[field.name as keyof typeof touched]
                                                )
                                            }
                                            aria-describedby={
                                                errors[field.name as keyof typeof errors] &&
                                                    touched[field.name as keyof typeof touched]
                                                    ? `${field.name}-error`
                                                    : undefined
                                            }
                                            maxLength={
                                                field.name === 'mobile'
                                                    ? 10
                                                    : undefined
                                            }
                                            className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#1E1B3A]
                  placeholder:text-[#94A3B8]
                  "
                                        />
                                    </div>

                                    {errors[field.name as keyof typeof errors] &&
                                        touched[field.name as keyof typeof touched] && (

                                            <p
                                                id={`${field.name}-error`}
                                                role="alert"
                                                className="mt-2 text-sm text-red-600 font-medium"
                                            >
                                                {errors[field.name as keyof typeof errors]}
                                            </p>
                                        )}
                                </div>
                            ))}

                            {/* Select Fields */}
                            {/* min-w-0 on the children below, not here: a grid
                                item defaults to min-width:auto, so it refuses to
                                shrink under its content. The SearchableSelect
                                trigger renders "Your highest qualification" on one
                                line, which pinned this row at 384px and pushed the
                                whole document 64px past a 320px viewport. */}
                            <div className="grid md:grid-cols-2 gap-5">

                                {/* Qualification */}
                                <div className="space-y-2 min-w-0">

                                    <label
                                        htmlFor="qualification"
                                        className="text-sm font-semibold text-[#1E1B3A] px-1"
                                    >
                                        Highest Qualification <span aria-hidden="true">*</span>
                                        <span className="sr-only">(required)</span>
                                    </label>

                                    <div className="relative group">

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B2FF7]/10 to-[#7B2FF7]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <SearchableSelect
                                            id="qualification"
                                            options={qualificationOptions}
                                            value={values.qualification}
                                            onChange={(v) =>
                                                setFieldValue('qualification', v)
                                            }
                                            onBlur={() =>
                                                setFieldTouched('qualification', true)
                                            }
                                            placeholder="Your highest qualification"
                                            searchPlaceholder="Search qualifications..."
                                            error={Boolean(
                                                errors.qualification &&
                                                touched.qualification
                                            )}
                                            className="h-16 shadow-[0_8px_30px_rgba(30,27,58,0.05)]"
                                        />
                                    </div>

                                    {errors.qualification &&
                                        touched.qualification && (

                                            <p role="alert" className="text-sm text-red-600 font-medium px-1">
                                                {errors.qualification}
                                            </p>
                                        )}
                                </div>

                                {/* Experience */}
                                <div className="space-y-2 min-w-0">

                                    <label
                                        htmlFor="experience"
                                        className="text-sm font-semibold text-[#1E1B3A] px-1"
                                    >
                                        Teaching Experience <span aria-hidden="true">*</span>
                                        <span className="sr-only">(required)</span>
                                    </label>

                                    <div className="relative group">

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B2FF7]/10 to-[#7B2FF7]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <SearchableSelect
                                            id="experience"
                                            options={experienceOptions}
                                            value={values.experience}
                                            onChange={(v) =>
                                                setFieldValue('experience', v)
                                            }
                                            onBlur={() =>
                                                setFieldTouched('experience', true)
                                            }
                                            placeholder="Years of teaching experience"
                                            searchPlaceholder="Search experience..."
                                            error={Boolean(
                                                errors.experience &&
                                                touched.experience
                                            )}
                                            className="h-16 shadow-[0_8px_30px_rgba(30,27,58,0.05)]"
                                        />
                                    </div>

                                    {errors.experience &&
                                        touched.experience && (

                                            <p role="alert" className="text-sm text-red-600 font-medium px-1">
                                                {errors.experience}
                                            </p>
                                        )}
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Board */}
                                <div className="space-y-2 min-w-0">
                                    <label
                                        htmlFor="boardId"
                                        className="text-sm font-semibold text-[#1E1B3A] px-1"
                                    >
                                        Board
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B2FF7]/10 to-[#7B2FF7]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <SearchableSelect
                                            id="boardId"
                                            options={boards.map((b) => ({
                                                label: b.name,
                                                value: String(b.id),
                                            }))}
                                            value={values.boardId}
                                            onChange={(v) => {
                                                setFieldValue('boardId', v);
                                                setFieldValue('classId', '');
                                                setFieldValue('subjectId', '');
                                            }}
                                            onBlur={() =>
                                                setFieldTouched('boardId', true)
                                            }
                                            placeholder="Select Board"
                                            searchPlaceholder="Search boards..."
                                            loading={loadingBoards}
                                            loadingText="Loading boards..."
                                            error={Boolean(
                                                touched.boardId && errors.boardId
                                            )}
                                            className="h-16 shadow-[0_8px_30px_rgba(30,27,58,0.05)]"
                                        />
                                    </div>

                                    {touched.boardId && errors.boardId && (
                                        <p role="alert" className="text-sm text-red-600 font-medium px-1">
                                            {errors.boardId}
                                        </p>
                                    )}
                                </div>

                                {/* Class */}
                                <div className="space-y-2 min-w-0">
                                    <label
                                        htmlFor="classId"
                                        className="text-sm font-semibold text-[#1E1B3A] px-1"
                                    >
                                        Class
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B2FF7]/10 to-[#7B2FF7]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <SearchableSelect
                                            id="classId"
                                            options={classes.map((c) => ({
                                                label: c.name,
                                                value: String(c.id),
                                            }))}
                                            value={values.classId}
                                            onChange={(v) => {
                                                setFieldValue('classId', v);
                                                setFieldValue('subjectId', '');
                                            }}
                                            onBlur={() =>
                                                setFieldTouched('classId', true)
                                            }
                                            placeholder="Select Class"
                                            searchPlaceholder="Search classes..."
                                            loading={loadingClasses}
                                            loadingText="Loading classes..."
                                            error={Boolean(
                                                touched.classId && errors.classId
                                            )}
                                            className="h-16 shadow-[0_8px_30px_rgba(30,27,58,0.05)]"
                                        />
                                    </div>

                                    {touched.classId && errors.classId && (
                                        <p role="alert" className="text-sm text-red-600 font-medium px-1">
                                            {errors.classId}
                                        </p>
                                    )}
                                </div>


                                {/* Subject */}
                                <div className="space-y-2 min-w-0">
                                    <label
                                        htmlFor="subjectId"
                                        className="text-sm font-semibold text-[#1E1B3A] px-1"
                                    >
                                        Subject
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B2FF7]/10 to-[#7B2FF7]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <SearchableSelect
                                            id="subjectId"
                                            options={subjects.map((s) => ({
                                                label: s.name,
                                                value: String(s.id),
                                            }))}
                                            value={values.subjectId}
                                            onChange={(v) =>
                                                setFieldValue('subjectId', v)
                                            }
                                            onBlur={() =>
                                                setFieldTouched('subjectId', true)
                                            }
                                            placeholder={
                                                !values.boardId
                                                    ? 'Select Board First'
                                                    : !values.classId
                                                        ? 'Select Class First'
                                                        : 'Select Subject'
                                            }
                                            searchPlaceholder="Search subjects..."
                                            disabled={
                                                !values.boardId ||
                                                !values.classId ||
                                                loadingSubjects
                                            }
                                            loading={loadingSubjects}
                                            loadingText="Loading subjects..."
                                            error={Boolean(
                                                touched.subjectId && errors.subjectId
                                            )}
                                            className="h-16 shadow-[0_8px_30px_rgba(30,27,58,0.05)]"
                                        />
                                    </div>

                                    {touched.subjectId && errors.subjectId && (
                                        <p role="alert" className="text-sm text-red-600 font-medium px-1">
                                            {errors.subjectId}
                                        </p>
                                    )}
                                </div>

                            </div>

                            {/* Teaching Mode ─────────────────────────────────────
                                Was a <p> over three plain buttons: no group
                                semantics, no pressed state, nothing announced.
                                The availability block immediately below already
                                used <fieldset>/<legend> and aria-pressed — the
                                right pattern existed in this same file and had
                                simply not been applied here. */}
                            <fieldset className="border-0 p-0 m-0">

                                <legend className="text-sm font-semibold text-[#1E1B3A] mb-4 p-0">
                                    Teaching Mode <span aria-hidden="true">*</span>
                                    <span className="sr-only">(required)</span>
                                </legend>

                                <div className="grid grid-cols-3 gap-4">

                                    {teachingModes.map((mode) => (

                                        <button
                                            key={mode}
                                            type="button"
                                            aria-pressed={values.teachingMode === mode}
                                            aria-describedby={
                                                errors.teachingMode && touched.teachingMode
                                                    ? 'teachingMode-error'
                                                    : undefined
                                            }
                                            onClick={() =>
                                                setFieldValue('teachingMode', mode)
                                            }
                                            className={`
                                            h-16
                                            rounded-2xl
                                            border
                                            transition-all
                                            duration-300
                                            text-sm
                                            font-semibold
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            focus-visible:outline-none
                                            focus-visible:ring-4
                                            focus-visible:ring-violet-200
                                            focus-visible:border-[#7B2FF7]
                                            ${values.teachingMode === mode
                                                    ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white border-transparent shadow-lg'
                                                    : 'bg-white border-[#E6E3F0] text-[#1E1B3A] hover:border-[#7B2FF7] hover:bg-violet-50'
                                                }
                                            `}
                                        >

                                            {values.teachingMode === mode && (
                                                <Check className="w-4 h-4" />
                                            )}

                                            {mode}
                                        </button>
                                    ))}
                                </div>

                                {errors.teachingMode &&
                                    touched.teachingMode && (

                                        <p
                                            id="teachingMode-error"
                                            role="alert"
                                            className="mt-2 text-sm text-red-600 font-medium"
                                        >
                                            {errors.teachingMode}
                                        </p>
                                    )}
                            </fieldset>

                            {/* Availability — booklet page 16 ("Your availability").
                                Coarse on purpose; the exact timetable is agreed
                                with the family once matched. */}
                            <div>
                                <p className="text-sm font-semibold text-[#1E1B3A] mb-1">
                                    Your availability <span aria-hidden="true">*</span>
                                    <span className="sr-only">(required)</span>
                                </p>
                                <p className="text-xs text-[#6E6A85] mb-4">
                                    Pick the days and times you can usually teach. You can change this later.
                                </p>

                                <fieldset className="mb-5">
                                    <legend className="text-[13px] font-semibold text-[#1E1B3A] mb-2.5">
                                        Days
                                    </legend>
                                    <div className="flex flex-wrap gap-2.5">
                                        {availabilityDays.map((day) => {
                                            const active = values.availableDays.includes(day);
                                            return (
                                                <button
                                                    key={day}
                                                    type="button"
                                                    aria-pressed={active}
                                                    onClick={() =>
                                                        setFieldValue(
                                                            'availableDays',
                                                            toggleInArray(values.availableDays, day)
                                                        )
                                                    }
                                                    className={`min-w-[62px] h-11 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 ${active
                                                        ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                                                        : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* availableDays is now required, so it needs
                                        somewhere to say so. A required rule with no
                                        error slot is worse than no rule: submission
                                        is blocked and the page never explains why. */}
                                    {errors.availableDays && touched.availableDays && (
                                        <p role="alert" className="mt-2 text-sm text-red-600 font-medium">
                                            {errors.availableDays as string}
                                        </p>
                                    )}
                                </fieldset>

                                <fieldset>
                                    <legend className="text-[13px] font-semibold text-[#1E1B3A] mb-2.5">
                                        Times
                                    </legend>
                                    <div className="grid sm:grid-cols-2 gap-2.5">
                                        {availabilitySlots.map((slot) => {
                                            const active = values.availableSlots.includes(slot);
                                            return (
                                                <button
                                                    key={slot}
                                                    type="button"
                                                    aria-pressed={active}
                                                    onClick={() =>
                                                        setFieldValue(
                                                            'availableSlots',
                                                            toggleInArray(values.availableSlots, slot)
                                                        )
                                                    }
                                                    className={`h-12 px-4 rounded-xl border text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 ${active
                                                        ? 'bg-[#F4EFFE] border-[#7B2FF7] text-[#5B21B6]'
                                                        : 'bg-white border-[#E6E3F0] text-[#4B4763] hover:border-[#7B2FF7]/40'
                                                        }`}
                                                >
                                                    {active && <Check className="w-4 h-4" />}
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {errors.availableSlots && touched.availableSlots && (
                                        <p role="alert" className="mt-2 text-sm text-red-600 font-medium">
                                            {errors.availableSlots as string}
                                        </p>
                                    )}
                                </fieldset>
                            </div>

                            {/* ── About ───────────────────────────────────────
                                This field was a ghost: present in initialValues,
                                present in the validation schema, and appended to
                                every submission as `about=""` — with no control
                                rendered anywhere in the form. So the CRM received
                                an empty string on every application and there was
                                no way to tell that apart from a backend failure.
                                Rendering it is the smaller change than unpicking
                                it from the payload, and a tutor describing
                                themselves in their own words is worth reading. */}
                            <div>
                                <label
                                    htmlFor="about"
                                    className="block text-[13px] font-semibold text-[#1E1B3A] mb-1.5 px-1"
                                >
                                    Anything else we should know?{' '}
                                    <span className="font-medium text-[#6E6A85]">(optional)</span>
                                </label>

                                <textarea
                                    id="about"
                                    name="about"
                                    rows={4}
                                    value={values.about}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxLength={800}
                                    placeholder="How you teach, the boards you know best, anything about your experience that the fields above did not capture."
                                    className="
                                        w-full
                                        rounded-2xl
                                        bg-white
                                        border
                                        border-[#E6E3F0]
                                        px-5
                                        py-4
                                        text-[#1E1B3A]
                                        placeholder:text-[#94A3B8]
                                        outline-none
                                        transition-all
                                        duration-300
                                        focus:border-[#7B2FF7]
                                        focus:ring-4
                                        focus:ring-violet-100
                                        resize-y
                                    "
                                />
                            </div>

                            {/* Upload */}
                            <div>

                                <div
                                    className={`
                                    rounded-[28px]
                                    border-2
                                    border-dashed
                                    p-8
                                    text-center
                                    relative
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    focus-within:ring-4
                                    focus-within:ring-violet-200
                                    focus-within:border-[#7B2FF7]

                                    ${errors.resume && touched.resume
                                            ? 'border-red-300 bg-red-50/60'
                                            : 'border-[#94A3B8] bg-white/70 hover:border-[#7B2FF7]/40'
                                        }
                                    `}
                                >

                                    {/* ── File Input ──────────────────────────────
                                        It is opacity-0 and stretched over the whole
                                        dashed box, which is the usual trick — but it
                                        had no id, no label, no aria-label and no
                                        describedby, so a screen reader announced an
                                        unnamed "button", and because the element
                                        itself is invisible its focus ring was too:
                                        a keyboard user tabbed into a control they
                                        could not see or identify.

                                        Named here, described by the constraint text,
                                        and the visible box now carries the focus ring
                                        via focus-within (see the wrapper's classes).

                                        setFieldError('resume','') below only clears
                                        the DISPLAYED error — the schema re-runs on
                                        submit, so an invalid file can reappear as an
                                        error after the user believes it is resolved.
                                        Left as-is deliberately: the format check is
                                        now permissive enough (MIME or extension) that
                                        the case it used to fire on is gone. */}
                                    <input
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        aria-describedby="resume-hint"
                                        aria-invalid={Boolean(errors.resume && touched.resume)}

                                        onChange={(event) => {

                                            const file =
                                                event.currentTarget.files?.[0];

                                            setFieldTouched(
                                                'resume',
                                                true
                                            );

                                            if (file) {

                                                setFieldValue(
                                                    'resume',
                                                    file
                                                );

                                                // REMOVE ERROR
                                                setFieldError(
                                                    'resume',
                                                    ''
                                                );
                                            }
                                        }}

                                        className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    cursor-pointer
                                    z-10
                                    "
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`
      w-16
      h-16
      rounded-2xl
      flex
      items-center
      justify-center
      mx-auto
      shadow-lg
      transition-all
      duration-300

      ${errors.resume && touched.resume
                                                ? 'bg-gradient-to-br from-red-500 to-rose-500'
                                                : 'bg-gradient-to-br from-[#EA580C] to-[#C2410C]'
                                            }
      `}
                                    >

                                        <Upload className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title — a <label>, not an <h4>. It was an
                                        <h4>, which put "Upload Resume" into the
                                        page's heading outline as though it were a
                                        section, and left the input nameless. */}
                                    <label
                                        htmlFor="resume"
                                        className="mt-5 block text-lg font-bold text-[#1E1B3A] cursor-pointer"
                                    >
                                        Upload Resume <span aria-hidden="true">*</span>
                                        <span className="sr-only">(required)</span>
                                    </label>

                                    {/* Subtext */}
                                    <p id="resume-hint" className="mt-2 text-sm text-[#6E6A85]">
                                        PDF, DOC, DOCX • Max 5MB
                                    </p>

                                    {/* Success */}
                                    {values.resume && !errors.resume && (

                                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-2">

                                            <div className="w-2 h-2 rounded-full bg-[#7B2FF7]" />

                                            <p className="text-sm font-semibold text-[#7B2FF7]">
                                                {(values.resume as File).name}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Error */}
                                {errors.resume && touched.resume && (

                                    <div className="mt-3 flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-50 border border-red-200">

                                        <div className="w-2 h-2 rounded-full bg-red-500" />

                                        <p role="alert" className="text-sm font-medium text-red-600">
                                            {errors.resume}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="
                        group
                        w-full
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#F2660F]
                        to-[#EA580C]
                        hover:from-[#EA580C]
                        hover:to-[#C2410C]
                        text-white
                        font-bold
                        shadow-[0_12px_30px_rgba(234,88,12,0.28)]
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-orange-200
                        transition-colors
                        duration-300
                        flex
                        items-center
                        justify-center
                        gap-3
                        disabled:opacity-50
                        "
                            >

                                {loading
                                    ? 'Submitting...'
                                    : 'Apply as Tutor'}

                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>

                            {/* Security */}
                            <div className="rounded-2xl bg-white/70 border border-[#E6E3F0] px-5 py-4 text-sm text-[#6E6A85] flex items-center gap-3">

                                <ShieldCheck className="w-5 h-5 text-[#7B2FF7]" />

                                Your information is secure and only used for tutor onboarding.
                            </div>
                        </form>
                    </>

                )}

            </Formik>

        </>

    );


}