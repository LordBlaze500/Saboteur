import { createStore } from 'redux';
import { initializeSocket } from './socket';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

initializeSocket();

export type storeType = ReturnType<typeof store.getState>;
export default store;
