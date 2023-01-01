import { ArrowBackIcon } from "@chakra-ui/icons";
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
import React from "react";
import { useNavigate } from "react-router-dom";

function ForgetPasswordEmailSentPage() {
  const navigate = useNavigate();
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
        h={"282px"}
        bgColor={"white"}
        borderRadius={"8px"}
      >
        <Box textAlign={"center"} className="Heading">
          <Heading
            fontSize={"30px"}
            lineHeight={"38px"}
            fontWeight={"semibold"}
            color={"#212529"}
            marginTop={"84px"}
          >
            Check Your Email
          </Heading>
          <VStack>
            <Heading
              fontSize={"smaller"}
              color={"#868E96"}
              fontWeight={"light"}
            >
              We sent a password reset link to
            </Heading>
            <Heading
              fontSize={"smaller"}
              color={"#495057"}
              fontWeight={"medium"}
            >
              olivia@project10K.com
            </Heading>
          </VStack>
        </Box>

        <HStack
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"10"}
          fontSize={"14px"}
          lineHeight={"20px"}
        >
          <Button
            variant={"link"}
            color={"#868E96"}
            fontWeight={"400"}
            onClick={() => {
              navigate("/sign-in-page");
            }}
          >
            Didn’t receive the mail?
          </Button>
          <Button variant={"link"} color={"#1971C2"} fontWeight={"500"}>
            Click to resend
          </Button>
        </HStack>
        <Stack>
          <Button
            variant={"unstyled"}
            leftIcon={<ArrowBackIcon />}
            width={"full"}
            fontWeight={"400"}
            fontSize={"14px"}
            lineHeight={"20px"}
            color={"#212529"}
            marginTop={"3"}
            onClick={() => {
              navigate("/forget-password-page");
            }}
          >
            Go Back
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ForgetPasswordEmailSentPage;
