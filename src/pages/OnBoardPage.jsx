import {
  Box,
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  VStack,
  // ,
} from "@chakra-ui/react";
// import { PseudoBox } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import PersonalInformationForm from "../components/PersonalInformationForm";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
function OnBoardPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Menu isOpen={isOpen}>
          <MenuButton
            variant="ghost"
            mx={1}
            py={[1, 2, 2]}
            px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        {/* company info */}
        {/* mailing address */}
      </Container>
    </Box>
  );
}

export default OnBoardPage;
