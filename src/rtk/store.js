import { configureStore } from "@reduxjs/toolkit";
import schedulerReducer from "./slices/schedulerData.slice";
import inventaryReducer from "./slices/inventary.slice";
import rentsReducer from "./slices/rents.slice";
import resourcesReducer from "./slices/resources.slice";
import groupingReducer from "./slices/grouping.slice";

const store = configureStore({
  reducer: {
    scheduler: schedulerReducer,
    inventary: inventaryReducer,
    rents: rentsReducer,
    resources: resourcesReducer,
    groupings: groupingReducer,
  },
});

export default store;
