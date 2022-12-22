import { Box, Input, Stack, VStack } from "@chakra-ui/react";
import React from "react";

import ImageSelector from "./ImageSelector";

function PersonalInformationForm({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
  return (
    <>
      <Box>
        <Stack
          className="headings"
          direction={["column-reverse", "row"]}
          justifyContent={"space-between"}
        >
          <Box
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"#212529"}
            lineHeight={"30px"}
          >
            Personal Information
          </Box>
          <Box
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"#868E96"}
            lineHeight={"30px"}
          >
            Ranger ID: UR8A5012C
          </Box>
        </Stack>
        <Stack direction={["column", "row"]} w={"100%"}>
          <Box w={["100%", "60%"]} h="auto">
            <label>First Name*</label>
            <Input
              placeholder="First name"
              type="text"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              marginTop={"1"}
              className={errors.lastName && touched.firstName && "input_error"}
            />
            {errors.firstName && touched.firstName ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.firstName}
              </div>
            ) : (
              ""
            )}
            <label htmlFor="">Last Name*</label>
            <Input
              placeholder=" Last name"
              type="text"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              marginTop={"1"}
              className={errors.lastName && touched.lastName && "input_error"}
            />
            {errors.lastName && touched.lastName ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.lastName}
              </div>
            ) : (
              ""
            )}
            <label htmlFor="">Email*</label>
            <Input
              placeholder="Email"
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              marginTop={"1"}
              className={errors.email && touched.email && "input_error"}
            />
            {errors.email && touched.email ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.email}
              </div>
            ) : (
              ""
            )}
            <label htmlFor="">Mobile Number.</label>
            <Input
              placeholder="Mobile Number."
              type="number"
              id="mobileNumber"
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              marginTop={"1"}
              className={
                errors.mobileNumber && touched.mobileNumber && "input_error"
              }
            />
            {errors.mobileNumber && touched.mobileNumber ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.mobileNumber}
              </div>
            ) : (
              ""
            )}
          </Box>

          <VStack
            w={["100%", "40%"]}
            h="72"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>Avatar</Box>
            <ImageSelector />
          </VStack>
        </Stack>
      </Box>
    </>
  );
}

export default PersonalInformationForm;
