import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INVENTARY } from "../../shared/inventary";

export const fetchInventary = createAsyncThunk(
  "inventary/fetchInventary",
  async () =>
    axios.get("http://localhost:8000/inventario").then((res) => res.data)
);

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
