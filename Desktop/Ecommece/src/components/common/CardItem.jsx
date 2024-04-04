import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { formatCurrency } from "../../utils/Store/utils";
import AddButton from "./AddButton";
import "../../styles/CardItem/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../../store/slices";
const CardItem = ({
  name,
  price,
  description,
  id,
  image,
  onClick,
  key,
  item,
}) => {
  const styles = {
    tittle: {
      display: "block",
      // backgroundColor: "pink",
      width: "100px",
      maxWidth: "50%",
      fontFamily: "'Madimi One', sans-serif",
      fontSize: "15px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    generalContent: {
      // backgroundColor: "pink",
      width: "100%",
      height: "30px",
      display: "flex",
      alignItems: "center",
    },

    addButtonContainer: {
      width: "50%",
      display: "flex",
      justifyContent: "start",
      marginLeft: "10px",
    },

    priceContainer: {
      width: "50%",
      display: "flex",
      justifyContent: "end",
      marginRight: "5px",
      fontFamily: "'Madimi One', sans-serif",
    },
  };

  const miDato = useSelector((state) => state.totalItems);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(miDato);
  const increaseItemCount = () => {
    dispatch(increase(1));
  };

  return (
    <Card className="card-item" id={id} onClick={onClick} key={key}>
      <CardHeader
        title={<span style={{ ...styles.tittle }}>{name}</span>}
        action={
          <Box>
            <IconButton>
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          </Box>
        }
      ></CardHeader>
      <CardMedia component="img" height="200" image={image}></CardMedia>
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Box sx={{ ...styles.generalContent }}>
          <Box sx={{ ...styles.addButtonContainer }}>
            <AddButton item={item}></AddButton>
          </Box>
          <Box sx={{ ...styles.priceContainer }}>{formatCurrency(price)}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;
