import { Button, Chip, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React from "react";
import { Login } from "@mui/icons-material";

function EditAndDeleteCard({ item, id, deleteModalOpen, editAccount }) {
  return (
    <>
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
          <Typography>
            {item.providerName}
            {item.id}
          </Typography>
          {/* {checked === true ? (
            <Chip
              label="Active"
              color="success"
              size="small"
              variant="outlined"
            />
          ) : (
            <Chip
              label="Active"
              color="success"
              size="small"
              variant="outlined"
              disabled
            />
          )} */}
        </Box>
        {/*  */}

        {/* buttons */}
        <Box display={{ xs: "none", md: "flex" }} gap={"10px"}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: "none",
            }}
            onClick={() => editAccount(item.id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ textTransform: "none", fontWeight: "500" }}
            onClick={deleteModalOpen}
          >
            Delete
          </Button>
        </Box>
        <Box display={{ xs: "flex", md: "none" }} gap={"10px"}>
          <IconButton aria-label="edit">
            <BorderColorOutlinedIcon color="secondary" />
          </IconButton>
          <IconButton aria-label="delete" onClick={deleteModalOpen}>
            <DeleteOutlineOutlinedIcon color="error" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default EditAndDeleteCard;
