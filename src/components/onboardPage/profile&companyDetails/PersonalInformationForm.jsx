import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Formik, Form, Field, useFormik } from "formik";

import { Grid, Stack } from "@mui/material";

import { Button, TextField } from "@material-ui/core";

function PersonalInformationForm({
  values,
  handleChange,
  touched,
  errors,
  handleBlur,
}) {
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
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems="center"
        marginTop="24px"
      >
        {/* input section */}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              color="gray600"
              bordercolor="gray200"
              required
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              label="First Name"
              variant="outlined"
              placeholder="First Name"
              error={errors.firstName && touched.firstName}
              helperText={touched.firstName ? errors.firstName : null}
              size="medium"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="medium"
              color="gray600"
              bordercolor="gray200"
              required
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Last Name"
              variant="outlined"
              placeholder="Last Name"
              error={errors.lastName && touched.lastName}
              helperText={touched.lastName ? errors.lastName : null}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              required
              size="medium"
              color="gray600"
              borderColor="gray200"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              variant="outlined"
              placeholder="Email"
              error={errors.email && touched.email}
              helperText={touched.email ? errors.email : null}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              inputProps={{ maxLength: 10 }}
              // type="number"
              fullWidth
              size="medium"
              color="gray600"
              bordercolor="gray200"
              id="mobileNumber"
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Mobile No."
              variant="outlined"
              placeholder="Mobile No."
              error={errors.mobileNumber && touched.mobileNumber}
              helperText={touched.mobileNumber ? errors.mobileNumber : null}
              margin="normal"
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default PersonalInformationForm;
