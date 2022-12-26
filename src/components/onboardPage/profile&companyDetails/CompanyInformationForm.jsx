import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import IconSelector from "./IconSelector";

import ImageSelector from "./ImageSelector";

function CompanyInformationForm({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
  return (
    <>
      <Box marginTop={"6"}>
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
            Company Information
          </Box>
        </Stack>
        {/* company name ,website */}
        <Stack
          w={"full"}
          direction={["column", "row"]}
          h={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={["full", "60%"]} h={"fit-content"}>
            <FormLabel color={"#495057"}>Company Name</FormLabel>

            <Input
              placeholder="Company name"
              type="text"
              id="companyName"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              className={
                errors.companyName && touched.companyName && "input_error"
              }
            />
            {errors.companyName && touched.companyName ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.companyName}
              </div>
            ) : (
              ""
            )}

            <FormLabel color={"#495057"}>Website</FormLabel>

            <Input
              placeholder=" Website"
              type="text"
              id="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
            />
            {errors.website && touched.website ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.website}
              </div>
            ) : (
              ""
            )}
          </Box>
          <Box w={["100%", "40%"]} h={"fit-content"}>
            <VStack>
              <Box>Company Logo</Box>
              <IconSelector />
            </VStack>
          </Box>
        </Stack>
        <Stack w={"full"}>
          {/* address */}
          <Box>
            <FormLabel color={"#495057"}>Address*</FormLabel>

            <Input
              placeholder="Address"
              type="text"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="gray.600"
              borderColor={"gray.200"}
              color={"gray.600"}
              fontSize={"16px"}
              paddingY={"4"}
              paddingX={"6"}
              className={errors.address && touched.address && "input_error"}
            />
            {errors.address && touched.address ? (
              <div
                style={{
                  textAlign: "start",
                  marginTop: "0",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {errors.address}
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
                <FormLabel color={"#495057"}>City*</FormLabel>

                <Input
                  placeholder="City"
                  type="text"
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  className={errors.city && touched.city && "input_error"}
                />
                {errors.city && touched.city ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.city}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
              {/* state */}

              <Stack width={"100%"}>
                <FormLabel color={"#495057"}>State*</FormLabel>

                <Input
                  placeholder="State"
                  type="text"
                  id="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  className={errors.state && touched.state && "input_error"}
                />
                {errors.state && touched.state ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.state}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
              {/* zip code */}

              <Stack width={"100%"}>
                <FormLabel color={"#495057"}>Zipcode*</FormLabel>

                <Input
                  placeholder="Zipcode"
                  type="number"
                  id="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="gray.600"
                  borderColor={"gray.200"}
                  color={"gray.600"}
                  fontSize={"16px"}
                  paddingY={"4"}
                  paddingX={"6"}
                  className={errors.zipCode && touched.zipCode && "input_error"}
                />
                {errors.zipCode && touched.zipCode ? (
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "0",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {errors.zipCode}
                  </div>
                ) : (
                  ""
                )}
              </Stack>
            </Stack>
          </Box>
          <HStack>
            <Checkbox
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"gray.600"}
              fontWeight={"normal"}
              defaultChecked
            >
              Mailing Address same as above
            </Checkbox>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}

export default CompanyInformationForm;
