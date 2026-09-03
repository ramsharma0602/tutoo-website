import * as Yup from 'yup';

/* ─────────────────────────────────────────────────────────────────────────
   TUTOR APPLICATION — VALIDATION

   ── THREE BUGS THIS FILE USED TO HAVE ───────────────────────────────────
   1. boardId, classId and subjectId had NO rule at all, while the form
      rendered error slots for them. Those slots were unreachable and the
      real consequence was worse than dead code: an application could be
      submitted with no subject, no class and no board, so the CRM received
      a tutor with no idea what they teach — the single most important thing
      on the form.

   2. availableDays and availableSlots had no rule either. They post to the
      CRM as comma-joined strings, so an empty selection arrived as "" and
      looked identical to a field the backend had failed to read.

   3. The resume format check tested `value.type` against three exact MIME
      strings. Browsers routinely report a legacy .doc — and .docx on some
      Windows and Linux configurations — as `application/octet-stream`, so a
      file the OS picker had just accepted was rejected with "Only PDF, DOC,
      DOCX allowed". A qualified applicant hit a wall on the last field of
      the form with no way to get past it. It now accepts a file whose MIME
      type OR whose extension matches, which is the combination that
      actually works across browsers.
───────────────────────────────────────────────────────────────────────── */

const RESUME_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const RESUME_EXT = /\.(pdf|doc|docx)$/i;

export const tutorApplicationValidation = Yup.object({
  fullName: Yup.string()
    .required('Full name is required')
    .min(3, 'Minimum 3 characters'),

  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number'),

  email: Yup.string().required('Email is required').email('Enter valid email'),

  city: Yup.string().required('City is required'),

  qualification: Yup.string().required('Qualification is required'),

  experience: Yup.string().required('Experience is required'),

  /* What they teach. Arrays now — the form is a checkbox group per axis, so
     a tutor can say Maths AND Science, for Class 8 AND Class 10, across CBSE
     AND SSC. Previously these were single ids with error slots the schema
     had no rules for, so an application could be submitted with no subject
     at all. */
  boardIds: Yup.array()
    .of(Yup.number())
    .min(1, 'Select at least one board you teach'),

  classIds: Yup.array()
    .of(Yup.number())
    .min(1, 'Select at least one class you teach'),

  subjectIds: Yup.array()
    .of(Yup.number())
    .min(1, 'Select at least one subject you teach'),

  teachingMode: Yup.string().required('Please select teaching mode'),

  availableDays: Yup.array()
    .of(Yup.string())
    .min(1, 'Pick at least one day you can teach'),

  availableSlots: Yup.array()
    .of(Yup.string())
    .min(1, 'Pick at least one time slot'),

  about: Yup.string().nullable(),

  /* ── Resume ─────────────────────────────────────────────────────────── */
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileSize', 'File size must be less than 5MB', (value: any) => {
      if (!value) return false;
      return value.size <= 5 * 1024 * 1024;
    })
    .test(
      'fileFormat',
      'Upload a PDF, DOC or DOCX file',
      (value: any) => {
        if (!value) return false;
        /* MIME *or* extension. See note 3 above — MIME alone rejects valid
           files, extension alone is trivially spoofed, so accept either and
           let the server be the authority on the actual contents. */
        return RESUME_MIME.includes(value.type) || RESUME_EXT.test(value.name || '');
      }
    ),
});
