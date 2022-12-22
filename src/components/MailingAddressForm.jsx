import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function MailingAddressForm({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
  return (
    <>
      <Box mt={"6"}>
        <Stack
          className="headings"
          direction={["column", "row"]}
          justifyContent={"flex-start"}
        >
          <Box
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"#212529"}
            lineHeight={"30px"}
          >
            Mailing Address
          </Box>
        </Stack>
        {/* company name ,website */}

        <Stack w={"full"}>
          {/* address */}
          <Box>
            <label htmlFor="">Address*</label>
            <Input
              placeholder="Address"
              type="text"
              id="mailingAddress"
              value={values.mailingAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              h={"38px"}
              w={"full"}
              marginTop={"3"}
              className={
                errors.mailingAddress && touched.mailingAddress && "input_error"
              }
            />
            {errors.mailingAddress && touched.mailingAddress ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.mailingAddress}
              </div>
            ) : (
              ""
            )}
          </Box>
          {/* city state zipCode */}

          <Box>
            <Stack direction={["column", "row"]}>
              {/* city */}
              <Stack width={"100%"}>
                <label htmlFor="">City*</label>
                <Input
                  placeholder="City"
                  type="text"
                  id="mailingCity"
                  value={values.mailingCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  h={"38px"}
                  w={"full"}
                  marginTop={"3"}
                  className={
                    errors.mailingCity && touched.mailingCity && "input_error"
                  }
                />
                {errors.mailingCity && touched.mailingCity ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.mailingCity}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
              {/* state */}

              <Stack width={"100%"}>
                <label htmlFor="">State*</label>
                <Input
                  placeholder="State"
                  type="text"
                  id="mailingState"
                  value={values.mailingState}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  h={"38px"}
                  w={"full"}
                  marginTop={"3"}
                  className={
                    errors.mailingState && touched.mailingState && "input_error"
                  }
                />
                {errors.mailingState && touched.mailingState ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.mailingState}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
              {/* zip code */}

              <Stack width={"100%"}>
                <label htmlFor="">Zipcode*</label>
                <Input
                  placeholder="Zipcode"
                  type="number"
                  id="mailingZipCode"
                  value={values.mailingZipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  h={"38px"}
                  w={"full"}
                  marginTop={"3"}
                  className={
                    errors.mailingZipCode &&
                    touched.mailingZipCode &&
                    "input_error"
                  }
                />
                {errors.mailingZipCode && touched.mailingZipCode ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.mailingZipCode}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack
          color={"#495057"}
          fontWeight={"500"}
          direction={["column-reverse", "row"]}
          justifyContent={"space-between"}
          mt={"2.5rem"}
        >
          <Button variant={"outline"}>Sign Out</Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            backgroundColor={"#FBE122"}
            variant="solid"
          >
            NEXT: Plan & Payment
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default MailingAddressForm;
