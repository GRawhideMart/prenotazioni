import { createSlice } from "@reduxjs/toolkit";
import { INVENTARY } from "../../shared/inventary";

const inventarySlice = createSlice({
  name: "inventary",
  initialState: INVENTARY,
  reducer: {
    getInventary: (state) => state,
  },
});

export const { getInventary } = inventarySlice.actions;
export default inventarySlice.reducer;
