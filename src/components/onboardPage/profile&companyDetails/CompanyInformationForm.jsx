import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            fullWidth
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            id="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Company Name"
            variant="outlined"
            placeholder="Company Name"
            error={errors.companyName && touched.companyName}
            helperText={touched.companyName ? errors.companyName : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            id="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Website"
            variant="outlined"
            placeholder="Website"
            error={errors.website && touched.website}
            helperText={touched.website ? errors.website : null}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        color="gray600"
        bordercolor="gray200"
        margin="normal"
        size="medium"
        id="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Address"
        variant="outlined"
        placeholder="Street Address"
        error={errors.address && touched.address}
        helperText={touched.address ? errors.address : null}
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
            id="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            label="City"
            variant="outlined"
            placeholder="City"
            error={errors.city && touched.city}
            helperText={touched.city ? errors.city : null}
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
            id="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            label="State"
            variant="outlined"
            placeholder="State"
            error={errors.state && touched.state}
            helperText={touched.state ? errors.state : null}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            color="gray600"
            bordercolor="gray200"
            margin="normal"
            size="medium"
            required
            id="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            label="ZipCode"
            variant="outlined"
            placeholder="ZipCode"
            error={errors.zipCode && touched.zipCode}
            helperText={touched.zipCode ? errors.zipCode : null}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        sx={{ color: "gray600.main" }}
        control={<Checkbox color="secondary" size="small" />}
        label="Mailing Address same as above"
      />
    </React.Fragment>
  );
}

export default CompanyInformationForm;
