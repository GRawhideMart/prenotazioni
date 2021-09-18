import { createSlice } from "@reduxjs/toolkit";
import { RESOURCES } from "../../shared/rooms";

const resourcesSlice = createSlice({
  name: "resources",
  initialState: [RESOURCES],
  reducer: {
    getResources: (state) => state,
  },
});

export const { getResources } = resourcesSlice.actions;
export default resourcesSlice.reducer;
