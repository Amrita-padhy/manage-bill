import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  // ,
} from "@chakra-ui/react";

import { AiOutlineDown } from "react-icons/ai";
import CompanyInformationForm from "../components/CompanyInformationForm";
import PersonalInformationForm from "../components/PersonalInformationForm";
import MailingAddressForm from "../components/MailingAddressForm";
import { useFormik } from "formik";
import { basicSchema } from "../common/validators";

function OnBoardPage() {
  const onSubmit = () => {
    console.log(hi);
  };
  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
        website: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        mailingAddress: "",
        mailingCity: "",
        mailingState: "",
        mailingZipCode: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <Box
      w={"full"}
      h={"auto"}
      bgColor={"#E5E5E5"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Stack
        className="navBar"
        w={"full"}
        h={"80px"}
        bgColor={"gray.700"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading
          color={"white"}
          fontWeight={"500"}
          fontSize={"24px"}
          lineHeight={"24px"}
        >
          Create Your Account
        </Heading>
      </Stack>
      <Box
        className="headingBar"
        w={"full"}
        h={"66px"}
        bgColor={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          w={"794px"}
          h={"66px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          flexDirection={["column", "column", "row"]}
        >
          <Box
            w={"397px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5rem"}
          >
            <HStack>
              <Box
                fontSize={"16px"}
                lineHeight={"18px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                bgColor={"facebook.300"}
                w={"8px"}
                h={"18px"}
                p={"3"}
                borderRadius={"full"}
              >
                1
              </Box>
              <Heading
                color={"gray.700"}
                fontWeight={"500"}
                fontSize={"20px"}
                lineHeight={"24px"}
                marginRight={"28"}
              >
                Profile & Company
              </Heading>
            </HStack>
            <Box display={["flex", "none"]}>
              <AiOutlineDown />
            </Box>
          </Box>

          <HStack display={["none", "none", "flex"]}>
            <Box
              fontSize={"16px"}
              lineHeight={"18px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bgColor={"facebook.300"}
              w={"8px"}
              h={"18px"}
              p={"3"}
              borderRadius={"full"}
            >
              2
            </Box>
            <Heading
              color={"gray.700"}
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"24px"}
            >
              Plan & Payment
            </Heading>
          </HStack>
        </Box>
      </Box>
      <Container
        maxW={["343px", "794px"]}
        bg={"white"}
        marginTop={["8", "6"]}
        marginX={["4", "0"]}
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
    </Box>
  );
}

export default OnBoardPage;
