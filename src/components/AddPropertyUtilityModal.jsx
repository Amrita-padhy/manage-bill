import {
  Button,
  Card,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Switch,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "600px" },
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: "8px",
};

function AddPropertyUtilityModal({
  values,
  handleChange,
  touched,
  errors,
  onSubmit,
  handleBlur,
  handleAddUtilityModalOpen,
  addUtilityModalClose,
  selectedUtilityCard,
  checked,
  handleSwitch,
  handleNotes,
  notes,
  backToUtilityPage,
  setAddUtilityModalOpen,
  //
  addUtilityModalOpen,
  handleAddUtilityModalClose,
}) {
  return (
    <>
      <Modal
        open={addUtilityModalOpen}
        onClose={handleAddUtilityModalClose}
        sx={{ margin: { xs: "10px", md: "0px" } }}
      >
        <Card sx={modalStyle}>
          <Stack
            sx={{
              height: "50px",
              bgcolor: "#495057",
              color: "white.main",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              id="modal-modal-title"
              sx={{ fontSize: "18px", fontWeight: "600" }}
              color={"white.main"}
            >
              Add Property Utility
            </Typography>
          </Stack>
          <Box
            sx={{
              p: "16px",
            }}
          >
            <Stack alignItems={"center"} direction={"row"} gap={"10px"}>
              {selectedUtilityCard.icon}
              <Typography
                fontSize={"18px"}
                fontWeight="600"
                color={"gray700.main"}
              >
                {selectedUtilityCard.label}
              </Typography>
            </Stack>
            {/* gas */}

            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={handleSwitch}
                    color="secondary"
                  />
                }
                label="Active"
              />
              {/* form */}
            </Box>
            <Grid container rowGap={"15px"}>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  type={"text"}
                  sx={{ width: "97%" }}
                  id="providerName"
                  label="Provider Name"
                  placeholder="Provider Name"
                  bordercolor="gray200"
                  color="gray600"
                  value={values.providerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.providerName && touched.providerName}
                  helperText={touched.providerName ? errors.providerName : null}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  type={"text"}
                  sx={{ width: "97%" }}
                  id="accountNickname"
                  label="Account Nickname / Number"
                  placeholder="Account Nickname"
                  bordercolor="gray200"
                  color="gray600"
                  value={values.accountNickname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.accountNickname && touched.accountNickname}
                  helperText={
                    touched.accountNickname ? errors.accountNickname : null
                  }
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  type={"text"}
                  sx={{ width: "97%" }}
                  id="ownerPortion"
                  label="Owner’s Portion"
                  placeholder="% Owner portion"
                  bordercolor="gray200"
                  color="gray600"
                  value={values.ownerPortion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.ownerPortion && touched.ownerPortion}
                  helperText={touched.ownerPortion ? errors.ownerPortion : null}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    width: "97%",

                    mt: "15px",
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    select
                    variant="outlined"
                    type={"text"}
                    id="billingCycle"
                    name={"billingCycle"}
                    label="billing Cycle"
                    placeholder="billingCycle"
                    bordercolor="gray200"
                    color="gray600"
                    value={values.billingCycle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.billingCycle && touched.billingCycle}
                    helperText={
                      touched.billingCycle ? errors.billingCycle : null
                    }
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </TextField>
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ width: "97%", mt: "15px" }}>
                  <TextField
                    required
                    fullWidth
                    select
                    variant="outlined"
                    type={"text"}
                    id="billingBy"
                    name={"billingBy"}
                    label="Bill By"
                    placeholder="Select bill by unit"
                    bordercolor="gray200"
                    color="gray600"
                    value={values.billingBy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.billingBy && touched.billingBy}
                    helperText={touched.billingBy ? errors.billingBy : null}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </TextField>
                </Box>
              </Grid>
            </Grid>
            <TextareaAutosize
              value={notes}
              onChange={handleNotes}
              style={{
                width: "97%",
                height: "60px",
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
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
              marginTop="15px"
            >
              <Button
                variant="outlined"
                onClick={handleAddUtilityModalClose}
                sx={{
                  textTransform: "none",
                  color: "gray",
                  border: "1px solid gray",
                }}
              >
                Cancel
              </Button>

              <Button
                // disabled={
                //   !values.providerName ||
                //   !values.accountNickname ||
                //   !values.ownerPortion ||
                //   !values.billingCycle ||
                //   !values.billingBy ||
                //   errors.providerName ||
                //   errors.accountNickname ||
                //   errors.ownerPortion ||
                //   errors.billingCycle ||
                //   errors.billingBy
                // }
                variant="contained"
                color="secondary"
                sx={{ textTransform: "none" }}
                onClick={() => onSubmit(selectedUtilityCard.id)}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Card>
      </Modal>
    </>
  );
}

export default AddPropertyUtilityModal;
