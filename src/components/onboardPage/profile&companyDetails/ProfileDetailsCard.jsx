import { Box, Button, Stack } from "@mui/material";
import React from "react";
import PersonalInformationForm from "./PersonalInformationForm";

import CompanyInformationForm from "./CompanyInformationForm";
import MailingAddressForm from "./MailingAddressForm";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function ProfileDetailsCard({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
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
          <Box component="form" autoComplete="off" noValidate>
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
              onClick={handleSubmit}
              disabled={
                !values.firstName ||
                !values.lastName ||
                !values.email ||
                !values.mobileNumber ||
                !values.companyName ||
                !values.website ||
                !values.address ||
                !values.city ||
                !values.state ||
                !values.zipCode ||
                !values.mailingAddress ||
                !values.mailingCity ||
                !values.mailingState ||
                !values.mailingZipCode ||
                errors.firstName ||
                errors.lastName ||
                errors.email ||
                errors.mobileNumber ||
                errors.companyName ||
                errors.website ||
                errors.address ||
                errors.city ||
                errors.state ||
                errors.zipCode ||
                errors.mailingAddress ||
                errors.mailingCity ||
                errors.mailingState ||
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
