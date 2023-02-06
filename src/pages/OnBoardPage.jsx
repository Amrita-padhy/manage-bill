import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useNavigate, Outlet } from "react-router-dom";
import ProfileDetailsCard from "../components/onboardPage/profile&companyDetails/ProfileDetailsCard";
import PaymentDetailsCard from "../components/onboardPage/plan&PaymentDetails/PaymentDetailsCard";
import { useFormik } from "formik";
import { basicSchema } from "../common/validators";
import { useSelector } from "react-redux";
import { updateUser } from "../api/user/userApi";
import CloseIcon from "@mui/icons-material/Close";

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
          <Box>{children}</Box>
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
  const [acknowledgeBtn, setAcknowledgeBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const { user } = useSelector((state) => state.user);

  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  // handleAcknowledgeBtn
  const handleAcknowledgeBtn = (event) => {
    setAcknowledgeBtn(event.target.checked);
  };

  // handleChecked
  const handleChecked = () => {
    setChecked(!checked);
    console.log(checked);
  };
  const onSubmit = async () => {
    const payload = {
      lastName: values.lastName,
      firstName: values.firstName,
      companyInformation: {
        address: values.companyName,
        state: values.state,
        zipcode: values.zipCode,
        companyName: values.companyName,
        isMailingAddress: false,
        website: values.website,
        city: values.city,
        maillingAddress: {
          zipcode: values.mailingZipCode,
          state: values.mailingState,
          city: values.mailingCity,
          address: values.mailingAddress,
        },
      },
      subscription: {
        subscriptionType: values.subscriptionType,
        billingAddress: {
          zipcode: values.billingZipCode,
          address: values.billingAddress,
          state: values.billingState,
          city: values.billingCity,
        },
      },
      mobileNumber: values.mobileNumber,
      email: values.email,
      uid: user.uid,
    };
    console.log(payload);
    try {
      setIsLoading(true);
      const { response } = await updateUser(payload);
      console.log(response);
      setIsLoading(false);
      if (!response) {
        // TODO implement snack bar
        setSnackbarOpen(true);
      } else {
        // TODO on success navigate user to home page
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const { values, handleChange, touched, errors, handleBlur, setValues } =
    useFormik({
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

        billingAddress: "",
        billingCity: "",
        billingState: "",
        billingZipCode: "",
        isMailingAddress: true,
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  useEffect(() => {
    if (user) {
      setValues({
        ...values,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      });
    }
  }, [user]);

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleSnackbar}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      {/* snackbar */}
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbar}
          message="Note archived"
          action={action}
        />
      </div>
      <Box width={"100vw"} height={"auto"} bgcolor="background.main" sx={{}}>
        <Box
          className="navbar"
          bgcolor="gray700.main"
          height="80px"
          display="flex"
          justifyContent="center"
          alignitems="center"
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
          alignitems="center"
        >
          <Tabs
            centered
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            alignitems="center"
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
            handleBlur={handleBlur}
            setValue={setValue}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PaymentDetailsCard
            values={values}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
            onSubmit={onSubmit}
            handleBlur={handleBlur}
            checked={checked}
            handleChecked={handleChecked}
            handleAcknowledgeBtn={handleAcknowledgeBtn}
            acknowledgeBtn={acknowledgeBtn}
            isLoading={isLoading}
          />
        </TabPanel>
      </Box>
    </>
  );
}

export default OnBoardPage;
