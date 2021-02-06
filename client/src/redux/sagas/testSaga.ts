import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import axios from 'axios';

interface response {
   a: number,
}

const testApiCall = async () : Promise<response> => {
   const response = await axios.post('http://127.0.0.1:3000/', { testData: 'xxx' });
   return response.data;
}

function* testSagaFunction() {
    try {
       const response = yield call(testApiCall);
       yield put({type: actionTypes.TEST_ACTION_SUCCESS});
    } catch (e) {
       yield put({type: actionTypes.TEST_ACTION_FAILURE});
    }
 }

export default function* testSaga() {
    yield takeEvery(actionTypes.TEST_ACTION, testSagaFunction);
  }