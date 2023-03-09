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
  handleOnDeleteClick,
  setAddUtilityModalOpen,
}) {
  const handleAddNew = () => {
    setAddUtilityModalOpen(true);
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

            <Box sx={{ p: "16px" }}>
              {/* box */}
              <Stack sx={{ border: "1px solid gray", borderRadius: "8px" }}>
                <Box sx={{ p: "8px" }}>
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
                  {/* buttons */}
                  <Box display={{ xs: "none", md: "flex" }} gap={"10px"}>
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
                      onClick={handleOnDeleteClick}
                    >
                      Delete
                    </Button>
                  </Box>
                  <Box display={{ xs: "flex", md: "none" }} gap={"10px"}>
                    <IconButton aria-label="edit">
                      <BorderColorOutlinedIcon color="secondary" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={handleOnDeleteClick}
                    >
                      <DeleteOutlineOutlinedIcon color="error" />
                    </IconButton>
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
