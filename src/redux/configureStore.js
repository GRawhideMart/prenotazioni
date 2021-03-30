import { createStore, combineReducers, applyMiddleware } from "redux";

import { createForms } from 'react-redux-form';

import { Inventary } from "./reducers/inventary";
import { LatestRents } from "./reducers/latestRents";
import { SchedulerData } from "./reducers/schedulerData";
import { Styles } from "./reducers/styles";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialForm } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      schedulerData: SchedulerData,
      latestRents: LatestRents,
      inventary: Inventary,
      styles: Styles,
      ...createForms({
        instrumentsRental: InitialForm
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
