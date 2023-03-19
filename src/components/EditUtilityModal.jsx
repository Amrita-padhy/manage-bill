import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditAndDeleteCard from "../common/EditAndDeleteCard";
import { useState } from "react";

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
function EditUtilityModal({
  editModalOpen,
  handleEditModalClose,
  selectedUtilityCard,
  setAddUtilityModalOpen,
  checked,
  setSelectedUtilityCard,
  handleDeleteModalOpen,
  editAccount,
}) {
  const handleOnDelete = (id) => {
    console.log(id);
    acc = selectedUtilityCard.account.filter((acc) => acc.id !== id);
    console.log(acc);
    // utilsAccount = acc;
    // setAccount(acc);
    setSelectedUtilityCard(acc);
    console.log(selectedUtilityCard);
  };
  console.log(selectedUtilityCard?.account);

  const handleAddNew = () => {
    setAddUtilityModalOpen(true);
    handleEditModalClose();
  };

  const deleteModalOpen = () => {
    handleDeleteModalOpen();
    handleEditModalClose();
  };

  return (
    <>
      <Modal
        open={editModalOpen}
        onClose={handleEditModalClose}
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

            <Box
              sx={{
                px: "16px",
                py: "32px",
              }}
            >
              {/* box */}
              <Stack
                sx={{
                  border: "1px solid #DBDDDF",
                  borderRadius: "4px",
                }}
              >
                <Box sx={{ p: "8px", bgcolor: "#F3F4F4" }}>
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
                </Box>
                <Divider />

                {selectedUtilityCard.account?.map((item) => (
                  <EditAndDeleteCard
                    key={item.id}
                    id={item.id}
                    item={item}
                    checked={checked}
                    editAccount={() => editAccount(item.id)}
                    deleteModalOpen={deleteModalOpen}
                  />
                ))}
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
                onClick={handleEditModalClose}
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
                // add a new utility form
                onClick={handleAddNew}
              >
                Add New
              </Button>
            </Stack>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

export default EditUtilityModal;
/*
on edit click open utility modal 
how to set form values on edit 
*/
