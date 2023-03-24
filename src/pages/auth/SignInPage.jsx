import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "@/common/validators";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";

import Typography from "@mui/material/Typography";

import { useAuth } from "../../context/authContext";

function SignInPage() {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarErrorMsg, setSnackbarErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login, logout } = useAuth();

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await login(values);
      console.log(result);
    } catch (error) {
      setIsLoading(false);
      setSnackbarOpen(true);
      console.log(error.message);
      if (
        error.message ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setSnackbarErrorMsg("Try a different user and password combination");
      } else setSnackbarErrorMsg("user-not-found");
    }
  };

  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      handleLogin,
    });

  const handleSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      {/* snackbar */}
      <Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbar}
          message={snackbarErrorMsg}
          action={action}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </Box>
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
                type="password"
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
                marginBottom={"10px"}
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
              <LoadingButton
                loading={isLoading}
                sx={{
                  py: "10px",
                  px: "30px",
                  textTransform: "none",
                  color: "gray700.main",
                  "&:hover": {
                    backgroundColor: "#FBE122",
                  },
                  width: { xs: "100%", sm: "100%" },
                }}
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                onClick={handleLogin}
                disabled={
                  !values.email ||
                  !values.password ||
                  errors.email ||
                  errors.password
                }
              >
                Submit
              </LoadingButton>
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
                  onClick={() => navigate("signup")}
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
