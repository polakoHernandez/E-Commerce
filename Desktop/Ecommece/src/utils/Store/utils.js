import CardItem from "../../components/common/CardItem";
import { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import CardShowItem from "../../components/common/CardShowItem";
import CartButton from "../../components/common/CartButton";
import ItemsModal from "../../components/common/ItemsModal";

const getProducts = async () => {
  const request = await fetch("https://fakestoreapi.com/products");
  const response = await request.json();
  return response;
};

const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number) => {
  return currencyFormatter.format(number);
};

export {
  CardItem,
  formatCurrency,
  useState,
  useEffect,
  getProducts,
  Grid,
  CircularProgress,
  CardShowItem,
  CartButton,
  ItemsModal,
};
