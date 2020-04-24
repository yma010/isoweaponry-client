import {combineReducers} from 'redux';

import ui_reducer from './ui_reducer';
import session_reducer from './session_reducer';
import { entities_reducer } from './entities_reducer';

const RootReducer = combineReducers({
    session: session_reducer,
    ui: ui_reducer,
    entities: entities_reducer
});

export default RootReducer; 