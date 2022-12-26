import React, { useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { basicSchema } from "../../common/validators";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, Field } from "formik";
import { ArrowBackIcon } from "@chakra-ui/icons";

function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPassword(values);
  };

  const { values, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: basicSchema,
    // onSubmit,
  });
  console.log(newPassword);
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
          h={"480px"}
          bgColor={"white"}
          borderRadius={"8px"}
        >
          <Heading
            textAlign={"center"}
            fontSize={"30px"}
            lineHeight={"38px"}
            fontWeight={"semibold"}
            color={"#212529"}
            marginTop={"84px"}
          >
            Set New Password
          </Heading>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Heading
              w={"270px"}
              h={"44px"}
              fontSize={"16px"}
              lineHeight={"24px"}
              fontWeight={"light"}
              color={"#868E96"}
              textAlign={"center"}
            >
              Your new password must be different to previously used passwords.
            </Heading>
          </Box>
          <Box padding={"4"}>
            <form>
              {/* Password */}
              <FormLabel
                fontWeight={"500"}
                fontSize={"14px"}
                lineHeight={"20px"}
                color={"#868E96"}
              >
                Password*
              </FormLabel>
              <Input
                type="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                focusBorderColor="gray.600"
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"24px"}
                color={"#495057"}
                placeholder="Enter your email address"
                className={errors.password && touched.password && "input_error"}
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
              {/* confirmPassword */}
              <FormLabel color={"#495057"}>Confirm Password*</FormLabel>

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
                  !values.password ||
                  !values.confirmPassword ||
                  errors.password ||
                  errors.confirmPassword
                }
                size={"md"}
                width={"full"}
                marginTop={"4"}
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
                marginTop={"2"}
                onClick={() => {
                  navigate("/sign-in-page");
                }}
              >
                Back to login
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SetNewPasswordPage;
