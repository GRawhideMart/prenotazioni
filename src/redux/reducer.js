import { SCHEDULERDATA } from "../shared/schedulerData";
import { GROUPING, RESOURCES } from "../shared/rooms";
import { RENTS } from "../shared/latestRents";
import { INVENTARY } from "../shared/inventary";
import { USESTYLES } from "../shared/useStyles";

export const initialState = {
  schedulerData: SCHEDULERDATA,
  resources: [RESOURCES],
  grouping: [GROUPING],
  latestRents: RENTS,
  inventary: INVENTARY,
  styles: USESTYLES
};

export const Reducer = (state = initialState, action) => {
  return state;
};
