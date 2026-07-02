
import { useState } from 'react';

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
} from 'lucide-react';

import { assessmentValidation } from './validation/assessmentValidation';

import { submitAssessment } from './services/assessmentApi';
import { Button } from '../components/ui/button';

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

const subjects = [
    'Mathematics',
    'Science',
    'English',
    'Physics',
    'Chemistry',
    'Biology',
    'Coding',
    'Olympiad',
    'JEE',
    'NEET',
];

const classes = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
];

export default function BookAssessmentForm({

    setModalOpen,
    setModalType,
    setModalTitle,
    setModalMessage,

}: BookAssessmentFormProps) {

    const [loading, setLoading] =
        useState(false);

    return (

        <Formik

            initialValues={{
                first_name: '',
                last_name: '',
                mobile: '',
                email: '',
                board: '',
                class_name: '',
                school_name: '',
                subjects: [],
            }}

            validationSchema={
                assessmentValidation
            }

            onSubmit={async (values, { resetForm }) => {
                // PREVENT DOUBLE SUBMIT
                if (loading) return;
                try {

                    setLoading(true);

                    const payload = {
                        ...values,
                    };
                    await submitAssessment(payload);

                    setModalType('success');

                    setModalTitle(
                        'Assessment Booked Successfully'
                    );

                    setModalMessage(
                        'Thank you for booking a free assessment with UberTutor. Our academic advisors will connect with you within 24 hours.'
                    );

                    setModalOpen(true);

                    resetForm();

                } catch (error: any) {

                    console.error(error);

                    setModalType('error');

                    setModalTitle(
                        'Unable to Book Assessment'
                    );

                    setModalMessage(
                        error?.response?.data?.message ||
                        'Something went wrong. Please try again later.'
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

            }) => (

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5"
                >


                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Student First Name */}
                        <div>

                            <div className="relative">

                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />

                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name *"
                                    value={values.first_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`
                                    w-full
                                    h-14
                                    rounded-2xl
                                    border
                                    border-[rgba(15,23,42,0.08)]
                                    bg-white/80
                                    pl-12
                                    pr-4
                                    text-sm
                                    outline-none
                                    focus:border-[#2563EB]
                                    focus:ring-4
                                    focus:ring-[#2563EB]/10
                                    transition-all
                                ${errors.first_name &&
                                            touched.first_name
                                            ? 'border-red-400 focus-within:ring-red-100'
                                            : 'border-[#E2E8F0] focus-within:border-[#2563EB] focus-within:ring-blue-100'
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

                            <div className="relative">

                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />

                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name *"
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`
                                    w-full
                                    h-14
                                    rounded-2xl
                                    border
                                    border-[rgba(15,23,42,0.08)]
                                    bg-white/80
                                    pl-12
                                    pr-4
                                    text-sm
                                    outline-none
                                    focus:border-[#2563EB]
                                    focus:ring-4
                                    focus:ring-[#2563EB]/10
                                    transition-all
                                ${errors.last_name &&
                                            touched.last_name
                                            ? 'border-red-400 focus-within:ring-red-100'
                                            : 'border-[#E2E8F0] focus-within:border-[#2563EB] focus-within:ring-blue-100'
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
                    {/* Mobile */}
                    <div>

                        <div className="relative">

                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />

                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number *"
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
                                    w-full h-14 rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white/80 pl-12 pr-4 text-sm outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-al
                                        ${errors.mobile &&
                                        touched.mobile

                                        ? `
          border-red-400
          bg-red-50/40
          focus:ring-4
          focus:ring-red-100
          `

                                        : `
          border-[#E2E8F0]
          hover:border-[#2563EB]/30
          focus:border-[#2563EB]
          focus:ring-4
          focus:ring-[#2563EB]/10
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

                        <div className="relative">

                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`
                                w-full
                                h-14
                                rounded-2xl
                                border
                                border-[rgba(15,23,42,0.08)]
                                bg-white/80
                                pl-12
                                pr-4
                                text-sm
                                outline-none
                                focus:border-[#2563EB]
                                focus:ring-4
                                focus:ring-[#2563EB]/10
                                transition-all
                                ${errors.email &&
                                        touched.email
                                        ? 'border-red-400 focus-within:ring-red-100'
                                        : 'border-[#E2E8F0] focus-within:border-[#2563EB] focus-within:ring-blue-100'
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

                            <div className="relative">

                                {/* Icon */}
                                <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] z-10" />

                                {/* Select */}
                                <select
                                    name="board"
                                    value={values.board}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                    className={`
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        bg-white/80
                                        backdrop-blur-xl
                                        pl-12
                                        pr-12
                                        text-sm
                                        font-medium
                                        text-[#0F172A]
                                        outline-none
                                        appearance-none
                                        transition-all
                                        duration-300
                                        shadow-sm

                                    ${errors.board && touched.board

                                                                        ? `
                                        border-red-400
                                        bg-red-50/40
                                        focus:ring-4
                                        focus:ring-red-100
                                        `

                                                                        : `
                                        border-[#E2E8F0]
                                        hover:border-[#2563EB]/30
                                        focus:border-[#2563EB]
                                        focus:ring-4
                                        focus:ring-[#2563EB]/10
                                        `
                                                                    }
                                    `}
                                >

                                    <option value="">
                                        Select Board
                                    </option>

                                    <option value="CBSE">
                                        CBSE
                                    </option>

                                    <option value="ICSE">
                                        ICSE
                                    </option>

                                    <option value="State Board">
                                        State Board
                                    </option>

                                    <option value="IB">
                                        IB
                                    </option>

                                    <option value="IGCSE">
                                        IGCSE
                                    </option>

                                </select>

                                {/* Arrow */}
                                <svg
                                    className="
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    w-5
                                    h-5
                                    text-[#64748B]
                                    pointer-events-none
                                    "
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

                            <div className="relative">

                                {/* Icon */}
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] z-10" />

                            {/* Select */}
                            <select
                                name="class_name"
                                value={values.class_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`
                                    w-full
                                    h-14
                                    rounded-2xl
                                    border
                                    bg-white/80
                                    backdrop-blur-xl
                                    pl-12
                                    pr-12
                                    text-sm
                                    font-medium
                                    text-[#0F172A]
                                    outline-none
                                    appearance-none
                                    transition-all
                                    duration-300
                                    shadow-sm

                                    ${
                                        errors.class_name && touched.class_name
                                            ? `
                                                border-red-400
                                                bg-red-50/40
                                                focus:ring-4
                                                focus:ring-red-100
                                            `
                                            : `
                                                border-[#E2E8F0]
                                                hover:border-[#2563EB]/30
                                                focus:border-[#2563EB]
                                                focus:ring-4
                                                focus:ring-[#2563EB]/10
                                            `
                                    }
                                `}
                            >
                                <option value="">Select Class</option>

                                {classes.map((className) => (
                                    <option key={className} value={className}>
                                        Class {className}
                                    </option>
                                ))}
                            </select>

                                {/* Arrow */}
                                <svg
                                    className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        w-5
        h-5
        text-[#64748B]
        pointer-events-none
        "
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

                        <div className="relative">

                            <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />

                            <input
                                type="text"
                                name="school_name"
                                placeholder="School Name"
                                value={values.school_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`

                w-full
                h-14
                rounded-2xl
                border
                border-[rgba(15,23,42,0.08)]
                bg-white/80
                pl-12
                pr-4
                text-sm
                outline-none
                focus:border-[#2563EB]
                focus:ring-4
                focus:ring-[#2563EB]/10
                transition-all
                ${errors.school_name && touched.school_name
                                        ? 'border-red-400 focus-within:ring-red-100'
                                        : 'border-[#E2E8F0] focus-within:border-[#2563EB] focus-within:ring-blue-100'
                                    }
                `}
                            />
                        </div>
                    </div>

                    {/* Subjects */}
                    <div>

                        <div className="flex items-center gap-2 mb-4">

                            <BookOpen className="w-5 h-5 text-[#64748B]" />

                            <span className="text-sm font-semibold text-[#0F172A]">
                                Subject Need Help In
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3">

                            {subjects.map((subject) => (

                                <button
                                    key={subject}
                                    type="button"

                                    onClick={() => {

                                        if (
                                            values.subjects.includes(subject)
                                        ) {

                                            setFieldValue(
                                                'subjects',
                                                values.subjects.filter(
                                                    (s) => s !== subject
                                                )
                                            );

                                        } else {

                                            setFieldValue(
                                                'subjects',
                                                [
                                                    ...values.subjects,
                                                    subject,
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

                  ${values.subjects.includes(subject)

                                            ? `
                    bg-gradient-to-r
                    from-[#16C47F]
                    to-[#2563EB]
                    text-white
                    border-transparent
                    shadow-lg
                    `

                                            : `
                    bg-white
                    border-[rgba(15,23,42,0.08)]
                    hover:border-[#2563EB]
                    hover:text-[#2563EB]
                    `
                                        }
                  `}
                                >
                                    {subject}
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

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="
            group
            w-full
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-[#16C47F]
            to-[#2563EB]
            text-white
            font-semibold
            shadow-xl
            shadow-[#16C47F]/20
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
                            : 'Book Free Assessment'}

                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>

                    {/* Trust Chips */}
                    <div className="flex flex-wrap gap-3 pt-2">

                        {[
                            'No hidden charges',
                            'Free expert consultation',
                            'Trusted by 12,000+ parents',
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

                                <CheckCircle2 className="w-4 h-4 text-[#16C47F]" />

                                <span className="text-xs font-medium text-[#64748B]">
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
