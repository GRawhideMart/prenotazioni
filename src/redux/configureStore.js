import { createStore, combineReducers, applyMiddleware } from "redux";

import { createForms } from 'react-redux-form';

import { Inventary } from "./reducers/inventary";
import { LatestRents } from "./reducers/latestRents";
import { SchedulerData } from "./reducers/schedulerData";
import { Styles } from "./reducers/styles";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      schedulerData: SchedulerData,
      latestRents: LatestRents,
      inventary: Inventary,
      styles: Styles,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
