import * as React from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function CardShowItem({ open, close, data }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
      >
        <motion.div
          initial={{
            position: "relative",
            // backgroundColor: "cyan",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -170%)",
            width: 800,
            height: 550,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "none",
            outline: "none", // Esta línea elimina el borde de selección
          }}
          animate={{
            transform: open
              ? "translate(-50%, -50%)"
              : " translate(-50%, -170%)",
          }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.3,
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              border: "none",
            }}
          >
            <Box
              sx={{
                width: "300px",
                height: "300px",
                borderRadius: "15px",
                position: "absolute",
                top: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={data["image"]}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </Box>
          </motion.div>
          <motion.div
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "70%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "15px",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
          >
            <Grid
              container
              sx={{
                width: "95%",
                // backgroundColor: "purple",
                // marginTop: "170px",
                overflowY: "auto",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  // backgroundColor: "purple",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginBottom: "120px",
                }}
              >
                <IconButton onClick={close}>
                  <Close></Close>
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "cyan",
                    width: "100%",
                    fontFamily: "'Madimi One', sans-serif",
                  }}
                >
                  {data["title"]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ width: "100%", fontFamily: "'Madimi One', sans-serif" }}
                >
                  Description:
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    fontFamily: "'Madimi One', sans-serif",
                    textAlign: "justify",
                  }}
                >
                  {data["description"]}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </motion.div>
      </Modal>
    </div>
  );
}
