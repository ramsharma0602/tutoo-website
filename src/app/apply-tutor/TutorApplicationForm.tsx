import { useEffect, useState } from 'react';

import { Formik, useFormikContext } from 'formik';

import {
    Upload,
    ArrowRight,
    ShieldCheck,
    Check,
} from 'lucide-react';

import { Button } from '../components/ui/button';

import { tutorApplicationValidation } from './validation/tutorApplicationValidation'

import { submitTutorApplication, getBoards, getClasses, getSubjects } from './services/tutorApplicationService';
import SubjectLoader from './SubjectLoader';

interface TutorApplicationFormProps {

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

interface Option {
    id: number;
    name: string;
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
    setModalOpen,
    setModalType,
    setModalTitle,
    setModalMessage,
}: TutorApplicationFormProps) {

    const [loading, setLoading] = useState(false);
    const teachingModes = [
        'Home Tuition',
        'Online Tuition',
        'Both',
    ];

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

    const selectClass = `
        relative
        h-16
        w-full
        appearance-none
        rounded-2xl
        bg-white/90
        backdrop-blur-xl
        border
        px-5
        pr-14
        outline-none
        text-[#0F172A]
        font-medium
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-300
        border-[#E2E8F0]
        focus:border-[#2563EB]
        focus:ring-4
        focus:ring-blue-100
        hover:border-[#CBD5E1]
        disabled:bg-slate-100
        disabled:text-slate-400
        disabled:cursor-not-allowed
        `;

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

                        setModalType('success');

                        setModalTitle(
                            'Application Submitted Successfully'
                        );

                        setModalMessage(
                            'Thank you for applying as a tutor with UberTutor. Our recruitment team will review your application and contact you shortly regarding the next steps in your onboarding process.'
                        );

                        setModalOpen(true);

                        resetForm();

                    } catch (error: any) {

                        console.error(error);

                        setModalType('error');

                        setModalTitle(
                            'Unable to Submit Application'
                        );

                        setModalMessage(
                            error?.response?.data?.message ||
                            'Due to some technical issue, we could not submit your application right now. Please try again after some time.'
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
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    setFieldTouched,
                    setFieldError
                }) => (
                    <>
                        <SubjectLoader
                            setSubjects={setSubjects}
                            setLoadingSubjects={setLoadingSubjects}
                        />
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-5"
                        >

                            {/* Inputs */}
                            {[
                                {
                                    name: 'fullName',
                                    placeholder: 'Full Name *',
                                    type: 'text',
                                },

                                {
                                    name: 'mobile',
                                    placeholder: 'Mobile Number *',
                                    type: 'tel',
                                },

                                {
                                    name: 'email',
                                    placeholder: 'Email Address *',
                                    type: 'email',
                                },

                                {
                                    name: 'city',
                                    placeholder: 'City *',
                                    type: 'text',
                                },
                            ].map((field) => (

                                <div key={field.name}>

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
                                                : 'border-[#E2E8F0] focus-within:border-[#2563EB] focus-within:ring-blue-100'
                                            }
                `}
                                    >

                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={(values as any)[field.name]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            maxLength={
                                                field.name === 'mobile'
                                                    ? 10
                                                    : undefined
                                            }
                                            className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#0F172A]
                  placeholder:text-[#94A3B8]
                  "
                                        />
                                    </div>

                                    {errors[field.name as keyof typeof errors] &&
                                        touched[field.name as keyof typeof touched] && (

                                            <p className="mt-2 text-sm text-red-500 font-medium">
                                                {errors[field.name as keyof typeof errors]}
                                            </p>
                                        )}
                                </div>
                            ))}

                            {/* Select Fields */}
                            <div className="grid md:grid-cols-2 gap-5">

                                {/* Qualification */}
                                <div className="space-y-2">

                                    <label className="text-sm font-semibold text-[#0F172A] px-1">
                                        Highest Qualification
                                    </label>

                                    <div className="relative group">

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#16C47F]/10 to-[#2563EB]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <select
                                            name="qualification"
                                            value={values.qualification}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                            relative
                                            h-16
                                            w-full
                                            appearance-none
                                            rounded-2xl
                                            bg-white/90
                                            backdrop-blur-xl
                                            border
                                            px-5
                                            pr-14
                                            outline-none
                                            text-[#0F172A]
                                            font-medium
                                            shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                                            transition-all
                                            duration-300
                                            ${errors.qualification &&
                                                    touched.qualification
                                                    ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                                                    : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 hover:border-[#CBD5E1]'
                                                }
                                            `}
                                        >

                                            <option value="">
                                                Select Qualification
                                            </option>

                                            <option value="Graduate">
                                                Graduate
                                            </option>

                                            <option value="Post Graduate">
                                                Post Graduate
                                            </option>

                                            <option value="B.Ed">
                                                B.Ed
                                            </option>

                                            <option value="M.Ed">
                                                M.Ed
                                            </option>

                                            <option value="PhD">
                                                PhD
                                            </option>
                                        </select>

                                        {/* Custom Arrow */}
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">

                                            <svg
                                                className="w-5 h-5 text-[#64748B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {errors.qualification &&
                                        touched.qualification && (

                                            <p className="text-sm text-red-500 font-medium px-1">
                                                {errors.qualification}
                                            </p>
                                        )}
                                </div>

                                {/* Experience */}
                                <div className="space-y-2">

                                    <label className="text-sm font-semibold text-[#0F172A] px-1">
                                        Teaching Experience
                                    </label>

                                    <div className="relative group">

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <select
                                            name="experience"
                                            value={values.experience}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                            relative
                                            h-16
                                            w-full
                                            appearance-none
                                            rounded-2xl
                                            bg-white/90
                                            backdrop-blur-xl
                                            border
                                            px-5
                                            pr-14
                                            outline-none
                                            text-[#0F172A]
                                            font-medium
                                            shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                                            transition-all
                                            duration-300
                                            ${errors.experience &&
                                                    touched.experience
                                                    ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                                                    : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 hover:border-[#CBD5E1]'
                                                }
                                        `}
                                        >

                                            <option value="">
                                                Select Experience
                                            </option>

                                            <option value="Fresher">
                                                Fresher
                                            </option>

                                            <option value="1–2 Years">
                                                1–2 Years
                                            </option>

                                            <option value="3–5 Years">
                                                3–5 Years
                                            </option>

                                            <option value="5–10 Years">
                                                5–10 Years
                                            </option>

                                            <option value="10+ Years">
                                                10+ Years
                                            </option>
                                        </select>

                                        {/* Custom Arrow */}
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">

                                            <svg
                                                className="w-5 h-5 text-[#64748B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {errors.experience &&
                                        touched.experience && (

                                            <p className="text-sm text-red-500 font-medium px-1">
                                                {errors.experience}
                                            </p>
                                        )}
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Board */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="boardId"
                                        className="text-sm font-semibold text-[#0F172A] px-1"
                                    >
                                        Board
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#16C47F]/10 to-[#2563EB]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <select
                                            id="boardId"
                                            value={values.boardId}
                                            onChange={(e) => {
                                                setFieldValue("boardId", e.target.value);
                                                setFieldValue("classId", "");
                                                setFieldValue("subjectId", "");
                                            }}
                                            className={`${selectClass} ${touched.boardId && errors.boardId
                                                ? "border-red-400 focus:ring-red-100"
                                                : ""
                                                }`}
                                        >
                                            <option value="">Select Board</option>

                                            {boards.map((board) => (
                                                <option key={board.id} value={board.id}>
                                                    {board.name}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-[#64748B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {touched.boardId && errors.boardId && (
                                        <p className="text-sm text-red-500 font-medium px-1">
                                            {errors.boardId}
                                        </p>
                                    )}
                                </div>

                                {/* Class */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="classId"
                                        className="text-sm font-semibold text-[#0F172A] px-1"
                                    >
                                        Class
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <select
                                            id="classId"
                                            value={values.classId}
                                            onChange={(e) => {
                                                setFieldValue("classId", e.target.value);
                                                setFieldValue("subjectId", "");
                                            }}
                                            className={`${selectClass} ${touched.classId && errors.classId
                                                ? "border-red-400 focus:ring-red-100"
                                                : ""
                                                }`}
                                        >
                                            <option value="">Select Class</option>

                                            {classes.map((cls) => (
                                                <option key={cls.id} value={cls.id}>
                                                    {cls.name}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-[#64748B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {touched.classId && errors.classId && (
                                        <p className="text-sm text-red-500 font-medium px-1">
                                            {errors.classId}
                                        </p>
                                    )}
                                </div>


                                {/* Subject */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="subjectId"
                                        className="text-sm font-semibold text-[#0F172A] px-1"
                                    >
                                        Subject
                                    </label>

                                    <div className="relative group">

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 opacity-0 group-focus-within:opacity-100 blur-xl transition-all duration-500" />

                                        <select
                                            id="subjectId"
                                            value={values.subjectId}
                                            onChange={(e) =>
                                                setFieldValue("subjectId", e.target.value)
                                            }
                                            disabled={
                                                !values.boardId ||
                                                !values.classId ||
                                                loadingSubjects
                                            }
                                            className={`${selectClass} ${touched.subjectId && errors.subjectId
                                                ? "border-red-400 focus:ring-red-100"
                                                : ""
                                                }`}
                                        >
                                            <option value="">
                                                {loadingSubjects
                                                    ? "Loading subjects..."
                                                    : !values.boardId
                                                        ? "Select Board First"
                                                        : !values.classId
                                                            ? "Select Class First"
                                                            : "Select Subject"}
                                            </option>

                                            {subjects.map((subject) => (
                                                <option key={subject.id} value={subject.id}>
                                                    {subject.name}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-[#64748B]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {touched.subjectId && errors.subjectId && (
                                        <p className="text-sm text-red-500 font-medium px-1">
                                            {errors.subjectId}
                                        </p>
                                    )}
                                </div>

                            </div>

                            {/* Teaching Mode */}
                            <div>

                                <p className="text-sm font-semibold text-[#0F172A] mb-4">
                                    Teaching Mode
                                </p>

                                <div className="grid grid-cols-3 gap-4">

                                    {teachingModes.map((mode) => (

                                        <button
                                            key={mode}
                                            type="button"
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
                                            ${values.teachingMode === mode
                                                    ? 'bg-gradient-to-r from-[#16C47F] to-[#2563EB] text-white border-transparent shadow-lg'
                                                    : 'bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#2563EB] hover:bg-blue-50'
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

                                        <p className="mt-2 text-sm text-red-500 font-medium">
                                            {errors.teachingMode}
                                        </p>
                                    )}
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

                                    ${errors.resume && touched.resume
                                            ? 'border-red-300 bg-red-50/60'
                                            : 'border-[#CBD5E1] bg-white/70 hover:border-[#2563EB]/40'
                                        }
                                    `}
                                >

                                    {/* File Input */}
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"

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
                                                : 'bg-gradient-to-br from-[#16C47F] to-[#2563EB]'
                                            }
      `}
                                    >

                                        <Upload className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="mt-5 text-lg font-bold text-[#0F172A]">
                                        Upload Resume
                                    </h4>

                                    {/* Subtext */}
                                    <p className="mt-2 text-sm text-[#64748B]">
                                        PDF, DOC, DOCX • Max 5MB
                                    </p>

                                    {/* Success */}
                                    {values.resume && !errors.resume && (

                                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">

                                            <div className="w-2 h-2 rounded-full bg-[#16C47F]" />

                                            <p className="text-sm font-semibold text-[#16C47F]">
                                                {(values.resume as File).name}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Error */}
                                {errors.resume && touched.resume && (

                                    <div className="mt-3 flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-50 border border-red-200">

                                        <div className="w-2 h-2 rounded-full bg-red-500" />

                                        <p className="text-sm font-medium text-red-500">
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
                        from-[#16C47F]
                        to-[#2563EB]
                        text-white
                        font-semibold
                        shadow-[0_15px_50px_rgba(37,99,235,0.25)]
                        hover:scale-[1.01]
                        transition-all
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
                            <div className="rounded-2xl bg-white/70 border border-[#E2E8F0] px-5 py-4 text-sm text-[#64748B] flex items-center gap-3">

                                <ShieldCheck className="w-5 h-5 text-[#16C47F]" />

                                Your information is secure and only used for tutor onboarding.
                            </div>
                        </form>
                    </>

                )}

            </Formik>

        </>

    );


}