import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useNavigate, Outlet } from "react-router-dom";

import Typography from "@mui/material/Typography";

import ProfileDetailsCard from "../components/onboardPage/profile&companyDetails/ProfileDetailsCard";
import PaymentDetailsCard from "../components/onboardPage/plan&PaymentDetails/PaymentDetailsCard";
import { Padding } from "@mui/icons-material";
import { useFormik } from "formik";
import { basicSchema } from "../common/validators";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box width={"100vw"} height={"auto"} bgcolor="background.main" sx={{}}>
        <Box
          className="navbar"
          bgcolor="gray700.main"
          height="80px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="24px"
          lineheight="24px"
          fontWeight="500"
          color="white.main"
        >
          Create Your Account
        </Box>
        <Box
          bgcolor="white.main"
          height="48px"
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Tabs
            centered
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            alignItems="center"
          >
            <Tab
              style={{ textTransform: "none" }}
              label="Profile & Company"
              {...a11yProps(0)}
              color="secondary.main"
              fontSize="24px"
              lineheight="24px"
              fontWeight="500"
              sx={{ fontSize: "20px", fontWeight: "500" }}
            />

            <Tab
              style={{ textTransform: "none" }}
              label="Plan & Payment"
              {...a11yProps(1)}
              color="secondary.main"
              lineheight="24px"
              sx={{ fontSize: "20px", fontWeight: "500" }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ProfileDetailsCard
            values={values}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <PaymentDetailsCard
            values={values}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
          />
        </TabPanel>
      </Box>
    </>
  );
}

export default OnBoardPage;
