import { createSlice } from "@reduxjs/toolkit";

export const addItems = createSlice({
  name: "totalItems",
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      return state + action.payload;
    },

    decrease: (state, action) => {
      if (state === 0) {
        return;
      }
      return state - action.payload;
    },
  },
});

export const items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    removeByIndex: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1);
      }
    },

    sumPrices: (state) => {
      if (state.length === 0) {
        return 0; // Si no hay elementos, devuelve 0
      }
      // Suma los precios de todos los elementos
      return state.reduce((total, item) => total + item.price, 0);
    },
  },
});

export const openItemsModal = createSlice({
  name: "openItems",
  initialState: false,
  reducers: {
    openOrClose: (state, action) => {
      state = !state;
      return state;
    },
  },
});

export const updateItemCount = createSlice({
  name: "countItems",
  initialState: 0,
  reducers: {
    increaseCount: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { increase, decrease } = addItems.actions;
export const { add, removeByIndex, sumPrices } = items.actions;
export const { openOrClose } = openItemsModal.actions;
export const { increaseCount } = updateItemCount.actions;
