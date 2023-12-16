import * as yup from 'yup';

const passwordRules = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required")
})

export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "I")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
})