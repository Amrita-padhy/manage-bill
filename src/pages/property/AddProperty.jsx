import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useFormik } from "formik";
import { basicSchema } from "@/common/validators";
import { Box, Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

import {
  Button,
  Card,
  Divider,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import Header from "../../common/Header";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ManageProperty from "./ManageProperty";
import { useState } from "react";
import { Login } from "@mui/icons-material";
import { useSelector } from "react-redux";
import BackButton from "../../common/BackButton";
import { addProperty } from "../../api/property/property";
import { LoadingButton } from "@mui/lab";

function AddProperty() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessFull, setIsSuccessFull] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // console.log(isSuccessFull);

  const { user } = useSelector((state) => state.user);

  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const noteTextHandler = (e) => {
    setNoteText(e.target.value);
  };
  // console.log(noteText);

  const addNotes = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        text: noteText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setNoteText("");
  };
  const deleteNote = () => {
    setNoteText("");
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  // body

  const onSubmit = async () => {
    const body = {
      uid: user.uid,
      address: values.propertyAddress,
      city: values.propertyCity,
      state: values.propertyState,
      zipcode: values.propertyZipcode,
      propertyId: values.PropertyID,
      propertyName: values.PropertyName,
      propertyType: values.PropertyType,
      units: values.NumberOfUnits,
      notes: [
        {
          note: noteText,
          createdAt: currentDate,
          userName: user.firstName,
        },
      ],
    };
    // console.log(body);
    try {
      setIsLoading(true);
      console.log(body);
      const { response } = await addProperty(body);
      setIsLoading(false);

      console.log(response);

      if (response === true) {
        setIsSuccessFull(true);
        setIsDisable(true);
      } else setSnackbarOpen(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // formik
  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        PropertyName: "",
        PropertyType: "",
        PropertyID: "",
        NumberOfUnits: "",
        propertyAddress: "",
        propertyState: "",
        propertyCity: "",
        propertyZipcode: "",
        noteText: "",
      },
      validationSchema: basicSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  const selectPropertyType = [
    {
      value: "1",
      Property: "house",
    },
    {
      value: "2",
      Property: "apartment",
    },
    {
      value: "3",
      Property: "Single room",
    },
  ];

  const navigate = useNavigate();

  const handleSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  const action = (
    <React.Fragment>
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
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          message="Something went wrong !"
          action={action}
        />
      </div>
      <Box sx={{ width: "100%" ,p:"20px"}}>
        {/* back btn */}
        <BackButton />
        {/*Properties heading  */}
        <Header heading=" Properties:" title=" Add Property" />
        {/* Properties details card */}
        <Card sx={{ height: "auto", my: "16px", p: "24px" }}>
          {/* card heading */}
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "gray900.main",
            }}
          >
            Property Details
          </Typography>
          {/*  Property form*/}
          <Box component="form" noValidate autoComplete="off">
            {/* Property Name ,type*/}
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 1, md: 3 }}
            >
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="PropertyName"
                label="Property Name"
                placeholder="Property Name"
                bordercolor="gray200"
                color="gray600"
                value={values.PropertyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.PropertyName && touched.PropertyName}
                helperText={touched.PropertyName ? errors.PropertyName : null}
              />

              <TextField
                disabled={isDisable}
                required
                fullWidth
                select
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="PropertyType"
                name={"PropertyType"}
                label="Property Type"
                placeholder="Add/Select a deposit account"
                bordercolor="gray200"
                color="gray600"
                value={values.PropertyType}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.PropertyType && touched.PropertyType}
                helperText={touched.PropertyType ? errors.PropertyType : null}
              >
                {selectPropertyType.map((option) => (
                  <MenuItem key={option.value} value={option.Property}>
                    {option.Property}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            {/*  Property id ,unit */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 1, md: 3 }}
            >
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="PropertyID"
                label="Property ID"
                placeholder="Property ID"
                bordercolor="gray200"
                color="gray600"
                value={values.PropertyID}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.PropertyID && touched.PropertyID}
                helperText={touched.PropertyID ? errors.PropertyID : null}
              />
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"number"}
                id="NumberOfUnits"
                label="Number of Units"
                placeholder="Number of Units"
                bordercolor="gray200"
                color="gray600"
                value={values.NumberOfUnits}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.NumberOfUnits && touched.NumberOfUnits}
                helperText={touched.NumberOfUnits ? errors.NumberOfUnits : null}
              />
            </Stack>
            {/* address */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 1, md: 3 }}
            >
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="propertyAddress"
                label="Address"
                placeholder="Address"
                bordercolor="gray200"
                color="gray600"
                value={values.propertyAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyAddress && touched.propertyAddress}
                helperText={
                  touched.propertyAddress ? errors.propertyAddress : null
                }
              />
            </Stack>
            {/* city,state ,zipcode */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 1, md: 3 }}
            >
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="propertyCity"
                label="City"
                placeholder="City Name"
                bordercolor="gray200"
                color="gray600"
                value={values.propertyCity}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyCity && touched.propertyCity}
                helperText={touched.propertyCity ? errors.propertyCity : null}
              />
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"text"}
                id="propertyState"
                label="State"
                placeholder="State"
                bordercolor="gray200"
                color="gray600"
                value={values.propertyState}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyState && touched.propertyState}
                helperText={touched.propertyState ? errors.propertyState : null}
              />
              <TextField
                disabled={isDisable}
                required
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                type={"number"}
                id="propertyZipcode"
                label="Zipcode"
                placeholder="Zipcode"
                bordercolor="gray200"
                color="gray600"
                value={values.propertyZipcode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.propertyZipcode && touched.propertyZipcode}
                helperText={
                  touched.propertyZipcode ? errors.propertyZipcode : null
                }
              />
            </Stack>
          </Box>
        </Card>
        {/* Receive Payments card */}

        {/* property image card */}
        <Card sx={{ height: "auto", my: "16px", p: "24px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "gray900.main",
            }}
          >
            Property Image
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "gray600.main",
            }}
          >
            Add a property photo or logo to appear on resident bills (optional)
          </Typography>
          <Box
            width={{
              xs: "310px",
              md: "500px",
            }}
            height="250px"
            sx={{
              border: "1px solid #DBDDDF",
              backgroundColor: "#E8F1F9",
              mt: "24px",
            }}
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
          >
            <Box textalign={"center"}>
              <CloudUploadOutlinedIcon fontSize="medium" color="secondary" />
              <Box display={"flex"} alignItems="center">
                <Button
                  textalign={"center"}
                  variant="text"
                  color="secondary"
                  sx={{ textTransform: "none", p: "1px" }}
                >
                  Click to upload
                </Button>
                <Typography
                  textalign={"center"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "gray600.main",
                  }}
                >
                  or drag and drop
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "gray600.main",
                  textalign: "center",
                }}
              >
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Box>
          </Box>
        </Card>
        {/*  Additional notes card */}
        <Card sx={{ height: "auto", my: "16px", p: "24px" }}>
          <Typography
            sx={{
              fontSize: "20px",

              fontWeight: "600",
              color: "gray900.main",
            }}
          >
            Add notes
          </Typography>
          <TextareaAutosize
            disabled={isDisable}
            style={{
              width: "100%",
              height: "120px",
              border: "1px solid gray",
              color: "gray600.main",
              padding: "15px",
              marginTop: "24px",
              fontWeight: 400,
            }}
            maxRows={4}
            aria-label="maximum height"
            placeholder="Additional notes"
            value={noteText}
            onChange={noteTextHandler}
          />

          <Box
            display={"flex"}
            justifyContent={{ xs: "space-evenly", md: "flex-end" }}
            alignItems={"center"}
            gap="10px"
            mt="10px"
          >
            <Button
              variant="outlined"
              color="gray700"
              sx={{ textTransform: "none", bgcolor: "gray200" }}
              onClick={deleteNote}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none" }}
              onClick={addNotes}
              disabled={noteText.length === 0}
            >
              Add Notes
            </Button>
          </Box>
          {notes.length ? (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "gray600.main",
              }}
            >
              Past Notes
            </Typography>
          ) : null}

          <Card
            sx={{
              bgcolor: "gray200.main",
              height: "auto",
              mt: "10px",
            }}
            // variant="outlined"
            // disableelevation
          >
            {notes.map((note, index) => (
              <Box key={index}>
                <Typography
                  disabled={isDisable}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "gray700.main",
                    m: "12px",
                  }}
                >
                  {note.text}
                  <Box
                    display={{ xs: "block", md: "flex" }}
                    justifyContent={"flex-start"}
                    alignItems="center"
                    gap={"10px"}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",

                        fontWeight: "400",
                        color: "gray600.main",
                      }}
                    >
                      {currentDate}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "gray600.main",
                      }}
                    >
                      {currentTime}
                    </Typography>
                    <Stack direction={"row"}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "gray900.main",
                        }}
                      >
                        Entered By:
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray600.main",
                        }}
                      >
                        {user.firstName}
                      </Typography>
                    </Stack>
                  </Box>
                </Typography>
                <Divider />
              </Box>
            ))}
          </Card>
        </Card>
        {/* <UtilityButtons /> */}
        {/* utility button */}
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          gap="20px"
          marginTop={"16px"}
        >
          <Button
            onClick={() => navigate("/main")}
            variant="contained"
            color="white"
            sx={{
              textTransform: "none",
              width: {
                xs: "100%",
                md: "103px",
              },
            }}
          >
            Cancel
          </Button>
          {isSuccessFull ? (
            <Stack direction={"row"} gap={"10px"}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    md: "103px",
                  },
                }}
                disabled
              >
                Saved
              </Button>

              <Button
                onClick={() => navigate("/add-utility")}
                variant="contained"
                color="secondary"
                sx={{
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                }}
              >
                Next : Add Utilities & Fees
              </Button>
            </Stack>
          ) : (
            <Box sx={{ display: "flex", gap: "10px" }}>
              <LoadingButton
                onClick={onSubmit}
                loading={isLoading}
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    md: "103px",
                  },
                }}
                disabled={
                  !values.PropertyName ||
                  !values.PropertyType ||
                  !values.PropertyID ||
                  !values.NumberOfUnits ||
                  !values.propertyAddress ||
                  !values.propertyCity ||
                  !values.propertyState ||
                  !values.propertyZipcode ||
                  errors.PropertyName ||
                  errors.PropertyType ||
                  errors.PropertyID ||
                  errors.NumberOfUnits ||
                  errors.propertyAddress ||
                  errors.propertyCity ||
                  errors.propertyState ||
                  errors.propertyZipcode
                }
              >
                Save
              </LoadingButton>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AddProperty;
