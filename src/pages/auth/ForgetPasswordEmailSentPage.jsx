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
                  Check Your Email
                </Box>
                <Box
                  color="gray600.main"
                  fontSize="16px"
                  lineheight="24px"
                  fontWeight="400"
                  textAlign={"center"}
                >
                  We sent a password reset link to
                  <Box color="gray700.main" fontWeight={"700"}>
                    olivia@project10K.com
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* subheading */}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ marginTop: "24px" }}
          >
            <Box style={{ textTransform: "none" }} color="gray600.main">
              Didn’t receive the mail?
            </Box>

            <Box>
              <Button
                style={{
                  textTransform: "none",
                  paddingLeft: "4px",
                }}
                color="secondary"
                variant="text"
                // onClick={() => navigate("/signup")}
              >
                Click to resend
              </Button>
            </Box>
          </Stack>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              style={{
                textTransform: "none",
              }}
              color="gray900"
              variant="text"
              sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "20px" }}
              startIcon={<KeyboardBackspaceIcon />}
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ForgetPasswordEmailSentPage;
