import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function NoteTextArea() {
  const [isDisable, setIsDisable] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const { user } = useSelector((state) => state.user);
  const noteTextHandler = (e) => {
    setNoteText(e.target.value);
  };

  const addNotes = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        text: noteText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setNoteText("");
  };
  const deleteNote = () => {
    setNoteText("");
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <>
      <Card variant="outlined" sx={{ height: "auto", my: "16px", p: "24px" }}>
        <Typography
          sx={{
            fontSize: "20px",

            fontWeight: "600",
            color: "gray900.main",
          }}
        >
          Add notes
        </Typography>
        <TextareaAutosize
          disabled={isDisable}
          style={{
            width: "100%",
            height: "120px",
            border: "1px solid gray",
            color: "gray600.main",
            padding: "15px",
            marginTop: "24px",
            fontWeight: 400,
          }}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Additional notes"
          value={noteText}
          onChange={noteTextHandler}
        />

        <Box
          display={"flex"}
          justifyContent={{ xs: "space-evenly", md: "flex-end" }}
          alignItems={"center"}
          gap="10px"
          mt="10px"
        >
          <Button
            variant="outlined"
            color="gray700"
            sx={{ textTransform: "none", bgcolor: "gray200" }}
            onClick={deleteNote}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
            onClick={addNotes}
            disabled={noteText.length === 0}
          >
            Add Notes
          </Button>
        </Box>
        {notes.length ? (
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "gray600.main",
            }}
          >
            Past Notes
          </Typography>
        ) : null}

        <Card
          sx={{
            bgcolor: "gray200.main",
            height: "auto",
            mt: "10px",
          }}
        >
          {notes.map((note, index) => (
            <Box key={index}>
              <Box
                disabled={isDisable}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "gray700.main",
                  m: "12px",
                }}
              >
                {note.text}
                <Box
                  display={{ xs: "block", md: "flex" }}
                  justifyContent={"flex-start"}
                  alignItems="center"
                  gap={"10px"}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",

                      fontWeight: "400",
                      color: "gray600.main",
                    }}
                  >
                    {currentDate}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "gray600.main",
                    }}
                  >
                    {currentTime}
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "gray900.main",
                      }}
                    >
                      Entered By:
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "gray600.main",
                      }}
                    >
                      {user.firstName}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))}
        </Card>
      </Card>
    </>
  );
}

export default NoteTextArea;
