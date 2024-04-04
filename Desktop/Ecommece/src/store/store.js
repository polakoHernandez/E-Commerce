import { configureStore } from "@reduxjs/toolkit";
import {
  addItems,
  items,
  openItemsModal,
  updateItemCount,
} from "../store/slices";

export default configureStore({
  reducer: {
    totalItems: addItems.reducer,
    items: items.reducer,
    openItems: openItemsModal.reducer,
    countItems: updateItemCount.reducer,
  },
});
