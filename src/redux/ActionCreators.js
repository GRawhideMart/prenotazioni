import * as Actions from './ActionTypes';

export const addBooking = (startDate, endDate, title, room) => ({
    type: Actions.ADD_BOOKING,
    payload: {
        startDate,
        endDate,
        title,
        room
    }
})