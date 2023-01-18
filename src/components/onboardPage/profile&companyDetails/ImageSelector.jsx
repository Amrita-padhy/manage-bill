import { Box, Icon, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Input from "@mui/material/Input";
import { Image } from "@mui/icons-material";

function ImageSelector({}) {
  const [image, setImage] = useState();

  const handlePreviewImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);
  return (
    <>
      <Stack>
        <Box
          fontSize="14px"
          lineHeight="20px"
          fontWeight="500"
          color="gray600.main"
          marginBottom={1}
        >
          Avatar
        </Box>
      </Stack>
      <Stack>
        {image ? (
          <Image
            sx={{ height: "150px", width: "150px" }}
            src={"URL.createObjectURL(image)"}
            borderRadius={"100%"}
          />
        ) : (
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handlePreviewImage}
            />

            <Box
              width={"150px"}
              height={"150px"}
              borderRadius="100%"
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ border: "1px dashed gray" }}
            >
              <Box
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                spacing="4"
              >
                <AddCircleOutlineIcon color="gray600" />
              </Box>
            </Box>
          </label>
        )}
        {/*  */}
        <Stack
          fontSize="12px"
          lineHeight="14px"
          fontWeight="500"
          direction={"row"}
          spacing={1}
          marginTop={1}
        >
          <Box color="gray700.main">Drag and Drop or</Box>

          <Box color="secondary.main">SELECT</Box>
        </Stack>
      </Stack>
    </>
  );
}

export default ImageSelector;
