import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Await, useNavigate } from "react-router-dom";
import { basicSchema } from "@/common/validators";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useQuery, useMutation } from "react-query";
import { register } from "@/api/auth/authApi";
import { useState } from "react";
// import { useAuth } from "../../context/authContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
function SingUp() {
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarErrorMsg, setSnackbarErrorMsg] = useState("");

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleRegister = async () => {
    const { confirmPassword, ...rest } = values;

    const result = await register(rest);
    if (!result.response) {
      // TODO show error message as a toast
      // snackbar
      setSnackbarOpen(true);
      setSnackbarErrorMsg(result.message);
      return;
    }

    console.log(result);

    // TODO show user registration and navigate user to login

    // modal
    handleModalOpen();
    setOpenModal(true);
  };

  const navigate = useNavigate();

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
      handleRegister,
    });

  const classes = useStyles();
  const handleClose = (event, reason) => {
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
        onClick={handleClose}
        bgcolor="white.main"
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
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarErrorMsg}
          action={action}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          sx={{
            width: { xs: "250px", sm: "300px" },
            height: "auto",
            padding: "10px",
          }}
        />
      </Box>

      {/* modal */}
      <div>
        <Modal
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              textAlign="center"
              color="gray900.main"
            >
              User registration successfully
            </Typography>
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
              onClick={() => navigate("/")}
            >
              Log in
            </ButtonMain>
          </Box>
        </Modal>
      </div>
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
            <Box mt="50px">
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
                size="medium"
                margin="normal"
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
                error={errors.firstName && touched.firstName}
                helperText={touched.firstName ? errors.firstName : null}
              />
              <TextField
                fullWidth
                size="medium"
                margin="normal"
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
                error={errors.lastName && touched.lastName}
                helperText={touched.lastName ? errors.lastName : null}
              />
              <TextField
                fullWidth
                size="medium"
                margin="normal"
                color="gray600"
                bordercolor="gray200"
                required
                type="email"
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
              <TextField
                fullWidth
                size="medium"
                margin="normal"
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
                error={errors.password && touched.password}
                helperText={touched.password ? errors.password : null}
              />
              <TextField
                fullWidth
                size="medium"
                margin="normal"
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
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={
                  touched.confirmPassword ? errors.confirmPassword : null
                }
              />

              {/* Create account button */}
              <ButtonMain
                type="submit"
                style={{
                  textTransform: "none",
                  marginTop: "16px",
                  color: "gray700.main",
                }}
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                onClick={handleRegister}
                disabled={
                  !values.firstName ||
                  !values.lastName ||
                  !values.email ||
                  !values.password ||
                  errors.firstName ||
                  errors.lastName ||
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
              style={{ gap: "0px", marginTop: "16px" }}
            >
              <Box style={{ textTransform: "none" }} color="gray600.main">
                Already have an account?
              </Box>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  style={{
                    textTransform: "none",
                    paddingLeft: "0px",
                  }}
                  color="secondary"
                  variant="text"
                  onClick={() => navigate("/")}
                >
                  Log in
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default SingUp;
