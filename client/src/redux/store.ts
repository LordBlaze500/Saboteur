import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './epics/rootEpic';

import initializeSocketListeners from './socketRequests/lobbySocket';

// const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer);//, applyMiddleware(epicMiddleware));

// epicMiddleware.run(rootEpic);

initializeSocketListeners();

export type storeType = ReturnType<typeof store.getState>;
export default store;
