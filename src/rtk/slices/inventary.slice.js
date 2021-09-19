import { createSlice } from "@reduxjs/toolkit";
import { INVENTARY } from "../../shared/inventary";

const inventarySlice = createSlice({
  name: "inventary",
  initialState: INVENTARY,
  reducers: {
    addItem(state, action) {
      state.unshift(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = inventarySlice.actions;
export default inventarySlice.reducer;
