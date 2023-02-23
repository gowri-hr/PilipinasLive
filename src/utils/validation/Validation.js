import * as yup from 'yup';
import String from '../../assets/strings/Strings';

export const ValidationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, `${String.first}`)
    .required(`${String.second}`),
});

export const ValidationSchemaSubLogin = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, `${String.first}`)
    .required(`${String.second}`),
  password: yup
    .string()
    .min(8, `${String.passwordMatch}`)
    .required(`${String.passwordRequired}`),
});

export const ValidationSchemaSignUp = yup.object().shape({
  password: yup
    .string()
    .min(8, `${String.passwordMatch}`)
    .required(`${String.passwordRequired}`),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], `${String.confirmPasswordMatch}`)
    .required(`${String.confirmPasswordRequired}`),
});
