import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BackButton from "../../common/BackButton";
import Header from "../../common/Header";
import PropertyCard from "../../components/PropertyCard";
import styled from "@emotion/styled";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import { residentFees, residentUtilities } from "../utilities/Utilies";
import { useFormik } from "formik";
import { basicSchema } from "../../common/validators";
import AddPropertyUtilityModal from "../../components/AddPropertyUtilityModal";
import EditUtilityModal from "../../components/EditUtilityModal";
import DeleteUtilityModal from "../../components/DeleteUtilityModal";

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

function AddUtility() {
  // delete modal
  const [deleteUtilityModalOpen, setDeleteUtilityModalOpen] = useState(false);
  const handleDeleteModalOpen = () => {
    setDeleteUtilityModalOpen(true);
  };
  const handleDeleteModalClose = () => setDeleteUtilityModalOpen(false);
  // edit modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const handleEditModalOpen = () => setEditModalOpen(true);
  const handleEditModalClose = () => setEditModalOpen(false);
  // add utility modal
  const [addUtilityModalOpen, setAddUtilityModalOpen] = useState(false);
  const handleAddUtilityModalOpen = (id) => {
    setAddUtilityModalOpen(true);
    setSelectedUtilityCard(utilityCards.find((card) => card.id === id));
    console.log(selectedUtilityCard);
  };
  const handleAddUtilityModalClose = () => setAddUtilityModalOpen(false);
  //
  const [utilityCards, setUtilityCards] = useState(residentUtilities);
  const [selectedUtilityCard, setSelectedUtilityCard] = useState({});
  const [cards, setCards] = useState(residentFees);
  const [checked, setChecked] = useState(false);
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };
  const [notes, setNotes] = useState("");
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };
  const onSubmit = (id) => {
    console.log(values, notes, checked);
    console.log(selectedUtilityCard.account.push(values, notes, checked));
    console.log(selectedUtilityCard.account);
    if (selectedUtilityCard.account) {
      setUtilityCards(
        utilityCards.map((card) => {
          if (card.id === id) {
            card.isSelected = !card.isSelected;
          }
          return card;
        })
      );
      setEditModalOpen(true);
    }
    setAddUtilityModalOpen(false);
  };

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
    setAddUtilityModalOpen(false);
  };

  // formik
  const { values, handleChange, touched, errors, handleBlur } = useFormik({
    initialValues: {
      providerName: "",
      accountNickname: "",
      ownerPortion: "",
      billingCycle: "",
      billingBy: "",
    },
    validationSchema: basicSchema,
  });

  //handle delete ,delete utility page
  const handleDeleteModals = () => {
    setEditModalOpen(false);
    setDeleteUtilityModalOpen(false);
  };
  // handle delete edit utility page
  const handleOnDeleteClick = () => {
    setDeleteUtilityModalOpen(true);
    setEditModalOpen(false);
  };
  return (
    <>
      {/* delete popup modal */}
      <DeleteUtilityModal
        deleteUtilityModalOpen={deleteUtilityModalOpen}
        handleDeleteModalClose={handleDeleteModalClose}
        handleDeleteModals={handleDeleteModals}
        setEditModalOpen={setEditModalOpen}
        setDeleteUtilityModalOpen={setDeleteUtilityModalOpen}
      />
      {/* edit utility */}
      <EditUtilityModal
        editModalOpen={editModalOpen}
        handleEditModalClose={handleEditModalClose}
        selectedUtilityCard={selectedUtilityCard}
        handleDeleteModalOpen={handleDeleteModalOpen}
        handleOnDeleteClick={handleOnDeleteClick}
        setAddUtilityModalOpen={setAddUtilityModalOpen}
      />
      {/* add utility modal */}
      <AddPropertyUtilityModal
        values={values}
        handleChange={handleChange}
        touched={touched}
        errors={errors}
        onSubmit={onSubmit}
        handleBlur={handleBlur}
        handleAddUtilityModalOpen={handleAddUtilityModalOpen}
        setAddUtilityModalOpen={setAddUtilityModalOpen}
        selectedUtilityCard={selectedUtilityCard}
        checked={checked}
        handleSwitch={handleSwitch}
        handleNotes={handleNotes}
        notes={notes}
        addUtilityModalOpen={addUtilityModalOpen}
        handleAddUtilityModalClose={handleAddUtilityModalClose}
      />
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
                <Grid
                  xs={2}
                  sm={4}
                  md={1}
                  key={index}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Item
                    variant="elevation"
                    onClick={() => handleAddUtilityModalOpen(item.id)}
                    key={index}
                    style={{
                      border: item.isSelected ? "1px solid black" : "null",
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
