import { RENTS } from '../../shared/latestRents';

export const LatestRents = (state = RENTS, action) => {
    switch(action.type) {
        default:
            return state;
    }
}