import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import BackButton from "../../common/BackButton";
import Header from "../../common/Header";
import PropertyCard from "../../components/PropertyCard";
import PropertyUtilitiesCard from "../../components/PropertyUtilitiesCard";
import ResidentFeesCard from "../../components/ResidentFeesCard";
import ShowerIcon from "@mui/icons-material/Shower";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PestControlIcon from "@mui/icons-material/PestControl";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "@emotion/styled";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import { residentFees, residentUtilities } from "../utilities/Utilies";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import { basicSchema } from "../../common/validators";

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
function AddUtility() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [utilityCards, setUtilityCards] = useState(residentUtilities);

  const onSubmit = (id) => {
    console.log(values, notes, checked);

    setOpenModal(false);
  };

  const [cards, setCards] = useState(residentFees);

  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = (id) => {
    setOpenModal(true);
    setUtilityCards(
      utilityCards.map((card) => {
        if (card.id === id) {
          card.isSelected = !card.isSelected;
          console.log(card);
        }
        return card;
      })
    );
  };
  const handleModalClose = () => setOpenModal(false);

  const handleClick = (id) => {
    // cards[cardIndex] = {
    //   ...cards[cardIndex],
    //   isSelected: !cards[cardIndex].isSelected,
    // };
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          card.isSelected = !card.isSelected;
        }
        return card;
      })
    );
    setOpenModal(false);
  };

  const Item = styled(Paper)(() => ({
    width: "95%",
    height: "100px",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  }));
  // modal
  // formik
  const { values, handleChange, touched, errors, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        providerName: "",
        accountNickname: "",
        ownerPortion: "",
        billingCycle: "",
        billingBy: "",
      },
      validationSchema: basicSchema,
    });

  const [checked, setChecked] = useState(false);
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const [notes, setNotes] = useState("");
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  /* 
1-on card click modal open 
2-on particular card click show particular icon 
3-get all the input data 
4-after getting all the input data unable save button 
5-on save button click,push the data to array and show another modal
for now save button click show card active
*/

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ margin: { xs: "10px", md: "0px" } }}
      >
        <Box sx={modalStyle}>
          <Card>
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
                Property Utility
              </Typography>
            </Stack>

            <Box sx={{ p: "16px" }}>
              {/* box */}
              <Stack sx={{ border: "1px solid gray", borderRadius: "8px" }}>
                <Box sx={{ p: "8px" }}>Gas</Box>
                <Divider />
                <Box
                  sx={{
                    p: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    gap={"10px"}
                  >
                    <Typography>SV & Co.</Typography>
                    <Chip
                      label="Active"
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Box display={"flex"} gap={"10px"}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ textTransform: "none", fontWeight: "500" }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
            {/* buttons */}
            <Stack
              sx={{ p: "16px" }}
              width={"100%"}
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
              marginTop="15px"
            >
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "gray",
                  border: "1px solid gray",
                }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="secondary"
                sx={{ textTransform: "none" }}
                onClick={onSubmit}
              >
                Add New
              </Button>
            </Stack>
          </Card>
        </Box>
      </Modal>
      {/*  */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
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
          <Box sx={{ p: "16px" }}>
            {utilityCards.map((card) => {
              {
                if (card.isSelected) {
                  console.log(card);
                  <Box>{card.label}</Box>;
                }
              }
            })}
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
                onClick={handleModalClose}
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
                onClick={onSubmit}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Card>
      </Modal>
      <Box width="100%">
        {/* back btn */}
        <BackButton />
        <Header heading="Edit Utilities & Fees" title="" />
        <PropertyCard />
        {/* add utility */}
        <Card
          variant="elevation"
          sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
        >
          {/* heading */}
          <Stack>
            <Box display={"flex"} alignItems="center" gap={"10px"}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "gray900.main",
                }}
              >
                Property Utilities
              </Typography>
              <InfoOutlinedIcon fontSize="medium" color="gray900" />
            </Box>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "gray600.main",
              }}
            >
              Select all utilities you wish to charge the residents of this
              property
            </Typography>
            <Grid
              container
              columns={{ xs: 4, sm: 12, md: 12 }}
              justifyContent={"space-around"}
              alignItems="center"
              marginTop="24px"
              rowGap={"10px"}
            >
              {utilityCards.map((item, index) => (
                // console.log(item),
                <Grid
                  xs={2}
                  sm={4}
                  md={1}
                  key={index}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Item
                    onClick={() => handleModalOpen(item.id)}
                    key={index}
                    style={{
                      border: item.isSelected
                        ? "1px solid black"
                        : "1px solid gray",
                    }}
                  >
                    <Box>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#868E96",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Stack>
          {/*  */}
        </Card>
        {/* Resident Fees */}
        <Card
          variant="elevation"
          sx={{ width: "100%", height: "auto", mt: "16px", p: "24px" }}
        >
          {/* heading */}
          <Stack>
            <Box display={"flex"} alignItems="center" gap={"10px"}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "gray900.main",
                }}
              >
                Resident Fees
              </Typography>
              <InfoOutlinedIcon fontSize="medium" color="gray900" />
            </Box>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "gray600.main",
              }}
            >
              Select all additional amenities or services you offer to the
              residents of this property, for which you may charge fees.
            </Typography>
            <Grid
              container
              columns={{ xs: 4, sm: 12, md: 12 }}
              justifyContent={"space-around"}
              alignItems="center"
              marginTop="24px"
              rowGap={"10px"}
            >
              {cards.map((item, index) => (
                <Grid
                  xs={2}
                  sm={4}
                  md={1}
                  key={index}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Item
                    onClick={() => handleClick(item.id)}
                    key={index}
                    style={{
                      border: item.isSelected
                        ? "1px solid black"
                        : "1px solid gray",
                    }}
                  >
                    <Box>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#868E96",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Stack>
          {/*  */}
        </Card>
        {/* utility button */}
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          gap="20px"
          marginTop={"16px"}
        >
          <Button
            variant="contained"
            color="white"
            sx={{
              textTransform: "none",
              width: {
                xs: "100%",
                md: "103px",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            disabled
            variant="contained"
            color="white"
            sx={{
              textTransform: "none",
              width: {
                xs: "100%",
                md: "103px",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AddUtility;
