import { takeEvery } from 'redux-saga/effects';
import actionTypes, { ActionType } from '../actionTypes';
import socket from '../socket';
import store from '../store';

socket.on('GET_PLAYERS_LIST', (data : Object) => {
    store.dispatch({
        type: actionTypes.GET_PLAYERS_LIST,
        payload: data,
    })
})

function* changeNicknameFunction(action : ActionType) {
   socket.emit(action.type, action.payload);
}

export default function* testSaga() {
   yield takeEvery(actionTypes.CHANGE_NICKNAME, changeNicknameFunction);
}
