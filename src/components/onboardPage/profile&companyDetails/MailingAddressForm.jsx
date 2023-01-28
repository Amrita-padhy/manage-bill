import React from "react";
import { Box, Checkbox, Input, Stack, TextField } from "@mui/material";

function MailingAddressForm({
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
        Mailing Address
      </Box>

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
        error={errors.address && touched.address}
        helperText={touched.address ? errors.address : null}
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
          error={errors.city && touched.city}
          helperText={touched.city ? errors.city : null}
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
          error={errors.state && touched.state}
          helperText={touched.state ? errors.state : null}
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
          error={errors.zipCode && touched.zipCode}
          helperText={touched.zipCode ? errors.zipCode : null}
          sx={{ mb: 2, mt: 2, mr: 1 }}
        />
      </Stack>
    </React.Fragment>
  );
}

export default MailingAddressForm;
