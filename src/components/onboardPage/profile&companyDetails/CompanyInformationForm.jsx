import { Box, Checkbox, Input, Stack, TextField } from "@mui/material";
import React from "react";
import IconSelector from "./IconSelector";

function CompanyInformationForm({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
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
            size="small"
            color="gray600"
            bordercolor="gray200"
            id="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Company Name"
            variant="outlined"
            placeholder="Company Name"
            error={errors.companyName}
            helperText={errors.companyName}
            sx={{ mb: 2 }}
          />
          {/* website */}

          <TextField
            fullWidth
            size="small"
            color="gray600"
            bordercolor="gray200"
            id="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Website"
            variant="outlined"
            placeholder="Website"
            error={errors.website}
            helperText={errors.website}
            sx={{ mb: 2 }}
          />
        </Box>
        {/*  ImageSelector */}
        <Stack width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <IconSelector />
        </Stack>
      </Stack>
      <TextField
        fullWidth
        size="small"
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
        error={errors.address}
        helperText={errors.address}
        sx={{ mt: 2 }}
      />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <TextField
          fullWidth
          size="small"
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
          error={errors.city}
          helperText={errors.city}
          sx={{ mt: 2, mr: 1 }}
        />
        <TextField
          fullWidth
          size="small"
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
          error={errors.state}
          helperText={errors.state}
          sx={{ mb: 2, mt: 2, mr: 1 }}
        />
        <TextField
          fullWidth
          type="number"
          size="small"
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
          error={errors.zipCode}
          helperText={errors.zipCode}
          sx={{ mb: 2, mt: 2, mr: 1 }}
        />
      </Stack>
    </React.Fragment>
  );
}

export default CompanyInformationForm;
