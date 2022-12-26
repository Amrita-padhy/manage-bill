import { Box, HStack, Text, VStack, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdWaterDrop } from "react-icons/md";
import { CiPercent, CiDollar } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";

function CreditCard() {
  return (
    <>
      <Box
        w={["311px", "238px"]}
        h={"400px"}
        border={"1px"}
        borderRadius={"8px"}
        borderColor={"#DBDDDF"}
      >
        <VStack p={"4"} textAlign={"center"}>
          <Box
            fontSize={"18px"}
            lineHeight={"21.8px"}
            color={"#495057"}
            fontWeight={"semibold"}
          >
            CADET
          </Box>
          <Box
            fontSize={"12px"}
            lineHeight={"15px"}
            color={"#495057"}
            fontWeight={"medium"}
          >
            Only have 1 utility to bill residents (ex. Water/Sewer).
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={["311px", "238px"]}
            h={"84px"}
            bgColor={"#FBE122"}
            borderTopColor={"#DBDDDF"}
          >
            <Text
              fontSize={"16px"}
              lineHeight={"20px"}
              color={"#495057"}
              fontWeight={"medium"}
            >
              Free*
            </Text>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"3"}
            >
              <Text
                fontSize={"30px"}
                lineHeight={"37px"}
                color={"#495057"}
                fontWeight={"medium"}
              >
                $2
              </Text>
              <Text
                fontSize={"10px"}
                lineHeight={"13px"}
                color={"#495057"}
                fontWeight={"medium"}
              >
                unit/month
              </Text>
            </Box>
          </Box>
          <Box
            w={["311px", "238px"]}
            h={"166px"}
            bgColor={"#495057"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            paddingTop={"20px"}
          >
            <HStack mb={"3"} w={"168px"} justifyContent={"flex-start"}>
              <Icon
                as={MdWaterDrop}
                w={"15px"}
                h={"15px"}
                bgColor={"#FBE122"}
                borderRadius={"full"}
              />
              <Text
                fontSize={"10px"}
                lineHeight={"14px"}
                color={"#ffff"}
                fontWeight={"medium"}
              >
                Recover high-use unit utilities
              </Text>
            </HStack>
            <HStack mb={"3"} w={"168px"} justifyContent={"flex-start"}>
              <Icon
                as={CiPercent}
                w={"15px"}
                h={"15px"}
                bgColor={"#FBE122"}
                borderRadius={"full"}
              />
              <Text
                fontSize={"10px"}
                lineHeight={"14px"}
                color={"#ffff"}
                fontWeight={"medium"}
              >
                Lower property’s utility use
              </Text>
            </HStack>

            <HStack mb={"3"} w={"168px"} justifyContent={"flex-start"}>
              <Icon
                as={TbCurrencyDollar}
                w={"15px"}
                h={"15px"}
                bgColor={"#FBE122"}
                borderRadius={"full"}
              />
              <Text
                fontSize={"10px"}
                lineHeight={"14px"}
                color={"#ffff"}
                fontWeight={"medium"}
              >
                Pass thru admin fee to resident*
              </Text>
            </HStack>
            <HStack mb={"3"} w={"168px"} justifyContent={"flex-start"}>
              <Icon
                as={TbCurrencyDollar}
                w={"15px"}
                h={"15px"}
                bgColor={"#FBE122"}
                borderRadius={"full"}
              />
              <Text
                fontSize={"10px"}
                lineHeight={"14px"}
                color={"#ffff"}
                fontWeight={"medium"}
              >
                Improve your NOI!
              </Text>
            </HStack>

            <HStack mb={"3"} w={"168px"} justifyContent={"flex-start"}>
              <Icon
                as={TbCurrencyDollar}
                w={"15px"}
                h={"15px"}
                bgColor={"#FBE122"}
                borderRadius={"full"}
              />
              <Text
                fontSize={"10px"}
                lineHeight={"14px"}
                color={"#ffff"}
                fontWeight={"medium"}
              >
                Bill Boldly!
              </Text>
            </HStack>
          </Box>
          <Box>
            <Button
              variant={"solid"}
              w={"60px"}
              h={"12px"}
              color={"#ffff"}
              fontSize={"10px"}
              lineHeight={"13px"}
              fontWeight={"normal"}
              backgroundColor={"#1971C2"}
              borderRadius={"22px"}
              padding={"16px"}
            >
              GO CADET
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default CreditCard;
//
