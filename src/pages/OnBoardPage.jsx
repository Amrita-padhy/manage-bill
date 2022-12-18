import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import PersonalInformationForm from "../components/PersonalInformationForm";

function OnBoardPage() {
  return (
    <Box w={"full"} h={"auto"} bgColor={"#E5E5E5"}>
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
        w={"full"}
        h={"66px"}
        bgColor={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"40"}
      >
        <Box
          w={"794px"}
          h={"66px"}
          // bg={"pink.200"}
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
        h={"100vh"}
        marginTop={["12", "6"]}
        paddingX={"6"}
        paddingY={"8"}
        borderRadius={"0.5rem"}
      >
        {/* personal info */}
        <PersonalInformationForm />

        {/* company info */}
        {/* mailing address */}
      </Container>
    </Box>
  );
}

export default OnBoardPage;
