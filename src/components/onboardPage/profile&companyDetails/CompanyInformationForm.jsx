import { Box, Checkbox, Input, Stack, TextField } from "@mui/material";
import React from "react";
import IconSelector from "./IconSelector";

function CompanyInformationForm({
  values,
  handleChange,
  touched,
  errors,
  handleBlur,
}) {
  return (
    <React.Fragment>
      <Box
        color="gray900.main"
        fontSize="20px"
        fontWeight="700"
        lineHeight={"30px"}
      >
        Company Information
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems="center"
      >
        {/* input section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%", p: 1, mt: 12 },
          }}
        >
          {/* companyName */}
          <TextField
            fullWidth
            color="gray600"
            bordercolor="gray200"
            id="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Company Name"
            variant="outlined"
            placeholder="Company Name"
            error={errors.companyName && touched.companyName}
            helperText={touched.companyName ? errors.companyName : null}
            margin="normal"
            size="small"
          />
          {/* website */}

          <TextField
            fullWidth
            color="gray600"
            bordercolor="gray200"
            id="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Website"
            variant="outlined"
            placeholder="Website"
            error={errors.website && touched.website}
            helperText={touched.website ? errors.website : null}
            margin="normal"
            size="small"
          />
        </Box>
        {/*  ImageSelector */}
        <Stack width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <IconSelector />
        </Stack>
      </Stack>
      <TextField
        fullWidth
        color="gray600"
        bordercolor="gray200"
        required
        id="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Address"
        variant="outlined"
        placeholder="Street Address"
        error={errors.address && touched.address}
        helperText={touched.address ? errors.address : null}
        margin="normal"
        size="small"
      />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <TextField
          fullWidth
          color="gray600"
          bordercolor="gray200"
          required
          id="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          label="City"
          variant="outlined"
          placeholder="City"
          error={errors.city && touched.city}
          helperText={touched.city ? errors.city : null}
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          color="gray600"
          bordercolor="gray200"
          required
          id="state"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          label="State"
          variant="outlined"
          placeholder="State"
          error={errors.state && touched.state}
          helperText={touched.state ? errors.state : null}
          margin="normal"
          size="small"
          sx={{ ml: "4px" }}
        />
        <TextField
          fullWidth
          type="number"
          color="gray600"
          bordercolor="gray200"
          required
          id="zipCode"
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Zipcode"
          variant="outlined"
          placeholder="Zipcode"
          error={errors.zipCode && touched.zipCode}
          helperText={touched.zipCode ? errors.zipCode : null}
          margin="normal"
          size="small"
          sx={{ ml: "4px" }}
        />
      </Stack>
    </React.Fragment>
  );
}

export default CompanyInformationForm;
