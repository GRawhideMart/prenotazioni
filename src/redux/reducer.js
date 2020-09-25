import { SCHEDULERDATA } from '../shared/schedulerData';
import { GROUPING, RESOURCES } from '../shared/rooms';
import { RENTS } from '../shared/latestRents';

export const initialState = {
    schedulerData: SCHEDULERDATA,
    resources: [ RESOURCES ],
    grouping: [ GROUPING ],
    latestRents: RENTS
}

export const Reducer = (state = initialState, action) => {
    return state;
}