import socket from '../socket';
import store from '../store';
import actionTypes from '../actionTypes';

const initializeSocketListeners = () => {
    socket.onAny((event : keyof typeof actionTypes, ...args) => {
        store.dispatch({
            type: actionTypes[event],
            payload: args ? args[0] : undefined,
        })
    });
}

export default initializeSocketListeners;
