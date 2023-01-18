import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, MyLabel, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "../../common/validators";

function SignInPage() {
  const classes = useStyles();
  const onSubmit = () => {
    console.log(hi);
  };

  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  console.log(values);
  console.log(errors);
  return (
    <>
      <Box className={classes.root}>
        <Box
          p={2}
          borderRadius={2}
          bgcolor="white.main"
          sx={{
            width: { xs: "343px", sm: "343px", md: "392px" },
            height: "470px",
          }}
        >
          <Stack spacing={2}>
            <Box mt="84px">
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  color="gray900.main"
                  fontSize="30px"
                  lineheight="38px"
                  fontWeight="600"
                >
                  Log In!
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                >
                  Log in with your registered email.
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
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="email"
                variant="outlined"
                placeholder="Enter your email address"
                error={errors.email}
                helperText={errors.email}
                sx={{ mb: 1 }}
              />
              <TextField
                fullWidth
                size="small"
                color="gray600"
                bordercolor="gray200"
                required
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                variant="outlined"
                placeholder="Enter your email address"
                error={errors.password}
                helperText={errors.password}
              />

              {/*    Forgot Password button */}
              <Box display={"flex"} justifyContent={"flex-end"}>
                <Link to="/" style={{ textTransform: "none" }}>
                  <Button
                    style={{ textTransform: "none" }}
                    color="gray600"
                    variant="text"
                  >
                    Forgot Password?
                  </Button>
                </Link>
              </Box>
              {/* Submit button */}
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
                Submit
              </ButtonMain>
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{ gap: 0, marginTop: "15px" }}
            >
              <Box style={{ textTransform: "none" }} color="gray600.main">
                Don’t have an account?
              </Box>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Link
                  to="/signup"
                  style={{ textTransform: "none", textDecoration: "none" }}
                >
                  <Button
                    style={{ textTransform: "none" }}
                    color="secondary"
                    variant="text"
                  >
                    Sign Up
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

export default SignInPage;
