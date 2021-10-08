// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import SchedulerDataService from "../../services/schedulerData.service";

// export const fetchSchedulerData = createAsyncThunk(
//   "scheduler/fetchSchedulerData",
//   async () => {
//     const res = await SchedulerDataService.getAll();
//     return res.data;
//   }
// );

// export const createAppointment = createAsyncThunk(
//   "scheduler/createBooking",
//   async (data) => {
//     // data is supposed to be an object
//     const res = await SchedulerDataService.create(data);
//     return res.data;
//   }
// );

// export const removeAppointment = createAsyncThunk(
//   "scheduler/removeBooking",
//   async (id) => {
//     const res = await SchedulerDataService.remove(id);
//     return res.data;
//   }
// );

// // export const updateAppointment = createAsyncThunk(
// //   "scheduler/updateBooking",
// //   async (id, data) => {
// //     const res = await SchedulerDataService.update(id, data);
// //     return res.data;
// //   }
// // );

// const schedulerDataSlice = createSlice({
//   name: "scheduler",
//   initialState: { schedulerData: [], loading: false, errorMessage: "" },
//   reducers: {
//     addBooking(state, action) {
//       state.schedulerData[0].push(action.payload);
//     },
//     deleteAppointment(state, action) {
//       return state.schedulerData.filter(
//         (appointment) => appointment.id !== action.payload
//       );
//     },
//     filter(state, action) {
//       return state.schedulerData.filter((item) => item % 2);
//     },
//     get() {
//       return state;
//     },
//   },
//   extraReducers: {
//     [fetchSchedulerData.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [fetchSchedulerData.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.schedulerData.push(action.payload);
//     },
//     [fetchSchedulerData.rejected]: (state, action) => {
//       state.loading = false;
//       state.errorMessage =
//         action.error.message || "Couldn't fetch appointments";
//     },
//     [createAppointment.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [createAppointment.fulfilled]: (state, action) => {
//       state.schedulerData.push(action.payload);
//       state.loading = false;
//     },
//     [createAppointment.rejected]: (state, action) => {
//       state.loading = false;
//       state.errorMessage = action.error.message || "Couldn't add appointment";
//     },
//     [removeAppointment.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [removeAppointment.fulfilled]: (state, action) => {
//       state.loading = false;
//       let index = state.schedulerData.findIndex(
//         ({ id }) => id === action.payload.id
//       );
//       state.schedulerData.splice(index, 1);
//     },
//     [removeAppointment.rejected]: (state, action) => {
//       state.errorMessage =
//         action.error.message || "Couldn't remove appointment";
//       state.loading = false;
//     },
//     // [updateAppointment.fulfilled]: (state, action) => {
//     //   const index = state.schedulerData.findIndex(
//     //     (appointment) => appointment.id === action.payload.id
//     //   );
//     //   console.log(state[index]);
//     //   state.schedulerData[index] = {
//     //     ...state.schedulerData[index],
//     //     ...action.payload,
//     //   };
//     // },
//   },
// });

// export const { addBooking, deleteAppointment } = schedulerDataSlice.actions;
// export default schedulerDataSlice.reducer;
