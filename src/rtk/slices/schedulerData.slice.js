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
    [createAppointment.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [removeAppointment.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [updateAppointment.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      console.log(state[index]);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
  },
});

export const { addBooking, deleteAppointment } = schedulerDataSlice.actions;
export default schedulerDataSlice.reducer;
