import { createSlice } from "@reduxjs/toolkit";
import { RENTS } from "../../shared/latestRents";

const latestRentsSlice = createSlice({
  name: "latestRents",
  initialState: RENTS,
  reducer: {
    getLatestRents: (state) => state,
  },
});

export const { getLatestRents } = latestRentsSlice.actions;
export default latestRentsSlice.reducer;
