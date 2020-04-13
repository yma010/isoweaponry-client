import { RECEIVE_ALL_RENTALS } from '../actions/product_actions';
import { merge } from 'lodash';

export default function( state = {}, action) {
    Object.freeze(state);
    const newState;

    switch(action.type) {
        case RECEIVE_ALL_RENTALS:
            return merge({}, action.rentals)
        case RECEIVE_RENTAL:
            newState = merge({}, state);
            newState[action.rental._id] = action.rental;
            return newState;
        default:
            return state;
    };
}