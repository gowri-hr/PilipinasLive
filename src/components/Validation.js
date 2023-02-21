import * as yup from 'yup';

export const ValidationSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        'Email must have a number and special character.',
      )
      .required('Email is required')
  });

  export const ValidationSchemaSubLogin = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        'Email must have a number and special character.',
      )
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Enter password'),
  });