import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../../common/validators";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SignInPage() {
  const classes = useStyles();
  const onSubmit = () => {
    console.log(hi);
  };
  const navigate = useNavigate();
  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  console.log(values);
  // console.log(errors);
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
                  Forgot Password?
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                  textAlign={"center"}
                >
                  No worries, we’ll send you reset instructions.
                </Box>
              </Stack>
            </Box>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ mt: "16px" }}
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
              />

              {/* Reset Password button */}
              <ButtonMain
                style={{
                  textTransform: "none",
                  marginTop: "24px",
                  color: "gray700.main",
                }}
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                disabled={!values.email || errors.email}
              >
                Reset Password
              </ButtonMain>
            </Box>

            <Box display={"flex"} justifyContent={"center"}>
              <Button
                style={{
                  textTransform: "none",
                }}
                color="gray900"
                variant="text"
                startIcon={<KeyboardBackspaceIcon />}
                onClick={() => navigate("/")}
              >
                Back to login
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default SignInPage;
