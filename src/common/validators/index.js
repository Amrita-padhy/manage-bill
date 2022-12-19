import * as yup from 'yup'

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

export const basicSchema = yup.object().shape({

    firstName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1)
        .required("This field is required"),
    lastName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid last name')
        .max(30)
        .min(1)
        .required(" This field is required"),
    email: yup.string().email('please enter a valid email').required("This field is required"),
    password: yup.string().min(5).matches(passwordRules, {
        message: " Password must contain at least one uppercase and one lowercase a number and a special character  "
    }).required("This field is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "password must match ").required("This field is required")
})