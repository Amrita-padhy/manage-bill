import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Formik, Form, Field, useFormik } from "formik";
import ImageSelector from "./ImageSelector";
import { Stack } from "@mui/material";

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
        {/* input section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%", p: 1 },
          }}
        >
          <TextField
            fullWidth
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
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            size="small"
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

          <TextField
            fullWidth
            size="small"
            bordercolor="gray200"
            required
            disabled
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

          <TextField
            fullWidth
            size="small"
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
            margin="normal"
          />
        </Box>

        {/*  ImageSelector */}
        <Stack width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <ImageSelector />
        </Stack>
      </Stack>
    </>
  );
}

export default PersonalInformationForm;
