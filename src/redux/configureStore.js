import { createStore, combineReducers } from "redux";
import { Inventary } from "./reducers/inventary";
import { LatestRents } from "./reducers/latestRents";
import { SchedulerData } from "./reducers/schedulerData";
import { Styles } from "./reducers/styles";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      schedulerData: SchedulerData,
      latestRents: LatestRents,
      inventary: Inventary,
      styles: Styles
    })
  );

  return store;
};
