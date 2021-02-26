import { combineReducers } from 'redux';
import testReducer from './testReducer';
import lobbyReducer from './lobbyReducer';

const rootReducer = combineReducers({
    testReducer,
    lobbyReducer,
});

export default rootReducer;