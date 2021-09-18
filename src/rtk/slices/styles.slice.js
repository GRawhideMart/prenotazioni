import { createSlice } from "@reduxjs/toolkit";
import { USESTYLES } from "../../shared/useStyles";

const styleSlice = createSlice({
  name: "styles",
  initialState: () => USESTYLES(),
  reducers: {
    getStyles: (state) => state,
  },
});

export const { getStyles } = styleSlice.actions;
export default styleSlice.reducer;
