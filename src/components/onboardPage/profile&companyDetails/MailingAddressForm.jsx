import React from "react";
import { Box, Checkbox, Grid, Input, Stack, TextField } from "@mui/material";

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
        required
        fullWidth
        size="medium"
        color="gray600"
        bordercolor="gray200"
        margin="normal"
        id="mailingAddress"
        value={values.mailingAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Address"
        variant="outlined"
        placeholder="Street Address"
        error={errors.mailingAddress && touched.mailingAddress}
        helperText={touched.mailingAddress ? errors.mailingAddress : null}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            id="mailingCity"
            value={values.mailingCity}
            onChange={handleChange}
            onBlur={handleBlur}
            label="City"
            variant="outlined"
            placeholder="City"
            error={errors.mailingCity && touched.mailingCity}
            helperText={touched.mailingCity ? errors.mailingCity : null}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            id="mailingState"
            value={values.mailingState}
            onChange={handleChange}
            onBlur={handleBlur}
            label="State"
            variant="outlined"
            placeholder="State"
            error={errors.mailingState && touched.mailingState}
            helperText={touched.mailingState ? errors.mailingState : null}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            id="mailingZipCode"
            value={values.mailingZipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            label="ZipCode"
            variant="outlined"
            placeholder="ZipCode"
            error={errors.mailingZipCode && touched.mailingZipCode}
            helperText={touched.mailingZipCode ? errors.mailingZipCode : null}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MailingAddressForm;
