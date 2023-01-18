import React, { useState } from "react";

import { GrCircleInformation } from "react-icons/gr";

// import { useStyles } from "../../styles/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, MyLabel, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "../../common/validators";
import { lineHeight } from "@mui/system";

function SingUp() {
  const onSubmit = () => {
    console.log(hi);
  };

  // const navigate = useNavigate();

  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box
          p={2}
          borderRadius={2}
          bgcolor="white.main"
          sx={{
            width: { xs: "343px", sm: "343px", md: "392px" },
            height: "680px",
          }}
        >
          <Stack spacing={2}>
            <Box mt="80px">
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  color="gray900.main"
                  fontSize="30px"
                  lineheight="38px"
                  fontWeight="600"
                >
                  Ranger Up!
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                >
                  Register to create your account.
                </Box>
              </Stack>
            </Box>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                label="First Name"
                variant="outlined"
                placeholder="Enter your email address"
                error={errors.firstName}
                helperText={errors.firstName}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                type="text"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Last Name"
                variant="outlined"
                placeholder="Enter your last name"
                error={errors.lastName}
                helperText={errors.lastName}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="email"
                variant="outlined"
                placeholder="Enter your email address"
                error={errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                variant="outlined"
                placeholder="Create new password"
                error={errors.password}
                helperText={errors.password}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Confirm Password"
                variant="outlined"
                placeholder="Confirm password"
                error={errors.confirmPassword}
                helperText={errors.confirmPassword}
              />

              {/* Create account button */}
              <ButtonMain
                style={{ textTransform: "none", marginTop: "15px" }}
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                disabled={
                  !values.email ||
                  !values.password ||
                  errors.email ||
                  errors.password
                }
              >
                Create account
              </ButtonMain>
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{ gap: 0, marginTop: "15px" }}
            >
              <Box style={{ textTransform: "none" }} color="gray600.main">
                Already have an account?
              </Box>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Link
                  to="/"
                  style={{
                    textTransform: "none",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    style={{
                      textTransform: "none",
                      lineHeight: "20px",
                    }}
                    color="secondary"
                    variant="text"
                  >
                    Log in
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default SingUp;
