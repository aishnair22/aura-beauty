import { combineReducers } from 'redux';
import sessionReducer from './session';

const rootReducer = combineReducers({
    entities: 'entitiesReducer',
    ui: 'uiReducer',
    errors: 'errorsReducer',
    session: sessionReducer
});

export default rootReducer