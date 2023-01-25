import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "@/common/validators";
import { login } from "@/api/auth/authApi";

function SignInPage() {
  const classes = useStyles();

  const handleLogin = async () => {
    await login(values);
  };
  const navigate = useNavigate();

  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      handleLogin,
    });

  return (
    <>
      <Box className={classes.root}>
        <Box
          p={2}
          borderRadius={2}
          bgcolor="white.main"
          sx={{
            width: { xs: "343px", sm: "343px", md: "392px" },
            height: "auto",
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
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ mt: "24px" }}
            >
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
                label="Email"
                variant="outlined"
                placeholder="Enter your email address"
                error={errors.email && touched.email}
                helperText={touched.email ? errors.email : null}
                sx={{ mb: 2 }}
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
                placeholder="Enter your password"
                error={errors.password && touched.password}
                helperText={touched.password ? errors.password : null}
              />

              {/*    Forgot Password button */}
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                marginTop="10px"
              >
                <Link to="/forgetPassword">
                  <Button
                    style={{ textTransform: "none", padding: "0px" }}
                    color="gray600"
                    variant="text"
                  >
                    Forgot Password?
                  </Button>
                </Link>
              </Box>
              {/* Submit button */}
              <ButtonMain
                style={{
                  textTransform: "none",
                  marginTop: "16px",
                  color: "gray700.main",
                }}
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                onClick={handleLogin}
              >
                Submit
              </ButtonMain>
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{ gap: "0px", marginTop: "15px" }}
            >
              <Box style={{ textTransform: "none" }} color="gray600.main">
                Don’t have an account?
              </Box>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  style={{
                    textTransform: "none",
                    paddingLeft: "4px",
                  }}
                  color="secondary"
                  variant="text"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default SignInPage;
