import { createSlice } from "@reduxjs/toolkit";
import { GROUPING } from "../../shared/rooms";

const groupingSlice = createSlice({
  name: "groupings",
  initialState: [GROUPING],
  reducer: {
    getGroupings: (state) => state,
  },
});

export const { getGroupings } = groupingSlice.actions;
export default groupingSlice.reducer;
