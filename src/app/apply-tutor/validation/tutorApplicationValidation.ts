import * as Yup from 'yup';

export const tutorApplicationValidation = Yup.object({

    fullName: Yup.string()
        .required('Full name is required')
        .min(3, 'Minimum 3 characters'),

    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(
            /^[6-9]\d{9}$/,
            'Enter valid 10-digit mobile number'
        ),

    email: Yup.string()
        .required('Email is required')
        .email('Enter valid email'),

    city: Yup.string()
        .required('City is required'),

    qualification: Yup.string()
        .required('Qualification is required'),

    experience: Yup.string()
        .required('Experience is required'),

    teachingMode: Yup.string()
        .required('Please select teaching mode'),

    about: Yup.string()
        .nullable(),

    /* -------------------------------------------------------------------------- */
    /*                                 FILE VALIDATION                            */
    /* -------------------------------------------------------------------------- */

    resume: Yup.mixed()
        .required('Resume is required')
        .test(
            'fileSize',
            'File size must be less than 5MB',
            (value: any) => {

                if (!value) return false;

                return value.size <= 5 * 1024 * 1024;
            }
        )
        .test(
            'fileFormat',
            'Only PDF, DOC, DOCX allowed',
            (value: any) => {

                if (!value) return false;

                return [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                ].includes(value.type);
            }
        ),

});