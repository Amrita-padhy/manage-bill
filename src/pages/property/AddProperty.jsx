import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useFormik } from "formik";
import { basicSchema } from "@/common/validators";
import { Box, Stack } from "@mui/system";
import { Button, Card, MenuItem, TextField, Typography } from "@mui/material";
import Header from "../../common/Header";
import { styled } from "@mui/material/styles";

function AddProperty() {
  // formik
  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        PropertyName: "",
        PropertyType: "",
        PropertyID: "",
        NumberOfUnits: "",
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
  const depositAccountType = [
    {
      value: "1",
      account: "SBI",
    },
    {
      value: "2",
      account: "HDFC",
    },
    {
      value: "3",
      account: "UNION",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="text"
        color="secondary"
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none" }}
      >
        Back
      </Button>
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
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 3 }}>
            <TextField
              required
              fullWidth
              size="small"
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
              required
              fullWidth
              select
              size="small"
              margin="normal"
              variant="outlined"
              type={"text"}
              id="depositAccount"
              label="Deposit Account"
              placeholder="Add/Select a deposit account"
              bordercolor="gray200"
              color="gray600"
              value={values.depositAccount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.depositAccount && touched.depositAccount}
              helperText={touched.depositAccount ? errors.depositAccount : null}
            >
              {selectPropertyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.Property}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          {/*  Property id ,unit */}
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 3 }}>
            <TextField
              required
              fullWidth
              size="small"
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
              required
              fullWidth
              size="small"
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
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 3 }}>
            <TextField
              required
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type={"text"}
              id="address"
              label="Address"
              placeholder="Address"
              bordercolor="gray200"
              color="gray600"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address && touched.address}
              helperText={touched.address ? errors.address : null}
            />
          </Stack>
          {/* city,state ,zipcode */}
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 3 }}>
            <TextField
              required
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type={"text"}
              id="city"
              label="City"
              placeholder="City Name"
              bordercolor="gray200"
              color="gray600"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city && touched.city}
              helperText={touched.city ? errors.city : null}
            />
            <TextField
              required
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type={"number"}
              id="state"
              label="State"
              placeholder="State"
              bordercolor="gray200"
              color="gray600"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.state && touched.state}
              helperText={touched.state ? errors.state : null}
            />
            <TextField
              required
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type={"number"}
              id="zipcode"
              label="Zipcode"
              placeholder="Zipcode"
              bordercolor="gray200"
              color="gray600"
              value={values.zipcode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.zipcode && touched.zipcode}
              helperText={touched.zipcode ? errors.zipcode : null}
            />
          </Stack>
        </Box>
      </Card>
      {/* Receive Payments card */}
      <Card sx={{ height: "auto", my: "16px", p: "24px" }}>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "gray900.main",
            }}
          >
            Receive Payments
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "secondary.main",
            }}
          >
            payload.co
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "gray600.main",
          }}
        >
          Create a merchant account with payload to receive online payments from
          your residents.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "gray600.main",
            mt: "15px",
          }}
        >
          Utility Ranger does not record any of the information collected in
          this process.
        </Typography>
        {/* form */}
        <Box component="form" noValidate autoComplete="off">
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 3 }}>
            <TextField
              required
              fullWidth
              select
              size="small"
              margin="normal"
              variant="outlined"
              type={"text"}
              id="depositAccount"
              label="Deposit Account"
              placeholder="Add/Select a deposit account"
              bordercolor="gray200"
              color="gray600"
              value={values.depositAccount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.depositAccount && touched.depositAccount}
              helperText={touched.depositAccount ? errors.depositAccount : null}
            >
              {depositAccountType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.account}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type={"text"}
              id="displayName"
              label="Add a display name to appear on resident bills"
              placeholder="Enter display name"
              bordercolor="gray200"
              color="gray600"
              value={values.displayName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.displayName && touched.displayName}
              helperText={touched.displayName ? errors.displayName : null}
            />
          </Stack>
        </Box>
      </Card>
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
          <Box textAlign={"center"}>
            <CloudUploadOutlinedIcon fontSize="medium" color="secondary" />
            <Box display={"flex"} alignItems="center">
              <Button
                textAlign={"center"}
                variant="text"
                color="secondary"
                sx={{ textTransform: "none", p: "1px" }}
              >
                Click to upload
              </Button>
              <Typography
                textAlign={"center"}
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
                textAlign: "center",
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
            fontWeight: "700",
            color: "gray900.main",
          }}
        >
          Notes
        </Typography>
        <TextareaAutosize
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
        />
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems={"center"}
          gap="10px"
          mt="10px"
        >
          <Button
            variant="outlined"
            color="gray700"
            sx={{ textTransform: "none", bgcolor: "gray200" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Add Notes
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default AddProperty;
