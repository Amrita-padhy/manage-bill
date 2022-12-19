import React, { useState } from "react";

import {
  Box,
  Card,
  Input,
  Button,
  Heading,
  VStack,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  useDisclosure,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  Tooltip,
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";

import { useFormik, Form, Field } from "formik";
import { basicSchema } from "../../common/validators";
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";

function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  const onSubmit = () => {
    console.log(hi);
  };

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
      onSubmit,
    });
  console.log(errors);

  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        bgColor={"#E5E5E5"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card w={"330px"} bgColor={"white"} borderRadius={"2xl"} padding={"2"}>
          <VStack h={"auto"}>
            <Box>
              <Heading
                color={"gray.900"}
                lineHeight={"38px"}
                fontWeight={"600"}
                fontSize={"30px"}
                textAlign={"center"}
                marginTop={"1"}
              >
                Ranger Up!
              </Heading>
              <Heading
                color={"gray.600"}
                lineHeight={"24px"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Register to create your account.
              </Heading>
            </Box>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Stack>
                {/*  fast Name*/}
                <label htmlFor="">First Name*</label>
                <Input
                  placeholder="Enter your first name"
                  value={values.firstName}
                  type="text"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  h={"38px"}
                  className={
                    errors.lastName && touched.firstName && "input_error"
                  }
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
                {/* Last Name */}
                <label htmlFor="">Last Name*</label>
                <Input
                  placeholder="Enter your last name"
                  type="text"
                  value={values.lastName}
                  id="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"2"}
                  paddingX={"6"}
                  h={"38px"}
                  className={
                    errors.lastName && touched.lastName && "input_error"
                  }
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
                {/* Email */}
                <label htmlFor="">Email*</label>
                <Input
                  placeholder="Enter your email address"
                  value={values.email}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"2"}
                  paddingX={"6"}
                  h={"38px"}
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
                {/* Password */}
                <Stack direction="row" alignItems={"center"}>
                  <label htmlFor="">Password*</label>

                  <Tooltip
                    // position={"absolute"}
                    hasArrow
                    label="The password must be at least 8 characters and a mixture of both uppercase and lowercase letters, at least one number and at least one special character  (e.g., ! @ # ? ])."
                    bg="gray.300"
                    color="black"
                    fontSize={"12px"}
                    w={"250px"}
                    h={"98px"}
                    marginLeft={"16"}
                    paddingY={"1"}
                    paddingX={"3"}
                  >
                    <Icon
                      color={"gray.400"}
                      fontSize={"18px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <GrCircleInformation />
                    </Icon>
                  </Tooltip>
                </Stack>

                <Input
                  placeholder="Password"
                  value={values.password}
                  type="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"2"}
                  paddingX={"6"}
                  h={"38px"}
                  className={
                    errors.password && touched.password && "input_error"
                  }
                />
                {errors.password && touched.password ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.password}
                  </div>
                ) : (
                  ""
                )}
                {/* Confirm password */}
                <label htmlFor=""> Confirm Password*</label>
                <Input
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  type="password"
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"2"}
                  paddingX={"6"}
                  h={"38px"}
                  className={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    "input_error"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.confirmPassword}
                  </div>
                ) : (
                  ""
                )}
                <Button
                  disabled={
                    !values.firstName ||
                    !values.lastName ||
                    !values.email ||
                    !values.password ||
                    !values.confirmPassword ||
                    errors.firstName ||
                    errors.lastName ||
                    errors.email ||
                    errors.password ||
                    errors.confirmPassword
                  }
                  type="submit"
                  w={"300px"}
                  h={"44px"}
                  fontWeight={"medium"}
                  bgColor={"#FBE122"}
                  color={"gray.700"}
                >
                  Create account
                </Button>
              </Stack>
            </form>

            <Box display={"flex"} justifyContent={"center"}>
              <Button
                variant={"unstyled"}
                color={"gray.400"}
                fontWeight={"400"}
              >
                Already have an account ?
              </Button>
              <Button
                variant={"link"}
                color={"#1971C2"}
                fontSize={"14px"}
                fontWeight={"500"}
              >
                Log in
              </Button>
            </Box>
          </VStack>
        </Card>
      </Box>
    </>
  );
}

export default SingUp;
