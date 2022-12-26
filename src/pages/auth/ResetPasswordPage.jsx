import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

function ResetPassword() {
  return (
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
        h={"270px"}
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
          Password Reset
        </Heading>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading
            w={"320px"}
            h={"44px"}
            fontSize={"16px"}
            lineHeight={"24px"}
            fontWeight={"light"}
            color={"#868E96"}
            textAlign={"center"}
          >
            Your password has been successfully reset. Click on CONTINUE to
            login back.
          </Heading>
        </Box>
        <Box padding={"4"}>
          <Button
            size={"md"}
            width={"full"}
            marginTop={"5"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"24px"}
            color={"#495057"}
            bgColor={"#FBE122"}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;
