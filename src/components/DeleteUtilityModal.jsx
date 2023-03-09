import { Box, Button, Card, Modal, Stack, Typography } from "@mui/material";
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
function DeleteUtilityModal({
  deleteUtilityModalOpen,
  handleDeleteModalClose,
  handleDeleteModals,
  setEditModalOpen,
  setDeleteUtilityModalOpen,
}) {
  const handleDeleteUtility = () => {
    setDeleteUtilityModalOpen(false);
    setEditModalOpen(true);
  };

  return (
    <>
      <Modal
        open={deleteUtilityModalOpen}
        onClose={handleDeleteModalClose}
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
                Delete
              </Typography>
            </Stack>

            <Box padding={"10px"} textAlign="center">
              <Typography
                id="modal-modal-title"
                sx={{ fontSize: "18px", fontWeight: "600" }}
                color={"gray900.main"}
              >
                Delete Utility?
              </Typography>
              <Typography
                id="modal-modal-title"
                sx={{ fontSize: "18px", fontWeight: "600" }}
                color={"gray600.main"}
              >
                Are you sure you want to delete Account nickname utility from
                records?
              </Typography>
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
                onClick={handleDeleteUtility}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: "none" }}
                onClick={handleDeleteModals}
              >
                Yes, delete
              </Button>
            </Stack>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteUtilityModal;
