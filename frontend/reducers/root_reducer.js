import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducers'

const rootReducer = combineReducers({
    entities: 'entitiesReducer',
    ui: 'uiReducer',
    errors: errorsReducer,
    session: sessionReducer
});

export default rootReducer