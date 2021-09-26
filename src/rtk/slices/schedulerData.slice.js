import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SchedulerDataService from "../../services/schedulerData.service";

export const fetchSchedulerData = createAsyncThunk(
  "scheduler/fetchSchedulerData",
  async () => {
    const res = await SchedulerDataService.getAll();
    return res.data;
  }
);

const schedulerDataSlice = createSlice({
  name: "scheduler",
  initialState: [],
  reducers: {
    addBooking(state, action) {
      state.push(action.payload);
    },
    deleteAppointment(state, action) {
      return state.filter((appointment) => appointment.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchSchedulerData.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { addBooking, deleteAppointment } = schedulerDataSlice.actions;
export default schedulerDataSlice.reducer;
