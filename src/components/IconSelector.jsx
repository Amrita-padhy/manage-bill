import {
  Box,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function IconSelector() {
  const [image, setImage] = useState();

  const handlePreviewImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <VStack>
        {image ? (
          <Image
            w={"224px"}
            h={"115px"}
            objectFit="cover"
            src={URL.createObjectURL(image)}
          />
        ) : (
          <Box
            w={"224px"}
            h={"115px"}
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            shadow="sm"
          >
            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent={"center"}
                  spacing="4"
                >
                  <Stack p="8" textAlign="center" spacing="1">
                    <Icon as={AiOutlinePlusCircle} />
                  </Stack>
                </Stack>
              </Box>
              <Input
                type="file"
                height="100%"
                width="100%"
                opacity="0"
                aria-hidden="true"
                accept=".jpg,.png,.jpeg"
                onChange={handlePreviewImage}
              />
            </Box>
          </Box>
        )}
        {/*  */}
        <HStack fontSize={"12px"} lineHeight={"14px"} fontWeight={"semibold"}>
          <Box color={"#495057"}>Drag and Drop or</Box>

          <Box color={"#1971C2"}>SELECT</Box>
        </HStack>
      </VStack>
    </>
  );
}

export default IconSelector;
