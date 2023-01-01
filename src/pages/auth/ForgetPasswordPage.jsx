import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormik, Form, Field } from "formik";
import { basicSchema } from "../../common/validators";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [forgetPassword, setForgetPassword] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setForgetPassword(values);
    navigate("/sign-in-page");
  };

  const { values, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: basicSchema,
    // onSubmit,
  });
  console.log(forgetPassword);
  return (
    <>
      <Box
        w={"full"}
        height={"100vh"}
        bgColor={"#E5E5E5"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="card"
          w={["343px", "392px"]}
          h={["399px", "376px"]}
          bgColor={"white"}
          borderRadius={"8px"}
        >
          <Box textAlign={"center"} className="Heading">
            <Heading fontSize={"x-large"} color={"#212529"} marginTop={"84px"}>
              Forgot Password?
            </Heading>
            <Heading
              fontSize={"smaller"}
              color={"#868E96"}
              fontWeight={"light"}
            >
              No worries, we’ll send you reset instructions.
            </Heading>
          </Box>
          <Box padding={"4"}>
            <form>
              <FormLabel
                fontWeight={"500"}
                fontSize={"14px"}
                lineHeight={"20px"}
                color={"#868E96"}
              >
                Email*
              </FormLabel>
              <Input
                type="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                focusBorderColor="gray.600"
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"24px"}
                color={"#495057"}
                placeholder="Enter your email address"
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
              <Button
                disabled={!values.email || errors.email}
                size={"md"}
                width={"full"}
                marginTop={"8"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"24px"}
                color={"#495057"}
                padding={"4"}
                bgColor={"#FBE122"}
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
            </form>
          </Box>
          <Stack>
            <Button
              variant={"unstyled"}
              leftIcon={<ArrowBackIcon />}
              size={"md"}
              width={"full"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"20px"}
              color={"#212529"}
              onClick={() => {
                navigate("/sign-in-page");
              }}
            >
              Back to login
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default ForgetPassword;
