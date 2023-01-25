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
        password: "",
        confirmNewPassword: "",
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
            height: "auto",
          }}
        >
          <Stack spacing={2}>
            <Box mt="84px">
              {/* heading */}
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  color="gray900.main"
                  fontSize="30px"
                  lineheight="38px"
                  fontWeight="600"
                >
                  Set New Password
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                  textAlign="center"
                >
                  Your new password must be different to previously used
                  passwords.
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* form */}
          <Box component="form" noValidate autoComplete="off" mt="32px">
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
              placeholder="Create new password"
              error={errors.password && touched.password}
              helperText={touched.password ? errors.password : null}
              sx={{ mb: "16px" }}
            />
            <TextField
              fullWidth
              size="small"
              color="gray600"
              bordercolor="gray200"
              required
              id="confirmNewPassword"
              value={values.confirmNewPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Confirm Password"
              variant="outlined"
              placeholder="Confirm new password"
              error={errors.confirmNewPassword && touched.confirmNewPassword}
              helperText={
                touched.confirmNewPassword ? errors.confirmNewPassword : null
              }
            />

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
              disabled={
                !values.email ||
                !values.password ||
                errors.email ||
                errors.password
              }
            >
              Reset Password
            </ButtonMain>
          </Box>
          <Box display={"flex"} justifyContent={"center"} sx={{ mt: "16px" }}>
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
        </Box>
      </Box>
    </>
  );
}

export default SignInPage;
