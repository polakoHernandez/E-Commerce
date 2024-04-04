import React from "react";
import "../../styles/AddButton/styles.css";
import { increase, add } from "../../store/slices";
import { useDispatch } from "react-redux";

const AddButton = ({ id, item }) => {
  const dispatch = useDispatch();
  return (
    <div
      id={id}
      className="container-add-cart"
      onClick={(event) => {
        event.stopPropagation();
        dispatch(increase(1));
        dispatch(add(item));
      }}
    >
      <span className="cart-message">Add to cart</span>
    </div>
  );
};

export default AddButton;
