import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  // ,
} from "@chakra-ui/react";

import { AiOutlineDown } from "react-icons/ai";
import { useFormik } from "formik";
import { basicSchema } from "../common/validators";
// import ProfileDetailsCard from "../components/profile&companyDetails/ProfileDetailsCard";
// import PaymentDetailsCard from "../components/plan&PaymentDetails/PaymentDetailsCard";

import ProfileDetailsCard from "../components/onboardPage/profile&companyDetails/ProfileDetailsCard";
import PaymentDetailsCard from "../components/onboardPage/plan&PaymentDetails/PaymentDetailsCard";

import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function OnBoardPage() {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    setFormData(values);
  };
  console.log(formData);

  const { values, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      website: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      mailingAddress: "",
      mailingCity: "",
      mailingState: "",
      mailingZipCode: "",
      avatar: "",
      companyLogo: "",
    },
    validationSchema: basicSchema,
    // onSubmit,
  });
  // console.log(values);
  return (
    <>
      <Box bgColor={"gray.100"} w={"100vw"} h={"auto"}>
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

        <Tabs defaultIndex={0}>
          <Box
            w={"100vw"}
            h={"60px"}
            bgColor={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TabList
              w={"794px"}
              display={"flex"}
              justifyContent={"space-around"}
              fontSize={["10px", "20px"]}
              lineHeight={"24px"}
              fontWeight={"500"}
              color={"#495057"}
            >
              <Tab padding={"4"}>
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                  <Box>1</Box>
                  <Box fontSize={["11px", "20px"]}>Profile & Company</Box>
                  <Box display={["flex", "none"]}>
                    <ChevronDownIcon size={"20px"} />
                  </Box>
                </HStack>
              </Tab>
              <Tab>
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                  <Box>2</Box>
                  <Box fontSize={["11px", "20px"]}> Plan & Payment</Box>
                  <Box display={["flex", "none"]}>
                    <ChevronDownIcon size={"20px"} />
                  </Box>
                </HStack>
              </Tab>
            </TabList>
          </Box>

          <TabPanels
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TabPanel>
              <ProfileDetailsCard
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
              />
            </TabPanel>
            <TabPanel>
              <PaymentDetailsCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default OnBoardPage;
