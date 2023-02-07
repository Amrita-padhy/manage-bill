import { Box, Button, Stack } from "@mui/material";
import React from "react";
import PersonalInformationForm from "./PersonalInformationForm";
import CompanyInformationForm from "./CompanyInformationForm";
import MailingAddressForm from "./MailingAddressForm";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

function ProfileDetailsCard({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
  loading,
  setValue,
}) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <Box
        width="100vw"
        height={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignitems={"center"}
      >
        <Box
          width="800px"
          bgcolor="white.main"
          height={"auto"}
          padding="24px"
          borderRadius="8px"
        >
          <Box autoComplete="off" noValidate>
            {/* personal info */}
            <PersonalInformationForm
              values={values}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
            />

            {/* CompanyInformationForm  */}
            <CompanyInformationForm
              values={values}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
            />
            {/* MailingAddressForm  */}
            <MailingAddressForm
              values={values}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
            />
          </Box>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            justifyContent={"space-between"}
            marginTop="10px"
            spacing={2}
          >
            <Button
              variant="outlined"
              color="gray700"
              style={{ textTransform: "none" }}
              onClick={() => logout()}
            >
              Sign Out
            </Button>
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              bgcolor="primary"
              disableElevation
              sx={{
                py: "10px",
                px: "30px",
                color: "gray700.main",
                "&:hover": {
                  backgroundColor: "#FBE122",
                },
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => setValue(1)}
              disabled={
                !values.firstName ||
                errors.firstName ||
                !values.lastName ||
                errors.lastName ||
                !values.email ||
                errors.email ||
                !values.address ||
                errors.address ||
                !values.city ||
                errors.city ||
                !values.state ||
                errors.state ||
                !values.zipCode ||
                errors.zipCode ||
                !values.mailingAddress ||
                errors.mailingAddress ||
                !values.mailingCity ||
                errors.mailingCity ||
                !values.mailingState ||
                errors.mailingState ||
                !values.mailingZipCode ||
                errors.mailingZipCode
              }
            >
              NEXT: Plan & Payment
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default ProfileDetailsCard;
