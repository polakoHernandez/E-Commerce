import React, { useState } from "react";
import {
  Fab,
  Tooltip,
  Modal,
  Typography,
  Fade,
  Box,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add as AddIcon, DateRange, Person } from "@mui/icons-material";
import {
  EmojiEmotions,
  Image,
  VideoCameraFront,
  PersonAdd,
} from "@mui/icons-material";

const Add = () => {
  const [show, setShow] = useState(false);

  const UserBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginLeft: "10px",
  });

  return (
    <>
      <Tooltip onClick={() => setShow(true)}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <AddIcon></AddIcon>
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={show}
        onClose={() => setShow(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={show}>
          <Box
            sx={{
              backgroundColor: "background.default",
              width: "450px",
              height: "400px",
              borderRadius: "15px",
              color: "text.primary",
            }}
          >
            <Typography variant="h6" color="gray" textAlign="center" mt="10px">
              Create Post
            </Typography>
            <UserBox>
              <Avatar
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sx={{ width: 30, height: 30 }}
              ></Avatar>
              <Typography fontWeight={500} variant="h6" width="100%">
                Luvasky
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "90%", marginLeft: "5%", marginTop: "20px" }}
              multiline
              rows={4}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} justifyContent="start" ml={2} mt={2}>
              <EmojiEmotions color="primary"></EmojiEmotions>
              <Image color="secondary"></Image>
              <VideoCameraFront color="success"></VideoCameraFront>
              <PersonAdd color="error"></PersonAdd>
            </Stack>
            <ButtonGroup
              variant="contained"
              aria-label="Basic button group"
              sx={{ width: "90%", ml: "5%", mt: "5%" }}
            >
              <Button sx={{ width: "90%" }}>Post</Button>
              <Button sx={{ width: "10%" }}>
                <DateRange></DateRange>
              </Button>
            </ButtonGroup>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Add;
