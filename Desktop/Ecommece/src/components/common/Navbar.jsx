import React, { useEffect, useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Badge,
} from "@mui/material";
import Name from "./Name";
import "../../styles/Navbar/styles.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { openOrClose } from "../../store/slices";

const Navbar = () => {
  const navigate = useNavigate("");
  const miDato = useSelector((state) => state.totalItems);
  const itemsState = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const styles = {
    firsContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    secondContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    pagesContainer: {
      width: "200px",
      height: "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // backgroundColor: "red",
    },

    options: {
      fontFamily: "'Madimi One', sans-serif",
    },
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ height: "80px", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ ...styles.firsContainer }}>
            <Box sx={{ ...styles.secondContainer }}>
              <Name></Name>
              <Box sx={{ ...styles.pagesContainer }}>
                <motion.div
                  className="button"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.8 }}
                >
                  <Typography
                    className="option"
                    sx={{ ...styles.options }}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Typography>
                </motion.div>
                <motion.div
                  className="button"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3 }}
                >
                  <Typography
                    className="option"
                    sx={{ ...styles.options }}
                    onClick={() => navigate("/store")}
                  >
                    About
                  </Typography>
                </motion.div>
                <motion.div
                  className="button"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.2 }}
                >
                  <Typography
                    className="option"
                    sx={{ ...styles.options }}
                    onClick={() => navigate("/store")}
                  >
                    Store
                  </Typography>
                </motion.div>
                <motion.div
                  className="button"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.2 }}
                >
                  <Badge
                    badgeContent={miDato}
                    color="success"
                    onClick={() => dispatch(openOrClose())}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
