import { SCHEDULERDATA } from '../../shared/schedulerData';
import { ADD_BOOKING } from '../ActionTypes';

export const SchedulerData = (state = SCHEDULERDATA, action) => {
    switch(action.type) {
        case ADD_BOOKING:
            var booking = action.payload;
            return state.concat(booking);
            
        default:
            return state;
    }
}