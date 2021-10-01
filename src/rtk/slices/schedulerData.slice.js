import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SchedulerDataService from "../../services/schedulerData.service";

export const fetchSchedulerData = createAsyncThunk(
  "scheduler/fetchSchedulerData",
  async () => {
    const res = await SchedulerDataService.getAll();
    return res.data;
  }
);

export const createAppointment = createAsyncThunk(
  "scheduler/createBooking",
  async (data) => {
    // data is supposed to be an object
    const res = await SchedulerDataService.create(data);
    return res.data;
  }
);

export const removeAppointment = createAsyncThunk(
  "scheduler/removeBooking",
  async (id) => {
    const res = await SchedulerDataService.remove(id);
    return res.data;
  }
);

export const updateAppointment = createAsyncThunk(
  "scheduler/updateBooking",
  async (id, data) => {
    const res = await SchedulerDataService.update(id, data);
    return res.data;
  }
);

const schedulerDataSlice = createSlice({
  name: "scheduler",
  initialState: { schedulerData: [], loading: false, errorMessage: "" },
  reducers: {
    addBooking(state, action) {
      state.push(action.payload);
    },
    deleteAppointment(state, action) {
      return state.filter((appointment) => appointment.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchSchedulerData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSchedulerData.fulfilled]: (state, action) => {
      state.loading = false;
      state.schedulerData.push(action.payload);
    },
    [fetchSchedulerData.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage =
        action.error.message || "Couldn't fetch appointments";
    },
    [createAppointment.fulfilled]: (state, action) => {
      state.schedulerData.push(action.payload);
    },
    [removeAppointment.fulfilled]: (state, action) => {
      let index = state.schedulerData.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.schedulerData.splice(index, 1);
    },
    [updateAppointment.fulfilled]: (state, action) => {
      const index = state.schedulerData.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      console.log(state[index]);
      state.schedulerData[index] = {
        ...state.schedulerData[index],
        ...action.payload,
      };
    },
  },
});

export const { addBooking, deleteAppointment } = schedulerDataSlice.actions;
export default schedulerDataSlice.reducer;
