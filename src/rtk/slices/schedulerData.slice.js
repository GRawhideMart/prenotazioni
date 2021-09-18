import { createSlice } from "@reduxjs/toolkit";
import { SCHEDULERDATA } from "../../shared/schedulerData";

const schedulerDataSlice = createSlice({
  name: "scheduler",
  initialState: SCHEDULERDATA,
  reducers: {
    addBooking(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addBooking } = schedulerDataSlice.actions;
export default schedulerDataSlice.reducer;
