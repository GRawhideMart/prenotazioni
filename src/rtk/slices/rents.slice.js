import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RentsService from "../../services/rents.service";
import { RENTS } from "../../shared/latestRents";

export const fetchRents = createAsyncThunk("rents/fetchRents", async () => {
  const res = await RentsService.getAll();
  return res.data;
});

const rentsSlice = createSlice({
  name: "rents",
  initialState: RENTS,
  reducer: {
    getLatestRents: (state) => state,
  },
  extraReducers: {
    [fetchRents.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { getRents } = rentsSlice.actions;
export default rentsSlice.reducer;
