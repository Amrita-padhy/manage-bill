import React, { useState } from "react";
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
import PlanCard from "./PlanCard";
import EastIcon from "@mui/icons-material/East";

import LoadingButton from "@mui/lab/LoadingButton";

function PaymentDetailsCard({
  values,
  handleChange,
  touched,
  errors,
  onSubmit,
  handleBlur,
  handleAcknowledgeBtn,
  acknowledgeBtn,
  isLoading,
}) {
  console.log(values);
  const PlanVariant = [
    {
      name: "COMMANDER",
      highlight: "Have utilities and other fees to charge residents.",
      costDetails: "FREE + $*",
      costPerUnit: 3,
      isSelected: true,
      planFeatures: [
        {
          stroke: "none",
          fill: "currentColor",
          details: "Recover unlimited property utilities",
        },
        {
          details: `Lower property's utility use`,
        },
        {
          details: "Pass through & increase admin fees for additional revenue",
        },
        {
          details: "Improve your NOI!",
        },
        {
          details: "Bill Boldy and Prosper!",
        },
      ],
    },
    {
      name: "CADET",
      highlight: "Only have 1 utility to bill residents (ex. Water/Sewer).",
      costDetails: "FREE*",
      costPerUnit: 2,
      isSelected: false,
      planFeatures: [
        {
          details: "Recover 1 property utility ( ex. water/sewer)",
        },
        {
          details: `Lower property's utility use`,
        },
        {
          details: "Pass thru admin fees to residents*",
        },
        {
          details: "Improve your NOI!",
        },
        {
          details: "Bill Boldy!",
        },
      ],
    },
  ];

  const [plan, setPlan] = useState(PlanVariant);

  const selectSubscription = (val) => {
    setPlan(
      plan.map((p) =>
        p.name === val
          ? { ...p, isSelected: true }
          : { ...p, isSelected: false }
      )
    );
    values.subscriptionType = plan.find((p) => p.isSelected).name;
  };
  console.log(values);

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
            <Box fontSize="20px" fontWeight="700" lineheight={"30px"}>
              Select Level of Subscription
            </Box>
            <InfoOutlinedIcon fontSize="small" color="gray600" />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
            marginTop={"32px"}
          >
            {plan.map((e, index) => (
              <PlanCard
                key={index}
                {...e}
                selectSubscription={selectSubscription}
              />
            ))}
          </Stack>
          {/* billing address */}
          <Box
            color="gray900.main"
            fontSize="20px"
            fontWeight="700"
            lineheight={"30px"}
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
            id="billingAddress"
            value={values.billingAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Address"
            variant="outlined"
            placeholder="Street Address"
            error={errors.billingAddress && touched.billingAddress}
            helperText={touched.billingAddress ? errors.billingAddress : null}
            sx={{ mt: 2 }}
          />
          <Stack direction={{ xs: "column", sm: "row" }}>
            <TextField
              fullWidth
              size="small"
              color="gray600"
              bordercolor="gray200"
              required
              id="billingCity"
              value={values.billingCity}
              onChange={handleChange}
              onBlur={handleBlur}
              label="City"
              variant="outlined"
              placeholder="City"
              error={errors.billingCity && touched.billingCity}
              helperText={touched.billingCity ? errors.billingCity : null}
              sx={{ mt: 2, mr: 1 }}
            />
            <TextField
              fullWidth
              size="small"
              color="gray600"
              bordercolor="gray200"
              required
              id="billingState"
              value={values.billingState}
              onChange={handleChange}
              onBlur={handleBlur}
              label="State"
              variant="outlined"
              placeholder="State"
              error={errors.billingState && touched.billingState}
              helperText={touched.billingState ? errors.billingState : null}
              sx={{ mb: 2, mt: 2, mr: 1 }}
            />
            <TextField
              fullWidth
              type="number"
              size="small"
              color="gray600"
              bordercolor="gray200"
              required
              id="billingZipCode"
              value={values.billingZipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Zipcode"
              variant="outlined"
              placeholder="Zipcode"
              error={errors.billingZipCode && touched.billingZipCode}
              helperText={touched.billingZipCode ? errors.billingZipCode : null}
              sx={{ mb: 2, mt: 2, mr: 1 }}
            />
          </Stack>
          {/* Checkbox */}
          <Stack direction={"row"} alignItems="center">
            <Checkbox
              color="secondary"
              size="small"
              id="isMailingAddress"
              onChange={handleChange}
              value={values.isMailingAddress}
            />
            <Box
              color="gray600.main"
              fontWeight="400"
              fontSize="16px"
              lineheight={"24px"}
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
                lineheight: "16px",
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
              <Checkbox
                color="secondary"
                size="small"
                checked={acknowledgeBtn}
                onChange={handleAcknowledgeBtn}
              />
              <Box
                color="gray600.main"
                fontWeight="400"
                fontSize="16px"
                lineheight={"24px"}
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

              <LoadingButton
                variant="contained"
                bgcolor="primary"
                disableElevation
                loading={isLoading}
                sx={{
                  py: "10px",
                  px: "30px",
                  color: "gray700.main",
                  "&:hover": {
                    backgroundColor: "#FBE122",
                  },
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={onSubmit}
                fontWeight="500"
                fontSize="14px"
                lineheight={"22px"}
                endIcon={<EastIcon />}
                disabled={!acknowledgeBtn}
              >
                Get Started
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PaymentDetailsCard;
