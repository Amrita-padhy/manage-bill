import React, { useState } from "react";

import {
  Box,
  Card,
  Input,
  Button,
  Heading,
  VStack,
  Stack,
  Icon,
  useDisclosure,
  Tooltip,
  FormLabel,
} from "@chakra-ui/react";

import { useFormik, Form, Field } from "formik";
import { basicSchema } from "../../common/validators";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [signInValues, setSignInValues] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInValues(values);
  };

  const { values, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    // onSubmit,
  });
  console.log(signInValues);
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
        <Card
          w={["343px", "349px"]}
          h={"470px"}
          bgColor={"white"}
          borderRadius={"8px"}
          paddingX={"7"}
        >
          <VStack h={"auto"}>
            <Box>
              <Heading
                color={"gray.900"}
                lineHeight={"38px"}
                fontWeight={"600"}
                fontSize={"30px"}
                textAlign={"center"}
                marginTop={"10"}
              >
                Log In!
              </Heading>
              <Heading
                color={"gray.600"}
                lineHeight={"24px"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Log in with your registered email.
              </Heading>
            </Box>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Stack>
                {/* Email */}

                <FormLabel color={"#495057"}>Email*</FormLabel>
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

                <FormLabel color={"#495057"}>Password*</FormLabel>

                <Input
                  placeholder="Create new password"
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
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Button
                    variant={"link"}
                    fontSize={"14px"}
                    color={"#868E96"}
                    fontWeight={"light"}
                    padding={"2"}
                    onClick={() => {
                      navigate("/forget-password-page");
                    }}
                  >
                    Forgot Password?
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    disabled={
                      !values.email ||
                      !values.password ||
                      errors.email ||
                      errors.password
                    }
                    type="submit"
                    w={["313px", "319px"]}
                    h={"44px"}
                    fontWeight={"medium"}
                    bgColor={"#FBE122"}
                    color={"gray.700"}
                    marginTop={"4"}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
                {/*  */}
                <Box display={"flex"} justifyContent={"center"} gap={"1"}>
                  <Button
                    variant={"unstyled"}
                    color={"gray.400"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                  >
                    Don’t have an account?
                  </Button>
                  <Button
                    variant={"link"}
                    color={"#1971C2"}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    onClick={() => {
                      navigate("/sign-up-page");
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Stack>
            </form>
          </VStack>
        </Card>
      </Box>
    </>
  );
}

export default SignIn;
