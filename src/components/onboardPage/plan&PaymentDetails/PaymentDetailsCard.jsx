import React from "react";
import { Box, Button, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import CommanderCard from "./CommanderCard";
import CreditCard from "./CreditCard";
function PaymentDetailsCard() {
  return (
    <>
      <Box
        w={["343px", "794px"]}
        h={"auto"}
        bgColor={"white"}
        marginTop={["8", "6"]}
        marginX={["2", "0"]}
        borderRadius={"0.5rem"}
        paddingY={"4"}
        paddingX={"6"}
      >
        <HStack>
          <Box
            color={"#212529"}
            fontSize={"20px"}
            fontWeight={"bold"}
            lineHeight={"30xp"}
          >
            Select Level of Subscription
          </Box>
          <InfoOutlineIcon color={"#868E96"} w={"14px"} h={"14px"} />
        </HStack>
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"7"}
        >
          <CommanderCard />
          <CreditCard />
        </Stack>
        <Stack
          fontSize={"14px"}
          lineHeight={"17px"}
          color={"#495057"}
          fontWeight={"medium"}
          textAlign={"center"}
          marginTop={"10"}
        >
          <Box>
            Following your two-month free trial, you will automatically be
            charged each month $x per # of licensed units. Click on GET STARTED
            to authorize.{" "}
          </Box>
          <Box textAlign={"center"}>
            <Checkbox size="md" colorScheme="red">
              I acknowledge that I have read and agree to the Terms & Conditions
            </Checkbox>
          </Box>
        </Stack>
        <Stack display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Button
            marginTop={"8"}
            w={["full", "166px"]}
            variant={"solid"}
            bgColor={"#FBE122"}
            color={"#495057"}
            rightIcon={<ArrowForwardIcon />}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default PaymentDetailsCard;
