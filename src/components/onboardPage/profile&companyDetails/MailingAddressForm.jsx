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
        id="mailingAddress"
        value={values.mailingAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Address"
        variant="outlined"
        placeholder="Street Address"
        error={errors.mailingAddress && touched.mailingAddress}
        helperText={touched.mailingAddress ? errors.mailingAddress : null}
        sx={{ mt: 2 }}
      />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <TextField
          fullWidth
          color="gray600"
          bordercolor="gray200"
          required
          id="mailingCity"
          value={values.mailingCity}
          onChange={handleChange}
          onBlur={handleBlur}
          label="City"
          variant="outlined"
          placeholder="City"
          error={errors.mailingCity && touched.mailingCity}
          helperText={touched.mailingCity ? errors.mailingCity : null}
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          size="small"
          color="gray600"
          bordercolor="gray200"
          required
          id="mailingState"
          value={values.mailingState}
          onChange={handleChange}
          onBlur={handleBlur}
          label="State"
          variant="outlined"
          placeholder="State"
          error={errors.mailingState && touched.mailingState}
          helperText={touched.mailingState ? errors.mailingState : null}
          margin="normal"
          sx={{ ml: "4px" }}
        />
        <TextField
          fullWidth
          type="number"
          size="small"
          color="gray600"
          bordercolor="gray200"
          required
          id="mailingZipCode"
          value={values.mailingZipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Zipcode"
          variant="outlined"
          placeholder="Zipcode"
          error={errors.mailingZipCode && touched.mailingZipCode}
          helperText={touched.mailingZipCode ? errors.mailingZipCode : null}
          margin="normal"
          sx={{ ml: "4px" }}
        />
      </Stack>
    </React.Fragment>
  );
}

export default MailingAddressForm;
