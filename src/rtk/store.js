import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./slices/styles.slice";
import schedulerReducer from "./slices/schedulerData.slice";
import inventaryReducer from "./slices/inventary.slice";
import latestRentsReducer from "./slices/latestRents.slice";

const store = configureStore({
  reducer: {
    styles: styleReducer,
    scheduler: schedulerReducer,
    inventary: inventaryReducer,
    latestRents: latestRentsReducer,
  },
});

export default store;
