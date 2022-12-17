import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";

function OnBoardPage() {
  return (
    <Box w={"full"} h={"100vh"} bgColor={"#E5E5E5"}>
      <Stack
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
          bg={"pink.200"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          flexDirection={["column", "row"]}
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
            >
              Profile & Company
            </Heading>
          </HStack>
          <HStack display={["none", "flex"]}>
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
    </Box>
  );
}

export default OnBoardPage;
