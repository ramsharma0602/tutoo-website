import * as Yup from 'yup';

export const assessmentValidation =
  Yup.object({

    first_name: Yup.string()
      .required('First name is required'),

    last_name: Yup.string()
      .required('Last name is required'),

    /* Booklet page 13 lists Parent Name as its own field. The mobile number
       already belongs to the parent, so knowing who we are calling matters. */
    parent_name: Yup.string()
      .required("Parent's name is required"),

    mobile: Yup.string()
      .matches(
        /^[6-9]\d{9}$/,
        'Enter valid 10 digit mobile number'
      )
      .required('Mobile number is required'),

    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),

    board: Yup.string()
      .required('Please select board'),

    class_name: Yup.string()
      .required('Please select class'),

    school_name: Yup.string(),

    mode: Yup.string()
      .oneOf(['home', 'online'], 'Please select tuition mode')
      .required('Please select tuition mode'),

    city: Yup.string().when('mode', {
      is: 'home',
      then: (schema) => schema.required('Please select your city'),
      otherwise: (schema) => schema,
    }),

    area: Yup.string().when('mode', {
      is: 'home',
      then: (schema) =>
        schema.required('Area or pincode is required for home tuition'),
      otherwise: (schema) => schema,
    }),

    preferred_timing: Yup.array(),

    /* Optional. Collected privately to help the team match — it is never
       rendered on any public page and no fee is advertised anywhere. */
    budget: Yup.string(),

    /* Optional free text. Also the pressure valve for anything we do not yet
       list as a subject or category — what parents type here tells us what to
       build next. */
    requirement_note: Yup.string()
      .max(500, 'Please keep this under 500 characters'),

    subjects: Yup.array()
      .min(1, 'Select at least one subject'),
  });