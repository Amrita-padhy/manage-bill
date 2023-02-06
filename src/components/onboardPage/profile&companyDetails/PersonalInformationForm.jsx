import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Formik, Form, Field, useFormik } from "formik";
import ImageSelector from "./ImageSelector";
import { Stack } from "@mui/material";

import { Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
};
const onSubmit = (initialValues) => {
  console.log(initialValues);

  alert(JSON.stringify(initialValues, null, 2));
};
const savedValue = {
  firstName: "minu",
  lastName: "minu",
  email: "minu@gmail.com",
};
function PersonalInformationForm({}) {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [formValues, setFormValues] = useState(null);
  const { handleChange, handleBlur } = useFormik({
    initialValues,
    onSubmit,
  });

  // console.log(values);
  return (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent={"space-between"}
        alignitems="center"
      >
        <Box
          color="gray900.main"
          fontSize="20px"
          fontWeight="700"
          lineHeight={"30px"}
        >
          Personal Information
        </Box>
        <Box
          color="gray600.main"
          fontSize={"20px"}
          fontWeight="700"
          lineHeight={"30px"}
        >
          Ranger ID: UR8A5012C
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems="center"
        marginTop="24px"
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%", p: 1, mt: 12 },
          }}
        >
          <Formik
            initialValues={formValues || initialValues}
            onSubmit={onSubmit}
            enableReinitialize
          >
            <Form>
              <Field
                component={TextField}
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={initialValues.firstName}
                label=" First Name"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                placeholder="first Name"
              />

              <Field
                component={TextField}
                id="lastName"
                name="lastName"
                type="text"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={lastName}
                label="Last Name"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
              />
              <Field
                component={TextField}
                id="email"
                name="email"
                type="email"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={email}
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
              />
              <Field
                component={TextField}
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={mobileNumber}
                label="mobile Number"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
              />
              <button type="button" onClick={() => setFormValues(savedValue)}>
                load data
              </button>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </Box>

        {/* input section */}
        {/* <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%", p: 1 },
          }}
        >
         
          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            required
            id="firstName"
            value="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            label="First Name"
            variant="outlined"
            placeholder="First Name"
            error={errors.firstName && touched.firstName}
            helperText={touched.firstName ? errors.firstName : null}
            sx={{ mb: 2 }}
          />
         
          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            required
            id="lastName"
            value="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Last Name"
            variant="outlined"
            placeholder="First Name"
            error={errors.lastName && touched.firstName}
            helperText={touched.firstName ? errors.firstName : null}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            required
            id="lastName"
            value={lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Last Name"
            variant="outlined"
            placeholder="Last Name"
            error={errors.lastName && touched.lastName}
            helperText={touched.lastName ? errors.lastName : null}
            sx={{ mb: 2 }}
          />
       

          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            required
            id="email"
            disabled
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            variant="outlined"
            placeholder="Email"
            error={errors.email && touched.email}
            helperText={touched.email ? errors.email : null}
            sx={{ mb: 2 }}
          />
         

          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            id="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            label="mobile No."
            variant="outlined"
            placeholder="mobile No."
            error={errors.mobileNumber && touched.mobileNumber}
            helperText={touched.mobileNumber ? errors.mobileNumber : null}
            sx={{ mb: 2 }}
          />
        </Box> */}
        {/*  ImageSelector */}
        <Stack width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <ImageSelector />
        </Stack>
      </Stack>
    </>
  );
}

export default PersonalInformationForm;
