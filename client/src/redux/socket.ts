import { io } from "socket.io-client";
import store from './store';
import actionTypes from './actionTypes';

const socket = io('192.168.0.30:3000');

export const initializeSocket = () => {
    socket.onAny((event : keyof typeof actionTypes, ...args) => {
        store.dispatch({
            type: actionTypes[event],
            payload: args ? args[0] : undefined,
        })
    });
};

export default socket;
