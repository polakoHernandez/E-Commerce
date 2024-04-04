import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  openOrClose,
  removeByIndex,
  decrease,
  sumPrices,
} from "../../store/slices";
import { formatCurrency } from "../../utils/Store/utils";
import "../../styles/DeleteButton/styles.css";
import logo from "../../../src/assets/Wompi_LogoPrincipal.png";

export default function ItemsModal({ open, close, data }) {
  const styles = {
    gridContainer: {
      //   backgroundColor: "red",
      width: "100%",
      //   height: "100%",
    },

    gridItem: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },

    typographys: {
      fontFamily: "'Madimi One', sans-serif",
    },

    buttonGrid: {
      display: "flex",
      justifyContent: "end",
    },

    buttonContainer: {
      width: "30%",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      marginRight: "20px",
    },
  };

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  console.log(items);
  const price = useSelector((state) =>
    state.items.reduce((total, item) => total + item.price, 0)
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outline: "none",
        }}
      >
        <Box class="card">
          <Grid container sx={{ ...styles["gridContainer"] }}>
            <Grid item xs={12} sx={{ ...styles["buttonGrid"] }}>
              <IconButton onClick={() => dispatch(openOrClose())}>
                <Close></Close>
              </IconButton>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: "50px" }}>
              <Typography
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "'Madimi One', sans-serif",
                  fontSize: "30px",
                }}
              >
                Items
              </Typography>
            </Grid>
            {items.map((item, index) => (
              <Grid
                item
                xs={12}
                sx={{ ...styles["gridItem"] }}
                key={item["id"]}
              >
                <Box sx={{ width: "70%", padding: "15px" }}>
                  <Box>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item["image"]}
                    ></img>
                  </Box>
                  <Typography sx={{ ...styles["typographys"] }}>
                    {item["title"]}
                  </Typography>
                  <Typography sx={{ ...styles["typographys"] }}>
                    {formatCurrency(item["price"])}
                  </Typography>
                </Box>
                <Box sx={{ ...styles["buttonContainer"] }}>
                  <button
                    class="delete-button"
                    onClick={() => {
                      dispatch(removeByIndex(index));
                      dispatch(decrease(1));
                    }}
                  >
                    <svg class="delete-svgIcon" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </Box>
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  width: "50%",
                  marginLeft: "20px",
                  ...styles["typographys"],
                }}
              >
                Total
              </Typography>
              <Typography
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginRight: "25px",
                  ...styles["typographys"],
                }}
              >
                {formatCurrency(price)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form action="https://checkout.wompi.co/p/" method="GET">
                <input
                  type="hidden"
                  name="public-key"
                  value="LLAVE_PUBLICA_DEL_COMERCIO"
                />
                <input type="hidden" name="currency" value="MONEDA" />
                <input
                  type="hidden"
                  name="amount-in-cents"
                  value={price * 100}
                />
                <input
                  type="hidden"
                  name="reference"
                  value="REFERENCIA_DE_PAGO"
                />
                <input
                  type="hidden"
                  name="signature:integrity"
                  value="FIRMA_DE_INTEGRIDAD"
                />

                <Button
                  disabled={items.length === 0 ? true : false}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ ...styles["typographys"] }}
                >
                  Pagar con
                  <img
                    style={{ width: "50px", height: "30px" }}
                    src={logo}
                  ></img>
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
