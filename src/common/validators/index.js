import * as yup from 'yup'

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

export const basicSchema = yup.object().shape({

    firstName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(4)
        .required("Please enter valid name"),
    lastName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required(),
    email: yup.string().email('please Enter a valid email').required("Required"),
    password: yup.string().min(5).matches(passwordRules, {
        message: "Please Create a strong Password"
    }).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "password must match ").required("Required")
})