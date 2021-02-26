import { takeEvery } from 'redux-saga/effects';
import actionTypes, { ActionType } from '../actionTypes';
import socket from '../socket';
import store from '../store';

socket.on('TEST_ACTION_SUCCESS', (data : string) => {
   store.dispatch({
      type: actionTypes.TEST_ACTION_SUCCESS,
      payload: data
   })
})

function* testSagaFunction(action : ActionType) {
   console.log('TEST SAGA');
   console.log(action);
   socket.emit(action.type, action.payload);
}

export default function* testSaga() {
   yield takeEvery(actionTypes.TEST_ACTION, testSagaFunction);
}
