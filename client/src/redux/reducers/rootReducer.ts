import { combineReducers } from 'redux';
import lobbyReducer from './lobbyReducer';

const rootReducer = combineReducers({
    lobbyReducer,
});

export default rootReducer;