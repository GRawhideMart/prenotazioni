import { createStore, combineReducers, applyMiddleware } from "redux";
import { Inventary } from "./reducers/inventary";
import { LatestRents } from "./reducers/latestRents";
import { SchedulerData } from "./reducers/schedulerData";
import { Styles } from "./reducers/styles";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      schedulerData: SchedulerData,
      latestRents: LatestRents,
      inventary: Inventary,
      styles: Styles,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
