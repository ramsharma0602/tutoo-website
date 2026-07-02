import * as Yup from 'yup';

export const assessmentValidation =
  Yup.object({

    first_name: Yup.string()
      .required('First name is required'),

    last_name: Yup.string()
      .required('Last name is required'),

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

    subjects: Yup.array()
      .min(1, 'Select at least one subject'),
  });