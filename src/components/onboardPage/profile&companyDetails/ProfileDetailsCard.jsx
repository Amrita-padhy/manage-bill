import React from "react";
import PersonalInformationForm from "../profile&companyDetails/PersonalInformationForm";
import CompanyInformationForm from "../profile&companyDetails/CompanyInformationForm";
import MailingAddressForm from "../profile&companyDetails/MailingAddressForm";
import { Box, Container, Heading, HStack, Stack } from "@chakra-ui/react";
function ProfileDetailsCard({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
  return (
    <Container
      maxW={["343px", "794px"]}
      bg={"white"}
      marginTop={["8", "6"]}
      marginX={["2", "0"]}
      borderRadius={"0.5rem"}
      paddingY={"6"}
      paddingX={"6"}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* personal info */}
        <PersonalInformationForm
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
        />

        {/* company info */}
        <CompanyInformationForm
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
        />
        {/* mailing address */}
        <MailingAddressForm
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
        />
      </form>
    </Container>
  );
}

export default ProfileDetailsCard;
