import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import axios from 'axios';

function testApiCall() {
    return axios.post('http://127.0.0.1:3000/', { testData: 'xxx' });
}

function* testSagaFunction(action) {
    try {
       const response = yield call(testApiCall);
       console.log(response);
       yield put({type: actionTypes.TEST_ACTION_SUCCESS});
    } catch (e) {
       yield put({type: actionTypes.TEST_ACTION_FAILURE});
    }
 }

export default function* testSaga() {
    yield takeEvery(actionTypes.TEST_ACTION, testSagaFunction);
  }