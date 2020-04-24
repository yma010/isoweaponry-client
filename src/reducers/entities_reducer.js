import {combineReducers} from 'redux';
import rental_reducer from './rental_reducer';

export const entities_reducer  = combineReducers({
    rentals: rental_reducer
});