import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonMain, useStyles } from "../../styles/styles";
import { Stack, TextField } from "@mui/material";
import { useFormik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function ForgetPasswordEmailSentPage() {
  const navigate = useNavigate();
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
            height: "auto",
          }}
        >
          {/* heading */}
          <Stack spacing={2}>
            <Box mt="84px">
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  color="gray900.main"
                  fontSize="30px"
                  lineheight="38px"
                  fontWeight="600"
                >
                  Password Reset
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                  textAlign={"center"}
                >
                  Your password has been successfully reset. Click on CONTINUE
                  to login back.
                </Box>
              </Stack>
            </Box>
          </Stack>

          <ButtonMain
            style={{
              textTransform: "none",
              marginTop: "30px",
              marginBottom: "10px",
              color: "gray700.main",
            }}
            variant="contained"
            fullWidth
            disableElevation
            color="primary"
          >
            Continue
          </ButtonMain>
        </Box>
      </Box>
    </>
  );
}

export default ForgetPasswordEmailSentPage;
