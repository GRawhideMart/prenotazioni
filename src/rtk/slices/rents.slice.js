import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RentsService from "../../services/rents.service";

export const fetchRents = createAsyncThunk("rents/fetchRents", async () => {
  const res = await RentsService.getAll();
  return res.data;
});

const rentsSlice = createSlice({
  name: "rents",
  initialState: { rents: [], loading: false, errorMessage: "" },
  reducer: {
    getLatestRents: (state) => state,
  },
  extraReducers: {
    [fetchRents.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchRents.fulfilled]: (state, action) => {
      state.rents.push(action.payload);
    },
    [fetchRents.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
    },
  },
});

export const { getRents } = rentsSlice.actions;
export default rentsSlice.reducer;
