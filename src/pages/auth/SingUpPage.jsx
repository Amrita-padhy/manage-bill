import React from "react";

import {
  Box,
  Card,
  Input,
  Button,
  Heading,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import {} from "react-icons/ai";

import { useFormik, Form, Field } from "formik";
import { basicSchema } from "../../common/validators";

function SingUp() {
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
                {/*  Last Name*/}
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
                    errors.firstName && touched.firstName ? "input_error" : ""
                  }
                />
                {errors.firstName && touched.firstName ? (
                  <div
                    style={{
                      textAlign: "end",
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
                    errors.firstName && touched.lastName ? "input_error" : ""
                  }
                />
                {errors.lastName && touched.lastName ? (
                  <div
                    style={{
                      textAlign: "end",
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
                  className={
                    errors.firstName && touched.email ? "input_error" : ""
                  }
                />
                {errors.email && touched.email ? (
                  <div
                    style={{
                      textAlign: "end",
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
                <label htmlFor="">Password*</label>
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
                    errors.password && touched.password ? "input_error" : ""
                  }
                />
                {errors.password && touched.password ? (
                  <div
                    style={{
                      textAlign: "end",
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
                    errors.firstName && touched.confirmPassword
                      ? "input_error"
                      : ""
                  }
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div
                    style={{
                      textAlign: "end",
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
                    !values.confirmPassword
                  }
                  type="submit"
                  w={"300px"}
                  h={"44px"}
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
