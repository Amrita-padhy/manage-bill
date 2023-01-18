import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CommanderCard from "./CommanderCard";
import CreditCard from "./CreditCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function PaymentDetailsCard({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) {
  return (
    <>
      <Box
        width="100vw"
        height={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignitems={"center"}
      >
        <Box
          width="800px"
          bgcolor="white.main"
          height={"auto"}
          padding="24px"
          borderRadius="8px"
        >
          {/* heading */}
          <Stack direction={"row"} alignItems="center" spacing={1}>
            <Box
              color="gray900.main"
              fontSize="20px"
              fontWeight="700"
              lineHeight={"30px"}
            >
              Select Level of Subscription
            </Box>
            <InfoOutlinedIcon fontSize="small" color="gray600" />
          </Stack>
          {/* card components */}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
            marginTop={"32px"}
          >
            <CommanderCard />
            <CreditCard />
          </Stack>
          {/* billing address */}
          <Box
            color="gray900.main"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"30px"}
            marginTop={"30px"}
          >
            Billing Address
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
          {/* Checkbox */}
          <Stack direction={"row"} alignItems="center">
            <Checkbox color="secondary" size="small" />
            <Box
              color="gray600.main"
              fontWeight="400"
              fontSize="16px"
              lineHeight={"24px"}
            >
              Billing address same as mailing address
            </Box>
          </Stack>
          {/* footer */}
          <Box marginTop={"20px"}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "16px",
                // paddingX: "20px",
                // paddingTop: "13px",
                textAlign: "center",
              }}
              color="gray600.main"
            >
              Following your two-month free trial, you will automatically be
              charged each month $x per # of licensed units. Click on GET
              STARTED to authorize.
            </Typography>
            {/* Checkbox */}
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"center"}
            >
              <Checkbox color="secondary" size="small" />
              <Box
                color="gray600.main"
                fontWeight="400"
                fontSize="16px"
                lineHeight={"24px"}
              >
                I acknowledge that I have read and agree to the
                <Box component={"span"} color={"secondary.main"}>
                  Terms & Conditions
                </Box>
              </Box>
            </Stack>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              marginTop="30px"
            >
              {/* button */}

              <Button
                variant="contained"
                bgcolor="primary"
                disableElevation
                sx={{
                  py: "10px",
                  px: "30px",
                  color: "gray700.main",
                  "&:hover": {
                    backgroundColor: "#FBE122",
                  },
                  width: { xs: "100%", sm: "auto" },
                }}
                endIcon={<ArrowForwardIcon />}
                onClick={handleSubmit}
                fontWeight="500"
                fontSize="14px"
                lineHeight={"22px"}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PaymentDetailsCard;
