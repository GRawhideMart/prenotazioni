import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InventaryService from "../../services/inventary.service";

export const fetchInventary = createAsyncThunk(
  "inventary/fetchInventary",
  async () => {
    const res = await InventaryService.getAll();
    return res.data;
  }
);

const inventarySlice = createSlice({
  name: "inventary",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.unshift(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchInventary.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { addItem, deleteItem } = inventarySlice.actions;
export default inventarySlice.reducer;
