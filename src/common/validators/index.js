import * as yup from "yup";

const passwordRules =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
const phoneRegExp = /^\d{10}$/;

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(30)
    .min(2, "Last name must be 1 characters at minimum")
    .required(" This field is required"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        " Password must contain at least one uppercase and one lowercase a number and a special character  ",
    })
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match ")
    .required("This field is required"),

  mobileNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10)
    .min(10)
    .required("This field is required"),
  companyName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid company name")
    .max(30)
    .min(3, "Company name must be at lest 3 characters at minimum"),

  website: yup.string().url(),
  address: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct address")
    .max(30)
    .min(5, "Address  must be at lest 5 characters at minimum")
    .required("This field is required"),
  mailingAddress: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct address")
    .max(30)
    .min(5, "Address  must be at lest 5 characters at minimum")
    .required("This field is required"),
  billingAddress: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct address")
    .max(30)
    .min(5, "Address  must be at lest 5 characters at minimum")
    .required("This field is required"),
  city: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct city name")
    .max(30)
    .min(2, "City name must be at lest 2 characters at minimum")
    .required("This field is required"),
  mailingCity: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct city name")
    .max(30)
    .min(2, "City name must be at lest 2 characters at minimum")
    .required("This field is required"),
  billingCity: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct city name")
    .max(30)
    .min(2, "City name must be at lest 2 characters at minimum")
    .required("This field is required"),
  state: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct state name")
    .max(30)
    .min(2, "State name must be at lest 2 characters at minimum")
    .required("This field is required"),
  mailingState: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct state name")
    .max(30)
    .min(2, "State name must be at lest 2 characters at minimum")
    .required("This field is required"),
  billingState: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct state name")
    .max(30)
    .min(2, "State name must be at lest 2 characters at minimum")
    .required("This field is required"),
  zipCode: yup
    .string()
    .max(6, "Zip code can not be exceed more than 6 characters")
    .min(6, "Zip code must be at lest 6 characters at minimum")
    .required("This field is required"),
  mailingZipCode: yup
    .string()
    .max(6, "Zip code can not be exceed more than 6 characters")
    .min(6, "Zip code must be at lest 6 characters at minimum")
    .required("This field is required"),
  billingZipCode: yup
    .string()
    .max(6, "Zip code can not be exceed more than 6 characters")
    .min(6, "Zip code must be at lest 6 characters at minimum")
    .required("This field is required"),
  PropertyName: yup
    .string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
    .max(30)
    .min(1, "Property name must be 1 characters at minimum")
    .required("This field is required"),
  PropertyType: yup
    .string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
    .max(30)
    .min(1, "Property name must be 1 characters at minimum")
    .required("This field is required"),
  PropertyID: yup
    .string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
    .max(30)
    .min(1, "Property name must be 1 characters at minimum")
    .required("This field is required"),
  NumberOfUnits: yup
    .string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
    .max(30)
    .min(1, "Property name must be 1 characters at minimum")
    .required("This field is required"),
  // address
  addPropertyAddress: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct address")
    .max(30)
    .min(5, "Address  must be at lest 5 characters at minimum")
    .required("This field is required"),
  addPropertyCity: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct city name")
    .max(30)
    .min(2, "City name must be at lest 2 characters at minimum")
    .required("This field is required"),
  addPropertyState: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter correct state name")
    .max(30)
    .min(2, "State name must be at lest 2 characters at minimum")
    .required("This field is required"),
  addPropertyZipCode: yup
    .string()
    .max(6, "Zip code can not be exceed more than 6 characters")
    .min(6, "Zip code must be at lest 6 characters at minimum")
    .required("This field is required"),

    
    website: yup.string().url(),
    address: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct address')
        .max(30)
        .min(5, "Address  must be at lest 5 characters at minimum")
        .required("This field is required"),
    mailingAddress: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct address')
        .max(30)
        .min(5, "Address  must be at lest 5 characters at minimum")
        .required("This field is required"),
    billingAddress: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct address')
        .max(30)
        .min(5, "Address  must be at lest 5 characters at minimum")
        .required("This field is required"),
    city: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct city name')
        .max(30)
        .min(2, "City name must be at lest 2 characters at minimum")
        .required("This field is required"),
    mailingCity: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct city name')
        .max(30)
        .min(2, "City name must be at lest 2 characters at minimum")
        .required("This field is required"),
    billingCity: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct city name')
        .max(30)
        .min(2, "City name must be at lest 2 characters at minimum")
        .required("This field is required"),
    state: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct state name')
        .max(30)
        .min(2, "State name must be at lest 2 characters at minimum")
        .required("This field is required"),
    mailingState: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct state name')
        .max(30)
        .min(2, "State name must be at lest 2 characters at minimum")
        .required("This field is required"),
    billingState: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct state name')
        .max(30)
        .min(2, "State name must be at lest 2 characters at minimum")
        .required("This field is required"),
    zipCode: yup
        .string()
        .max(6, "Zip code can not be exceed more than 6 characters")
        .min(6, "Zip code must be at lest 6 characters at minimum")
        .required("This field is required"),
    mailingZipCode: yup
        .string()
        .max(6, "Zip code can not be exceed more than 6 characters")
        .min(6, "Zip code must be at lest 6 characters at minimum")
        .required("This field is required"),
    billingZipCode: yup
        .string()
        .max(6, "Zip code can not be exceed more than 6 characters")
        .min(6, "Zip code must be at lest 6 characters at minimum")
        .required("This field is required"),
    PropertyName: yup
        .string()
        // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "Property name must be 1 characters at minimum")
        .required("This field is required"),
    PropertyType: yup
        .string()
        // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "Property name must be 1 characters at minimum")
        .required("This field is required"),
    PropertyID: yup
        .string()
        .max(4)
        .min(1, "Property name must be 1 characters at minimum")
        .required("This field is required"),
    NumberOfUnits: yup
        .string()
        // .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "Property name must be 1 characters at minimum")
        .required("This field is required"),
    // address
    addPropertyAddress: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct address')
        .max(30)
        .min(5, "Address  must be at lest 5 characters at minimum")
        .required("This field is required"),
    addPropertyCity: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct city name')
        .max(30)
        .min(2, "City name must be at lest 2 characters at minimum")
        .required("This field is required"),
    addPropertyState: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter correct state name')
        .max(30)
        .min(2, "State name must be at lest 2 characters at minimum")
        .required("This field is required"),
    addPropertyZipCode: yup
        .string()
        .max(6, "Zip code can not be exceed more than 6 characters")
        .min(6, "Zip code must be at lest 6 characters at minimum")
        .required("This field is required"),

    providerName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "First name must be 1 characters at minimum")
        .required("This field is required"),
    accountNickname: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "First name must be 1 characters at minimum")
        .required("This field is required"),
    ownerPortion: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(30)
        .min(1, "First name must be 1 characters at minimum")
        .required("This field is required"),
    billingCycle: yup.string().required("required"),
    billingBy: yup.string().required("required"),
    // 
    providerName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
  accountNickname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
  ownerPortion: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
  billingCycle: yup.string().required("required"),
  billingBy: yup.string().required("required"),
  unitNumbers: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
    NoOfOccupants: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(2, "First name must be 1 characters at minimum")
    .required("This field is required"),
    amount: yup
    .number()
    .required("This field is required"),
    moveInDate:yup
    .date()
    .required("This field is required"),
    moveOutDate:yup
    .date()
    .required("This field is required"),
    // primaryResident
    residentsId: yup
    .number()
    .required("This field is required"),
    residentsFirstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(30)
    .min(1, "First name must be 1 characters at minimum")
    .required("This field is required"),
    residentsLastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(30)
    .min(2, "Last name must be 2 characters at minimum")
    .required(" This field is required"),
    residentsEmail: yup
    .string()
    .email("please enter a valid email")
    .required("This field is required"),
    residentsMobileNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10)
    .min(10)
    .required("This field is required"),
})

  


